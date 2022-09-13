var body=document.createElement("div")

var div= document.createElement("div");
div.style.margin="100px 550px"

var h=document.createElement("h1");
h.innerHTML="covid19";
//h.style.textAlign="center";
//document.body.append(h)

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","in");
//input.style.marginLeft="600px";
//document.body.append(input)

var button = document.createElement("button");
button.setAttribute("typt","button");
button.classList.add("btn","btn-primary");
button.innerHTML="serch";
button.addEventListener("click",foo)

div.append(h,input,button)
document.body.append(div)

var div1=document.createElement("div")
div1.style.margin="100px 500px";

var table=document.createElement("table");
table.style.border="1px solid black"
table.style.width="400px"
var tr=document.createElement("tr");
var tr1=document.createElement("tr")

function th(tagname,content){
var th=document.createElement(tagname);
th.innerHTML=content;
return th;
}

function td(tagname1,content1){
    var td1=document.createElement(tagname1);
    td1.innerHTML=content1;
    return td1;
}
var th1=th("th","Confirmed")
var th2=th("th","Deaths")
var th3=th("th","Active")

tr.append(th1,th2,th3);
table.append(tr);
div1.append(table)
document.body.append(div1)



async function foo(){
 var country=document.getElementById("in").value; 
 console.log(country)
var url=`https://api.covid19api.com/dayone/country/${country}`;
var res= await fetch(url);
var res1=await res.json();
var index=res1.length-1;
var td2=td("td",`${res1[index].Confirmed}`)
var td3=td("td",`${res1[index].Deaths}`)
var td4=td("td",`${res1[index].Active}`)
tr1.append(td2,td3,td4)
table.append(tr1);
document.body.append(table);


}

body.append(div,div1)
document.body.append(body)