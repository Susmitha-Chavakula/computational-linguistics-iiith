//english sentences
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

//hindi sentences
var hinsent = '{"sentences":['+'{"firstsent":"राम और श्याम बाजार गयें", "secondsent":"राम और श्याम गयें बाजार", "thirdsent":"बाजार गयें राम और श्याम" , "fourthsent":"गयें बाजार राम और श्याम"},' +
	       		'{"firstsent":"राम सोया और श्याम भी", "secondsent":"श्याम सोया और राम भी", "thirdsent":"सोया श्याम और राम भी" , "fourthsent":"सोया राम और श्याम भी"},' +
	       		'{"firstsent":"मैंने उसे बताया कि राम सो रहा है", "secondsent":"मैंने उसे बताया कि सो रहा है राम", "thirdsent":"उसे मैंने बताया कि राम सो रहा है", "fourthsent":"उसे मैंने बताया कि सो रहा है राम", "fifthsent":"मैंने बताया उसे कि राम सो रहा है", "sixthsent":"मैंने बताया उसे कि सो रहा है राम", "seventhsent":"उसे बताया मैंने कि राम सो रहा है", "eightsent":"उसे बताया मैंने कि सो रहा है राम", "ninthsent":"बताया मैंने उसे कि राम सो रहा है", "tenthsent":"बताया मैंने उसे कि सो रहा है राम", "eleventhsent":"बताया उसे मैंने कि राम सो रहा है", "twelvesent":"बताया उसे मैंने कि सो रहा है राम" },' +
	       		'{"firstsent":"राम खाकर सोया", "secondsent":"खाकर राम सोया", "thirdsent":"राम सोया खाकर" , "fourthsent":"खाकर सोया राम", "fifthsent":"सोया राम खाकर", "sixthsent":"सोया खाकर राम"},' +
	       		'{"firstsent":"बिल्लियों को मारकर कुत्ता सो गया", "secondsent":"मारकर बिल्लियों को कुत्ता सो गया", "thirdsent":"बिल्लियों को मारकर सो गया कुत्ता" , "fourthsent":"मारकर बिल्लियों को सो गया कुत्ता", "fifthsent":"कुत्ता सो गया बिल्लियों को मारकर", "sixthsent":"कुत्ता सो गया मारकर बिल्लियों को", "seventhsent":"सो गया कुत्ता बिल्लियों को मारकर", "eightsent":"सो गया कुत्ता मारकर बिल्लियों को"},' +
	       		'{"firstsent":"एक लाल किताब वहाँ है", "secondsent":"एक लाल किताब है वहाँ", "thirdsent":"वहाँ है एक लाल किताब" , "fourthsent":"है वहाँ एक लाल किताब"},' +
	       		'{"firstsent":"एक बड़ी सी किताब वहाँ है", "secondsent":"एक बड़ी सी किताब है वहाँ", "thirdsent":"बड़ी सी एक किताब वहाँ है" , "fourthsent":"बड़ी सी एक किताब है वहाँ", "fifthsent":"वहाँ है एक बड़ी सी किताब", "sixthsent":"वहाँ है बड़ी सी एक किताब", "seventhsent":"है वहाँ एक बड़ी सी किताब", "eightsent":"है वहाँ बड़ी सी एक किताब" }]}';
obj1 = JSON.parse(hinsent);

var formedsent = "",addbtn="", len = 0, formedwordcnt = 0, sentid, moans="";

//language selected			 
function langsel(){	
    if(document.getElementById("default").selected)
		alert('Select Language');
    else {
	document.getElementById("innersentdemo").innerHTML = "";
	document.getElementById("formedsent").innerHTML = "";
	document.getElementById("reformbtn").innerHTML = "";
	formedsent = "";
	document.getElementById("chkbtn").innerHTML = "";
	formedwordcnt = 0;
	document.getElementById("checkw").innerHTML = "";
	document.getElementById("checkr").innerHTML = "";
	document.getElementById("crtansbtn").innerHTML = "";
	document.getElementById("getsent").innerHTML = "";
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
//generate eng random sentence
function getRandomengSentence() {
	sentind = parseInt(Math.random()*(10));
	var engrand = obj.sentences[sentind].firstsent;
	var sentsplit = engrand.split(" ");
	var arr=[];
	for( var  i = 0 ;i<sentsplit.length;i++) {
		arr[i]=0;
	}
	var k,btnidval="",btnid=0,formedsent="";
	len = sentsplit.length;
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
//generate hin random sentence
function getRandomhinSentence() {
	sentind = parseInt(Math.random()*(7));
	var hinrand = obj1.sentences[sentind].firstsent;
	var sentsplit = hinrand.split(" ");
	var arr=[];
	for( var  i = 0 ;i<sentsplit.length;i++) {
		arr[i]=0;
	}
	var k,btnidval="",btnid=0,formedsent="";
	len = sentsplit.length;
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
//selected sent
function disword( btnid, btnvalue ) {
	document.getElementById("reformbtn").innerHTML = "<button onclick = 'reform()'>Re-form the sentence</button>";
	document.getElementById("innersentdemo").innerHTML = "Formed Sentence (<i>after selecting words</i>):";
	formedsent = formedsent + btnvalue +" ";
	document.getElementById("formedsent").innerHTML = formedsent;
	var removebtn = document.getElementById(btnid);
	removebtn.remove();
	formedwordcnt++;
	if(formedwordcnt===len)
		document.getElementById("chkbtn").innerHTML = "<button onclick ='check()'>Check the correctness of this sentence</button>";
}
//reset button
function reform() {
	document.getElementById("randbtn").innerHTML = addbtn.trim();
	document.getElementById("formedsent").innerHTML = "";
	document.getElementById("innersentdemo").innerHTML ="";
	document.getElementById("reformbtn").innerHTML = "";
	formedsent = "";
	formedwordcnt = 0;
	document.getElementById("chkbtn").innerHTML = "";
	document.getElementById("checkr").innerHTML = "";
	document.getElementById("checkw").innerHTML = "";
	document.getElementById("crtansbtn").innerHTML = "";
	document.getElementById("getsent").innerHTML = "";
}
//checks correctness of sentence
function check() {
	if(document.getElementById("eng").selected) {
	if(obj.sentences[sentind].firstsent == formedsent.trim() || obj.sentences[sentind].secondsent == formedsent.trim() || obj.sentences[sentind].thirdsent == formedsent.trim() || obj.sentences[sentind].fourthsent == formedsent.trim() || obj.sentences[sentind].fifthsent == formedsent.trim() || obj.sentences[sentind].sixthsent == formedsent.trim() || obj.sentences[sentind].seventhsent == formedsent.trim() || obj.sentences[sentind].eightsent == formedsent.trim()) 
		document.getElementById("checkr").innerHTML = "Right answer!!!";
	else {
		document.getElementById("checkw").innerHTML = "Wrong answer!!!"; 
		document.getElementById("crtansbtn").innerHTML = "<button onclick = 'getengsent()'>Get Correct Sentence</button>";
		document.getElementById("getsent").innerHTML = "";
		}
	}
	else if(document.getElementById("hin").selected) {
	if(obj1.sentences[sentind].firstsent == formedsent.trim() || obj1.sentences[sentind].secondsent == formedsent.trim() || obj1.sentences[sentind].thirdsent == formedsent.trim() || obj1.sentences[sentind].fourthsent == formedsent.trim() || obj1.sentences[sentind].fifthsent == formedsent.trim() || obj1.sentences[sentind].sixthsent == formedsent.trim() || obj1.sentences[sentind].seventhsent == formedsent.trim() || obj1.sentences[sentind].eightsent == formedsent.trim() || obj1.sentences[sentind].ninthsent == formedsent.trim() || obj1.sentences[sentind].tenthsent == formedsent.trim() || obj1.sentences[sentind].eleventhsent == formedsent.trim() || obj1.sentences[sentind].twelvesent == formedsent.trim()) 
		document.getElementById("checkr").innerHTML = "Right answer!!!";
	else {
		document.getElementById("checkw").innerHTML = "Wrong answer!!!"; 
		document.getElementById("crtansbtn").innerHTML = "<button onclick = 'gethinsent()'>Get Correct Sentence</button>";
		document.getElementById("getsent").innerHTML = "";
		}
	}			
}
//eng crt ans
function getengsent() {
	var ans = obj.sentences[sentind].firstsent+'<br>'+obj.sentences[sentind].secondsent+'<br>'+obj.sentences[sentind].thirdsent+'<br>'+obj.sentences[sentind].fourthsent+'<br>'+obj.sentences[sentind].fifthsent+'<br>'+obj.sentences[sentind].sixthsent+'<br>'+obj.sentences[sentind].seventhsent+'<br>'+obj.sentences[sentind].eightsent;
	moans = ans.replace(/undefined/g,"");
	document.getElementById("getsent").innerHTML = moans;
	document.getElementById("crtansbtn").innerHTML = "<button onclick = 'toggle()'>Hide the correct Sentence</button>";
}	
//hin crt ans
function gethinsent() {
	var ans = obj1.sentences[sentind].firstsent+'<br>'+obj1.sentences[sentind].secondsent+'<br>'+obj1.sentences[sentind].thirdsent+'<br>'+obj1.sentences[sentind].fourthsent+'<br>'+obj1.sentences[sentind].fifthsent+'<br>'+obj1.sentences[sentind].sixthsent+'<br>'+obj1.sentences[sentind].seventhsent+'<br>'+obj1.sentences[sentind].eightsent+'<br>'+obj1.sentences[sentind].ninthsent+'<br>'+obj1.sentences[sentind].tenthsent+'<br>'+obj1.sentences[sentind].eleventhsent+'<br>'+obj1.sentences[sentind].twelvesent;
	moans = ans.replace(/undefined/g,"");
	document.getElementById("getsent").innerHTML = moans;
	document.getElementById("crtansbtn").innerHTML = "<button onclick = 'toggle()'>Hide the correct Sentence</button>";
}

//toggle between hide and show sentences
function toggle() {
	var btntxt = document.getElementById("crtansbtn");
	var senttxt = document.getElementById("getsent");
	$(document).ready(function() {
	      $("#crtansbtn").ready(function() {
		     $("#getsent").toggle();
		     });
		});
	if(senttxt.innerHTML === moans) {
		senttxt.innerHTML = "";
		document.getElementById("crtansbtn").innerHTML = "<button onclick = 'toggle()'>Get Answers</button>";
	} else {
		senttxt.innerHTML = moans;
		document.getElementById("crtansbtn").innerHTML = "<button onclick = 'toggle()'>Hide the correct Sentence</button>";
	}
}
