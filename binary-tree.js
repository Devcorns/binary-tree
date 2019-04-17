var mainTree = document.getElementById("treecontrianer");
console.log("maintree",mainTree);
var parentContainer = [];
var childContainer = [];
//var  = [];

var genelgy = [
    {name:"Prakhar",address:"Anandlok",uid:1,child:[2,4],newChild:[]},
    {name:"Raj",address:"Mandi",uid:2,child:[3],newChild:[]},
    {name:"Ram",address:"Holi",uid:3},
    {name:"Siddartha",address:"Deeg",uid:4,child:[5],newChild:[]},
    {name:"Yachana",address:"Deeg",uid:5,child:[6],newChild:[]},
    {name:"Ritu",address:"Deeg",uid:6,child:[7,8],newChild:[]},
    {name:"Babita",address:"Deeg",uid:7},
    {name:"Chanchal",address:"Deeg",uid:8},
];

//console.log(genelgy);

for (let item of genelgy) {




    if(item.child != undefined){
        parentContainer.push(item);
    }
    else{
        childContainer.push(item);
    }
}

for (let item of parentContainer) {
    
    generateBelower(item);

}

function generateBelower(item) {
   
    var newElm = [];
    var innerDiv = document.createElement("DIV");
    for (let child of item.child) {
        
        genelgy.forEach(function (elm,index) {
            
            if(elm.uid == child ) {
                
                var span = document.createElement("SPAN");
                span.style.background = "#f00";
                span.style.height = "100px";
                span.style.width = "100px";
                span.style.display = "inline-block";
                //console.log(span);
                span.innerText  = elm.name;
                innerDiv.appendChild(span);
                item.newChild.push(elm);

            }
            
        })
        
    }
    
 
    
    
    
}

console.log("I am genelogy",parentContainer);










   
