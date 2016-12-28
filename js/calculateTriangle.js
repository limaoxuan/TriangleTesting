/**
 * Created by lee on 2016/12/20.
 */
//click event
$(document).ready(function () {
    $(".btn-primary").click(function (e) {
        e.preventDefault();
        var firstSideValue = $('.first-side').val();
        var secondSideValue = $('.second-side').val();
        var thirdSideValue = $('.third-side').val();
        if (isEmptyValue(firstSideValue, secondSideValue, thirdSideValue)) {
            console.log("number input");
            checkTriangle(firstSideValue, secondSideValue, thirdSideValue)
        }
    });
    $(".btn-danger").click(function (e) {
        e.preventDefault();
        clear();
    });
});
//reset value and canvas
function clear() {
    clearInputValues();
    clearCanvas();
}
//clear input value
function clearInputValues() {
    $('.first-side').val("");
    $('.second-side').val("");
    $('.third-side').val("");
}
//clear Canvas content
function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var cxt = canvas.getContext("2d");
    cxt.clearRect(0, 0, canvas.width, canvas.height);
}

//Start to check
// a is  first side
// b is  second side
// c is  third side
function checkTriangle(a, b, c) {
    if (isTriangle(a, b, c)) {
        checkTriangleType(a, b, c);
    } else {
        alert("This is not Triangle");
        clear();
    }
}
//To judge whether an triangle
// a is  first side
// b is  second side
// c is  third side
function isTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }
    return true;
}

//To judge an triangle type
// a is  first side
// b is  second side
// c is  third side
function checkTriangleType(a, b, c) {
    clearCanvas();
    console.log("a=" + a + " b=" + b + " c=" + c);
    if (isEquilateralTriangle(a, b, c)) {
        alert("This is a Equilateral Triangle");
        drawExampleEquilateralTriangle();
    } else if (isIsoscelesTriangle(a, b, c)) {
        alert("This is a Isosceles Triangle");
        drawExampleIsoscelesTriangle();
    } else {
        alert("This is a scalene Triangle");
        drawExampleScaleneTriangle();
    }
}
//To judge whether an equilateral triangle
// a is  first side
// b is  second side
// c is  third side
function isEquilateralTriangle(a, b, c) {
    if (a == b && b == c ) {
        return true;
    }
    return false;
}

//To judge whether an isosceles triangle
// a is  first side
// b is  second side
// c is  third side
function isIsoscelesTriangle(a, b, c) {
    if (a == b || a == c || b == c) {
        return true;
    }
    return false;
}

//Draw a Example:Equilateral Triangle
function drawExampleEquilateralTriangle() {
    var canvas = document.getElementById("canvas");
    var cxt = canvas.getContext("2d");
    cxt.beginPath();
    cxt.moveTo(100, 0);
    cxt.lineTo(0, 173);
    cxt.lineTo(200, 173);
    cxt.closePath();
    cxt.strokeStyle = "black";
    cxt.stroke();
}
//Draw a Example:Isosceles Triangle
function drawExampleIsoscelesTriangle() {
    var canvas = document.getElementById("canvas");
    var cxt = canvas.getContext("2d");
    cxt.beginPath();
    cxt.moveTo(100, 50);
    cxt.lineTo(50, 200);
    cxt.lineTo(150, 200);
    cxt.closePath();
    cxt.strokeStyle = "black";
    cxt.stroke();
}
//Draw a Example:Scalene Triangle
function drawExampleScaleneTriangle() {
    var canvas = document.getElementById("canvas");
    var cxt = canvas.getContext("2d");
    cxt.beginPath();
    cxt.moveTo(250, 50);
    cxt.lineTo(200, 200);
    cxt.lineTo(300, 300);
    cxt.closePath();
    cxt.strokeStyle = "black";
    cxt.stroke();
}

//To determine whether a value is empty
// firstSideValue is  first side value
// secondSideValue is  second side value
// thirdSideValue is  third side value
function isEmptyValue(firstSideValue, secondSideValue, thirdSideValue) {
    if (firstSideValue == "" || secondSideValue == "" || thirdSideValue == "") {
        alert("Please input slide number");
        return false;
    }
    return true;
}





