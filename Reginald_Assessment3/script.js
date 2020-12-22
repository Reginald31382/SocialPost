const circleArea = document.getElementById('box');
let count = 1;

function addCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.innerText = count;
    circleArea.append(circle);
    count++;
}

function toggleBackground() {
    const body = document.body;
    body.classList.toggle('white');
    body.classList.toggle('lightcoral');
}

function removeBox(e) {
    e.target.remove();
}