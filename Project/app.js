// Document selectors
const cardForm = document.querySelector("#cardForm");
const main = document.querySelector("#main");
const second = document.querySelector("#second");
const cont = document.querySelector('#continue');

// Card selectors
const cardNum = document.querySelector("#cardNum");
const cardName = document.querySelector("#cardName");
const cardMonth = document.querySelector("#cardMonth");
const cardYear = document.querySelector("#cardYear");
const cardCvc = document.querySelector("#cardCvc");

// Form selectors
const formNum = document.querySelector('#number');
const formName = document.querySelector('#name');
const formMonth = document.querySelector('#month');
const formYear = document.querySelector('#year');
const formCvc = document.querySelector('#cvc');
const submit = document.querySelector('#submit');

// Selector objects
const num = {
    card: cardNum,
    form: formNum,
    placeholder: "0000 0000 0000 0000"
}
const name = {
    card: cardName,
    form: formName,
    placeholder: 'Jane Appleseed'
}
const month = {
    card: cardMonth,
    form: formMonth,
    placeholder: "00"
}
const year = {
    card: cardYear,
    form: formYear,
    placeholder: "00"
}
const cvc = {
    card: cardCvc,
    form: formCvc,
    placeholder: "000"
}

// Selector array
const formArray = [num, name, month, year, cvc];


// Submit event listener
cardForm.addEventListener('submit', function (e) {
    e.preventDefault();
    cardForm.classList.toggle('hide');
    second.classList.toggle('hide');
})
cont.addEventListener('click', function () {
    cardForm.classList.toggle('hide');
    second.classList.toggle('hide');
    formArray.forEach(elem => {
        elem.form.value = "";
        elem.card.innerText = elem.placeholder;
    })
})


// Create event listener for each item
formArray.forEach(elem => {
    elem.form.addEventListener('input', function () {
        if (elem.form.value === "") {
            elem.card.innerText = elem.placeholder;
        }
        else {
            elem.card.innerText = elem.form.value;
        }
    })
})



