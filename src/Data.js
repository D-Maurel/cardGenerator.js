class Data {
	constructor(){
		this.costTechnique = 1.3;
		this.costDomination = 2.2;

		this.mapEffets = new Map();
		this.mapEffets.set("+D", new Effet("+D", true, true, true, 2.2));
		this.mapEffets.set("-D", new Effet("-D", true, true, true, 2.2));
		this.mapEffets.set("+T", new Effet("+T", false, true, true, 1.3));
		this.mapEffets.set("-T", new Effet("-T", false, true, true, 1.3));
		this.mapEffets.set("+R", new Effet("+R", true, true, false, 2));
		this.mapEffets.set("-R", new Effet("-R", true, true, false, 2.2));
		this.mapEffets.set("Stop Talent", new Effet("Stop Talent", false, false, true, 5));
		this.mapEffets.set("Stop Maitrise", new Effet("Stop Maitrise", false, false, true, 4));
		this.mapEffets.set("Fatigue", new Effet("Fatigue", false, true, true, 2));
		this.mapEffets.set("Recuperation", new Effet("Recuperation", true, true, false, 5));
		this.mapEffets.set("Protection", new Effet("Protection", false, false, true, 4));
		this.mapEffets.set("Copie Technique", new Effet("Copie Technique", false, false, true, 3));
		this.mapEffets.set("Copie Domination", new Effet("Copie Domination", true, false, true, 3));
		this.mapEffets.set("Copie Talent", new Effet("Copie Talent", false, false, true, 3));
		this.mapEffets.set("Copie Maitrise", new Effet("Copie Maitrise", true, false, false, 3));
		this.mapEffets.set("Oppression", new Effet("Oppression", true, true, false, 6));
		this.mapEffets.set("Pillage", new Effet("Pillage", true, true, false, 8));
		this.mapEffets.set("Initiative", new Effet("Initiative", false, false, true, 6));
		this.mapEffets.set("--", new Effet("--", true, false, false, 0));
		this.keysEffets = Array.from(this.mapEffets.keys());

		this.mapContextes = new Map();
		this.mapContextes.set("Patience", new Modifiers("Patience", 3 ));
		this.mapContextes.set("Acharnement", new Modifiers("Acharnement", 3));
		this.mapContextes.set("Contrecoup", new Modifiers("Contrecoup", -1));
		this.mapContextes.set("par Glyphe", new Modifiers("par Glyphe", 3));
		this.mapContextes.set("", new Modifiers("", 1));
		this.keysContextes = Array.from(this.mapContextes.keys());

		this.mapConditions = new Map();
		this.mapConditions.set("Courage", new Modifiers("Courage", 0.8));
		this.mapConditions.set("Riposte", new Modifiers("Riposte", 0.8));
		this.mapConditions.set("Victoire", new Modifiers("Victoire", 0.8));
		this.mapConditions.set("Defaite", new Modifiers("Defaite", 0.9));
		this.keysConditions = Array.from(this.mapConditions.keys());

		this.mapCout = new Map();
		this.mapCout.set("Sacrifice", new Modifiers("Sacrifice", 0.6));
		this.keysCout = Array.from(this.mapCout.keys());
	}
}