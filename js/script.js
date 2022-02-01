//variables for elements
const names = document.getElementById('name');
const design = document.getElementById('design');
const color = document.getElementById('shirt-colors');
const colorOptions = document.getElementById('color')
const colorChild = document.getElementById('color').children
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const registerForActivites = document.getElementById('activities-box');
let cost = 0;
const total$ = document.getElementById('activities-cost');
const form = document.getElementById('form')

//pay variables elements
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const payment = document.getElementById('payment');
creditCard.style.display = "none";
paypal.style.display = "none";
bitcoin.style.display = "none";
const creditSpan = document.getElementById('cc-hint');
const zipSpan = document.getElementById('zip-hint')
const cvvSpan = document.getElementById('cvv-hint')
const credit = document.getElementById('cc-num');
const zip = document.getElementById('zip')
const cvv = document.getElementById('cvv')
const expMonth = document.getElementById("exp-month")
const expYear = document.getElementById("exp-year")

//email elements
const email = document.getElementById('email');
const emailSpan = document.getElementById('email-hint');
const nameSpan = document.getElementById('name-hint');


//name hint
names.addEventListener('input', (e) => {
    const nameEvent = e.target;
    if (nameEvent.getAttribute('type') === 'text') {
        if (nameEvent.value === "") {
            nameSpan.className = "name";
            names.className = 'not-valid error'
        } else {
            nameSpan.className = 'name-hint hint'
            names.className = 'error-border'
        }
    }
})

//email hint
email.addEventListener('input', (e) => {
    const emailInput = e.target
    if (emailInput.getAttribute('type') === 'email') {
        if (/^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z]{2}))?)$/.test(emailInput.value)) {
            emailSpan.className = 'email';
            email.className = 'not-valid error'
        } else {
            emailSpan.className = 'email-hint hint';
            email.className = 'error-border'
        }

    }
});



//payment hint credit card
creditCard.style.display = "";
payment.addEventListener('change', (e) => {
    const paymentEvent = e.target;
    if (paymentEvent.value === 'credit-card') {
        creditCard.style.display = "";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
    } else if (paymentEvent.value === 'paypal') {
        paypal.style.display = "";
        bitcoin.style.display = "none  .";
        creditCard.style.display = "none";
    } else if (paymentEvent.value === 'bitcoin') {
        bitcoin.style.display = "";
        creditCard.style.display = "none";
        paypal.style.display = "none";
    } else {
        console.log('not-valid error');
    }
})



//payment hint debit card
creditCard.addEventListener('input', (e) => {
    const creditCardEvent = e.target;
    if (expMonth.value !== "0") {
        expMonth.className = 'error-border'
    } else {
        expMonth.className = 'not-valid error'
    }
    if (expYear.value !== '0') {
        expYear.className = 'error-border'
    } else {
        expYear.className = 'not-valid error'
    }
    if (creditCardEvent.getAttribute('id') === 'cc-num') {
        if (/^([0-9]{13,16})$/.test(creditCardEvent.value)) { //fix
            credit.className = "error-border"
            creditSpan.className = 'cc-hint hint';
        } else if (creditCardEvent.value === '') {
            credit.className = "not-valid error"
            creditSpan.className = 'cc';
        } else {
            credit.className = "not-valid error"
            creditSpan.className = 'cc';
        }
        console.log(3)
    } else if (creditCardEvent.getAttribute('id') === 'zip') {
        if (/^([0-9]{5})$/.test(creditCardEvent.value)) {
            zip.className = "error-border"
            zipSpan.className = 'zip-hint hint';
        } else if (creditCardEvent.value === '') {
            zip.className = "not-valid error"
            zipSpan.className = 'zip';
        } else {
            zip.className = "not-valid error"
            zipSpan.className = 'zip';
        }
        console.log(4)
    } else if (creditCardEvent.getAttribute('id') === 'cvv') {
        if (/^([0-9]{3})$/.test(creditCardEvent.value)) {
            cvv.className = "error-border"
            cvvSpan.className = 'cvv-hint hint';
        } else if (creditCardEvent.value === '') {
            cvv.className = "not-valid error"
            cvvSpan.className = 'cvv';
        } else {
            cvv.className = "not-valid error"
            cvvSpan.className = 'cvv';
        }
        console.log(5)
    }
});

// Activity check box for adding how much it cost
registerForActivites.addEventListener('change', (e) => {
    const checkboxs = e.target
    let realCost = 0;
    if (checkboxs.type === 'checkbox') {
        if (checkboxs.checked) {
            cost += realCost + parseInt(checkboxs.getAttribute('data-cost'));
            console.log(cost)
            total$.textContent = `Total: $${cost}.00`
        } else {
            cost += realCost - parseInt(checkboxs.getAttribute('data-cost'));
            console.log(cost)
            total$.textContent = `Total: $${cost}.00`
        }
    }
});





console.log(registerForActivites);
console.log(total$);
names.focus();
console.log(names)
otherJobRole.style.display = "none";
colorOptions.disabled = true;

//defferent disigns for shirts
design.addEventListener('change', (e) => {
    const designEvent = e.target;
    const colorText = document.getElementById('color')
    //fixed issue
    if (designEvent.textContent !== 'Select Theme') {
        colorOptions.disabled = false;
        if (designEvent.value === 'js puns') {
            colorText.value = "cornflowerblue"
        } else if (designEvent.value === 'heart js') {
            colorText.value = "tomato"
        } else {
            console.log('oops')
        }

        console.log(colorText.options[0])
        //.prop('val','preSelect');
        for (i = 1; i <= colorChild.length - 1; i++) {
            const valid = colorChild[i].getAttribute('data-theme');
            valueDesign = designEvent.value;
            if (designEvent.value === valid) {
                colorChild[i].style.display = "";
            } else {
                colorChild[i].style.display = "none";
            }
        }
    } else if (designEvent.textContent !== 'Theme - JS Puns') {

    }
});


//job-role text box
jobRole.addEventListener('change', (e) => {
    const jobRoleEvent = e.target;
    if (jobRoleEvent.value === 'other') {
        otherJobRole.style.display = "";
    } else {
        otherJobRole.style.display = "none";
    }
});

//submit 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (expMonth.value !== "0") {
        expMonth.className = 'valid'
    } else {
        expMonth.className = 'not-valid error'
    }
    if (expYear.value !== '0') {
        expYear.className = 'valid'
    } else {
        expYear.className = 'not-valid error'
    }
    if (/^([0-9]{13,16})$/.test(credit.value)) { //fix

        credit.className = "valid"
        creditSpan.className = 'cc-hint hint';
    } else if (credit.value === '') {
        credit.className = "not-valid error"
        creditSpan.className = 'cc';
    } else {
        credit.className = "not-valid error"
        creditSpan.className = 'cc';
    }
    if (/^([0-9]{5})$/.test(zip.value)) {
        zip.className = "valid"
        zipSpan.className = 'zip-hint hint';
    } else if (zip.value === '') {
        zip.className = "not-valid error"
        zipSpan.className = 'zip';
    } else {
        zip.className = "not-valid error"
        zipSpan.className = 'zip';
    }
    if (/^([0-9]{3})$/.test(cvv.value)) {
        cvv.className = "valid"
        cvvSpan.className = 'cvv-hint hint';
    } else if (cvv.value === '') {
        cvv.className = "not-valid error"
        cvvSpan.className = 'cvv';
    } else {
        cvv.className = "not-valid error"
        cvvSpan.className = 'cvv';
    }
    console.log(5)
    if (/^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z]{3}))?)$/.test(email.value)) {
        email.className = 'valid'
        emailSpan.className = 'email-hint hint';
    } else if (email.value === "") {
        email.className = 'not-valid error'
        emailSpan.className = 'email';
    } else {
        email.className = 'not-valid error'
        emailSpan.className = 'email';
    }
    if (names.value === "") {
        names.className = 'not-valid error'
        nameSpan.className = "name";
    } else {
        names.className = 'valid'
        nameSpan.className = 'name-hint hint'
    }
    if (total$.textContent === 'Total: $0' || total$.textContent === 'Total: $0.00') {
        registerForActivites.className = 'activities-box not-valid error'
    } else {
        registerForActivites.className = 'activities-box valid'
    } total$.textContent !== 'Total: $0.00'
    if (zipSpan.className === 'zip-hint hint' && cvvSpan.className === 'cvv-hint hint' && total$.textContent !== 'Total: $0' && total$.textContent !== 'Total: $0.00' && nameSpan.className === "name-hint hint" && creditSpan.className === "cc-hint hint" && emailSpan.className === "email-hint hint" && expMonth.value !== "0" && expYear.value !== "0" ) {
        console.log('hi')
        form.innerHTML = "You Completed The Form!!!"
    } else {
        console.log('oops')
    }
})

console.log(jobRole.value)
console.log(otherJobRole);