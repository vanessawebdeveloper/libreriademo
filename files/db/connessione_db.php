<?php
$host = "62.149.150.128";
$username = "Sql434371";
$password = "5a3d799b";
$connname = "Sql434371_3";
$conn = mysqli_connect($host, $username,$password ,$connname);

/* verifica della connessione del database */

         global $conn;

         if(!$conn){
            die('Errore di connessione: '.mysqli_connect_error());
         }
?>
