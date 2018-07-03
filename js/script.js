
var generators = { "manual":400, "coal":600, "hydrogen":800, "gas":800, "petroleum":2000, "steam":2000, "solar":380};
var genInputs = { "manual":["", ""], "coal":[1000, " g/s Coal"], "hydrogen":[100, " g/s Hydrogen"], "gas":[90, " g/s CH4"], "petroleum":[2000, " g/s Petroleum"], "steam":["", ""], "solar":["", ""]};

var oxyGenerators = { "deoxydizer":[[500, " g/s Oxygen"]], "terrarium":[[40, " g/s Oxygen"], [290.33, " g/s Polluted Water"]], "deodorizer":[[90, " g/s Oxygen"], [133.33, " g/s clay"]]};
var oxyGenInputs = { "deoxydizer":[[550, " g/s Algae"], [120, "W Power"]], "terrarium":[[30, " g/s Algae"], [300, " g/s Water"], [333.33, " mg/s CO2"]], "deodorizer":[[100, " g/s PO2"], [133.33, " g/s Filtration Medium"]]};

function round(num){
    return Math.trunc(num * 100) / 100;
}

function calcEnergy(){
	var generator = document.getElementById("generatorSelect").value;
	var quantity = document.getElementById("genQuantity").value;
	if(quantity < 1){
	    quantity = 1;
	}
	var outPower = generators[generator] * quantity;
	var inputs = genInputs[generator][0] * quantity + genInputs[generator][1];
	if(inputs == 0){
	    inputs = "";
	}
	document.getElementById("outPower").innerHTML = outPower + "W";
	document.getElementById("genInputs").innerHTML = inputs;
}

function calcOxygen(){
	var generator = document.getElementById("oxyGeneratorSelect").value;
	var quantity = document.getElementById("oxyGenQuantity").value;
	if(quantity < 1){
	    quantity = 1;
	}
	document.getElementById("oxyOut").innerHTML = "";
	document.getElementById("oxyGenInputs").innerHTML = "";
	for(var i in oxyGenerators[generator]){
	    document.getElementById("oxyOut").innerHTML += round(oxyGenerators[generator][i][0] * quantity) + oxyGenerators[generator][i][1] + "<br>";
	}
	for(var j in oxyGenInputs[generator]){
	    document.getElementById("oxyGenInputs").innerHTML += round(oxyGenInputs[generator][j][0] * quantity) + oxyGenInputs[generator][j][1] + "<br>";
	}
}