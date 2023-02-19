<?php
    class Database{

        const servername = "localhost";
        const  username = "root";
        const  password = "";
        public $conn = null;

        public function connect()
        {
            try {
                $this->conn = new PDO("mysql:host=".self::servername.";dbname=calender_db", self::username, self::password);
            
                // set the PDO error mode to exception
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // echo "Connected successfully";
            
            } catch(PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
            }
        }

    }
?>