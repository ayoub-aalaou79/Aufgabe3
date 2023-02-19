<?php 

    // require "../models/event.class.php";
    require "../controllers/eventController.php";

    
    $eventCtr = new EventController();

    

        echo  $eventCtr->eventList();
       // echo json_encode(["message" => "success"]);
        
    
    