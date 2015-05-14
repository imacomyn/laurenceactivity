
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Cours';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		$$("cchg").hide();
		$$('component1_shM').addHandle(52);	
		$$('component1_shAM').addHandle(76);
		$$('component1_shM').disable();	
		$$('component1_shAM').disable();
		$$('component1_cbxM').disable();	
		$$('component1_cbxAM').disable();	
		
		function convTime (Horaire) {
		
			var vInt, vDec, vPart1, vPart2;
			vInt = parseInt(Horaire/4,10)+':';
			if (vInt.length ===2) {
				vInt = '0'+vInt;
			}
			vDec = 15*(Horaire-4*parseInt(Horaire/4,10)) + ' ';
			if (vDec.length === 2) {
				vDec = '0'+vDec;
			}
			return (vInt+vDec);
		}

	// @region namespaceDeclaration// @startlock
	var ListAnScol = {};	// @dataGrid
	var ListCours = {};	// @dataGrid
	var btSup = {};	// @buttonImage
	var cDate = {};	// @textField
	var cbxAM = {};	// @checkbox
	var cbxM = {};	// @checkbox
	var shAM = {};	// @slider
	var shM = {};	// @slider
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	ListAnScol.onRowClick = function ListAnScol_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_btSup').hide();
	};// @lock

	ListCours.onRowDraw = function ListCours_onRowDraw (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		$$('component1_bUpdate').show();
		$$('component1_btSup').show();
		
		$$('component1_shM').enable();
		$$('component1_shM').setValues([sources.component1_coursCollection.hDeb,sources.component1_coursCollection.hFin]);
		$$('component1_shAM').enable();
		$$('component1_shAM').setValues([sources.component1_coursCollection.h2Deb,sources.component1_coursCollection.h2Fin]);
		if (vAction === "-") {
		  $$('component1_shM').disable();
		  $$('component1_shAM').disable();
		}
	};// @lock

	ListCours.onRowClick = function ListCours_onRowClick (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		$$('component1_bUpdate').show();
		$$('component1_btSup').show();
		
		$$('component1_shM').enable();
		$$('component1_shM').setValues([sources.component1_coursCollection.hDeb,sources.component1_coursCollection.hFin]);
		$$('component1_shAM').enable();
		$$('component1_shAM').setValues([sources.component1_coursCollection.h2Deb,sources.component1_coursCollection.h2Fin]);
		if (vAction === "-") {
		  $$('component1_shM').disable();
		  $$('component1_shAM').disable();
		}
	};// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer ce cours de cette année scolaire ?");
		
		if (isok) {
			sources.component1_coursCollection.removeCurrent();
		}

	};// @lock

	cDate.blur = function cDate_blur (event)// @startlock
	{// @endlock
		var vAction, DatEntry, NbSamDat, vAnScol, tmp_date, split_date, new_date,
			LstJ = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
		
		if ($$('component1_cDate').getValue().length > 0) {
			
			tmp_date = $$('component1_cDate').getValue();
			split_date = tmp_date.split('/');
			new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
			vJour = new_date.getDay();
			$$('component1_cJour').setValue(LstJ[vJour]);
		
			$$('component1_bSave').enable();
			vAction = $$('component1_cAction').getValue();
			if (vAction === "Créer") {
				DatEntry = $$('component1_cDate').getValue();
				split_date = DatEntry.split('/');
				new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				vAnScol = sources.component1_annees_Scolaires.getAttributeValue("ID");
				ds.Cours.query("dCours = :1 and Annee_Scolaire.ID = :2", { 
					onSuccess:function(event) {
						var myCollection = event.entityCollection;
						NbSamDat = myCollection.length;
						if (NbSamDat > 0) {
							alert("Ce cours est déjà planifié pour cette année scolaire. Merci de choisir une date différente.");	
							$$('component1_cDate').setValue(null);
							$$('component1_cJour').setValue(null);
							$$('component1_bSave').disable();
						}
					}, params:[new_date, vAnScol] 
				});
			}
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cDate.change = function cDate_change (event)// @startlock
	{// @endlock
		var vAction, DatEntry, NbSamDat, vAnScol, tmp_date, split_date, new_date,
		LstJ = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
		
		if ($$('component1_cDate').getValue().length > 0) {
			
			tmp_date = $$('component1_cDate').getValue();
			split_date = tmp_date.split('/');
			new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
			vJour = new_date.getDay();
			$$('component1_cJour').setValue(LstJ[vJour]);
		
			$$('component1_bSave').enable();
			vAction = $$('component1_cAction').getValue();
			if (vAction === "Créer") {
				DatEntry = $$('component1_cDate').getValue();
				split_date = DatEntry.split('/');
				new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				vAnScol = sources.component1_annees_Scolaires.getAttributeValue("ID");
				ds.Cours.query("dCours = :1 and Annee_Scolaire.ID = :2", { 
					onSuccess:function(event) {
						var myCollection = event.entityCollection;
						NbSamDat = myCollection.length;
						if (NbSamDat > 0) {
							alert("Ce cours est déjà planifié pour cette année scolaire. Merci de choisir une date différente.");	
							$$('component1_cDate').setValue(null);
							$$('component1_cJour').setValue(null);
							$$('component1_bSave').disable();
						}
					}, params:[new_date, vAnScol] 
				});
			}
		} else {
			$$('component1_bSave').disable();
		}
		
		
	};// @lock

	cbxAM.click = function cbxAM_click (event)// @startlock
	{// @endlock
		if($$('component1_cbxAM').getValue()) {
			$$('component1_shAM').enable();
		} else {
			$$('component1_shAM').disable();
		}
	};// @lock

	cbxM.click = function cbxM_click (event)// @startlock
	{// @endlock
		if($$('component1_cbxM').getValue()) {
			$$('component1_shM').enable();
		} else {
			$$('component1_shM').disable();
		}
	};// @lock

	shAM.slidechange = function shAM_slidechange (event)// @startlock
	{// @endlock
		$$('component1_cAMDeb').setValue(event.data.values[0]); 
		$$('component1_cAMFin').setValue(event.data.values[1]); 
		$$('component1_tAMDeb').setValue(convTime(event.data.values[0]));
		$$('component1_tAMFin').setValue(convTime(event.data.values[1]));
	};// @lock

	shAM.slide = function shAM_slide (event)// @startlock
	{// @endlock
		$$('component1_cAMDeb').setValue(event.data.values[0]); 
		$$('component1_cAMFin').setValue(event.data.values[1]); 
		$$('component1_tAMDeb').setValue(convTime(event.data.values[0]));
		$$('component1_tAMFin').setValue(convTime(event.data.values[1]));
	};// @lock

	shM.slidechange = function shM_slidechange (event)// @startlock
	{// @endlock
		$$('component1_cMDeb').setValue(event.data.values[0]); 
		$$('component1_cMFin').setValue(event.data.values[1]); 
		$$('component1_tMDeb').setValue(convTime(event.data.values[0]));
		$$('component1_tMFin').setValue(convTime(event.data.values[1]));
	};// @lock

	shM.slide = function shM_slide (event)// @startlock
	{// @endlock
		$$('component1_cMDeb').setValue(event.data.values[0]); 
		$$('component1_cMFin').setValue(event.data.values[1]); 
		$$('component1_tMDeb').setValue(convTime(event.data.values[0]));
		$$('component1_tMFin').setValue(convTime(event.data.values[1]));
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		
		sources.component1_coursCollection.addNewElement();
		sources.component1_coursCollection.Annee_Scolaire.set(sources.component1_annees_Scolaires);
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_btSup').hide();
		$$('component1_ListAnScol').disable();
		$$('component1_ListCours').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cbSalle').show();
		$$('component1_cDate').setReadOnly(false);
		$$('component1_cbxM').enable();	
		$$('component1_cbxAM').enable();
		$$('component1_cbxM').check();
		$$('component1_shM').enable();
		$$('component1_shM').setValues([36,48]);
		$$('component1_cbxAM').check();
		$$('component1_shAM').enable();
		$$('component1_shAM').setValues([52,60]);
		$$('component1_cDate').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Créer");
		
				
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').show();
		$$('component1_btSup').hide();
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListCours').enable();
		$$('component1_ListCours').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cbSalle').hide();
		$$('component1_cDate').setReadOnly(true);
		$$('component1_shM').disable();
		$$('component1_shAM').disable();
		$$('component1_cbxM').disable();	
		$$('component1_cbxAM').disable();
		$$('component1_cDate').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		
		$$('component1').loadComponent("/Gest_Cours.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vHor, split_date, new_date, tmp_date, vJour,
			LstJ = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').show();
		$$('component1_btSup').hide();
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListCours').enable();
		$$('component1_ListCours').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cbSalle').hide();
		$$('component1_cDate').setReadOnly(true);
		$$('component1_shM').disable();
		$$('component1_shAM').disable();
		$$('component1_cbxM').disable();	
		$$('component1_cbxAM').disable();
		$$('component1_cDate').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		
		vHor="";
		if($$('component1_cbxM').getValue()) {
			vHor = $$('component1_tMDeb').getValue() + " à " + $$('component1_tMFin').getValue();
		} 
		if($$('component1_cbxAM').getValue()) {
			if($$('component1_cbxM').getValue()) {
				vHor += " et ";
			}
			vHor += $$('component1_tAMDeb').getValue() + " à " + $$('component1_tAMFin').getValue();
		}
		$$('component1_cHor').setValue(vHor);
		
		tmp_date = $$('component1_cDate').getValue();
		split_date = tmp_date.split('/');
		new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
		vJour = new_date.getDay();
		$$('component1_cJour').setValue(LstJ[vJour]);
		
		sources.component1_coursCollection.Salle.set(sources.component1_salles);
		sources.component1_coursCollection.save({
                onSuccess:function(event2) {}
            });
		
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var vSalle;
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_btSup').hide();
		$$('component1_ListAnScol').disable();
		$$('component1_ListCours').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').enable();
		$$('component1_bUndo').show();
		$$('component1_cbSalle').show();
		vSalle = sources.component1_coursCollection.getAttributeValue("Salle.ID");
		$$('component1_cbSalle').setValue(vSalle);
		$$('component1_cDate').setReadOnly(true);
		$$('component1_cMess').setReadOnly(false);
		$$('component1_cbxM').enable();	
		$$('component1_cbxAM').enable();
		if($$('component1_cbxM').getValue()) {
			$$('component1_shM').enable();
		} else {
			$$('component1_shM').disable();
		}
		if($$('component1_cbxAM').getValue()) {
			$$('component1_shAM').enable();
		} else {
			$$('component1_shAM').disable();
		}
		$$('component1_cAction').setValue("Modifier");
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListAnScol", "onRowClick", ListAnScol.onRowClick, "WAF");
	WAF.addListener(this.id + "_ListCours", "onRowDraw", ListCours.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListCours", "onRowClick", ListCours.onRowClick, "WAF");
	WAF.addListener(this.id + "_cDate", "blur", cDate.blur, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_cDate", "change", cDate.change, "WAF");
	WAF.addListener(this.id + "_cbxAM", "click", cbxAM.click, "WAF");
	WAF.addListener(this.id + "_cbxM", "click", cbxM.click, "WAF");
	WAF.addListener(this.id + "_shAM", "slidechange", shAM.slidechange, "WAF");
	WAF.addListener(this.id + "_shAM", "slide", shAM.slide, "WAF");
	WAF.addListener(this.id + "_shM", "slidechange", shM.slidechange, "WAF");
	WAF.addListener(this.id + "_shM", "slide", shM.slide, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
