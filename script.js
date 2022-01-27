alert("Not responsive. Please view on 1920x1080 monitor.");

let countOne = 9;
let countTwo = 12;
let countThree = 9;

document.getElementById("button-1").onclick = () => {
    countOne++;
    document.getElementById("likes-1").innerText = countOne + " likes(s)";
}

document.getElementById("button-2").onclick = () => {
    countTwo++;
    document.getElementById("likes-2").innerText = countTwo + " likes(s)";
}

document.getElementById("button-3").onclick = () => {
    countThree++;
    document.getElementById("likes-3").innerText = countThree + " likes(s)";
}