const date = new Date();

let initilizeDate = {
    row: 6, /*min value */
    currentYear: date.getFullYear(),
    currentMonth: date.getMonth() + 1,
    currentDay: date.getDate(),
    currentDateFormat: formatDate(new Date()),
    calenderList: [],
    listMonthViewString: [],
}

let generalEventList = null;
var eventIdGen = null;
// let initilizeWeekDate = {
//     currentWeekStart: new Date(initilizeDate.currentYear,initilizeDate.currentMonth, initilizeDate.currentDay)
// }

const prevBtn = document.getElementById("prev-month");
const nextBtn = document.getElementById("next-month");

//console.log(initilizeDate.currentDateFormat);
//check wich calender has been selected

//handle today button 
const todayBtn = document.getElementById("todayBtn");
const calenderSec = document.getElementById("calender");

todayBtn.onclick = () =>{

    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // add leading zero if month is less than 10
    const day = String(date.getDate()).padStart(2, '0'); // add leading zero if day is less than 10

    const formattedDate = `${year}-${month}-${day}`;

    initilizeDate.currentYear = year;
    initilizeDate.currentMonth = month;
    initilizeDate.currentDay = day;

    switch (true) {

        case calenderSec.classList.contains("month-view-calendar"):

            //this fill calender
            fillCalenderList();
            

            break;

        case calenderSec.classList.contains("week-view-calendar"):
                callEventList();
                fillCalenderWeekList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);
            break;

        case calenderSec.classList.contains("days-view-calendar"):
            
            callEventList();
            fillCalenderDaysList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay)
            break;
    
    }

    console.log(`${year}-${month}-${day}`);
}


prevBtn.onclick = () =>{

    switch (true) {

        case calenderSec.classList.contains("month-view-calendar"):

            //this get the previous month
            getPreviousMonthDateFormat();

            //this fill calender
            fillCalenderList();
            

            break;

        case calenderSec.classList.contains("week-view-calendar"):

                getPrevWeekDateFormat();
                fillCalenderWeekList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);
            break;

        case calenderSec.classList.contains("days-view-calendar"):
            
            callEventList();

            getPrevDayDateFormat();
            fillCalenderDaysList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay)
            break;
    
    }

}

nextBtn.onclick = () =>{

    switch (true) {

        case calenderSec.classList.contains("month-view-calendar"):

            //this get the previous month
            getNextMonthDateFormat()

            //this fill calender
            fillCalenderList();

    

            break;

        case calenderSec.classList.contains("week-view-calendar"):

        
            getNextWeekDateFormat()
            fillCalenderWeekList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);
            break;

        case calenderSec.classList.contains("days-view-calendar"):
            getNextDayDateFormat();
        
            fillCalenderDaysList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);

            callEventList();
            break;
    
    }

}

//for navigation date Month
function getPreviousMonthDateFormat()
{
    if(initilizeDate.currentMonth == 1)
    {
        initilizeDate.currentMonth = 12;
        initilizeDate.currentYear--;
    }
    else
    {
        initilizeDate.currentMonth--;
    }

    initilizeDate.currentDateFormat = initilizeDate.currentYear + "-" + pairNbrFormat(initilizeDate.currentMonth) + "-" + "01";

    return initilizeDate.currentYear + "-" + pairNbrFormat(initilizeDate.currentMonth) + "-" + "01";
}

function getNextMonthDateFormat(){

    if(initilizeDate.currentMonth == 12)
    {
        initilizeDate.currentMonth = 1;
        initilizeDate.currentYear++;
    }
    else
    {
        initilizeDate.currentMonth++;
    }

    initilizeDate.currentDateFormat = initilizeDate.currentYear + "-" + pairNbrFormat(initilizeDate.currentMonth) + "-" + "01";

    return initilizeDate.currentYear + "-" + pairNbrFormat(initilizeDate.currentMonth) + "-" + "01";
}


//for navigation date week
function getNextWeekDateFormat(){


    let date = new Date(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);

    
    // Navigate to next week
    date.setDate(date.getDate() + 7);
    week = generateNavWeekCalendar(date);
    
    let [year,month,day] = week[0].split("-");

    initilizeDate.currentYear = year;
    initilizeDate.currentMonth = month;
    initilizeDate.currentDay = day;

    return initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay;
}

function getPrevWeekDateFormat(){
    

    let date = new Date(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);

    // Navigate to previous week
    date.setDate(date.getDate() - 7);
    week = generateNavWeekCalendar(date);

    let [year,month,day] = week[0].split("-");

    initilizeDate.currentYear = year;
    initilizeDate.currentMonth = month;
    initilizeDate.currentDay = day;

    return initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay;
}

fillCalenderWeekList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);
//console.log(new Date(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay));

function fillCalenderWeekList(weekStart)
{

    let weekTableHead = "";
    let theadWeekView = document.getElementById("theadWeekView");

    var currentWeekDates = [];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let j = 0;//this help us for printing the start of the week

    //this for fill the week header
    weekTableHead = `<tr><td style="width: 55px;"></td>`;
    
    var weeksHeadList = generateNavWeekCalendar(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);

    for (let i = 0; i < weeksHeadList.length; i++) {
    
        weekTableHead += `<td attr-date="${weeksHeadList[i]}" >
                            <a>${weeksHeadList[i].slice(-2)} ${daysOfWeek[j]}</a></td>`;

            currentWeekDates.push(weeksHeadList[i]); 
        j++;

    }


    weekTableHead += `</tr>`;

    theadWeekView.innerHTML = "";
    theadWeekView.innerHTML = weekTableHead;


    //start to fill the body of week calendar
    var weekTableBody = `<div class="hour-week-row-container"><tr>`;
    tbodyWeekView = document.getElementById("tbodyWeekView");


    for (let i = 0; i < 24; i++) {
        var hour = i % 12 || 12;
        var suffix = i < 12 ? "AM" : "PM";
        var formattedHour = i < 10 ? `0${i}` : i;
        var minute = ":00";
      //  console.log(`${hour}:00 ${suffix} ==> ${formattedHour}${minute}`);

        weekTableBody += `<div class="hour-date-content">
                            <tr>
                                <div class="hour-week-container">
                                    <td style="height: 32px !important;" attr-time="${formattedHour}${minute}">${hour} ${suffix}</td>
                                </div>
                                <div class="date-week-event" style="position=: relative">`;
                                        
                                
                                    for (let j = 0; j < currentWeekDates.length; j++) {
                                        weekTableBody += `<td class='td-week-event' attr-date="${currentWeekDates[j]}" 
                                        attr-time="${formattedHour}${minute}" attr-end-time="${formattedHour}:30"></td>`;

                                    }
                                    
                                    
            weekTableBody +=    `</div>
                            </tr>
                        </div>`;

        weekTableBody += `<div class="hour-date-content">
                            <tr>
                                <div class="hour-week-container">
                                    <td style="height: 32px !important;" attr-time="${formattedHour}:30"></td>
                                </div>
                                <div class="date-week-event" style="position=: relative">`;
                                        
                                
                                    for (let j = 0; j < currentWeekDates.length; j++) {
                                        weekTableBody += `<td class='td-week-event' attr-date="${currentWeekDates[j]}"
                                            attr-time="${formattedHour}:30" 
                                            attr-end-time="${(parseInt(formattedHour) + 1) == 24 ? "00" : (parseInt(formattedHour) + 1).toString().padStart(2,"0") }:00"></td>`;

                                    }
                                    
            weekTableBody +=    `</div>
                            </tr>
                        </div>`;

    }

    weekTableBody += `<div/><tr/>`;

    tbodyWeekView.innerHTML = "";
    tbodyWeekView.innerHTML = weekTableBody;
    //tbodyWeekView.insertAdjacentHTML("beforeend", weekTableBody);
   // console.log(weekTableBody);

    //this update the header nvigation
    var navigationTitle = document.getElementById("month-year-title");
    navigationTitle.innerHTML = printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth);
}
//

/*start Days Navigation */
fillCalenderDaysList(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay)
function fillCalenderDaysList(dateParam){
    
    let date = new Date(dateParam);

    let theadDaysView = document.getElementById("theadDaysView");
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    theadDaysView.innerHTML = `<tr>
                                    <td style="width:100px"></td>
                                    <td>${daysOfWeek[date.getDay()]}</td>
                                </tr>`;

    var navigationTitle = document.getElementById("month-year-title");
    navigationTitle.innerHTML = initilizeDate.currentDay + " " + printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth); 

    //load day calendar time
    var daysTableBody = `<div class="hour-week-row-container"><tr>`;
    tbodyDaysView = document.getElementById("tbodyDaysView");


    for (let i = 0; i < 24; i++) {
        var hour = i % 12 || 12;
        var suffix = i < 12 ? "AM" : "PM";
        var formattedHour = i < 10 ? `0${i}` : i;
        var minute = ":00";
      //  console.log(`${hour}:00 ${suffix} ==> ${formattedHour}${minute}`);

        daysTableBody += `<div class="hour-date-content">
                            <tr>
                                <div class="hour-day-container">
                                    <td style="height: 32px !important;" attr-time="${formattedHour}${minute}">${hour} ${suffix}</td>
                                </div>
                                <div class="date-day-event" style="position=: relative">`;

                                        daysTableBody += `<td class='td-day-event' 
                                        attr-date="${initilizeDate.currentYear+"-"+initilizeDate.currentMonth.toString().padStart(2,"0")+"-"+initilizeDate.currentDay.toString().padStart(2,"0")}" 
                                        attr-time="${formattedHour}${minute}" attr-end-time="${formattedHour}:30"></td>`;

            daysTableBody +=    `</div>
                            </tr>
                        </div>`;

        daysTableBody += `<div class="hour-date-content">
                            <tr>
                                <div class="hour-day-container">
                                    <td style="height: 32px !important;" attr-time="${formattedHour}:30"></td>
                                </div>
                                <div class="date-day-event" style="position=: relative">`;
                                        
                                    daysTableBody += `<td class='td-day-event' 
                                    attr-date="${initilizeDate.currentYear+"-"+initilizeDate.currentMonth.toString().padStart(2,"0")+"-"+initilizeDate.currentDay.toString().padStart(2,"0")}" 
                                    attr-time="${formattedHour}:30" 
                                    attr-end-time="${(parseInt(formattedHour) + 1) == 24 ? "00" : (parseInt(formattedHour) + 1).toString().padStart(2,"0") }:00"></td>`;

            daysTableBody +=    `</div>
                            </tr>
                        </div>`;

    }

    daysTableBody += `<div/><tr/>`;

    tbodyDaysView.innerHTML = "";
    tbodyDaysView.innerHTML = daysTableBody;
}

function getNextDayDateFormat(){
    const date = new Date(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);
    date.setDate(date.getDate() + 1); // increment to next day

    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();

    initilizeDate.currentYear = year;
    initilizeDate.currentMonth = month.toString().padStart(2,"0");
    initilizeDate.currentDay = day.toString().padStart(2,"0");

    return initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay;
}


function getPrevDayDateFormat(){

    const date = new Date(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay);
    date.setDate(date.getDate() - 1); // increment to next day

    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();

    initilizeDate.currentYear = year;
    initilizeDate.currentMonth = month.toString().padStart(2,"0");
    initilizeDate.currentDay = day.toString().padStart(2,"0");

    return initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+initilizeDate.currentDay;

}
/*end Days Navigation */

fillCalenderList()

function fillCalenderList()
{
    //start getting eventlist
    //clear
    initilizeDate.listMonthViewString.length=0;

    //get the current Month index
    let currentMonthFirstDayIndex =  getDateByOption({type: "GET_CURRENT_MONTH_FIRST_DAY_INDEX", payload: initilizeDate.currentDateFormat});
    
    //initilize date system to see if we are at the current month
    const dateSys = new Date();
    const currentDate = new Date(initilizeDate.currentDateFormat);

    //we need "lastPrevMonthDay" and "lastPrevMonthDayIndex" to add previous day in calender
    const lastPrevMonthDay = getDateByOption({type:"LAST_PREV_MONTH_DAY", payload: initilizeDate.currentDateFormat});
    const lastPrevMonthDayIndex = getDateByOption({type:"LAST_PREV_MONTH_DAY_INDEX", payload: initilizeDate.currentDateFormat});

    //we need "lastDayOfCurrentMonth" add current
    const lastDayOfCurrentMonth = getDateByOption({type: "GET_CURRENT_MONTH_LAST_DAY", payload: initilizeDate.currentDateFormat});

    let tdCount = 1;
    initilizeDate.listMonthViewString.push("<tr>");
    //if the first day of current Month = 0 that's means we don't have to add the last days of previous month to calender
    if (currentMonthFirstDayIndex == 0) {

        if (compareTwoDates(currentDate, dateSys)) {
        
                            
            // const date = new Date();
            // const currentDay = date.getDate();

            //fill the current Month
            for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
            

                //this for checking ordoring column ==> that we show 7 col "week" in calender  
                if(tdCount % 7 == 0)
                {
                  //  initilizeDate.listMonthViewString.push("<tr/>");
                    // i == dateSys.getDate() ?  initilizeDate.listMonthViewString.push((`  <td id="${i}" class="today" >${i}</td><tr/>`)) : 
                    // initilizeDate.listMonthViewString.push((`<div id="${i}">${i}</div><tr/>`));

                    if (i == dateSys.getDate()) {
                        
                        initilizeDate.listMonthViewString.push(`
                            <td class="today" attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}" >
                                    <div class="calender-content">
                                        <div class="days-wrapper">${i}</div>
                                        <div class='list-event'></div>
                                    </div>
                                </td><tr/>`);
                    }else
                    {
                        initilizeDate.listMonthViewString.push(`
                        <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td><tr/>`);
                    }
                }
                else
                {
                    // i == dateSys.getDate() ?  initilizeDate.listMonthViewString.push((`  <td id="${i}" class="today" >${i}</td>`)) : 
                    //     initilizeDate.listMonthViewString.push((`<div id="${i}">${i}</div>`));

                        if (i == dateSys.getDate()) {
                        
                            initilizeDate.listMonthViewString.push(`
                                <td class="today" attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                        <div class="calender-content">
                                            <div class="days-wrapper">${i}</div>
                                            <div class='list-event'></div>
                                        </div>
                                    </td>`);
                        }else
                        {
                            initilizeDate.listMonthViewString.push(`
                            <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                    <div class="calender-content">
                                        <div class="days-wrapper">${i}</div>
                                        <div class='list-event'></div>
                                    </div>
                                </td>`);
                        }
                }    
                
                tdCount++;
            
            }

            //fill the next Month
            const diff = (initilizeDate.row) * 7 - lastDayOfCurrentMonth; //"7 == week"
    
            for (let i = 1; i <= diff; i++) {
                if(initilizeDate.calenderList.length < (initilizeDate.row * 7 ))
                {
                    //this for checking ordoring column ==> that we show 7 col "week" in calender  
                    if(tdCount % 7 == 0)
                    {
                        //initilizeDate.listMonthViewString.push(`<td id="${i}" class="next-month-day" >${i}</td><tr/>`);
                    
                        initilizeDate.listMonthViewString.push(`
                        <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td><tr/>`);
                        
                    }
                    else{
                        //initilizeDate.listMonthViewString.push(`<td id="${i}" class="next-month-day" >${i}</td>`);

                        initilizeDate.listMonthViewString.push(`
                        <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td>`);
                    }

                    count++;
                }
            }

            //update DOM
            let parent = document.getElementById("tbodyMonthView");
            parent.innerHTML = "";//clear
            parent.insertAdjacentHTML("beforeend", initilizeDate.listMonthViewString.join(""));
            
        }
        else
        {
            //other month has no prev month
            //console.log("test this ",initilizeDate.currentDate);

            //fill the current Month
            for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
                
                if(tdCount % 7 == 0)
                {
                   // initilizeDate.listMonthViewString.push(`<td id="${i}">${i}</td><tr/>`);

                    initilizeDate.listMonthViewString.push(`
                        <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                        </td><tr/>`);
                }
                else
                {
                   // initilizeDate.listMonthViewString.push(`<td id="${i}">${i}</td>`);

                    initilizeDate.listMonthViewString.push(`
                        <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td>`);
                }
                tdCount++;
                
            }

            //fill the next Month
            const diff = (initilizeDate.row) * 7 - lastDayOfCurrentMonth; //"7 == week"
    
            for (let i = 1; i <= diff; i++) {
                
                if(initilizeDate.calenderList.length < (initilizeDate.row * 7 ))
                {
                    if(tdCount % 7 == 0)
                    {
                       // initilizeDate.listMonthViewString.push(`<td id="${i}" class="next-month-day" >${i}</td><tr/>`);

                        initilizeDate.listMonthViewString.push(`
                        <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td><tr/>`);
                    }
                    else
                    {
                        //initilizeDate.listMonthViewString.push(`<td id="${i}" class="next-month-day" >${i}</td>`);

                        initilizeDate.listMonthViewString.push(`
                        <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td>`);
                    }
                }
                tdCount++;
            }

            //update DOM
            let parent = document.getElementById("tbodyMonthView");
            parent.innerHTML = "";//clear
            parent.insertAdjacentHTML("beforeend", initilizeDate.listMonthViewString.join(""));
        }

    }
    else{

        let htmlStringTxt = "<tr>";
    
        //if this condition is true mean's that we are in the current date and also not the begginig of the month "is not sunday"
        if (compareTwoDates(currentDate, dateSys)) {
            
            //add previous month to calender list
            for (let i = lastPrevMonthDay - lastPrevMonthDayIndex; i <= lastPrevMonthDay; i++) {
            
                initilizeDate.listMonthViewString.push(`
                        <td class="prev-month-day" attr-date="${prevMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td>
                    `);
                tdCount++;
        
            }
        
            //console.log(tdCount);
            //fill the current month
            for (let i = 1; i <= lastDayOfCurrentMonth; i++) {

            
                //1 = 4, 2 = 5, 3 = 6, 4 = 7
                if((tdCount)  % 7 == 0)
                {
                   // htmlStringTxt += `<tr/><tr>`;
                    //initilizeDate.listMonthViewString.push(`<td id="${i}">${i}</td><tr/>`);

                    if (i == dateSys.getDate()) {
                        
                        initilizeDate.listMonthViewString.push(`
                            <td class="today" attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                    <div class="calender-content">
                                        <div class="days-wrapper">${i}</div>
                                        <div class='list-event'></div>
                                    </div>
                                </td><tr/>`);
                    }else
                    {
                        initilizeDate.listMonthViewString.push(`
                        <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td><tr/>`);
                    }
                    
                }else
                {
                    // i == dateSys.getDate() ?  initilizeDate.listMonthViewString.push(`<td id="${i}" class="today" >${i}</td>`) : 
                    // initilizeDate.listMonthViewString.push(`<td id="${i}">${i}</td>`);

                    if (i == dateSys.getDate()) {
                        
                        initilizeDate.listMonthViewString.push(`
                            <td class="today" attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                    <div class="calender-content">
                                        <div class="days-wrapper">${i}</div>
                                        <div class='list-event'></div>
                                    </div>
                                </td>`);
                    }else
                    {
                        initilizeDate.listMonthViewString.push(`
                        <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td>`);
                    }

                }
        
                tdCount++;
            
            }

            //fill the next month
            const diff = (initilizeDate.row) * 7 - lastDayOfCurrentMonth; //"7 == week"
    
            for (let i = 1; i <= diff; i++) {
                if(initilizeDate.listMonthViewString.length <= (initilizeDate.row * 7 ))//
                {
                    if(tdCount % 7 == 0)
                    {
                    //     initilizeDate.listMonthViewString.push(`<td id="${i}">${i}</td><tr/>`);
                    //    // htmlStringTxt += "<tr/>";
                        initilizeDate.listMonthViewString.push(`
                            <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                    <div class="calender-content">
                                        <div class="days-wrapper">${i}</div>
                                        <div class='list-event'></div>
                                    </div>
                                </td>
                            <tr/>
                        `);
                    }
                    else
                    {
                        //initilizeDate.listMonthViewString.push(`<td id="${i}" class="next-month-day" >${i}</td>`);
                        
                        initilizeDate.listMonthViewString.push(`
                            <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                    <div class="calender-content">
                                        <div class="days-wrapper">${i}</div>
                                        <div class='list-event'></div>
                                    </div>
                                </td>`);
                        
                    }
                    //htmlStringTxt += `<td id="${i}" class="next-month-day" >${i}</td>`;

                    tdCount++;
                }    
            }
        
          //  console.log(initilizeDate.listMonthViewString);
        
    
            let parent = document.getElementById("tbodyMonthView");
            parent.innerHTML = "";//clear
            //parent.innerHTML = htmlStringTxt;
        
            parent.insertAdjacentHTML("beforeend", initilizeDate.listMonthViewString.join(""));

        }
        else
        {
        
            //add previous month to calender list
            for (let i = lastPrevMonthDay - lastPrevMonthDayIndex; i <= lastPrevMonthDay; i++) {
                
                initilizeDate.listMonthViewString.push(`
                <td class="prev-month-day" attr-date="${prevMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                        <div class="calender-content">
                            <div class="days-wrapper">${i}</div>
                            <div class='list-event'></div>
                        </div>
                    </td>
                `);

                tdCount++;
            }
        
            //fill the current month
            for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
                
                if(tdCount % 7 == 0)
                {
                    //initilizeDate.listMonthViewString.push(`<td id="${i}">${i}</td><tr/>`);

                    initilizeDate.listMonthViewString.push(`
                    <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                            <div class="calender-content">
                                <div class="days-wrapper">${i}</div>
                                <div class='list-event'></div>
                            </div>
                        </td><tr/>`);
                }
                else
                {

                    // initilizeDate.listMonthViewString.push(`<td id="${i}">${i}</td>`);
        
                    initilizeDate.listMonthViewString.push(`
                    <td attr-date="${formatDateCompare(initilizeDate.currentYear+"-"+initilizeDate.currentMonth+"-"+i)}">
                            <div class="calender-content">
                                <div class="days-wrapper">${i}</div>
                                <div class='list-event'></div>
                            </div>
                        </td>`);
                    
                }

                tdCount++;
            }
        
            //fill the next month
            const diff = (initilizeDate.row) * 7 - lastDayOfCurrentMonth; //"7 == week"
        
            for (let i = 1; i <= diff; i++) {

                if((initilizeDate.listMonthViewString.length)  < (initilizeDate.row * 7 ) + 1)
                {
                    if(tdCount % 7 == 0)
                    {
                       // initilizeDate.listMonthViewString.push(`<td id="${i}" class="next-month-day" >${i}</td><tr/>`);

                        initilizeDate.listMonthViewString.push(`
                        <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td><tr/>`);
                    }
                    else
                    {
                       // initilizeDate.listMonthViewString.push(`<td id="${i}" class="next-month-day" >${i}</td>`);

                        initilizeDate.listMonthViewString.push(`
                        <td class="next-month-day" attr-date="${nextMonthToString(initilizeDate.currentYear,initilizeDate.currentMonth,i)}">
                                <div class="calender-content">
                                    <div class="days-wrapper">${i}</div>
                                    <div class='list-event'></div>
                                </div>
                            </td>`);
                    }
                }
                tdCount++;
            }
          //  console.log(initilizeDate.listMonthViewString.length);
            //test
            let parent = document.getElementById("tbodyMonthView");
            parent.innerHTML = "";//clear
            parent.insertAdjacentHTML("beforeend", initilizeDate.listMonthViewString.join(""));
        }

    }

    //this methhod loads month view event
    callEventList();

    //place for handling modals
    document.querySelectorAll('.calender-content').forEach((td) => {
        td.onclick = (e) => {
        
            document.getElementById("modal-2").classList.toggle("modal-state-checked");
            document.getElementById("modal-2").classList.toggle("modal-state");

            //get all forminputs id
            let eventTitle2 = document.getElementById("eventTitle2");
            let startDate2 = document.getElementById("startDate2");
            let endDate2 = document.getElementById("endDate2");
            let modal2_select = document.getElementById("modal2_select");

            //idEvent
            let idEvent= null;
    
            //clear all input
            eventTitle2.value = startDate2.value = endDate2.value = modal2_select.value = "";

            if (e.target.tagName === "A") {
              //  console.log(e.target.id);
                //ensure that generalEventList is not null 
                if (generalEventList)
                {
                    Object.values(generalEventList).forEach(list =>{

                        if (e.target.id == list.idEvent) {
                            //fill the inputs with value when user click a specific event ::purpose to update or delete
                            eventTitle2.value = list.eventTitle;
                            startDate2.value = list.startDate;
                            endDate2.value = list.endDate;
                            modal2_select.value = list.idCategory;

                            eventIdGen = list.idEvent;

                            // //start handle delete event
                            // const deleteEventBtn =  document.getElementById("deleteEventBtn");

                            // deleteEventBtn.addEventListener("click", function(e) {
                            //     e.preventDefault();
                            //     const confirmed = confirm(`Are you sure you want to Delete this event id == ${list.idEvent} ?`);

                            //     let id = list.idEvent;
                            //     if (confirmed) {
                            //         // handleDeleteEvent(list.idEvent)
                            //         handleDeleteEvent(id)
                            //       //  return;
                            //     } 
                            //     id= "";
                            // });
                            // //start handle delete 
                            
                            //start handle edit event
                            const updateEventBtn =  document.getElementById("updateEventBtn");

                            updateEventBtn.addEventListener("click", function(e) {
                                e.preventDefault();

                                    handleEditEvent(list.idEvent)
                                
                            });
                            //end handle edit event
                        
                            
                        }
                        
                    });
                }
            
            }else
            {
                //show another modal
                const editModal = document.getElementById("modal-2");
                editModal.classList.replace("modal-state-checked", "modal-state");
                //show add on click on cell modal
                const addEventCell = document.getElementById("modal-3");
                addEventCell.classList.replace("modal-state", "modal-state-checked");

            }
           // console.log(td.querySelector(".list-event"));
        };
    });

    var navigationTitle = document.getElementById("month-year-title");
    navigationTitle.innerHTML = printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth)


}



//handle delete event
 //start handle delete event
const deleteEventBtn =  document.getElementById("deleteEventBtn");

    deleteEventBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const confirmed = confirm(`Are you sure you want to Delete this event id == ${eventIdGen} ?`);

        let id = eventIdGen;
        if (confirmed) {
            // handleDeleteEvent(list.idEvent)
            handleDeleteEvent(id)
        //  return;
        } 
    
});
 //start handle delete 

function handleDeleteEvent(id) {

       // e.preventDefault();
       // const idEvent = getEventId(); // implement this function to get the ID of the event to delete
        const idEvent = id; 
        const xhr = new XMLHttpRequest();


        xhr.open("DELETE", `../includes/events/deleteEvent.inc.php?idEvent=${idEvent}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
        if (xhr.status === 200) {
            
            fillCalenderList();
            //
            const  editDeleteModal = document.getElementById("modal-2");

            editDeleteModal.classList.replace("modal-state-checked", "modal-state")

        } else {
            // handle error
        }
        };
        xhr.send();
}

//handle update event
function handleEditEvent(id) {
    //get the id of event
    const idEvent = id; 

    const editEventForm = document.getElementById("editEventForm");
    // Get the form data
    const formData = new FormData(editEventForm);
    formData.append('idEvent', idEvent);

    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `../includes/events/updateEvent.inc.php`);
    xhr.setRequestHeader("Content-Type", "application/json");
   // xhr.setRequestHeader("Content-Type", "multipart/form-data");
  //  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    const data = {};
    for (let [key, value] of formData.entries()) {

        data[key] = value;

    }

    xhr.onload = function() {
        if (xhr.status === 200) {
            
            fillCalenderList();
            //
            const  editDeleteModal = document.getElementById("modal-2");

            editDeleteModal.classList.replace("modal-state-checked", "modal-state")

        } else {
            // handle error
        }
    };

    xhr.send(JSON.stringify(data));

}

//function to print month and year in navigation
function printNavigationMonthAndYear(year,month) {

    //all Month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    

    return monthNames[month - 1] + " " + year;

}

//console.log( printNavigationMonthAndYear(initilizeDate.currentYear, initilizeDate.currentMonth));

//
function getDateByOption(action)
{
    // all options
    const options = ["GET_CURRENT_YEAR", "GET_CURRENT_MONTH", "GET_CURRENT_DAY_NAME", 
        "GET_CURRENT_DAY_NUMBER", "GET_CURRENT_TIME"
    ];

    //intialize the date
    var date = new Date(action.payload);


    //all Month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    //all day of week
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    "Sunday"];


    switch (action.type) 
    {
        case "GET_CURRENT_YEAR":
            return new Date(action.payload).getFullYear();
    
        case "GET_CURRENT_MONTH_NAME":
            return monthNames[date.getMonth()];

        case "GET_CURRENT_DAY_NAME":
            return dayNames[date.getDay() - 1]; 
            
        case "GET_CURRENT_DAY_NUMBER":
            return date.getDate();
        
        case "GET_CURRENT_TIME":
                return pairNbrFormat(date.getHours()) + " : " + pairNbrFormat(date.getMinutes());
        case "GET_CURRENT_MONTH_FIRST_DAY_INDEX":
                //return first day index of current Month
                /*add data to param* new Date("2022-10-15")*/ 
                const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

                return firstDay.getDay();

        case "GET_CURRENT_MONTH_LAST_DAY":  
                const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

            return lastDay.getDate();
        case "GET_CURRENT_MONTH_LAST_DAY_INDEX":  
                const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0);

            return lastDayIndex.getDay();

        case "LAST_PREV_MONTH_DAY":
            date.setDate(0);
            return  date.getDate();

        case "LAST_PREV_MONTH_DAY_INDEX":
            date.setDate(0);
            return  date.getDay();
        default:
            break;
    }

}

//function to add 0 to number exmple :: 1 ==> 02
function pairNbrFormat(nbr) {
    return (nbr < 10) ? '0' + nbr.toString() : nbr.toString();
}

//compare two dates
function compareTwoDates(date1, date2)
{
    if(date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth())
    {
        return true;
    }
    else
    {
        return false;
    }

}


//function to print date as year-month-day
function formatDate(datePlaceHolder)
{
    //if we pace new Date in place holder that's mean we whant the current date
    var date = datePlaceHolder;
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    return newdate = year + "-" + pairNbrFormat(month) + "-" + pairNbrFormat(day);
}



//update DOM
document.getElementById("month-year-title").setAttribute("current-date",initilizeDate.currentDateFormat);

const navigationTitle = document.getElementById("month-year-title");




 //add month view Event
// var eventList;

function getEventList() {
    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "../includes/events/eventList.inc.php", true);

        xhr.onload = function () {
        if (this.status === 200) {

            resolve(JSON.parse(this.responseText));

        } else {
            reject(new Error("can't fetch the event"));
        }
        };
        xhr.send();
    });
}

function callEventList() {
    getEventList().then(function (data) 
    {
        generalEventList = JSON.parse(JSON.stringify(data));
        //let ss=data;
        let eventList =  JSON.parse(JSON.stringify(data));//with like to fix edit to data because it's object it's refrence type

        
        // order aray by .start date
        eventList.sort(function(a, b) {
            return new Date(b.startDate) - new Date(a.startDate);
        });

        //remove time from dates 
        let newEventList = removeTimeFromDates(eventList);

        //
        var tds = document.getElementById("tbodyMonthView").querySelectorAll("td[attr-date]");

        tds.forEach(td => {
            
            Object.values(newEventList).forEach(function(event) {
            
                //long event  td.getAttribute("attr-date") == event.startDate && td.getAttribute("attr-date") != event.end
                if(td.getAttribute("attr-date") == event.startDate && td.getAttribute("attr-date") != event.end)
                {
                    //short event
                    if (event.startDate == event.endDate) {
                        td.firstElementChild.querySelector(".list-event").innerHTML += 
                                    `<a class='short-event' id="${event.idEvent}" attr-startDate="${event.startDate}"  attr-endDate="${event.endDate}"
                                    style='background-color: ${event.categoryColor};width:100%'>${event.eventTitle}</a>`; 
                    }

                    //long event
                    tds.forEach(td => {
                    
                        //long event
                        if( event.startDate != event.end)
                        {
                            //if (td.getAttribute("attr-date") == event.startDate && td.getAttribute("attr-date") < event.endDate) {
                            if (td.getAttribute("attr-date") == event.startDate && td.getAttribute("attr-date") < event.endDate) {
                                
                                td.firstElementChild.querySelector(".list-event").innerHTML += 
                                    `<a class='long-event' id="${event.idEvent}" style='background-color: ${event.categoryColor};width:110%'>${event.eventTitle}</a>`;
                                    
                                
                            }

                            if(td.getAttribute("attr-date") > event.startDate && td.getAttribute("attr-date") <= event.endDate)
                            { 
                                if(td.getAttribute("attr-date") == event.endDate)
                                {
                                    td.firstElementChild.querySelector(".list-event").innerHTML += 
                                    `<a class='long-event' id="${event.idEvent}" style='background-color: ${event.categoryColor}; width:100%'>&nbsp</a>`; 
                                }else
                                {
                                    td.firstElementChild.querySelector(".list-event").innerHTML += 
                                    `<a class='long-event' id="${event.idEvent}" style='background-color: ${event.categoryColor}; width:110%'>&nbsp</a>`; 
                                }
                            }
                            
                        }

                    

                        // if(td.getAttribute("attr-date") == event.endDate)
                        // { 
                        //     td.firstElementChild.querySelector(".list-event").innerHTML += 
                        //     `<a class='long-event' style='background-color: ${event.categoryColor}; width:100%'>&nbsp</a>`; 

                        // }


                    })
                    
                }

            
            });

            
        
        });


        //::::::::load event in week view Calender ::::::::::
        let eventWeekList =  JSON.parse(JSON.stringify(data));

        const weekTds = document.getElementById("tbodyWeekView").querySelectorAll('.td-week-event');

        //edit to adding startTime and endTime
        let editedWeekeventList = editWeekDayListEvent(eventWeekList);
        //remove time from startDate and endDate
        for (let key in editedWeekeventList) {
            let event = editedWeekeventList[key];

            event.startDate = event.startDate.split(" ")[0];
            event.endDate = event.endDate.split(" ")[0];

        }


        //class week-event
        tdHeight = 0;
        weekTds.forEach(td => {

            for (let key in editedWeekeventList) {
                
                let event = editedWeekeventList[key];

                if (td.getAttribute("attr-time") <= event.startTime && td.getAttribute("attr-end-time") > event.startTime
                    && td.getAttribute("attr-date") == event.startDate) 
                {
                   // rowspan = getTimeDifference(event.startTime, event.endTime);
                    const { rowspan, fullTime } = getTimeDifference(event.startTime, event.endTime);

                    let colspan = 0;

                       // console.log();
                    if (getDaysDiff(new Date(event.startDate), new Date(event.endDate)) > 0) {
                        colspan = getDaysDiff(new Date(event.startDate), new Date(event.endDate) );

                    }
                

                    let eventElement = document.createElement("a");
                    eventElement.textContent = `${event.eventTitle} ${fullTime}`;
                    
                    eventElement.style.cssText = `  position: absolute;
                                                    background-color: ${event.categoryColor};
                                                    height: ${rowspan * 40}px;
                                                    font-size: 14px;
                                                    color: #fff;
                                                    padding: 2px;
                                                    border-radius: 8px;
                                                    width: ${120 + (120 * colspan)}px;
                                                    display: flex;
                                                    flex-direction: column;
                                                    `;

                    td.appendChild(eventElement);


            
                    break;//this one 
                }
            
    
            }

        

        });


        //::::::::load event in Days view Calender ::::::::::
        let eventDayList =  JSON.parse(JSON.stringify(data));

        const dayTds = document.getElementById("tbodyDaysView").querySelectorAll('.td-day-event');

        //edit to adding startTime and endTime
        let editedDayeventList = editWeekDayListEvent(eventDayList);
        //remove time from startDate and endDate
        for (let key in editedDayeventList) {
            let event = editedDayeventList[key];

            event.startDate = event.startDate.split(" ")[0];
            event.endDate = event.endDate.split(" ")[0];

        }


        //class day-event
        dayTds.forEach(td => {

            for (let key in editedDayeventList) {
                
                let event = editedDayeventList[key];

                if (td.getAttribute("attr-time") <= event.startTime && td.getAttribute("attr-end-time") > event.startTime
                    && td.getAttribute("attr-date") == event.startDate) 
                {
                   // rowspan = getTimeDifference(event.startTime, event.endTime);
                    const { rowspan, fullTime } = getTimeDifference(event.startTime, event.endTime);              

                    let eventElement = document.createElement("a");
                    eventElement.textContent = `${event.eventTitle} ${fullTime}`;
                    
                    eventElement.style.cssText = `  position: absolute;
                                                    background-color: ${event.categoryColor};
                                                    height: ${rowspan * 40}px;
                                                    font-size: 14px;
                                                    color: #fff;
                                                    padding: 2px;
                                                    border-radius: 8px;
                                                    width: 865px;
                                                    display: flex;
                                                    flex-direction: column;
                                                    `;

                    td.appendChild(eventElement);


            
                    break;//this one 
                }
            
    
            }

        

        });


    }).catch(function (error) {
        console.error(error.message);
    });
}

//callEventList();

//this function to get the time diffrence we need this to figure out the rowspan nbr
//console.log(getTimeDifference("11:31","13:30")); 
// function getTimeDifference(time1, time2) {
//     const time1Parts = time1.split(':');
//     const time2Parts = time2.split(':');
//     const hour1 = parseInt(time1Parts[0]);
//     const hour2 = parseInt(time2Parts[0]);
//     const minute1 = parseInt(time1Parts[1]);
//     const minute2 = parseInt(time2Parts[1]);

//     let newTime1;
//     let newTime2;
//     let newMinute1;
//     if (minute1 > 30) {
//         newMinute1 = "30";
//     }
//     else{
//         newMinute1 = "00";
//     }

//     let newMinute2;
//     let newHour2; 

//     if (minute2 > 30) {
//         newHour2 = hour2 + 1;
//         newMinute2 = "00";
//     }
//     else
//     {
//         newMinute2 = "30";
//         newHour2 = hour2;
//     }

//     newTime1 = hour1 + ":" + newMinute1;
//     newTime2 = newHour2 + ":" + newMinute2;
    
//     // const totalMinutes = Math.floor((minute1 + minute2) / 60);
//     // const diffHour = (Math.abs(hour2 - hour1) + totalMinutes);
//   //  const totalMinutes = Math.floor(Math.abs(minute1 - minute2) / 60);
//     //const diffHour = (Math.abs(hour2 - hour1) + totalMinutes);
    

//    // return (Math.abs((hour2 - hour1) * 2) + totalMinutes) ;
//     return getHalfHourIntervals(newTime1, newTime2);
// }

function getTimeDifference(time1, time2) {
    const time1Parts = time1.split(':');
    const time2Parts = time2.split(':');
    const hour1 = parseInt(time1Parts[0], 10); // parse as base 10
    const hour2 = parseInt(time2Parts[0], 10);
    const minute1 = parseInt(time1Parts[1], 10);
    const minute2 = parseInt(time2Parts[1], 10);

    // pad hour with leading zero if it's a single digit number
    const paddedHour1 = hour1 < 10 ? '0' + hour1 : hour1.toString();
    const paddedHour2 = hour2 < 10 ? '0' + hour2 : hour2.toString();

    let newTime1;
    let newTime2;
    let newMinute1;

    if (minute1 > 30) {
    newMinute1 = '30';
    } else {
    newMinute1 = '00';
    }

    let newMinute2;
    let newHour2;

    if (minute2 > 30) {
    newHour2 = hour2 + 1;
    newMinute2 = '00';
    } else {
    newMinute2 = '30';
    newHour2 = hour2;
    }

    // pad hour with leading zero if it's a single digit number
    const paddedHour2Plus1 = newHour2 < 10 ? '0' + newHour2 : newHour2.toString();

    newTime1 = paddedHour1 + ':' + newMinute1;
    newTime2 = paddedHour2Plus1 + ':' + newMinute2;

    const fullTime = newTime1 + " " + newTime2;

    return {rowspan : getHalfHourIntervals(newTime1, newTime2),fullTime: fullTime};
}


function getHalfHourIntervals(startTime, endTime) {
    const now = new Date();
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);

    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHour, startMinute);
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHour, endMinute);

    const diff = (end.getTime() - start.getTime()) / 1000 / 60; // get difference in minutes
    const intervals = Math.round(diff / 30); // divide by 30 minutes and round to nearest integer

    return intervals;
}

//get day diffrente
function getDaysDiff(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}


//function to exclude the the secend part of object and return new one purpose 2023-02-08 21:29:00 ==> 2023-02-08 
function removeTimeFromDates(object) 
{
    var newObject = Object.assign({}, object);//create a copy of object

    for (let i = 0; i < object.length; i++) {
    
        newObject[i].startDate = object[i].startDate.split(" ")[0];//override the properite  
        newObject[i].endDate = object[i].endDate.split(" ")[0];
        
    }

    return newObject;
}






//reformate date  example 2023-1-1 to ==> 2023-01-01
function formatDateCompare(date) {

    const dateArray = date.split("-");

    const year = dateArray[0];
    let month = dateArray[1];
    let day = dateArray[2];
    
    if (month.length === 1) {
        month = "0" + month;
    }
    
    if (day.length === 1) {
        day = "0" + day;
    }
    
    return year + "-" + month + "-" + day;
}

//console.log(replaceDay(getNextMonthDateFormat(), 12));

//replace date purpuse fix next month day
function replaceDay(dateStr, newDay) {
    const dateArr = dateStr.split("-");
    dateArr[2] = newDay;
    return dateArr.join("-");
}


//get the next month to print in next date td
function nextMonthToString(year,month,day){

    if(month == 12)
    {
        month = 1;
        year++;
    }
    else
    {
        month++;
    }

    return year.toString() + "-" + month.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0');
}

//get the prev month to print in next date td
function prevMonthToString(year,month,day)
{
    if(month == 1)
    {
        month = 12;
        year--;
    }
    else
    {
        month--;
    }


    return year + "-" + month.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0');
}


//function to get time in hour:minutes
function getTime(date) {
    var date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    return hours + ":" + minutes;
}

//console.log(getTime("2023-02-08 21:29:00"));

/*unction to edit event to create new object of with new properites ("startTime & endTime")
function to edit list events for weeks and day calender ::purpose to compare the current week with list event by time nd start date */
function editWeekDayListEvent(objParam) {

    let newObj = Object.assign({}, objParam);


    Object.values(newObj).forEach(obj =>{

        obj.startTime = getTime(obj.startDate);
        obj.endTime = getTime(obj.endDate);

        
    });
    
    return newObj;
}


//to do fiix next btn month calender events duplicated

//the function navigation
function generateNavWeekCalendar(date) {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    let week = [];
    let day = new Date(startOfWeek);
    while (day <= endOfWeek) {
    week.push(new Date(day));
        day.setDate(day.getDate() + 1);
    }

    // var formattedDate = date.toLocaleDateString("en-US", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit"
    // });
    var newFormattedDate = [];

    Object.values(week).forEach(weekDate =>{
        
        var formattedDate = weekDate.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });

      //  newFormattedDate.push(formattedDate.split("/").reverse().join("-"));

        newFormattedDate.push(formattedDate.split("/").reverse().join("-"));


    });
    


    //console.log("cha ",newFormattedDate);
    // formattedDate = formattedDate.split("/").reverse().join("-");
    
    // let [year, month, dayF] = formattedDate.split("-");
    

    return newFormattedDate;
}

