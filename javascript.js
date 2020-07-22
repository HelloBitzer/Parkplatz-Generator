 function start()
{
	/* Funktion zum erstellen der Parkplätze an den Button übergeben*/
	document.getElementById("Startbutton").addEventListener("click",ParkplatzErzeugen);
}

function ParkplatzErzeugen()
{
	/*leeren des Parkplatz bereiches wenn elemente vorhanden sind*/
	var count = document.getElementById("Parkplatz").childElementCount;
	console.log(count);
	for(var i = 1; i <= count; i++)
	{
		var kind = document.getElementById("Parkplatz").firstChild;
		document.getElementById("Parkplatz").removeChild(kind);
	}
	
	/*Parkplatz Parameter von der index.html auslesen */
	var Strassen = parseInt(document.getElementById("EingabeStrassenWahl").value);
	var Parkplaetze = parseInt(document.getElementById("EingabeParkplatzWahl").value);
	
	/*erzeugen der einzelnen Durchfahrtsstrassen*/
	for(var j = 1 ; j <= Strassen; j++)/* beim erzeugen von 1 Durchfahrtsstrassen = P1_1_1 ("P"+j+"_1_"+i)  
		                               beim erzeugen von 2 Durchfahrtsstrassen = P2_1_1  j=Durchfahrtsstrasse 
									   beim erzeugen von 5 Parkplätzen         = P1_1_5  (i=Parkplätze)*/
	{
		
		/*Platzhalter für Durchfahrtsstrasse */
		var durchfahrtsstrasse = document.createElement("div");
		/*eigenschaften für die durchfahrtsstrasse festlegen (z.b. ...column="2/ span 1" setzt die 2. Reihe im Grid fest)*/
		durchfahrtsstrasse.style.gridcolumn = "2 / span 1";
		durchfahrtsstrasse.style.gridrow = "1 / span" + Parkplaetze;
		durchfahrtsstrasse.style.background = "gray";
		durchfahrtsstrasse.style.width = "100px";	
		/*Platzhalter für durchfahrtsstrasse inkl. Parkplätze*/		
		var aktuelleStrasse =	document.createElement("div");
		/*setzten der Klasse um CSS zu nutzen*/
		aktuelleStrasse.className = "DStrassen";
		
		/*erzeugen der einzelnen Parplätze auf der Linken Seite jeder Durchfahrtsstrasse*/
		var pr1 =document.createElement("div");
		/*erzeugen der einzelnen Parkplätze Links der durchfahrtsstrasse*/
		for(var i = 1 ; i <= Parkplaetze; i++)
		{
		/*erstellen des Platzhalters für einen einzelnen Parkplatz*/
		var aktuellesDIV =	document.createElement("div");
		var aktuelleID = "P"+j+"_1_"+i;
		console.log(aktuelleID);
		aktuellesDIV.id = aktuelleID;
		aktuellesDIV.style.border= "1px solid white";
		aktuellesDIV.style.margin = "10px";
		aktuellesDIV.style.width = "100px";		
		aktuellesDIV.style.height = "50px";
		/*Übergeben der Funktion damit Parkplätze "belegt" werden können*/
		aktuellesDIV.addEventListener("click",function() {klickhinzu(this.id)});
		/*den Parkplatz als "kindelement" an das übergeordnete element übergebe*/
		pr1.appendChild(aktuellesDIV);
		}
		
		/*erzeugen der einzelnen Parplätze auf der rechten Seite jeder Durchfahrtsstrasse*/
		var pr2 =document.createElement("div");
		for(var i = 1 ; i <= Parkplaetze; i++)
		{
		var aktuellesDIV =	document.createElement("div");
		aktuellesDIV.id = "P"+j+"_2_"+i;
		aktuellesDIV.style.border= "1px solid white";
		aktuellesDIV.style.margin = "10px";
		aktuellesDIV.style.width = "100px";		
		aktuellesDIV.style.height = "50px";		
		aktuellesDIV.addEventListener("click",function() {klickhinzu(this.id)});
		pr2.appendChild(aktuellesDIV);
		}
		/*zusammenfügen der parkplätze und der Strasse um es alsa ein element in die webseite mit einzubauen*/
		aktuelleStrasse.appendChild(pr1);
		aktuelleStrasse.appendChild(durchfahrtsstrasse);
		aktuelleStrasse.appendChild(pr2);
		/*Das element(div) in die webseite einbinden*/
		document.getElementById("Parkplatz").appendChild(aktuelleStrasse);					
	}
}

/*funktion die das einfärben des Parkplatzes ermöglicht*/
function klickhinzu(id)
{
	console.log(id); 
	var farbe = document.getElementById(id).style.backgroundColor;
	console.log(farbe); 
	if(farbe == "red")
	{	
		document.getElementById(id).style.background = "gray";
		document.getElementById(id).style.backgroundImage = "";

	}
	else
	{
	document.getElementById(id).style.background = "red";
	document.getElementById(id).style.backgroundImage = "url(auto.png)";
	document.getElementById(id).style.backgroundSize = "Cover";

	
	}
}