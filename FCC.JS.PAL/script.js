const userInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkIfPalindrome = input => {
    const initialInput = input;

    // No Value Entered
    if (input === '') {
        alert("please input a value");
        return;
    }

    // clear previous input
    result.replaceChildren();

    // check for palindrome
    const lowerCaseInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMessage = `${initialInput} ${lowerCaseInput === [...lowerCaseInput].reverse().join('') ? 'is' : 'is not'
      } a palindrome.`;

    // display message
    const displayMessage = document.createElement("p");
    displayMessage.className = 'user-input';
    displayMessage.innerHTML = resultMessage;
    result.appendChild(displayMessage);

    result.classList.remove("hidden");
};

button.addEventListener("click", () => {
    checkIfPalindrome(userInput.value);
    userInput.value = '';
});