<?php
require_once("connessione_db.php");
if(count($_POST)>0) {
$sql = "UPDATE gestionelibreria set
categoria='" . $_POST["categoria"] . "',
titolo='" . $_POST["titolo"] . "',
autore='" . $_POST["autore"] . "',
anno='" . $_POST["anno"] . "',
prezzo='" . $_POST["prezzo"] . "',
scaffale='" . $_POST["scaffale"] . "'
WHERE isbn='" . $_POST["isbn"] . "'";

	mysqli_query($conn,$sql);
}
$select_query = "SELECT * FROM gestionelibreria WHERE isbn='" . $_GET["isbn"] . "'";
$result = mysqli_query($conn,$select_query);
$row = mysqli_fetch_array($result);
?>
<!doctype html>
<html class="no-js" lang="it">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Gestione della Libreria Demo: modifica libro</title>
    <meta name="description" content="Esempio di gestione di una libreria: modifica un nuovo libro." />

    <!-- richiamo degli stili di zurb foundation -->
    <link href="https://foundation.zurb.com/sites/docs/assets/css/docs.css?v=0f9f1d458bff7868a6b3ac9945aaeb42" rel="stylesheet" />


    <!-- richiamo di librerie aggiuntive -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

    <!-- importazione i miei stili -->
    <link rel="stylesheet" href="../css/style.css">
  </head>

  <body>

    <!-- header -->
    <header>
      <?php include_once("../header-db.php"); ?>
  </header>
	<!-- Benvenuto -->
		<div class="welcome-section">
			<div class="welcome-section-text">
				<h2>Modifica un libro alla Libreria Demo</h2>
				<h5>Cambia i campi seguenti per modificare un libro</h5>
			</div>
		</div>

		<form class="row" method="post" action="#ritorna" onSubmit="alert('Libro modificato correttamente');">
		<div  class="large-12 medium-12 small-12 columns" id="ritorna">
			<div class="text-center">
				<a href="../../index.php#modifica" class="button button-rounded-hover"><i class="fas fa-arrow-left"></i> Ritorna alla Gestione dei libri</a>
			</div>

			<div class="panel callout radius">
			<h2>Modifica Libro</h2>

			<p><label>Collana</label></p>
			<p><input type="hidden" name="isbn"  value="<?php echo $row['isbn']; ?>"></p>
			<p><input type="text" name="categoria"  value="<?php echo $row['categoria']; ?>"></p>

			<p><label>Titolo libro</label></p>
			<p><input type="text" name="titolo"  value="<?php echo $row['titolo']; ?>"></p>

			<p><label>Autore</label></p>
			<p><input type="text" name="autore"  value="<?php echo $row['autore']; ?>"></p>


			<p><label>Anno</label></p>
			<p><input type="number" name="anno"  value="<?php echo $row['anno']; ?>"></p>


			<p><label>Prezzo: Per separare i decimali usare il simbolo della virgola  <strong>(Esempio: 20,15)</strong></label></p>
			<p><input type="number" name="prezzo" step="any" value="<?php echo $row['prezzo']; ?>"></p>


			<p><label>Collocazione Scaffale</label></p>
			<p><input type="text" name="scaffale"  value="<?php echo $row['scaffale']; ?>"></p>


			<p><input type="submit" name="submit" value="Salva Modifica" class="button button-rounded-hover"></p>

			</div>


		<div class="text-center">
			<a href="../../index.php#modifica" class="button button-rounded-hover"><i class="fas fa-arrow-left"></i> Ritorna alla Gestione dei libri</a>
		</div>

		</div>
		</form>
<?php
include_once("../footer-db.php"); ?>

  </body>
</html>
