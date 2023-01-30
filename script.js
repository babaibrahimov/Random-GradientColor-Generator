let body = document.querySelector('body');
let gradientBox = document.querySelector('.gradient-box');
let output = document.querySelector('.output input');
let generateBtn = document.getElementById('btn');
let copyBtn = document.getElementById('copy');

let hexString = "0123456789abcdef"

let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)]
    }
    return hexCode
}

let Generate = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor()
    let deg = Math.floor(Math.random() * 360)
    body.style.background = `linear-gradient(${deg}deg, ${colorOne}, ${colorTwo})`;
    gradientBox.style.background = `linear-gradient(${deg}deg, ${colorOne}, ${colorTwo})`;
    output.value = `background: linear-gradient(${deg}deg, ${colorOne}, ${colorTwo})`;
}

let Copy = () => {
    var copyText = output;
    var copy = output.value;
    if(copy != ""){
        copyText.select()
        copyText.setSelectionRange(0, 9999)
        document.execCommand('copy')
        copyBtn.classList.remove("ri-file-copy-line")
        copyBtn.classList.add("ri-file-copy-fill")
        output.value = "Copied!"
        setTimeout(() => copyBtn.classList.remove("ri-file-copy-fill"), 1000)
        setTimeout(() => copyBtn.classList.add("ri-file-copy-line"), 1000)
        setTimeout(() => output.value = copy, 1000)
    } else {
        alert("It is empty broo. There are not anything for copy!")
    }
}


generateBtn.addEventListener('click', Generate)
window.addEventListener('load', Generate)
copyBtn.addEventListener('click', Copy)