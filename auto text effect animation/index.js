const containerEl = document.querySelector(".container")

const carreers = ["Web Designer", "Mobile Developer", "Freelancer", "Artist"];

let carreerIndex = 0

let characterIndex = 0

updateText()

function updateText(){

    characterIndex++;

    containerEl.innerHTML =
    ` <h1>I am ${carreers[carreerIndex].slice(0,1) === "A" ? "an" : "a"} ${carreers[carreerIndex].slice(0,characterIndex)}</h1> `;
    
    if(characterIndex === carreers [carreerIndex].length) {
        carreerIndex++;
        characterIndex = 0;
    }

    if(carreerIndex === carreers.length) {
        carreerIndex = 0;
    }

    setTimeout(updateText, 200);
}
