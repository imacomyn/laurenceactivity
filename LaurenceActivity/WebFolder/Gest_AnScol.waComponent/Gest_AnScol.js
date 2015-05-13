
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_AnScol';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();

	// @region namespaceDeclaration// @startlock
	var btCalc = {};	// @buttonImage
	var cbAnScol = {};	// @combobox
	var bSave = {};	// @button
	var bUndo = {};	// @button
	var bNew = {};	// @button
	var bUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	btCalc.click = function btCalc_click (event)// @startlock
	{// @endlock
		var vMonAn,  vCot, vTmp, vMonT1, vMonT2, vMonT3;
		
		vMonAn = 0;
		
		vTmp = $$('component1_cCot').getValue();
		vTmp = vTmp.replace(',', '.');
		vCot = parseFloat(vTmp);
		vTmp = $$('component1_cMonT1').getValue();
		vTmp = vTmp.replace(',', '.');
		vMonT1 = parseFloat(vTmp);
		vTmp = $$('component1_cMonT2').getValue();
		vTmp = vTmp.replace(',', '.');
		vMonT2 = parseFloat(vTmp);
		vTmp = $$('component1_cMonT3').getValue();
		vTmp = vTmp.replace(',', '.');
		vMonT3 = parseFloat(vTmp);
		vMonAn = vCot + vMonT1 + vMonT2 + vMonT3;
		$$('component1_cMonAn').setValue(vMonAn);
		
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol;
		
		if ($$('component1_cbAnScol').getValue() === "-") {
			$$('component1_bSave').disable();
		} else {
			vAnScol = $$('component1_cbAnScol').getValue() + " " + sources.component1_association.Sigle ;
			$$('component1_cAnScol').setValue(vAnScol);
			$$('component1_cIdent').setValue($$('component1_cbAnScol').getValue());
			$$('component1_bSave').enable();
		}
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vAnScol, NbSamRef, vAction;;
		
		vAnScol = $$('component1_cbAnScol').getValue() + " " + sources.component1_association.Sigle ;
		$$('component1_cAnScol').setValue(vAnScol);
		vAction = $$('component1_cAction').getValue();
		
		if (vAction === "Créer") {
			ds.Annees_Scolaires.query("Annee_Scolaire = :1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamRef = myCollection.length;
					if (NbSamRef > 0) {
						alert("Cette année scolaire est déjà définie pour cette association (" + vAnScol +"). Merci de choisir une combinaison différente.");	
						$$('component1_bSave').disable();
					} else {
						
						$$('component1_bUpdate').show();
						$$('component1_bNew').show();
						$$('component1_ListAnScol').enable();
						$$('component1_ListAnScol').setReadOnly(true);
						$$('component1_bSave').hide();
						$$('component1_bUndo').hide();
						$$('component1_cAnScol').show();
						$$('component1_cAssoc').show();
						$$('component1_cDatDeb').setReadOnly(true);
						$$('component1_cDatFin').setReadOnly(true);
						$$('component1_cMonAn').setReadOnly(true);
						$$('component1_cMonT1').setReadOnly(true);
						$$('component1_cMonT2').setReadOnly(true);
						$$('component1_cMonT3').setReadOnly(true);
						$$('component1_cbAnScol').hide();
						$$('component1_cbAssoc').hide();
						$$('component1_btCalc').hide();
						$$('component1_cbAnScol').getLabel().setTextColor("black");
						$$('component1_cbAssoc').getLabel().setTextColor("black");
								
						sources.component1_annees_Scolaires.Association.set(sources.component1_association);
						sources.component1_annees_Scolaires.save();
						$$('component1_cAction').setValue("-");
						
					}
				}, params:[vAnScol] 
			});
			
		} else {
			
			$$('component1_bUpdate').show();
			$$('component1_bNew').show();
			$$('component1_ListAnScol').enable();
			$$('component1_ListAnScol').setReadOnly(true);
			$$('component1_bSave').hide();
			$$('component1_bUndo').hide();
			$$('component1_cAnScol').show();
			$$('component1_cAssoc').show();
			$$('component1_cDatDeb').setReadOnly(true);
			$$('component1_cDatFin').setReadOnly(true);
			$$('component1_cMonAn').setReadOnly(true);
			$$('component1_cMonT1').setReadOnly(true);
			$$('component1_cMonT2').setReadOnly(true);
			$$('component1_cMonT3').setReadOnly(true);
			$$('component1_cCot').setReadOnly(true);
			$$('component1_cbAnScol').hide();
			$$('component1_cbAssoc').hide();
			$$('component1_btCalc').hide();
			$$('component1_cbAnScol').getLabel().setTextColor("black");
			$$('component1_cbAssoc').getLabel().setTextColor("black");
			
			sources.component1_annees_Scolaires.Association.set(sources.component1_association);					
			sources.component1_annees_Scolaires.save();
			$$('component1_cAction').setValue("-");
			
		}
					
					
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_ListAnScol').enable();
		$$('component1_ListAnScol').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cAnScol').show();
		$$('component1_cAssoc').show();
		$$('component1_cDatDeb').setReadOnly(true);
		$$('component1_cDatFin').setReadOnly(true);
		$$('component1_cMonAn').setReadOnly(true);
		$$('component1_cMonTrim').setReadOnly(true);
		$$('component1_cCot').setReadOnly(true);
		$$('component1_cbAnScol').hide();
		$$('component1_cbAssoc').hide();
		$$('component1_btCalc').hide();
		//$$('component1_cbAnScol').getLabel().setTextColor("black");
		//$$('component1_cbAssoc').getLabel().setTextColor("black");
		$$('component1_cAction').setValue("-");
				
		$$('component1').loadComponent("/Gest_AnScol.waComponent");
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		
		sources.component1_annees_Scolaires.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_ListAnScol').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cAnScol').hide();
		$$('component1_cAssoc').hide();
		$$('component1_cDatDeb').setReadOnly(false);
		$$('component1_cDatFin').setReadOnly(false);
		$$('component1_cMonAn').setReadOnly(false);
		$$('component1_cMonT1').setReadOnly(false);
		$$('component1_cMonT2').setReadOnly(false);
		$$('component1_cMonT3').setReadOnly(false);
		$$('component1_cCot').setReadOnly(false);
		$$('component1_cbAnScol').show();
		$$('component1_cbAssoc').show();
		$$('component1_cbAnScol').getLabel().setTextColor("red");
		$$('component1_cbAssoc').getLabel().setTextColor("red");
		$$('component1_cbAnScol').setValue("-");
		$$('component1_cbAnScol').enable();
		$$('component1_cbAssoc').enable();
		$$('component1_btCalc').show();
		$$('component1_cAction').setValue("Créer");
		
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_ListAnScol').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').enable();
		$$('component1_bUndo').show();
		$$('component1_cAnScol').hide();
		$$('component1_cAssoc').hide();
		$$('component1_cDatDeb').setReadOnly(false);
		$$('component1_cDatFin').setReadOnly(false);
		$$('component1_cMonAn').setReadOnly(false);
		$$('component1_cMonT1').setReadOnly(false);
		$$('component1_cMonT2').setReadOnly(false);
		$$('component1_cMonT3').setReadOnly(false);
		$$('component1_cCot').setReadOnly(false);
		$$('component1_cbAnScol').show();
		$$('component1_cbAnScol').enable();
		$$('component1_cbAssoc').show();
		$$('component1_cbAssoc').enable();
		//$$('component1_cbAnScol').getLabel().setTextColor("red");
		//$$('component1_cbAssoc').getLabel().setTextColor("red");
		$$('component1_cbAssoc').setValue($$('component1_cAssocb').getValue());
		$$('component1_cbAnScol').setValue($$('component1_cIdent').getValue());
		$$('component1_cbAnScol').disable();
		$$('component1_cbAssoc').disable();
		$$('component1_btCalc').show();
		$$('component1_cAction').setValue("Modifier");
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btCalc", "click", btCalc.click, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
