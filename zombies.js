function resetAll(elem){
	document.getElementById("2010").classList.remove("white");
	document.getElementById("2010").innerHTML = "2010";
	document.getElementById("2013").classList.remove("white");
	document.getElementById("2013").innerHTML = "2013";
}

function showText1(elem){
	document.getElementById ("2010").innerHTML="The"
	document.getElementById ("2010").classList.toggle("white");
}

function showText2(elem){
	document.getElementById ("2013").innerHTML="End"
	document.getElementById ("2013").classList.toggle("white");
}

function playsound1(e){
	document.getElementById("jug").play();
	document.getElementById("speed").pause();
	document.getElementById("stamin").pause();
	document.getElementById("double").pause();
}

function playsound2(e){
	document.getElementById("speed").play();
	document.getElementById("jug").pause();
	document.getElementById("stamin").pause();
	document.getElementById("double").pause();
}

function playsound3(e){
	document.getElementById("stamin").play();
	document.getElementById("speed").pause();
	document.getElementById("jug").pause();
	document.getElementById("double").pause();
}

function playsound4(e){
	document.getElementById("double").play();
	document.getElementById("speed").pause();
	document.getElementById("stamin").pause();
	document.getElementById("jug").pause();
}

