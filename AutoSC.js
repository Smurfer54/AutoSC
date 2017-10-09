// ==/UserScript==

//Magic Numbers/////////////////////////
var runInterval = 100;      //How often to loop through logic
var UraniumT = 60;
var LavaT = 60;
var OilT = 60;
var MetalT = 10;
var GemT = 10;
var CharcoalT = 30;
var WoodT = 20;
var SiliconT = 20;
var LunariteT = 10;
var MethaneT = 60;
var TitaniumT = 20;
var GoldT = 20;
var SilverT = 60;
var HydrogenT = 60;
var HeliumT = 60;
var IceT = 20;
var PlasmaT = 60;
var T1 = 100;
var T2=1;
var T21=1;
var T22=1;
var T31=1;
var T32=1;
var T41=1;
var T42=1;
var T51=1;
var T52=1;
////////////////////////////////////////
//Main LOGIC Loop///////////////////////
////////////////////////////////////////

function delayStartAgain(){
    setInterval(mainLoop, runInterval);
 }


function mainLoop() {    
    Storage();
    BuyEnergy();
    BuyT1();
    BuyScience();
    BuyT2();
    BuyT3();
    BuyT4();
    BuyT5();
    if (ring = 0)   BuyRing();
    BuySwarm();
    BuySphere();
}

function Storage() {
    upgradeMetalStorage();
    upgradeLunariteStorage();
    upgradeUraniumStorage();
    upgradeLavaStorage();
    upgradeOilStorage();
    upgradeWoodStorage();
    upgradeGemStorage();
    upgradeSiliconStorage();
    upgradeCharcoalStorage();
    upgradeTitaniumStorage();
    upgradeMethaneStorage();
    upgradeGoldStorage();
    upgradeSilverStorage();
    upgradeHydrogenStorage();
    upgradeHeliumStorage();
    upgradeIceStorage();
    upgradeMeteoriteStorage();
    if (getMaxPlasma()*.9 > plasma) convertPlasma('meteorite');
    upgradeMeteoriteStorage();
}

function BuyT1() {
    
    if (metalps > 100) T1 = 100;
  
    if  (miner < T1) {
        while ((minerMetalCost / metalps + minerWoodCost / woodps ) <= MetalT ) {
            getMiner();
        }
    }
    if  (woodcutter < T1) {
        while ((woodcutterMetalCost / metalps + woodcutterWoodCost / woodps ) <= WoodT ) {
            getWoodcutter();
        }
    }
    if  (gemMiner < T1) {
        while ((gemMinerMetalCost / metalps + gemMinerGemCost / gemps ) <= GemT ) {
            getGemMiner();
        }
    }
    if  (woodburner < T1) {
        while ((woodburnerMetalCost / metalps + woodburnerWoodCost / woodps ) <= CharcoalT ) {
            getWoodburner();
        }
    }
    if  (pump < T1) {
        while ((pumpMetalCost / metalps + pumpGemCost / gemps ) <= OilT ) {
            getPump();
        }
    }
    if  (blowtorch < T1) {
        while ((blowtorchLunariteCost / lunariteps + blowtorchTitaniumCost / titaniumps ) <= SiliconT ) {
            getBlowtorch();
        }
    }
    if  (moonWorker < T1) {
        while ((moonWorkerGemCost / gemps ) <= LunariteT ) {
            getMoonWorker();
        }
    }
    if  (vacuum < T1) {
        while ((vacuumLunariteCost / lunariteps + vacuumGemCost / gemps ) <= MethaneT ) {
            getVacuum();
        }
    }    
    if  (blowtorch < T1) {
        while ((blowtorchLunariteCost / lunariteps + blowtorchTitaniumCost / titaniumps ) <= SiliconT ) {
            getBlowtorch();
        }
    }    
    if  (explorer < T1) {
        while ((explorerGemCost / gemps ) <= TitaniumT ) {
            getExplorer();
        }
    }
    if  (droid < T1) {
        while ((droidLunariteCost / lunariteps + droidMethaneCost / methaneps ) <= GoldT ) {
            getDroid();
        }
    }    
    if  (scout < T1) {
        while ((scoutLunariteCost / lunariteps + scoutTitaniumCost / titaniumps ) <= SilverT ) {
            getScout();
        }
    }    
    if  (collector < T1) {
        while ((collectorLunariteCost / lunariteps + collectorTitaniumCost / titaniumps ) <= HydrogenT ) {
            getCollector();
        }
    }    
    if  (drone < T1) {
        while ((droneLunariteCost / lunariteps + droneSiliconCost / siliconps ) <= HeliumT ) {
            getDrone();
        }
    }    
    if  (icePick < T1) {
        while ((icePickLunariteCost / lunariteps + icePickGemCost / gemps ) <= IceT ) {
            getIcePick();
        }
    }   
    if  (grinder < T1) {
        while ((grinderLunariteCost / lunariteps + grinderGoldCost / goldps + grinderTitaniumCost / titaniumps ) <= UraniumT ) {
            getGrinder();
        }
    } 
    if  (crucible < T1) {
        while ((crucibleLunariteCost / lunariteps + crucibleGemCost / gemps ) <= LavaT ) {
            getCrucible();
        }
    } 
    if  (heater < T1/2) {
        while ((heaterLunariteCost / lunariteps + heaterSiliconCost / siliconps +heaterGemCost / gemps) <= PlasmaT ) {
            getHeater();
        }
    } 
    if  (printer < T1/2) {
        while ((printerLunariteCost / lunariteps + printerSiliconCost / siliconps ) <= PlasmaT ) {
            getPrinter();
        }
    } 
}

function BuyT2(){
    
    if (metalps > 10000) T2 = 100;
    if (metalps > 100000) T21 = 100;
    if (metalps > 1000000) T22 = 100;
  
    if  (heavyDrill < T2) {
        while ((heavyDrillMetalCost / metalps + heavyDrillGemCost / gemps + heavyDrillOilCost / oilps ) <= MetalT ) {
            getHeavyDrill();
        }
    }
    if  (laserCutter < T2) {
        while ((laserCutterMetalCost / metalps + laserCutterGemCost / gemps + laserCutterOilCost / oilps ) <= WoodT ) {
            getLaserCutter();
        }
    }
    if  (advancedDrill < T2) {
        while ((advancedDrillMetalCost / metalps + advancedDrillGemCost / gemps + advancedDrillOilCost / oilps ) <= GemT ) {
            getAdvancedDrill();
        }
    }
    if  (furnace < T21) {
        while ((woodburnerMetalCost / metalps + woodburnerWoodCost / woodps ) <= CharcoalT ) {
            getWoodburner();
        }
    }
    if  (pumpjack < T21) {
        while ((pumpjackMetalCost / metalps + pumpjackGemCost / gemps + pumpjackOilCost / oilps ) <= OilT ) {
            getPumpjack();
        }
    }
    if  (blowtorch < T1) {
        while ((blowtorchLunariteCost / lunariteps + blowtorchTitaniumCost / titaniumps ) <= SiliconT ) {
            getBlowtorch();
        }
    }
    if  (moonWorker < T1) {
        while ((moonWorkerGemCost / gemps ) <= LunariteT ) {
            getMoonWorker();
        }
    }
    if  (vacuum < T1) {
        while ((vacuumLunariteCost / lunariteps + vacuumGemCost / gemps ) <= MethaneT ) {
            getVacuum();
        }
    }    
    if  (blowtorch < T1) {
        while ((blowtorchLunariteCost / lunariteps + blowtorchTitaniumCost / titaniumps ) <= SiliconT ) {
            getBlowtorch();
        }
    }    
    if  (explorer < T1) {
        while ((explorerGemCost / gemps ) <= TitaniumT ) {
            getExplorer();
        }
    }
    if  (droid < T1) {
        while ((droidLunariteCost / lunariteps + droidMethaneCost / methaneps ) <= GoldT ) {
            getDroid();
        }
    }    
    if  (scout < T1) {
        while ((scoutLunariteCost / lunariteps + scoutTitaniumCost / titaniumps ) <= SilverT ) {
            getScout();
        }
    }    
    if  (collector < T1) {
        while ((collectorLunariteCost / lunariteps + collectorTitaniumCost / titaniumps ) <= HydrogenT ) {
            getCollector();
        }
    }    
    if  (drone < T1) {
        while ((droneLunariteCost / lunariteps + droneSiliconCost / siliconps ) <= HeliumT ) {
            getDrone();
        }
    }    
    if  (icePick < T1) {
        while ((icePickLunariteCost / lunariteps + icePickGemCost / gemps ) <= IceT ) {
            getIcePick();
        }
    } 
    if  (heater < T1/2) {
        while ((heaterLunariteCost / lunariteps + heaterSiliconCost / siliconps +heaterGemCost / gemps) <= PlasmaT ) {
            getHeater();
        }
    } 
    if  (printer < T1/2) {
        while ((printerLunariteCost / lunariteps + printerSiliconCost / siliconps ) <= PlasmaT ) {
            getPrinter();
        }
    } 
    
    
}

function BuyEnergy() {
    if  (charcoalEngine < T1) {
        while ((charcoalEngineMetalCost / metalps + charcoalEngineGemCost / gemps ) <= T1 ) {
            getCharcoalEngine();
        }
    } 
    if  (solarPanel < T1) {
        while ((solarPanelMetalCost / metalps + solarPanelGemCost / gemps ) <= T1 ) {
            getSolarPanel();
        }
    } 
    if  (methaneStation < T1) {
        while ((methaneStationLunariteCost / lunariteps + methaneStationTitaniumCost / titaniumps ) <= T1 ) {
            getMethaneStation();
        }
    } 
    if  (nuclearStation < T1) {
        while ((nuclearStationLunariteCost / lunariteps + nuclearStationTitaniumCost / titaniumps ) <= T1 ) {
            getNuclearStation();
        }
    } 
    if  (magmatic < T1) {
        while ((magmaticLunariteCost / lunariteps + magmaticSilverCost / silverps + magmaticGemCost / gemps ) <= T1 ) {
            getMagmatic();
        }
    }     
    if  (fusionReactor < T1) {
        while ((fusionReactorLunariteCost / lunariteps + fusionReactorTitaniumCost / titaniumps + fusionReactorSiliconCost / siliconps ) <= T1 ) {
            getFusionReactor();
        }
    }     
}    
   
