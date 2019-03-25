# Projet_ES6
# Reproduire le modele strategy design pattern en javascript (ES6)

Bref apercu de l'architecture de notre projet 


# Client === ContextBanque === InterfaceStrategy ==== [ensemble d'objet]


# Mise en place de l'interface
Notre interface contient une seule methode abstrait ayant comme argument le "numero de la carte bancaire : numCarte"
Une interface que chaque carte bancaire va implementer et retourner une valeur de la nature de la carte

      class Strategy {
        InterfaceCarteVerif (numCarte){}
      }
       
# implementation de chaque cartes à l'interface 
# Carte Visa
respectant les conditions requis pour determiner si une carte est visa, Master, AmericaExpress ou non, voici notre algo

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
    
# carte Master

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
      
# Carte AmericaExpress

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
    
    
# le Contexte
Ici il sagit de la banque qui sera l'intermediaire entre le client et l'interface de la verification des clients
nous utilisons une methode ou un construteur pour le test des cartes.
Et une methode ContextInterface() fesant la lianson entre la classe interface strategie et la classe contextBanque

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

# Client (Une capture du test est dans le repertoire "img")
il sagit d'une fonction test qui testera si une carte est visa ou pas 

      function Client() {
        let VisaTest = new ContextBanque("Visa")
        VisaTest.ContextInterface("142551111111111")
        let MasterTest = new ContextBanque("Master")
        MasterTest.ContextInterface("4011111111111111")
        let AmericaExpressTest = new ContextBanque("AmericaExpress")
        AmericaExpressTest.ContextInterface("35522121212121214")
    }
    
  
  # Conclusion
  
  L'implementation de la strategie design pattern est un succès pour le test des cartes. Seul bemol le typage etant abscent nous allons
  devoir faire une mis a niveau plutard pour exclure les lettres dans le test.