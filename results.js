function displayInput() {
    var inputs = JSON.parse(localStorage.getItem('inputs')); //getItem requires the key of the object you want to access 
    localStorage.removeItem('inputs'); // deletes the key 
    var tests = JSON.parse(localStorage.getItem('tests'));
    localStorage.removeItem('tests');
    console.log(inputs);
    console.log(tests);
    for (var i=0; i < inputs.length; i++) {
        var y = document.createElement("P");
        var text = document.createTextNode(tests[i] + ": " + inputs[i] + "   "); //This prints onto website
        y.appendChild(text);
        document.body.appendChild(text); // Appends the text created above to results.html 
    }
}