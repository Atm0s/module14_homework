//3. Функция, которая создает пустой объект, но без прототипа
function createObj() {
	return Object.create(null);
}

// создаем объект
testObj = createObj();

// проверяем наличие прототипа
console.log(Object.getPrototypeOf(testObj));