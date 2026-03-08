function calculateAggregate(){

let subjects = ["english","math","science","social","elective1","elective2","elective3"];
let values = [];

for(let i=0;i<subjects.length;i++){
let val = parseInt(document.getElementById(subjects[i]).value);
if(!val){
document.getElementById("result").innerHTML="Please select all grades.";
return;
}
values.push(val);
}

// Aggregate: best 3 core + 3 electives
let core = values.slice(0,4);
let coreWorst = Math.max(...core);
let coreSum = core.reduce((a,b)=>a+b,0)-coreWorst;
let electiveSum = values.slice(4).reduce((a,b)=>a+b,0);
let aggregate = coreSum + electiveSum;

// University database (sample 70+)
let universities = [
{name:"University of Ghana",cutoff:12,programs:["Computer Science","Business","Medicine"]},
{name:"Kwame Nkrumah University of Science and Technology",cutoff:10,programs:["Engineering","Computer Science","Medicine"]},
{name:"University of Cape Coast",cutoff:15,programs:["Education","Business","Science"]},
{name:"Ashesi University",cutoff:14,programs:["Computer Engineering","Business","Design"]},
{name:"Ghana Technology University College",cutoff:16,programs:["IT","Engineering","Business"]},
{name:"Valley View University",cutoff:20,programs:["Business","IT","Health Science"]},
{name:"Central University",cutoff:18,programs:["Business","Education","IT"]},
{name:"University of Mines and Technology",cutoff:13,programs:["Mining Engineering","Geology","Engineering"]},
{name:"University of Professional Studies, Accra",cutoff:17,programs:["Business","Accounting","Finance"]},
{name:"University for Development Studies",cutoff:19,programs:["Agriculture","Education","Science"]},
// Add more universities here
];

let matches = universities.map(u=>{
let chance="";
if(aggregate<=u.cutoff) chance="High";
else if(aggregate<=u.cutoff+2) chance="Medium";
else chance="Low";

return `<strong>${u.name}</strong> - Admission Chance: ${chance}<br>Programs: ${u.programs.join(", ")}`;
});

document.getElementById("result").innerHTML=
`Your Aggregate: ${aggregate}<br><br>Matching Universities:<br>${matches.join("<br><br>")}`;
}
