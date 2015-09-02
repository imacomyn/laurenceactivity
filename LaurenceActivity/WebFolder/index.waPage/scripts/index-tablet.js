
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btV3 = {};	// @buttonImage
	var btV2 = {};	// @buttonImage
	var btV1 = {};	// @buttonImage
	var ListAssoc = {};	// @dataGrid
	var btRight = {};	// @image
	var btLeft = {};	// @image
	var btPlan = {};	// @buttonImage
	var btNews = {};	// @buttonImage
	var btFilm = {};	// @buttonImage
	var btPDF = {};	// @buttonImage
	var documentEvent = {};	// @document
	var LstPDF = {};	// @dataGrid
	var btClose = {};	// @buttonImage
	var btShow = {};	// @buttonImage
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	btV3.click = function btV3_click (event)// @startlock
	{// @endlock
		$$('vFilm').loadVideoByUrl("/Videos/ACL.m4v");
	};// @lock

	btV2.click = function btV2_click (event)// @startlock
	{// @endlock
		$$('vFilm').loadVideoByUrl("/Videos/SRM2015.mp4");
	};// @lock

	btV1.click = function btV1_click (event)// @startlock
	{// @endlock
		$$('vFilm').loadVideoByUrl("/Videos/SRM2014.mp4");
	};// @lock

	ListAssoc.onRowDraw = function ListAssoc_onRowDraw (event)// @startlock
	{// @endlock
		var vAssoc, vToday, vID;
		elem = sources.Association1;
		vID = elem.ID;
		if (vID !== null) {
			vAssoc = elem.Sigle;
			vToday = new Date();
				sources.informations.query("Annee_Scolaire.Association.Sigle = :1 and ( Fin_Valide = null or Fin_Valide > :2 ) order by Date_Creation desc", { onSuccess: function(event) { 
					elem = sources.informations;
					$$('cCount').setValue(elem.length);
					$$('cPos').setValue(0);
				}, params:[vAssoc, vToday] });
		}
	};// @lock

	btRight.click = function btRight_click (event)// @startlock
	{// @endlock
		var vPos, vCount, vFrame;
		
		vPos = parseInt($$('cPos').getValue(),10);
		vCount = parseInt($$('cCount').getValue(),10);
		vPos += 1;
		if (vPos >= vCount) {
			vPos = 0;
		}
		$$('ListActu').setSelectedRows([vPos]);
		$$('cPos').setValue(vPos);
	};// @lock

	btLeft.click = function btLeft_click (event)// @startlock
	{// @endlock
		var vPos, vCount, vFrame;
		
		vPos = parseInt($$('cPos').getValue(),10);
		vCount = parseInt($$('cCount').getValue(),10);
		vPos -= 1;
		if (vPos < 0) {
			vPos = vCount-1;
		}
		$$('ListActu').setSelectedRows([vPos]);
		$$('cPos').setValue(vPos);
	};// @lock

	btPlan.click = function btPlan_click (event)// @startlock
	{// @endlock
		$$('LstPDF').hide();
		$$('sPDF').hide();
		$$('btShow').hide();
		$$('btClose').hide();
		$$('rPhoto').hide();
		$$('cTitre').hide();
		$$('cDesc').hide();
		$$('cCreat').hide();
		$$('cPhoto').hide();
		$$('cComm').hide();
		$$('cLogo').hide();
		$$('cEntete').hide();
		$$('btRight').hide();
		$$('btLeft').hide();
		$$('btV1').hide();
		$$('btV2').hide();
		$$('btV3').hide();
		$$('vFilm').resize(1,1);
		$$('vFilm').move(1001,571);
	};// @lock

	btNews.click = function btNews_click (event)// @startlock
	{// @endlock
		$$('LstPDF').hide();
		$$('sPDF').hide();
		$$('btShow').hide();
		$$('btClose').hide();
		$$('rPhoto').hide();
		$$('cTitre').show();
		$$('cDesc').show();
		$$('cCreat').show();
		$$('cPhoto').show();
		$$('cComm').show();
		$$('cLogo').show();
		$$('cEntete').show();
		$$('btLeft').show();
		$$('btRight').show();
		$$('btV1').hide();
		$$('btV2').hide();
		$$('btV3').hide();
		$$('vFilm').resize(1,1);
		$$('vFilm').move(1001,571);
		
	};// @lock

	btFilm.click = function btFilm_click (event)// @startlock
	{// @endlock
		$$('LstPDF').hide();
		$$('sPDF').hide();
		$$('btShow').hide();
		$$('btClose').hide();
		$$('rPhoto').hide();
		$$('cTitre').hide();
		$$('cDesc').hide();
		$$('cCreat').hide();
		$$('cPhoto').hide();
		$$('cComm').hide();
		$$('cLogo').hide();
		$$('cEntete').hide();
		$$('btLeft').hide();
		$$('btRight').hide();
		$$('btV1').show();
		$$('btV2').show();
		$$('btV3').show();
		$$('vFilm').move(7,43);
		$$('vFilm').resize(726,461);
	};// @lock

	btPDF.click = function btPDF_click (event)// @startlock
	{// @endlock
		var vSel, vUser, vRole, vQuery, vEleID;
		
		$$("LstPDF").setRowHeight(26);
		$$('cTitre').hide();
		$$('cDesc').hide();
		$$('cCreat').hide();
		$$('cPhoto').hide();
		$$('cComm').hide();
		$$('cLogo').hide();
		$$('cEntete').hide();
		$$('btRight').hide();
		$$('btLeft').hide();
		$$('btV1').hide();
		$$('btV2').hide();
		$$('btV3').hide();
		$$('vFilm').resize(1,1);
		$$('vFilm').move(1001,571);
			
		elem = sources.eleves;
		if (elem.length > 0) {
			vEleID = elem.ID;
			sources.abonnes.query("Eleve.ID = :1", vEleID);
			$$('LstPDF').show();
			$$('btShow').show();
			$$('rPhoto').show();
			$$('sPDF').hide();
		};		

	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser, vUserName;
		
		vUser = WAF.directory.currentUser();
		
		if (vUser === null) {
			$$('main').destroy();
		 } else {
		 	
		 	if (waf.directory.currentUserBelongsTo("Elève")) {
								
				vUserName = waf.directory.currentUser().userName;
				sources.eleves.query("Utilisateur.Login = :1",vUserName);
			}
			if (waf.directory.currentUserBelongsTo("Professeur")) {

				alert("Aucune fonction n'est disponible pour un professeur en version tablette. Vous devez utiliser ALT-C sur un ordinateur. Merci de votre compréhension");
				$$('main').destroy();
				
			}
			if (waf.directory.currentUserBelongsTo("Administrateur")) {

				alert("Aucune fonction n'est disponible pour un administrateur en version tablette. Vous devez utiliser ALT-C sur un ordinateur. Merci de votre compréhension");
				$$('main').destroy();
				
			}
			
		 }

	};// @lock

	LstPDF.onRowClick = function LstPDF_onRowClick (event)// @startlock
	{// @endlock
		$$('btShow').show();
		$$('btClose').hide();
		$$('sPDF').hide();
	};// @lock

	btClose.click = function btClose_click (event)// @startlock
	{// @endlock
		$$('btShow').show();
		$$('btClose').hide();
		$$('sPDF').hide();
	};// @lock

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		$$('btShow').hide();
		$$('btClose').show();
		$$('sPDF').show();
	};// @lock

	W_Login.login = function W_Login_login (event)// @startlock
	{// @endlock
		var vUser, vGroups, curSession, theUser; 
		
		vUser = WAF.directory.currentUser();
		// alert(vUser.fullName+" " + vUser.ID + " "+ vUser.userName);
		if (vUser !== null) {
			
			window.location = '/index-tablet.html';
			
		}
	};// @lock

	W_Login.logout = function W_Login_logout (event)// @startlock
	{// @endlock
		$$('main').destroy();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("btV3", "click", btV3.click, "WAF");
	WAF.addListener("btV2", "click", btV2.click, "WAF");
	WAF.addListener("btV1", "click", btV1.click, "WAF");
	WAF.addListener("ListAssoc", "onRowDraw", ListAssoc.onRowDraw, "WAF");
	WAF.addListener("btRight", "click", btRight.click, "WAF");
	WAF.addListener("btLeft", "click", btLeft.click, "WAF");
	WAF.addListener("btPlan", "click", btPlan.click, "WAF");
	WAF.addListener("btNews", "click", btNews.click, "WAF");
	WAF.addListener("btFilm", "click", btFilm.click, "WAF");
	WAF.addListener("btPDF", "click", btPDF.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("LstPDF", "onRowClick", LstPDF.onRowClick, "WAF");
	WAF.addListener("btClose", "click", btClose.click, "WAF");
	WAF.addListener("btShow", "click", btShow.click, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
// @endregion
};// @endlock
