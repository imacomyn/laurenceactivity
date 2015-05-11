
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_PDF';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListPDF").setRowHeight(20);	

	// @region namespaceDeclaration// @startlock
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CNom, CSigle;
		
		sources.component1_cours_PDF.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		
		$$('component1_ListPDF').disable();
		$$('component1_cNom').setReadOnly(false);
		$$('component1_cDesc').setReadOnly(false);
		$$('component1_cCat').hide();
		$$('component1_cbCat').show();
		$$('component1_btShow').hide();
		$$('component1_cUpld').show();
		$$('component1_fShow').hide();
		$$('component1_cNom').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Créer");
		
				
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		
		$$('component1_ListPDF').enable();
		$$('component1_ListPDF').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(true);
		$$('component1_cCat').show();
		$$('component1_cbCat').hide();
		$$('component1_btShow').show();
		$$('component1_cUpld').hide();
		$$('component1_fShow').hide();
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		
		$$('component1').loadComponent("/Gest_PDF.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		
		$$('component1_ListPDF').enable();
		$$('component1_ListPDF').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(true);
		$$('component1_cCat').show();
		$$('component1_cvCat').hide();
		$$('component1_btShow').show();
		$$('component1_cUpld').hide();
		$$('component1_fShow').hide();
		$$('component1_cNom').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
		$$('component1_cCat').setValue($$('component1_cbCat').getValue());
		
		sources.component1_cours_PDF.save({
                onSuccess:function(event2) {}
            });
		
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		
		$$('component1_ListPDF').disable();
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cDesc').setReadOnly(false);
		$$('component1_cCat').hide();
		$$('component1_cbCat').show();
		$$('component1_btShow').hide();
		$$('component1_cUpld').show();
		$$('component1_fShow').hide();
		$$('component1_cbCat').setValue($$('component1_cCat').getValue());
		$$('component1_cAction').setValue("Modifier");
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
