// Matrix Commands (for you to write!)

// You should modify the routines listed below to complete the assignment.
// Feel free to define any classes, global variables and helper routines that
// you need.
var ctm: number[][]
var num: number[]
num = [];
var temp_mat: number[][]
// set the current matrix to the identity
function init()
{
    ctm = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
}

// multiply the current matrix by the translation
function translate(x: number, y: number, z: number)
{
    temp_mat = [[1, 0, 0, x], [0, 1, 0, y], [0, 0, 1, z], [0, 0, 0, 1]];
    ctm = matrixMultiplication(ctm, temp_mat)
}

// multiply the current matrix by the scale
function scale(x: number, y: number, z: number)
{
    temp_mat = [[x, 0, 0, 0], [0, y, 0, 0], [0, 0, z, 0], [0, 0, 0, 1]];
    ctm = matrixMultiplication(ctm, temp_mat)
}

// multiply the current matrix by the rotation
function rotateX(angle: number)
{
    temp_mat = [[1, 0, 0, 0], [0, Math.cos(angle * Math.PI / 180), Math.sin(-1 * angle * Math.PI / 180), 0], [0, Math.sin(angle * Math.PI / 180), Math.cos(angle * Math.PI / 180), 0], [0, 0, 0, 1]];
    ctm = matrixMultiplication(ctm, temp_mat)
}

// multiply the current matrix by the rotation
function rotateY(angle: number)
{
    temp_mat = [[Math.cos(angle * Math.PI / 180), 0, Math.sin(angle * Math.PI / 180), 0], [0, 1, 0, 0], [Math.sin(-1 * angle * Math.PI / 180), 0, Math.cos(angle * Math.PI / 180), 0], [0, 0, 0, 1]];
    ctm = matrixMultiplication(ctm, temp_mat)
}

// multiply the current matrix by the rotation
function rotateZ(angle: number)
{
    temp_mat = [[Math.cos(angle * Math.PI / 180), Math.sin(-1 * angle * Math.PI / 180), 0, 0], [Math.sin(angle * Math.PI / 180), Math.cos(angle * Math.PI / 180), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    ctm = matrixMultiplication(ctm, temp_mat)
}

// print the current matrix
function print()
{
    // add code here!
    // use `console.log("something")` to print something to the browser console.
    console.log(ctm[0][0] + ", " + ctm[0][1] + ", " + ctm[0][2] + ", " + ctm[0][3])
    console.log(ctm[1][0] + ", " + ctm[1][1] + ", " + ctm[1][2] + ", " + ctm[1][3])
    console.log(ctm[2][0] + ", " + ctm[2][1] + ", " + ctm[2][2] + ", " + ctm[2][3])
    console.log(ctm[3][0] + ", " + ctm[3][1] + ", " + ctm[3][2] + ", " + ctm[3][3])
    // end with a blank line!
    console.log("")
}

// return the current matrix as an array of 16 numbers
// in row major order (i.e., elements 0..3 are row 1, 4..7 are row2,
// 8..11 are row3, and 12..15 are row4)
function currentMatrix() : number[]
{
    num = []
    for (var i = 0; i < 4; i++) {
        for (var k = 0; k < 4; k++) {
            num.push(ctm[i][k])
        }
    }
    return num
}
function matrixMultiplication(matrix1: number[][], matrix2: number[][]) : number[][] {
    var newNum: number[][]
    newNum = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    var sum = 0
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < 4; k++) {
                sum += matrix1[i][k] * matrix2[k][j]
            }
            newNum[i][j] = sum
            sum = 0
        }
    }
    return newNum
}
export {init, translate, scale, rotateX, rotateY, rotateZ, print, currentMatrix}
