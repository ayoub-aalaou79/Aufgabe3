<?php 

    //require "../models/event.class.php";
    require "../controllers/eventController.php";

    
    $eventCtr = new EventController();

    $data = json_decode($_POST['data'], true);
    var_dump($data["eventTitle"]);
    if(isset($data["eventTitle"]) && isset($data["startDate"]) && isset($data["endDate"]) && isset($data["category"]))
    {
        
        $eventModel = new Event(-1,$data["eventTitle"], $data["startDate"], $data["endDate"], $data["category"]);

        echo  $eventCtr->addEvent($eventModel);
       // echo json_encode(["message" => "success"]);
        
        return;
    }
    
    echo json_encode(["message" => "erroooor"]);
