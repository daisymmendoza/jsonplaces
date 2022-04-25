/*
const output = document.querySelector('.output');
const url = 'https://api.jsonbin.io/b/6244f3b7fdd14a0f467c535e/2';

const fetchProducts = async () => {
    output.innerHTML = '<div class = "loading"></div>';
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const resp = await fetch(`${url}?id=${id}`);
        const data = await resp.json();
        return data;
    } catch (error) {
        output.innerHTML = '<p class="error">There was an error</p>';
    }
};
*/

let output = document.querySelector(".output");
const url = 'places.json';
let myList = [];
let localData = localStorage.getItem("myList");

myList = JSON.parse(localStorage.getItem("myList"));
console.log(myList);
jsloader();


function jsloader() {
    fetch(url)
        .then((rep) => rep.json())
        .then((data) => {
            myList = data;
            maker();
            savetoStorage();
            dynamic();
        });
}

function maker() {
    if (document.body.contains(output)) {
        output.innerHTML = '';
        myList.forEach((el, index) => {
            makeList(el, index);
        });
    } else {
        dynamic();
    }
}


function makeList(item, index) {
    // Container for places
    const div = document.createElement('div');
    div.className = "div";

    // Images of places
    const img = document.createElement('img');
    img.src = `${item.image}`;
    img.style.width = "330px";
    img.style.height = "200px";
    img.className = "image";
    img.style.border = "5px solid rgb(81, 110, 119)";
    img.style.borderRadius = "3px";

    // Name of places
    const h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    h2.style.marginBottom = "60px";
    h2.style.fontFamily = "sans-serif";
    h2.style.textAlign = "center";
    h2.style.marginTop = "5%";
    h2.style.color = "rgb(81, 110, 119)";
    
    output.append(div);
    div.append(img);
    div.append(h2);
    savetoStorage();
}

function savetoStorage() {
    localStorage.setItem('myList', JSON.stringify(myList));
}

function dynamic() {
    var images = document.getElementsByClassName("image");
    for (let i = 0; i < images.length; i++) {
        console.log(images);
        images[i].addEventListener("click", function () {
            if (images[i] === images[i]) {
                openInNewTab('viewPlaces.html');
                localStorage.setItem("map", i);
            }
        });
    }
}

function openInNewTab(url) {
    const open = window.open(url, '_blank');
    open.focus();
}