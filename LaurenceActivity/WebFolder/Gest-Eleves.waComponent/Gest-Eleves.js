
(function Component (id) {// @lock
	
	var wURL = window.location.href,
		wPathname = window.location.pathname,
		iFrame;

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest-Eleves';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListInscriptions").setRowHeight(20);

	// @region namespaceDeclaration// @startlock
	var btExport = {};	// @buttonImage
	var ListEleves = {};	// @dataGrid
	var cbPres = {};	// @checkbox
	var btSave = {};	// @button
	var btUndo = {};	// @button
	var btUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	btExport.click = function btExport_click (event)// @startlock
	{// @endlock
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/exportEleves";
			wExportURL += ".xls";
		} else {
			wExportURL = wURL;
			wExportURL += "exportEleves";
			wExportURL += ".xls";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
	};// @lock
	
	$$('component1_btUpdate').disable();

	ListEleves.onRowClick = function ListEleves_onRowClick (event)// @startlock
	{// @endlock
		var vNom = $$('component1_cNom').getValue();
		
		$$('component1_btUpdate').enable();
		
	
	};// @lock

	cbPres.click = function cbPres_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbPres').getValue()) {
			var now = new Date();
			sources.component1_eleves.query("Utilisateur.Date_Entree < :1 AND (Utilisateur.Date_Sortie = null OR Utilisateur.Date_Sortie > :1)", now);
		} else {
			sources.component1_eleves.query();
		}
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		var USexe;
		
		USexe = $$('component1_rSexe').getValue();
		$$('component1_cSexe').setValue(USexe);
		
		$$('component1_cSexe').show();
		$$('component1_rSexe').hide();
		$$('component1_uPhoto').hide();
		
		$$('component1_btUpdate').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_uPhoto').hide();
		
		$$('component1_ListEleves').enable();
		$$('component1_cbPres').enable();
		$$('component1_ListEleves').setReadOnly(true);
		
		$$('component1_ListInscriptions').setReadOnly(true);
		$$('component1_Adresse_1').setReadOnly(true);
		$$('component1_Adresse_2').setReadOnly(true);
		$$('component1_CP').setReadOnly(true);
		$$('component1_Ville').setReadOnly(true);
		$$('component1_Portable').setReadOnly(true);
		$$('component1_Fixe').setReadOnly(true);
		
		$$('component1_cMess').setValue("");
		
		sources.component1_eleves.save({
                onSuccess:function(event2) {}
            });
		
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$('component1_cSexe').show();
		$$('component1_rSexe').hide();
		$$('component1_uPhoto').hide();
		
		$$('component1_btUpdate').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_uPhoto').hide();
		
		$$('component1_ListInscriptions').setReadOnly(true);
		$$('component1_Adresse_1').setReadOnly(true);
		$$('component1_Adresse_2').setReadOnly(true);
		$$('component1_CP').setReadOnly(true);
		$$('component1_Ville').setReadOnly(true);
		$$('component1_Portable').setReadOnly(true);
		$$('component1_Fixe').setReadOnly(true);
		
		$$('component1_ListEleves').enable();
		$$('component1_cbPres').enable();
		$$('component1_ListEleves').setReadOnly(true);
		$$('component1_cMess').setValue("");
		
		if ($$('component1_cbPres').getValue()) {
			$$('component1').loadComponent("/Gest-Eleves.waComponent");
			$$('component1_cbPres').setValue(true);
			var now = new Date();
			sources.component1_eleves.query("Utilisateur.Date_Entree < :1 AND (Utilisateur.Date_Sortie = null OR Utilisateur.Date_Sortie > :1)", now);
		} else {
			$$('component1').loadComponent("/Gest-Eleves.waComponent");
		}
		
	};// @lock

	btUpdate.click = function btUpdate_click (event)// @startlock
	{// @endlock
		var USexe, UFamille, DFin, CFin, DNow, NNow, CNow;
		
		$$('component1_cSexe').hide();
		$$('component1_rSexe').show();
		$$('component1_uPhoto').hide();
				
		$$('component1_btUpdate').hide();
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		$$('component1_uPhoto').show();
		
		$$('component1_ListInscriptions').setReadOnly(false);
		$$('component1_Adresse_1').setReadOnly(false);
		$$('component1_Adresse_2').setReadOnly(false);
		$$('component1_CP').setReadOnly(false);
		$$('component1_Ville').setReadOnly(false);
		$$('component1_Portable').setReadOnly(false);
		$$('component1_Fixe').setReadOnly(false);
		
		$$('component1_ListEleves').disable();
		$$('component1_cbPres').disable();
		
		USexe = $$('component1_cSexe').getValue();
		$$('component1_rSexe').setValue(USexe);
		
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
				$$('component1_cMess').setValue("La fin de période de validité de cet utilisateur est atteinte.");
			} 
		}
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btExport", "click", btExport.click, "WAF");
	WAF.addListener(this.id + "_ListEleves", "onRowClick", ListEleves.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbPres", "click", cbPres.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btUpdate", "click", btUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
