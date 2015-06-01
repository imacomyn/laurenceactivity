
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Mon_Profil';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	var vUser;
	$$("cchg").hide();
	vUser = WAF.directory.currentUser().userName;
	//alert(vUser);
	sources.component1_eleves.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
		sources.component1_utilisateurs.query("Login = :1", vUser);
		$$('component1_btUpdate').show();
	}, params:[vUser] });

	// @region namespaceDeclaration// @startlock
	var btUndo = {};	// @button
	var btSave = {};	// @button
	var btUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/Mon_Profil.waComponent");
		
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		var USexe;
		
		$$('component1_btUpdate').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		
		$$('component1_cLogin').enable();
		$$('component1_cNom').enable();
		$$('component1_cPrenom').enable();
		$$('component1_cDatEntree').enable();
		$$('component1_cDatSortie').enable();
		$$('component1_cSexe').enable();
		$$('component1_cAssoc').enable();
		
		$$('component1_ListInscriptions').setReadOnly(true);
		$$('component1_Adresse_1').setReadOnly(true);
		$$('component1_Adresse_2').setReadOnly(true);
		$$('component1_CP').setReadOnly(true);
		$$('component1_Ville').setReadOnly(true);
		$$('component1_Portable').setReadOnly(true);
		$$('component1_Fixe').setReadOnly(true);
		$$('component1_cMail').setReadOnly(true);
				
		$$('component1_cMess').setValue("");
		
		sources.component1_eleves.save();
		sources.component1_utilisateurs.save();
		
		
	};// @lock

	btUpdate.click = function btUpdate_click (event)// @startlock
	{// @endlock
		var USexe, UFamille, DFin, CFin, DNow, NNow, CNow;
		
		$$('component1_btUpdate').hide();
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		
		$$('component1_cLogin').disable();
		$$('component1_cNom').disable();
		$$('component1_cPrenom').disable();
		$$('component1_cDatEntree').disable();
		$$('component1_cDatSortie').disable();
		$$('component1_cSexe').disable();
		$$('component1_cAssoc').disable();
				
		$$('component1_Adresse_1').setReadOnly(false);
		$$('component1_Adresse_2').setReadOnly(false);
		$$('component1_CP').setReadOnly(false);
		$$('component1_Ville').setReadOnly(false);
		$$('component1_Portable').setReadOnly(false);
		$$('component1_Fixe').setReadOnly(false);
		$$('component1_cMail').setReadOnly(false);
				
		$$('component1_cMess').setValue("");
		
		DFin = $$('component1_cDatSortie').getValue();
		CFin = DFin.substring(6,10) + DFin.substring(3,5) + DFin.substring(0,2); 
		if (CFin !== "") {
			DNow = new Date();
			NNow = 10000*DNow.getFullYear() + 100*(DNow.getMonth()+1) + DNow.getDate(); 
			CNow = NNow.toString();
			if ( CFin < CNow) {
				$$('component1_cSexe').show();
				$$('component1_rSexe').hide();
				$$('component1_cMess').setValue("La fin de période de validité de cette élève est atteinte.");
			} 
		}
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUpdate", "click", btUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
