

const buttonCountPlus = document.querySelector("[data-action='increment']");
const buttonCountMinus = document.querySelector("[data-action='decrement']");
const resultEl = document.querySelector('#value')

let counterValue = 0;

const increment = () => {
    counterValue += 1;

    resultEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    resultEl.textContent = counterValue;
};

buttonCountMinus.addEventListener('click', decrement);
buttonCountPlus.addEventListener('click',increment );