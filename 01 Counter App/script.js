const counterValue = document.getElementById('counter');

function InCrement() {
    let value = parseInt(counterValue.innerText);
    value = value + 1;
    counterValue.innerText = value;
};

function DecreCment(){
    let value = parseInt(counterValue.innerHTML);
    value = value - 1;
    counterValue.innerHTML = value;
}

function Reset(){
    value = parseInt(counterValue.innerText);
    value = 0;
    counterValue.innerText = value;
}