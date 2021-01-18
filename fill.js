var HBA1Ctests = ["Glucose"];
var CBCtests = ["Red Blood Cell", "White Blood Cell", "Hemoglobin", "Hematocrit", "Platelet"];
var CMPtests = ["Glucose", "Calcium", "Sodium", "Potassium", "Carbon Dioxide", "Chloride", "Albumin", "Total Protein", "Alkaline Phosphatase", "Alanine Transminase", "Asparatate Aminotransferase", "Bilirubin", "Blood Urea Nitrogen", "Creatinine"];
var LipidPaneltests = ["Total Cholesterol", "Low Density Lipoprotein", "High Density Lipoprotein", "Triglycerides"];
var alltests = [];
alltests.push(HBA1Ctests);
alltests.push(CBCtests);
alltests.push(CMPtests);
alltests.push(LipidPaneltests);

function showInput() {
    var tests = JSON.parse(localStorage.getItem('tests'));
    var indices = JSON.parse(localStorage.getItem('indices'));
    localStorage.removeItem('indices');
    // tests.style.color = '#fff';
    //localStorage.removeItem('tests');
    for (var i=0; i<tests.length; i++) {
        var spectest = alltests[indices[i]];
        console.log(spectest);
        for (var e=0; e < spectest.length; e++) {
            var x = document.createElement("Input");
            x.setAttribute("type", "text");
            x.setAttribute("value", "");
            var y = document.createElement("P");
            var text = document.createTextNode(spectest[e]);
            y.style.color = '#fff';
            y.style.fontFamily = '\'Questrial\'';
            y.style.fontSize = '20px'; 
            y.appendChild(text);
            document.body.appendChild(y);
            document.body.appendChild(x);  
        }
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