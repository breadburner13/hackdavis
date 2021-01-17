function getCheckedTests(chktestsname) {
    var checktests = document.getElementsByName(chktestsname); // checktests is an array of all the check box elements 
    var checkTestsChecked = [];
    // the for loop finds all the check box elements that have been checked and adds them to checkTestsChecked
    for (var i=0; i<checktests.length; i++) {
        if (checktests[i].checked) {
            checkTestsChecked.push(checktests[i].id);
        }
    }
    localStorage.setItem('tests', JSON.stringify(checkTestsChecked)); // This stores the check box elements that have been checked
    window.location.href = "./filloutform.html"; 
}
