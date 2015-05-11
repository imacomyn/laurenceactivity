
(function Component (id) {// @lock
	
	var wURL = window.location.href,
		wPathname = window.location.pathname,
		iFrame;


// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_PDF';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListPDF").setRowHeight(22);	

	// @region namespaceDeclaration// @startlock
	var btClose = {};	// @buttonImage
	var btShow = {};	// @buttonImage
	var cNom = {};	// @textField
	var cUpld = {};	// @fileUpload
	var bNew = {};	// @button
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	btClose.click = function btClose_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_bSave').show();
		$$('component1_bUndo').show();
		$$('component1_btShow').show();
		$$('component1_btClose').hide();
		$$('component1_fShow').hide();
	};// @lock

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		var vFic, vURL;
		
		vFic = $$('component1_cFic').getValue();
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_btShow').hide();
		$$('component1_btClose').show();
		$$('component1_fShow').show();
		vURL = "/Cours_PDF/" + vFic;
		//$$('component1_fShow').setValue(vURL);
		
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/";
			wExportURL += vFic;
		} else {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "Cours/";
			wExportURL += vFic;
		}

		alert(wExportURL);
		$('#component1_fShow iframe').attr('src',wExportURL);

		
	};// @lock

	cNom.change = function cNom_change (event)// @startlock
	{// @endlock
		var cNom;
		CNom = $$('component1_cNom').getValue();
		if (CNom.length > 0)  {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cNom.blur = function cNom_blur (event)// @startlock
	{// @endlock
		var RefEntry, NbSamRef, vAction;
		
		RefEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.Cours_PDF.query("Nom=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamRef = myCollection.length;
					if (NbSamRef > 0) {
						alert("Ce nom de cours (" + RefEntry +") est déjà utilisé. Merci de saisir un nom de cours différent.");	
						$$('component1_cNom').setValue(null);
						//$$('component1_clogin').focus(true);
						$$('component1_bSave').disable();
						}
					}, params:[RefEntry] 
				});
		}

	};// @lock

	cUpld.filesUploaded = function cUpld_filesUploaded (event)// @startlock
	{// @endlock
		var myArray = $$('component1_cUpld').getFiles();
		$$('component1_cFic').setValue(myArray[0].name);
	};// @lock

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
		$$('component1_cbCat').hide();
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
		$$('component1_bSave').enable();
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
	WAF.addListener(this.id + "_btClose", "click", btClose.click, "WAF");
	WAF.addListener(this.id + "_btShow", "click", btShow.click, "WAF");
	WAF.addListener(this.id + "_cNom", "change", cNom.change, "WAF");
	WAF.addListener(this.id + "_cNom", "blur", cNom.blur, "WAF");
	WAF.addListener(this.id + "_cUpld", "filesUploaded", cUpld.filesUploaded, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
