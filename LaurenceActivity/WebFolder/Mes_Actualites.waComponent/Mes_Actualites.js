﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Mes_Actualites';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		var vUser;
		$$("cchg").hide();
		$$('component1_cLect').setValue("Stop");
		vUser = WAF.directory.currentUser().userName;
		//alert(vUser);
		sources.component1_eleves.query("Utilisateur.Login = :1", vUser);

	// @region namespaceDeclaration// @startlock
	var image2 = {};	// @image
	var image1 = {};	// @image
	var ListAssoc = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		var vPos, vCount;
		
		vPos = parseInt($$('component1_cPos').getValue(),10);
		vCount = parseInt($$('component1_cCount').getValue(),10);
		vPos -= 1;
		if (vPos < 0) {
			vPos = vCount-1;
		}
		$$('component1_ListActu').setSelectedRows([vPos]);
		$$('component1_cPos').setValue(vPos);
		
		var vFrame;
		
		vFrame = $$('component1_cFrame').getValue();
		
		if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(325,30);
			$$('component1_cPhoto').resize(240,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(325,233);
			$$('component1_cComm').resize(240,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(571,30);
			$$('component1_cTitre').resize(350,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(571,58);
			$$('component1_cDesc').resize(350,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(681,30);
			$$('component1_cPhoto').resize(240,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(681,233);
			$$('component1_cComm').resize(240,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(350,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,58);
			$$('component1_cDesc').resize(350,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(325,58);
			$$('component1_cPhoto').resize(596,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(596,80);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame4") {
			$$('component1_cPhoto').hide();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,58);
			$$('component1_cDesc').resize(596,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame5") {
			$$('component1_cPhoto').move(325,58);
			$$('component1_cPhoto').resize(295,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').move(626,58);
			$$('component1_cPhoto2').resize(295,150);
			$$('component1_cPhoto2').show();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(596,80);
			$$('component1_cDesc').show();
		}

	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		var vPos, vCount;
		
		vPos = parseInt($$('component1_cPos').getValue(),10);
		vCount = parseInt($$('component1_cCount').getValue(),10);
		vPos += 1;
		if (vPos >= vCount) {
			vPos = 0;
		}
		$$('component1_ListActu').setSelectedRows([vPos]);
		$$('component1_cPos').setValue(vPos);
		
		var vFrame;
		
		vFrame = $$('component1_cFrame').getValue();
		
		if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(325,30);
			$$('component1_cPhoto').resize(240,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(325,233);
			$$('component1_cComm').resize(240,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(571,30);
			$$('component1_cTitre').resize(350,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(571,58);
			$$('component1_cDesc').resize(350,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(681,30);
			$$('component1_cPhoto').resize(240,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(681,233);
			$$('component1_cComm').resize(240,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(350,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,58);
			$$('component1_cDesc').resize(350,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(325,58);
			$$('component1_cPhoto').resize(596,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(596,80);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame4") {
			$$('component1_cPhoto').hide();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,58);
			$$('component1_cDesc').resize(596,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame5") {
			$$('component1_cPhoto').move(325,58);
			$$('component1_cPhoto').resize(295,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').move(626,58);
			$$('component1_cPhoto2').resize(295,150);
			$$('component1_cPhoto2').show();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(596,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(596,80);
			$$('component1_cDesc').show();
		}
		
	};// @lock

	ListAssoc.onRowDraw = function ListAssoc_onRowDraw (event)// @startlock
	{// @endlock
		var vAssoc, vToday, vID;
		elem = sources.component1_Association1;
		vID = elem.ID;
		if (vID !== null) {
			vAssoc = elem.Sigle;
			vToday = new Date();
				sources.component1_informations.query("Annee_Scolaire.Association.Sigle = :1 and ( Fin_Valide = null or Fin_Valide > :2 ) order by Date_Creation desc", { onSuccess: function(event) { 
					elem = sources.component1_informations;
					$$('component1_cCount').setValue(elem.length);
					$$('component1_cPos').setValue(0);
				}, params:[vAssoc, vToday] });
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	WAF.addListener(this.id + "_image1", "click", image1.click, "WAF");
	WAF.addListener(this.id + "_ListAssoc", "onRowDraw", ListAssoc.onRowDraw, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock