/*
// Стрелочная функция c конструцией switch
history_kolobok = (character_names) => {
    switch (character_names) {
        case 'дедушка':
            return `Я от дедушки ушёл!`
        case 'заяц':
            return `Я от зайчика ушёл!`
        case 'лиса':
            return `А от лисицы не ушёл!`
        default:
            return `${character_names} - я не видел!`
    }
}
*/

// Функция c конструкцией (if, if else)
function history_kolobok(character_names) {
    if (character_names === "дедушка") {
        return `Я от дедушки ушёл!`
    } else if (character_names === "заяц") {
        return `Я от зайчика ушёл!`
    } else if (character_names === "лиса") {
        return `А от лисицы не ушёл!`
    } else {
        return `${character_names} - я не видел!`
    }
}

console.log(`Задание №1`)
console.log(history_kolobok("дедушка"))
console.log(history_kolobok("заяц"))
console.log(history_kolobok("лиса"))
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
            return `А ${character_names}, мы не звали!`
    }
}
*/

// Функция c конструкцией (if, else)
function newYear(character_names) {
    if (character_names === "Дед Мороз" || character_names === "Снегурочка") {
        return `${character_names}! ${character_names}! ${character_names}!`
    } else {
        return `А ${character_names}, мы не звали!`
    }
}

//пустая строка
console.log(`Задание №2`)
console.log(newYear("Дед Мороз"))
console.log(newYear("Снегурочка"))
console.log(newYear("Буратино"))