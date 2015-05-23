
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Actualites';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		$$("cchg").hide();
		$$("component1_ListActu").setRowHeight(22);

	// @region namespaceDeclaration// @startlock
	var cFram3 = {};	// @image
	var cFram4 = {};	// @image
	var cFram2 = {};	// @image
	var cFram1 = {};	// @image
	var ListActu = {};	// @dataGrid
	var btSup = {};	// @buttonImage
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cFram3.click = function cFram3_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').move(20,168);
		$$('component1_cPhoto').resize(596,150);
		$$('component1_cPhoto').show();
		$$('component1_cComm').hide();
		$$('component1_uPhoto').hide();
		$$('component1_cTitre').move(20,140);
		$$('component1_cTitre').resize(596,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(20,324);
		$$('component1_cDesc').resize(596,80);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame3");
	};// @lock

	cFram4.click = function cFram4_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').hide();
		$$('component1_cComm').hide();
		$$('component1_uPhoto').hide();
		$$('component1_cTitre').move(20,140);
		$$('component1_cTitre').resize(596,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(20,168);
		$$('component1_cDesc').resize(596,196);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame4");
	};// @lock

	cFram2.click = function cFram2_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').move(376,140);
		$$('component1_cPhoto').resize(240,200);
		$$('component1_cPhoto').show();
		$$('component1_cComm').move(376,343);
		$$('component1_cComm').resize(240,21);
		$$('component1_cComm').show();
		$$('component1_uPhoto').show();
		$$('component1_cTitre').move(20,140);
		$$('component1_cTitre').resize(350,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(20,168);
		$$('component1_cDesc').resize(350,196);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame2");
	};// @lock

	cFram1.click = function cFram1_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').move(20,140);
		$$('component1_cPhoto').resize(240,200);
		$$('component1_cPhoto').show();
		$$('component1_cComm').move(20,343);
		$$('component1_cComm').resize(240,21);
		$$('component1_cComm').show();
		$$('component1_uPhoto').show();
		$$('component1_cTitre').move(266,140);
		$$('component1_cTitre').resize(350,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(266,168);
		$$('component1_cDesc').resize(350,196);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame1");
		
	};// @lock

	ListActu.onRowClick = function ListActu_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btSup').show();
		$$('component1_bUpdate').show();
	};// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer cette information de cette année scolaire ?");
		
		if (isok) {
			sources.component1_informations.removeCurrent();
			$$('component1_btSup').hide();
			$$('component1_bUpdate').hide();
		}

	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		
		sources.component1_informations.addNewElement();
				
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_btSup').hide();
		$$('component1_ListActu').disable();
		$$('component1_bSave').show();
		$$('component1_bUndo').show();
		$$('component1_cTitre').setReadOnly(false);
		$$('component1_cDesc').setReadOnly(false);
		$$('component1_cComm').setReadOnly(false);
		$$('component1_cDatFin').setReadOnly(false);
		$$('component1_cFram1').show();
		$$('component1_cFram2').show();
		$$('component1_cFram3').show();
		$$('component1_cFram4').show();
		$$('component1_uPhoto').show();
		$$('component1_cbAnScol').show();
		$$('component1_cAction').setValue("Créer");
				
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').show();
		$$('component1_btSup').hide();
		$$('component1_ListActu').enable();
		$$('component1_ListActu').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cTitre').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(true);
		$$('component1_cComm').setReadOnly(true);
		$$('component1_cDatFin').setReadOnly(true);
		$$('component1_cFram1').hide();
		$$('component1_cFram2').hide();
		$$('component1_cFram3').hide();
		$$('component1_cFram4').hide();
		$$('component1_uPhoto').hide();
		$$('component1_cbAnScol').hide();
		$$('component1_cAction').setValue("-");
		
		$$('component1').loadComponent("/Gest_Actualites.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').show();
		$$('component1_btSup').hide();
		$$('component1_ListActu').enable();
		$$('component1_cTitre').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(true);
		$$('component1_cComm').setReadOnly(true);
		$$('component1_ListActu').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cDatFin').setReadOnly(true);
		$$('component1_cFram1').hide();
		$$('component1_cFram2').hide();
		$$('component1_cFram3').hide();
		$$('component1_cFram4').hide();
		$$('component1_uPhoto').hide();
		$$('component1_cbAnScol').hide();
		$$('component1_cAction').setValue("-");
		
		sources.component1_informations.Annee_Scolaire.set(sources.component1_annees_Scolaires);
		sources.component1_informations.save();
		
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var vFrame, vAnScol;
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_btSup').hide();
		$$('component1_ListActu').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').enable();
		$$('component1_bUndo').show();
		$$('component1_cTitre').setReadOnly(false);
		$$('component1_cDesc').setReadOnly(false);
		$$('component1_cComm').setReadOnly(false);
		$$('component1_cDatFin').setReadOnly(false);
		$$('component1_cFram1').show();
		$$('component1_cFram2').show();
		$$('component1_cFram3').show();
		$$('component1_cFram4').show();
		$$('component1_uPhoto').show();
		$$('component1_cbAnScol').show();
		$$('component1_cAction').setValue("Modifier");
		
		vAnScol = $$('component1_cAnScolID').getValue();
		$$('component1_cbAnScol').setValue(vAnScol);
		
		vFrame = $$('component1_cFrame').getValue();
		
		if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(20,140);
			$$('component1_cPhoto').resize(240,200);
			$$('component1_cPhoto').show();
			$$('component1_cComm').move(20,343);
			$$('component1_cComm').resize(240,21);
			$$('component1_cComm').show();
			$$('component1_uPhoto').show();
			$$('component1_cTitre').move(266,140);
			$$('component1_cTitre').resize(350,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(266,168);
			$$('component1_cDesc').resize(350,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(376,140);
			$$('component1_cPhoto').resize(240,200);
			$$('component1_cPhoto').show();
			$$('component1_cComm').move(376,343);
			$$('component1_cComm').resize(240,21);
			$$('component1_cComm').show();
			$$('component1_uPhoto').show();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(350,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,168);
			$$('component1_cDesc').resize(350,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(20,168);
			$$('component1_cPhoto').resize(596,150);
			$$('component1_cPhoto').show();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,324);
			$$('component1_cDesc').resize(596,80);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame4") {
			$$('component1_cPhoto').hide();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,168);
			$$('component1_cDesc').resize(596,196);
			$$('component1_cDesc').show();
		}
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cFram3", "click", cFram3.click, "WAF");
	WAF.addListener(this.id + "_cFram4", "click", cFram4.click, "WAF");
	WAF.addListener(this.id + "_cFram2", "click", cFram2.click, "WAF");
	WAF.addListener(this.id + "_cFram1", "click", cFram1.click, "WAF");
	WAF.addListener(this.id + "_ListActu", "onRowClick", ListActu.onRowClick, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
