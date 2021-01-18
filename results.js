var Gender = JSON.parse(localStorage.getItem('gender'));  // creates global variable gender, a string with either "male" or "female"
localStorage.removeItem('gender');
var inputs = JSON.parse(localStorage.getItem('inputs'));  // creates global variable inputs, a list of the user inputs for the tests
localStorage.removeItem('inputs'); 
var tests = JSON.parse(localStorage.getItem('tests'));  // creates global variable tests, a list of strings of the tests the user checked. 
localStorage.removeItem('tests');

function displayInput() {
    var inputs = JSON.parse(localStorage.getItem('inputs')); //getItem requires the key of the object you want to access 
    localStorage.removeItem('inputs'); // deletes the key 
    var tests = JSON.parse(localStorage.getItem('tests'));
    localStorage.removeItem('tests');
    console.log(inputs);
    console.log(tests);
    console.log("Test");
    for (var i=0; i < inputs.length; i++) {
        var y = document.createElement("P");
        var text = document.createTextNode(tests[i] + ": " + inputs[i] + "   "); //This prints onto website
        y.appendChild(text);
        document.body.appendChild(text); // Appends the text created above to results.html 
    }
    displayResults();
}


function HBA1CFun(value){
    //console.log("Funciton works")
    var health;  
    var symptoms;
    var causeRisks;
    var waysToImprov;

        if (value < 5.7) {
            health = "Normal";
            //symptoms = "None";
            //causeRisks = "N/A"
        }
        else if (value > 5.7 && value < 6.4){
            health = "Prediabetes";
            symptoms = "Less severe symptoms of diabetes, which include frequent thirst, urination, blurry vision, and constant fatigue"
            causeRisks = "Obesity, high body mass index (BMI), high blood pressure, and little to no physical activity"
            waysToImprov = "consume less carbohydrates, eat more protein, exercise frequently, lose weight, maintain with medications, manage stress and mental health"
        }
        else {
            health = "Diabetes";
            symptoms = "Frequent Thirst, Urination, Blurry Vision, Constant Fatigue";
            causeRisks = "Obesity, high body mass index (BMI), high blood pressure, and little to no physical activity";
            waysToImprov = "consume less carbohydrates, eat more protein, exercise frequently, lose weight, maintain with medications, manage stress and mental health"
    
        }
        
        var HBA1Cobj = {
          "Glucose Results": {
            health, symptoms, causeRisks, waysToImprov
          }
        }
        //var HBA1Cobj = new testClass(health, symptoms, causeRisks, waysToImprov, source)
        return (HBA1Cobj);
    }
    
    function CBCFun(RedBloodCell, WhiteBloodCell, Hemoglobin, Hematocrit, Platelet, Gender){
        var RBHealth, RBsymptoms, RBcauseRisks, RBwaysToImprov, WBHealth, WBsymptoms, WBcauseRisks, WBwaysToImprov, HemoHealth, Hemosymptoms, HemocauseRisks, HemowaysToImprov, HemaHealth, Hemasymptoms, HemacauseRisks, HemawaysToImprov, PHealth, Psymptoms, PcauseRisks, PwaysToImprov; 
       
    
        if(Gender === "male"){
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
            var CBCobj = {
                "Red Blood Cell Results": {
                    RBHealth, RBsymptoms, RBcauseRisks, RBwaysToImprov
                },
                "White Blood Cell Results": {
                    WBHealth, WBsymptoms, WBcauseRisks, RBwaysToImprov
                },
                "Hemoglobin Results": {
                    HemoHealth, Hemosymptoms, HemocauseRisks, HemowaysToImprov
                },
                "Hematocrit Results": {
                    HemaHealth, Hemasymptoms, HemacauseRisks, HemawaysToImprov
                },
                "Platelet Results": {
                    PHealth, Psymptoms, PcauseRisks, PwaysToImprov
                }
             
            }      
        return(CBCobj);
     }
        
    function CMPFun(glucose, calcium, sodium, potassium){
        var GHealth, Gsymptoms, GcauseRisks, GwaysToImprov, CHealth, Csymptoms, CcauseRisks, CwaysToImprov, SHealth, Ssymptoms, ScauseRisks, SwaysToImprov, PHealth, Psymptoms, PcauseRisks, PwaysToImprov; 
       
            if(glucose < 70) {
                GHealth = "Under reference range"
                Gsymptoms = "Irregular heartbeat, fatigue, anxiety, and excessive sweating"
                GcauseRisks = "Not enough sugar intake, endocrine disorders, hepatitis, and certain medications"
                GwaysToImprov = "Be mindful with sugar intake and keep snacks on hand, such as granola bars, fresh fruits, fruit juice and etc. "
            }
            else if(glucose >= 70 && glucose < 99){
                GHealth = "Normal"
            }
            else {
                GHealth = "Over reference range"
                Gsymptoms = "Frequent thirst, urination, blurry vision, and constant fatigue"
                GcauseRisks = "Obesity, high BMI, high blood pressure, little to no physical activity"    
                GwaysToImprov = "Less carbs and more protein; frequent exercise, weight loss, medications, manage stress and mental health"
            }
            if (calcium < 8.6){
                CHealth = "Under reference range"
                Csymptoms = "Tingling in extremities, cramps, irregular heartbeat (arrhythmia)"
                CcauseRisks = "Poor calcium intake, medications, genetics, hormones"
                CwaysToImprov = "Eat foods that are higher in calcium"
            }
            else if (calcium >= 8.6 && calcium <= 10.2){
                CHealth = "Normal"
            }
            else {
                CHealth = "Over reference range"
                Csymptoms = "Nausea/vomiting, frequent urination, frequent thirst, unable to process bowel movements, and pain in abdomin"
                CcauseRisks = "Parathyroid glands are too active, cancer, genetics, high levels of vitamin D, little exericise, and dehydration"
                CwaysToImprov = "Drink more water, stop smoking, exercise more, refrain from consuming too much vitamin D"
            }
            if(sodium < 136){
                SHealth = "Under reference range"
                Ssymptoms = "Weakness, fatigue, confusion, muscle spasm"
                ScauseRisks = "Medications, heart, kidney, or liver problems, excessive secretion of anti-diuretic hormone, too much water, hormonal changes, and ecstacy"
                SwaysToImprov = "Avoid caffeine and alcohol, get frequent testing, and avoid diuretics"
            }
            else if(sodium >= 136 && sodium <= 145){
                SHealth = "Normal"
            }
            else {
                SHealth = "Over reference range"
                Ssymptoms = "Frequent thirst, little urination, vomit, and diarrhea"
                ScauseRisks = "Excessive release of fluid, kidney disorder, diabetes, dementia, and delirium"
                SwaysToImprov = "Correct sodium and fluid balance by increasing fluid intake, eat less salty foods, such as fresh or frozen vegetables"
            }
            if(potassium < 3.5){
                PHealth = "Under reference range"
                Psymptoms = "Cramps, fatigue, and difficulty processing bowel movements"
                PcauseRisks = "Alcohol abuse, diarrhea, excessive fluid loss, and folic acid deficiency"
                PwaysToImprov = "Eat more potassium rich foods, like yams, white beans, clams, white potatoes, avocado, and bananas"
            }
            else if(potassium >= 3.5 & potassium <= 5.1){
                PHealth = "Normal"
            }
            else{
                PHealth = "Over in reference range"
                Psymptoms = "Irregular heart beat (arrhythmia), weakness, paralysis in extremities"
                PcauseRisks = "Kidney failure, chronic kidney disease, certain medications, such as ACE inhibitors, beta blockers, type 1 diabetes"
                PwaysToImprov = "Boil foods, don't eat the foods labeled from before, coffee, beer, milk, and cider"
            }
            var CBCobj = {
                "Glucose Results": {
                    GHealth, Gsymptoms, GcauseRisks, GwaysToImprov
                },
                "Calcium Results": {
                    CHealth, Csymptoms, CcauseRisks, CwaysToImprov
                },
                "Sodium Results": {
                    SHealth, Ssymptoms, ScauseRisks, SwaysToImprov
                },
                "Potassium Results": {
                    PHealth, Psymptoms, PcauseRisks, PwaysToImprov
                }
             
            }
        return (CBCobj);
    }
    
    function lipidPanelFun(chol, LDlipo, HDlipo, trig){
        var cholHealth, cholsymptoms, cholcauseRisks, cholwaysToImprov, LDHealth, LDsymptoms, LDcauseRisks, LDwaysToImprov, HDHealth, HDsymptoms, HDcauseRisks, HDwaysToImprov, trigHealth, trigsymptoms, trigcauseRisks, trigwaysToImprov; 
       //console.log("Enter lipid fun")
            if(chol < 200) {
                cholHealth = "Normal"
                //console.log("first")
            }
            else{
                cholHealth = "Over reference range"
                cholsymptoms = "Heart disease, stroke, and hardening of arteries (atherosclerosis)"
                cholcauseRisks = "Previous family history of high cholesterol, obese, frequent alcohol consumption, smoking, diabetic, and kidney disease"
                cholwaysToImprov = "Eat healthier foods: less saturated fats, ex. red meat and fatty dairy products, will reduce LDL. Less trans fats, such as cookies, crackers, and cakes. Increase omega 3 fatty acids by eating salmon, mackerel, herring, and various nuts. Eat more oatmeal, kidney beans, apples and pears to increase soluble fiber. Exercise as often as possible and try to lose weight. Refrain from drinking and smoking."
                //console.log("second")
            }
            if (LDlipo < 70){
                LDHealth = "Under reference range, but ideal to have a low value"
            }
            else if (LDlipo >= 70 && LDlipo < 130){
                LDHealth = "Normal"
            }
            else if (LDlipo >= 130 && LDlipo < 190){ 
                LDHealth = "Over reference range"
                LDsymptoms = "Heart disease, stroke, and hardening of arteries (atherosclerosis)"
                LDcauseRisks = "Previous family history of high cholesterol, obese, frequent alcohol consumption, smoking, diabetic, and kidney disease"
                LDwaysToImprov = "Eat healthier foods: less saturated fats, ex. red meat and fatty dairy products, will reduce LDL. Less trans fats, such as cookies, crackers, and cakes. Increase omega 3 fatty acids by eating salmon, mackerel, herring, and various nuts. Eat more oatmeal, kidney beans, apples and pears to increase soluble fiber. Exercise as often as possible and try to lose weight. Refrain from drinking and smoking."
            }
            else{
                LDHealth = "Well over reference range"
                LDsymptoms = "Heart disease, stroke, and hardening of arteries (atherosclerosis)"
                
            }
            if(HDlipo < 40){
                HDHealth = "Under reference range"
                HDsymptoms = "Heart disease, stroke, and hardening of arteries (atherosclerosis)"
                HDcauseRisks = "Previous family history of high cholesterol, obese, frequent alcohol consumption, smoking, diabetic, and kidney disease "
                HDwaysToImprov = "Eat healthier foods: less saturated fats, ex. red meat and fatty dairy products, will reduce LDL. Less trans fats, such as cookies, crackers, and cakes. Increase omega 3 fatty acids by eating salmon, mackerel, herring, and various nuts. Eat more oatmeal, kidney beans, apples and pears to increase soluble fiber. Exercise as often as possible and try to lose weight. Refrain from drinking and smoking."
            }
            else if(HDlipo >= 40 && HDlipo <= 60){
                HDHealth = "Normal"
            }
            else {
                HDHealth = "Over reference range, but ideal to have a higher value"
    
            }
            if(trig < 10){
                trigHealth = "Under reference range, but ideal to have a lower value"
    
            }
            else if(trig >= 10 & trig <= 150){
                trigHealth = "Normal"
            }
            else{
                trigHealth = "Over in reference range"
                trigsymptoms = "Heart disease, stroke, and hardening of arteries (atherosclerosis)"
                trigcauseRisks = "Previous family history of high cholesterol, obese, frequent alcohol consumption, smoking, diabetic, and kidney disease"
                trigwaysToImprov = "Eat healthier foods: less saturated fats, ex. red meat and fatty dairy products, will reduce LDL. Less trans fats, such as cookies, crackers, and cakes. Increase omega 3 fatty acids by eating salmon, mackerel, herring, and various nuts. Eat more oatmeal, kidney beans, apples and pears to increase soluble fiber. Exercise as often as possible and try to lose weight. Refrain from drinking and smoking."
            }
            var lipidPanelobj = {
                "Total Cholesterol Results": {
                    cholHealth, cholsymptoms, cholcauseRisks, cholwaysToImprov
                },
                "Low Density LipoProtein Results": {
                    LDHealth, LDsymptoms, LDcauseRisks, LDwaysToImprov
                },
                "High Density LipoProtein Results": {
                    HDHealth, HDsymptoms, HDcauseRisks, HDwaysToImprov
                },
                "Triglycerides Results": {
                    trigHealth, trigsymptoms, trigcauseRisks, trigwaysToImprov
                }
             
            }
        return(lipidPanelobj);
    }
    
    var finalstring = "";
   
function elementToPrint(object){
    var introString = "";
    var stringToPrint = "";
    for (let results in object) {
        introString = introString + results + " ";
        let i = 0;
        for (let props in object[results]) {
            if(object[results][props]) {
                console.log('b');
                if (object[results][props]){}
                if (i === 0) introString = introString + "Health"
                else if (i===1) introString = introString + "Symptoms"
                else if (i===2) introString = introString + "Causes & Risks"
                else if (i===3) introString = introString + "Ways to Improve!"
                stringToPrint = introString + ": " + object[results][props];
                var y = document.createElement("P");
                var text = document.createTextNode(stringToPrint);
                y.style.color = '#FFF';
                y.style.fontFamily = '\'Questrial\'';
                y.style.fontSize = '30px';
                y.style.backgroundColor = '#90C8EC';
                y.appendChild(text);
                y.appendChild(document.createElement('br'));
                document.body.appendChild(y);  
                introString = "";
                i = i+1;
            }
        }
    }
}

    // var introString = "";
    // var stringToPrint = "";
    // var finalstringToPrint = "";

    // for (let results in object){
    
    //     let i = 0;   
    //     //finalstringToPrint = finalstringToPrint + results + "\n"
        
    //     for (let props in object[results]){
    //         if(object[results][props]){  
    //             if (i === 0) introString = "Health"
    //             else if (i===1) introString = "Symptoms"
    //             else if (i===2) introString = "Causes & Risks"
    //             else if (i===3) introString = "Ways to Improve!"
    //             stringToPrint = introString + ": " + object[results][props];
    //             finalstringToPrint = finalstringToPrint + stringToPrint + "\n"
    //             var y = document.createElement("P");
    //             var text = document.createTextNode(stringToPrint);
    //             y.style.color = '#000';
    //             y.style.fontFamily = '\'Questrial\'';
    //             y.style.fontSize = '30px';
    //             y.style.backgroundColor = '#90C8EC';
    //             y.appendChild(text);
    //             y.appendChild(document.createElement('br'));
    //             document.body.appendChild(y);
    //             ++i;
    //         }
    //     }
        
    //     finalstringToPrint = finalstringToPrint + "\n"
    // }
    // return(finalstringToPrint);

//console.log(finalstring);

function displayResults() {
    for (let x=0; x < tests.length; x++) {
        if (tests[x] === "HBA1C"){
            var HBA1Cobj = HBA1CFun(inputs.shift()); //needs input
            //finalstring = finalstring + elementToPrint(HBA1Cobj);
            elementToPrint(HBA1Cobj);
        }
        if (tests[x] === "CBC"){
            var RedBloodCellValue = inputs.shift();
            var WhiteBloodCellValue = inputs.shift();
            var HemoglobinValue = inputs.shift();
            var HematocritValue = inputs.shift();
            var PlateletValue = inputs.shift();
            var CBCobj = CBCFun(RedBloodCellValue, WhiteBloodCellValue, HemoglobinValue, HematocritValue, PlateletValue, Gender); //needs input
            //finalstring = finalstring + elementToPrint(CBCobj);
            elementToPrint(CBCobj);
        }
        if (tests[x] === "BMP"){
            var GlucoseValue2 = inputs.shift();
            var CalciumValue = inputs.shift();
            var SodiumValue = inputs.shift();
            var PotassiumValue = inputs.shift();
            var CMPobj = CMPFun(GlucoseValue2, CalciumValue, SodiumValue, PotassiumValue); //needs input
            //finalstring = finalstring + elementToPrint(CMPobj);
            elementToPrint(CMPobj);
        }
        if (tests[x] === "Lipid Panel"){
            var CholesterolValue = inputs.shift();
            var LowDensityLipoProteinValue = inputs.shift();
            var HighDensityLipoProteinValue = inputs.shift();
            var triglycerideValue = inputs.shift();
            var lipidPanelobj = lipidPanelFun(CholesterolValue, LowDensityLipoProteinValue, HighDensityLipoProteinValue, triglycerideValue) //needs input
            elementToPrint(lipidPanelobj);
        }   
    }
}

function source() {
    window.location.href = "./citations.html";
}        