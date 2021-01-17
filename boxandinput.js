function checkBox(id) {
    var x = document.getElementById(id);
    if (x.checked) {
        showInput(id);
    }
    else {
        console.log("damn");
    }
}

function showInput() {
    var z = id;
    var y = document.createElement("Input");
    y.setAttribute("type", "text");
    y.setAttribute("value", "...");
    document.body.appendChild(z);
    document.body.appendChild(y);
}

function getCheckedTests(chktestsname) {
    var checktests = document.getElementsByName(chktestsname);
    var checkTestsChecked = [];
    for (var i=0; i<checktests.length; i++) {
        if (checktests[i].checked) {
            checkTestsChecked.push(checktests[i]);
        }
    }
    console.log(checkTestsChecked[0].id);
    return checkTestsChecked;
}