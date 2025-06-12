<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "chronosphere";

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully"; //remove after testing
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>