



let visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
    visitCount = 0;
}
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount.toString());
console.log(`Количество посещений: ${visitCount}`);


localStorage.setItem('lastMessage', 'Hello again');
const savedMessage = localStorage.getItem('lastMessage');
if (savedMessage) {
    console.log(`Последнее сообщение: ${savedMessage}`);
}


const userColor = 'blue'; 
localStorage.setItem('favoriteColor', userColor);


const savedColor = localStorage.getItem('favoriteColor');
if (savedColor) {
    console.log(`Ваш любимый цвет: ${savedColor}`);
}


const userName = 'Алексей';
sessionStorage.setItem('userName', userName);
console.log(`Имя пользователя (sessionStorage): ${sessionStorage.getItem('userName')}`);


if (!sessionStorage.getItem('sessionStartTime')) {
    sessionStorage.setItem('sessionStartTime', Date.now().toString());
}

const startTime = parseInt(sessionStorage.getItem('sessionStartTime'));
const currentTime = Date.now();
const sessionDuration = Math.floor((currentTime - startTime) / 1000);
console.log(`Вы находитесь на странице: ${sessionDuration} секунд`);

let actions = JSON.parse(localStorage.getItem('actionsHistory')) || [];
const newAction = Действие ${actions.length + 1};
actions.push(newAction);
localStorage.setItem('actionsHistory', JSON.stringify(actions));
console.log('История действий:', actions);


function clearLocalStorageItem(key) {
    localStorage.removeItem(key);
    console.log(`Ключ "${key}" удалён из localStorage`);
}




const soundSettings = { volume: 7, muted: false };
localStorage.setItem('soundSettings', JSON.stringify(soundSettings));

const loadedSettings = JSON.parse(localStorage.getItem('soundSettings'));
if (loadedSettings) {
    console.log(`Громкость: ${loadedSettings.volume}`);
    console.log(`Без звука: ${loadedSettings.muted}`);
}


if (!localStorage.getItem('firstVisit')) {
    console.log('Welcome! Это ваш первый визит!');
    localStorage.setItem('firstVisit', 'true');
} else {
    console.log('С возвращением!');
}


let cart = JSON.parse(localStorage.getItem('cart')) || [];
const newProduct = Товар ${cart.length + 1};
cart.push(newProduct);
localStorage.setItem('cart', JSON.stringify(cart));

console.log('Товары в корзине:');
cart.forEach((product, index) => {
    console.log(`${index + 1}. ${product}`);
});



const lastScreen = 'Профиль пользователя';
localStorage.setItem('lastViewedScreen', lastScreen);


const savedScreen = localStorage.getItem('lastViewedScreen');
if (savedScreen) {
    console.log(`Возвращаемся к последнему просмотренному экрану: ${savedScreen}`);
}


function getSafeLocalStorageItem(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Ошибка при чтении ключа "${key}":`, error);
        return null;
    }
}


const safeData = getSafeLocalStorageItem('someKey');
if (safeData) {
    console.log('Данные загружены:', safeData);
} else {
    console.log('Данные отсутствуют или повреждены');
}


let actionCounter = parseInt(sessionStorage.getItem('actionCounter')) || 0;
actionCounter++;
sessionStorage.setItem('actionCounter', actionCounter.toString());

if (actionCounter > 5) {
    sessionStorage.clear();
    console.log('Превышен лимит действий. sessionStorage очищен.');
} else {
    console.log(`Действие ${actionCounter} из 5`);
}


let eventLog = JSON.parse(localStorage.getItem('eventLog')) || [];

function addToEventLog(description) {
    const event = {
        time: new Date().toISOString(),
        description: description
    };
    
    eventLog.push(event);
    localStorage.setItem('eventLog', JSON.stringify(eventLog));
    
    
    if (eventLog.length > 10) {
        eventLog = eventLog.slice(-10);
        localStorage.setItem('eventLog', JSON.stringify(eventLog));
    }
}

addToEventLog('Пользователь зашёл на страницу');
addToEventLog('Пользователь добавил товар в корзину');

console.log('Лог событий:', eventLog);

