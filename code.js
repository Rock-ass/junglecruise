var PSonic = 0;
var PTails = 0;
var PKnuckles = 0;
var PMSonic = 0;
var PTailsD = 0;
var PMKnuckles = 0;
var PMario = 0;
var PLuigi = 0;
var Left = 0;
var Right = 0;
var Play = 0;
var RingScore = 0;
var coin = 0;
var BS;
var Lives = 3;
var gamespeed = 2;
var keyspeed = 1000;
var arrowspeed = 150;
var shiftposition = 0;
var SelectSonic = 75;
var SelectTails = 170;
var SelectKnuckles = 265;
var SelectMetalSonic = 360;
var SelectRay = 455;
var SelectMighty = 550;
var SelectMario = 645;
var SelectLuigi = 740;

//Title Screen
playSound("assets/StardustSpeedway2.mp3", true);
onEvent("Start", "click", function(event) {
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  console.log("Start clicked!");
  CharacterSelectShift();
  setScreen("DeviceSelect");
});

//Devices
onEvent("Desktop", "click", function(event) {
  console.log("Game Speed = 1");
  gamespeed = 1;
  keyspeed = 2000;
  arrowspeed = 200;
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

onEvent("Laptop", "click", function(event) {
  console.log("Game Speed = 2");
  gamespeed = 2;
  keyspeed = 1000;
  arrowspeed = 150;
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

onEvent("Tablet", "click", function(event) {
  console.log("Game Speed = 5");
  gamespeed = 5;
  keyspeed = 800;
  arrowspeed = 100;
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

onEvent("Mobile", "click", function(event) {
  console.log("Game Speed = 10");
  gamespeed = 10;
  keyspeed = 400;
  arrowspeed = 50;
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

// Credits
onEvent("Credits", "click", function(event) {
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Credit");
});

onEvent("Return", "click", function(event) {
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("Character");
});

//Pause
onEvent("Pause", "click", function( ) {
  Pause = 1;
  playSound("MenuAccept.mp3", false);
  hideElement("Pause");
  showElement("Play");
  showElement("Paused");
  showElement("Refresh");
  showElement("Block");
  Check();
});
onEvent("Play", "click", function() {
  playSound("MenuAccept.mp3", false);
  UnPause();
  Check();
});
function Check() {
  ringM();
  spikeM();
}

onEvent("Refresh", "click", function( ) {
  Refresh();
  Begin();
});

//Character
onEvent("CharacterSelDown", "click", function( ) {
  if (shiftposition < 5) {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("assets/MenuBleep.mp3", false);
    shiftposition = shiftposition + 1;
    SelectSonic = SelectSonic - 95;
    SelectTails = SelectTails - 95;
    SelectKnuckles = SelectKnuckles - 95;
    SelectMetalSonic = SelectMetalSonic - 95;
    SelectRay = SelectRay - 95;
    SelectMighty = SelectMighty - 95;
    SelectMario = SelectMario - 95;
    SelectLuigi = SelectLuigi - 95;
    CharacterSelectShift();
  } else {
   shiftposition = 5;
  }
});

onEvent("CharacterSelUp", "click", function( ) {
  if (shiftposition > 0) {
    stopSound("assets/BlueSpheresLoop.mp3");
  playSound("assets/MenuBleep.mp3", false);
  shiftposition = shiftposition - 1;
  SelectSonic = SelectSonic + 95;
  SelectTails = SelectTails + 95;
  SelectKnuckles = SelectKnuckles + 95;
  SelectMetalSonic = SelectMetalSonic + 95;
  SelectRay = SelectRay + 95;
  SelectMighty = SelectMighty + 95;
  SelectMario = SelectMario + 95;
  SelectLuigi = SelectLuigi + 95;
  CharacterSelectShift();  
  } else {
  shiftposition = 0;
  }
});

onEvent("SelSonic", "click", function(event) {
  console.log("SelSonic clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isSonic();
});
  
onEvent("SelTails", "click", function(event) {
  console.log("SelTails clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isTails();
});  
  
onEvent("SelKnuckles", "click", function(event) {
  console.log("SelKunckles clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isKnuckles();
});

onEvent("SelMSonic", "click", function(event) {
  console.log("SelMSonic clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isMSonic();
});

onEvent("SelTailsD", "click", function(event) {
  console.log("SelTailsD clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isTailsD();
});

onEvent("SelMKnuckles", "click", function(event) {
  console.log("SelMKnuckles clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/Ring.gif");
  setImageURL("RingHud", "assets/Ring.gif");
  coin = 0;
  isMKnuckles();
});

onEvent("SelMario", "click", function(event) {
  console.log("SelMario clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/coins.gif");
  setImageURL("RingHud", "assets/coins.gif");
  coin = 1;
  isMario();
});

onEvent("SelLuigi", "click", function(event) {
  console.log("SelLuigi clicked!");
  setImageURL("ring", "assets/r.gif");
  setImageURL("Ringhud", "assets/coins.gif");
  setImageURL("RingHud", "assets/coins.gif");
  coin = 1;
  isLuigi();
});

onEvent("SelMSU", "click", function(event) {
  console.log("SelMSU clicked!");
  UnlockMSonic();
});

onEvent("SelTDU", "click", function(event) {
  console.log("SelTDU clicked!");
  UnlockTailsD();
});

onEvent("SelMKU", "click", function(event) {
  console.log("SelMKU clicked!");
  UnlockMKnuckles();
});

onEvent("SelMU", "click", function(event) {
  console.log("SelMU clicked!");
  UnlockMario();
});

onEvent("SelLU", "click", function(event) {
  console.log("SelLU clicked!");
  UnlockLuigi();
});

//Keyboard
var xVel = 0;
var yVel = 0;
var keys = [false, false, false, false];
var Sonlox = 115;

//Story
onEvent("Begin", "click", function(event) {
  console.log("Begin clicked!");
  Begin();
});
function Begin() {
  stopSound("assets/StardustSpeedway2.mp3");
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  playSound("Go.mp3", false);
  playSound("BlueSpheresStart.mp3", false);
  BS = setTimeout(function() {
    playSound("assets/BlueSpheresLoop.mp3", true);
    if (getTime(BS) > 5500) {
      clearTimeout(BS);
    }
  }, 5500);
  timedLoop(keyspeed, function() {
    if (keys[0]) {
      Left = 1;
      moveSon();
    }
    if (keys[1]) {
      Right = 1;
      moveSon();
    }
  });
  Play = 1;
  Left = 0;
  Right = 0;
  ringM();
  spikeM();
  setScreen("World");
}

//Movement Function
var Sonloy = 300;
var ringx = 135;
var ringy = 235;
var ringo = 0;
var RingCol = 1;
var Sonloy2 = Sonloy + 75;
var Rail = [15, 35, 55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255];
var RailR;
var AS = 0;
var sanic = 0;
var AT = 0;
var tales = 0;
var AK = 0;
var kukles = 0;
var AMS = 0;
var ATD = 0;
var AMK = 0;
var AM = 0;
var AL = 0;
var MS = 0;
var TD = 0;
var MK = 0;
var M = 0;
var L = 0;
var spikex = 195;
var spikey = 235;
var spikeo = 0;
var SpikeCol = 1;
var SpikeR;
var Pause = 0;
SRposit();
onEvent("l1", "mousedown", function(event) {
  if (Pause == 0) {
    Left = 1;
    moveSon();
  }
});
onEvent("r1", "mousedown", function(event) {
  if (Pause == 0) {
    Right = 1;
    moveSon();
  }
});
onEvent("l1", "mouseup", function(event) {
  Left = 0;
});
onEvent("r1", "mouseup", function(event) {
  Right = 0;
});
function moveSon() {
  if (Left == 1) {
    Sonlox = Sonlox - 20;
    setPosition("Sonic", Sonlox, 300, -100, 115);
    setTimeout(function() {
      if (Left == 1) {
        moveSon();
      }
    }, arrowspeed);
    SRposit();
  }
  if (getXPosition("Sonic") < 0) {
    Sonlox = -5;
    setPosition("Sonic", Sonlox, 300, -100, 115);
  }
  
  if (Right == 1) {
    Sonlox = Sonlox + 20;
    setPosition("Sonic", Sonlox, 300, 100, 115);
    setTimeout(function() {
      if (Right == 1) {
        moveSon();
      }
    }, arrowspeed);
    SRposit();
  }
  if (getXPosition("Sonic") > 250) {
    Sonlox = 235;
    setPosition("Sonic", Sonlox, 300, -100, 115);
  }
}


//Ring
function ringCollect() {
  if (Sonlox == ringx - 20 && Sonloy2 == ringy + 40 || Sonlox == ringx - 40 && Sonloy2 == ringy + 40 || Sonlox == ringx - 20 && Sonloy == ringy || (Sonlox == ringx - 40) && Sonloy == ringy) {
    SRposit();
    hideElement("ring");
    if (RingCol == 1) {
      RingScore++;
      if (coin == 1) {
        playSound("assets/Coin.mp3", false);
      } else {
        playSound("assets/Ring.mp3", false);
      }
      setNumber("RingScore", RingScore);
      setNumber("RingScoreB", RingScore);
      RingCol = 0;
    }
    if (RingScore > 49) {
      Awards();
    }
    if (RingScore > 99) {
      Stars();
    }
  }
}
function PreventRing() {
  if (getYPosition("ring") > 449) {
    ringo = 1;
    ringy = 235;
    RailR = randomNumber(12);
    ringx = Rail[RailR];
    setPosition("ring", ringx, ringy, -100, 115);
    if (RingCol == 0) {
      RingCol = 1;
      showElement("ring");
    }
    ringo = 0;
  }
}

function ringM() {
  if (Pause == 0) {
    setTimeout(function() {
      if (Play == 1&&Pause == 0) {
        ringy = ringy + gamespeed;
        setPosition("ring", ringx, ringy, 45, 45);
        PreventRing();
        ringCollect();
        ringM();
      }
    }, 1);
  }
}


//Spike
function spikeCollect() {
  if (Sonlox == spikex - 20 && Sonloy2 == spikey + 40 || Sonlox == spikex - 40 && Sonloy2 == spikey + 40 || Sonlox == spikex - 20 && Sonloy == spikey || (Sonlox == spikex - 40) && Sonloy == spikey) {
    SRposit();
    hideElement("spike");
    if (SpikeCol == 1) {
      Lives--;
      playSound("Hurt.mp3", false);
      setNumber("LifeN", Lives);
      setNumber("LifeNB", Lives);
      SpikeCol = 0;
      Life();
    }
  }
}
function PreventSpike() {
  if (getYPosition("spike") > 449) {
    spikeo = 1;
    spikey = 235;
    SpikeR = randomNumber(12);
    spikex = Rail[SpikeR];
    setPosition("spike", spikex, spikey, -100, 115);
    if (SpikeCol == 0) {
      SpikeCol = 1;
      showElement("spike");
    }
    spikeo = 0;
  }
}

function spikeM() {
  if (Pause == 0) {
    setTimeout(function() {
      if (Play == 1&&Pause == 0) {
        spikey = spikey + gamespeed;
        setPosition("spike", spikex, spikey, 45, 45);
        PreventSpike();
        spikeCollect();
        spikeM();
      }
    }, 1);
  }
}

//Characters and other
function CharacterSelectShift() {
  setPosition("SelSonic", 5, SelectSonic, 310, 80);
  setPosition("100Sonic", 285, SelectSonic, 30, 30);
  setPosition("SelTails", 5, SelectTails, 310, 80);
  setPosition("100Tails", 285, SelectTails, 30, 30);
  setPosition("SelKnuckles", 5, SelectKnuckles, 310, 80);
  setPosition("100Knuckles", 285, SelectKnuckles, 30, 30);
  setPosition("SelMSonic", 5, SelectMetalSonic, 310, 80);
  setPosition("SelMSU", 5, SelectMetalSonic, 310, 80);
  setPosition("100Metal", 285, SelectMetalSonic, 30, 30);
  setPosition("SelTailsD", 5, SelectRay, 310, 80);
  setPosition("SelTDU", 5, SelectRay, 310, 80);
  setPosition("100Ray", 285, SelectRay, 30, 30);
  setPosition("SelMKnuckles", 5, SelectMighty, 310, 80);
  setPosition("SelMKU", 5, SelectMighty, 310, 80);
  setPosition("100Mighty", 285, SelectMighty, 30, 30);
  setPosition("SelMario", 5, SelectMario, 310, 80);
  setPosition("SelMU", 5, SelectMario, 310, 80);
  setPosition("100Mario", 285, SelectMario, 30, 30);
  setPosition("SelLuigi", 5, SelectLuigi, 310, 80);
  setPosition("SelLU", 5, SelectLuigi, 310, 80);
  setPosition("100Luigi", 285, SelectLuigi, 30, 30);
}
function SRposit() {
  console.log("SX = " + Sonlox);
  console.log("RX = " + ringx);
  console.log("SY = " + Sonloy);
  console.log("RY = " + ringy);
  console.log("SPX = " + spikex);
  console.log("SPY = " + spikey);
}
function Results() {
  if (RingScore > 99) {
    setImageURL("Rank", "assets/X.gif");
  } else if ((RingScore > 49)) {
    setImageURL("Rank", "S.gif");
  } else if ((RingScore > 39)) {
    setImageURL("Rank", "assets/A.gif");
  } else if ((RingScore > 29)) {
    setImageURL("Rank", "B.gif");
  } else if ((RingScore > 19)) {
    setImageURL("Rank", "C.gif");
  } else if ((RingScore > 9)) {
    setImageURL("Rank", "D.gif");
  } else {
    setImageURL("Rank", "E.gif");
  }
}
function isSonic() {
  playSound("Sonic.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "assets/SonicR.gif");
  setImageURL("Life", "LSonic.gif");
  PSonic = 1;
  PTails = 0;
  PKnuckles = 0;
  PMSonic = 0;
  PTailsD = 0;
  PMKnuckles = 0;
  PMario = 0;
  PLuigi = 0;
  playSound("MenuAccept.mp3", false);
  setScreen("Story");
}

function isTails() {
  playSound("Tails.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "assets/TailsR.gif");
  setImageURL("Life", "LTails.gif");
  PTails = 1;
  PKnuckles = 0;
  PSonic = 0;
  PMSonic = 0;
  PTailsD = 0;
  PMKnuckles = 0;
  PMario = 0;
  PLuigi = 0;
  setScreen("Story");
}

function isKnuckles() {
  playSound("Knuckles.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "assets/KnucklesR.gif");
  setImageURL("Life", "LKnuckles.gif");
  PKnuckles = 1;
  PTails = 0;
  PSonic = 0;
  PMSonic = 0;
  PTailsD = 0;
  PMKnuckles = 0;
  PMario = 0;
  PLuigi = 0;
  setScreen("Story");
}

function isMSonic() {
  playSound("Sonic.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "assets/MSonicR.gif");
  setImageURL("Life", "LMSonic.gif");
  PMSonic = 1;
  PSonic = 0;
  PTails = 0;
  PKnuckles = 0;
  PTailsD = 0;
  PMKnuckles = 0;
  PMario = 0;
  PLuigi = 0;
  setScreen("Story");
}

function UnlockMSonic() {
  var MSU = prompt("Type in the Code to Unlock Metal Sonic (Case Sensitive)");
  if (MSU == "SFMS") {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    sanic = 1;
    hideElement("SelMSU");
    showElement("SelMSonic");
    MS = 1;
  } else {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("assets/Fail.mp3", false);
  }
}

function isTailsD() {
  playSound("RayA.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "Ray R.gif");
  setImageURL("Life", "LifeRay.gif");
  PTailsD = 1;
  PTails = 0;
  PKnuckles = 0;
  PSonic = 0;
  PMSonic = 0;
  PMKnuckles = 0;
  PMario = 0;
  PLuigi = 0;
  setScreen("Story");
}

function UnlockTailsD() {
  var TDU = prompt("Type in the Code to Unlock Ray (Case Sensitive)");
  if (TDU == "SSRS") {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    tales = 1;
    hideElement("SelTDU");
    showElement("SelTailsD");
    TD = 1;
  } else {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("assets/Fail.mp3", false);
  }
}

function isMKnuckles() {
  playSound("MightyA.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "Mighty R.gif");
  setImageURL("Life", "LifeMighty.gif");
  PMKnuckles = 1;
  PKnuckles = 0;
  PTails = 0;
  PSonic = 0;
  PMSonic = 0;
  PTailsD = 0;
  PMario = 0;
  PLuigi = 0;
  setScreen("Story");
}

function UnlockMKnuckles() {
  var MKU = prompt("Type in the Code to Unlock Mighty (Case Sensitive)");
  if (MKU == "KCMA") {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    kukles = 1;
    hideElement("SelMKU");
    showElement("SelMKnuckles");
    MK = 1;
  } else {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("assets/Fail.mp3", false);
  }
}

function isMario() {
  playSound("Mario.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "Super MarioR.gif");
  setImageURL("Life", "LMario.gif");
  PMario = 1;
  PLuigi = 0;
  PMKnuckles = 0;
  PKnuckles = 0;
  PTails = 0;
  PSonic = 0;
  PMSonic = 0;
  PTailsD = 0;
  setScreen("Story");
}

function UnlockMario() {
  var MU = prompt("Type in the Code to Unlock Mario (Case Sensitive)");
  if (MU == "SOMARI") {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    hideElement("SelMU");
    showElement("SelMario");
    M = 1;
  } else {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("assets/Fail.mp3", false);
  }
}

function isLuigi() {
  playSound("Luigi.mp3", false);
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setImageURL("Sonic", "Super LuigiR.gif");
  setImageURL("Life", "LLuigi.gif");
  PLuigi = 1;
  PMario = 0;
  PMKnuckles = 0;
  PKnuckles = 0;
  PTails = 0;
  PSonic = 0;
  PMSonic = 0;
  PTailsD = 0;
  setScreen("Story");
}

function UnlockLuigi() {
  var LU = prompt("Type in the Code to Unlock Luigi (Case Sensitive)");
  if (LU == "TALUIG") {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("MedalCaught.mp3", false);
    hideElement("SelLU");
    showElement("SelLuigi");
    L = 1;
  } else {
    stopSound("assets/BlueSpheresLoop.mp3");
    playSound("assets/Fail.mp3", false);
  }
}

function Awards() {
  if (PSonic == 1 && AS == 0) {
    showElement("50Sonic");
    playSound("Continue.mp3", false);
    AS = 1;
    sanic = 2;
  }
  if (PTails == 1 && AT == 0) {
    showElement("50Tails");
    playSound("Continue.mp3", false);
    AT = 1;
    tales = 2;
  }
  if (PKnuckles == 1 && AK == 0) {
    showElement("50Knuckles");
    playSound("Continue.mp3", false);
    AK = 1;
    kukles = 2;
  }
  if (PMSonic == 1 && AMS == 0) {
    showElement("50MSonic");
    playSound("Continue.mp3", false);
    AMS = 1;
  }
  if (PTailsD == 1 && ATD == 0) {
    showElement("50TailsD");
    playSound("Continue.mp3", false);
    ATD = 1;
  }
  if (PMKnuckles == 1 && AMK == 0) {
    showElement("50MKnuckles");
    playSound("Continue.mp3", false);
    AMK = 1;
  }
  if (PMario == 1 && AM == 0) {
    showElement("50Mario");
    playSound("Continue.mp3", false);
    AM = 1;
  }
  if (PLuigi == 1 && AL == 0) {
    showElement("50Luigi");
    playSound("Continue.mp3", false);
    AL = 1;
  }
}

function Stars() {
  if (PSonic == 1 && AS == 1) {
    showElement("100Sonic");
    playSound("Continue.mp3", false);
    AS = 3;
  }
  if (PTails == 1 && AT == 1) {
    showElement("100Tails");
    playSound("Continue.mp3", false);
    AT = 3;
  }
  if (PKnuckles == 1 && AK == 1) {
    showElement("100Knuckles");
    playSound("Continue.mp3", false);
    AK = 3;
  }
  if (PMSonic == 1 && AMS == 1) {
    showElement("100Metal");
    playSound("Continue.mp3", false);
    AMS = 3;
  }
  if (PTailsD == 1 && ATD == 1) {
    showElement("100Ray");
    playSound("Continue.mp3", false);
    ATD = 3;
  }
  if (PMKnuckles == 1 && AMK == 1) {
    showElement("100Mighty");
    playSound("Continue.mp3", false);
    AMK = 3;
  }
  if (PMario == 1 && AM == 1) {
    showElement("100Mario");
    playSound("Continue.mp3", false);
    AM = 3;
  }
  if (PLuigi == 1 && AL == 1) {
    showElement("100Luigi");
    playSound("Continue.mp3", false);
    AL = 3;
  }
}

function endChar() {
  if (PSonic == 1) {
    setImageURL("Name", "Sonic.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("SonicWins.mp3", false);
  }
  if (PTails == 1) {
    setImageURL("Name", "Tails.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("TailsWins.mp3", false);
  }
  if (PKnuckles == 1) {
    setImageURL("Name", "Knuckles.gif");
    setPosition("Name", 10, 7, 215, 35);
    playSound("KnuxWins.mp3", false);
  }
  if (PMSonic == 1) {
    setImageURL("Name", "MSonic.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("SonicWins.mp3", false);
  }
  if (PTailsD == 1) {
    setImageURL("Name", "RayN.gif");
    setPosition("Name", -5, 5, 215, 35);
    playSound("RayWin.mp3", false);
  }
  if (PMKnuckles == 1) {
    setImageURL("Name", "MightyN.gif");
    setPosition("Name", 10, 7, 215, 35);
    playSound("MightyWin.mp3", false);
  }
  if (PMario == 1) {
    setImageURL("Name", "Mario.png");
    setPosition("Name", -5, 5, 215, 35);
    playSound("MarioWins.mp3", false);
  }
  if (PLuigi == 1) {
    setImageURL("Name", "Luigi.png");
    setPosition("Name", -5, 5, 215, 35);
    playSound("LuigiWins.mp3", false);
  }
}
function Life() {
  if (Lives == 0) {
  stopSound("BlueSpheresStart.mp3");
  stopSound("assets/BlueSpheresLoop.mp3");
  setNumber("RingRB", RingScore);
  setNumber("RingR", RingScore);
  playSound("SSExit.mp3", false);
  
  Results();
  endChar();
  if (PSonic == 1 && sanic == 2 && MS == 0) {
    playSound("Event.mp3", false);
    setScreen("Unlocked");
    setImageURL("UName", "MSonic.gif");
    setPosition("UName", 45, 150, 215, 35);
    setText("Code", "SFMS");
  } else if (PTails == 1 && tales == 2 && TD == 0) {
    playSound("Event.mp3", false);
    setScreen("Unlocked");
    setImageURL("UName", "RayN.gif");
    setPosition("UName", 45, 150, 215, 35);
    setText("Code", "SSRS");
  } else if (PKnuckles == 1 && kukles == 2 && MK == 0) {
    playSound("Event.mp3", false);
    setScreen("Unlocked");
    setImageURL("UName", "MightyN.gif");
    setPosition("UName", 60, 152, 215, 35);
    setText("Code", "KCMA");
  } else {
    console.log("Results clicked!");
    playSound("ActClear.mp3", false);
    setScreen("Results");
  }
  }
}
onEvent("Cont", "click", function(event) {
  console.log("Results clicked!");
  playSound("ActClear.mp3", false);
  setScreen("Results");
});


//Resets
onEvent("Block", "click", function(event) {
  Refresh();
});

onEvent("Restart", "click", function(event) {
  Refresh();
});
onEvent("SetSpeed", "click", function(event) {
  console.log("SetSpeed clicked!");
  stopSound("assets/BlueSpheresLoop.mp3");
  playSound("MenuAccept.mp3", false);
  setScreen("DeviceSelect");
});
function Refresh() {
  stopSound("BlueSpheresStart.mp3");
  stopSound("assets/BlueSpheresLoop.mp3");
  stopSound("ActClear.mp3");
  stopSound("SSExit.mp3");
  playSound("MenuAccept.mp3", false);
  playSound("assets/StardustSpeedway2.mp3", true);
  UnPause();
  Play = 0;
  console.log("Sonic clicked!");
  Sonlox = 115;
  Sonloy = 300;
  ringx = 135;
  ringy = 235;
  ringo = 0;
  RingCol = 1;
  RingScore = 0;
  Left = 0;
  Right = 0;
  Lives = 3;
  spikex = 195;
  spikey = 235;
  spikeo = 0;
  SpikeCol = 1;
  setNumber("RingScore", RingScore);
  setNumber("RingScoreB", RingScore);
  setNumber("RingRB", RingScore);
  setNumber("RingR", RingScore);
  setNumber("LifeN", Lives);
  setNumber("LifeNB", Lives);
  showElement("spike");
  showElement("ring");
  setPosition("Sonic", Sonlox, 300, -100, 115);
  setScreen("Character");
}

//Keyboard
onEvent("World", "keydown", function(event) {
  if (Pause == 0) {
    if (event.key == "Up") {
      keys[2] = false;
    } else if ((event.key == "Down")) {
      keys[3] = false;
    } else if ((event.key == "Left")) {
      keys[0] = true;
      Left = 1;
    } else if ((event.key == "Right")) {
      keys[1] = true;
      Right = 1;
    }
  }
});
onEvent("World", "keyup", function(event) {
  if (Pause == 0) {
    if (event.key == "Up") {
      keys[2] = false;
    } else if ((event.key == "Down")) {
      keys[3] = false;
    } else if ((event.key == "Left")) {
      keys[0] = false;
      Left = 0;
    } else if ((event.key == "Right")) {
      keys[1] = false;
      Right = 0;
    }
  }
});

function UnPause() {
  Pause = 0;
  hideElement("Play");
  showElement("Pause");
  hideElement("Paused");
  hideElement("Refresh");
  hideElement("Block");
}
