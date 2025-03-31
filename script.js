const url = "https://jsonplaceholder.typicode.com/posts/1";
const btnE1 = document.getElementById("btn");
const outputE1 = document.getElementById("output");

let callback = function () {
    return url;
};

async function getData(callback) {
    let url = callback();
    let response = await fetch(url);
    let data = await response.json();
    localStorage.setItem("data", JSON.stringify(data)); // Corrected "Stringify" to "stringify"
}

getData(callback);

btnE1.addEventListener('click', () => { // Corrected "addEventListiner" to "addEventListener"
    let userdata = JSON.parse(localStorage.getItem("data"));
    outputE1.textContent = userdata.title; // Pretty print the object
});

//your JS code here. If required.
