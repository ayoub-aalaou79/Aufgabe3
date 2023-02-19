<?php 

    // require "../models/event.class.php";
    require "../controllers/eventController.php";

    
    $eventCtr = new EventController();

  //  $idEvent = isset($_GET['idEvent']) ? var_dump($_GET['idEvent'])  : null;


    if(isset($_GET["idEvent"]))
    {

        //echo $_GET["idEvent"];
        

        echo  $eventCtr->deleteEvent($_GET["idEvent"]);
       // echo json_encode(["message" => "success"]);
        
        return;
    }
    
    echo json_encode(["message" => "erroooor"]);
