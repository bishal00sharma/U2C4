// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",submitFun)
var dataArr=JSON.parse(localStorage.getItem("schedule")) || []

function submitFun(){
    event.preventDefault();

    var dataObj={
        matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }
     dataArr.push(dataObj)
    localStorage.setItem("schedule", JSON.stringify(dataArr))
    console.log(dataArr)
}

      

       

    

