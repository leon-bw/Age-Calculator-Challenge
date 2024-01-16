const day = document.querySelector('#D');
const month = document.querySelector('#M');
const year = document.querySelector('#Y');

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

const days = document.querySelector('#days');
const months = document.querySelector('#months');
const years = document.querySelector('#years');

const dob = document.querySelector('.birthday');

const yearsOld = currentYear - `${year.value}`
const monthsOld = currentMonth - `${month.value}`
const daysOld = currentDay - `${day.value}`

const date = new Date();



function calcYears() {
    const years = document.querySelector('#years');
    if (year.value === '') {
        displayError(year, 'This field is required')
    } else if (currentYear < year.value) {
        displayError(year, 'Must be in the past') 
    } else {
        success(year);
        const yearsOld = currentYear - `${year.value}`
        years.innerText = yearsOld;
    }
}

function calcMonths() {
    const months = document.querySelector('#months');
    if (month.value === '') {
        displayError(month, 'This field is required')
    } else if (month.value > 12 || month.value <= 0) {
        displayError(month, 'Must be a valid month')
    } else {
        success(month);
        const monthsOld = currentMonth - `${month.value}`
        months.innerText = monthsOld;
    }
}

function calcDays() {
    const days = document.querySelector('#days');
    if (day.value === '') {
        displayError(day, 'This field is required')
    } else if (day.value > 31 || day.value <= 0) {
        displayError(day, 'Must be a valid day')
    } else {
        success(day);
        const daysOld = currentDay - `${day.value}`
        days.innerText = daysOld;
    }
}

dob.addEventListener('submit', (e) => {
    e.preventDefault();
    // date - new Date(`${yearsOld}, ${monthsOld}, ${daysOld}`);
    calcYears();
    calcMonths();
    calcDays();   
});


function displayError(input, message) {
    const dobInput = input.parentElement;
    dobInput.className = 'date error';
    const small = dobInput.querySelector('small');
    small.innerText = message;
}

function success(input) {
    const dateInput = input.parentElement;
    dateInput.className = 'date'; 
}

// function numOfDays(daysOld) {
//     if (daysOld.value < 0) {
//         daysOld + 30
//         days.innerText = daysOld;
//     }
// }





    

