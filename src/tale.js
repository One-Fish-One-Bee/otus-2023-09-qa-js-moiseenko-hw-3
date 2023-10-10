/*
// Стрелочная функция c конструцией switch
history_kolobok = (character_names) => {
    switch (character_names) {
        case 'дедушки':
        case 'зайчика':
            return `Я от ${character_names} ушёл!`
        case 'лисицы':
            return `А от ${character_names} не ушёл!`
        default:
            return `Кто вы такой ${character_names}?`
    }
}
*/

// Функция c конструкцией (if, if else)
function history_kolobok(character_names) {
    if (character_names === "дедушки" || character_names === "зайчика") {
        return `Я от ${character_names} ушёл!`
    } else if (character_names === "лисицы") {
        return `А от ${character_names} не ушёл!`
    } else {
        return `Кто вы такой ${character_names}?`
    }
}
console.log(`Задание №1`)
console.log(history_kolobok("дедушки"))
console.log(history_kolobok("зайчика"))
console.log(history_kolobok("лисицы"))
console.log(history_kolobok("кракозябра"))

/*
// Стрелочная функция c конструцией switch
newYear = (character_names) => {
    switch (character_names) {
        case 'Дед Мороз':
            return `${character_names}! ${character_names}! ${character_names}!`
        case 'Снегурочка':
            return `${character_names}! ${character_names}! ${character_names}!`
        default:
            return `Кто вы такой ${character_names}?`
    }
}
*/

// Функция c конструкцией (if, else)
function newYear(character_names) {
    if (character_names === "Дед Мороз" || character_names === "Снегурочка") {
        return `${character_names}! ${character_names}! ${character_names}!`
    } else {
        return `Кто вы такой ${character_names}?`
    }
}

//пустая строка
console.log(`Задание №2`)
console.log(newYear("Дед Мороз"))
console.log(newYear("Снегурочка"))
console.log(newYear("Буратино"))