
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var sw2 = {};	// @switchbox
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	sw2.touchend = function sw2_touchend (event)// @startlock
	{// @endlock
		var vSwitch,vUser;
		
		vSwitch = $$('sw2').getValue();
		if (vSwitch === "Oui") {
			vUser = WAF.directory.currentUser().userName;
			sources.eleves.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
				var vEleID;
				elem = sources.eleves;
				if (elem.length > 0) {
					vEleID = elem.ID;
					sources.abonnes.query("Eleve.ID = :1", vEleID);
					$$('ListPDF').show();
					$$('fshow').show();
				};		
			}, params:[vUser] });
		} else {
			$$('ListPDF').hide();
			$$('fshow').hide();
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
	WAF.addListener("sw2", "touchend", sw2.touchend, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
// @endregion
};// @endlock
