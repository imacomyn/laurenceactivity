
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Inscriptions';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();

	// @region namespaceDeclaration// @startlock
	var ListNIns = {};	// @dataGrid
	var btIns = {};	// @buttonImage
	var ListInscrits = {};	// @dataGrid
	var btSup = {};	// @buttonImage
	var ListAnScol = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	ListNIns.onRowClick = function ListNIns_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btIns').show();
	};// @lock

	btIns.click = function btIns_click (event)// @startlock
	{// @endlock
		var myInscrits, nbInscrits, vIdIns, vIdAbo, myAbonnes, nbAbonnes, nbTrouve, inscrit, abonne, vFlag;
		
		//$$('component1_cAction').setValue("AddUsr");
		myInscrits = sources.component1_eleves1;
		vIdIns = myInscrits.getAttributeValue("Eleve.ID");
		//alert('traite inscrit '+vIdIns);
		myAbonnes = sources.component1_inscriptionsCollection;
		nbAbonnes = myAbonnes.length;
		vFlag = true;
		for (var j = 0; j < nbAbonnes; j++) {
			myAbonnes.getElement(j, { onSuccess: function(event) {
				abonne = event.element;
				vIdAbo = abonne.getAttributeValue("Eleve.ID");
				//alert('Compare Inscrit ' + vIdIns + ' avec abonné ' + vIdAbo);
				if (vIdAbo === vIdIns) {
					//alert ('Inscrit trouvé chez les abonnés');
					vFlag = false;
				}
			}});
		}
		if (vFlag) {
			sources.component1_eleves2.query("ID = :1", { onSuccess: function(event) { 
				var vCount = sources.component1_eleves2.length;
				if(vCount === 1) {
					sources.component1_inscriptionsCollection.addNewElement();
					sources.component1_inscriptionsCollection.Annee_Scolaire.set(sources.component1_annees_Scolaires);
					sources.component1_inscriptionsCollection.Eleve.set(sources.component1_eleves2);
					sources.component1_inscriptionsCollection.save();
				}
			}, params:[vIdIns] });
		};
		
		$$('component1_btIns').hide();
		

	};// @lock

	ListInscrits.onRowClick = function ListInscrits_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btSup').show();
		$$('component1_btUpd').show();
	};// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer l'inscription de cet élève à cette année scolaire ? Tout le suivi de paiement de cet élève pour cette anée scolaire sera perdu.");
		
		if (isok) {
			sources.component1_inscriptionsCollection.removeCurrent();
			$$('component1_btSup').hide();
			$$('component1_btUpd').hide();
		}
	};// @lock

	ListAnScol.onRowClick = function ListAnScol_onRowClick (event)// @startlock
	{// @endlock
		var vAnScol, vToday;
		
		vAnScol = sources.component1_annees_Scolaires.ID;
		vToday = new Date();
		sources.component1_eleves1.query("Association.ID=:1 and ( Utilisateur.Date_Sortie = null or Utilisateur.Date_Sortie > :2 ) order by Nom_Complet",vAnScol,vToday);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListNIns", "onRowClick", ListNIns.onRowClick, "WAF");
	WAF.addListener(this.id + "_btIns", "click", btIns.click, "WAF");
	WAF.addListener(this.id + "_ListInscrits", "onRowClick", ListInscrits.onRowClick, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_ListAnScol", "onRowClick", ListAnScol.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
