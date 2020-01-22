const outputSection = document.querySelector("#output");
const favoriteThing = document.querySelector("#favoriteThing");
const purchaseLocation = document.querySelector("#purchaseLocation");
const saveButton = document.querySelector("#saveButton")

const outputMessage = (event) => {
    outputSection.innerHTML += `
    <p>
    I can purchase ${favoriteThing.value} at ${purchaseLocation.value}.
    </p>
    `
    favoriteThing.value = "";
    favoriteThing.focus();
    purchaseLocation.value = "";
}

saveButton.addEventListener("click", outputMessage)