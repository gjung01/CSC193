function alertcheck() {
    alert("Hello World!");
}

function fontText() {
    document.getElementById("input").style.fontSize = "24px";
}

function fancy() {
    document.getElementById("input").style.fontWeight = "bold";
    document.getElementById("input").style.color = "blue";
    document.getElementById("input").style.textDecorationLine = "underline";
}

function boring() {
    document.getElementById("input").style.fontWeight = "";
    document.getElementById("input").style.color = "";
    document.getElementById("input").style.textDecorationLine = "";
}

function toUpper() {
    document.getElementById("input").value.toUpperCase();
}

function moo() {
    var inputText = document.getElementById("input");
    var wordArr = inputText.value.split(".");
    inputText.value = "";
    inputText.value=wordArr.join(" Moo.");
}