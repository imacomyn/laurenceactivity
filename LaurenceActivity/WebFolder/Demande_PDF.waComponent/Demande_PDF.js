
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Demande_PDF';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListPDF").setRowHeight(22);	
	$$("component1_ListDem").setRowHeight(22);	
	sources.component1_demande_PDF.query("Etat = 'Demandé' order by Date_Creation desc");

	// @region namespaceDeclaration// @startlock
	var btUndo = {};	// @button
	var btSave = {};	// @button
	var ListDem = {};	// @dataGrid
	var cbx3 = {};	// @checkbox
	var cbx2 = {};	// @checkbox
	var cbx1 = {};	// @checkbox
	var cbxDem = {};	// @checkbox
	var ListAbo = {};	// @dataGrid
	var ListPDF = {};	// @dataGrid
	var ListNIns = {};	// @dataGrid
	var btIns = {};	// @buttonImage
	var btSup = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
			$$('component1_cbx1').hide();
			$$('component1_cbx2').hide();
			$$('component1_cbx3').hide();
			$$('component1_btSave').hide();
			$$('component1_btUndo').hide();
			$$('component1_cDem').setReadOnly(true);
		
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbx1').getValue()) {
			$$('component1_cEtat').setValue("Traité");
			sources.component1_demande_PDF.save();
			$$('component1_cbx1').hide();
			$$('component1_cbx2').hide();
			$$('component1_cbx3').hide();
			$$('component1_btSave').hide();
			$$('component1_btUndo').hide();
			$$('component1_cDem').setReadOnly(true);
		}
		if ($$('component1_cbx2').getValue()) {
			$$('component1_cEtat').setValue("Inexistant");
			sources.component1_demande_PDF.save();
			$$('component1_cbx1').hide();
			$$('component1_cbx2').hide();
			$$('component1_cbx3').hide();
			$$('component1_btSave').hide();
			$$('component1_btUndo').hide();
			$$('component1_cDem').setReadOnly(true);
		}
		if ($$('component1_cbx3').getValue()) {
			$$('component1_cEtat').setValue("Indisponible");
			sources.component1_demande_PDF.save();
			$$('component1_cbx1').hide();
			$$('component1_cbx2').hide();
			$$('component1_cbx3').hide();
			$$('component1_btSave').hide();
			$$('component1_btUndo').hide();
			$$('component1_cDem').setReadOnly(true);
		}
	};// @lock

	ListDem.onRowClick = function ListDem_onRowClick (event)// @startlock
	{// @endlock
		if ($$('component1_cEtat').getValue() === "Demandé" ) {
			$$('component1_cbx1').show();
			$$('component1_cbx1').check();
			$$('component1_cbx2').show();
			$$('component1_cbx2').uncheck();
			$$('component1_cbx3').show();
			$$('component1_cbx3').uncheck();
			$$('component1_btSave').show();
			$$('component1_btUndo').show();
			$$('component1_cDem').setReadOnly(false);
		} else {
			$$('component1_cbx1').hide();
			$$('component1_cbx2').hide();
			$$('component1_cbx3').hide();
			$$('component1_btSave').hide();
			$$('component1_btUndo').hide();
			$$('component1_cDem').setReadOnly(true);
		}
	};// @lock

	cbx3.click = function cbx3_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbx3').getValue()) {
			$$('component1_cbx2').uncheck();
			$$('component1_cbx1').uncheck();
		}
	};// @lock

	cbx2.click = function cbx2_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbx2').getValue()) {
			$$('component1_cbx1').uncheck();
			$$('component1_cbx3').uncheck();
		}
	};// @lock

	cbx1.click = function cbx1_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbx1').getValue()) {
			$$('component1_cbx2').uncheck();
			$$('component1_cbx3').uncheck();
		}
	};// @lock

	cbxDem.click = function cbxDem_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxDem').getValue()) {
			sources.component1_demande_PDF.query("Etat = 'Demandé' order by Date_Creation desc");
		} else {
			sources.component1_demande_PDF.query("ID > 0 order by Date_Creation desc");
		}
	};// @lock

	ListAbo.onRowClick = function ListAbo_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btSup').show();
		$$('component1_btIns').hide();
	};// @lock

	ListPDF.onRowClick = function ListPDF_onRowClick (event)// @startlock
	{// @endlock
		var vAnScol, vToday,vUser;
		
		$$('component1_btSup').hide();
		$$('component1_btIns').hide();
				
		vToday = new Date();
		sources.component1_eleves1.query("( Utilisateur.Date_Sortie = null or Utilisateur.Date_Sortie > :1 ) order by Nom_Complet",vToday);
	};// @lock

	ListNIns.onRowClick = function ListNIns_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btIns').show();
		$$('component1_btSup').hide();

	};// @lock

	btIns.click = function btIns_click (event)// @startlock
	{// @endlock
		var myInscrits, nbInscrits, vIdIns, vIdAbo, myAbonnes, nbAbonnes, nbTrouve, inscrit, abonne, vFlag;
		
		//$$('component1_cAction').setValue("AddUsr");
		myInscrits = sources.component1_eleves1;
		vIdIns = myInscrits.getAttributeValue("Eleve.ID");
		//alert('traite inscrit '+vIdIns);
		myAbonnes = sources.component1_abonnesCollection;
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
			sources.component1_eleves.query("ID = :1", { onSuccess: function(event) { 
				var vCount = sources.component1_eleves.length;
				if(vCount === 1) {
					sources.component1_abonnesCollection.addNewElement();
					sources.component1_abonnesCollection.Cours.set(sources.component1_cours_PDF);
					sources.component1_abonnesCollection.Eleve.set(sources.component1_eleves);
					sources.component1_abonnesCollection.save();
				}
			}, params:[vIdIns] });
		};
		
		$$('component1_btIns').hide();
		

	};// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer l'abonnement de cet élève à ce cours PDF ?");
		
		if (isok) {
			sources.component1_abonnesCollection.removeCurrent();
			$$('component1_btSup').hide();
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_ListDem", "onRowClick", ListDem.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbx3", "click", cbx3.click, "WAF");
	WAF.addListener(this.id + "_cbx2", "click", cbx2.click, "WAF");
	WAF.addListener(this.id + "_cbx1", "click", cbx1.click, "WAF");
	WAF.addListener(this.id + "_cbxDem", "click", cbxDem.click, "WAF");
	WAF.addListener(this.id + "_ListAbo", "onRowClick", ListAbo.onRowClick, "WAF");
	WAF.addListener(this.id + "_ListPDF", "onRowClick", ListPDF.onRowClick, "WAF");
	WAF.addListener(this.id + "_ListNIns", "onRowClick", ListNIns.onRowClick, "WAF");
	WAF.addListener(this.id + "_btIns", "click", btIns.click, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
