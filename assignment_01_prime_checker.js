const readlineSync = require("readline-sync");

// Function to check if a number is prime
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Main function
function main() {
    const number = readlineSync.questionInt("Enter a number: ");

    if (isPrime(number)) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is NOT a prime number.");
    }
}

main();