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

class testClass {
    constructor(health, symptoms, causeRisks, waysToImprov, source){
        this.health = health;
        this.symptoms = symptoms;
        this.causeRisks = causeRisks;
        this.waysToImprov = waysToImprov;
        this.source = source;
    }

}

function HBA1C(value){

var health;  
var symptoms;
var causeRisks;
var waysToImprov;
var source;
    if (value < 5.7) {
        health = "Normal";
        //symptoms = "None";
        //causeRisks = "N/A"
        //source = "https://medlineplus.gov/lab-tests/hemoglobin-a1c-hba1c-test/#:~:text=A%20hemoglobin%20A1c%20(HbA1c)%20test%20measures%20the%20amount%20of%20blood,the%20rest%20of%20your%20body.https://healingblendsglobal.com/blogs/condition-specific/causes-and-risks-of-high-hba1c"


    }
    else if (value > 5.7 && value < 6.4){
        health = "Prediabetes";
        symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
        causeRisks = "Obesity, high body mass index (BMI), high blood pressure, and little to no physical activity"
        waysToImprov = "consume less carbohydrates, eat more protein, exercise frequently, lose weight, maintain with medications, manage stress and mental health"
        //source = "https://medlineplus.gov/lab-tests/hemoglobin-a1c-hba1c-test/#:~:text=A%20hemoglobin%20A1c%20(HbA1c)%20test%20measures%20the%20amount%20of%20blood,the%20rest%20of%20your%20body.https://healingblendsglobal.com/blogs/condition-specific/causes-and-risks-of-high-hba1c"
    }
    else {
        health = "Diabetes";
        symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue";
        causeRisks = "Obesity, high body mass index (BMI), high blood pressure, and little to no physical activity";
        waysToImprov = "consume less carbohydrates, eat more protein, exercise frequently, lose weight, maintain with medications, manage stress and mental health"
        //source = "https://medlineplus.gov/lab-tests/hemoglobin-a1c-hba1c-test/#:~:text=A%20hemoglobin%20A1c%20(HbA1c)%20test%20measures%20the%20amount%20of%20blood,the%20rest%20of%20your%20body.https://healingblendsglobal.com/blogs/condition-specific/causes-and-risks-of-high-hba1c"

    }
    return (var HBA1C = new testClass(health, symptoms, causeRisks, waysToImprov, source));
}
function CBC(RedBloodCell, WhiteBloodCell, Hemoglobin, Hematocrit, Platelet, Gender){
    //var redBloodHealth, whiteBloodHealth, hemoHealth, HemaHealth, PlateHealth; 
    var Health;
    var symptoms;
    var causeRisks;
    var waysToImprov;
    var source; 

    if(Gender === "Male"){
        if(RedBloodCell < 4.35) {
            RBHealth = "Under reference range";
            RBsymptoms = "Fatigue, high heart rate(tachycardia), headaches, pale skin, restlessness, and irregular breathing";
            RBcauseRisks = "Anemia, leukemia, malnutrition, pregnancy, thyroid disease, bone marrow cancer, bleeding, red blood cells dying or STEM blood cells dying";
            RBwaysToImprov = "Lessen amount of red meat or iron that you eat, hydrate, refrain from consuming caffeine or alcohol, and stop smoking"
        }
        else if(RedBloodCell >= 4.35 && RedBloodCell < 5.65){
            RBHealth = "Normal"
        }
        else {
            RBHealth = "Over reference range"
            RBsymptoms = "Fatigue, joint pain, trouble sleeping, itchiness, and tenderness on hands and feet"
            RBcauseRisks = "Smoking, congenital heart disease, not enough water, overproduction of red blood cells, and kidney cell cancer"    
            RBwaysToImprov = "Consume more iron-rich food, increase consumption of copper, and get more vitamin B-12 foods"
        }
        if (Hemoglobin < 13.2){
            HemoHealth = "Under reference range"
            Hemosymptoms = "Feeling dizzy, weak, have pale skin, cold extremeties, liver disorder and urinary tract infections"
            HemocauseRisks = "Different version of anemia, liver disorder, cancer, deficient in iron, body does not make enough hemoglobin (thalassemia)"
            HemowaysToImprov = "Eat food that contain iron and folate. Iron foods are: shellfish, beef, broccoli, spinach, and etc. Folate foods are beef, spinach, avocado, lettuce, rice and etc. Can also consider taking iron supplements if recommended by doctor"
        }
        else if (Hemoglobin >= 13.2 && Hemoglobin <= 16.6){
            HemoHealth = "Normal"
        }
        else {
            HemoHealth = "Over reference range"
            Hemosymptoms = "Headache, dizziness, frequent sweating, painful joint pains, yellow pigment to eyes and skin (jaundice)"
            HemocauseRisks = "Living in high areas, tobacco usage, heart or lung disease, drug abuse"
            HemowaysToImprov = "Medication or have blood drained to a bag or container"
        }
        if(Hematocrit < 38.3){
            HemaHealth = "Under reference range"
            Hemasymptoms = "fatigue, shortness of breath, headaches, and heavy menustral cycles"
            HemacauseRisks = "Internal and external bleeding, dying red blood cells, less red blood cells produced, diet problems, drinking too much fluids"
            HemawaysToImprov = "Typically, no action is necessary if hematocrit levels are slightly abnormal. Low hematocrit level individuals might need to intervention and high level individuals might need remove some of their blood. Consult a doctor if unsure."
        }
        else if(Hematocrit >= 38.3 && Hematocrit <= 48.6){
            HemaHealth = "Normal"
        }
        else {
            HemaHealth = "Over reference range"
            Hemasymptoms = "Headache and fatigue"
            HemacauseRisks = "Thirst, not enough oxygen, lung disease, and over production of red blood cells"
            HemawaysToImprov = "Typically, no action is necessary if hematocrit levels are slightly abnormal. Low hematocrit level individuals might need to intervention and high level individuals might need remove some of their blood. Consult a doctor if unsure."
        }
        if(Platelet < 135){
            PHealth = "Under reference range"
            Psymptoms = "Bleeding found in urine, stool, rectum, gums, nose bleeds, and any bleeding that extends for a long time or does not stop"
            PcauseRisks = "Cancer treatment, medications, immune system attacks its own healthy tissues"
            PwaysToImprov = "Refrain from conducting activites that involve contact that can cause bruising or bleeding, less alcohol. For more severe cases, you might need: blood transfusions, steroids, remove your spleen, medication to surpress immune system"
        }
        else if(Platelet >= 135 & Platelet <= 317){
            PHealth = "Normal"
        }
        else{
            PHealth = "Over in reference range"
            Psymptoms = "Usually no symptoms, but can cause blood clots"
            PcauseRisks = "Unknown. Research speculate that there is a mutation in the gene that handles cell growth"
            PwaysToImprov = "Doctors might recommend low dose aspirin or prescribing medications that reduce platelet production"
        }
    }
    if(Gender === "female"){
        if(RedBloodCell < 3.92) {
            RBHealth = "Under reference range"
            RBsymptoms = "Fatigue, high heart rate(tachycardia), headaches, pale skin, restlessness, and irregular breathing";
            RBcauseRisks = "Anemia, leukemia, malnutrition, pregnancy, thyroid disease, bone marrow cancer, bleeding, red blood cells dying or STEM blood cells dying";
            RBwaysToImprov = "Lessen amount of red meat or iron that you eat, hydrate, refrain from consuming caffeine or alcohol, and stop smoking"
        }
        else if(RedBloodCell >= 3.92 && RedBloodCell <= 5.13){
            RBHealth = "Normal"
        }
        else if (RedBloodCell > 5.13) {
            RBHealth = "Over reference range"
            RBsymptoms = "Fatigue, joint pain, trouble sleeping, itchiness, and tenderness on hands and feet"
            RBcauseRisks = "Smoking, congenital heart disease, not enough water, overproduction of red blood cells, and kidney cell cancer"    
            RBwaysToImprov = "Consume more iron-rich food, increase consumption of copper, and get more vitamin B-12 foods"
        }
        if(Hemoglobin < 11.6){
            HemoHealth = "Under reference range"
            Hemosymptoms = "Feeling dizzy, weak, have pale skin, cold extremeties, liver disorder and urinary tract infections"
            HemocauseRisks = "Different version of anemia, liver disorder, cancer, deficient in iron, body does not make enough hemoglobin (thalassemia)"
            HemowaysToImprov = "Eat food that contain iron and folate. Iron foods are: shellfish, beef, broccoli, spinach, and etc. Folate foods are beef, spinach, avocado, lettuce, rice and etc. Can also consider taking iron supplements if recommended by doctor"
        }
        else if(Hemoglobin >= 11.6 && Hemoglobin <= 15){
            HemoHealth = "Normal"
        }
        else{
            HemoHealth = "Over in reference range"
            Hemosymptoms = "Headache, dizziness, frequent sweating, painful joint pains, yellow pigment to eyes and skin (jaundice)"
            HemocauseRisks = "Living in high areas, tobacco usage, heart or lung disease, drug abuse"
            HemowaysToImprov = "Medication or have blood drained to a bag or container"
        }
        if (Hematocrit < 35.5){
            HemaHealth = "Under reference range"
            Hemasymptoms = "fatigue, shortness of breath, headaches, and heavy menustral cycles"
            HemacauseRisks = "Internal and external bleeding, dying red blood cells, less red blood cells produced, diet problems, drinking too much fluids"
            HemawaysToImprov = "Typically, no action is necessary if hematocrit levels are slightly abnormal. Low hematocrit level individuals might need to intervention and high level individuals might need remove some of their blood. Consult a doctor if unsure."
        }
        else if(Hematocrit >= 35.5 && Hematocrit <= 44.9){
            HemaHealth = "Normal"
        }
        else{
            HemaHealth = "Over in reference range"
            Hemasymptoms = "Headache and fatigue"
            HemacauseRisks = "Thirst, not enough oxygen, lung disease, and over production of red blood cells"
            HemawaysToImprov = "Typically, no action is necessary if hematocrit levels are slightly abnormal. Low hematocrit level individuals might need to intervention and high level individuals might need remove some of their blood. Consult a doctor if unsure."
        }
        if(Platelet < 157) {
            PHealth = "Under reference range"
            Psymptoms = "Bleeding found in urine, stool, rectum, gums, nose bleeds, and any bleeding that extends for a long time or does not stop"
            PcauseRisks = "Cancer treatment, medications, immune system attacks its own healthy tissues"
            PwaysToImprov = "Refrain from conducting activites that involve contact that can cause bruising or bleeding, less alcohol. For more severe cases, you might need: blood transfusions, steroids, remove your spleen, medication to surpress immune system"
        }
        else if(Platelet >= 157 && Platelet <= 371){
            PHealth = "Normal"
        }
        else{
            PHealth = "Not in reference range"
            Psymptoms = "Usually no symptoms, but can cause blood clots"
            PcauseRisks = "Unknown. Research speculate that there is a mutation in the gene that handles cell growth"
            PwaysToImprov = "Doctors might recommend low dose aspirin or prescribing medications that reduce platelet production"
        }
    }
        if(WhiteBloodCell < 3.4) {
            WBHealth = "Under reference range"
            WBsymptoms = "Repeated infections, frequent urination, mouth sores"
            WBcauseRisks = "Autoimmune disorders, damage to bone marrow, severe infection, radiation, and antibiotics"
            WBwaysToImprov = "While there are no foods that can directly increase blood cell count, eating foods that boost the immune system, and maintaining good hygenics is essential to keeping your body healthy despite having a low white blood cell count"
        }
        else if(WhiteBloodCell >= 3.4 && WhiteBloodCell <= 9.6){
            WBHealth = "Normal"
        }
        else{
            WBHealth = "Over reference range"
            WBsymptoms = "Usually detected with a blood draw"
            WBcauseRisks = "Smoking, bone marrow cancer, leukemia, inflammatory diseases, stress, tissue damage, pregnancy, and asthma"
        } 
        var CBC
        CBC.RBHealth = RBHealth;
        CBC.WBHealth = WBHealth;
        CBC.


    return(2);
 }
    



for (let x=1; x < tests.length; x++) {
    if (tests[x] === testNames[0]){
        HBA1C(intputs[x]);
    }
    if (tests[x] === testNames[1]){
        CBC(intputs[x]);
    }
    if (tests[x] === testNames[2]){
        CMP(intputs[x]);
    }
    if (tests[x] === testNames[3]){
        lipidPanel(intputs[x])
    }   
}