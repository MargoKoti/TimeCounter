const btnSave = document.querySelector('.save');
const btnSettings = document.querySelector('.settingsBtn');
const Settings = document.querySelector('.settings');

const nameOfEvent = document.querySelector('.event-name');
const imageSection = document.querySelector('.imageFront');


const eventName = document.getElementById('event-name');
const eventDay = document.getElementById('event-day');
const eventMonth = document.getElementById('event-month');
const eventYear = document.getElementById('event-year');
const eventImage = document.getElementById('event-image');





const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minuteCount = document.querySelector('.minute-count');
const secondsCount = document.querySelector('.seconds-count');


const eventSpan = document.querySelector('.event');

let usersTime;




const setTime = () => {

    const today = new Date();
    const result = usersTime - today;


    const days = Math.floor(result / 1000 / 60 / 60 / 24);
    const hours = Math.floor(result / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(result / 1000 / 60) % 60;
    const seconds = Math.floor(result / 1000) % 60;

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minuteCount.textContent = minutes;
    secondsCount.textContent = seconds;

}

const updateApp = () => {
    eventSpan.textContent = eventName.value;
    usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);
    imageSection.style.backgroundImage = `url('${eventImage.value}')`;


    setTime();
}

const shSettings = () => {
    Settings.classList.toggle('active');



}




btnSave.addEventListener('click', updateApp);
btnSettings.addEventListener('click', shSettings);

updateApp();
setInterval(setTime, 1000);