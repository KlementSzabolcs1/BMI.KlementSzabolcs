function szamitas() {
    let testmag = document.getElementById("testmag").value;
    let testsuly = document.getElementById("testsuly").value;
    let bmi = (testsuly / (testmag / 100) ** 2);
    let sovany = document.getElementById("sovany");
    let normal = document.getElementById("normal");
    let tulsuly = document.getElementById("tulsuly");
    let foku1 = document.getElementById("foku1");
    let foku2 = document.getElementById("foku2");
    let foku3 = document.getElementById("foku3");
    document.getElementById("bmiertek").innerHTML = "AZ ÖN BMI ÉRTÉKE: " +Math.round(bmi);
    if (bmi <= 18.5) {
        sovany.style.backgroundColor = "orange";
    }
    else if (bmi >= 18.6 && bmi < 25) {
        normal.style.backgroundColor= "orange";
    }
    else if (bmi >= 25 && bmi < 30) {
        tulsuly.style.backgroundColor= "orange";
    }
    else if (bmi >= 30 && bmi < 35) {
        foku1.style.backgroundColor= "orange";
    }
    else if (bmi >= 35 && bmi < 40) {
        foku2.style.backgroundColor= "orange";
    }
    else if (bmi >= 40) {
        foku3.style.backgroundColor= "orange";
    }
}