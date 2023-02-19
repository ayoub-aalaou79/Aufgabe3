<?php 

    // require "../models/event.class.php";
    require "../controllers/eventController.php";

    
    $eventCtr = new EventController();

  //  echo isset($data["eventTitle"]) ? $data["eventTitle"] : "error";

  // Get the incoming request body
    $requestBody = file_get_contents('php://input');

    // Parse the request body as JSON
    $data = json_decode($requestBody, true);


    if(isset($data["idEvent"]) && isset($data["eventTitle"]) && isset($data["startDate"]) && isset($data["endDate"]) && isset($data["category"]))
    {

        echo  $eventCtr->updateEvent($data["idEvent"], $data["eventTitle"], $data["startDate"], $data["endDate"], $data["category"]);
       // echo json_encode(["message" => "success"]);
        
        return;
    }
    
    echo json_encode(["message" => "erroooor"]);
