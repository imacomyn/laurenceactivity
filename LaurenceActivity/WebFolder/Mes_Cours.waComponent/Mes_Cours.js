
(function Component (id) {// @lock
	
	var wURL = window.location.href,
		wPathname = window.location.pathname,
		iFrame;

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Mes_Cours';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	var vUser;
	$$("cchg").hide();
	$$("component1_ListPDF").setRowHeight(22);
	$$("component1_ListDem").setRowHeight(22);
	vUser = WAF.directory.currentUser().userName;
	//alert(vUser);
	sources.component1_eleves.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
			var vEleID;
			elem = sources.component1_eleves;
			if (elem.length > 0) {
				vEleID = elem.ID;
				sources.component1_abonnes.query("Eleve.ID = :1", vEleID);
				sources.component1_demande_PDF.query("Eleve.ID = :1 order by Date_Creation desc", vEleID);
			};		
	}, params:[vUser] });
	// @region namespaceDeclaration// @startlock
	var cbxDem = {};	// @checkbox
	var btSave = {};	// @button
	var btUndo = {};	// @button
	var btDem = {};	// @buttonImage
	var btClose = {};	// @buttonImage
	var btShow = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	cbxDem.click = function cbxDem_click (event)// @startlock
	{// @endlock
		var vEleID;
		vEleID = sources.component1_eleves.getAttributeValue("ID");
		if ($$('component1_cDem').getValue()) {
			sources.component1_demande_PDF.query("Eleve.ID = :1 and Etat = 'Demandé' order by Date_Creation desc", vEleID);
		} else {
			sources.component1_demande_PDF.query("Eleve.ID = :1 order by Date_Creation desc", vEleID);
		}
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').show();
		$$('component1_btDem').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_cDem').setReadOnly(true);
		sources.component1_demande_PDF.save();
		
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').show();
		$$('component1_btDem').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_cDem').setReadOnly(true);
		
		$$('component1').loadComponent("/Mes_Cours.waComponent");
	};// @lock

	btDem.click = function btDem_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').hide();
		$$('component1_btDem').hide();
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		$$('component1_cDem').setReadOnly(false);
		sources.component1_demande_PDF.addNewElement();
		sources.component1_demande_PDF.Eleve.set(sources.component1_eleves);
	};// @lock

	btClose.click = function btClose_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').show();
		$$('component1_btClose').hide();
		$$('component1_fShow').hide();
	};// @lock

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		var vFic, vURL;
		
		$$('component1_btShow').hide();
		$$('component1_btClose').show();
		$$('component1_fShow').show();
		

		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbxDem", "click", cbxDem.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btDem", "click", btDem.click, "WAF");
	WAF.addListener(this.id + "_btClose", "click", btClose.click, "WAF");
	WAF.addListener(this.id + "_btShow", "click", btShow.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
