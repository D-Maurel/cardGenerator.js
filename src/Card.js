class Card {
	constructor(){
		this.technique = 0;
		this.domination = 0;
		this.talent = new Capacite();
		this.maitrise = new Capacite();
		this.data = window.data;
	}

	getFitness(){
		var fitness = 0;
		var fitTech = this.technique * this.data.costTechnique;
		var fitDom = this.domination * this.data.costDomination;

		fitness = fitTech + fitDom + this.talent.getFitness() + this.maitrise.getFitness();
		return fitness;	
	}

	toString(){
		return this.technique + " " + this.domination + " | " + this.talent.toString() + " | " + this.maitrise.toString();
	}

	toHTML(){
		var str = "";
		str =
			`<tr>
				<td> ${this.getFitness().toPrecision(3)} </td>
				<td> ${this.technique} </td>
				<td> ${this.domination} </td>
				<td> ${this.talent.toString()} </td>
				<td> ${this.maitrise.toString()} </td>
			</tr>`;
		return str;
	}
}