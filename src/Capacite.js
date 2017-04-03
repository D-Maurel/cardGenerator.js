class Capacite {
    constructor(){
        this.cout = "";
        this.contexte = "";
        this.condition = "";
        this.effet = "";
        this.value = "";
        this.data = new Data();
    }

    getFitness(){
        var fitEffet;
		var fitContexte = 1, fitCout = 1, fitCondition = 1, fitValue = 1;
		if(this.cout != "") fitCout = this.data.mapCout.get(this.cout).param;
		if(this.condition != "") fitCondition = this.data.mapConditions.get(this.condition).param;
		if(this.contexte != "") fitContexte = this.data.mapContextes.get(this.contexte).param;
		fitEffet = this.data.mapEffets.get(this.effet).param;
		if(this.data.mapEffets.get(this.effet).needValue){
			fitValue = this.value;
		}
		return fitEffet * fitContexte * fitCondition * fitValue * fitCout;
    }

    toString(){
        let str = "";
        if(this.cout != "") str += this.cout + " ";
        if(this.condition != "") str += this.condition + " ";
        if(this.contexte != "") str += this.contexte + " ";
        if(str != "") str += " : ";
        str += this.effet;
        if(this.value != "") str += " " + this.value;
        return str;
    }
}