<?php
require_once("connessione_db.php");
$sql = "DELETE FROM gestionelibreria WHERE isbn='" . $_GET["isbn"] . "'";
mysqli_query($conn,$sql);
header("Location:../../index.php#modifica");
?>
