/*  @preserve
*	Created at 10 July 2018 by PlanetCloud
*	Last modified at 02 November 2018 by PlanetCloud
*	DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
document.addEventListener("DOMContentLoaded", function() {
    if ("undefined" !== typeof b) {
        var a = document.getElementById("lnkPoweredByCpanel"),
            d = document.getElementById("txtCpanelVersion"),
            c = (new Date).getFullYear();
        b.company_started = Number(b.company_started);
        a.href = b.prm_site;
        a.target = "_blank";
        a.title = b.company_name;
        a.innerHTML = '<img id="imgPoweredByCpanel" src="/panel/pl-res/powered_by_cpanel.png" alt="cPanel, Inc." style="display:none;"><img id="imgPoweredByCpanel" src="' + b.company_logo + '" alt="' + b.company_name +
            '" style="display:inline-block; z-index:2147483647; visibility:visible;">';
        d.innerHTML = b.company_started < c ? "\u00a9 " + b.company_started + "-" + c + " " + b.company_name + "." : "\u00a9 " + c + " " + b.company_name + "."
    }
});