
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
	var btImaRep = {};	// @buttonImage
	var ListRep = {};	// @dataGrid
	var btSupRep = {};	// @buttonImage
	var btNewRep = {};	// @buttonImage
	var btRep = {};	// @buttonImage
	var btSaveRep = {};	// @buttonImage
	var cFram5 = {};	// @image
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

	btImaRep.click = function btImaRep_click (event)// @startlock
	{// @endlock
		$$('component1_uRep').show();
		$$('component1_btImaRep').hide();
		$$('component1_btSupRep').hide();
		$$('component1_btNewRep').hide();
		$$('component1_btSaveRep').show();
	};// @lock

	ListRep.onRowClick = function ListRep_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_btSupRep').show();
		$$('component1_btImaRep').show();
	};// @lock

	btSupRep.click = function btSupRep_click (event)// @startlock
	{// @endlock
		var isok, vID;
		
		isok = confirm( "Voulez-vous vraiment supprimer cette photo du reportage ?");
		
		if (isok) {
			sources.component1_reportage.removeCurrent();
			$$('component1_btSupRep').hide();
			$$('component1_btImaRep').hide();
		}

	};// @lock

	btNewRep.click = function btNewRep_click (event)// @startlock
	{// @endlock
		$$('component1_btSupRep').hide();
		$$('component1_btNewRep').hide();
		$$('component1_btSaveRep').show();
		//$$('component1_uRep').show();
		$$('component1_rComm').setReadOnly(false);
		$$('component1_ListRep').disable();
		
		sources.component1_reportage.addNewElement();
		sources.component1_reportage.Information.set(sources.component1_informations);
		// sources.component1_reportage.save();

	};// @lock

	btRep.click = function btRep_click (event)// @startlock
	{// @endlock
		var vFrame;
		
		if ($$('component1_cbxRep').getValue()) {
			$$('component1_rComm').hide();
			$$('component1_rPhoto').hide();
			$$('component1_ListRep').hide();
			$$('component1_btSupRep').hide();
			$$('component1_btNewRep').hide();
			$$('component1_btImaRep').hide();
			$$('component1_btSaveRep').hide();
			$$('component1_uRep').hide();
			$$('component1_cbxRep').uncheck();
			$$('component1_bUpdate').hide();
			$$('component1_bNew').show();
			$$('component1_btSup').hide();
			$$('component1_btRep').hide();
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
			$$('component1_cFram5').hide();
			$$('component1_uPhoto').hide();
			$$('component1_cbAnScol').hide();
			
			vFrame = $$('component1_cFrame').getValue();
		
			if (vFrame === "Frame1") {
				$$('component1_cPhoto').move(20,140);
				$$('component1_cPhoto').resize(300,200);
				$$('component1_cPhoto').show();
				$$('component1_cPhoto2').hide();
				$$('component1_cComm').move(20,343);
				$$('component1_cComm').resize(300,21);
				$$('component1_cComm').show();
				$$('component1_uPhoto').hide();
				$$('component1_uPhoto2').hide();
				$$('component1_cTitre').move(326,140);
				$$('component1_cTitre').resize(290,22);
				$$('component1_cTitre').show();
				$$('component1_cDesc').move(326,168);
				$$('component1_cDesc').resize(290,196);
				$$('component1_cDesc').show();
			}
		
			if (vFrame === "Frame2") {
				$$('component1_cPhoto').move(316,140);
				$$('component1_cPhoto').resize(300,200);
				$$('component1_cPhoto').show();
				$$('component1_cPhoto2').hide();
				$$('component1_cComm').move(316,343);
				$$('component1_cComm').resize(300,21);
				$$('component1_cComm').show();
				$$('component1_uPhoto').hide();
				$$('component1_uPhoto2').hide();
				$$('component1_cTitre').move(20,140);
				$$('component1_cTitre').resize(290,22);
				$$('component1_cTitre').show();
				$$('component1_cDesc').move(20,168);
				$$('component1_cDesc').resize(290,196);
				$$('component1_cDesc').show();
			}
		
			if (vFrame === "Frame3") {
				$$('component1_cPhoto').move(20,168);
				$$('component1_cPhoto').resize(225,150);
				$$('component1_cPhoto').show();
				$$('component1_cPhoto2').hide();
				$$('component1_cComm').hide();
				$$('component1_uPhoto').hide();
				$$('component1_uPhoto2').hide();
				$$('component1_cTitre').move(20,140);
				$$('component1_cTitre').resize(225,22);
				$$('component1_cTitre').show();
				$$('component1_cDesc').move(20,324);
				$$('component1_cDesc').resize(225,80);
				$$('component1_cDesc').show();
			}
		
			if (vFrame === "Frame4") {
				$$('component1_cPhoto').hide();
				$$('component1_cPhoto2').hide();
				$$('component1_cComm').hide();
				$$('component1_uPhoto').hide();
				$$('component1_uPhoto2').hide();
				$$('component1_cTitre').move(20,140);
				$$('component1_cTitre').resize(596,22);
				$$('component1_cTitre').show();
				$$('component1_cDesc').move(20,168);
				$$('component1_cDesc').resize(596,196);
				$$('component1_cDesc').show();
			}
		
			if (vFrame === "Frame5") {
				$$('component1_cPhoto').move(20,168);
				$$('component1_cPhoto').resize(225,150);
				$$('component1_cPhoto').show();
				$$('component1_cPhoto2').move(251,168);
				$$('component1_cPhoto2').resize(225,150);
				$$('component1_cPhoto2').show();
				$$('component1_cComm').hide();
				$$('component1_uPhoto').hide();
				$$('component1_uPhoto2').hide();
				$$('component1_cTitre').move(20,140);
				$$('component1_cTitre').resize(456,22);
				$$('component1_cTitre').show();
				$$('component1_cDesc').move(20,324);
				$$('component1_cDesc').resize(456,80);
				$$('component1_cDesc').show();
			}
			
			
		} else {
			$$('component1_rComm').show();
			$$('component1_rComm').setReadOnly(true);
			$$('component1_rPhoto').show();
			$$('component1_ListRep').show();
			$$('component1_btNewRep').show();
			$$('component1_btSupRep').hide();
			$$('component1_btSaveRep').hide();
			$$('component1_cbxRep').check();
			$$('component1_bUpdate').hide();
			$$('component1_bNew').hide();
			$$('component1_btSup').hide();
			$$('component1_ListActu').disable();
			$$('component1_ListRep').enable();
			$$('component1_ListRep').setReadOnly(true);
			$$('component1_bSave').hide();
			$$('component1_bUndo').hide();
			$$('component1_cComm').hide();
			$$('component1_cPhoto').hide();
			$$('component1_cDesc').hide();
			$$('component1_cTitre').hide();
			$$('component1_cPhoto2').hide();
		}	

	};// @lock

	btSaveRep.click = function btSaveRep_click (event)// @startlock
	{// @endlock
		
		$$('component1_btSupRep').hide();
		$$('component1_btSaveRep').hide();
		$$('component1_uRep').hide();
		$$('component1_rComm').setReadOnly(true);
		$$('component1_btNewRep').show();
		
		sources.component1_reportage.save();
		
		$$('component1_ListRep').enable();
		$$('component1_ListRep').setReadOnly(true);
		
	};// @lock

	cFram5.click = function cFram5_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').move(20,168);
		$$('component1_cPhoto').resize(225,150);
		$$('component1_cPhoto').show();
		$$('component1_cPhoto2').move(251,168);
		$$('component1_cPhoto2').resize(225,150);
		$$('component1_cPhoto2').show();
		$$('component1_cComm').hide();
		$$('component1_uPhoto').show();
		$$('component1_uPhoto2').show();
		$$('component1_cTitre').move(20,140);
		$$('component1_cTitre').resize(456,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(20,324);
		$$('component1_cDesc').resize(456,80);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame5");
	};// @lock

	cFram3.click = function cFram3_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').move(20,168);
		$$('component1_cPhoto').resize(225,150);
		$$('component1_cPhoto').show();
		$$('component1_cPhoto2').hide();
		$$('component1_cComm').hide();
		$$('component1_uPhoto').show();
		$$('component1_uPhoto2').hide();
		$$('component1_cTitre').move(20,140);
		$$('component1_cTitre').resize(225,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(20,324);
		$$('component1_cDesc').resize(225,80);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame3");
	};// @lock

	cFram4.click = function cFram4_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').hide();
		$$('component1_cPhoto2').hide();
		$$('component1_cComm').hide();
		$$('component1_uPhoto').hide();
		$$('component1_uPhoto2').hide();
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
		$$('component1_cPhoto').move(316,140);
		$$('component1_cPhoto').resize(300,200);
		$$('component1_cPhoto').show();
		$$('component1_cPhoto2').hide();
		$$('component1_cComm').move(316,343);
		$$('component1_cComm').resize(300,21);
		$$('component1_cComm').show();
		$$('component1_uPhoto').show();
		$$('component1_uPhoto2').hide();
		$$('component1_cTitre').move(20,140);
		$$('component1_cTitre').resize(290,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(20,168);
		$$('component1_cDesc').resize(290,196);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame2");
	};// @lock

	cFram1.click = function cFram1_click (event)// @startlock
	{// @endlock
		$$('component1_cPhoto').move(20,140);
		$$('component1_cPhoto').resize(300,200);
		$$('component1_cPhoto').show();
		$$('component1_cPhoto2').hide();
		$$('component1_cComm').move(20,343);
		$$('component1_cComm').resize(300,21);
		$$('component1_cComm').show();
		$$('component1_uPhoto').show();
		$$('component1_uPhoto2').hide();
		$$('component1_cTitre').move(326,140);
		$$('component1_cTitre').resize(290,22);
		$$('component1_cTitre').show();
		$$('component1_cDesc').move(326,168);
		$$('component1_cDesc').resize(290,196);
		$$('component1_cDesc').show();
		$$('component1_cFrame').setValue("Frame1");
		
	};// @lock

	ListActu.onRowClick = function ListActu_onRowClick (event)// @startlock
	{// @endlock
		var vFrame, vInfoID;
		
		$$('component1_btSup').show();
		$$('component1_bUpdate').show();
		$$('component1_btRep').show();
		
		vFrame = $$('component1_cFrame').getValue();
		
		if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(20,140);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(20,343);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_uPhoto').hide();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(326,140);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(326,168);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(316,140);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(316,343);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_uPhoto').hide();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,168);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(20,168);
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').hide();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(225,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,324);
			$$('component1_cDesc').resize(225,80);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame4") {
			$$('component1_cPhoto').hide();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').hide();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,168);
			$$('component1_cDesc').resize(596,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame5") {
			$$('component1_cPhoto').move(20,168);
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').move(251,168);
			$$('component1_cPhoto2').resize(225,150);
			$$('component1_cPhoto2').show();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').hide();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(456,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,324);
			$$('component1_cDesc').resize(456,80);
			$$('component1_cDesc').show();
		}
		
		vInfoID = sources.component1_informations.ID;
		sources.component1_reportage.query("Information.ID = :1 order by Commentaire",vInfoID);
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
		$$('component1_btRep').hide();
		$$('component1_cbxRep').uncheck();
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
		$$('component1_cFram5').show();
		$$('component1_uPhoto').show();
		$$('component1_cbAnScol').show();
		$$('component1_cAction').setValue("Créer");
				
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').show();
		$$('component1_btSup').hide();
		$$('component1_btRep').hide();
		$$('component1_cbxRep').uncheck();
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
		$$('component1_cFram5').hide();
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
		$$('component1_btRep').hide();
		$$('component1_cbxRep').uncheck();
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
		$$('component1_cFram5').hide();
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
		$$('component1_btRep').hide();
		$$('component1_cbxRep').uncheck();
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
		$$('component1_cFram5').show();
		$$('component1_uPhoto').show();
		$$('component1_cbAnScol').show();
		$$('component1_cAction').setValue("Modifier");
		
		vAnScol = $$('component1_cAnScolID').getValue();
		$$('component1_cbAnScol').setValue(vAnScol);
		
		vFrame = $$('component1_cFrame').getValue();
		
		if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(20,140);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(20,343);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_uPhoto').show();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(326,140);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(326,168);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(316,140);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(316,343);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_uPhoto').show();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,168);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(20,168);
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').show();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(225,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,324);
			$$('component1_cDesc').resize(225,80);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame4") {
			$$('component1_cPhoto').hide();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').hide();
			$$('component1_uPhoto2').hide();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,168);
			$$('component1_cDesc').resize(596,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame5") {
			$$('component1_cPhoto').move(20,168);
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').move(251,168);
			$$('component1_cPhoto2').resize(225,150);
			$$('component1_cPhoto2').show();
			$$('component1_cComm').hide();
			$$('component1_uPhoto').show();
			$$('component1_uPhoto2').show();
			$$('component1_cTitre').move(20,140);
			$$('component1_cTitre').resize(456,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(20,324);
			$$('component1_cDesc').resize(456,80);
			$$('component1_cDesc').show();
		}
		
				
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btImaRep", "click", btImaRep.click, "WAF");
	WAF.addListener(this.id + "_ListRep", "onRowClick", ListRep.onRowClick, "WAF");
	WAF.addListener(this.id + "_btSupRep", "click", btSupRep.click, "WAF");
	WAF.addListener(this.id + "_btNewRep", "click", btNewRep.click, "WAF");
	WAF.addListener(this.id + "_btRep", "click", btRep.click, "WAF");
	WAF.addListener(this.id + "_btSaveRep", "click", btSaveRep.click, "WAF");
	WAF.addListener(this.id + "_cFram5", "click", cFram5.click, "WAF");
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
