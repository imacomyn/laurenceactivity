
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Cal';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	var vUser;
	$$("cchg").hide();
	vUser = WAF.directory.currentUser().userName;
	//alert(vUser);
	sources.component1_annees_Scolaires.query("ID > 0 Order by Annee_Scolaire desc");
	sources.component1_eleves.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
			var vAssoc;
			elem = sources.component1_eleves;
			if (elem.length > 0) {
				$$("component1_cbxTout").hide();
				$$("component1_cRole").setValue("Elève");
			} else {
				$$("component1_cbxTout").show();
				$$("component1_cRole").setValue("Autre");
			};		
	}, params:[vUser] });
	
	
	function ShowMonth(vMois) {
		
		var vCal, vMois, split_date;
		$$("cchg").show();
		
		for (var i = 0; i < 37; i++) {
			v = "component1_j"+i;
			$$(v).hide();
			v = "component1_i"+i;
			$$(v).hide();
			v = "component1_m"+i;
			$$(v).show();
			$$(v).setBackgroundColor("#E5E5E5");
			$$(v).setValue("-");
			v = "component1_am"+i;
			$$(v).show();
			$$(v).setBackgroundColor("#E5E5E5");
			$$(v).setValue("-");
			
		}
		$$("component1_cExt").hide();
		
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", { onSuccess: function(event) {
			var vdDeb, elem, ind, ibx, nb, vQuand, vBox, dbcl, jdbcl, vAnScol, split_date, dbcl, eps, vUserID, vNow, vToday, vQCours, vQStage;
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
				
				if ($$("component1_cbxTout").getValue()) {
					vQCours = "dCours = :1";
					vQStage = "(dDeb = :1 or dFin = :1)";
				} else {
					vQCours = "dCours = :1 and Annee_Scolaire.ID = :2";
					vQStage = "(dDeb = :1 or dFin = :1) and Annee_Scolaire.ID = :2";
				}
		
				for (var j = ind; j < nb; j++) {
					vBox = "component1_j"+ibx;
					if (ibx === 35) {
						$$("component1_cExt").show();
						$$("component1_m36").hide();
						$$("component1_am36").hide();
					}
					if (ibx === 36) {
						$$("component1_m36").show();
						$$("component1_am36").show();
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
						sources.component1_cours.query(vQCours, { onSuccess: function(event) {
							var vco, vBox, iBox, vAssoc, vCoul;
							iBox = event.userData.boxn;
							vco = sources.component1_cours;
							vAssoc = vco.getAttributeValue("Annee_Scolaire.Association.Sigle");
							vCoul = vco.getAttributeValue("Annee_Scolaire.Association.CoulCode");
							if (vco.length > 0) {
								vco.getElement(0, { onSuccess: function(event)  {
									var elem;
									elem = event.element;
									if (elem.HM) {
										vBox = "component1_m"+iBox;
										$$(vBox).setValue(vAssoc);
										$$(vBox).setBackgroundColor(vCoul);
									}
									if (elem.HAM) {
										vBox = "component1_am"+iBox;
										$$(vBox).setValue(vAssoc);
										$$(vBox).setBackgroundColor(vCoul);
									}
									if (elem.Message.length > 0) {
										vBox = "component1_t"+iBox;
										$$(vBox).setValue(elem.Message);
										vBox = "component1_i"+iBox;
										$$(vBox).show();
									}
								}});
							}
							}, params:[dbcl, vAnScol], userData: {boxn:ibx}});
							
							sources.component1_stages.query(vQStage, { onSuccess: function(event) {
							var vco, vBox, iBox, vAssoc, vCoul;
							iBox = event.userData.boxn;
							vco = sources.component1_stages;
							vAssoc = "STAGE " + vco.getAttributeValue("Annee_Scolaire.Association.Sigle");
							vCoul = "#FFAAFF";
							if (vco.length > 0) {
								vco.getElement(0, { onSuccess: function(event)  {
									var elem;
									elem = event.element;
									if (elem.HM) {
										vBox = "component1_m"+iBox;
										$$(vBox).setValue(vAssoc);
										$$(vBox).setBackgroundColor(vCoul);
									}
									if (elem.HAM) {
										vBox = "component1_am"+iBox;
										$$(vBox).setValue(vAssoc);
										$$(vBox).setBackgroundColor(vCoul);
									}
									if (elem.Description.length > 0) {
										vBox = "component1_t"+iBox;
										$$(vBox).setValue(elem.Description);
										vBox = "component1_i"+iBox;
										$$(vBox).show();
									}
								}});
							}
							}, params:[dbcl, vAnScol], userData: {boxn:ibx}});

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
		$$("cchg").hide();
		
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
	var i36 = {};	// @icon
	var dataGrid1 = {};	// @dataGrid
	var i1 = {};	// @icon
	var i2 = {};	// @icon
	var i3 = {};	// @icon
	var i4 = {};	// @icon
	var i5 = {};	// @icon
	var i6 = {};	// @icon
	var i7 = {};	// @icon
	var i8 = {};	// @icon
	var i9 = {};	// @icon
	var i10 = {};	// @icon
	var i11 = {};	// @icon
	var i12 = {};	// @icon
	var i13 = {};	// @icon
	var i14 = {};	// @icon
	var i15 = {};	// @icon
	var i16 = {};	// @icon
	var i17 = {};	// @icon
	var i18 = {};	// @icon
	var i19 = {};	// @icon
	var i20 = {};	// @icon
	var i21 = {};	// @icon
	var i22 = {};	// @icon
	var i23 = {};	// @icon
	var i24 = {};	// @icon
	var i25 = {};	// @icon
	var i26 = {};	// @icon
	var i27 = {};	// @icon
	var i28 = {};	// @icon
	var i29 = {};	// @icon
	var i30 = {};	// @icon
	var i31 = {};	// @icon
	var i32 = {};	// @icon
	var i33 = {};	// @icon
	var i34 = {};	// @icon
	var i35 = {};	// @icon
	var i0 = {};	// @icon
	var cbxTout = {};	// @checkbox
	var cbAnScol = {};	// @combobox
	var sPerS = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	i36.mouseover = function i36_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t36").getValue());
		$$("component1_tMess").show();
	};// @lock

	i36.mouseout = function i36_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	dataGrid1.onRowDraw = function dataGrid1_onRowDraw (event)// @startlock
	{// @endlock
		var vAssoc;
		elem = sources.component1_Association0;
		vAssoc = elem.ID;
		if (vAssoc !== null) {
			sources.component1_annees_Scolaires.query("Association.ID = :1", vAssoc);
		}
					
	};// @lock

	i1.mouseover = function i1_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t1").getValue());
		$$("component1_tMess").show();
	};// @lock

	i1.mouseout = function i1_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i2.mouseover = function i2_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t2").getValue());
		$$("component1_tMess").show();
	};// @lock

	i2.mouseout = function i2_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i3.mouseover = function i3_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t3").getValue());
		$$("component1_tMess").show();
	};// @lock

	i3.mouseout = function i3_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i4.mouseover = function i4_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t4").getValue());
		$$("component1_tMess").show();
	};// @lock

	i4.mouseout = function i4_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i5.mouseover = function i5_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t5").getValue());
		$$("component1_tMess").show();
	};// @lock

	i5.mouseout = function i5_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i6.mouseover = function i6_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t6").getValue());
		$$("component1_tMess").show();
	};// @lock

	i6.mouseout = function i6_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i7.mouseover = function i7_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t7").getValue());
		$$("component1_tMess").show();
	};// @lock

	i7.mouseout = function i7_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i8.mouseover = function i8_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t8").getValue());
		$$("component1_tMess").show();
	};// @lock

	i8.mouseout = function i8_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i9.mouseover = function i9_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t9").getValue());
		$$("component1_tMess").show();
	};// @lock

	i9.mouseout = function i9_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i10.mouseover = function i10_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t10").getValue());
		$$("component1_tMess").show();
	};// @lock

	i10.mouseout = function i10_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i11.mouseover = function i11_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t11").getValue());
		$$("component1_tMess").show();
	};// @lock

	i11.mouseout = function i11_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i12.mouseover = function i12_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t12").getValue());
		$$("component1_tMess").show();
	};// @lock

	i12.mouseout = function i12_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i13.mouseover = function i13_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t13").getValue());
		$$("component1_tMess").show();
	};// @lock

	i13.mouseout = function i13_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i14.mouseover = function i14_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t14").getValue());
		$$("component1_tMess").show();
	};// @lock

	i14.mouseout = function i14_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i15.mouseover = function i15_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t15").getValue());
		$$("component1_tMess").show();
	};// @lock

	i15.mouseout = function i15_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i16.mouseover = function i16_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t16").getValue());
		$$("component1_tMess").show();
	};// @lock

	i16.mouseout = function i16_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i17.mouseover = function i17_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t17").getValue());
		$$("component1_tMess").show();
	};// @lock

	i17.mouseout = function i17_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i18.mouseover = function i18_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t18").getValue());
		$$("component1_tMess").show();
	};// @lock

	i18.mouseout = function i18_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i19.mouseover = function i19_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t19").getValue());
		$$("component1_tMess").show();
	};// @lock

	i19.mouseout = function i19_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i20.mouseover = function i20_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t20").getValue());
		$$("component1_tMess").show();
	};// @lock

	i20.mouseout = function i20_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i21.mouseover = function i21_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t21").getValue());
		$$("component1_tMess").show();
	};// @lock

	i21.mouseout = function i21_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i22.mouseover = function i22_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t22").getValue());
		$$("component1_tMess").show();
	};// @lock

	i22.mouseout = function i22_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i23.mouseover = function i23_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t23").getValue());
		$$("component1_tMess").show();
	};// @lock

	i23.mouseout = function i23_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i24.mouseover = function i24_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t24").getValue());
		$$("component1_tMess").show();
	};// @lock

	i24.mouseout = function i24_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i25.mouseover = function i25_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t25").getValue());
		$$("component1_tMess").show();
	};// @lock

	i25.mouseout = function i25_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i26.mouseover = function i26_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t26").getValue());
		$$("component1_tMess").show();
	};// @lock

	i26.mouseout = function i26_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i27.mouseover = function i27_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t27").getValue());
		$$("component1_tMess").show();
	};// @lock

	i27.mouseout = function i27_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i28.mouseover = function i28_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t28").getValue());
		$$("component1_tMess").show();
	};// @lock

	i28.mouseout = function i28_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i29.mouseover = function i29_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t29").getValue());
		$$("component1_tMess").show();
	};// @lock

	i29.mouseout = function i29_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i30.mouseover = function i30_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t30").getValue());
		$$("component1_tMess").show();
	};// @lock

	i30.mouseout = function i30_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i31.mouseover = function i31_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t31").getValue());
		$$("component1_tMess").show();
	};// @lock

	i31.mouseout = function i31_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i32.mouseover = function i32_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t32").getValue());
		$$("component1_tMess").show();
	};// @lock

	i32.mouseout = function i32_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i33.mouseover = function i33_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t33").getValue());
		$$("component1_tMess").show();
	};// @lock

	i33.mouseout = function i33_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i34.mouseover = function i34_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t34").getValue());
		$$("component1_tMess").show();
	};// @lock

	i34.mouseout = function i34_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i35.mouseover = function i35_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t35").getValue());
		$$("component1_tMess").show();
	};// @lock

	i35.mouseout = function i35_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i0.mouseout = function i0_mouseout (event)// @startlock
	{// @endlock
		$$("component1_tMess").hide();
	};// @lock

	i0.mouseover = function i0_mouseover (event)// @startlock
	{// @endlock
		$$("component1_tMess").setValue($$("component1_t0").getValue());
		$$("component1_tMess").show();
	};// @lock

	cbxTout.click = function cbxTout_click (event)// @startlock
	{// @endlock
		var vCal, vSld, res;
		vAnScol = $$("component1_cbAnScol").getValue();
		vSld = $$("component1_sPerS").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", vAnScol, vSld);
		res = ShowMonth(vSld);
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vCal, res, vUser;
		
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
	WAF.addListener(this.id + "_i36", "mouseover", i36.mouseover, "WAF");
	WAF.addListener(this.id + "_i36", "mouseout", i36.mouseout, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDraw", dataGrid1.onRowDraw, "WAF");
	WAF.addListener(this.id + "_i1", "mouseover", i1.mouseover, "WAF");
	WAF.addListener(this.id + "_i1", "mouseout", i1.mouseout, "WAF");
	WAF.addListener(this.id + "_i2", "mouseover", i2.mouseover, "WAF");
	WAF.addListener(this.id + "_i2", "mouseout", i2.mouseout, "WAF");
	WAF.addListener(this.id + "_i3", "mouseover", i3.mouseover, "WAF");
	WAF.addListener(this.id + "_i3", "mouseout", i3.mouseout, "WAF");
	WAF.addListener(this.id + "_i4", "mouseover", i4.mouseover, "WAF");
	WAF.addListener(this.id + "_i4", "mouseout", i4.mouseout, "WAF");
	WAF.addListener(this.id + "_i5", "mouseover", i5.mouseover, "WAF");
	WAF.addListener(this.id + "_i5", "mouseout", i5.mouseout, "WAF");
	WAF.addListener(this.id + "_i6", "mouseover", i6.mouseover, "WAF");
	WAF.addListener(this.id + "_i6", "mouseout", i6.mouseout, "WAF");
	WAF.addListener(this.id + "_i7", "mouseover", i7.mouseover, "WAF");
	WAF.addListener(this.id + "_i7", "mouseout", i7.mouseout, "WAF");
	WAF.addListener(this.id + "_i8", "mouseover", i8.mouseover, "WAF");
	WAF.addListener(this.id + "_i8", "mouseout", i8.mouseout, "WAF");
	WAF.addListener(this.id + "_i9", "mouseover", i9.mouseover, "WAF");
	WAF.addListener(this.id + "_i9", "mouseout", i9.mouseout, "WAF");
	WAF.addListener(this.id + "_i10", "mouseover", i10.mouseover, "WAF");
	WAF.addListener(this.id + "_i10", "mouseout", i10.mouseout, "WAF");
	WAF.addListener(this.id + "_i11", "mouseover", i11.mouseover, "WAF");
	WAF.addListener(this.id + "_i11", "mouseout", i11.mouseout, "WAF");
	WAF.addListener(this.id + "_i12", "mouseover", i12.mouseover, "WAF");
	WAF.addListener(this.id + "_i12", "mouseout", i12.mouseout, "WAF");
	WAF.addListener(this.id + "_i13", "mouseover", i13.mouseover, "WAF");
	WAF.addListener(this.id + "_i13", "mouseout", i13.mouseout, "WAF");
	WAF.addListener(this.id + "_i14", "mouseover", i14.mouseover, "WAF");
	WAF.addListener(this.id + "_i14", "mouseout", i14.mouseout, "WAF");
	WAF.addListener(this.id + "_i15", "mouseover", i15.mouseover, "WAF");
	WAF.addListener(this.id + "_i15", "mouseout", i15.mouseout, "WAF");
	WAF.addListener(this.id + "_i16", "mouseover", i16.mouseover, "WAF");
	WAF.addListener(this.id + "_i16", "mouseout", i16.mouseout, "WAF");
	WAF.addListener(this.id + "_i17", "mouseover", i17.mouseover, "WAF");
	WAF.addListener(this.id + "_i17", "mouseout", i17.mouseout, "WAF");
	WAF.addListener(this.id + "_i18", "mouseover", i18.mouseover, "WAF");
	WAF.addListener(this.id + "_i18", "mouseout", i18.mouseout, "WAF");
	WAF.addListener(this.id + "_i19", "mouseover", i19.mouseover, "WAF");
	WAF.addListener(this.id + "_i19", "mouseout", i19.mouseout, "WAF");
	WAF.addListener(this.id + "_i20", "mouseover", i20.mouseover, "WAF");
	WAF.addListener(this.id + "_i20", "mouseout", i20.mouseout, "WAF");
	WAF.addListener(this.id + "_i21", "mouseover", i21.mouseover, "WAF");
	WAF.addListener(this.id + "_i21", "mouseout", i21.mouseout, "WAF");
	WAF.addListener(this.id + "_i22", "mouseover", i22.mouseover, "WAF");
	WAF.addListener(this.id + "_i22", "mouseout", i22.mouseout, "WAF");
	WAF.addListener(this.id + "_i23", "mouseover", i23.mouseover, "WAF");
	WAF.addListener(this.id + "_i23", "mouseout", i23.mouseout, "WAF");
	WAF.addListener(this.id + "_i24", "mouseover", i24.mouseover, "WAF");
	WAF.addListener(this.id + "_i24", "mouseout", i24.mouseout, "WAF");
	WAF.addListener(this.id + "_i25", "mouseover", i25.mouseover, "WAF");
	WAF.addListener(this.id + "_i25", "mouseout", i25.mouseout, "WAF");
	WAF.addListener(this.id + "_i26", "mouseover", i26.mouseover, "WAF");
	WAF.addListener(this.id + "_i26", "mouseout", i26.mouseout, "WAF");
	WAF.addListener(this.id + "_i27", "mouseover", i27.mouseover, "WAF");
	WAF.addListener(this.id + "_i27", "mouseout", i27.mouseout, "WAF");
	WAF.addListener(this.id + "_i28", "mouseover", i28.mouseover, "WAF");
	WAF.addListener(this.id + "_i28", "mouseout", i28.mouseout, "WAF");
	WAF.addListener(this.id + "_i29", "mouseover", i29.mouseover, "WAF");
	WAF.addListener(this.id + "_i29", "mouseout", i29.mouseout, "WAF");
	WAF.addListener(this.id + "_i30", "mouseover", i30.mouseover, "WAF");
	WAF.addListener(this.id + "_i30", "mouseout", i30.mouseout, "WAF");
	WAF.addListener(this.id + "_i31", "mouseover", i31.mouseover, "WAF");
	WAF.addListener(this.id + "_i31", "mouseout", i31.mouseout, "WAF");
	WAF.addListener(this.id + "_i32", "mouseover", i32.mouseover, "WAF");
	WAF.addListener(this.id + "_i32", "mouseout", i32.mouseout, "WAF");
	WAF.addListener(this.id + "_i33", "mouseover", i33.mouseover, "WAF");
	WAF.addListener(this.id + "_i33", "mouseout", i33.mouseout, "WAF");
	WAF.addListener(this.id + "_i34", "mouseover", i34.mouseover, "WAF");
	WAF.addListener(this.id + "_i34", "mouseout", i34.mouseout, "WAF");
	WAF.addListener(this.id + "_i35", "mouseover", i35.mouseover, "WAF");
	WAF.addListener(this.id + "_i35", "mouseout", i35.mouseout, "WAF");
	WAF.addListener(this.id + "_i0", "mouseout", i0.mouseout, "WAF");
	WAF.addListener(this.id + "_i0", "mouseover", i0.mouseover, "WAF");
	WAF.addListener(this.id + "_cbxTout", "click", cbxTout.click, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
