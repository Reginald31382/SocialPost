const circleArea = document.getElementById('circle-area');
let count = 1;

function addCircle() {
    const circle = document.createElement('div'); // <div></div>
    circle.classList.add('circle'); // <div class="circle"></div>
    circle.innerText = count; // <div class="circle">1</div>
    circleArea.append(circle);
    count++;
}

function toggleBackground() {
    const body = document.body;
    body.classList.toggle('white');
    body.classList.toggle('lightcoral');
}

function removeCircle(e) {
    e.target.remove();
}