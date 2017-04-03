class Card {
	constructor(){
		this.technique = 0;
		this.domination = 0;
		this.talent = new Array(5);
		this.maitrise = new Array(5);
		this.data = new Data();
	}

	getFitnessTalent(){
		var fitTalent, fitEffet;
		var fitContexte = 1, fitCout = 1, fitCondition = 1, fitValue = 1;
		if(this.talent[0] != "") fitCout = this.data.mapCout.get(this.talent[0]).param;
		if(this.talent[1] != "") fitCondition = this.data.mapConditions.get(this.talent[1]).param;
		if(this.talent[2] != "") fitContexte = this.data.mapContextes.get(this.talent[2]).param;
		fitEffet = this.data.mapEffets.get(this.talent[3]).param;
		if(this.data.mapEffets.get(this.talent[3]).needValue){
			fitValue = this.talent[4];
		}
		fitTalent = fitEffet * fitContexte * fitCondition * fitValue * fitCout;
		return fitTalent;
	}

	getFitnessMaitrise(){
		var fitMaitrise, fitEffet;
		
		// Maitrise
		var fitContexte = 1, fitCout = 1, fitCondition = 1, fitValue = 1;
		if(this.maitrise[0] != "") fitCout = this.data.mapCout.get(this.maitrise[0]).param;
		if(this.maitrise[1] != "") fitCondition = this.data.mapConditions.get(this.maitrise[1]).param;
		if(this.maitrise[2] != "") fitContexte = this.data.mapContextes.get(this.maitrise[2]).param;
		fitEffet = this.data.mapEffets.get(this.maitrise[3]).param;
		if(this.data.mapEffets.get(this.maitrise[3]).needValue){
			fitValue = this.maitrise[4];
		}
		fitMaitrise = fitEffet * fitContexte * fitCondition * fitValue * fitCout;
		return fitMaitrise;
	}

	getFitness(){
		var fitness = 0;
		var fitTech = this.technique * this.data.costTechnique;
		var fitDom = this.domination * this.data.costDomination;

		fitness = fitTech + fitDom + this.getFitnessTalent() + this.getFitnessMaitrise();
		return fitness;	
	}

	toString(){
		var str = "", strTalent = "", strMaitrise = "";
		var i, l;
		for(i = 0; i < 5; i++){
			if(!this.talent[i] == ""){
				strTalent += this.talent[i] + " ";
				if(i == 2) strTalent = strTalent + ": "; 
			}
			if(!this.maitrise[i] == ""){
				strMaitrise += this.maitrise[i] + " ";
				if(i == 2) strMaitrise = strMaitrise+ ": "; 
			}
		}
		l = strTalent.length;
		for(i = 0; i < 43 - l; i++){
			strTalent += "-";
		}
		strTalent += " ";
		l = strMaitrise.length;
		for(i = 0; i < 44 - l; i++){
			strMaitrise += "-";
		}
		str = this.technique + " " + this.domination + " | " + strTalent + "| " + strMaitrise;
		return str;
	}

	toHTML(){
		var str = "", strTalent = "", strMaitrise = "";
		var i, l;
		for(i = 0; i < 5; i++){
			if(!this.talent[i] == ""){
				strTalent += this.talent[i] + " ";
				if(i == 2) strTalent = strTalent + ": "; 
			}
			if(!this.maitrise[i] == ""){
				strMaitrise += this.maitrise[i] + " ";
				if(i == 2) strMaitrise = strMaitrise+ ": "; 
			}
		}
		str = 	"<tr>" +
					"<td>" + this.getFitness().toPrecision(3) + "</td>" +
					"<td>" + this.technique + "</td>" +
					"<td>" + this.domination + "</td>" +
					"<td>" + strTalent + "</td>" +
					"<td>" + strMaitrise + "</td>";
				"</tr>";
		return str;
	}
}