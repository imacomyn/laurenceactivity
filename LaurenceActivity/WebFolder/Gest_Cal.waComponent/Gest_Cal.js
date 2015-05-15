
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Cal';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	
	function ShowMonth(vMois) {
		
		var vCal, vMois, split_date;
		
		for (var i = 0; i < 36; i++) {
			v = "component1_j"+i;
			$$(v).hide();
			v = "component1_m"+i;
			$$(v).show();
			$$(v).setBackgroundColor("#E5E5E5");
			v = "component1_am"+i;
			$$(v).show();
			$$(v).setBackgroundColor("#E5E5E5");
			
		}
		$$("component1_cExt").hide();
		
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", { onSuccess: function(event) {
			var vdDeb, elem, ind, ibx, nb, vQuand, vBox, dbcl, jdbcl, vAnScol, split_date, dbcl, eps, vUserID, vNow, vToday;
			elem = sources.component1_calendrier;
			nb = 1+elem.nbj;
			vQuand = elem.dDeb;
			vdDeb = vQuand.getDate() + '/' + (vQuand.getMonth()+1) + '/' +  vQuand.getFullYear();
			vdDeb = addDaysToDate(vdDeb, 0);
			ind = 0;
			switch (elem.JDeb) {
				case 'Lundi':
					ibx = 0;
					break;
				case 'Mardi':
					ibx = 1;
					$$("component1_m0").hide();
					$$("component1_am0").hide();
					break;
				case 'Mercredi':
					ibx = 2;
					$$("component1_m0").hide();
					$$("component1_am0").hide();
					$$("component1_m1").hide();
					$$("component1_am1").hide();
					break;
				case 'Jeudi':
					ibx = 3;
					$$("component1_m0").hide();
					$$("component1_am0").hide();
					$$("component1_m1").hide();
					$$("component1_am1").hide();
					$$("component1_m2").hide();
					$$("component1_am2").hide();
					break;
				case 'Vendredi':
					ibx = 4;
					$$("component1_m0").hide();
					$$("component1_am0").hide();
					$$("component1_m1").hide();
					$$("component1_am1").hide();
					$$("component1_m2").hide();
					$$("component1_am2").hide();
					$$("component1_m3").hide();
					$$("component1_am3").hide();
					break;
				case 'Samedi':
					ibx = 5;
					$$("component1_m0").hide();
					$$("component1_am0").hide();
					$$("component1_m1").hide();
					$$("component1_am1").hide();
					$$("component1_m2").hide();
					$$("component1_am2").hide();
					$$("component1_m3").hide();
					$$("component1_am3").hide();
					$$("component1_m4").hide();
					$$("component1_am4").hide();
					break;
				case 'Dimanche':
					ibx = 6;
					$$("component1_m0").hide();
					$$("component1_am0").hide();
					$$("component1_m1").hide();
					$$("component1_am1").hide();
					$$("component1_m2").hide();
					$$("component1_am2").hide();
					$$("component1_m3").hide();
					$$("component1_am3").hide();
					$$("component1_m4").hide();
					$$("component1_am4").hide();
					$$("component1_m5").hide();
					$$("component1_am5").hide();
					break;
						}
				vAnScol = $$("component1_cbAnScol").getValue();
				vNow = new Date();
				vToday = vNow.getDate() + '/' + (vNow.getMonth()+1) + '/' +  vNow.getFullYear();
				vToday = addDaysToDate(vToday,0);
		
				for (var j = ind; j < nb; j++) {
					vBox = "component1_j"+ibx;
					if (ibx === 35) {
						$$("component1_cExt").show();
					}
					split_date = vdDeb.split('/');
					dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
					jdbcl = dbcl.getDay();
					//if (jdbcl !== 0 && jdbcl !== 6) {
						$$(vBox).setValue(split_date[0]);
						$$(vBox).show();
						//alert('Today '+vToday+' - Boucle '+vdDeb);
						if (vdDeb === vToday) { 
							$$(vBox).setBackgroundColor("#F5A9A9");
						} else {
							$$(vBox).setBackgroundColor("#AAD4FF");
						}
						ibx = ibx + 1;
					//}
					vdDeb = addDaysToDate(vdDeb, 1);
				}
				for (var j = ibx; j < 35; j++) {
					v = "component1_j"+j;
					$$(v).hide();
					v = "component1_m"+j;
					$$(v).hide();
					v = "component1_am"+j;
					$$(v).hide();
				}
		}, params:[vAnScol, vMois] });
		
		return('OK');
	}
	
	function SemNum(MaDate) {
	
		var annee = parseInt(MaDate.substr(6,4),10),
			mm = parseInt(MaDate.substr(3,2),10)-1,
			NumSemaine = 0,
			ListeMois = [31,28,31,30,31,30,31,31,30,31,30,31],
			TotalJour=0,
			JourDebutAn, DebutAn,
			cpt, 
			jj = parseInt(MaDate.substr(0,2),10);
			
		if (annee %4 === 0 && (annee %100 !== 0 || annee %400 === 0)) {ListeMois[1]=29;}
		for (cpt=0; cpt<mm; cpt++){TotalJour+=ListeMois[cpt];}
		TotalJour+=jj;
		DebutAn = new Date(annee,0,1);
		JourDebutAn=DebutAn.getDay();
		if(JourDebutAn===0){JourDebutAn=7;}
		TotalJour-=8-JourDebutAn;
		NumSemaine = 1;
		NumSemaine+=Math.floor(TotalJour/7);
		if(TotalJour%7!==0){NumSemaine+=1;}
	
		return(NumSemaine);
	}
	
	function addDaysToDate(old_date, delta_days) {
		var split_date, new_date, new_day, new_month, new_year, new_date_text;
		split_date = old_date.split('/');
		new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1 + delta_days);
		new_day = new_date.getDate();
		new_day = ((new_day < 10) ? '0' : '') + new_day; 
		new_month = new_date.getMonth() + 1;
		new_month = ((new_month < 10) ? '0' : '') + new_month; 
		new_year = new_date.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		new_date_text = new_day + '/' + new_month + '/' + new_year;
		
		return new_date_text;
	}
	
	function convTime (Horaire) {
		
		var vInt, vDec, vPart1, vPart2;
		
		vInt = parseInt(Horaire/4,10)+':';
		if (vInt.length ===2) {
			vInt = '0'+vInt;
		}
		vDec = 15*(Horaire-4*parseInt(Horaire/4,10)) + ' ';
		if (vDec.length === 2) {
			vDec = '0'+vDec;
		}
		return (vInt+vDec);
		
	}

	// @region namespaceDeclaration// @startlock
	var cbAnScol = {};	// @combobox
	var sPerS = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vCal, res;
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", vAnScol, 1);
		$$("component1_sPerS").setValue(1);
		res = ShowMonth(1);
	};// @lock

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
		var res = ShowMonth(event.data.value);
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vCal;
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", vAnScol, event.data.value);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
