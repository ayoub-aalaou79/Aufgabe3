<?php 
    
    // require "../controllers/eventController.php";

    // $e1 = new EventController();
    

    // $e1->addEvent(new Event(1, "event title test", "2023-01-30 20:30:01", "2023-02-01 20:30:01", 1));

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta npme="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aufgabe 03</title>

    <!--google font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <!--fontawsome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!--my style-->
    <link rel="stylesheet" href="../assets/css/style.css">

</head>
<body>
    
    <!--start calender-->
    <section id="calender" class="month-view-calendar">
        <div class="calender-wrapper">
            <section class="navigation-wrapper">
                <nav>
                    <div class="left-area-nav">
                        <div class="conected-buttons">
                            <a id="prev-month" class="btn primary-btn"><i class="fas fa-chevron-left"></i></a>
                            <a id="next-month" class="btn primary-btn"><i class="fas fa-chevron-right"></i></a>
                        </div>
                        <a class="btn primary-btn" id="todayBtn">today</a>
                    </div>
                    <div class="current-calender-title">
                        <h2 id="month-year-title">January 2023</h2>
                    </div>
                    <div class="left-area-nav">
                        <div class="conected-buttons">
                            <a id="month-view-btn" class="btn primary-btn">month</a>
                            <a id="week-view-btn" class="btn primary-btn">week</a>
                            <a id="day-view-btn" class="btn primary-btn">day</a>
                            <!-- <a id="list-view-btn" class="btn primary-btn">list</a> -->
                        </div>
                    </div>
                </nav>
            </section>

            <!--===start month view===-->
            <div id="month-view" class="calender-content-wrapper month-view">
                <table cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                    </thead>
                    <tbody id="tbodyMonthView">
                        
                    
                            
                    </tbody>
                </table>
            </div>
            <!--===end month view===-->

            <!--===start week view ===-->
            <div id="week-view" class="calender-content-wrapper week-view">  
                <!--start days week-->
                <div>
                    <div style="position: relative;height: 600px;overflow: hidden scroll;">

                        <table class="all-days-week-table">
                                <thead id="theadWeekView">
                                    <!-- <tr>
                                        <td style="width: 55px;"></td>
                                        <td><a>29 Sun</a></td>
                                        <td><a>30 Mon</a></td>
                                        <td><a>31 Tue</a></td>
                                        <td><a>1 Wed</a></td>
                                        <td><a>2 Thu</a></td>
                                        <td><a>3 Fri</a></td>
                                        <td><a>4 Sat</a></td>
                                    </tr> -->
                                </thead>
                            <tbody id="tbodyWeekView">
                                <!-- <div class="hour-week-row-container">
                                    <tr>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="00:00:00">
                                                    <td style="height: 32px !important;">12 am</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td>r</td>
                                                    <td></td>
                                                    <td attr-date="2023-01-2023" attr-time="12:00:00">
                                                        <a class="week-event">event</a>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="00:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="01:30:00">
                                                    <td style="height: 32px !important;">1 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="01:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="02:00:00">
                                                    <td style="height: 32px !important;">2 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="02:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="03:00:00">
                                                    <td style="height: 32px !important;">3 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="03:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="04:00:00">
                                                    <td style="height: 32px !important;">4 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="04:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="05:00:00">
                                                    <td style="height: 32px !important;">5 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="05:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="06:00:00">
                                                    <td style="height: 32px !important;">6 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="06:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="07:00:00">
                                                    <td style="height: 32px !important;">7 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="07:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="08:00:00">
                                                    <td style="height: 32px !important;">8 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="08:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="09:00:00">
                                                    <td style="height: 32px !important;">9 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="09:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="10:00:00">
                                                    <td style="height: 32px !important;">10 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="10:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="11:00:00">
                                                    <td style="height: 32px !important;">11 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="11:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>











                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="12:00:00">
                                                    <td style="height: 32px !important;">12 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="12:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="13:30:00">
                                                    <td style="height: 32px !important;">1 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="13:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="14:00:00">
                                                    <td style="height: 32px !important;">2 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="14:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="15:00:00">
                                                    <td style="height: 32px !important;">3 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="15:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="16:00:00">
                                                    <td style="height: 32px !important;">4 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="16:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="17:00:00">
                                                    <td style="height: 32px !important;">5 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="17:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="18:00:00">
                                                    <td style="height: 32px !important;">6 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="18:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="19:00:00">
                                                    <td style="height: 32px !important;">7 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="19:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="20:00:00">
                                                    <td style="height: 32px !important;">8 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="20:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="21:00:00">
                                                    <td style="height: 32px !important;">9 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="21:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="22:00:00">
                                                    <td style="height: 32px !important;">10 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="22:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>

                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="23:00:00">
                                                    <td style="height: 32px !important;">11 pm</td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td >
                                                        <div attr-date="2023-01-2023"  class="week-event-list">event</div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="hour" attr-time="23:30:00">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div attr-date="2023-01-2023" class="week-event-list">evrent</div>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>


                                    </tr>
                                    
                                </div> -->
                            </tbody>
                        </table>  
                    </div>
                    
                </div>
                <!--end days week-->

            </div>
            <!--===end week view===-->

            <!--===start day view===-->
            <div id="day-view" class="calender-content-wrapper day-view">
                <div>
                    <!-- <div style="position: relative;height: 26px;overflow: hidden scroll;">
                        <table cellpadding="0" cellspacing="0">
                            <div>
        
                                <thead>
                                    <tr>
                                        <td>saturday</td>
                                        
                                    </tr>
                                </thead>
                            </div>
                        </table>   
                        
                    </div>
                </div> -->
                
                <!--start days week-->
                <div>
                    <div style="position: relative;height: 600px;overflow: hidden scroll;">

                        <table class="all-days-week-table">
                            <thead id="theadDaysView">
                                <tr>
                                    <td style="width: 100px;"></td>
                                    <td>saturday</td>
                                </tr>
                            </thead>
                            <tbody id="tbodyDaysView">
                                <!-- <div class="hour-week-row-container">
                                    
                                    <tr>
                                        <div class="hour-date-content">
                                            <div class="hour">
                                                <td style="height: 32px !important;">12pm</td>
                                            </div>
                                            <div class="date-week-event">
                                                <td></td>
                                                <td></td>
                                                <td >
                                                    <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list" style="height: 36px; overflow: hidden auto;">
                                                        <a class="week-short-event">All day event 12: 00 - 12:30</a>
                                                        <a class="week-short-event">All day event</a>
                                                        <a class="week-short-event">All day event</a>
                                                        <a class="week-short-event">All day event</a>
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </div>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="half-hour">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><div class="week-event-list" style="height: 36px; overflow: hidden auto;">
                                                        <a class="week-short-event">All day event 12:00 01:00</a>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                    </tr>

                                    <tr>
                                        <div class="hour-date-content">
                                            <div class="hour">
                                                <td style="height: 32px !important;">1 pm</td>
                                            </div>
                                            <div class="date-week-event">
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <div attr-date="2023-01-2023" attr-time="12:00:00" class="week-event-list" style="height: 36px; overflow: hidden auto;">
                                                        <a class="week-short-event">All day event 01: 00 - 01:30</a>
                                                        <a class="week-short-event">All day event</a>
                                                        <a class="week-short-event">All day event</a>
                                                        <a class="week-short-event">All day event</a>
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </div>
                                        </div>
                                        
                                        <div class="hour-date-content">
                                            <tr>
                                                <div class="half-hour">
                                                    <td style="height: 32px !important;"></td>
                                                </div>
                                                <div class="date-week-event">
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><div class="week-event-list" style="height: 36px; overflow: hidden auto;">
                                                        <a class="week-short-event">All day event 01:00 02:00</a>
                                                    </div>
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </div>
                                            </tr>
                                        </div>
                                    </tr>
                                    
                                </div> -->
                            
                            </tbody>
                        </table>  
                    </div>
                    
                </div>
                <!--end days week-->

            </div>
            <!--===end day view===-->
        
        </div>
    </section>
    <!--end calender-->



    <!--==>start Month view add cell Modal<==-->
    <input class="modal-state" id="modal-3" type="checkbox"/>

    <div class="modal month-modal" id="cellAddEvent">
        <label class="modal__bg" for="modal-3"></label>
        <div class="modal__inner">
            <label class="modal__close" for="modal-3"></label>
            <h2>Add Event</h2>
            <form id="updateDeleteModal" action="../includes/events/addEvent.inc.php" method="POST">
                <table>
                    <tr>
                        <div class="form-group">
                            <td><label for="">Event Title : </label></td>
                            <td><input type="text" name="eventTitle" id="" placeholder="Add event title" required/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">Start Date : </label></td>
                            <td><input type="datetime-local" name="startDate" id="" required/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">End Date : </label></td>
                            <td><input type="datetime-local" name="endDate" id=""/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">Event Category : </label></td>
                            <td>
                                <select name="category" id="modal3_select"  required>
                                    <option value="" selected disabled>
                                        <div class="category-option-container">
                                            <span>select event category </span>
                                            <div class="category-color-box"></div>
                                        </div>
                                    </option>
            
                                </select>
                            </td>
                        </div>
                    </tr>

                    
                </table>
                <div class="submition-event-container">
                    <div>
                        <!-- <button type="submit" class="btn danger-btn">Delete Event</button>  -->
                    </div> 
                    <div class="right-submit-modal-buttons">
                        <button type="submit" class="btn second-btn">Add Event</button>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!--==>end Month view add cell Modal<==-->



    <!--==>start update or delete event Modal<==-->
    <input class="modal-state" id="modal-2" type="checkbox"/>
    
    <div class="modal month-modal " id="addCellModal">
        <label class="modal__bg" for="modal-2"></label>
        <div class="modal__inner">
            <label class="modal__close" for="modal-2"></label>
            <h2>Update or Delete Event</h2>
            <!-- action="../includes/events/addEvent.inc.php" method="POST" -->
            <form id="editEventForm">
                <table>
                    <tr>
                        <div class="form-group">
                            <td><label for="">Event Title : </label></td>
                            <td><input type="text" name="eventTitle" id="eventTitle2" placeholder="Add event title" required/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">Start Date : </label></td>
                            <td><input type="datetime-local" name="startDate" id="startDate2" required/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">End Date : </label></td>
                            <td><input type="datetime-local" name="endDate" id="endDate2"/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">Event Category : </label></td>
                            <td>
                                <select name="category" id="modal2_select" required>
                                    <option value="" selected disabled>
                                        <div class="category-option-container">
                                            <span>select event category </span>
                                            <div class="category-color-box"></div>
                                        </div>
                                    </option>
                                
            
                                </select>
                            </td>
                        </div>
                    </tr>

                    
                </table>
                <div class="submition-event-container">
                    <div>
                        <button type="submit" class="btn danger-btn" id="deleteEventBtn">Delete Event</button>
                    </div>
                    <div class="right-submit-modal-buttons">
                        <button type="submit" class="btn second-btn" id="updateEventBtn">Edit Event</button>
                        <!-- <button type="submit" class="btn primary-btn">Add Event</button> -->
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!--==>end update or delete event Modal<==-->

    <!--start add event modal-->
    <label id="addEvent" class="modal-btn cercle-btn" for="modal-1"><i class="far fa-plus"></i></label>


    <input class="modal-state" id="modal-1" type="checkbox"/>
    <div class="modal addEventModal">
        <label class="modal__bg" for="modal-1"></label>
        <div class="modal__inner">
            <label class="modal__close" for="modal-1"></label>
            <h2>Add Event</h2>
            <form id="modal1_form" action="../includes/events/addEvent.inc.php" method="POST">
                <table>
                    
                    <div class="errorMsg" id="errorMsg"></div>
                    
                    <tr>
                        <div class="form-group">
                            <td><label for="">Event Title : </label></td>
                            <td><input type="text" name="eventTitle" id="eventTitle" placeholder="Add event title" required/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">Start Date : </label></td>
                            <td><input type="datetime-local" name="startDate" id="startDate" required/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">End Date : </label></td>
                            <td><input type="datetime-local" name="endDate" id="endDate"/></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="form-group">
                            <td><label for="">Event Category : </label></td>
                            <td>
                                <select name="category" id="modal1_select" required>
                                    <option value="" selected disabled>
                                        <div class="category-option-container">
                                            <span>select event category </span>
                                            <div class="category-color-box"></div>
                                        </div>
                                    </option>
                                    
                                </select>
                            </td>
                        </div>
                    </tr>

                    
                </table>
                <div class="submition-event-container">

                    <button type="submit" class="btn primary-btn">Add Event</button>
                </div>
            </form>
        </div>
    </div>
    <!--end event modal modal-->

    <!--start Js-->
    <script type="text/javascript" src="../assets/js/calendar.js"></script>
    <script type="text/javascript" src="../assets/js/main.js"></script>


</body>
</html>