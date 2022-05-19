let ul = document.querySelector("ul");
let listItems = ul.getElementsByTagName("li");
let form = document.getElementById("form");
let loginMethods = document.getElementById("loginMethods");
let recipient = document.getElementById("recipient");
let heroCont = document.getElementById("heroCont");
let otherInfo = document.getElementById("otherInfo");

const selectedItem = ["selected", "text-black", "font-medium", "text-sm", "bg-gray-200", "py-1.5", "rounded-full", "px-3.5", "hover:cursor-auto"];
const defaultItem = ["text-gray-500", "font-medium", "text-sm", "bg-white", "py-1.5", "px-3.5", "rounded-full", "hover:text-black", "cursor-pointer"];

function loginMethodStyles(){
    for (let i = 0; i < listItems.length; i++){
        if(listItems[i].classList.contains('selected')){
            listItems[i].classList.add(...selectedItem);
        } else {
            listItems[i].classList.add(...defaultItem);
        }
    }
};

ul.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        for (let i = 0; i < listItems.length; i++){
            listItems[i].className = '';
            listItems[i].classList.add(...defaultItem);
            e.target.className = '';
            e.target.classList.add(...selectedItem);
            if(form.style.display === 'none'){
                form.style.display = 'block';
            }
            if(otherInfo.style.display === 'block'){
                otherInfo.style.display = 'none';
            }
        }
    }
});

ul.addEventListener("click", function(e) {
    if(e.target === document.getElementById("otherMethods")) {
        otherInfo.style.display = 'block';
        form.style.display = 'none';
    }
});
