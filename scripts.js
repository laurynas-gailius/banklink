let ul = document.querySelector("ul");
let listItems = ul.getElementsByTagName("li");
let form = document.getElementById("form");
let loginMethods = document.getElementById("loginMethods");
let otherMethods = document.getElementById("otherMethods");
let recipient = document.getElementById("recipient");
let heroCont = document.getElementById("heroCont");
let otherInfo = document.getElementById("otherInfo");
let smartIdCode = document.getElementById("smartIdCode");


const userId = document.getElementById('userId');
const personalCode = document.getElementById('personalCode');

const selectedItem = ["selected", "text-black", "font-medium", "text-sm", "bg-gray-200", "py-1.5", "rounded-full", "px-3.5", "hover:cursor-auto"];
const defaultItem = ["text-gray-500", "font-medium", "text-sm", "bg-white", "py-1.5", "px-3.5", "rounded-full", "hover:text-black", "cursor-pointer"];

function loginMethodStyles() {
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].classList.contains('selected')) {
            listItems[i].classList.add(...selectedItem);
        } else {
            listItems[i].classList.add(...defaultItem);
        }
    }
};

let selectedMethod = 'smartId';

ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].className = '';
            listItems[i].classList.add(...defaultItem);
            e.target.className = '';
            e.target.classList.add(...selectedItem);
            selectedMethod = e.target.innerText;
            if (form.style.display === 'none') {
                form.style.display = 'block';
            }
            if (otherInfo.style.display === 'block') {
                otherInfo.style.display = 'none';
            }
        }
    }
});

ul.addEventListener("click", function (e) {
    if (e.target === document.getElementById("otherMethods")) {
        otherInfo.style.display = 'block';
        form.style.display = 'none';
    }
});

// Form
let formStatus = true;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
    if (formStatus === true) {
        console.log(`Method: ${selectedMethod}`);
        console.log(`User ID: ${userId.value}`);
        console.log(`Personal code: ${personalCode.value}`);
        launchSmartId();
    } 
});

function checkInputs() {

    const userIdValue = userId.value.trim();
    const personalCodeValue = personalCode.value.trim();

    if (userIdValue === '') {
        setErrorFor(userId, 'User ID cannot be blank');
        formStatus = false;
    }

    if (personalCodeValue === '') {
        setErrorFor(personalCode, 'Personal code cannot be blank');
        formStatus = false;
    } else {
        formStatus = true;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = 'block';
    small.innerText = message;
    input.classList.replace('border-gray-300','border-red-500');
}

// Smart-ID

function launchSmartId() {
    loginMethods.style.display = 'none';
    form.style.display = 'none';
    smartIdCode.style.display = 'block';
}