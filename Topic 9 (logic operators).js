let user_name = prompt('Кто там', '');

if (user_name === 'Админ') {

    let pass = prompt('Пароль', '');

    if (pass === 'Я главный') {
        alert('Здраствуйте');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }


} else if (user_name === '' || user_name === null) {
    alert ('Отменено');
    } else  {
    alert ('Я вас не знаю');
}





