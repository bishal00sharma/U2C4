var dataArr=JSON.parse(localStorage.getItem("schedule"))
var favArr=JSON.parse(localStorage.getItem("favourites")) || []

displayData(dataArr)

function displayData(data){
   document.querySelector("tbody").innerHTML="";
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
        td6.innerText="Favourites"
        td6.style.color="green"
        td6.addEventListener("click",function(){
            favour(elem);
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function favour(elem){
    favArr.push(elem)
    localStorage.setItem("favourites", JSON.stringify(favArr))
}



function sortByVenue(){
    var select=document.querySelector("#filterVenue").value
    

    var filterByVenue=dataArr.filter(function(elem){
        return select==elem.venue;
    });
    displayData(filterByVenue)

}