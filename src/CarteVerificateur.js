
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
    		
        	var taille = numCarte.length;
    		var deuxL = numCarte.substring(0, 2);
    	
    		if (taille == "15" && (deuxL == "14" || deuxL == "15")){
    		
    			console.log("Carte visa");
	
    		} else {
    		
    			console.log("ce n'est pas une carte visa");
    		}

    	
    }
}


// Algorithme de verification de la carte Master ( implementation de l'interface)

class StrategyMasterCarte extends Strategy{

    InterfaceCarteVerif (numCarte){
    		
        	var taille = numCarte.length;
    		var deuxL = numCarte.substring(0, 2);
    	
    		if (taille == "16" && (deuxL == "41" || deuxL == "40")){
    		
    			console.log("Carte Master");
	
    		} else {
    		
    			console.log("ce n'est pas une carte Master");
    		}

    	
    }
}

// Algorithme de verification de la carte AmericaExpress ( implementation de l'interface)

class StrategyAmericaExpressCarte extends Strategy{


    InterfaceCarteVerif (numCarte){
    		
        	var taille = numCarte.length;
    		var deuxL = numCarte.substring(0, 2);
    	
    		if (taille == "17" && (deuxL == "35" || deuxL == "30")){
    		
    			console.log("Carte AmericaExpress");
	
    		} else {
    		
    			console.log("ce n'est pas une carte AmericaExpress");
    		}
    	
    }
}


// fonction Client ayant le role d'un client verifiant sa carte à partir de la banque 


function Client() {
    let VisaTest = new ContextBanque("Visa")
    VisaTest.ContextInterface("142551111111111")
    let MasterTest = new ContextBanque("Master")
    MasterTest.ContextInterface("4011111111111111")
    let AmericaExpressTest = new ContextBanque("AmericaExpress")
    AmericaExpressTest.ContextInterface("35522121212n21214")
}

Client()
