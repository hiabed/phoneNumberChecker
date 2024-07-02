const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const results = document.querySelector("#results-div");
const regex = /[\- ()]/;

function check()
{
    if (userInput.value === "")
        alert("Please provide a phone number");
    else
    {
        
    }
}

checkBtn.addEventListener("click", check);