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

var testNames = ["HBA1C", "CBC", "CMP", "Lipid Panel", "Prostate Surface Antigen (PSA)", "CA19", "Sexually", "Urine Toxicology", "Urinalysis", "C-reactive Protein", "Liver Panel", "D Dimer", "Influenza Panel", "COVID"]

function HBA1C(value){
var health;  
var symptoms;
    if (value < 5.7) {
        health = "Normal";
        symptoms = 

    }
    else if (value > 5.7 && value < 6.4){
        health = "Prediabetes";
        symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"

    }
    else {
        health = Diabetes;
        symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
    }
}
function CBC(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
    }
function CMP(value){
var health;  
var symptoms;
    if (value < 5.7) {
        health = "Normal";
        symptoms = 

    }
    else if (value > 5.7 && value < 6.4){
        health = "Prediabetes";
        symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"

    }
    else {
        health = Diabetes;
        symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
    }
}
function lipidPanel(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}
function HBA1C(value){
    var health;  
    var symptoms;
        if (value < 5.7) {
            health = "Normal";
            symptoms = 
    
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
    
        }
        else {
            health = Diabetes;
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue"
        }
}

for (let x=0; x < tests.length; x++) {
    if (test[x] === testNames[0]){
        HBA1C(intputs[x]);
    }
    if (test[x] === testNames[1]){
        CBC(intputs[x]);
    }
    if (test[x] === testNames[2]){
        CMP(intputs[x]);
    }
    if (test[x] === testNames[3]){
        lipidPanel(intputs[x])
    }
    if (test[x] === testNames[4]){
        prostateSurf(intputs[x]);
    }
    if (test[x] === testNames[5]){
        CA19(intputs[x]);
    }
    if (test[x] === testNames[6]){
        sexually(intputs[x]);
    }
    if (test[x] === testNames[7]){
        urineTox(intputs[x]);
    }
    if (test[x] === testNames[8]){
        urineAl(intputs[x]); 
    }
    if (test[x] === testNames[9]){
        Creact(intputs[x]);
    }
    if (test[x] === testNames[10]){
        liverPanel(intputs[x]);
    }
    if (test[x] === testNames[11]){
        dDimer(intputs[x]);
    }

       


}
