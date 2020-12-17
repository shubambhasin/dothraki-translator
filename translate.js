var userInput = document.querySelector("#input-text");
var translateBtn = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output")

var clearInput = document.querySelector("#clear")
var api = "https://api.funtranslations.com/translate/dothraki.json";


const errorHandle = (error) => {
    return(
        console.log(error)
    )
}
translateBtn.addEventListener("click", function clickHandler() {
    var inputText = userInput.value
    

    fetch(`https://api.funtranslations.com/translate/dothraki.json?text=${inputText}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.contents.translated);
        outputDiv.innerHTML=data.contents.translated;
    })
    .catch(errorHandle)
})

clearInput.addEventListener("click", function clear() {
    console.log("hello");
    userInput.value="";
})