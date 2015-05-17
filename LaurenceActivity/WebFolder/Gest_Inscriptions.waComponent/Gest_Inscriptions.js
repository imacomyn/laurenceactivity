
(function Component (id) {// @lock

	var wURL = window.location.href,
		wPathname = window.location.pathname,
		iFrame;

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Inscriptions';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$('component1_cbxAn').disable();
	$$('component1_cbxAdh').disable();
	$$('component1_cbxT1').disable();
	$$('component1_cbxT2').disable();
	$$('component1_cbxT3').disable();
	sources.component1_annees_Scolaires.query("ID > 0 Order by Annee_Scolaire desc");

	// @region namespaceDeclaration// @startlock
	var btExport = {};	// @buttonImage
	var cbxT3 = {};	// @checkbox
	var cbxT2 = {};	// @checkbox
	var cbxT1 = {};	// @checkbox
	var cbxAdh = {};	// @checkbox
	var cbxAn = {};	// @checkbox
	var btSave = {};	// @button
	var btUndo = {};	// @button
	var btUpd = {};	// @button
	var ListNIns = {};	// @dataGrid
	var btIns = {};	// @buttonImage
	var ListInscrits = {};	// @dataGrid
	var btSup = {};	// @buttonImage
	var ListAnScol = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	btExport.click = function btExport_click (event)// @startlock
	{// @endlock
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/exportInscrits";
			wExportURL += ".xls";
		} else {
			wExportURL = wURL;
			wExportURL += "exportInscrits";
			wExportURL += ".xls";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
	};// @lock

	cbxT3.click = function cbxT3_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxT3').getValue()) {
			$$('component1_cChT3').setReadOnly(false);
			$$('component1_cChMT3').setReadOnly(false);
		} else {
			$$('component1_cChT3').setReadOnly(true);
			$$('component1_cChMT3').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
	};// @lock

	cbxT2.click = function cbxT2_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxT2').getValue()) {
			$$('component1_cChT2').setReadOnly(false);
			$$('component1_cChMT2').setReadOnly(false);
		} else {
			$$('component1_cChT2').setReadOnly(true);
			$$('component1_cChMT2').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
	};// @lock

	cbxT1.click = function cbxT1_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxT1').getValue()) {
			$$('component1_cChT1').setReadOnly(false);
			$$('component1_cChMT1').setReadOnly(false);
		} else {
			$$('component1_cChT1').setReadOnly(true);
			$$('component1_cChMT1').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
	};// @lock

	cbxAdh.click = function cbxAdh_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxAdh').getValue()) {
			$$('component1_cChAdh').setReadOnly(false);
			$$('component1_cChMAdh').setReadOnly(false);
		} else {
			$$('component1_cChAdh').setReadOnly(true);
			$$('component1_cChMAdh').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
	};// @lock

	cbxAn.click = function cbxAn_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxAn').getValue()) {
			$$('component1_cbxAdh').check();
			$$('component1_cbxT1').check();
			$$('component1_cbxT2').check();
			$$('component1_cbxT3').check();
			$$('component1_cChAdh').setReadOnly(false);
			$$('component1_cChT1').setReadOnly(false);
			$$('component1_cChT2').setReadOnly(false);
			$$('component1_cChT3').setReadOnly(false);
			$$('component1_cChMAdh').setReadOnly(false);
			$$('component1_cChMT1').setReadOnly(false);
			$$('component1_cChMT2').setReadOnly(false);
			$$('component1_cChMT3').setReadOnly(false);
		}
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListInscrits').enable();
		$$('component1_ListInscrits').setReadOnly(true);
		$$('component1_ListNIns').enable();
		$$('component1_ListNIns').setReadOnly(true);
		$$('component1_cbxAn').disable();
		$$('component1_cbxAdh').disable();
		$$('component1_cbxT1').disable();
		$$('component1_cbxT2').disable();
		$$('component1_cbxT3').disable();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btIns').hide();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_cChAdh').setReadOnly(true);
		$$('component1_cChT1').setReadOnly(true);
		$$('component1_cChT2').setReadOnly(true);
		$$('component1_cChT3').setReadOnly(true);
		$$('component1_cChMAdh').setReadOnly(true);
		$$('component1_cChMT1').setReadOnly(true);
		$$('component1_cChMT2').setReadOnly(true);
		$$('component1_cChMT3').setReadOnly(true);
		
		sources.component1_inscriptionsCollection.save();
		
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListInscrits').enable();
		$$('component1_ListInscrits').setReadOnly(true);
		$$('component1_ListNIns').enable();
		$$('component1_ListNIns').setReadOnly(true);
		$$('component1_cbxAn').disable();
		$$('component1_cbxAdh').disable();
		$$('component1_cbxT1').disable();
		$$('component1_cbxT2').disable();
		$$('component1_cbxT3').disable();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btIns').hide();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_cChAdh').setReadOnly(true);
		$$('component1_cChT1').setReadOnly(true);
		$$('component1_cChT2').setReadOnly(true);
		$$('component1_cChT3').setReadOnly(true);
		$$('component1_cChMAdh').setReadOnly(true);
		$$('component1_cChMT1').setReadOnly(true);
		$$('component1_cChMT2').setReadOnly(true);
		$$('component1_cChMT3').setReadOnly(true);
		
		$$('component1').loadComponent("/Gest_Inscriptions.waComponent");
		
	};// @lock

	btUpd.click = function btUpd_click (event)// @startlock
	{// @endlock
		$$('component1_ListAnScol').disable();
		$$('component1_ListInscrits').disable();
		$$('component1_ListNIns').disable();
		$$('component1_cbxAn').enable();
		$$('component1_cbxAdh').enable();
		$$('component1_cbxT1').enable();
		$$('component1_cbxT2').enable();
		$$('component1_cbxT3').enable();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btIns').hide();
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		if ($$('component1_cbxAdh').getValue()) {
			$$('component1_cChAdh').setReadOnly(false);
			$$('component1_cChMAdh').setReadOnly(false);
		} else {
			$$('component1_cChAdh').setReadOnly(true);
			$$('component1_cChMAdh').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
		if ($$('component1_cbxT1').getValue()) {
			$$('component1_cChT1').setReadOnly(false);
			$$('component1_cChMT1').setReadOnly(false);
		} else {
			$$('component1_cChT1').setReadOnly(true);
			$$('component1_cChMT1').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
		if ($$('component1_cbxT2').getValue()) {
			$$('component1_cChT2').setReadOnly(false);
			$$('component1_cChMT2').setReadOnly(false);
		} else {
			$$('component1_cChT2').setReadOnly(true);
			$$('component1_cChMT2').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
		if ($$('component1_cbxT3').getValue()) {
			$$('component1_cChT3').setReadOnly(false);
			$$('component1_cChMT3').setReadOnly(false);
		} else {
			$$('component1_cChT3').setReadOnly(true);
			$$('component1_cChMT3').setReadOnly(true);
			$$('component1_cbxAn').uncheck();
		}
		
	};// @lock

	ListNIns.onRowClick = function ListNIns_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btIns').show();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
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
		$$('component1_btIns').hide();
		$$('component1_btSup').show();
		$$('component1_btUpd').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
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
		var vAnScol, vToday,vUser;
		
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btIns').hide();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_btExport').show();
				
		vUser = WAF.directory.currentUser().userName;
		//alert(vUser);
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
			var vUser;
			vUser = WAF.directory.currentUser().userName;
    		sources.component1_userParam.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
    			elem = sources.component1_userParam;
    			if (elem.length === 0) {
     				sources.component1_userParam.addNewElement();
     				sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
      					sources.component1_userParam.Utilisateur.set(sources.component1_utilisateurs);
      					sources.component1_userParam.Annee_Scolaire.set(sources.component1_annees_Scolaires);
      		      		sources.component1_userParam.save();
     				}, params:[vUser] });
    			} else {
     				sources.component1_userParam.Annee_Scolaire.set(sources.component1_annees_Scolaires);
     				sources.component1_userParam.save();
    			}
    		}, params:[vUser] });
    		
    	}, params:[vUser] });

		
		vAnScol = sources.component1_annees_Scolaires.getAttributeValue("Association.ID");
		//vAnScol = $$('component1_cAssoc').getValue();
		//alert (vAnScol);
		vToday = new Date();
		sources.component1_eleves1.query("Association.ID = :1 and ( Utilisateur.Date_Sortie = null or Utilisateur.Date_Sortie > :2 ) order by Nom_Complet",vAnScol,vToday);
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btExport", "click", btExport.click, "WAF");
	WAF.addListener(this.id + "_cbxT3", "click", cbxT3.click, "WAF");
	WAF.addListener(this.id + "_cbxT2", "click", cbxT2.click, "WAF");
	WAF.addListener(this.id + "_cbxT1", "click", cbxT1.click, "WAF");
	WAF.addListener(this.id + "_cbxAdh", "click", cbxAdh.click, "WAF");
	WAF.addListener(this.id + "_cbxAn", "click", cbxAn.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btUpd", "click", btUpd.click, "WAF");
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
