"use strict";

///////////////////////////////

const inputElement = document.querySelector("input");
const inputTextElement = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const titleElement = document.getElementById("title");
const meaningElement = document.getElementById("meaning");
const audioElement = document.getElementById("audio");
async function fetchAPI(word) {
  try {
    inputTextElement.style.display = "block";
    meaningContainer.style.display = "none";

    inputTextElement.innerText = `Searching for meaning of '${word}'`;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // word
    console.log(data[0].word);
    // meaning
    console.log(data[0].meanings[0].definitions[0].definition);
    //audio
    console.log(data[0].phonetics[0].audio);
    if (data[0].word) {
      console.log("ddd");
      inputTextElement.style.display = "none";
      meaningContainer.style.display = "block";
      titleElement.innerText = data[0].word;
      meaningElement.innerText = `${data[0].meanings[0].definitions[0].definition}`;
      audioElement.src = data[0].phonetics[0].audio;
    } else {
      console.log("ff");
      inputTextElement.style.display = "none";
      meaningContainer.style.display = "block";
      titleElement.innerText = word;
      meaningElement.innerText = `please enter correct word `;
    }
  } catch (error) {
    console.log("error");
    inputTextElement.innerText = `please enter correct word `;
  }
}

inputElement.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
