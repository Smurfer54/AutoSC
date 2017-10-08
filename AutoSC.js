// ==/UserScript==
////////////////////////////////////////////////////////////////////////////////
//Main Loader Initialize Function (loads first, load everything else)///////////
////////////////////////////////////////


//Magic Numbers/////////////////////////
var runInterval = 100;      //How often to loop through logic
var startupDelay = 2000;    //How long to wait for everything to load

setTimeout(delayStart, startupDelay);
function delayStart() {
    initializeAuto();
}

////////////////////////////////////////
//Global Main vars /////////////////////
////////////////////////////////////////
////////////////////////////////////////

var autoSettings = {};
var autoVariables = {};

//reset stuff that may not have gotten cleaned up on portal
function mainCleanup() {
    //run once per portal:
}

////////////////////////////////////////
//Main LOGIC Loop///////////////////////
////////////////////////////////////////
////////////////////////////////////////
function mainLoop() {
    mainCleanup();

    //EXECUTE CORE LOGIC
    if (getPageSetting('BuyUpgrades')) buyUpgrades();   //"Buy Upgrades"       (upgrades.js)
    autoGoldenUpgrades();                               //"AutoGoldenUpgrades" (other.js)
}
//GUI Updates happen on this thread, every 1000ms, concurrently
function guiLoop() {
    updateButtons();
}

