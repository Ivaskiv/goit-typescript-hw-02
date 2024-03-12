/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
function showMessage(message) {
    console.log(message);
}
//: void після showMessage вказує, що функція не повертає значення (або повертає undefined)
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
export {};
//# sourceMappingURL=6.js.map