/* William and Josh made this game. (other copywrite stuff would go here I guess) 
property of William and Josh. copywrite 2015. if you see this you are welcome to use codes if you want just dont outright steal ideas and profit off them.
*/

/*To Do: 
Prestige!   (multi tiers in the future!)
Science! (added but needs something to do with it)
Better names and descriptions!
Slightly better balancing!
More achievements!
Make achievements pop up and stuff! (Might be Josh's job)
More numbers for prettification!		 (Will always want more numbers until the game breaks from being too big. then a workaround to said breaking will be needed.)
More buildings!
Saving and Loading! (more or less done)
Import and Export!   (Done i think!)
Show how much each building gives. (per building? total? base?)

make gambling not exploitable (ie saves right after gamble and disables import for a few minutes.)
make daily reward counters pretty!

ADD POPUPS TO LET YOU KNOW HOW MUCH STUFF YOU HAVE
ie. if you stacked each of your gold pieces on top of one another they would break out of the stratosphere or some shit.
*/

/*BUGS
Not starting with gold  (decently worked around)
^^^ saving and autoloading will need altered with each update. release version will only need 1 but after that if new variables are introduced
they will need a bit of code to make sure they dont get messed up. may try to fix this altogether in the future but a workaround should be fine for now
If daily reward is active when getting offline it stays active until you get back online. might just not worry about it for now
*/

function hardReset()				//pretty sure it works now. used to set all values back to original values
{
	gold = 10;							
	population = 0;
	caves = 0;
	cavesPopSec = .1;
	caveBaseCost = 10;
	caveCost = 10;
	dirtHuts = 0;
	dirtHutPopSec = 2;
	dirtHutBaseCost = 1000;
	dirtHutCost = 1000;
	stickHuts = 0;
	stickHutPopSec = 15;
	stickHutBaseCost = 100000;
	stickHutCost = 100000;
	sodHouses = 0;
	sodHousePopSec = 100;
	sodHouseBaseCost = 10000000;
	sodHouseCost = 10000000;
	goldPerPop = .1;
	allTimeGold = 10;
	goldPerSec = 0;
	popPerSec = 0;
	achieve1 = false;
	upgradeACost = 100;
	upgradeBCost = 10000;
	upgradeCCost = 1000000;
	achieve2 = false;
	achieve3 = false;
	upgrade1 = false;
	upgrade2 = false;
	upgrade3 = false;
	amountToBuy = 1;
	localStorage = [];						
	timer = 0;
	dailyRewardActive = false;
	dayActivated = 0;
	currentTime = 0;
	timeLeft = 0;
	science = 0;
	goldToScience = .5;
	sciencePerSec = 0;
	allTimeScience = 0;
	transcendentBeings = 0;
	treehouses = 0;
	treehousePopSec = 500;
	treehouseCost = 1000000000;
	farms = 0;
	farmCost = 100000000000;
	farmPopSec = 1500;
	stoneBlockHouses = 0;
	stoneBlockHousePopSec = 25000;
	stoneBlockHouseCost = 10000000000000000;
	blacksmiths = 0;
	blacksmithPopSec = 50000;
	blacksmithCost = 100000000000000000;
	transcendentKnights = 0;



	buyMultiple(1);																													//this and below used to reset different numbers back to original values
	prettyUpACost = prettify(upgradeACost,0);
	document.getElementById("upgradeACost").innerHTML = prettyUpACost;
	prettyUpBCost = prettify(upgradeBCost,0);
	document.getElementById("upgradeBCost").innerHTML = prettyUpBCost;
	prettyUpCCost = prettify(upgradeCCost,0);
	document.getElementById("upgradeCCost").innerHTML = prettyUpCCost;
	document.getElementById("caves").innerHTML = caves;
	document.getElementById("dirtHuts").innerHTML = dirtHuts;
	document.getElementById("stickHuts").innerHTML = stickHuts;
	document.getElementById("sodHouses").innerHTML = sodHouses;
	document.getElementById("treehouses").innerHTML = treehouses;
	document.getElementById("farms").innerHTML = farms;
	document.getElementById("stoneBlockHouses").innerHTML = stoneBlockHouses;
	document.getElementById("blacksmiths").innerHTML = blacksmiths;
	
	document.getElementById("transcendentBeings").innerHTML = 0;
	document.getElementById("tBsToGain").innerHTML = 0;
	document.getElementById("transcendentKnights").innerHTML = 0;
	document.getElementById("tKsToGain").innerHTML = 0;
	
	document.getElementById("goldToScienceRatio").innerHTML = goldToScience*100;
};

function confirmReset()			//just confirms person wants to reset
{
	if (confirm("Are you sure you want to hard reset?"))
	{
		hardReset()
	};
};
//setting a fuck-ton of variables. might not be neccesary but why the fuck not.
var gold = 10;							
var population = 0;
var caves = 0;
var cavesPopSec = .1;
var caveBaseCost = 10;
var caveCost = 10;
var dirtHuts = 0;
var dirtHutPopSec = 2;
var dirtHutBaseCost = 1000;
var dirtHutCost = 1000;
var stickHuts = 0;
var stickHutPopSec = 15;
var stickHutBaseCost = 100000;
var stickHutCost = 100000;
var sodHouses = 0;
var sodHousePopSec = 100;
var sodHouseBaseCost = 10000000;
var sodHouseCost = 10000000;
var goldPerPop = .1;
var allTimeGold = 10;
var goldPerSec = 0;
var popPerSec = 0;
var achieve1 = false;
var upgradeACost = 100;
var upgradeBCost = 10000;
var upgradeCCost = 1000000;
var achieve2 = false;
var achieve3 = false;
var upgrade1 = false;
var upgrade2 = false;
var upgrade3 = false;
var amountToBuy = 1;
var dayActivated = 0;
var d = new Date();
var day;
var timeLeft;
var localStorage = [];						//not sure if I need this butt-fuck it.
var timer = 0;
var dailyRewardActive = false;
var dayActivated;
var currentTime;
var timeLeft;
var science = 0;
var goldToScience = .5;
var sciencePerSec = 0;
var allTimeScience = 0;
var transcendentBeings = 0;
var tBsToGain = 0;
var betPercent = .5;
var winnings;
var losings;
var roll1;
var roll2;
var roll3;
var treehouses = 0;
var treehousePopSec = 500;
var treehouseBaseCost = 1000000000;
var treehouseCost = 1000000000;
var farms = 0;
var farmBaseCost = 100000000000;
var farmCost = 100000000000;
var farmPopSec = 1500;
var stoneBlockHouses = 0;
var stoneBlockHousePopSec = 25000;
var stoneBlockHouseBaseCost = 10000000000000000;
var stoneBlockHouseCost = 10000000000000000;
var blacksmiths = 0;
var blacksmithPopSec = 50000;
var blacksmithBaseCost = 100000000000000000;
var blacksmithCost = 100000000000000000;
var transcendentKnights = 0;
var tKsToGain = 0;



var timeBetweenTicks = .1;
var x = new Date();
var time1 = x.getTime();
var y = new Date();
var time2 = y.getTime();
var loopTimer = 100;
var loopDivisor = 10;
var testTimer = 0;


var gameSaved;
preLoad();					//for now used to make sure variables dont get set to 0/(null) values.
function preLoad()
{
	gameSaved = JSON.parse(localStorage.getItem("gameSaved"));
	if (gameSaved)
	{
		loadGame()
	}
}

/*function onClick(number)						//this is what happens when you click the "Click me!" button
{
	gold = gold + number;				//used number variable in case if clicking ever gets an upgrade
	document.getElementById("gold").innerHTML = gold;	//sends the new information to the html document
} ;*/

function buyMultiple(number) 				//function to calculate buying multiple of a building.
{
	amountToBuy = number;				//sets this so i can reference it when i need to increase the building number
	document.getElementById("amountToBuy").innerHTML = amountToBuy;
	caveCost = caveBaseCost;				//resets the base value each time you click it so reclicking buy 10 or whatever doesnt increase the price
	dirtHutCost = dirtHutBaseCost;		//^^^^^
	stickHutCost = stickHutBaseCost;
	sodHouseCost = sodHouseBaseCost;
	treehouseCost = treehouseBaseCost;
	farmCost = farmBaseCost;
	stoneBlockHouseCost = stoneBlockHouseBaseCost;
	blacksmithCost = blacksmithBaseCost;
	
	if (number === 1)							//checks to see how many are trying to be bought
	{
		caveCost = caveCost*Math.pow(1.2,caves);									//youve essentially seen this somewhere else im pretty sure
		prettyCaveCost = prettify(caveCost, 3)
		document.getElementById("caveCost").innerHTML = prettyCaveCost;
		
		dirtHutCost = dirtHutCost*Math.pow(1.2, dirtHuts);
		prettyDirtHutCost = prettify(dirtHutCost, 3)
		document.getElementById("dirtHutCost").innerHTML = prettyDirtHutCost;
		
		stickHutCost = stickHutCost*Math.pow(1.2, stickHuts);
		prettyStickHutCost = prettify(stickHutCost,3)
		document.getElementById("stickHutCost").innerHTML = prettyStickHutCost;
		
		sodHouseCost = sodHouseCost*Math.pow(1.2, sodHouses);
		prettySodHouseCost = prettify(sodHouseCost,3)
		document.getElementById("sodHouseCost").innerHTML = prettySodHouseCost;
		
		treehouseCost = treehouseCost*Math.pow(1.2, treehouses);
		prettytreehouseCost = prettify(treehouseCost,3)
		document.getElementById("treehouseCost").innerHTML = prettytreehouseCost;
		
		farmCost = farmCost*Math.pow(1.2, farms);
		prettyfarmCost = prettify(farmCost,3)
		document.getElementById("farmCost").innerHTML = prettyfarmCost;
		
		stoneBlockHouseCost = stoneBlockHouseCost*Math.pow(1.2, stoneBlockHouses);
		prettystoneBlockHouseCost = prettify(stoneBlockHouseCost,3)
		document.getElementById("stoneBlockHouseCost").innerHTML = prettystoneBlockHouseCost;
		
		blacksmithCost = blacksmithCost*Math.pow(1.2, blacksmiths);
		prettyblacksmithCost = prettify(blacksmithCost,3)
		document.getElementById("blacksmithCost").innerHTML = prettyblacksmithCost;
	};
	if (number === 10)
	{
		caveCost = caveCost*Math.pow(1.2,caves+number -1) + caveCost*Math.pow(1.2,caves+number - 2)			//long and gross but works. dont question it.
		+ caveCost*Math.pow(1.2,caves+number - 3) + caveCost*Math.pow(1.2,caves+number - 4) + caveCost*Math.pow(1.2,caves+number - 5)
		+ caveCost*Math.pow(1.2,caves+number - 6) + caveCost*Math.pow(1.2,caves+number - 7) + caveCost*Math.pow(1.2,caves+number - 8)
		+ caveCost*Math.pow(1.2,caves+number - 9) + caveCost*Math.pow(1.2,caves+number - 10);
		prettyCaveCost = prettify(caveCost, 3)
		document.getElementById("caveCost").innerHTML = prettyCaveCost;
		
		dirtHutCost = dirtHutCost*Math.pow(1.2,dirtHuts+number -1) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 2)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 3) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 4) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 5)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 6) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 7) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 8)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 9) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 10);
		prettyDirtHutCost = prettify(dirtHutCost, 3)
		document.getElementById("dirtHutCost").innerHTML = prettyDirtHutCost;
		
		stickHutCost = stickHutCost*Math.pow(1.2,stickHuts+number -1) + stickHutCost*Math.pow(1.2,stickHuts+number - 2)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 3) + stickHutCost*Math.pow(1.2,stickHuts+number - 4) + stickHutCost*Math.pow(1.2,stickHuts+number - 5)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 6) + stickHutCost*Math.pow(1.2,stickHuts+number - 7) + stickHutCost*Math.pow(1.2,stickHuts+number - 8)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 9) + stickHutCost*Math.pow(1.2,stickHuts+number - 10);
		prettyStickHutCost = prettify(stickHutCost, 3)
		document.getElementById("stickHutCost").innerHTML = prettyStickHutCost;
		
		sodHouseCost = sodHouseCost*Math.pow(1.2,sodHouses+number -1) + sodHouseCost*Math.pow(1.2,sodHouses+number - 2)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 3) + sodHouseCost*Math.pow(1.2,sodHouses+number - 4) + sodHouseCost*Math.pow(1.2,sodHouses+number - 5)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 6) + sodHouseCost*Math.pow(1.2,sodHouses+number - 7) + sodHouseCost*Math.pow(1.2,sodHouses+number - 8)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 9) + sodHouseCost*Math.pow(1.2,sodHouses+number - 10);
		prettySodHouseCost = prettify(sodHouseCost, 3)
		document.getElementById("sodHouseCost").innerHTML = prettySodHouseCost;
		
		treehouseCost = treehouseCost*Math.pow(1.2,treehouses+number -1) + treehouseCost*Math.pow(1.2,treehouses+number - 2)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 3) + treehouseCost*Math.pow(1.2,treehouses+number - 4) + treehouseCost*Math.pow(1.2,treehouses+number - 5)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 6) + treehouseCost*Math.pow(1.2,treehouses+number - 7) + treehouseCost*Math.pow(1.2,treehouses+number - 8)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 9) + treehouseCost*Math.pow(1.2,treehouses+number - 10);
		prettytreehouseCost = prettify(treehouseCost, 3)
		document.getElementById("treehouseCost").innerHTML = prettytreehouseCost;
		
		farmCost = farmCost*Math.pow(1.2,farms+number -1) + farmCost*Math.pow(1.2,farms+number - 2)
		+ farmCost*Math.pow(1.2,farms+number - 3) + farmCost*Math.pow(1.2,farms+number - 4) + farmCost*Math.pow(1.2,farms+number - 5)
		+ farmCost*Math.pow(1.2,farms+number - 6) + farmCost*Math.pow(1.2,farms+number - 7) + farmCost*Math.pow(1.2,farms+number - 8)
		+ farmCost*Math.pow(1.2,farms+number - 9) + farmCost*Math.pow(1.2,farms+number - 10);
		prettyfarmCost = prettify(farmCost, 3)
		document.getElementById("farmCost").innerHTML = prettyfarmCost;
		
		stoneBlockHouseCost = stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number -1) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 2)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 3) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 4) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 5)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 6) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 7) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 8)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 9) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 10);
		prettystoneBlockHouseCost = prettify(stoneBlockHouseCost, 3)
		document.getElementById("stoneBlockHouseCost").innerHTML = prettystoneBlockHouseCost;
		
		blacksmithCost = blacksmithCost*Math.pow(1.2,blacksmiths+number -1) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 2)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 3) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 4) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 5)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 6) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 7) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 8)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 9) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 10);
		prettyblacksmithCost = prettify(blacksmithCost, 3)
		document.getElementById("blacksmithCost").innerHTML = prettyblacksmithCost;
	};
	if (number === 100)
	{
		caveCost = caveCost*Math.pow(1.2,caves+number -1) + caveCost*Math.pow(1.2,caves+number - 2)			//not exactly correct but cuts down typing and calculations for a <1% error.
		+ caveCost*Math.pow(1.2,caves+number - 3) + caveCost*Math.pow(1.2,caves+number - 4) + caveCost*Math.pow(1.2,caves+number - 5)
		+ caveCost*Math.pow(1.2,caves+number - 6) + caveCost*Math.pow(1.2,caves+number - 7) + caveCost*Math.pow(1.2,caves+number - 8)
		+ caveCost*Math.pow(1.2,caves+number - 9) + caveCost*Math.pow(1.2,caves+number - 10);
		prettyCaveCost = prettify(caveCost, 3)
		document.getElementById("caveCost").innerHTML = prettyCaveCost;
		
		dirtHutCost = dirtHutCost*Math.pow(1.2,dirtHuts+number -1) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 2)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 3) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 4) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 5)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 6) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 7) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 8)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 9) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 10);
		prettyDirtHutCost = prettify(dirtHutCost, 3)
		document.getElementById("dirtHutCost").innerHTML = prettyDirtHutCost;
		
		stickHutCost = stickHutCost*Math.pow(1.2,stickHuts+number -1) + stickHutCost*Math.pow(1.2,stickHuts+number - 2)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 3) + stickHutCost*Math.pow(1.2,stickHuts+number - 4) + stickHutCost*Math.pow(1.2,stickHuts+number - 5)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 6) + stickHutCost*Math.pow(1.2,stickHuts+number - 7) + stickHutCost*Math.pow(1.2,stickHuts+number - 8)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 9) + stickHutCost*Math.pow(1.2,stickHuts+number - 10);
		prettyStickHutCost = prettify(stickHutCost, 3)
		document.getElementById("stickHutCost").innerHTML = prettyStickHutCost;
		
		sodHouseCost = sodHouseCost*Math.pow(1.2,sodHouses+number -1) + sodHouseCost*Math.pow(1.2,sodHouses+number - 2)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 3) + sodHouseCost*Math.pow(1.2,sodHouses+number - 4) + sodHouseCost*Math.pow(1.2,sodHouses+number - 5)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 6) + sodHouseCost*Math.pow(1.2,sodHouses+number - 7) + sodHouseCost*Math.pow(1.2,sodHouses+number - 8)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 9) + sodHouseCost*Math.pow(1.2,sodHouses+number - 10);
		prettySodHouseCost = prettify(sodHouseCost, 3)
		document.getElementById("sodHouseCost").innerHTML = prettySodHouseCost;
		
		treehouseCost = treehouseCost*Math.pow(1.2,treehouses+number -1) + treehouseCost*Math.pow(1.2,treehouses+number - 2)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 3) + treehouseCost*Math.pow(1.2,treehouses+number - 4) + treehouseCost*Math.pow(1.2,treehouses+number - 5)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 6) + treehouseCost*Math.pow(1.2,treehouses+number - 7) + treehouseCost*Math.pow(1.2,treehouses+number - 8)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 9) + treehouseCost*Math.pow(1.2,treehouses+number - 10);
		prettytreehouseCost = prettify(treehouseCost, 3)
		document.getElementById("treehouseCost").innerHTML = prettytreehouseCost;
		
		farmCost = farmCost*Math.pow(1.2,farms+number -1) + farmCost*Math.pow(1.2,farms+number - 2)
		+ farmCost*Math.pow(1.2,farms+number - 3) + farmCost*Math.pow(1.2,farms+number - 4) + farmCost*Math.pow(1.2,farms+number - 5)
		+ farmCost*Math.pow(1.2,farms+number - 6) + farmCost*Math.pow(1.2,farms+number - 7) + farmCost*Math.pow(1.2,farms+number - 8)
		+ farmCost*Math.pow(1.2,farms+number - 9) + farmCost*Math.pow(1.2,farms+number - 10);
		prettyfarmCost = prettify(farmCost, 3)
		document.getElementById("farmCost").innerHTML = prettyfarmCost;
		
		stoneBlockHouseCost = stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number -1) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 2)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 3) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 4) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 5)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 6) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 7) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 8)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 9) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 10);
		prettystoneBlockHouseCost = prettify(stoneBlockHouseCost, 3)
		document.getElementById("stoneBlockHouseCost").innerHTML = prettystoneBlockHouseCost;
		
		blacksmithCost = blacksmithCost*Math.pow(1.2,blacksmiths+number -1) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 2)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 3) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 4) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 5)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 6) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 7) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 8)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 9) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 10);
		prettyblacksmithCost = prettify(blacksmithCost, 3)
		document.getElementById("blacksmithCost").innerHTML = prettyblacksmithCost;
	};
	if (number === 1000)
	{
		caveCost = caveCost*Math.pow(1.2,caves+number -1) + caveCost*Math.pow(1.2,caves+number - 2)			//not exactly correct but cuts down typing and calculations for a <1% error.
		+ caveCost*Math.pow(1.2,caves+number - 3) + caveCost*Math.pow(1.2,caves+number - 4) + caveCost*Math.pow(1.2,caves+number - 5)
		+ caveCost*Math.pow(1.2,caves+number - 6) + caveCost*Math.pow(1.2,caves+number - 7) + caveCost*Math.pow(1.2,caves+number - 8)
		+ caveCost*Math.pow(1.2,caves+number - 9) + caveCost*Math.pow(1.2,caves+number - 10);
		prettyCaveCost = prettify(caveCost, 3)
		document.getElementById("caveCost").innerHTML = prettyCaveCost;
		
		dirtHutCost = dirtHutCost*Math.pow(1.2,dirtHuts+number -1) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 2)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 3) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 4) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 5)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 6) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 7) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 8)
		+ dirtHutCost*Math.pow(1.2,dirtHuts+number - 9) + dirtHutCost*Math.pow(1.2,dirtHuts+number - 10);
		prettyDirtHutCost = prettify(dirtHutCost, 3)
		document.getElementById("dirtHutCost").innerHTML = prettyDirtHutCost;
		
		stickHutCost = stickHutCost*Math.pow(1.2,stickHuts+number -1) + stickHutCost*Math.pow(1.2,stickHuts+number - 2)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 3) + stickHutCost*Math.pow(1.2,stickHuts+number - 4) + stickHutCost*Math.pow(1.2,stickHuts+number - 5)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 6) + stickHutCost*Math.pow(1.2,stickHuts+number - 7) + stickHutCost*Math.pow(1.2,stickHuts+number - 8)
		+ stickHutCost*Math.pow(1.2,stickHuts+number - 9) + stickHutCost*Math.pow(1.2,stickHuts+number - 10);
		prettyStickHutCost = prettify(stickHutCost, 3)
		document.getElementById("stickHutCost").innerHTML = prettyStickHutCost;
		
		sodHouseCost = sodHouseCost*Math.pow(1.2,sodHouses+number -1) + sodHouseCost*Math.pow(1.2,sodHouses+number - 2)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 3) + sodHouseCost*Math.pow(1.2,sodHouses+number - 4) + sodHouseCost*Math.pow(1.2,sodHouses+number - 5)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 6) + sodHouseCost*Math.pow(1.2,sodHouses+number - 7) + sodHouseCost*Math.pow(1.2,sodHouses+number - 8)
		+ sodHouseCost*Math.pow(1.2,sodHouses+number - 9) + sodHouseCost*Math.pow(1.2,sodHouses+number - 10);
		prettySodHouseCost = prettify(sodHouseCost, 3)
		document.getElementById("sodHouseCost").innerHTML = prettySodHouseCost;
		
		treehouseCost = treehouseCost*Math.pow(1.2,treehouses+number -1) + treehouseCost*Math.pow(1.2,treehouses+number - 2)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 3) + treehouseCost*Math.pow(1.2,treehouses+number - 4) + treehouseCost*Math.pow(1.2,treehouses+number - 5)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 6) + treehouseCost*Math.pow(1.2,treehouses+number - 7) + treehouseCost*Math.pow(1.2,treehouses+number - 8)
		+ treehouseCost*Math.pow(1.2,treehouses+number - 9) + treehouseCost*Math.pow(1.2,treehouses+number - 10);
		prettytreehouseCost = prettify(treehouseCost, 3)
		document.getElementById("treehouseCost").innerHTML = prettytreehouseCost;
		
		farmCost = farmCost*Math.pow(1.2,farms+number -1) + farmCost*Math.pow(1.2,farms+number - 2)
		+ farmCost*Math.pow(1.2,farms+number - 3) + farmCost*Math.pow(1.2,farms+number - 4) + farmCost*Math.pow(1.2,farms+number - 5)
		+ farmCost*Math.pow(1.2,farms+number - 6) + farmCost*Math.pow(1.2,farms+number - 7) + farmCost*Math.pow(1.2,farms+number - 8)
		+ farmCost*Math.pow(1.2,farms+number - 9) + farmCost*Math.pow(1.2,farms+number - 10);
		prettyfarmCost = prettify(farmCost, 3)
		document.getElementById("farmCost").innerHTML = prettyfarmCost;
		
		stoneBlockHouseCost = stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number -1) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 2)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 3) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 4) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 5)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 6) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 7) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 8)
		+ stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 9) + stoneBlockHouseCost*Math.pow(1.2,stoneBlockHouses+number - 10);
		prettystoneBlockHouseCost = prettify(stoneBlockHouseCost, 3)
		document.getElementById("stoneBlockHouseCost").innerHTML = prettystoneBlockHouseCost;
		
		blacksmithCost = blacksmithCost*Math.pow(1.2,blacksmiths+number -1) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 2)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 3) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 4) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 5)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 6) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 7) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 8)
		+ blacksmithCost*Math.pow(1.2,blacksmiths+number - 9) + blacksmithCost*Math.pow(1.2,blacksmiths+number - 10);
		prettyblacksmithCost = prettify(blacksmithCost, 3)
		document.getElementById("blacksmithCost").innerHTML = prettyblacksmithCost;
	};
};

function buyCave()			//what happens when you click "Buy Cave" button
{
	//var caveCost = Math.floor(10*Math.pow(1.2,caves));		//calculates the cost of the building (will probably change values later)
	if (gold >= caveCost)													//checks to see if user has enough money to buy
	{
		caves = caves + amountToBuy;													//adds x caves
		gold = gold - caveCost;											//takes away the money
		buyMultiple(amountToBuy);
		document.getElementById("caves").innerHTML = caves;	//sends shit to html
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;		//^^^^^^^^^
	};
	//var nextCaveCost = Math.floor(10*Math.pow(1.2,caves));			//calculates the cost of the next cave
	//var nextCaveCost = buyMultiple(amountToBuy);
	//document.getElementById("caveCost").innerHTML = nextCaveCost;		//sens that shit to html
};

function buyDirtHut()
{
	//var dirtHutCost = Math.floor(1000*Math.pow(1.2,dirtHuts));
	if (gold >= dirtHutCost)
	{
		dirtHuts = dirtHuts + amountToBuy;
		gold = gold - dirtHutCost;
		buyMultiple(amountToBuy);
		document.getElementById("dirtHuts").innerHTML = dirtHuts;
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;
	};
	//var nextDirtHutCost = Math.floor(1000*Math.pow(1.2,dirtHuts));
	//var nextDirtHutCost = buyMultiple(amountToBuy);
	//document.getElementById("dirtHutCost").innerHTML = nextDirtHutCost;
};

function buyStickHut()
{
	if (gold >= stickHutCost)
	{
		stickHuts = stickHuts + amountToBuy;
		gold = gold - stickHutCost;
		buyMultiple(amountToBuy);
		document.getElementById("stickHuts").innerHTML = stickHuts;
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;
	};
};

function buySodHouse()
{
	if (gold >= sodHouseCost)
	{
		sodHouses = sodHouses + amountToBuy;
		gold = gold - sodHouseCost;
		buyMultiple(amountToBuy);
		document.getElementById("sodHouses").innerHTML = sodHouses;
		prettyGold = prettify(gold, 3)
		document.getElementById("gold").innerHTML = prettyGold;
	}
}

function buyTreehouse()
{
	if (gold >= treehouseCost)
	{
		treehouses = treehouses + amountToBuy;
		gold = gold - treehouseCost;
		buyMultiple(amountToBuy);
		document.getElementById("treehouses").innerHTML = treehouses;
		document.getElementById("gold").innerHTML = prettify(gold);
	}
}

function buyFarm()
{
	if (gold >= farmCost)
	{
		farms = farms + amountToBuy;
		gold = gold - farmCost;
		buyMultiple(amountToBuy);
		document.getElementById("farms").innerHTML = farms;
		document.getElementById("gold").innerHTML = prettify(gold);
	}
}

function buyStoneBlockHouse()
{
	if (gold >= stoneBlockHouseCost)
	{
		stoneBlockHouses = stoneBlockHouses + amountToBuy;
		gold = gold - stoneBlockHouseCost;
		buyMultiple(amountToBuy);
		document.getElementById("stoneBlockHouses").innerHTML = stoneBlockHouses;
		document.getElementById("gold").innerHTML = prettify(gold);
	}
}

function buyBlacksmith()
{
	if (gold >= blacksmithCost)
	{
		blacksmiths = blacksmiths + amountToBuy;
		gold = gold - blacksmithCost;
		buyMultiple(amountToBuy);
		document.getElementById("blacksmiths").innerHTML = blacksmiths;
		document.getElementById("gold").innerHTML = prettify(gold);
	}
}

function buildingPopulation(numberOfBuilding, populationPerBuilding)		//function to calculate the population gains
{
	population = population + (numberOfBuilding*populationPerBuilding);
	prettyPop = prettify(population, 2)
	document.getElementById("population").innerHTML = prettyPop;
};

function increaseScience()			//pretty self explanatory honestly...
{
	if (goldToScience < 1)
	{
		goldToScience = Math.round((goldToScience + .05)*100)/100;
		document.getElementById("goldToScienceRatio").innerHTML = goldToScience * 100;
	};
};

function decreaseScience()
{
	if (goldToScience > 0)
	{
		goldToScience = Math.round((goldToScience - .05)*100)/100;
		document.getElementById("goldToScienceRatio").innerHTML = goldToScience * 100;
	};
};

function increaseBet()   			//almost exactly the same code as increase science
{
	if (betPercent < 1)
	{
		betPercent = Math.round((betPercent + .05)*100)/100;
		document.getElementById("betPercent").innerHTML = betPercent*100;
	}
}

function decreaseBet()
{
	if (betPercent > 0)
	{
		betPercent = Math.round((betPercent - .05)*100)/100;
		document.getElementById("betPercent").innerHTML = betPercent*100;
	}
}

function gamble()					//gamble function (duh) perhaps update winning and losing chances and values of each and what not to make it more exiting. at the moment overall loss would be 50% if you gambled a lot.
{
	bet = gold*betPercent			//determines how much gold you are betting
	roll1 = convert()						//sets the rolls equal to the output of the convert function
	roll2 = convert()
	roll3 = convert()
	function convert()					//the convert function!
	{
		roll = Math.random()			//sets a random value between 0 and 1
		if (roll < .5)								//checks to see if the value is less than .5, essentially giving it a 50% chance to be this.
		{
			return "Cave"
		}
		
		else if (roll < .75)				//if its not less than .5 it checks to  see if its less than .75, essentially a 25% chance.
		{
			return "Dirt Hut"
		}
		
		else if (roll < .875)				//12.5% chance.
		{
			return "Stick Hut"
		}
		
		else if (roll < .9375)				//6.25% chance...
		{
			return "Transcendent Being"
		}
		
		else 										//also a 6.25% chance
		{
			return "Transcendent God"
		}
	}

	document.getElementById("roll1").innerHTML = roll1					//outputs each roll
	document.getElementById("roll2").innerHTML = roll2					//may put a timer in here somewhere to build suspense.
	document.getElementById("roll3").innerHTML = roll3
	
	if (roll1 === roll2 && roll2 === roll3)							//checks to see if all rolls are the same.
	{
		switch (roll1)								//if they are switch function sees which roll it is.
		{
			case "Cave":										//if its "Cave" it does this
				winnings = prettify(bet * 3, 3)				//calculates the winnings and makes them pretty.
				document.getElementById("winnings").innerHTML = "You won with Caves and earned " + winnings + " gold!"   	//outputs the winnings.
				gold = gold + bet * 3				//actually calculates and adds the winnings to your gold.
				break;
			
			case "Dirt Hut":     					//same same
				winnings = prettify(bet * 25, 3)
				document.getElementById("winnings").innerHTML = "You won with Dirt Huts and earned " + winnings + " gold!"
				gold = gold + bet * 25
				break;
			
			case "Stick Hut":
				winnings = prettify(bet * 200, 3)
				document.getElementById("winnings").innerHTML = "You won with Stick Huts and earned " + winnings + " gold!"
				gold = gold + bet * 200
				break;
			
			case "Transcendent Being":
				winnings = prettify(bet * 1500, 3)
				document.getElementById("winnings").innerHTML = "You won with Transcendent Beings and earned " + winnings + " gold!"
				gold = gold + bet * 1500
				break;
				
			case "Transcendent God":
				winnings = prettify(bet * 2000, 3)
				document.getElementById("winnings").innerHTML = "You won with Transcendent Gods and earned " + winnings + " gold!"
				gold = gold + bet * 2000
				break;
		}
	}
	
	else				//what happens if all 3 rolls arent the same.
	{
		losings = prettify(bet, 3);  					//calculates and prettifies losings
		document.getElementById("winnings").innerHTML = "Sorry, but you lost " + losings + " gold!"   		//consolation message.
		gold = gold - bet				//calculates losses.
	}
}

function populationGold(goldPerPop1)									//function to calculate gold gains and science
{
	gold = gold + (population*goldPerPop1 - population*goldPerPop1*goldToScience);		
	prettyGold = prettify(gold, 3)
	document.getElementById("gold").innerHTML = prettyGold;
	science = science + (population*goldPerPop1*goldToScience);
	prettyScience = prettify(science, 3);
	document.getElementById("science").innerHTML = prettyScience;
};

function checkAchieve()				//function to check and award achievements if requirements are met
{												//need to come up with clever names later
	if (gold > 100 && !(achieve1))		//checks if gold is above 100 and if this ahievement has been earned before
	{
		goldPerPop = goldPerPop * 1.1; 		// Either all achievements/upgrades regarding gold per pop should probably be multiplicative or additive
															// for simplistic maths. might have a way to workaround that I dont know of. but basically if some were
															// additive and some were multiplicative it could be advantageous to get them in different orders.
		achieve1 = true;								//makes it so you dont reget the achievement
	};
	if (achieve1)
	{
		document.getElementById("achieve1Status").innerHTML = "Completed and gold per pop increases by 10%";
	};
	if (!achieve1)
	{
		document.getElementById("achieve1Status").innerHTML = "Not Completed"
	}
	
	if (gold > 1000 && !(achieve2))			// more of the same
	{
		goldPerPop = goldPerPop * 1.1;
		achieve2 = true;
	};
	if (achieve2)
	{
		document.getElementById("achieve2Status").innerHTML = "Completed and gold per pop increases by 10%"
	};
	if (!achieve2)
	{
		document.getElementById("achieve2Status").innerHTML = "Not Completed"
	};
	
	if (gold > 10000 && !(achieve3))
	{
		goldPerPop = goldPerPop * 1.1;
		achieve3 = true;
	};
	if (achieve3)
	{
		document.getElementById("achieve3Status").innerHTML = "Completed and gold per pop increases by 10%"
	};
	if (!achieve3)
	{
		document.getElementById("achieve3Status").innerHTML = "Not Completed"
	};
};

function stats()					// creates and outputs different stats
{
	goldPerSec = population * goldPerPop - population*goldPerPop*goldToScience;
	prettyGPS = prettify(goldPerSec, 3)
	document.getElementById("goldPerSec").innerHTML = prettyGPS;
	document.getElementById("goldPerSec2").innerHTML = prettyGPS;
	
	prettyGPP = prettify((goldPerPop - goldToScience*goldPerPop), 3);
	document.getElementById("goldPerPop").innerHTML = prettyGPP;
	
	prettySPP = prettify((goldPerPop*goldToScience), 3);
	document.getElementById("sciencePerPop").innerHTML = prettySPP;
	
	sciencePerSec =  (population*goldPerPop*goldToScience);
	prettySPS = prettify(sciencePerSec, 3)
	document.getElementById("sciencePerSec1").innerHTML = prettySPS;
	document.getElementById("sciencePerSec2").innerHTML = prettySPS;
	
	allTimeGold = allTimeGold + goldPerSec*timeBetweenTicks;
	prettyATG = prettify(allTimeGold, 3);
	document.getElementById("allTimeGold").innerHTML = prettyATG;
	
	allTimeScience = allTimeScience + sciencePerSec*timeBetweenTicks;
	prettyATS = prettify(allTimeScience, 3);
	document.getElementById("allTimeScience").innerHTML = prettyATS;
	
	popPerSec = ((caves * cavesPopSec) + (dirtHuts * dirtHutPopSec) + (stickHuts * stickHutPopSec) + (sodHouses * sodHousePopSec) + (treehouses * treehousePopSec) + (farms * farmPopSec) + (stoneBlockHouses * stoneBlockHousePopSec) + (blacksmiths * blacksmithPopSec));
	prettyPPS = prettify(popPerSec, 2)
	document.getElementById("popPerSec").innerHTML = prettyPPS;
	document.getElementById("popPerSec2").innerHTML = prettyPPS;
};

function upgradeA()				//upgrade function. May be able to use one function for all upgrades but cant think of a way yet
{
	if (science >= upgradeACost && !(upgrade1))			//can probably remove the upgrade1 false stuff after the upgrades are removed after purchase.
	{
		cavesPopSec = cavesPopSec * 1.05; 		//same as gold per pop needs to be either multiply or add for future stuff
		science = science - upgradeACost;
		upgradeACost = upgradeACost * 10;
		prettyUpACost = prettify(upgradeACost,0);
		document.getElementById("upgradeACost").innerHTML = prettyUpACost;
		//upgrade1 = true;
		//document.getElementById("button onclick = "buyDirtHut()"").style.display="none";
	};
};

function upgradeB()
{
	if (science >= upgradeBCost)
	{
		dirtHutPopSec = dirtHutPopSec * 1.05;
		science = science - upgradeBCost;
		upgradeBCost = upgradeBCost * 10;
		prettyUpBCost = prettify(upgradeBCost,0);
		document.getElementById("upgradeBCost").innerHTML = prettyUpBCost;
	};
};

function upgradeC()
{
	if (science >= upgradeCCost)
	{
		stickHutPopSec = stickHutPopSec * 1.05;
		science = science - upgradeCCost;
		upgradeCCost = upgradeCCost * 10;
		prettyUpCCost = prettify(upgradeCCost,0);
		document.getElementById("upgradeCCost").innerHTML = prettyUpCCost;
	};
};

function dailyReward()			//function for daily reward
{
	if (day >= dayActivated + 86400000 && (!dailyRewardActive))		// only lets you do it once a day and not have it activated multiple times at once
	{
		dayActivated = d.getTime();
		timer = 0;
		goldPerPop = goldPerPop * 2;
		dailyRewardActive = true;
	};
};

function checkDailyReward()					//does all the stuff to make sure you only activate once a day and that it turns off properly
{
	if (dailyRewardActive && (timer > 900000))
	{
		dailyRewardActive = false;
		goldPerPop = goldPerPop/2;
	}
	if (dailyRewardActive)						//used to show how much time till it ends
	{
		document.getElementById("timer").innerHTML = (900000 - timer)/1000;
		timer = timer + 1000*timeBetweenTicks;
	}
	if (day < dayActivated + 86400000)					//used to show how long till you can activate it again
	{
		day = d.getTime();
		timeLeft = ((dayActivated+86400000) - day)/1000;
		document.getElementById("timeLeft").innerHTML = timeLeft;
	}
	if (day > dayActivated + 86400000)
	{
		document.getElementById("timeLeft").innerHTML = 0;
	}
	if (!dailyRewardActive)
	{
		document.getElementById("timer").innerHTML = 0;
	}
};

function transcend()						//essentially the prestige as of now
{
	if ((Math.pow(allTimeGold/50000, 1/3) - 5000) > 0)
	{
		tKsToGain = prettify(tKsToGain, 3)
		tBsToGain = prettify(tBsToGain, 3)
		if (confirm("This time youll gain "+tKsToGain+" Transcendent Knights as well. Each Transcendent Knight gives you another 25% increase. Transcendent Beings to earn: "+tBsToGain))
		{
			transcendentKnights = Math.floor((Math.pow(allTimeGold/50000, 1/3) - 5000));
			transcendentBeings = Math.floor((Math.pow(allTimeGold/50000, 1/2) - 2500));
			gold = 10;
			population = 0;
			caves = 0;
			cavesPopSec = .1;
			caveCost = 10;
			dirtHuts = 0;
			dirtHutPopSec = 2;
			dirtHutCost = 1000;
			stickHuts = 0;
			stickHutPopSec = 15;
			stickHutCost = 100000;
			sodHouses = 0;
			sodHousePopSec = 100;
			sodHouseCost = 10000000;
			goldPerPop = .1*(transcendentBeings*.1+1) * (transcendentKnights*.25+1);
			achieve1 = false;
			upgradeACost = 100;
			upgradeBCost = 10000;
			upgradeCCost = 1000000;
			achieve2 = false;
			achieve3 = false;
			upgrade1 = false;
			upgrade2 = false;
			upgrade3 = false;
			science = 0;
			treehouses = 0;
			treehousePopSec = 500;
			treehouseCost = 1000000000;
			farms = 0;
			farmPopSec = 1500;
			farmCost = 100000000000;
			stoneBlockHouses = 0;
			stoneBlockHousePopSec = 25000;
			stoneBlockHouseCost = 10000000000000000;
			blacksmiths = 0;
			blacksmithPopSec = 50000;
			blacksmithCost = 100000000000000000;
			
			
			document.getElementById("gold").innerHTML = prettify(gold, 3);
			document.getElementById("science").innerHTML = prettify(science, 3);
			document.getElementById("population").innerHTML = prettify(population, 3);
			document.getElementById("caves").innerHTML = prettify(caves, 3);
			document.getElementById("caveCost").innerHTML = prettify(caveCost, 3);
			document.getElementById("dirtHuts").innerHTML = prettify(dirtHuts, 3);
			document.getElementById("dirtHutCost").innerHTML = prettify(dirtHutCost, 3);
			document.getElementById("stickHuts").innerHTML = prettify(stickHuts, 3);
			document.getElementById("stickHutCost").innerHTML = prettify(stickHutCost, 3);
			document.getElementById("sodHouses").innerHTML = prettify(sodHouses, 3);
			document.getElementById("sodHouseCost").innerHTML = prettify(sodHouseCost, 3);
			document.getElementById("treehouses").innerHTML = prettify(treehouses, 3);
			document.getElementById("treehouseCost").innerHTML = prettify(treehouseCost, 3);
			document.getElementById("farms").innerHTML = prettify(farms, 3);
			document.getElementById("farmCost").innerHTML = prettify(farmCost, 3);
			document.getElementById("stoneBlockHouses").innerHTML = prettify(stoneBlockHouses, 3);
			document.getElementById("stoneBlockHouseCost").innerHTML = prettify(stoneBlockHouseCost, 3);
			document.getElementById("blacksmiths").innerHTML = prettify(blacksmiths, 3);
			document.getElementById("blacksmithCost").innerHTML = prettify(blacksmithCost, 3);
			document.getElementById("upgradeACost").innerHTML = prettify(upgradeACost, 3);
			document.getElementById("upgradeBCost").innerHTML = prettify(upgradeBCost, 3);
			document.getElementById("upgradeCCost").innerHTML = prettify(upgradeCCost, 3);
			document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
			document.getElementById("transcendentKnights").innerHTML = prettify(transcendentKnights, 3);
		}
	}
	
	else if ((Math.pow(allTimeGold/50000, 1/2) - 2500) > 0)				//checks to make sure youd actually get something before letting you do it.
	{
		tBsToGain = prettify(tBsToGain, 3)
		if (confirm("Are you sure you want to transcend? You will lose all your gold, science, buildings, achievements, and upgrades. But will earn "+tBsToGain+" Transcendent Beings which give you 10% more gold per population."))			//makes sure you want to transcend
		{
			transcendentBeings = Math.floor((Math.pow(allTimeGold/50000, 1/2) - 2500));				//calculates how many transcendent beings you get
			gold = 10;									//all of these just reset values to beginning values except for gold/pop which gets increased by how many transcendent beings you earned.
			population = 0;
			caves = 0;
			cavesPopSec = .1;
			caveCost = 10;
			dirtHuts = 0;
			dirtHutPopSec = 2;
			dirtHutCost = 1000;
			stickHuts = 0;
			stickHutPopSec = 15;
			stickHutCost = 100000;
			sodHouses = 0;
			sodHousePopSec = 100;
			sodHouseCost = 10000000;
			goldPerPop = .1*(transcendentBeings*.1+1);
			achieve1 = false;
			upgradeACost = 100;
			upgradeBCost = 10000;
			upgradeCCost = 1000000;
			achieve2 = false;
			achieve3 = false;
			upgrade1 = false;
			upgrade2 = false;
			upgrade3 = false;
			science = 0;
			treehouses = 0;
			treehousePopSec = 500;
			treehouseCost = 1000000000;
			farms = 0;
			farmPopSec = 1500;
			farmCost = 100000000000;
			stoneBlockHouses = 0;
			stoneBlockHousePopSec = 25000;
			stoneBlockHouseCost = 10000000000000000;
			blacksmiths = 0;
			blacksmithPopSec = 50000;
			blacksmithCost = 100000000000000000;
			
			
			document.getElementById("gold").innerHTML = prettify(gold, 3);
			document.getElementById("science").innerHTML = prettify(science, 3);
			document.getElementById("population").innerHTML = prettify(population, 3);
			document.getElementById("caves").innerHTML = prettify(caves, 3);
			document.getElementById("caveCost").innerHTML = prettify(caveCost, 3);
			document.getElementById("dirtHuts").innerHTML = prettify(dirtHuts, 3);
			document.getElementById("dirtHutCost").innerHTML = prettify(dirtHutCost, 3);
			document.getElementById("stickHuts").innerHTML = prettify(stickHuts, 3);
			document.getElementById("stickHutCost").innerHTML = prettify(stickHutCost, 3);
			document.getElementById("sodHouses").innerHTML = prettify(sodHouses, 3);
			document.getElementById("sodHouseCost").innerHTML = prettify(sodHouseCost, 3);
			document.getElementById("treehouses").innerHTML = prettify(treehouses, 3);
			document.getElementById("treehouseCost").innerHTML = prettify(treehouseCost, 3);
			document.getElementById("farms").innerHTML = prettify(farms, 3);
			document.getElementById("farmCost").innerHTML = prettify(farmCost, 3);
			document.getElementById("stoneBlockHouses").innerHTML = prettify(stoneBlockHouses, 3);
			document.getElementById("stoneBlockHouseCost").innerHTML = prettify(stoneBlockHouseCost, 3);
			document.getElementById("blacksmiths").innerHTML = prettify(blacksmiths, 3);
			document.getElementById("blacksmithCost").innerHTML = prettify(blacksmithCost, 3);
			document.getElementById("upgradeACost").innerHTML = prettify(upgradeACost, 3);
			document.getElementById("upgradeBCost").innerHTML = prettify(upgradeBCost, 3);
			document.getElementById("upgradeCCost").innerHTML = prettify(upgradeCCost, 3);
			document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
		}
	}
	
	else if  ((Math.pow(allTimeGold/50000, 1/2)-2500) < 0)							//what happens if you dont have enough all time gold to gain from a transcend.
	{
		alert("You don't have enough all time gold to transcend!")
	}
}

function prestigeChecker()			//used to show what youd get without actually updating the values.
{
	tBsToGain = Math.floor((Math.pow(allTimeGold/50000, 1/2) - 2500)) - transcendentBeings;
	if (tBsToGain > 0)
	{
		document.getElementById("tBsToGain").innerHTML = prettify(tBsToGain,3)
	}
	if (tBsToGain <= 0)
	{
		document.getElementById("tBsToGain").innerHTML = 0;
	}
	tKsToGain = Math.floor((Math.pow(allTimeGold/50000, 1/3) - 5000)) - transcendentKnights;
	if (tKsToGain > 0)
	{
		document.getElementById("tKsToGain").innerHTML = prettify(tKsToGain, 3)
	}
	else
	{
		document.getElementById("tKsToGain").innerHTML = 0
	}
}

function calculateOffline()			//at the moment only increases gold (science) gains. might keep it like that as an incentive to stay online.
{												//pretty sure it works
	if (dailyRewardActive)
	{
		d = new Date();
		newDay = d.getTime();
		gold = (((goldPerPop)*population/2) * ((newDay - day)/1000) + gold) - ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000));
		allTimeGold = ((goldPerPop)*population/2) * ((newDay - day)/1000) + allTimeGold  - ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000));
		science = ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000)) + science;
		allTimeScience =  ((population*goldPerPop*goldToScience/2)*((newDay - day)/1000)) + allTimeScience;
	};
	
	if (!dailyRewardActive)
	{
		d = new Date();
		newDay = d.getTime();
		gold = (((goldPerPop)*population) * ((newDay - day)/1000) + gold) - ((population*goldPerPop*goldToScience)*((newDay - day)/1000));
		allTimeGold = ((goldPerPop)*population) * ((newDay - day)/1000) + allTimeGold  - ((population*goldPerPop*goldToScience)*((newDay - day)/1000));
		science = ((population*goldPerPop*goldToScience)*((newDay - day)/1000)) + science;
		allTimeScience =  ((population*goldPerPop*goldToScience)*((newDay - day)/1000)) + allTimeScience;
	};
};

function saveGame()         //Better but still needs some work. purpose is self explanatory...
{
	/*localStorage["gold"] = JSON.encode(gold);
	localStorage["population"] = JSON.encode(population);
	localStorage["caves"] = JSON.encode(caves);
	localStorage["cavesPopSec"] = JSON.encode(cavesPopSec); */
	localStorage.setItem("gold", JSON.stringify(gold));				 //THIS WORKS I THINK!!!!
	localStorage.setItem("population", JSON.stringify(population));
	localStorage.setItem("goldPerPop", JSON.stringify(goldPerPop));			//hopefully each of these saves certain relevant values
	localStorage.setItem("allTimeGold", JSON.stringify(allTimeGold));
	localStorage.setItem("caves", JSON.stringify(caves));
	localStorage.setItem("cavesPopSec", JSON.stringify(cavesPopSec));
	localStorage.setItem("caveCost", JSON.stringify(caveCost));
	localStorage.setItem("dirtHuts", JSON.stringify(dirtHuts));
	localStorage.setItem("dirtHutPopSec", JSON.stringify(dirtHutPopSec));
	localStorage.setItem("dirtHutCost", JSON.stringify(dirtHutCost));
	localStorage.setItem("stickHuts", JSON.stringify(stickHuts));
	localStorage.setItem("stickHutPopSec", JSON.stringify(stickHutPopSec));
	localStorage.setItem("stickHutCost", JSON.stringify(stickHutCost));
	localStorage.setItem("achieve1", JSON.stringify(achieve1));
	localStorage.setItem("achieve2", JSON.stringify(achieve2));
	localStorage.setItem("achieve3", JSON.stringify(achieve3));
	localStorage.setItem("upgradeACost", JSON.stringify(upgradeACost));
	localStorage.setItem("upgradeBCost", JSON.stringify(upgradeBCost));
	localStorage.setItem("upgradeCCost", JSON.stringify(upgradeCCost));
	localStorage.setItem("dayActivated", JSON.stringify(dayActivated));
	localStorage.setItem("timer", JSON.stringify(timer));
	localStorage.setItem("dailyRewardActive", JSON.stringify(dailyRewardActive));
	localStorage.setItem("day", JSON.stringify(day));
	localStorage.setItem("science", JSON.stringify(science));
	localStorage.setItem("allTimeScience", JSON.stringify(allTimeScience));
	localStorage.setItem("goldToScience", JSON.stringify(goldToScience));
	localStorage.setItem("transcendentBeings", JSON.stringify(transcendentBeings));
	localStorage.setItem("sodHouses", JSON.stringify(sodHouses));
	localStorage.setItem("sodHousePopSec", JSON.stringify(sodHousePopSec));
	localStorage.setItem("sodHouseCost", JSON.stringify(sodHouseCost));
	localStorage.setItem("treehouses", JSON.stringify(treehouses));
	localStorage.setItem("treehousePopSec", JSON.stringify(treehousePopSec));
	localStorage.setItem("treehouseCost", JSON.stringify(treehouseCost));
	localStorage.setItem("farms", JSON.stringify(farms));
	localStorage.setItem("farmPopSec", JSON.stringify(farmPopSec));
	localStorage.setItem("farmCost", JSON.stringify(farmCost));
	localStorage.setItem("stoneBlockHouses", JSON.stringify(stoneBlockHouses));
	localStorage.setItem("stoneBlockHousePopSec", JSON.stringify(stoneBlockHousePopSec));
	localStorage.setItem("stoneBlockHouseCost", JSON.stringify(stoneBlockHouseCost));
	localStorage.setItem("blacksmiths", JSON.stringify(blacksmiths));
	localStorage.setItem("blacksmithPopSec", JSON.stringify(blacksmithPopSec));
	localStorage.setItem("blacksmithCost", JSON.stringify(blacksmithCost));
	localStorage.setItem("transcendentKnights", JSON.stringify(transcendentKnights));
	
	gameSaved = true
	localStorage.setItem("gameSaved", JSON.stringify(gameSaved));
};

function loadGame()			//again self explanatory.
{
	/*var gold = JSON.decode(localStorage["gold"]);
	var population = JSON.decode(localStorage["population"]);
	var caves = JSON.decode(localStorage["caves"]);
	var cavesPopSec = JSON.decode(localStorage["cavesPopSec"]) */
	gold = JSON.parse(localStorage.getItem("gold"));
	population = JSON.parse(localStorage.getItem("population"));						//loads each value
	goldPerPop= JSON.parse(localStorage.getItem("goldPerPop"));
	allTimeGold = JSON.parse(localStorage.getItem("allTimeGold"));						//need to add some stuff so it auto updates things like
	caves = JSON.parse(localStorage.getItem("caves"));											//how many caves i own, price of upgrades.
	cavesPopSec = JSON.parse(localStorage.getItem("cavesPopSec"));
	caveCost = JSON.parse(localStorage.getItem("caveCost"));
	dirtHuts = JSON.parse(localStorage.getItem("dirtHuts"));
	dirtHutPopSec = JSON.parse(localStorage.getItem("dirtHutPopSec"));
	dirtHutCost = JSON.parse(localStorage.getItem("dirtHutCost"));
	stickHuts = JSON.parse(localStorage.getItem("stickHuts"));
	stickHutPopSec = JSON.parse(localStorage.getItem("stickHutPopSec"));
	stickHutCost = JSON.parse(localStorage.getItem("stickHutCost"));
	achieve1 = JSON.parse(localStorage.getItem("achieve1"));
	achieve2 = JSON.parse(localStorage.getItem("achieve2"));
	achieve3 = JSON.parse(localStorage.getItem("achieve3"));
	upgradeACost = JSON.parse(localStorage.getItem("upgradeACost"));
	upgradeBCost = JSON.parse(localStorage.getItem("upgradeBCost"));
	upgradeCCost = JSON.parse(localStorage.getItem("upgradeCCost"));
	dayActivated = JSON.parse(localStorage.getItem("dayActivated"));
	timer = JSON.parse(localStorage.getItem("timer"));
	dailyRewardActive = JSON.parse(localStorage.getItem("dailyRewardActive"));
	day = JSON.parse(localStorage.getItem("day"));
	science = JSON.parse(localStorage.getItem("science"));
	allTimeScience = JSON.parse(localStorage.getItem("allTimeScience"));
	goldToScience = JSON.parse(localStorage.getItem("goldToScience"));
	transcendentBeings = JSON.parse(localStorage.getItem("transcendentBeings"));
	sodHouses = JSON.parse(localStorage.getItem("sodHouses"));
	sodHousePopSec = JSON.parse(localStorage.getItem("sodHousePopSec"));
	sodHouseCost = JSON.parse(localStorage.getItem("sodHouseCost"));
	treehouses = JSON.parse(localStorage.getItem("treehouses"));
	treehousePopSec = JSON.parse(localStorage.getItem("treehousePopSec"));
	treehouseCost = JSON.parse(localStorage.getItem("treehouseCost"));
	farms = JSON.parse(localStorage.getItem("farms"));
	farmPopSec = JSON.parse(localStorage.getItem("farmPopSec"));
	farmCost = JSON.parse(localStorage.getItem("farmCost"));
	stoneBlockHouses = JSON.parse(localStorage.getItem("stoneBlockHouses"));
	stoneBlockHousePopSec = JSON.parse(localStorage.getItem("stoneBlockHousePopSec"));
	stoneBlockHouseCost = JSON.parse(localStorage.getItem("stoneBlockHouseCost"));
	blacksmiths = JSON.parse(localStorage.getItem("blacksmiths"));
	blacksmithPopSec = JSON.parse(localStorage.getItem("blacksmithPopSec"));
	blacksmithCost = JSON.parse(localStorage.getItem("blacksmithCost"));
	transcendentKnights = JSON.parse(localStorage.getItem("transcendentKnights"));
	
	
	
	document.getElementById("goldToScienceRatio").innerHTML = goldToScience*100;
	document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
	document.getElementById("transcendentKnights").innerHTML = prettify(transcendentKnights, 3);
	
	calculateOffline()						//adds what you wouldve gained while you were offline.
	
	
	buyMultiple(1);
	prettyUpACost = prettify(upgradeACost,0);
	document.getElementById("upgradeACost").innerHTML = prettyUpACost;
	prettyUpBCost = prettify(upgradeBCost,0);
	document.getElementById("upgradeBCost").innerHTML = prettyUpBCost;
	prettyUpCCost = prettify(upgradeCCost,0);
	document.getElementById("upgradeCCost").innerHTML = prettyUpCCost;
	document.getElementById("caves").innerHTML = caves;
	document.getElementById("dirtHuts").innerHTML = dirtHuts;
	document.getElementById("stickHuts").innerHTML = stickHuts;
	document.getElementById("sodHouses").innerHTML = sodHouses;
	document.getElementById("treehouses").innerHTML = treehouses;
	document.getElementById("farms").innerHTML = farms;
	document.getElementById("stoneBlockHouses").innerHTML = stoneBlockHouses;
	document.getElementById("blacksmiths").innerHTML = blacksmiths;
};

function exportGame()			//could very easily have some unknown problem but for now i believe it works!
{
	window.prompt("Copy this and keep it safe!", window.btoa(JSON.stringify([gold , population, goldPerPop, allTimeGold, caves, cavesPopSec, caveCost, dirtHuts, dirtHutPopSec, dirtHutCost, stickHuts, stickHutPopSec, stickHutCost, achieve1, achieve2, achieve3, upgradeACost, upgradeBCost, upgradeCCost, dayActivated, timer, dailyRewardActive, day, science, allTimeScience, goldToScience, transcendentBeings, sodHouses, sodHousePopSec, sodHouseCost, treehouses, treehousePopSec, treehouseCost, farms, farmPopSec, farmCost, stoneBlockHouses, stoneBlockHousePopSec, stoneBlockHouseCost, blacksmiths, blacksmithPopSec, blacksmithCost, transcendentKnights])))
	//basically whats going on here is:
	//made an array with all important variables saved in it
	//stringified the array with JSON.stringify
	//converted to 64bit something or another with window.btoa
	//and outputted it as a big mess of code
};

function importGame()
{
		//here user inputs their messy code
	gameData = window.prompt("Paste your export code here!", "placeholder")
		//here the messy 64bit or whatever code is made into a string with window.atob
		//then JSON.parse turns it back into an array
		//then i go through each array value and set it to its proper variable.
		//may have some kinks but i believe it is good enough for now!
	saveArray = JSON.parse(window.atob(gameData)) 	
	gold = saveArray[0]
	population = saveArray[1]
	goldPerPop = saveArray[2]
	allTimeGold = saveArray[3]
	caves = saveArray[4]
	cavesPopSec = saveArray[5]
	caveCost = saveArray[6]
	dirtHuts = saveArray[7]
	dirtHutPopSec = saveArray[8]
	dirtHutCost = saveArray[9]
	stickHuts = saveArray[10]
	stickHutPopSec = saveArray[11]
	stickHutCost = saveArray[12]
	achieve1 = saveArray[13]
	achieve2 = saveArray[14]
	achieve3 = saveArray[15]
	upgradeACost = saveArray[16]
	upgradeBCost = saveArray[17]
	upgradeCCost = saveArray[18]
	dayActivated = saveArray[19]
	timer = saveArray[20]
	dailyRewardActive = saveArray[21]
	day = saveArray[22]
	science = saveArray[23]
	allTimeScience = saveArray[24]
	goldToScience = saveArray[25]
	transcendentBeings = saveArray[26]
	sodHouses = saveArray[27]
	sodHousePopSec = saveArray[28]
	sodHouseCost = saveArray[29]
	treehouses = saveArray[30]
	treehousePopSec = saveArray[31]
	treehouseCost = saveArray[32]
	farms = saveArray[33]
	farmPopSec = saveArray[34]
	farmCost = saveArray[35]
	stoneBlockHouses = saveArray[36]
	stoneBlockHousePopSec = saveArray[37]
	stoneBlockHouseCost = saveArray[38]
	blacksmiths = saveArray[39]
	blacksmithPopSec = saveArray[40]
	blacksmithCost = saveArray[41]
	transcendentKnights = saveArray[42]
	
	
	document.getElementById("goldToScienceRatio").innerHTML = goldToScience*100;
	document.getElementById("transcendentBeings").innerHTML = prettify(transcendentBeings, 3);
	document.getElementById("transcendentKnights").innerHTML = prettify(transcendentKnights, 3);
	
	calculateOffline()						//adds what you wouldve gained while you were offline.
	
	
	buyMultiple(1);
	prettyUpACost = prettify(upgradeACost,0);
	document.getElementById("upgradeACost").innerHTML = prettyUpACost;
	prettyUpBCost = prettify(upgradeBCost,0);
	document.getElementById("upgradeBCost").innerHTML = prettyUpBCost;
	prettyUpCCost = prettify(upgradeCCost,0);
	document.getElementById("upgradeCCost").innerHTML = prettyUpCCost;
	document.getElementById("caves").innerHTML = caves;
	document.getElementById("dirtHuts").innerHTML = dirtHuts;
	document.getElementById("stickHuts").innerHTML = stickHuts;
	
}

function prettify(number, decPlaces)			//makes the numbers pretty!!
{
	x = 0
	while (number >= 999.999)							//checks to see if the number is above 1000. if it is it makes it smaller.
	{
		number = number / 1000;					
		x = x + 1;										//used to record how many times it is made smaller.
	};
	switch(x)					//depending on how many times the number is made smaller it gets a name after it!
	{
		case 0:
			x = ""
			break;
		case 1:
			x = "Thousand"
			break;
		case 2:
			x = "Million"
			break;
		case 3:
			x = "Billion"
			break;
		case 4:
			x = "Trillion"
			break;
		case 5:
			x = "Quadrillion"
			break;
		case 6:
			x = "Quintillion"
			break;
		case 7:
			x = "Sextillion"
			break;
		case 8:
			x = "Septillion"
			break;
		case 9:
			x = "Octillion"
			break;
		case 10:
			x = "Nonillion"
			break;
		case 11:
			x = "Decillion"
			break;
		case 12:
			x = "Undecillion"
			break;
		case 13:
			x = "Duodecillion"
			break;
		case 14:
			x = "Tredecillion"
			break;
		default:											//used so if someone gets too high of a number it will still show something rather than nothing.
			x = "*10^"+(x*3)
	};
	return (number.toFixed(decPlaces)+" "+x)		//finishes it all up with how many decimal places i think a number needs based on what i sent it.
};


gameLoop

var gameLoop = window.setInterval(function()			//main game function as of now. 
{
	y = new Date();				//gets the time when the interval starts
	time2 = y.getTime();			//converts the time to a value
	timeBetweenTicks = Math.round(((time2-time1)/1000)*1000)/1000  			//finds the differences between times and rounds it. used to calculate gains regardless of how fast the interval is actually running.
	buildingPopulation(caves, cavesPopSec*timeBetweenTicks);		//activates the gaining pop function
	populationGold(goldPerPop*timeBetweenTicks);						//activates the gaining gold function
	checkAchieve();					//checks for achievements
	stats();							//activates the stats function
	buildingPopulation(dirtHuts, dirtHutPopSec*timeBetweenTicks);
	buildingPopulation(stickHuts, stickHutPopSec*timeBetweenTicks);
	buildingPopulation(sodHouses, sodHousePopSec*timeBetweenTicks);
	buildingPopulation(treehouses, treehousePopSec*timeBetweenTicks);
	buildingPopulation(farms, farmPopSec*timeBetweenTicks);
	buildingPopulation(stoneBlockHouses, stoneBlockHousePopSec*timeBetweenTicks);
	buildingPopulation(blacksmiths, blacksmithPopSec*timeBetweenTicks);
	d = new Date();
	day = d.getTime();
	checkDailyReward();					//checks and updates daily reward info
	prestigeChecker();				//checks and updates prestige info
	
	
	testTimer = testTimer + 1*timeBetweenTicks;
	document.getElementById("testTimer").innerHTML = testTimer;
	
	
	x = new Date();						//gets the time at the end of the interval
	time1 = x.getTime();			//makes it a value
}, 100);	


window.setInterval(function()			//autosaves. every 10 secs as of now.
{
	saveGame();
}, 10000)

