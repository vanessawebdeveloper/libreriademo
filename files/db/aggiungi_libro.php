<?php
if(count($_POST)>0) {
	require_once("connessione_db.php");
	$sql = "INSERT INTO gestionelibreria (categoria,titolo,autore,anno,prezzo,scaffale)
	VALUES (
	'" . $_POST["categoria"] . "',
	'" . $_POST["titolo"] . "',
	'" . $_POST["autore"] . "',
	'" . $_POST["anno"] . "',
	'" . $_POST["prezzo"] . "',
	'" . $_POST["scaffale"] . "'
	)";
	mysqli_query($conn,$sql);
	$current_id = mysqli_insert_id($conn);
}
?>
<!doctype html>
<html class="no-js" lang="it">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Gestione della Libreria Demo: aggiungi libro</title>
    <meta name="description" content="Esempio di gestione di una libreria: aggiungi un nuovo libro." />

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
	      <h2>Aggiungi un libro alla Libreria Demo</h2>
	      <h5>Compila i campi seguenti per creare un nuovo libro</h5>
	    </div>
	  </div>

	<form class="row"  method="post" action="#ritorna" onSubmit="alert('Libro aggiunto correttamente');" >
	<div class="large-12 medium-12 small-12 columns" id="ritorna">
		<div class="text-center">
			<a href="../../index.php#modifica" class="button button-rounded-hover"><i class="fas fa-arrow-left"></i> Ritorna alla Gestione dei libri</a>
		</div>
		<div>
			<h2>Aggiungi un nuovo libro</h2>
			<p><label>Collana</label></p>
			<p><input type="text" name="categoria" placeholder="Inserisci la collana"></p>
			<p><label>Titolo libro</label></p>
			<p><input type="text" name="titolo" placeholder="Inserisci titolo del libro"></p>
			<p><label>Autore</label></p>
			<p><input type="text" name="autore" placeholder="Inserisci autore del libro"></p>
			<p><label>Anno</label></p>
			<p><input type="number" name="anno" placeholder="Inserisci anno di pubblicazione"></p>
			<p><label>Prezzo: Per prezzi decimali usare il simbolo della virgola  <strong>(Esempio: 20,15)</strong></label></p>
			<p><input type="number" name="prezzo" step="any" placeholder="Inserisci prezzo del libro"></p>
			<p><label>Collocazione scaffale</label></p>
			<p><input type="text" name="scaffale" placeholder="Inserisci la collocazione dello scaffale"></p>
			<p><input type="submit" name="submit" value="Salva" class="button button-rounded-hover"></p>
		</div>


		<div class="text-center">
			<a href="../../index.php#modifica" class="button button-rounded-hover"><i class="fas fa-arrow-left"></i> Ritorna alla Gestione dei libri</a>
		</div>
	</div>
</form>

<?php  include_once("../footer-db.php"); ?>

  </body>
</html>
