let password = '';
let files = [];

// Генерация пароля
function generatePassword() {
    password = Math.random().toString(36).slice(-8);
    document.getElementById('password-display').innerText = `Текущий пароль: ${password}`;
    sendPasswordToTelegram(password);
}

// Отправка пароля в Telegram
function sendPasswordToTelegram(password) {
    const chatId = '1209870239'; // Замените на ваш chat_id
    const token = '8155397401:AAHj7ltjdSw5ntW6y8XtOg0ZLHpOhjIpFsk'; // Замените на ваш Telegram Bot Token
    const message = `Ваш новый пароль: ${password}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
        .then(response => {
            if (!response.ok) throw new Error('Сетевая ошибка!');
            console.log('Пароль отправлен в Telegram');
        })
        .catch(error => console.error('Ошибка:', error));
}

// Добавление файла (эмуляция)
function addFile() {
    const fileName = `file_${new Date().getTime()}.txt`; // Имя файла
    files.push(fileName); // Добавляем файл в список

    const listItem = document.createElement('li');
    listItem.textContent = fileName;
    document.getElementById('file-list').appendChild(listItem);
    alert("Файл добавлен: " + fileName);
}

// Удаление файла (эмуляция)
function deleteFile() {
    if (files.length > 0) {
        files.pop(); // Удаляем последний файл
        const list = document.getElementById('file-list');
        list.removeChild(list.lastChild); // Удаляем последний элемент из списка
        alert("Последний файл удален!");
    } else {
        alert("Нет файлов для удаления!");
    }
}

// Таймер для генерации пароля каждые 5 минут
setInterval(generatePassword, 300000); // 5 минут в миллисекундах
window.onload = generatePassword; // Генерировать пароль сразу при загрузке
