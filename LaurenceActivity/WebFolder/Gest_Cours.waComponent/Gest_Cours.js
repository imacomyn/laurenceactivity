
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
		$$('component1_ListAnScol').disable();
		$$('component1_ListCours').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cDate').setReadOnly(false);
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
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListCours').enable();
		$$('component1_ListCours').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cDate').setReadOnly(true);
		$$('component1_shM').disable();
		$$('component1_shAM').disable();
		$$('component1_cDate').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		
		$$('component1').loadComponent("/Gest_Cours.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_ListCours').enable();
		$$('component1_ListCours').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cDate').setReadOnly(true);
		$$('component1_shM').disable();
		$$('component1_shAM').disable();
		$$('component1_cDate').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		
		sources.component1_coursCollection.save({
                onSuccess:function(event2) {}
            });
		
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_ListAnScol').disable();
		$$('component1_ListCours').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').enablee();
		$$('component1_bUndo').show();
		$$('component1_cDate').setReadOnly(true);
		$$('component1_cAction').setValue("Modifier");
		
	};// @lock

	// @region eventManager// @startlock
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
