var engsent = ['The child liked the chocolate.','She was stopped by the bravest knight.','Mary baked a cake for his birthday.','She decorated the cake carefully.','Mary wore a dress with polka dots.'];

var hinsent = ['राम ने सीता के लिए फल तोड़ा।','छोटे बच्चे पाठशाला जल्दी आयेंगे।','मेहनत का फल मीठा होता है।','वाह! वह खूबसूरत है।','पेड़ से पत्ते गिर गए।'];

function langsel() {
	if(document.getElementById("default").selected)
		alert('Select Language');
	else {
		document.getElementById("dropdownsent").innerHTML = "<select id='dropdownbox2'><option id='default1' value='Select a sentence'>---Select a sentence---</option><option id='s1'></option><option id='s2'></option><option id='s3'></option><option id='s4'></option><option id='s5'></option></select>";
		if(document.getElementById("eng").selected){
			document.getElementById('s1').innerHTML = engsent[0];
			document.getElementById('s2').innerHTML = engsent[1];
			document.getElementById('s3').innerHTML = engsent[2];
			document.getElementById('s4').innerHTML = engsent[3];
			document.getElementById('s5').innerHTML = engsent[4];
		}
		else if(document.getElementById("hin").selected){
			document.getElementById('s1').innerHTML = hinsent[0];
			document.getElementById('s2').innerHTML = hinsent[1];
			document.getElementById('s3').innerHTML = hinsent[2];
			document.getElementById('s4').innerHTML = hinsent[3];
			document.getElementById('s5').innerHTML = hinsent[4];
		}
	}
}