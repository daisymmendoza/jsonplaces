var item = localStorage.getItem("map");
console.log(item);
var list = localStorage.getItem("myList");
const myList = JSON.parse(list);
var i = Number(item);
var map = document.querySelector(".map");

function makeMap() {
    var item = myList[i];

    // Map
    var mapPlace = document.createElement('div');
    mapPlace.innerHTML = `<iframe src = "${item.map}" width=100% height=800px></iframe>`;
    mapPlace.className = "mapPlace";
    mapPlace.style.height = "100%";
    mapPlace.style.marginLeft = "35%";

    // Place image
    var img = document.createElement('img');
    img.src = `${item.image}`;
    img.style.width = "100%";
    img.id = "item-image";

    // Sidebar container
    var sidebar = document.createElement('div');
    sidebar.className = "sidebar";
    sidebar.style.width = "33%";
    sidebar.style.marginTop = "-800px";
    sidebar.style.paddingLeft = "10px";

    // Content of sidebar
    var content = document.createElement('div');
    content.className = "content";

    // Name of place
    var title = document.createElement('h1');
    title.innerHTML = `${item.name}`;

    // Address container
    var address = document.createElement('div');
    address.className = "address";

    // Address of place
    var ad = document.createElement('h3');
    ad.innerHTML = item.address;

    // Description of place
    const p = document.createElement('p');
    p.innerHTML = `${item.description}`;
    p.style.fontSize = "1.1em";

    map.append(mapPlace);
    map.append(sidebar);
    sidebar.append(img);
    sidebar.append(content);
    content.append(title);
    content.append(address);
    address.append(ad);
    content.append(p);
}

makeMap();