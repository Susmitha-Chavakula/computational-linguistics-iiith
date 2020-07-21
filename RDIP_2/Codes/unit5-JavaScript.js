var engsent = ['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday.','She decorated the cake carefully.','Mary wore a dress with polka dots.'];

var hinsent = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।'];

var hinans = [["Noun","Postposition","Noun","Postposition","Postposition","Noun","Verb"],["Adjective","Noun","Noun","Adverb","Verb"],["Noun","Postposition","Noun","Adjective","Verb","Verb"],["Interjection","Pronoun","Adjective","Verb"],["Noun","Postposition","Noun","Verb","Verb"]];

var sent="", posdrop, posVal,engans=[],index,f=0;
//language selection
function langsel() {
	if(document.getElementById('default').selected)
		alert('Select Language');
	else {
		document.getElementById('dropdownsent').innerHTML = "<select id='dropdownbox2' onchange='dis()'><option id='default1' value='Select a sentence'>---Select a sentence---</option><option id='s1'></option><option id='s2'></option><option id='s3'></option><option id='s4'></option><option id='s5'></option></select>";
		document.getElementById('txt').innerHTML = "";
		document.getElementById('postable').innerHTML = "";
		document.getElementById('submitbtn').innerHTML = "";
		document.getElementById('getbtn').innerHTML = "";
		posVal=[];
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
//sentence display table
function dis() {
	sent = "",posVal=[],engans=[],f=0;
	document.getElementById('txt').innerHTML = "<i>Select the POS tag for corresponding words</i>";
	document.getElementById('getbtn').innerHTML = "";
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
	sent=sent.replace(".","");
	posdrop = "<option id='pos1' value='Noun'>Noun</option><option id='pos2' value='Pronoun'>Pronoun</option><option id='pos3' value='Verb'>Verb</option><option id='pos4' value='Adjective'>Adjective</option><option id='pos5' value='Adverb'>Adverb</option><option id='pos6' value='Determiner'>Determiner</option><option id='pos7' value='Preposition'>Preposition</option><option id='pos8' value='Conjunction'>Conjunction</option><option id='pos9' value='Interjection'>Interjection</option>";
	}
	else if(document.getElementById('hin').selected){
	if(document.getElementById('s1').selected){
		sent=hinsent[0];
		index=0;
	}
	else if(document.getElementById('s2').selected){
		sent=hinsent[1];
		index=1;
	}
	else if(document.getElementById('s3').selected){
		sent=hinsent[2];
		index=2;
	}
	else if(document.getElementById('s4').selected){
		sent=hinsent[3];
		index=3;
	}
	else if(document.getElementById('s5').selected){
		sent=hinsent[4];
		index=4;
	}
	sent=sent.replace("।","");
	posdrop = "<option id='pos1' value='Noun'>Noun</option><option id='pos2' value='Pronoun'>Pronoun</option><option id='pos3' value='Verb'>Verb</option><option id='pos4' value='Adjective'>Adjective</option><option id='pos5' value='Adverb'>Adverb</option><option id='pos6' value='Postposition'>Postposition</option><option id='pos7' value='Conjunction'>Conjunction</option><option id='pos8' value='Interjection'>Interjection</option>";
	}
	sent=sent.split(" ");
	var col="<tr id='rowhead' style='color:brown'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
	for(var i = 0; i < sent.length; i++){
		col = col +"<tr id='id"+i+"'><td>"+sent[i]+"</td><td><select id='posdropdown"+i+"' class='posdropdown' onchange='possel(this.id,this.value)'>"+posdrop+"</select></td><td id='img"+i+"'></td><td id='ans"+i+"'></td></tr>";
		posVal[i]="Noun";
	}
	document.getElementById('postable').innerHTML = col.trim();
	document.getElementById('submitbtn').innerHTML = "<button onclick='posfn()'>Submit</button>";
}
//storing user selected dropdown values
function possel(id, value) {
	if(id==='posdropdown0')
		posVal[0]=value;
	else if(id==='posdropdown1')
		posVal[1]=value;
	else if(id==='posdropdown2')
		posVal[2]=value;
	else if(id==='posdropdown3')
		posVal[3]=value;
	else if(id==='posdropdown4')
		posVal[4]=value;
	else if(id==='posdropdown5')
		posVal[5]=value;
	else if(id==='posdropdown6')
		posVal[6]=value;
	
}
//displaying ans status
function posfn() {
	var idarr = ['img0','img1','img2','img3','img4','img5','img6'];
	if(document.getElementById('eng').selected){
	for(var i=0;i<sent.length;i++)
	{	
		var docx = nlp(sent[i]);
		if((docx.nouns().text())!="")
			engans[i]="Noun";
		else if((docx.pronouns().text())!="")
			engans[i]="Pronoun";
		else if((docx.verbs().text())!="")
			engans[i]="Verb";
		else if((docx.adjectives().text())!="")
			engans[i]="Adjective";
		else if((docx.adverbs().text())!="")
			engans[i]="Adverb";
		else if((docx.prepositions().text())!="")
			engans[i]="Preposition";
		else if((docx.conjunctions().text())!="")
			engans[i]="Conjunction";
		else
			engans[i]="Determiner";		
			console.log(engans);
	}
	for(var i=0;i<sent.length;i++){
		if(posVal[i]==engans[i])
			document.getElementById(idarr[i]).innerHTML='<img src="https://png.vector.me/files/images/1/2/123189/green_tick_clip_art.jpg" width="30" height="30">';
		else{
			f=1;
			document.getElementById(idarr[i]).innerHTML='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsrDscW0GQmdjrKLj2ahgZC_xTMRq4NUMRdka4ii5cNlQYlo&s" width="30" height="30">';
	}}
	}
	else if(document.getElementById('hin').selected){
		for(var i = 0; i < sent.length; i++){
			if(posVal[i]==hinans[index][i])
				document.getElementById(idarr[i]).innerHTML='<img src="https://png.vector.me/files/images/1/2/123189/green_tick_clip_art.jpg" width="30" height="30">';
			else	{
				f=1;
				document.getElementById(idarr[i]).innerHTML='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsrDscW0GQmdjrKLj2ahgZC_xTMRq4NUMRdka4ii5cNlQYlo&s" width="30" height="30">';
		}}
	}
	if(f==1)
		document.getElementById('getbtn').innerHTML = '<button onclick="getans()">Get Answer</button>';
}
//display correct ans
function getans() {
	var ansid = ['ans0','ans1','ans2','ans3','ans4','ans5','ans6'];
	if(document.getElementById('eng').selected){
	for(var i = 0; i < sent.length; i++)
		document.getElementById(ansid[i]).innerHTML = engans[i];
	}
	else if(document.getElementById('hin').selected){
	for(var i = 0; i < sent.length; i++)
		document.getElementById(ansid[i]).innerHTML = hinans[index][i];
	}
	document.getElementById('getbtn').innerHTML = '<button onclick="hideans()">Hide Answer</button>'
}
//toggle
function hideans() {
	var ansid = ['ans0','ans1','ans2','ans3','ans4','ans5','ans6'];
	for(var i = 0; i < sent.length; i++)
		document.getElementById(ansid[i]).innerHTML = "";
	document.getElementById('getbtn').innerHTML = '<button onclick="getans()">Get Answer</button>'
}