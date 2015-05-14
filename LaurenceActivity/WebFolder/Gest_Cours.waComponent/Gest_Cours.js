
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Cours';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

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
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
