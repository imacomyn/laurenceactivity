
(function Component (id) {// @lock
	
	var wURL = window.location.href,
		wPathname = window.location.pathname,
		iFrame;

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_InStages';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		$$("cchg").hide();
		$$('component1_cbxAdh').disable();
		$$("component1_ListStages").setRowHeight(22);
		$$("component1_ListNIns").setRowHeight(22);

	// @region namespaceDeclaration// @startlock
	var ListInscrits = {};	// @dataGrid
	var ListStages = {};	// @dataGrid
	var btExport = {};	// @buttonImage
	var btUndo = {};	// @button
	var btSave = {};	// @button
	var btUpd = {};	// @button
	var btSup = {};	// @buttonImage
	var btIns = {};	// @buttonImage
	var ListNIns = {};	// @dataGrid
	var ListAnScol = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	ListInscrits.onRowClick = function ListInscrits_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btIns').hide();
		$$('component1_btSup').show();
		$$('component1_btUpd').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
	};// @lock

	ListStages.onRowClick = function ListStages_onRowClick (event)// @startlock
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
      					sources.component1_userParam.Stage.set(sources.component1_stagesCollection);
      		      		sources.component1_userParam.save();
     				}, params:[vUser] });
    			} else {
     				sources.component1_userParam.Annee_Scolaire.set(sources.component1_annees_Scolaires);
     				sources.component1_userParam.Stage.set(sources.component1_stagesCollection);
     				sources.component1_userParam.save();
    			}
    		}, params:[vUser] });
    		
    	}, params:[vUser] });

		
		vToday = new Date();
		sources.component1_eleves1.query("( Utilisateur.Date_Sortie = null or Utilisateur.Date_Sortie > :1 ) order by Nom_Complet",vToday);
	};// @lock

	btExport.click = function btExport_click (event)// @startlock
	{// @endlock
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/exportInStages";
			wExportURL += ".xls";
		} else {
			wExportURL = wURL;
			wExportURL += "exportInStages";
			wExportURL += ".xls";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListStages').enable();
		$$('component1_ListStages').setReadOnly(true);
		$$('component1_ListInscrits').enable();
		$$('component1_ListInscrits').setReadOnly(true);
		$$('component1_ListNIns').enable();
		$$('component1_ListNIns').setReadOnly(true);
		$$('component1_cbxAdh').disable();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btIns').hide();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_cChAdh').setReadOnly(true);
		$$('component1_cChMAdh').setReadOnly(true);

		
		$$('component1').loadComponent("/Gest_InStages.waComponent");
		
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListStages').enable();
		$$('component1_ListStages').setReadOnly(true);
		$$('component1_ListInscrits').enable();
		$$('component1_ListInscrits').setReadOnly(true);
		$$('component1_ListNIns').enable();
		$$('component1_ListNIns').setReadOnly(true);
		$$('component1_cbxAdh').disable();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btIns').hide();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_cChAdh').setReadOnly(true);
		$$('component1_cChMAdh').setReadOnly(true);
		
		
		sources.component1_insStageCollection.save();
		
	};// @lock

	btUpd.click = function btUpd_click (event)// @startlock
	{// @endlock
		$$('component1_ListAnScol').disable();
		$$('component1_ListStages').disable();
		$$('component1_ListInscrits').disable();
		$$('component1_ListNIns').disable();
		$$('component1_cbxAdh').enable();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btIns').hide();
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		$$('component1_cChAdh').setReadOnly(false);
		$$('component1_cChMAdh').setReadOnly(false);
				
	};// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer l'inscription de cet élève à ce stage ?");
		
		if (isok) {
			sources.component1_insStageCollection.removeCurrent();
			$$('component1_btSup').hide();
			$$('component1_btUpd').hide();
		}
	};// @lock

	btIns.click = function btIns_click (event)// @startlock
	{// @endlock
		var myInscrits, nbInscrits, vIdIns, vIdAbo, myAbonnes, nbAbonnes, nbTrouve, inscrit, abonne, vFlag;
		
		//$$('component1_cAction').setValue("AddUsr");
		myInscrits = sources.component1_eleves1;
		vIdIns = myInscrits.getAttributeValue("Eleve.ID");
		//alert('traite inscrit '+vIdIns);
		myAbonnes = sources.component1_insStageCollection;
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
					sources.component1_insStageCollection.addNewElement();
					sources.component1_insStageCollection.Stage.set(sources.component1_stagesCollection);
					sources.component1_insStageCollection.Eleve.set(sources.component1_eleves);
					sources.component1_insStageCollection.save();
				}
			}, params:[vIdIns] });
		};
		
		$$('component1_btIns').hide();
		

	};// @lock

	ListNIns.onRowClick = function ListNIns_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btIns').show();
		$$('component1_btSup').hide();
		$$('component1_btUpd').hide();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
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

		
		vAnScol = sources.component1_annees_Scolaires.ID;
		vToday = new Date();
		sources.component1_eleves1.query("Association.ID=:1 and ( Utilisateur.Date_Sortie = null or Utilisateur.Date_Sortie > :2 ) order by Nom_Complet",vAnScol,vToday);
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListInscrits", "onRowClick", ListInscrits.onRowClick, "WAF");
	WAF.addListener(this.id + "_ListStages", "onRowClick", ListStages.onRowClick, "WAF");
	WAF.addListener(this.id + "_btExport", "click", btExport.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUpd", "click", btUpd.click, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_btIns", "click", btIns.click, "WAF");
	WAF.addListener(this.id + "_ListNIns", "onRowClick", ListNIns.onRowClick, "WAF");
	WAF.addListener(this.id + "_ListAnScol", "onRowClick", ListAnScol.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
