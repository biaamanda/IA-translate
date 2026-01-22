let typedTexted = document.querySelector(".inputText");
let translatedText = document.querySelector(".translation");
let idiome = document.querySelector(".languages");

async function translate() {
  let url =
    "https://api.mymemory.translated.net/get?q=" +
    typedTexted.value +
    "&langpair=pt-BR|" +
    idiome.value;

  let response = await fetch(url);

  let data = await response.json();

  translatedText.textContent = data.responseData.translatedText;
}

function microphone() {
  let speech = window.webkitSpeechRecognition;

  let recognition = new speech();

  recognition.lang = "pt-BR";

  recognition.onresult = (event) => {
    let spokenText = event.results[0][0].transcript;

    typedTexted.textContent = spokenText;

    translate();
  };
  recognition.start();
}
