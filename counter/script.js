let count = 0;
const countDisplay = document.getElementById('count-display');

function updateDisplay() {
    countDisplay.textContent = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}
