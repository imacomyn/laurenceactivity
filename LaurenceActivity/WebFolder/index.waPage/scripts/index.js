
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem9 = {};	// @menuItem
	var menuItem14 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var menuItem7 = {};	// @menuItem
	var menuItem6 = {};	// @menuItem
	var menuItem8 = {};	// @menuItem
	var documentEvent = {};	// @document
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	menuItem9.click = function menuItem9_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Associations.waComponent");
	};// @lock

	menuItem14.click = function menuItem14_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/UpdPsw.waComponent");
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/UpdPsw.waComponent");
	};// @lock

	menuItem7.click = function menuItem7_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Gest-Eleves.waComponent");
	};// @lock

	menuItem6.click = function menuItem6_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Utilisateurs.waComponent");
	};// @lock

	menuItem8.click = function menuItem8_click (event)// @startlock
	{// @endlock
		$$("cchg").show();
		$$('component1').loadComponent("/Calendrier.waComponent");
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').destroy();
		 } else {
		 	
		 	if (waf.directory.currentUserBelongsTo("Elève")) {
				$$('M_Invite').hide();
				$$('M_Professeur').hide();
				$$('M_Admin').hide();
			}
			if (waf.directory.currentUserBelongsTo("Professeur")) {

				$$('M_Invite').hide();
				$$('M_Eleve').hide();
				$$('M_Admin').hide();
				
			}
			if (waf.directory.currentUserBelongsTo("Invité")) {

				$$('M_Professeur').hide();
				$$('M_Eleve').hide();
				$$('M_Admin').hide();
				
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
	WAF.addListener("menuItem9", "click", menuItem9.click, "WAF");
	WAF.addListener("menuItem14", "click", menuItem14.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem7", "click", menuItem7.click, "WAF");
	WAF.addListener("menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener("menuItem8", "click", menuItem8.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
