/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void{
  console.log(message);
}
//: void після showMessage вказує, що функція не повертає значення (або повертає undefined)

function calc(num1: number, num2: number): number{
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}
//: never після customError вказує, що функція ніколи не завершить виконання (тобто завершиться помилкою)
export {};