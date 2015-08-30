
(function Component (id) {// @lock
	
	var wURL = window.location.href,
		wPathname = window.location.pathname,
		iFrame;


// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_PDF';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListPDF").setRowHeight(22);	
	$$("component1_ListAbo").setRowHeight(22);
	$$("component1_ListNIns").setRowHeight(22);
	sources.component1_cours_PDF.query("ID > 0 Order by Nom");

	// @region namespaceDeclaration// @startlock
	var cbfCat = {};	// @combobox
	var cbxFiltre = {};	// @checkbox
	var ListAbo = {};	// @dataGrid
	var ListPDF = {};	// @dataGrid
	var btSup = {};	// @buttonImage
	var ListNIns = {};	// @dataGrid
	var btIns = {};	// @buttonImage
	var btClose = {};	// @buttonImage
	var btShow = {};	// @buttonImage
	var cNom = {};	// @textField
	var cUpld = {};	// @fileUpload
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cbfCat.change = function cbfCat_change (event)// @startlock
	{// @endlock
		var vQuery;
		if ($$('component1_cbfCat').getValue() === "Meuble Carton") {
			vQuery = "Categorie = 'Meuble*' Order by Nom";
		} else {
			vQuery = "Categorie = '" + $$('component1_cbfCat').getValue() + "' Order by Nom";
		}
		sources.component1_cours_PDF.query(vQuery);
		
	};// @lock

	cbxFiltre.click = function cbxFiltre_click (event)// @startlock
	{// @endlock
		var vQuery;
		if ($$('component1_cbxFiltre').getValue()) {
			$$('component1_cbfCat').show();
			if ($$('component1_cbfCat').getValue() === "Meuble Carton") {
				vQuery = "Categorie = 'Meuble*' Order by Nom";
			} else {
				vQuery = "Categorie = '" + $$('component1_cbfCat').getValue() + "' Order by Nom";
			}
		} else {
			$$('component1_cbfCat').hide();
			vQuery = "ID > 0 Order by Nom";
		}
		sources.component1_cours_PDF.query(vQuery);
		
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

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer l'abonnement de cet élève à ce cours PDF ?");
		
		if (isok) {
			sources.component1_abonnesCollection.removeCurrent();
			$$('component1_btSup').hide();
		}
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

	btClose.click = function btClose_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_btShow').show();
		$$('component1_btClose').hide();
		$$('component1_fShow').hide();
	};// @lock

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		var vFic, vURL;
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_btShow').hide();
		$$('component1_btClose').show();
		$$('component1_fShow').show();
		

		
	};// @lock

	cNom.change = function cNom_change (event)// @startlock
	{// @endlock
		var cNom;
		CNom = $$('component1_cNom').getValue();
		if (CNom.length > 0)  {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cNom.blur = function cNom_blur (event)// @startlock
	{// @endlock
		var RefEntry, NbSamRef, vAction;
		
		RefEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Cours_PDF.query("Nom=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamRef = myCollection.length;
					if (NbSamRef > 0) {
						alert("Ce nom de cours (" + RefEntry +") est déjà utilisé. Merci de saisir un nom de cours différent.");	
						$$('component1_cNom').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[RefEntry] 
				});
		}

	};// @lock

	cUpld.filesUploaded = function cUpld_filesUploaded (event)// @startlock
	{// @endlock
		//var myArray = $$('component1_cUpld').getFiles();
		//$$('component1_cFic').setValue(myArray[0].name);
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		
		sources.component1_cours_PDF.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		
		$$('component1_ListPDF').disable();
		$$('component1_cNom').setReadOnly(false);
		$$('component1_cDesc').setReadOnly(false);
		$$('component1_cCat').hide();
		$$('component1_cbCat').show();
		$$('component1_btShow').hide();
		$$('component1_cUpld').show();
		$$('component1_uPhoto').show();
		$$('component1_fShow').hide();
		$$('component1_cNom').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Créer");
		
				
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		
		$$('component1_ListPDF').enable();
		$$('component1_ListPDF').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(true);
		$$('component1_cCat').show();
		$$('component1_cbCat').hide();
		$$('component1_btShow').show();
		$$('component1_cUpld').hide();
		$$('component1_uPhoto').hide();
		$$('component1_fShow').hide();
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		
		$$('component1').loadComponent("/Gest_PDF.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		
		$$('component1_ListPDF').enable();
		$$('component1_ListPDF').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(true);
		$$('component1_cCat').show();
		$$('component1_cbCat').hide();
		$$('component1_btShow').show();
		$$('component1_cUpld').hide();
		$$('component1_uPhoto').hide();
		$$('component1_fShow').hide();
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		$$('component1_cCat').setValue($$('component1_cbCat').getValue());
		
		sources.component1_cours_PDF.save({
                onSuccess:function(event2) {}
            });
		
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').enable();
		$$('component1_bUndo').show();
		
		$$('component1_ListPDF').disable();
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(false);
		$$('component1_cCat').hide();
		$$('component1_cbCat').show();
		$$('component1_btShow').hide();
		$$('component1_cUpld').show();
		$$('component1_uPhoto').show();
		$$('component1_fShow').hide();
		$$('component1_cbCat').setValue($$('component1_cCat').getValue());
		$$('component1_cAction').setValue("Modifier");
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbfCat", "change", cbfCat.change, "WAF");
	WAF.addListener(this.id + "_cbxFiltre", "click", cbxFiltre.click, "WAF");
	WAF.addListener(this.id + "_ListAbo", "onRowClick", ListAbo.onRowClick, "WAF");
	WAF.addListener(this.id + "_ListPDF", "onRowClick", ListPDF.onRowClick, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_ListNIns", "onRowClick", ListNIns.onRowClick, "WAF");
	WAF.addListener(this.id + "_btIns", "click", btIns.click, "WAF");
	WAF.addListener(this.id + "_btClose", "click", btClose.click, "WAF");
	WAF.addListener(this.id + "_btShow", "click", btShow.click, "WAF");
	WAF.addListener(this.id + "_cNom", "change", cNom.change, "WAF");
	WAF.addListener(this.id + "_cNom", "blur", cNom.blur, "WAF");
	WAF.addListener(this.id + "_cUpld", "filesUploaded", cUpld.filesUploaded, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
