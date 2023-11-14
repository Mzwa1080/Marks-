let submittBtn = document.getElementById('submitbtn')


function addValuee() {
    let inputValue = document.getElementById('inputt')
    let display = document.getElementById('output');
    let marks = +inputValue.value;



    switch (true) {

        case marks <= 49:
            display.textContent = 'You Failed!'
            break;
        case marks <= 50:
            display.textContent = 'You passed!'
            break;
        case marks <= 69:
            display.textContent = 'B'
            break;
        case marks <= 79:
            display.textContent = 'Distinction'
            break;
        case marks <= 89:
            display.textContent = 'B+'
            break;
        case marks <= 99:
            display.textContent = 'A'
            break;
        case marks == 100:
            display.textContent = 'A+'
            break;

        default:
            display.textContent = "Ayooo"
            break;
    }
}

submittBtn.addEventListener('click', addValuee)