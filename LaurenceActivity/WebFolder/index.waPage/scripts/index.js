
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var btMesPDF = {};	// @buttonImage
	var btNews = {};	// @buttonImage
	var btMesInfos = {};	// @buttonImage
	var btInStage = {};	// @buttonImage
	var btStage = {};	// @buttonImage
	var btCours = {};	// @buttonImage
	var btAssoc = {};	// @buttonImage
	var btAnScol = {};	// @buttonImage
	var btInscrits = {};	// @buttonImage
	var btCalendar = {};	// @buttonImage
	var btaPropos = {};	// @buttonImage
	var btPswd = {};	// @buttonImage
	var btDemPDF = {};	// @buttonImage
	var btPDF = {};	// @buttonImage
	var btCal = {};	// @buttonImage
	var btActu = {};	// @buttonImage
	var btStudent = {};	// @buttonImage
	var btUser = {};	// @buttonImage
	var documentEvent = {};	// @document
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	btMesPDF.mouseover = function btMesPDF_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Mes PDF)  Voir la liste des cours PDF auxquels je suis abonnée. Visualiser et imprimer le cours. Effectuer une demande d'abonnement à un cours.");
		$$("cHelp").show();
	};// @lock

	btMesPDF.mouseout = function btMesPDF_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btMesPDF.click = function btMesPDF_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Mes_Cours.waComponent");
	};// @lock

	btNews.mouseover = function btNews_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Mes Actualités) Consulter les dernières actualités de cartonnage, expositions, évènements ... etc.");
		$$("cHelp").show();
	};// @lock

	btNews.mouseout = function btNews_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btNews.click = function btNews_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Mes_Actualites.waComponent");
	};// @lock

	btMesInfos.mouseover = function btMesInfos_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Fiche Information)  Gérer ma fiche personnelle d'informations.");
		$$("cHelp").show();
	};// @lock

	btMesInfos.mouseout = function btMesInfos_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btInStage.click = function btInStage_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_InStages.waComponent");
	};// @lock

	btInStage.mouseover = function btInStage_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Inscriptions Stage) Inscrire des élèves aux stages existants. Annuler une inscription.");
		$$("cHelp").show();
	};// @lock

	btInStage.mouseout = function btInStage_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btStage.click = function btStage_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Stages.waComponent");
	};// @lock

	btStage.mouseover = function btStage_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Stages) Créer de nouveaux stages pour une année scolaire. Gérer les dates de stages et passer de l'information aux élèves.");
		$$("cHelp").show();
	};// @lock

	btStage.mouseout = function btStage_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btCours.click = function btCours_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Cours.waComponent");
	};// @lock

	btCours.mouseover = function btCours_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Cours) Créer de nouveaux cours pour une année scolaire. Gérer les horaires et enregistrer des consignes pour les élèves.");
		$$("cHelp").show();
	};// @lock

	btCours.mouseout = function btCours_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btAssoc.click = function btAssoc_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Associations.waComponent");
	};// @lock

	btAssoc.mouseover = function btAssoc_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Associations) Créer de nouvelles associations et gérer leurs propriétés.");
		$$("cHelp").show();
	};// @lock

	btAssoc.mouseout = function btAssoc_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btAnScol.click = function btAnScol_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_AnScol.waComponent");
	};// @lock

	btAnScol.mouseover = function btAnScol_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Années Scolaires) Ouvrir une nouvelle année scolaire pour chaque association et gérer les propriétés comme les cotisations trimestrielles.");
		$$("cHelp").show();
	};// @lock

	btAnScol.mouseout = function btAnScol_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btInscrits.click = function btInscrits_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Inscriptions.waComponent");
	};// @lock

	btInscrits.mouseover = function btInscrits_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Inscriptions) Inscrire les élèves sur une nouvelle année scolaire.");
		$$("cHelp").show();
	};// @lock

	btInscrits.mouseout = function btInscrits_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btCalendar.click = function btCalendar_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Calendrier.waComponent");
	};// @lock

	btCalendar.mouseover = function btCalendar_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Calendriers) Définir les différents mois d'une année scolaire et leurs propriétés.");
		$$("cHelp").show();
	};// @lock

	btCalendar.mouseout = function btCalendar_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btaPropos.click = function btaPropos_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("intro").hide();
		$$('component1').loadComponent("/Apropos.waComponent");
	};// @lock

	btaPropos.mouseover = function btaPropos_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(A propos) Informations sur le développement de l'application ALT-C.");
		$$("cHelp").show();
	};// @lock

	btaPropos.mouseout = function btaPropos_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btPswd.click = function btPswd_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/UpdPsw.waComponent");
	};// @lock

	btPswd.mouseover = function btPswd_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Mot de Passe) Modifier son mot de passe.");
		$$("cHelp").show();
	};// @lock

	btPswd.mouseout = function btPswd_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btDemPDF.click = function btDemPDF_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Demande_PDF.waComponent");
	};// @lock

	btDemPDF.mouseover = function btDemPDF_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Demandes Cours PDF) Voir les demandes de mise à disposition de cours PDF formulées par les élèves.");
		$$("cHelp").show();
	};// @lock

	btDemPDF.mouseout = function btDemPDF_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btPDF.click = function btPDF_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_PDF.waComponent");
	};// @lock

	btPDF.mouseover = function btPDF_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Cours PDF) Gérer la liste des cours PDF disponibles et les abonnements des élèves à ce cours.");
		$$("cHelp").show();
	};// @lock

	btPDF.mouseout = function btPDF_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btCal.click = function btCal_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Cal.waComponent");
	};// @lock

	btCal.mouseover = function btCal_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Planning) Visualiser le planning mensuel des cours et des stages d'une année scolaire.");
		$$("cHelp").show();
	};// @lock

	btCal.mouseout = function btCal_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btActu.click = function btActu_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Actualites.waComponent");
	};// @lock

	btActu.mouseover = function btActu_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Actualités) Créer des actualités/évènements pour une année scolaire comme l'annonce d'une exposition.");
		$$("cHelp").show();
	};// @lock

	btActu.mouseout = function btActu_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btStudent.click = function btStudent_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest-Eleves.waComponent");
	};// @lock

	btStudent.mouseout = function btStudent_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btStudent.mouseover = function btStudent_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Elèves) Gérer les informations relatives à mes élèves.");
		$$("cHelp").show();
	};// @lock

	btUser.mouseout = function btUser_mouseout (event)// @startlock
	{// @endlock
		$$("cHelp").hide();
	};// @lock

	btUser.mouseover = function btUser_mouseover (event)// @startlock
	{// @endlock
		$$("cHelp").setValue("(Utilisateurs) Créer de nouveaux utilisateurs dans l'application et gérer leurs propriétés.");
		$$("cHelp").show();
	};// @lock

	btUser.click = function btUser_click (event)// @startlock
	{// @endlock
		$$("intro").hide();
		$$("cHelp").hide();
		$$("cchg").show();
		$$('component1').loadComponent("/Gest_Utilisateurs.waComponent");
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').destroy();
		 } else {
		 	
		 	if (waf.directory.currentUserBelongsTo("Elève")) {
				$$('btNews').enable();
				$$('btMesPDF').enable();
				$$('btMesInfos').enable();
				$$('btCours').disable();
				$$('btStage').disable();
				$$('btInStage').disable();
				$$('btActu').disable();
				$$('btCal').enable();
				$$('btPDF').disable();
				$$('btDemPDF').disable();
				$$('btUser').disable();
				$$('btStudent').disable();
				$$('btAssoc').disable();
				$$('btAnScol').disable();
				$$('btInscrits').disable();
				$$('btCalendar').disable();
				$$('btPswd').enable();
			}
			if (waf.directory.currentUserBelongsTo("Professeur")) {

				$$('btNews').disbale();
				$$('btMesPDF').disable();
				$$('btMesInfos').disable();
				$$('btCours').enable();
				$$('btStage').enable();
				$$('btInStage').enable();
				$$('btActu').enable();
				$$('btCal').enable();
				$$('btPDF').enable();
				$$('btDemPDF').enable();
				$$('btUser').disable();
				$$('btStudent').enable();
				$$('btAssoc').enable();
				$$('btAnScol').enable();
				$$('btInscrits').enable();
				$$('btCalendar').disable();
				$$('btPswd').enable();
				
			}
			if (waf.directory.currentUserBelongsTo("Invité")) {

				$$('btNews').disable();
				$$('btMesPDF').disable();
				$$('btMesInfos').disable();
				$$('btCours').disable();
				$$('btStage').disable();
				$$('btInStage').disable();
				$$('btActu').disable();
				$$('btCal').disable();
				$$('btPDF').disable();
				$$('btDemPDF').disable();
				$$('btUser').disable();
				$$('btStudent').disable();
				$$('btAssoc').disable();
				$$('btAnScol').disable();
				$$('btInscrits').disable();
				$$('btCalendar').disable();
				$$('btPswd').disable();
				
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
	WAF.addListener("btMesPDF", "mouseover", btMesPDF.mouseover, "WAF");
	WAF.addListener("btMesPDF", "mouseout", btMesPDF.mouseout, "WAF");
	WAF.addListener("btMesPDF", "click", btMesPDF.click, "WAF");
	WAF.addListener("btNews", "mouseover", btNews.mouseover, "WAF");
	WAF.addListener("btNews", "mouseout", btNews.mouseout, "WAF");
	WAF.addListener("btNews", "click", btNews.click, "WAF");
	WAF.addListener("btMesInfos", "mouseover", btMesInfos.mouseover, "WAF");
	WAF.addListener("btMesInfos", "mouseout", btMesInfos.mouseout, "WAF");
	WAF.addListener("btDemPDF", "click", btDemPDF.click, "WAF");
	WAF.addListener("btPDF", "click", btPDF.click, "WAF");
	WAF.addListener("btCal", "click", btCal.click, "WAF");
	WAF.addListener("btActu", "click", btActu.click, "WAF");
	WAF.addListener("btInStage", "click", btInStage.click, "WAF");
	WAF.addListener("btStage", "click", btStage.click, "WAF");
	WAF.addListener("btCours", "click", btCours.click, "WAF");
	WAF.addListener("btPswd", "click", btPswd.click, "WAF");
	WAF.addListener("btaPropos", "click", btaPropos.click, "WAF");
	WAF.addListener("btInStage", "mouseover", btInStage.mouseover, "WAF");
	WAF.addListener("btInStage", "mouseout", btInStage.mouseout, "WAF");
	WAF.addListener("btStage", "mouseover", btStage.mouseover, "WAF");
	WAF.addListener("btStage", "mouseout", btStage.mouseout, "WAF");
	WAF.addListener("btCours", "mouseover", btCours.mouseover, "WAF");
	WAF.addListener("btCours", "mouseout", btCours.mouseout, "WAF");
	WAF.addListener("btCalendar", "click", btCalendar.click, "WAF");
	WAF.addListener("btInscrits", "click", btInscrits.click, "WAF");
	WAF.addListener("btAnScol", "click", btAnScol.click, "WAF");
	WAF.addListener("btAssoc", "click", btAssoc.click, "WAF");
	WAF.addListener("btStudent", "click", btStudent.click, "WAF");
	WAF.addListener("btAssoc", "mouseover", btAssoc.mouseover, "WAF");
	WAF.addListener("btAssoc", "mouseout", btAssoc.mouseout, "WAF");
	WAF.addListener("btAnScol", "mouseover", btAnScol.mouseover, "WAF");
	WAF.addListener("btAnScol", "mouseout", btAnScol.mouseout, "WAF");
	WAF.addListener("btInscrits", "mouseover", btInscrits.mouseover, "WAF");
	WAF.addListener("btInscrits", "mouseout", btInscrits.mouseout, "WAF");
	WAF.addListener("btCalendar", "mouseover", btCalendar.mouseover, "WAF");
	WAF.addListener("btCalendar", "mouseout", btCalendar.mouseout, "WAF");
	WAF.addListener("btaPropos", "mouseover", btaPropos.mouseover, "WAF");
	WAF.addListener("btaPropos", "mouseout", btaPropos.mouseout, "WAF");
	WAF.addListener("btPswd", "mouseover", btPswd.mouseover, "WAF");
	WAF.addListener("btPswd", "mouseout", btPswd.mouseout, "WAF");
	WAF.addListener("btDemPDF", "mouseover", btDemPDF.mouseover, "WAF");
	WAF.addListener("btDemPDF", "mouseout", btDemPDF.mouseout, "WAF");
	WAF.addListener("btPDF", "mouseover", btPDF.mouseover, "WAF");
	WAF.addListener("btPDF", "mouseout", btPDF.mouseout, "WAF");
	WAF.addListener("btCal", "mouseover", btCal.mouseover, "WAF");
	WAF.addListener("btCal", "mouseout", btCal.mouseout, "WAF");
	WAF.addListener("btActu", "mouseover", btActu.mouseover, "WAF");
	WAF.addListener("btActu", "mouseout", btActu.mouseout, "WAF");
	WAF.addListener("btStudent", "mouseout", btStudent.mouseout, "WAF");
	WAF.addListener("btStudent", "mouseover", btStudent.mouseover, "WAF");
	WAF.addListener("btUser", "mouseout", btUser.mouseout, "WAF");
	WAF.addListener("btUser", "mouseover", btUser.mouseover, "WAF");
	WAF.addListener("btUser", "click", btUser.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
