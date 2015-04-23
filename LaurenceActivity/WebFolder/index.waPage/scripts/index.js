﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').destroy();
		 } else {
		 	
		 	if (waf.directory.currentUserBelongsTo("Elève")) {
				//$$('M_Ressources').hide();
				//$$('M_ActivE').hide();
			}
			if (waf.directory.currentUserBelongsTo("Professeur")) {

				//$$('M_ActivP').hide();
				
			}
			
		 }

	};// @lock

	W_Login.logout = function W_Login_logout (event)// @startlock
	{// @endlock
		$$('main').destroy();
	};// @lock

	W_Login.login = function W_Login_login (event)// @startlock
	{// @endlock
		var vUser, vGroups, curSession, theUser; 
		
		vUser = WAF.directory.currentUser();
		// alert(vUser.fullName+" " + vUser.ID + " "+ vUser.userName);
		if (vUser !== null) {
			
			window.location = '/index.html';
		}

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
