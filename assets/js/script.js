// console.log("here i am")

let currentHour = parseInt(moment().format('H'));
console.log(currentHour)
var descTime = document.getElementsByClassName("description");
console.log(descTime)


    
 Array.from(descTime).forEach(description => {
  let
    planHour  =  description.id, 
        pHour;

  if (planHour) {
    pHour = parseInt(planHour);}
    console.log(pHour)

    // if (pHour) {
    if (currentHour === pHour) {
        $("textarea").addClass("present")};
    if (currentHour > pHour) {
        $("textarea").addClass("future")};

        // }

})

//    {
//     if (currentHour === planHour) {
//       $("textarea").addClass("present")};
//     } else if ((currentHour < planHour) ) {
//       setColor(row, "lightgrey");
//     } else  {
//       setColor(row, "green");
  
//   }



var currentTime = moment();
console.log(currentTime)

function saveTask (event){
    console.log("click")
    console.log(event)
    const text=event.target.previousElementSibling.value
    const hour=event.target.previousElementSibling.id
    const tasks=JSON.parse(localStorage.getItem("planner")) || {}
    console.log (tasks)
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
    console.log($("#"+i),tasks[i])
    $("#"+i).val(tasks[i] || "")

 }
}
// function colorCode(){
//     for(let i=9; i<=17; i++){
//         if (i = currentTime); {
//             $("textarea").addClass("present")};
//         if (i > currentTime); {
            // $("textarea").addClass("future")};

//         }

    // }
$("#currentDay").text(currentTime.format(" D MMM YYYY"))
$(".saveBtn").on("click", saveTask)

loadTasks()







