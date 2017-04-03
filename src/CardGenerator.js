class CardGenerator {
	constructor(){
		this.pCondition = .2;
		this.pContexte = .2;
		this.pCout = .1;
		this.pEmpty = .7;
		this.data = new Data();
	}

	generateCard(){
		console.log("generation d'une carte");
		var indexCondition, indexContexte, indexCout, indexEffet;
		var nV, C, sT, cT, e, mF, pG;
		var c3, c2 = "";
		
		var card = new Card();
		card.technique = randomInt(10, 5);
		card.domination = randomInt(8, 0);
		
		// Generation du talent
		do{
			indexEffet = randomInt(this.data.keysEffets.length, 0);
			card.talent.effet = this.data.keysEffets[indexEffet];
			c3 = card.talent.effet;
		} while (c3 == "--" && randomDouble() > this.pEmpty);

		if(randomDouble() < this.pContexte && c3 != "--"){
			do{
				indexContexte = randomInt(this.data.keysContextes.length, 0);
				card.talent.contexte = this.data.keysContextes[indexContexte];
				c2 = card.talent.contexte;
				nV = this.data.mapEffets.get(c3).needValue;
				C = c2 == "Contrecoup";
				e = c2 == "";
				sT = c3 == "Stop Talent";
				cT = c3 == "Copie Talent";
				mF = this.data.mapEffets.get(c3).modifFight;
				pG = c2 == "par Glyphe";
			} while (!e && (!(nV || C) || sT || cT) || mF && pG); // merci la loi de Morgan
		} else {
			card.talent.contexte = "";
		}

		if(randomDouble() < this.pCout 
				&& c3 != "--" && c2 != "Contrecoup"){
			indexCout = randomInt(this.data.keysCout.length, 0);
			card.talent.cout = this.data.keysCout[indexCout];
		} else {
			card.talent.cout = "";
		}

		if(randomDouble() < this.pCondition && c3 != "--"){
			do {
				indexCondition = randomInt(this.data.keysConditions.length, 0);
				card.talent.condition = this.data.keysConditions[indexCondition];
				var c1 = card.talent.condition;
			} while (this.data.mapEffets.get(c3).modifFight &&
					(c1 == "Victoire" || c1 == "Defaite"));
		} else {
			card.talent.condition = "";
		}

		if(this.data.mapEffets.get(card.talent.effet).needValue){
			card.talent.value = randomInt(4,1) + "";
		} else {
			card.talent.value = "";
		}	
		
		// Generation de la maitrise
		do{
			indexEffet = randomInt(this.data.keysEffets.length, 0);
			card.maitrise.effet = this.data.keysEffets[indexEffet];
			c3 = card.maitrise.effet;
		}while(!this.data.mapEffets.get(c3).isMaitrisable
				|| (c3 == "--" && randomDouble() > this.pEmpty));
		if(randomDouble() < this.pContexte && c3 != "--"){
			do{
				indexContexte = randomInt(this.data.keysContextes.length, 0);
				card.maitrise.contexte = this.data.keysContextes[indexContexte];
				c2 = card.maitrise.contexte;
			} while (!this.data.mapEffets.get(c3).needValue && c2 != "Contrecoup"
					|| (c3 == "Stop Talent"
							|| c3 == "Copie Talent") && c2 == "Contrecoup");
		} else {
			card.maitrise.contexte = "";
		}
		if(randomDouble() < this.pCout 
				&& c3 != "--" || c2 == "Contrecoup"){
			indexCout = randomInt(this.data.keysCout.length, 0);
			card.maitrise.cout = this.data.keysCout[indexCout];
		} else {
			card.maitrise.cout = "";
		}
		if(randomDouble() < this.pCondition && c3 != "--"){
			do{
				indexCondition = randomInt(this.data.keysConditions.length, 0);
				card.maitrise.condition = this.data.keysConditions[indexCondition];
			} while (!this.data.mapEffets.get(c3).needValue && 
					(card.maitrise.condition == "Victoire" || card.maitrise.condition == "Defaite"));
		} else {
			card.maitrise.condition = "";
		}
		if(this.data.mapEffets.get(c3).needValue){
			card.maitrise.value = randomInt(4,1) + "";
		} else {
			card.maitrise.value = "";
		}
		
		return card;
	}
}