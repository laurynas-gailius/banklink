let ul = document.querySelector("ul");
let listItems = ul.getElementsByTagName("li");
let form = document.getElementById("form");
let loginMethods = document.getElementById("loginMethods");
let otherMethods = document.getElementById("otherMethods");
let recipient = document.getElementById("recipient");
let heroCont = document.getElementById("heroCont");
let otherInfo = document.getElementById("otherInfo");
let smartIdCode = document.getElementById("smartIdCode");
let contactInfo = document.getElementById("contactInfo");
let showContacts = document.getElementById("showContacts");
let accounts = document.getElementById("accounts");
let accountSaving = document.getElementById("accountSaving");
let actionTitle = document.getElementById("actionTitle");
let accSwitch = document.getElementById("accSwitch");
let accForm = document.getElementById('accForm');
let successCont = document.getElementById('successCont');
let klixMark = document.getElementById('klixMark');
let contentHeader = document.getElementById('contentHeader');

const userId = document.getElementById('userId');
const personalCode = document.getElementById('personalCode');
const userPhone = document.getElementById("userPhone");

const selectedItem = ["selected", "text-black", "font-medium", "text-sm", "bg-gray-200", "py-1.5", "rounded-full", "px-3.5", "hover:cursor-auto"];
const defaultItem = ["text-gray-500", "font-medium", "text-sm", "bg-white", "py-1.5", "px-3.5", "rounded-full", "hover:text-black", "cursor-pointer"];

const selectedRadio = ["selected", "flex", "justify-center", "h-5", "w-5", "rounded-full", "bg-primary"];
const defaultRadio = ["flex", "justify-center", "h-5", "w-5", "rounded-full", "bg-white", "border", "border-gray-300"];

// Login method

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

loginMethods.addEventListener("click", function (e) {
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

loginMethods.addEventListener("click", function (e) {
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
        setTimeout(function() {
            showAccounts();
        }, 3500);
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

// Contacts 
showContacts.addEventListener("click", function (e) {
    contactInfo.style.display = 'block';
    showContacts.style.display = 'none';
})

// Smart-ID

function launchSmartId() {
    loginMethods.style.display = 'none';
    form.style.display = 'none';
    accForm.style.display = 'none';
    smartIdCode.style.display = 'block';
}

// Accounts
function showAccounts(){
    accForm.style.display = 'block';
    smartIdCode.style.display = 'none';
    actionTitle.textContent = "Payer";
    document.getElementById("titleIcon").src="img/person-icon.svg";
};

function validate() {
    if (accSwitch.checked) {
      phoneInput.style.display = 'block';
      accFormStatus = false;
    } else {
        phoneInput.style.display = 'none';
        accFormStatus = true;
    }
  };

  let accFormStatus = true;

  function checkAccFormInputs() {

    const userPhoneValue = userPhone.value.trim();

    if (accSwitch.checked) {
        if (userPhoneValue === '') {
            accFormStatus = false;
            setErrorFor(userPhone, 'Phone number cannot be blank');
        } else {
            accFormStatus = true;
            console.log('it worked!') 
        }
    }  
}


  accForm.addEventListener('submit', function (e) {
    e.preventDefault();
    checkAccFormInputs();
    if (accFormStatus === true) {
        launchSmartId();
        setTimeout(function() {
            showSuccess();
        }, 3500);
    }
});

function showSuccess() {
    smartIdCode.style.display = 'none';
    recipient.style.display = 'none';
    successCont.style.display = 'block';
    klixMark.style.display = 'none';
    contentHeader.style.display = 'none';
    // Time
    const timeH = document.getElementById('time')
    let timeSecond = 3;

    timeH.innerHTML = timeSecond;

    const countDown = setInterval (() => {
        timeSecond--;
        timeH.innerHTML = timeSecond;
    },1000) 

    setTimeout(function() {
        window.location.replace("https://www.airbaltic.com/lv-LT/index");
    }, 3000);
}

