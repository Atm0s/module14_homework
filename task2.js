//2. Напишите функцию, которая принимает в качестве аргументов строку и объект,
//а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

 //функция проверки наличия свйоства в объекте
 function checkProps(str, obj) {
	 return str in obj
 }
 
 //создаем объект А
const objectA = {
	a: 1,
 }
 
 console.log(checkProps('a', objectA)); // true