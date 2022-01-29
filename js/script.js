//variables for elements
const name = document.getElementById('name');
const design = document.getElementById('design');
const color = document.getElementById('shirt-colors');
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

//email elements
const email = document.getElementById('email');
const emailSpan = document.getElementById('email-hint');
const nameSpan = document.getElementById('name-hint');


//name hint
name.addEventListener('input', (e) => {
    const nameEvent = e.target;
    if (nameEvent.getAttribute('type') === 'text') {
        if (nameEvent.value === "") {
            nameSpan.className = "name";
        } else {
            nameSpan.className = 'name-hint hint'
        }
    }
})

//email hint
email.addEventListener('input', (e) => {
    const emailInput = e.target
    if (emailInput.getAttribute('type') === 'email') {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailInput.value)) {
            emailSpan.className = 'email-hint hint';
        } else {
            emailSpan.className = 'email';
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
        console.log('error');
    }
})



//payment hint debit card
creditCard.addEventListener('input', (e) => {
    const creditCardEvent = e.target;
    if (creditCardEvent.getAttribute('id') === "exp-month") {
        console.log(1)
    } else if (creditCardEvent.getAttribute('id') === 'exp-year') {
        console.log(2)
    } else if (creditCardEvent.getAttribute('id') === 'cc-num') {
        if (/^([0-9]{13,16})$/.test(creditCardEvent.value)) { //fix
            creditSpan.className = 'cc-hint hint';
        } else if (creditCardEvent.value === '') {
            creditSpan.className = 'cc-hint hint';
        } else {
            creditSpan.className = 'cc';
        }
        console.log(3)
    } else if (creditCardEvent.getAttribute('id') === 'zip') {
        if (/^([0-9]{5})$/.test(creditCardEvent.value)) {
            zipSpan.className = 'zip-hint hint';
        } else if (creditCardEvent.value === '') {
            zipSpan.className = 'zip-hint hint';
        } else {
            zipSpan.className = 'zip';
        }
        console.log(4)
    } else if (creditCardEvent.getAttribute('id') === 'cvv') {
        if (/^([0-9]{3})$/.test(creditCardEvent.value)) {
            cvvSpan.className = 'cvv-hint hint';
        } else if (creditCardEvent.value === '') {
            cvvSpan.className = 'cvv-hint hint';
        } else {
            cvvSpan.className = 'cvv';
        }
        console.log(5)
    }
});



//Activity check box for adding how much it cost
registerForActivites.addEventListener('change', (e) => {
    checkboxs = e.target
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
name.focus();
console.log(name)
otherJobRole.style.display = "none";
color.style.display = "none";

//defferent disigns for shirts
design.addEventListener('change', (e) => {
    const designEvent = e.target;
    const colorText = document.getElementById('color')

    if (designEvent.textContent !== 'Select Theme') {
        color.style.display = "";
        colorText.value = "preSelect"
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
    if (e.target.id === "submit") {
        console.log('hi')
        form.innerHTML = "You Completed The Form!!!"
    }
})

console.log(jobRole.value)
console.log(otherJobRole);