
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
	var cCoul = {};	// @textField
	var button2 = {};	// @button
	var cRoseF = {};	// @button
	var cSaumon = {};	// @button
	var cMarron = {};	// @button
	var cVioletc = {};	// @button
	var cGrisC = {};	// @button
	var cCiel = {};	// @button
	var bGris = {};	// @button
	var cOrange = {};	// @button
	var button3 = {};	// @button
	var cJaune = {};	// @button
	var cBleuVert = {};	// @button
	var cVert = {};	// @button
	var cRouge = {};	// @button
	var cBleu = {};	// @button
	var cRose = {};	// @button
	var Sigle = {};	// @textField
	var Nom = {};	// @textField
	var ListAssociations = {};	// @dataGrid
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cCoul.click = function cCoul_click (event)// @startlock
	{// @endlock
		$$("component1_tCoul").setBackgroundColor($$("component1_cCoulCode").getValue());
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu foncé");
		$$("component1_cCoulCode").setValue("#778de5");
		$$("component1_tCoul").setBackgroundColor("#778de5");
	};// @lock

	cRoseF.click = function cRoseF_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Rose foncé");
		$$("component1_cCoulCode").setValue("#ffaad4");
		$$("component1_tCoul").setBackgroundColor("#ffaad4");
	};// @lock

	cSaumon.click = function cSaumon_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Saumon");
		$$("component1_cCoulCode").setValue("#ffd4aa");
		$$("component1_tCoul").setBackgroundColor("#ffd4aa");
	};// @lock

	cMarron.click = function cMarron_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Marron");
		$$("component1_cCoulCode").setValue("#d8883c");
		$$("component1_tCoul").setBackgroundColor("#d8883c");
	};// @lock

	cVioletc.click = function cVioletc_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Violet clair");
		$$("component1_cCoulCode").setValue("#d4aaff");
		$$("component1_tCoul").setBackgroundColor("#d4aaff");
	};// @lock

	cGrisC.click = function cGrisC_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Gris clair");
		$$("component1_cCoulCode").setValue("#e5e5e5");
		$$("component1_tCoul").setBackgroundColor("#e5e5e5");
	};// @lock

	cCiel.click = function cCiel_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu ciel");
		$$("component1_cCoulCode").setValue("#aad4ff");
		$$("component1_tCoul").setBackgroundColor("#aad4ff");
	};// @lock

	bGris.click = function bGris_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Gris");
		$$("component1_cCoulCode").setValue("#b2b2b2");
		$$("component1_tCoul").setBackgroundColor("#b2b2b2");
	};// @lock

	cOrange.click = function cOrange_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Orange");
		$$("component1_cCoulCode").setValue("#ffaa56");
		$$("component1_tCoul").setBackgroundColor("#ffaa56");
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Violet");
		$$("component1_cCoulCode").setValue("#aaaaff");
		$$("component1_tCoul").setBackgroundColor("#aaaaff");
	};// @lock

	cJaune.click = function cJaune_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Jaune");
		$$("component1_cCoulCode").setValue("#ffff56");
		$$("component1_tCoul").setBackgroundColor("#ffff56");
	};// @lock

	cBleuVert.click = function cBleuVert_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu Vert");
		$$("component1_cCoulCode").setValue("#00bfbf");
		$$("component1_tCoul").setBackgroundColor("#00bfbf");
	};// @lock

	cVert.click = function cVert_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Vert");
		$$("component1_cCoulCode").setValue("#71f2af");
		$$("component1_tCoul").setBackgroundColor("#71f2af");
	};// @lock

	cRouge.click = function cRouge_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Rouge");
		$$("component1_cCoulCode").setValue("#ff5656");
		$$("component1_tCoul").setBackgroundColor("#ff5656");
	};// @lock

	cBleu.click = function cBleu_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu");
		$$("component1_cCoulCode").setValue("#56aaff");
		$$("component1_tCoul").setBackgroundColor("#56aaff");
	};// @lock

	cRose.click = function cRose_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Rose");
		$$("component1_cCoulCode").setValue("#ffaaaa");
		$$("component1_tCoul").setBackgroundColor("#ffaaaa");
	};// @lock

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
		$$("component1_tCoul").setBackgroundColor($$("component1_cCoulCode").getValue());
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
		$$('component1_cPalette').show();
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
		$$('component1_cPalette').hide();
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
		$$('component1_cPalette').hide();
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
		$$('component1_cPalette').show();
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
	WAF.addListener(this.id + "_cCoul", "click", cCoul.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_cRoseF", "click", cRoseF.click, "WAF");
	WAF.addListener(this.id + "_cSaumon", "click", cSaumon.click, "WAF");
	WAF.addListener(this.id + "_cMarron", "click", cMarron.click, "WAF");
	WAF.addListener(this.id + "_cVioletc", "click", cVioletc.click, "WAF");
	WAF.addListener(this.id + "_cGrisC", "click", cGrisC.click, "WAF");
	WAF.addListener(this.id + "_cCiel", "click", cCiel.click, "WAF");
	WAF.addListener(this.id + "_bGris", "click", bGris.click, "WAF");
	WAF.addListener(this.id + "_cOrange", "click", cOrange.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_cJaune", "click", cJaune.click, "WAF");
	WAF.addListener(this.id + "_cBleuVert", "click", cBleuVert.click, "WAF");
	WAF.addListener(this.id + "_cVert", "click", cVert.click, "WAF");
	WAF.addListener(this.id + "_cRouge", "click", cRouge.click, "WAF");
	WAF.addListener(this.id + "_cBleu", "click", cBleu.click, "WAF");
	WAF.addListener(this.id + "_cRose", "click", cRose.click, "WAF");
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
