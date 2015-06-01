
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
		vUser = WAF.directory.currentUser().userName;
		//alert(vUser);
		sources.component1_eleves.query("Utilisateur.Login = :1", vUser);

	// @region namespaceDeclaration// @startlock
	var ListActu = {};	// @dataGrid
	var ListRep = {};	// @dataGrid
	var rPrev = {};	// @image
	var rNext = {};	// @image
	var btRep = {};	// @image
	var image2 = {};	// @image
	var image1 = {};	// @image
	var ListAssoc = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	ListActu.onRowDraw = function ListActu_onRowDraw (event)// @startlock
	{// @endlock
		var vFrame;
		vFrame = $$('component1_cFrame').getValue();
		if (vFrame !== null) {
			
			if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(325,30);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(325,233);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(631,30);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(631,58);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(621,30);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(621,233);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,58);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(325,58);
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(225,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(225,80);
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
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').move(556,58);
			$$('component1_cPhoto2').resize(225,150);
			$$('component1_cPhoto2').show();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(456,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(456,80);
			$$('component1_cDesc').show();
		}
			
		}
	};// @lock

	ListRep.onRowDraw = function ListRep_onRowDraw (event)// @startlock
	{// @endlock
		var vRep;
		elem = sources.component1_reportageCollection;
		if (elem.length > 0) {
			$$('component1_btRep').show();
			$$('component1_rCount').setValue(elem.length);
			$$('component1_rPos').setValue(0);
		} else {
			$$('component1_btRep').hide();
		}
	};// @lock

	rPrev.click = function rPrev_click (event)// @startlock
	{// @endlock
		var vPos, vCount;
		
		vPos = parseInt($$('component1_rPos').getValue(),10);
		vCount = parseInt($$('component1_rCount').getValue(),10);
		vPos -= 1;
		if (vPos < 0) {
			vPos = vCount-1;
		}
		$$('component1_ListRep').setSelectedRows([vPos]);
		$$('component1_rPos').setValue(vPos);
		
	};// @lock

	rNext.click = function rNext_click (event)// @startlock
	{// @endlock
		var vPos, vCount;
		
		vPos = parseInt($$('component1_rPos').getValue(),10);
		vCount = parseInt($$('component1_rCount').getValue(),10);
		vPos += 1;
		if (vPos >= vCount) {
			vPos = 0;
		}
		$$('component1_ListRep').setSelectedRows([vPos]);
		$$('component1_rPos').setValue(vPos);
		
				
	};// @lock

	btRep.click = function btRep_click (event)// @startlock
	{// @endlock
			if ($$('component1_cbxRep').getValue()) {
				$$('component1_rNext').hide();
				$$('component1_rPrev').hide();
				$$('component1_rPhoto').hide();
				$$('component1_rComm').hide();
				$$('component1_cbxRep').uncheck();
			} else {
				$$('component1_rNext').show();
				$$('component1_rPrev').show();
				$$('component1_rPhoto').show();
				$$('component1_rComm').show();
				$$('component1_cbxRep').check();
			}	
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		var vPos, vCount, vFrame;
		
		vPos = parseInt($$('component1_cPos').getValue(),10);
		vCount = parseInt($$('component1_cCount').getValue(),10);
		vPos -= 1;
		if (vPos < 0) {
			vPos = vCount-1;
		}
		$$('component1_ListActu').setSelectedRows([vPos]);
		$$('component1_cPos').setValue(vPos);
		$$('component1_btRep').hide();
		$$('component1_rNext').hide();
		$$('component1_rPrev').hide();
		$$('component1_rPhoto').hide();
		$$('component1_rComm').hide();
		$$('component1_cbxRep').uncheck();
		
		vFrame = $$('component1_cFrame').getValue();
		if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(325,30);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(325,233);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(631,30);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(631,58);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(621,30);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(621,233);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,58);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(325,58);
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(225,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(225,80);
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
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').move(556,58);
			$$('component1_cPhoto2').resize(225,150);
			$$('component1_cPhoto2').show();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(456,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(456,80);
			$$('component1_cDesc').show();
		}
		

	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		var vPos, vCount, vFrame;
		
		vPos = parseInt($$('component1_cPos').getValue(),10);
		vCount = parseInt($$('component1_cCount').getValue(),10);
		vPos += 1;
		if (vPos >= vCount) {
			vPos = 0;
		}
		$$('component1_ListActu').setSelectedRows([vPos]);
		$$('component1_cPos').setValue(vPos);
		$$('component1_btRep').hide();
		$$('component1_rNext').hide();
		$$('component1_rPrev').hide();
		$$('component1_rPhoto').hide();
		$$('component1_rComm').hide();
		$$('component1_cbxRep').uncheck();
		
		vFrame = $$('component1_cFrame').getValue();
		if (vFrame === "Frame1") {
			$$('component1_cPhoto').move(325,30);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(325,233);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(631,30);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(631,58);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame2") {
			$$('component1_cPhoto').move(621,30);
			$$('component1_cPhoto').resize(300,200);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').move(621,233);
			$$('component1_cComm').resize(300,21);
			$$('component1_cComm').show();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(290,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,58);
			$$('component1_cDesc').resize(290,196);
			$$('component1_cDesc').show();
		}
		
		if (vFrame === "Frame3") {
			$$('component1_cPhoto').move(325,58);
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').hide();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(225,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(225,80);
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
			$$('component1_cPhoto').resize(225,150);
			$$('component1_cPhoto').show();
			$$('component1_cPhoto2').move(556,58);
			$$('component1_cPhoto2').resize(225,150);
			$$('component1_cPhoto2').show();
			$$('component1_cComm').hide();
			$$('component1_cTitre').move(325,30);
			$$('component1_cTitre').resize(456,22);
			$$('component1_cTitre').show();
			$$('component1_cDesc').move(325,211);
			$$('component1_cDesc').resize(456,80);
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
	WAF.addListener(this.id + "_ListActu", "onRowDraw", ListActu.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListRep", "onRowDraw", ListRep.onRowDraw, "WAF");
	WAF.addListener(this.id + "_rPrev", "click", rPrev.click, "WAF");
	WAF.addListener(this.id + "_rNext", "click", rNext.click, "WAF");
	WAF.addListener(this.id + "_btRep", "click", btRep.click, "WAF");
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	WAF.addListener(this.id + "_image1", "click", image1.click, "WAF");
	WAF.addListener(this.id + "_ListAssoc", "onRowDraw", ListAssoc.onRowDraw, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
