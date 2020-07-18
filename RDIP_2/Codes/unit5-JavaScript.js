﻿var engsent = ['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday.','She decorated the cake carefully.','Mary wore a dress with polka dots.'];

var hinsent = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।'];

var sent="";
function langsel() {
	if(document.getElementById('default').selected)
		alert('Select Language');
	else {
		document.getElementById('dropdownsent').innerHTML = "<select id='dropdownbox2' onchange='dis()'><option id='default1' value='Select a sentence'>---Select a sentence---</option><option id='s1'></option><option id='s2'></option><option id='s3'></option><option id='s4'></option><option id='s5'></option></select>";
		document.getElementById('txt').innerHTML = "";
		document.getElementById('postable').innerHTML = "";
		if(document.getElementById('eng').selected){
			document.getElementById('s1').innerHTML = engsent[0];
			document.getElementById('s2').innerHTML = engsent[1];
			document.getElementById('s3').innerHTML = engsent[2];
			document.getElementById('s4').innerHTML = engsent[3];
			document.getElementById('s5').innerHTML = engsent[4];
		}
		else if(document.getElementById('hin').selected){
			document.getElementById('s1').innerHTML = hinsent[0];
			document.getElementById('s2').innerHTML = hinsent[1];
			document.getElementById('s3').innerHTML = hinsent[2];
			document.getElementById('s4').innerHTML = hinsent[3];
			document.getElementById('s5').innerHTML = hinsent[4];
		}
	}
}
function dis() {
	sent = "";
	document.getElementById('txt').innerHTML = "<i>Select the POS tag for corresponding words</i>";
	if(document.getElementById('eng').selected){
	if(document.getElementById('s1').selected)
		sent=engsent[0];
	else if(document.getElementById('s2').selected)
		sent=engsent[1];
	else if(document.getElementById('s3').selected)
		sent=engsent[2];
	else if(document.getElementById('s4').selected)
		sent=engsent[3];
	else if(document.getElementById('s5').selected)
		sent=engsent[4];
	}
	else if(document.getElementById('hin').selected){
	if(document.getElementById('s1').selected)
		sent=hinsent[0];
	else if(document.getElementById('s2').selected)
		sent=hinsent[1];
	else if(document.getElementById('s3').selected)
		sent=hinsent[2];
	else if(document.getElementById('s4').selected)
		sent=hinsent[3];
	else if(document.getElementById('s5').selected)
		sent=hinsent[4];
	}
	sent=sent.split(" ");
	var col="<tr id='rowhead' style='color:brown'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
	for(var i = 0; i < sent.length; i++)
		col = col +"<tr id='id"+i+"'><td>"+sent[i]+"</td><td></td><td></td><td></td></tr>";

	document.getElementById('postable').innerHTML = col.trim();

}
