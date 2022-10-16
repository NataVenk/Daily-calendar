

let currentHour = parseInt(moment().format('H'));
var descTime = document.getElementsByClassName("description");


    
 Array.from(descTime).forEach(description => {
  let pHour  =  parseInt(description.id)
  
    // console.log(currentHour)

    if (pHour){

        if (parseInt(pHour) == parseInt(currentHour)) {
            $("textarea#".concat(pHour)).addClass("present");
           
        }
        if (parseInt(pHour) > parseInt(currentHour)) {
            $("textarea#".concat(pHour)).addClass("future");
        }
    }
    
    
},)
   




var currentTime = moment();
// console.log(currentTime)

function saveTask (event){
    // console.log("click")
    // console.log(event)
    const text=event.target.previousElementSibling.value
    const hour=event.target.previousElementSibling.id
    const tasks=JSON.parse(localStorage.getItem("planner")) || {}
    // console.log (tasks)
    tasks[hour]=text
    localStorage.setItem("planner", JSON.stringify(tasks))
    $("#message").text("Your task has been saved!")
                    .show()
                    .delay(2000)
                    .fadeOut();
  

}


function loadTasks(){
 const tasks = JSON.parse(localStorage.getItem("planner")) || {}
 for(let i = 9; i<=17; i++){
    // console.log($("#"+i),tasks[i])
    $("#"+i).val(tasks[i] || "")

 }
}

$("#currentDay").text(currentTime.format("dddd, MMMM Do"))
$(".saveBtn").on("click", saveTask)

loadTasks()







