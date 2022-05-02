var favArr=JSON.parse(localStorage.getItem("favourites"));


displayDataa(favArr)

function displayDataa(data,i){
   
    data.forEach(function(elem){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        var td2=document.createElement("td")
        var td3=document.createElement("td")
        var td4=document.createElement("td")
        var td5=document.createElement("td")
        var td6=document.createElement("td")

        td1.innerText=elem.matchNumber;
        td2.innerText=elem.teamA;
        td3.innerText=elem.teamB;
        td4.innerText=elem.date;
        td5.innerText=elem.venue;
        td6.innerText="Delete"
        td6.style.color="red"
        td6.addEventListener("click",function(){
            deletee(elem,i);
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function deletee(elem,i){
    favArr.splice(i,1);
    localStorage.setItem("favourites",JSON.stringify(favArr));
    window.location.reload();
}