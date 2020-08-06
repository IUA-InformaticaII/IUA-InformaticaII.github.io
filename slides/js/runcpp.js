function run(el) {
    var element = el;
    var code = el.parentElement.parentElement.getElementsByTagName("code")[0].innerText;
    code = code.replace('&lt;', '<');
    code = code.replace('&gt;', '>');
    code = code.replace('&lt;', '<');
    code = code.replace('\xA0', '');

    var input = "4321";
    var output = "";
    var config = {
        stdio: {
            write: function (s) {
                output += s;
            }
        }
    };
    var exitCode = JSCPP.run(code, input, config);
    //output = "Salida:\n" + output;
    el.parentElement.parentElement.getElementsByClassName('output')[0].innerText = output;

}

function sol(el) {
    var solu = el.getElementsByTagName("pre")[0].innerHTML;
    var code = el.parentElement.parentElement.getElementsByTagName("code")[0];
    code.innerHTML = solu;

    hljs.highlightBlock(code);
}
