
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Associations';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListAnScol").setRowHeight(18);
	$$("component1_ListEleves").setRowHeight(18);
	$$('component1_bUpdate').disable();

	// @region namespaceDeclaration// @startlock
	var Sigle = {};	// @textField
	var Nom = {};	// @textField
	var ListAssociations = {};	// @dataGrid
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	Sigle.blur = function Sigle_blur (event)// @startlock
	{// @endlock
		var SigleEntry, NbSamSigle;
		
		SigleEntry = event.currentTarget.value;
		ds.association.query("Sigle=:1", { 
			onSuccess:function(event) {
				var myCollection = event.entityCollection;
				NbSamSigle = myCollection.length;
				if (NbSamSigle > 0) {
					alert("Ce Sigle (" + SigleEntry +") est déjà utilisé. Merci de saisir un sigle d'association différent");	
					$$('component1_Sigle').setValue(null);
					//$$('component1_clogin').focus(true);
					$$('component1_bSave').disable();
					}
				}, params:[SigleEntry] 
			});
	};// @lock

	Sigle.change = function Sigle_change (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		CNom = $$('component1_Nom').getValue();
		CSigle = $$('component1_Sigle').getValue();
		// alert (CNom + " " + CSigle);
		if ((CNom.length > 0) && (CSigle.length > 0)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	Nom.change = function Nom_change (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		CNom = $$('component1_Nom').getValue();
		CSigle = $$('component1_Sigle').getValue();
		// alert (CNom + " " + CSigle);
		if ((CNom.length > 0) && (CSigle.length > 0)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	Nom.blur = function Nom_blur (event)// @startlock
	{// @endlock
		var NomEntry, NbSamNom;
		
		NomEntry = event.currentTarget.value;
		ds.association.query("Nom=:1", { 
			onSuccess:function(event) {
				var myCollection = event.entityCollection;
				NbSamNom = myCollection.length;
				if (NbSamNom > 0) {
					alert("Ce Nom (" + NomEntry +") est déjà utilisé. Merci de saisir un nom d'association différent");	
					$$('component1_Nom').setValue(null);
					//$$('component1_clogin').focus(true);
					$$('component1_bSave').disable();
					}
				}, params:[NomEntry] 
			});
	};// @lock

	ListAssociations.onRowClick = function ListAssociations_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').enable();
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		
		sources.component1_association.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_ListAnScol').hide();
		$$('component1_ListEleves').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_uPhoto').show();
		$$('component1_Nom').setReadOnly(false);
		$$('component1_Sigle').setReadOnly(false);
		$$('component1_Adresse_1').setReadOnly(false);
		$$('component1_Adresse_2').setReadOnly(false);
		$$('component1_CP').setReadOnly(false);
		$$('component1_Ville').setReadOnly(false);
		$$('component1_Contact_Nom').setReadOnly(false);
		$$('component1_Contact_Portable').setReadOnly(false);
		$$('component1_Contact_eMail').setReadOnly(false);
		$$('component1_Nom').getLabel().setTextColor("red");
		$$('component1_Sigle').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Créer");
		
				
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_ListAnScol').show();
		$$('component1_ListEleves').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_uPhoto').hide();
		$$('component1_Nom').setReadOnly(true);
		$$('component1_Sigle').setReadOnly(true);
		$$('component1_Adresse_1').setReadOnly(true);
		$$('component1_Adresse_2').setReadOnly(true);
		$$('component1_CP').setReadOnly(true);
		$$('component1_Ville').setReadOnly(true);
		$$('component1_Contact_Nom').setReadOnly(true);
		$$('component1_Contact_Portable').setReadOnly(true);
		$$('component1_Contact_eMail').setReadOnly(true);
		
		$$('component1').loadComponent("/Gest_Associations.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_ListAnScol').show();
		$$('component1_ListEleves').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_uPhoto').hide();
		$$('component1_Nom').setReadOnly(true);
		$$('component1_Sigle').setReadOnly(true);
		$$('component1_Adresse_1').setReadOnly(true);
		$$('component1_Adresse_2').setReadOnly(true);
		$$('component1_CP').setReadOnly(true);
		$$('component1_Ville').setReadOnly(true);
		$$('component1_Contact_Nom').setReadOnly(true);
		$$('component1_Contact_Portable').setReadOnly(true);
		$$('component1_Contact_eMail').setReadOnly(true);
		
		sources.component1_association.save({
                onSuccess:function(event2) {}
            });
		
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_ListAnScol').hide();
		$$('component1_ListEleves').hide();
		$$('component1_bSave').show();
		//$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_uPhoto').show();
		$$('component1_Nom').setReadOnly(false);
		$$('component1_Sigle').setReadOnly(false);
		$$('component1_Adresse_1').setReadOnly(false);
		$$('component1_Adresse_2').setReadOnly(false);
		$$('component1_CP').setReadOnly(false);
		$$('component1_Ville').setReadOnly(false);
		$$('component1_Contact_Nom').setReadOnly(false);
		$$('component1_Contact_Portable').setReadOnly(false);
		$$('component1_Contact_eMail').setReadOnly(false);
		$$('component1_Nom').getLabel().setTextColor("red");
		$$('component1_Sigle').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Modifier");
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_Sigle", "blur", Sigle.blur, "WAF");
	WAF.addListener(this.id + "_Sigle", "change", Sigle.change, "WAF");
	WAF.addListener(this.id + "_Nom", "change", Nom.change, "WAF");
	WAF.addListener(this.id + "_Nom", "blur", Nom.blur, "WAF");
	WAF.addListener(this.id + "_ListAssociations", "onRowClick", ListAssociations.onRowClick, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
