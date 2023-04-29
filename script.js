function toggleFlip(element) {
    element.classList.toggle('active');
    const sectionId = element.closest('.section').id;
    document.getElementById(sectionId).classList.toggle('active');
}


function checkPrime() {
    const number = document.getElementById("number").value;
    const result = document.getElementById("result");

    if (isPrime(number)) {
        result.textContent = `${number} is a prime number.`;
    } else {
        result.textContent = `${number} is not a prime number.`;
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}
