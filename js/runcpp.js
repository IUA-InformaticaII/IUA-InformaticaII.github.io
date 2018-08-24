function run(el){
    var element = el;
    var code = el.parentElement.getElementsByTagName("code")[0].innerText;
    code = code.replace('&lt;','<');
    code = code.replace('&gt;','>');

    var input = "4321";
    var output = "";
    var config = {
        stdio: {
            write: function(s) {
                output += s;
            }
        }
    };
    var exitCode = JSCPP.run(code, input, config);
    output = "Salida:\n"+ output;
    el.parentElement.getElementsByClassName('output')[0].innerText = output;

}
