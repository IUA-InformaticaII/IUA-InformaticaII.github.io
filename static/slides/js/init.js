function ascii(txt) {
    document.getElementById("asciiOut").innerHTML = txt.value.charCodeAt(0);
    txt.select();
}
