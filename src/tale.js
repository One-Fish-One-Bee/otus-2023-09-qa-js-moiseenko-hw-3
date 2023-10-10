/*
// Стрелочная функция c конструцией switch
history_kolobok = (character_names) => {
    switch (character_names) {
        case 'дедушки':
        case 'зайчика':
            console.log(`Я от ${character_names} ушёл!`)
            break;
        case 'лисицы':
            console.log(`А от ${character_names} не ушёл!`)
            break;
        default:
            console.log(`Кто вы такой ${character_names}?`)
    }
}
*/

// Функция c конструкцией (if, if else)
function history_kolobok(character_names) {
    if (character_names === "дедушки" || character_names === "зайчика") {
        console.log(`Я от ${character_names} ушёл!`)
    } else if (character_names === "лисицы") {
        console.log(`А от ${character_names} не ушёл!`)
    } else {
        console.log(`Кто вы такой ${character_names}?`)
    }
}

history_kolobok("дедушки")
history_kolobok("зайчика")
history_kolobok("лисицы")
history_kolobok("кракозябра")

/*
// Стрелочная функция c конструцией switch
newYear = (character_names) => {
    switch (character_names) {
        case 'Дед Мороз':
            console.log(`${character_names}! ${character_names}! ${character_names}!`)
            break;
        case 'Снегурочка':
            console.log(`${character_names}! ${character_names}! ${character_names}!`)
            break;
        default:
            console.log(`Кто вы такой ${character_names}?`)
    }
}
*/

// Функция c конструкцией (if, else)
function newYear(character_names) {
    if (character_names === "Дед Мороз" || character_names === "Снегурочка") {
        console.log(`${character_names}! ${character_names}! ${character_names}!`)
    } else {
        console.log(`Кто вы такой ${character_names}?`)
    }
}

newYear("Дед Мороз")
newYear("Снегурочка")
newYear("Буратино")