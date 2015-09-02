
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btClose = {};	// @buttonImage
	var btShow = {};	// @buttonImage
	var cSel = {};	// @select
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

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

	cSel.change = function cSel_change (event)// @startlock
	{// @endlock
		var vSel, vUser;
		
		$$('LstPDF').hide();
		$$('sPDF').hide();
		$$('btShow').hide();
		$$('btClose').hide();
		$$('rPhoto').hide();
		
		vSel = $$('cSel').getValue();
		
		if (vSel === "Cours PDF") {
			vUser = WAF.directory.currentUser().userName;
			$$("LstPDF").setRowHeight(26);
			sources.eleves.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
					var vEleID;
					elem = sources.eleves;
					if (elem.length > 0) {
						vEleID = elem.ID;
						sources.abonnes.query("Eleve.ID = :1", vEleID);
						$$('LstPDF').show();
						$$('btShow').show();
						$$('rPhoto').show();
						$$('sPDF').hide();
					};		
			}, params:[vUser] });
		}
		
		
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
	WAF.addListener("btClose", "click", btClose.click, "WAF");
	WAF.addListener("btShow", "click", btShow.click, "WAF");
	WAF.addListener("cSel", "change", cSel.change, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
// @endregion
};// @endlock
