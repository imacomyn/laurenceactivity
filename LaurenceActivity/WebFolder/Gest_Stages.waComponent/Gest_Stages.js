
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Stages';
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
		
		function addDaysToDate(old_date, delta_days) {
		var split_date, new_date, new_day, new_month, new_year, new_date_text;
		split_date = old_date.split('/');
		new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1 + delta_days);
		new_day = new_date.getDate();
		new_day = ((new_day < 10) ? '0' : '') + new_day; 
		new_month = new_date.getMonth() + 1;
		new_month = ((new_month < 10) ? '0' : '') + new_month; 
		new_year = new_date.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		new_date_text = new_day + '/' + new_month + '/' + new_year;
		
		return new_date_text;
	}
	// @region namespaceDeclaration// @startlock
	var cFin = {};	// @textField
	var cDeb = {};	// @textField
	var ListStages = {};	// @dataGrid
	var cbxAM = {};	// @checkbox
	var cbxM = {};	// @checkbox
	var shAM = {};	// @slider
	var shM = {};	// @slider
	var btSup = {};	// @buttonImage
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var ListAnScol = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	cFin.change = function cFin_change (event)// @startlock
	{// @endlock
		var vAction, DatEntry, NbSamDat, vAnScol, tmp_date, split_date, new_date;
		
		if ($$('component1_cFin').getValue().length > 0) {
			
			$$('component1_bSave').enable();
			vAction = $$('component1_cAction').getValue();
			if (vAction === "Créer") {
				DatEntry = $$('component1_cFin').getValue();
				split_date = DatEntry.split('/');
				new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				vAnScol = sources.component1_annees_Scolaires.getAttributeValue("ID");
				ds.Stages.query("dFin = :1 and Annee_Scolaire.ID = :2", { 
					onSuccess:function(event) {
						var myCollection = event.entityCollection;
						NbSamDat = myCollection.length;
						if (NbSamDat > 0) {
							alert("Cette date de fin de stage est déjà planifiée pour cette année scolaire. Merci de choisir une date différente.");	
							$$('component1_cFin').setValue(null);
							$$('component1_bSave').disable();
						}
					}, params:[new_date, vAnScol] 
				});
			}
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cFin.blur = function cFin_blur (event)// @startlock
	{// @endlock
		var vAction, DatEntry, NbSamDat, vAnScol, tmp_date, split_date, new_date;
		
		if ($$('component1_cFin').getValue().length > 0) {
			
			$$('component1_bSave').enable();
			vAction = $$('component1_cAction').getValue();
			if (vAction === "Créer") {
				DatEntry = $$('component1_cFin').getValue();
				split_date = DatEntry.split('/');
				new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				vAnScol = sources.component1_annees_Scolaires.getAttributeValue("ID");
				ds.Stages.query("dFin = :1 and Annee_Scolaire.ID = :2", { 
					onSuccess:function(event) {
						var myCollection = event.entityCollection;
						NbSamDat = myCollection.length;
						if (NbSamDat > 0) {
							alert("Cette date de fin de stage est déjà planifiée pour cette année scolaire. Merci de choisir une date différente.");	
							$$('component1_cFin').setValue(null);
							$$('component1_bSave').disable();
						}
					}, params:[new_date, vAnScol] 
				});
			}
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cDeb.change = function cDeb_change (event)// @startlock
	{// @endlock
		var vAction, DatEntry, NbSamDat, vAnScol, tmp_date, split_date, new_date, vFin;
		
		if ($$('component1_cDeb').getValue().length > 0) {
			
			$$('component1_bSave').enable();
			vAction = $$('component1_cAction').getValue();
			if (vAction === "Créer") {
				DatEntry = $$('component1_cDeb').getValue();
				split_date = DatEntry.split('/');
				new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				vAnScol = sources.component1_annees_Scolaires.getAttributeValue("ID");
				ds.Stages.query("dDeb = :1 and Annee_Scolaire.ID = :2", { 
					onSuccess:function(event) {
						var myCollection = event.entityCollection;
						NbSamDat = myCollection.length;
						if (NbSamDat > 0) {
							alert("Cette date de début de stage est déjà planifiée pour cette année scolaire. Merci de choisir une date différente.");	
							$$('component1_cDeb').setValue(null);
							$$('component1_bSave').disable();
						} else {
							vFin = addDaysToDate($$('component1_cDeb').getValue(),1);
							$$('component1_cFin').setValue(vFin);
						}
					}, params:[new_date, vAnScol] 
				});
			}
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cDeb.blur = function cDeb_blur (event)// @startlock
	{// @endlock
		var vAction, DatEntry, NbSamDat, vAnScol, tmp_date, split_date, new_date, vFin;
		
		if ($$('component1_cDeb').getValue().length > 0) {
			
			$$('component1_bSave').enable();
			vAction = $$('component1_cAction').getValue();
			if (vAction === "Créer") {
				DatEntry = $$('component1_cDeb').getValue();
				split_date = DatEntry.split('/');
				new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				vAnScol = sources.component1_annees_Scolaires.getAttributeValue("ID");
				ds.Stages.query("dDeb = :1 and Annee_Scolaire.ID = :2", { 
					onSuccess:function(event) {
						var myCollection = event.entityCollection;
						NbSamDat = myCollection.length;
						if (NbSamDat > 0) {
							alert("Cette date de début de stage est déjà planifiée pour cette année scolaire. Merci de choisir une date différente.");	
							$$('component1_cDeb').setValue(null);
							$$('component1_bSave').disable();
						} else {
							vFin = addDaysToDate($$('component1_cDeb').getValue(),1);
							$$('component1_cFin').setValue(vFin);
						}
					}, params:[new_date, vAnScol] 
				});
			}
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	ListStages.onRowDraw = function ListStages_onRowDraw (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		$$('component1_bUpdate').show();
		$$('component1_btSup').show();
		
		$$('component1_shM').enable();
		$$('component1_shM').setValues([sources.component1_stagesCollection.hDeb,sources.component1_stagesCollection.hFin]);
		$$('component1_shAM').enable();
		$$('component1_shAM').setValues([sources.component1_stagesCollection.h2Deb,sources.component1_stagesCollection.h2Fin]);
		if (vAction === "-") {
		  $$('component1_shM').disable();
		  $$('component1_shAM').disable();
		}
	};// @lock

	ListStages.onRowClick = function ListStages_onRowClick (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		$$('component1_bUpdate').show();
		$$('component1_btSup').show();
		
		$$('component1_shM').enable();
		$$('component1_shM').setValues([sources.component1_stagesCollection.hDeb,sources.component1_stagesCollection.hFin]);
		$$('component1_shAM').enable();
		$$('component1_shAM').setValues([sources.component1_stagesCollection.h2Deb,sources.component1_stagesCollection.h2Fin]);
		if (vAction === "-") {
		  $$('component1_shM').disable();
		  $$('component1_shAM').disable();
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

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer ce stage de cette année scolaire ?");
		
		if (isok) {
			sources.component1_stagesCollection.removeCurrent();
		}

	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		
		sources.component1_stagesCollection.addNewElement();
		sources.component1_stagesCollection.Annee_Scolaire.set(sources.component1_annees_Scolaires);
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_btSup').hide();
		$$('component1_ListAnScol').disable();
		$$('component1_ListStages').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cbSalle').show();
		$$('component1_cDeb').setReadOnly(false);
		$$('component1_cFin').setReadOnly(false);
		$$('component1_cbxM').enable();	
		$$('component1_cbxAM').enable();	
		$$('component1_cbxM').check();
		$$('component1_shM').enable();
		$$('component1_shM').setValues([40,52]);
		$$('component1_cbxAM').check();
		$$('component1_shAM').enable();
		$$('component1_shAM').setValues([56,68]);
		$$('component1_cDeb').getLabel().setTextColor("red");
		$$('component1_cFin').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Créer");
		
				
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').show();
		$$('component1_btSup').hide();
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListStages').enable();
		$$('component1_ListStages').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cbSalle').hide();
		$$('component1_cDeb').setReadOnly(true);
		$$('component1_cFin').setReadOnly(true);
		$$('component1_shM').disable();
		$$('component1_shAM').disable();
		$$('component1_cbxM').disable();	
		$$('component1_cbxAM').disable();	
		$$('component1_cDeb').getLabel().setTextColor("black");
		$$('component1_cFin').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		
		$$('component1').loadComponent("/Gest_Stages.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vHor, split_date, new_date, tmp_date, vJour;
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').show();
		$$('component1_btSup').hide();
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListStages').enable();
		$$('component1_ListStages').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cbSalle').hide();
		$$('component1_cDeb').setReadOnly(true);
		$$('component1_cFin').setReadOnly(true);
		$$('component1_shM').disable();
		$$('component1_shAM').disable();
		$$('component1_cbxM').disable();	
		$$('component1_cbxAM').disable();	
		$$('component1_cDeb').getLabel().setTextColor("black");
		$$('component1_cFin').getLabel().setTextColor("black");
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
		
		sources.component1_stagesCollection.Salle.set(sources.component1_salles);
		sources.component1_stagesCollection.save({
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
		$$('component1_ListStages').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').enable();
		$$('component1_bUndo').show();
		$$('component1_cbSalle').show();
		vSalle = sources.component1_stagesCollection.getAttributeValue("Salle.ID");
		$$('component1_cbSalle').setValue(vSalle);
		$$('component1_cDeb').setReadOnly(true);
		$$('component1_cFin').setReadOnly(true);
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

	ListAnScol.onRowClick = function ListAnScol_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_btSup').hide();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cFin", "change", cFin.change, "WAF");
	WAF.addListener(this.id + "_cDeb", "change", cDeb.change, "WAF");
	WAF.addListener(this.id + "_cFin", "blur", cFin.blur, "WAF");
	WAF.addListener(this.id + "_cDeb", "blur", cDeb.blur, "WAF");
	WAF.addListener(this.id + "_ListStages", "onRowDraw", ListStages.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListStages", "onRowClick", ListStages.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbxAM", "click", cbxAM.click, "WAF");
	WAF.addListener(this.id + "_cbxM", "click", cbxM.click, "WAF");
	WAF.addListener(this.id + "_shAM", "slidechange", shAM.slidechange, "WAF");
	WAF.addListener(this.id + "_shAM", "slide", shAM.slide, "WAF");
	WAF.addListener(this.id + "_shM", "slidechange", shM.slidechange, "WAF");
	WAF.addListener(this.id + "_shM", "slide", shM.slide, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_ListAnScol", "onRowClick", ListAnScol.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
