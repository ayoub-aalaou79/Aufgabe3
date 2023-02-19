/*modals */
// var updateDeleteCellModal = document.getElementById("updateDeleteCellModal");
// var addCellModal = document.getElementById("addCellModal");
//show Month view modal cell



// document.querySelectorAll('.calender-content').forEach((td) => {
//     td.onclick = (e) => {
//         //alert("hm");
//        // document.getElementById("addEvent").style.display = "none";
//         // updateDeleteCellModal.style.display = "none";
//         // addCellModal.style.display = "block";
//        // document.getElementById("modal-2").click();

//         document.getElementById("modal-2").classList.toggle("modal-state-checked");
//         document.getElementById("modal-2").classList.toggle("modal-state");

//     };
// });

//close all modals
const closeBtn =  document.querySelectorAll(".modal__close").forEach((close) => {

    close.onclick = (e) => {

        const forAtt = e.target.getAttribute("for");
        if (forAtt) {
          // Do something with the custom attribute value.
            document.getElementById(forAtt).classList.remove("modal-state-checked");

            document.getElementById(forAtt).classList.add("modal-state");
        }

        //console.log(forAtt);
    };
});


document.getElementById("addEvent").onclick = () => {

    
    document.getElementById("modal-1").classList.toggle("modal-state-checked");
    document.getElementById("modal-1").classList.toggle("modal-state");

}



//update and delete modal 
// document.querySelectorAll('.list-event').forEach((div) => {
//     div.onclick = (e) => {
    
//         // updateDeleteCellModal.style.display = "block";
//         // addCellModal.style.display = "block";
//         //alert("hm");
//       //  document.getElementById("addEvent").style.display = "none";
//        // document.getElementById("modal-3").click();
//     };
// });


/*catgery select */
let modal1_select = document.getElementById("modal1_select");
let modal2_select = document.getElementById("modal2_select");
let modal3_select = document.getElementById("modal3_select");

function loadCategoryOptions(selectElement) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../includes/categories/categoryList.inc.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var categoryList = JSON.parse(xhr.responseText);
            for (var i = 0; i < categoryList.length; i++) {
                var option = document.createElement("option");
                option.value = categoryList[i]["idCategory"];
                option.text = categoryList[i]["categoryName"];
                selectElement.appendChild(option);
            }
        }
    };
    
    xhr.send();
}

loadCategoryOptions(modal1_select);
loadCategoryOptions(modal2_select);
loadCategoryOptions(modal3_select);
/*modals */


//swith view btn
const monthViewBtn = document.getElementById("month-view-btn");
const weekViewBtn = document.getElementById("week-view-btn");
const dayViewBtn = document.getElementById("day-view-btn");
const listViewBtn = document.getElementById("list-view-btn");

const monthView = document.getElementById("month-view");
const weekView = document.getElementById("week-view");
const dayView = document.getElementById("day-view");

const calender = document.getElementById("calender");
monthViewBtn.onclick = () =>{

    monthView.style.cssText = "display: block;  visibility: visible;";
    weekView.style.cssText = "display: none;  visibility: hidden;";
    dayView.style.cssText = "display: none;  visibility: hidden;";

    calender.classList.add("month-view-calendar");

    //remove class
    calender.classList.remove("week-view-calendar");
    calender.classList.remove("days-view-calendar");

    navigationTitle.innerHTML = "";
    navigationTitle.innerHTML = printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth)
}

weekViewBtn.onclick = () =>{

    weekView.style.cssText = "display: block;  visibility: visible;";
    monthView.style.cssText = "display: none;  visibility: hidden;";
    dayView.style.cssText = "display: none;  visibility: hidden;";

    calender.classList.add("week-view-calendar");

    //remove class
    calender.classList.remove("month-view-calendar");
    calender.classList.remove("days-view-calendar");

    navigationTitle.innerHTML = "";
    navigationTitle.innerHTML = printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth)
    //fillCalenderWeekList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);
}

dayViewBtn.onclick = () =>{

    dayView.style.cssText = "display: block;  visibility: visible;";
    monthView.style.cssText = "display: none;  visibility: hidden;";
    weekView.style.cssText = "display: none;  visibility: hidden;";

    calender.classList.add("days-view-calendar");

    //remove class
    calender.classList.remove("month-view-calendar");
    calender.classList.remove("week-view-calendar");

    navigationTitle.innerHTML = "";
    navigationTitle.innerHTML = initilizeDate.currentDay + " " +printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth)
}

//add event modal 1
const modal1_form = document.getElementById("modal1_form");

modal1_form.addEventListener('submit', function (e) {

    e.preventDefault();

    const eventTitle = document.getElementById("eventTitle").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const modal1_select = document.getElementById("modal1_select").value;

    const errorMsg = document.getElementById("errorMsg");
    
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../includes/events/addEvent.inc.php', true);

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText);

           // callEventList();
            fillCalenderList();
            //
            const  addEvent = document.getElementById("modal-1");

            addEvent.classList.replace("modal-state-checked", "modal-state")
        }
    };
    



    // if (verifyDateTimeInput(startDate, endDate)) {
        errorMsg.innerHTML = "";
        const data = {
            eventTitle: eventTitle,
            startDate: startDate,
            endDate: endDate,
            category: modal1_select
        };

        xhr.send('data=' + JSON.stringify(data));
       // document.getElementsByClassName().("modal-state");
        
        
      //  document.getElementById("modal-1").className = "modal-state";
    

    // }
    // else
    // {
    //     errorMsg.innerHTML = "Invalide Date: Should be end date Bigger Than the start date";
    // }



});

/*start modal 2 */


/*end modal 2*/

//function thta verfity two inputs of type dateTime if true that mean that corrects
function verifyDateTimeInput(firstInput, secondInput) {
    const firstDate = new Date(firstInput);
    const secondDate = new Date(secondInput);

    return firstDate < secondDate;

}


/*show Default view*/

switch (true) {
    case calenderSec.classList.contains("month-view-calendar"):
        monthView.style.cssText = "display: block;  visibility: visible;";
        weekView.style.cssText = "display: none;  visibility: hidden;";
        dayView.style.cssText = "display: none;  visibility: hidden;";

        calender.classList.add("month-view-calendar");

        //remove class
        calender.classList.remove("week-view-calendar");
        calender.classList.remove("days-view-calendar");

        navigationTitle.innerHTML = "";
    
        navigationTitle.innerHTML = printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth)

        break;

    case calenderSec.classList.contains("week-view-calendar"):
        weekView.style.cssText = "display: block;  visibility: visible;";
        monthView.style.cssText = "display: none;  visibility: hidden;";
        dayView.style.cssText = "display: none;  visibility: hidden;";
    

        calender.classList.add("week-view-calendar");

        //remove class
        calender.classList.remove("month-view-calendar");
        calender.classList.remove("days-view-calendar");

        fillCalenderWeekList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);


        break;

    case calenderSec.classList.contains("days-view-calendar"):
        dayView.style.cssText = "display: block;  visibility: visible;";
        monthView.style.cssText = "display: none;  visibility: hidden;";
        weekView.style.cssText = "display: none;  visibility: hidden;";

        calender.classList.add("days-view-calendar");

        //remove class
        calender.classList.remove("month-view-calendar");
        calender.classList.remove("week-view-calendar");

        fillCalenderDaysList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay)

    break;

}