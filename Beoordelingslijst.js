function calculeerText(cijfer) {
    return cijfer < 49 ? "onvoldoende" : cijfer < 59 ? "matig" : cijfer < 74 ? "voldoende" : "goed";
}

function calculeer(tweede) {
    var cijfer = document.getElementById("input_veld").value;
    
    var resultaatText = calculeerText(cijfer);
    
    var text = tweede ? "De beeordeling is " + resultaatText + ", want het cijfer is " + cijfer + "." : "Het cijfer is " + cijfer + " en is dus " + resultaatText + ".";
    
    document.getElementById("resultaat").innerHTML = text;
}