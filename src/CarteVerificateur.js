
//ContextBanque permet de recuperer les valeurs de retour de chaques types de cartes (visa, master, americaexpress)

class ContextBanque {
    constructor(type){
        switch(type) {
            case "Visa":
                this.strategy = new StrategyVisaCarte()
                break
            case "Master":
                this.strategy = new StrategyMasterCarte()
                break
            case "AmericaExpress":
                this.strategy = new StrategyAmericaExpressCarte()
                break
        }
    }

    ContextInterface (numCarte){
        this.strategy.InterfaceCarteVerif(numCarte)
    }
}

// interface de la strategie de verification des cartes (implementer par chaques types de carte)

class Strategy {

    InterfaceCarteVerif (numCarte){
    }
}

// Algorithme de verification de la carte Visa ( implementation de l'interface)

class StrategyVisaCarte extends Strategy{

	 InterfaceCarteVerif (numCarte){
	    	var nSomme = 0, nInt = 0, nPaire = false;    	
	        	var taille = numCarte.length;
	    		var deuxL = numCarte.substring(0, 2);
	    		if (Number(numCarte)){
	    			for (var n = taille - 1; n >= 0; n--) {
	    				var nInt = numCarte.charAt(n),
	    				nInt = parseInt(nInt, 10);
	    				if (nPaire) {
	    					if ((nInt *= 2) > 9) nInt -= 9;
	    				}
	    				nSomme += nInt;
	    				nPaire = !nPaire;	  
	    			} 
	    			
	    			if ((nSomme % 10) == 0){
	    				if (taille == "15" && (deuxL == "14" || deuxL == "15")){
	    					console.log("Carte Visa");
	    				} else {
	    					console.log("ce n'est pas une carte Visa");
	    				} 
	    			} else {
	    				console.log("le numero ne corresponds pas à un numero de carte de credit");
	    			}
	    		}else {
	    			console.log ("carte non valide(les lettres et les caratères speciaux ne sont pas pris en charge)");
	    		}
	       }			
}


// Algorithme de verification de la carte Master ( implementation de l'interface)

class StrategyMasterCarte extends Strategy{

	  InterfaceCarteVerif (numCarte){
	    	var nSomme = 0, nInt = 0, nPaire = false;    	
	        	var taille = numCarte.length;
	    		var deuxL = numCarte.substring(0, 2);
	    		if (Number(numCarte)){
	    			for (var n = taille - 1; n >= 0; n--) {
	    				var nInt = numCarte.charAt(n),
	    				nInt = parseInt(nInt, 10);
	    				if (nPaire) {
	    					if ((nInt *= 2) > 9) nInt -= 9;
	    				}
	    				nSomme += nInt;
	    				nPaire = !nPaire;	    				
	    			} 
	    			
	    			if ((nSomme % 10) == 0){
	    				if (taille == "16" && (deuxL == "40" || deuxL == "41")){
	    					console.log("Carte Master");
	    				} else {
	    					console.log("ce n'est pas une carte Master");
	    				} 
	    			} else {
	    				console.log("le numero ne corresponds pas à un numero de carte de credit");
	    			}
	    		}else {
	    			console.log ("carte non valide(les lettres et les caratères speciaux ne sont pas pris en charge)");
	    		}
	       }		
}

// Algorithme de verification de la carte AmericaExpress ( implementation de l'interface)

class StrategyAmericaExpressCarte extends Strategy{

    InterfaceCarteVerif (numCarte){
    	var nSomme = 0, nInt = 0, nPaire = false;   	
        	var taille = numCarte.length;
    		var deuxL = numCarte.substring(0, 2);
    		if (Number(numCarte)){
    			for (var n = taille - 1; n >= 0; n--) {
    				var nInt = numCarte.charAt(n),
    				nInt = parseInt(nInt, 10);
    				if (nPaire) {
    					if ((nInt *= 2) > 9) nInt -= 9;
    				}
    				nSomme += nInt;
    				nPaire = !nPaire;
    			}    			
    			if ((nSomme % 10) == 0){
    				if (taille == "17" && (deuxL == "35" || deuxL == "39")){
    					console.log("Carte AmericaExpress");
    				} else {
    					console.log("ce n'est pas une carte AmericaExpress");
    				} 
    			} else {
    				console.log("le numero ne corresponds pas à un numero de carte de credit");
    			}
    		}else {
    			console.log ("carte non valide(les lettres et les caratères speciaux ne sont pas pris en charge)");
    		}
       }	
}


// fonction Client ayant le role d'un client verifiant sa carte à partir de la banque 


function Client() {
    let VisaTest = new ContextBanque("Visa")
    VisaTest.ContextInterface("142551111111101")
    let MasterTest = new ContextBanque("Master")
    MasterTest.ContextInterface("4104885788648930")
    let AmericaExpressTest = new ContextBanque("AmericaExpress")
    AmericaExpressTest.ContextInterface("35522121421221234")
}

Client()
