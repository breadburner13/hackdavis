function getCheckedTests(chktestsname) {
    var checktests = document.getElementsByName(chktestsname); // checktests is an array of all the check box elements 
    var checkTestsChecked = [];
    var checkTestsIndices = [];
    // the for loop finds all the check box elements that have been checked and adds them to checkTestsChecked
    for (var i=0; i<checktests.length; i++) {
        if (checktests[i].checked) {
            checkTestsChecked.push(checktests[i].id);
            checkTestsIndices.push(i);
        }
    }
    localStorage.setItem('tests', JSON.stringify(checkTestsChecked)); // This stores the check box elements that have been checked
    localStorage.setItem('indices', JSON.stringify(checkTestsIndices));
    getGender();
    window.location.href = "./filloutform.html"; 
}

function getGender() {
    var gender = document.getElementById("gender");
    localStorage.setItem('gender', JSON.stringify(gender.options[gender.selectedIndex].value));
}