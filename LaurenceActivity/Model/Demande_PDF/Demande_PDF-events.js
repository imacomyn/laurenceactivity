﻿model.Demande_PDF.events.onInit = function() {	this.UID_Creation = currentUser().fullName;	this.Date_Creation = new Date();	this.Etat = "Demandé";};model.Demande_PDF.events.onSave = function() {	this.UID_MAJ = currentUser().fullName;	this.Derniere_MAJ = new Date();};