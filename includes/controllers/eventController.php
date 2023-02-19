<?php


require 'db.php';
require '../models/event.class.php';
require '../models/category.class.php';


class EventController
{

    public Database $connectionManger;

    public function __construct()
    {
        $this->connectionManger = new Database();
        $this->connectionManger->connect();
    }

    function addEvent(Event $event)
    {

        //insert into event 
        $sql = "INSERT INTO event (eventTitle, startDate, endDate, idCategory) VALUES 
            ('" . $event->__get('eventTitle') . "','" . $event->__get('startDate') . "','" . $event->__get('endDate') . "','" . $event->__get('idCategory') . "')";

        //echo $sql;
        // use exec() because no results are returned
        $this->connectionManger->conn->exec($sql);
        // $this->connectionManger->conn->exec("INSERT INTO `event`(`eventTitle`, `startDate`, `endDate`, `idCategory`) VALUES
        // ('{$event->__get("eventTitle")}','2023-01-30 20:30:01','2023-01-30 20:30:01','1')");

        return json_encode(["message" => "success"]);
    }

    function deleteEvent($idEvent)
    {
        $pdo = $this->connectionManger->conn->prepare("DELETE FROM event WHERE idEvent = :idEvent");
        $pdo->bindValue(':idEvent', $idEvent, PDO::PARAM_STR);
        $pdo->execute();
    }

    function updateEvent($idEvent, $eventTitle, $startDate, $endDate, $idCategory)
    {
        $pdo = $this->connectionManger->conn->prepare("update event set eventTitle = :eventTitle, 
            startDate = :startDate, endDate = :endDate, idCategory = :idCategory WHERE idEvent = :idEvent");
    

        $pdo->bindValue(':idEvent', $idEvent, PDO::PARAM_STR);
        $pdo->bindValue(':eventTitle',$eventTitle, PDO::PARAM_STR);
        $pdo->bindValue(':startDate', $startDate, PDO::PARAM_STR);
        $pdo->bindValue(':endDate', $endDate, PDO::PARAM_STR);
        $pdo->bindValue(':idCategory', $idCategory, PDO::PARAM_STR);


        $pdo->execute();
    }

    function eventList()
    {
        // $sql = "select * from event";
        $sql = "SELECT event.idEvent, event.eventTitle, event.startDate, event.endDate, event.idCategory, category.categoryColor
        FROM event
        JOIN category
        ON event.idCategory = category.idCategory";
        $stmt = $this->connectionManger->conn->prepare($sql);
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return json_encode($stmt->fetchAll());
    }
}
