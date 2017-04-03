class CardGenerator {
	constructor(){
		this.pCondition = .2;
		this.pContexte = .3;
		this.pCout = .1;
		this.pEmpty = .1;
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
			card.talent[3] = this.data.keysEffets[indexEffet];
			c3 = card.talent[3];
		} while (c3 == "--" && randomDouble() > this.pEmpty);
		if(randomDouble() < this.pContexte && c3 != "--"){
			do{
				indexContexte = randomInt(this.data.keysContextes.length, 0);
				card.talent[2] = this.data.keysContextes[indexContexte];
				c2 = card.talent[2];
				nV = this.data.mapEffets.get(c3).needValue;
				C = c2 == "Contrecoup";
				e = c2 == "";
				sT = c3 == "Stop Talent";
				cT = c3 == "Copie Talent";
				mF = this.data.mapEffets.get(c3).modifFight;
				pG = c2 == "par Glyphe";
			} while (!e && (!(nV || C) || sT || cT) || mF && pG); // merci la loi de Morgan
		} else {
			card.talent[2] = "";
		}
		if(randomDouble() < this.pCout 
				&& c3 != "--" && c2 != "Contrecoup"){
			indexCout = randomInt(this.data.keysCout.length, 0);
			card.talent[0] = this.data.keysCout[indexCout];
		} else {
			card.talent[0] = "";
		}
		if(randomDouble() < this.pCondition && c3 != "--"){
			do {
				indexCondition = randomInt(this.data.keysConditions.length, 0);
				card.talent[1] = this.data.keysConditions[indexCondition];
				var c1 = card.talent[1];
			} while (this.data.mapEffets.get(c3).modifFight &&
					(c1 == "Victoire" || c1 == "Defaite"));
		} else {
			card.talent[1] = "";
		}
		if(this.data.mapEffets.get(card.talent[3]).needValue){
			card.talent[4] = randomInt(4,1) + "";
		} else {
			card.talent[4] = "";
		}	
		
		// Generation de la maitrise
		do{
			indexEffet = randomInt(this.data.keysEffets.length, 0);
			card.maitrise[3] = this.data.keysEffets[indexEffet];
			c3 = card.maitrise[3];
		}while(!this.data.mapEffets.get(c3).isMaitrisable
				|| (c3 == "--" && randomDouble() > this.pEmpty));
		if(randomDouble() < this.pContexte && !c3 == "--"){
			do{
				indexContexte = randomInt(this.data.keysContextes.length, 0);
				card.maitrise[2] = this.data.keysContextes[indexContexte];
				c2 = card.maitrise[2];
			} while (!this.data.mapEffets.get(c3).needValue && !c2 == "Contrecoup"
					|| (c3 == "Stop Talent"
							|| c3 == "Copie Talent") && c2 == "Contrecoup");
		} else {
			card.maitrise[2] = "";
		}
		if(randomDouble() < this.pCout 
				&& !(c3 == "--") || c2 == "Contrecoup"){
			indexCout = randomInt(this.data.keysCout.length, 0);
			card.maitrise[0] = this.data.keysCout[indexCout];
		} else {
			card.maitrise[0] = "";
		}
		if(randomDouble() < this.pCondition && !c3 == "--"){
			do{
				indexCondition = randomInt(this.data.keysConditions.length, 0);
				card.maitrise[1] = this.data.keysConditions[indexCondition];
			} while (!this.data.mapEffets.get(c3).needValue && 
					(card.maitrise[1] == "Victoire") || card.maitrise[1] == "Defaite");
		} else {
			card.maitrise[1] = "";
		}
		if(this.data.mapEffets.get(c3).needValue){
			card.maitrise[4] = randomInt(4,1) + "";
		} else {
			card.maitrise[4] = "";
		}
		
		return card;
	}
}