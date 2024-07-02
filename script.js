const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const results = document.querySelector("#results-div");
const regex = /[\- ]/;

function check()
{
    if (userInput.value === "")
        alert("Please provide a phone number");
    else
    {
        if (parseInt(userInput.value, 10))
    }
}

checkBtn.addEventListener("click", check);