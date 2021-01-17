
function showInput() {
    var tests = JSON.parse(localStorage.getItem('tests'));
    // tests.style.color = '#fff';
    //localStorage.removeItem('tests');
    for (var i=0; i<tests.length; i++) {
        console.log('showin');
        var x = document.createElement("Input");
        x.setAttribute("type", "text");
        x.setAttribute("value", "...");
        
        var y = document.createElement("P");
        var text = document.createTextNode(tests[i]);
        // text.style["color"] = "purple";
        // text.setAttribute("style", "color:white");
        // text.style.color = '#fff';
        y.appendChild(text);
        document.body.appendChild(text);
        document.body.appendChild(x);
        
    }
}

function submitInfo() {
    var inputs = document.getElementsByTagName('input');
    var inputStorage = [];
    for (index=0; index<inputs.length; index++) {
        console.log(inputs[index].value);
        inputStorage.push(inputs[index].value);
    }
    localStorage.setItem('inputs', JSON.stringify(inputStorage)); //setItem stores the second parameter under the key which is the first parameter
    window.location.href = "./results.html";
}