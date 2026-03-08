function calculateAggregate(){

let english = parseInt(document.getElementById("english").value);
let math = parseInt(document.getElementById("math").value);
let science = parseInt(document.getElementById("science").value);
let social = parseInt(document.getElementById("social").value);

let e1 = parseInt(document.getElementById("elective1").value);
let e2 = parseInt(document.getElementById("elective2").value);
let e3 = parseInt(document.getElementById("elective3").value);

if(!english || !math || !science || !social || !e1 || !e2 || !e3){
document.getElementById("result").innerHTML="Please select all grades.";
return;
}

let coreWorst = Math.max(english,math,science,social);
let coreSum = english + math + science + social - coreWorst;

let electiveSum = e1 + e2 + e3;

let aggregate = coreSum + electiveSum;

document.getElementById("result").innerHTML =
"Your WASSCE Aggregate is: " + aggregate;

}
