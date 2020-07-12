var engsent = '{"sentences":['+'{"firstsent":"John ate an apple before afternoon", "secondsent":"before afternoon John ate an apple", "thirdsent":"John before afternoon ate an apple" },' +
         		    '{"firstsent":"some students like to study in the night", "secondsent":"at night some students like to study"},' +
			    '{"firstsent":"John and Mary went to church", "secondsent":"Mary and John went to church"},' +
			    '{"firstsent":"John went to church after eating", "secondsent":"after eating John went to church", "thirdsent":"John after eating went to church" },' +
         		    '{"firstsent":"did he go to market", "secondsent":"he did go to market"},' +
			    '{"firstsent":"the woman who called my sister sells cosmetics", "secondsent":"the woman who sells cosmetics called my sister", "thirdsent":"my sister who sells cosmetics called the woman", "fourthsent":"my sister who called the woman sells cosmetics" },' +
         		    '{"firstsent":"John goes to the library and studies", "secondsent":"John studies and goes to the library"},' +
			    '{"firstsent":"John ate an apple so did she", "secondsent":"she ate an apple so did John"},' +
			    '{"firstsent":"the teacher returned the book after she noticed the error", "secondsent":"the teacher noticed the error after she returned the book", "thirdsent":"after the teacher returned the book she noticed the error", "fourthsent":"after the teacher noticed the error she returned the book", "fifthsent":"she returned the book after the teacher noticed the error", "sixthsent":"she noticed the error after the teacher returned the book", "seventhsent":"after she returned the book the teacher noticed the error", "eightsent":"after she noticed the error the teacher returned the book" },' +
         		    '{"firstsent":"I told her that I bought a book yesterday", "secondsent":"I told her yesterday that I bought a book", "thirdsent":"yesterday I told her that I bought a book", "fourthsent":"I bought a book that I told her yesterday", "fifthsent":"I bought a book yesterday that I told her", "sixthsent":"yesterday I bought a book that I told her" }]}';
obj = JSON.parse(engsent);


var hinsent = '{"sentences":['+'{"firstsent":"राम और श्याम बाजार गयें", "secondsent":"राम और श्याम गयें बाजार", "thirdsent":"बाजार गयें राम और श्याम" , "fourthsent":"गयें बाजार राम और श्याम"},' +
			       '{"firstsent":"राम सोया और श्याम भी", "secondsent":"श्याम सोया और राम भी", "thirdsent":"सोया श्याम और राम भी" , "fourthsent":"सोया राम और श्याम भी"},' +
			       '{"firstsent":"मैंने उसे बताया कि राम सो रहा है", "secondsent":"मैंने उसे बताया कि सो रहा है राम", "thirdsent":"उसे मैंने बताया कि राम सो रहा है", "fourthsent":"उसे मैंने बताया कि सो रहा है राम", "fifthsent":"मैंने बताया उसे कि राम सो रहा है", "sixthsent":"मैंने बताया उसे कि सो रहा है राम", "seventhsent":"उसे बताया मैंने कि राम सो रहा है", "eightsent":"उसे बताया मैंने कि सो रहा है राम", "ninthsent":"बताया मैंने उसे कि राम सो रहा है", "tenthsent":"बताया मैंने उसे कि सो रहा है राम", "eleventhsent":"बताया उसे मैंने कि राम सो रहा है", "twelvesent":"बताया उसे मैंने कि सो रहा है राम" },' +
			       '{"firstsent":"राम खाकर सोया", "secondsent":"खाकर राम सोया", "thirdsent":"राम सोया खाकर" , "fourthsent":"खाकर सोया राम", "fifthsent":"सोया राम खाकर", "sixthsent":"सोया खाकर राम"},' +
			       '{"firstsent":"बिल्लियों को मारकर कुत्ता सो गया", "secondsent":"मारकर बिल्लियों को कुत्ता सो गया", "thirdsent":"बिल्लियों को मारकर सो गया कुत्ता" , "fourthsent":"मारकर बिल्लियों को सो गया कुत्ता", "fifthsent":"कुत्ता सो गया बिल्लियों को मारकर", "sixthsent":"कुत्ता सो गया मारकर बिल्लियों को", "seventhsent":"सो गया कुत्ता बिल्लियों को मारकर", "eightsent":"सो गया कुत्ता मारकर बिल्लियों को"},' +
			       '{"firstsent":"एक लाल किताब वहाँ है", "secondsent":"एक लाल किताब है वहाँ", "thirdsent":"वहाँ है एक लाल किताब" , "fourthsent":"है वहाँ एक लाल किताब"},' +
			       '{"firstsent":"एक बड़ी सी किताब वहाँ है", "secondsent":"एक बड़ी सी किताब है वहाँ", "thirdsent":"बड़ी सी एक किताब वहाँ है" , "fourthsent":"बड़ी सी एक किताब है वहाँ", "fifthsent":"वहाँ है एक बड़ी सी किताब", "sixthsent":"वहाँ है बड़ी सी एक किताब", "seventhsent":"है वहाँ एक बड़ी सी किताब", "eightsent":"है वहाँ बड़ी सी एक किताब" }]}' ;
obj1 = JSON.parse(hinsent);
var formedsent = "",addbtn="";
			 
function langsel(){	
    if(document.getElementById("default").selected)
		alert('Select Language');
    else {
	document.getElementById("innersentdemo").innerHTML = "";
	document.getElementById("formedsent").innerHTML = "";
	document.getElementById("reformbtn").innerHTML = "";
	formedsent = "";
    if(document.getElementById("eng").selected){
		document.getElementById("demo").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("innerdemo").innerHTML = "(select the buttons in proper order)";
    		getRandomengSentence();
	}
    else if(document.getElementById("hin").selected) {
		document.getElementById("demo").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("innerdemo").innerHTML = "(select the buttons in proper order)";
    		getRandomhinSentence();
	}
    }
}
function getRandomengSentence() {
	var sentind = parseInt(Math.random()*(10));
	var engrand = obj.sentences[sentind].firstsent;
	var sentsplit = engrand.split(" ");
	var arr=[];
	for( var  i = 0 ;i<sentsplit.length;i++) {
		arr[i]=0;
	}
	var k,btnidval="",btnid=0,formedsent="";
	var len = sentsplit.length;
	addbtn = "";
	while(btnid!=(len)) {
		k = sentsplit[parseInt(Math.random()*(len))];
		if(arr[sentsplit.indexOf(k)]==0) {
		arr[sentsplit.indexOf(k)]=1;
		sentsplit[sentsplit.indexOf(k)] = "";
		btnid++;
		btnidval = "<button id = 'btnid"+btnid+"' value = '"+k+"' onclick = 'disword(this.id, this.value)'>"+k+"</button>";
		addbtn = addbtn + btnidval;
		}
		randbtn.innerHTML = addbtn.trim();
	}
}
function getRandomhinSentence() {
	var sentind = parseInt(Math.random()*(7));
	var hinrand = obj1.sentences[sentind].firstsent;
	var sentsplit = hinrand.split(" ");
	var arr=[];
	for( var  i = 0 ;i<sentsplit.length;i++) {
		arr[i]=0;
	}
	var k,btnidval="",btnid=0,formedsent="";
	var len = sentsplit.length;
	addbtn = "";
	while(btnid!=(len)) {
		k = sentsplit[parseInt(Math.random()*(len))];
		if(arr[sentsplit.indexOf(k)]==0 ) {
		arr[sentsplit.indexOf(k)]=1;
		btnid++;
		btnidval = "<button id = 'btnid"+btnid+"' value = '"+k+"' onclick = 'disword(this.id, this.value)'>"+k+"</button>";
		addbtn = addbtn + btnidval;
		}
		randbtn.innerHTML = addbtn.trim();
	}
}

function disword( btnid, btnvalue ) {
	document.getElementById("reformbtn").innerHTML = "<button onclick = 'reform()'>Re-form the sentence</button>";
	document.getElementById("innersentdemo").innerHTML = "Formed Sentence (<i>after selecting words</i>):";
	formedsent = formedsent + btnvalue +" ";
	document.getElementById("formedsent").innerHTML = formedsent;
	var removebtn = document.getElementById(btnid);
	removebtn.remove();
}
function reform() {
	document.getElementById("randbtn").innerHTML = addbtn.trim();
	document.getElementById("formedsent").innerHTML = "";
	document.getElementById("innersentdemo").innerHTML ="";
	document.getElementById("reformbtn").innerHTML = "";
	formedsent = "";
}