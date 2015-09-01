
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var cSel = {};	// @select
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	cSel.change = function cSel_change (event)// @startlock
	{// @endlock
		var vSel, vUser;
		
		$$('LstPDF').hide();
		$$('sPDF').hide();
		vSel = $$('cSel').getValue();
		
		if (vSel === "Cours PDF") {
			vUser = WAF.directory.currentUser().userName;
			sources.eleves.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
					alert("entre");
					var vEleID;
					elem = sources.eleves;
					if (elem.length > 0) {
						vEleID = elem.ID;
						sources.abonnes.query("Eleve.ID = :1", vEleID);
						$$('LstPDF').show();
						$$('sPDF').show();
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
	WAF.addListener("cSel", "change", cSel.change, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
// @endregion
};// @endlock
