
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Aide';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();

	// @region namespaceDeclaration// @startlock
	var btC = {};	// @buttonImage
	var btB = {};	// @buttonImage
	var btPgm = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	btC.click = function btC_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/ACL.mp4");
	};// @lock

	btB.click = function btB_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/SRM2015.mp4");
	};// @lock

	btPgm.click = function btPgm_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/SRM2014.mp4");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btC", "click", btC.click, "WAF");
	WAF.addListener(this.id + "_btB", "click", btB.click, "WAF");
	WAF.addListener(this.id + "_btPgm", "click", btPgm.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
