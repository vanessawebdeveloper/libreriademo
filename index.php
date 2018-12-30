<!-- richiamo impostazioni database -->
<?php
include_once("files/db/connessione_db.php");
$sql_libri = "SELECT * FROM gestionelibreria ORDER BY titolo";
$result_libri = mysqli_query($conn,$sql_libri);
?>
<!doctype html>
<html class="no-js" lang="it">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Gestione di una libreria</title>
    <meta name="description" content="Esempio di gestione di una libreria: ricerca, aggiunta, modifica ed eliminazione di un libro." />

    <!-- richiamo degli stili di zurb foundation -->
    <link href="https://foundation.zurb.com/sites/docs/assets/css/docs.css?v=0f9f1d458bff7868a6b3ac9945aaeb42" rel="stylesheet" />


    <!-- richiamo di librerie aggiuntive -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

    <!-- importazione i miei stili -->
    <link rel="stylesheet" href="files/css/style.css">
  </head>

  <body>

    <!-- header -->
    <header>
      <?php include_once("files/header.php"); ?>
  </header>

<!-- Benvenuto -->
  <div class="welcome-section" id="top">
    <div class="welcome-section-text">
      <h2>Benvenuto nella Libreria Demo</h2>
      <h5>Scopri l'intero catalogo a disposizione e gestisci i dati della libreria</h5>
      <br/>
      <a class="button button-rounded-hover" href="#tutti">Scopri la libreria</a>
      <a class="button button-rounded-hover" href="#modifica">Gestisci libreria</a>
    </div>
  </div>


  <!-- elenco completo dei libri-->
  <div class="row elenco-libri" id="tutti">
    <div class="row text-center">
      <h2>Elenco completo della libreria</h2>
      <h5>Visualizza la lista completa dei libri</h5>
    </div>
    <br/>
    <div class="row"><?php include_once("files/db/visualizza_libreria.php"); ?></div>
  </div>

  <!-- gestione dei libri-->
  <div class="gestionelibri" id="modifica">
        <div class="row text-center">
          <h2>Gestione della libreria</h2>
          <p>Attraverso questa sezione puoi gestire al meglio la libreria:
          <br/>
          <i class="fas fa-plus"></i>&nbsp;Aggiungere  un libro, <i class="fas fa-edit"></i>&nbsp;Modificare i dati di un libro,
            <i class="fas fa-minus"></i>&nbsp;Eliminare un libro</p>
          </div>
          <hr/>

        <!-- aggiungi, modifica, elimina libro-->
          <form method="post" action="">
          <div class="large-12 medium-12 small-12 text-center">
          <div class="messaggio"><?php if(isset($message)) { echo $message; } ?></div>
          <div><a href="files/db/aggiungi_libro.php" class="button button-rounded-hover text-center"><i class="fas fa-plus"></i> Aggiungi un nuovo libro</a></div>
          <h2 class="text-center">Elenco libri</h2>
          <div class="row">
          <?php
          $nlibri=0;

          while($row = mysqli_fetch_array($result_libri)) {
            $nlibri++;
          ?>

          <div class="panel callout radius large-4 medium-4 small-12 columns left">
          <p><strong>ISBN</strong>&nbsp;<?php echo $row["isbn"]; ?></p>
          <p><strong>Collana</strong>&nbsp;<?php echo $row["categoria"]; ?></p>
          <p><strong>Titolo</strong>&nbsp;<?php echo $row["titolo"]; ?></p>
          <p><strong>Autore</strong>&nbsp;<?php echo $row["autore"]; ?></p>
          <p><strong>Anno</strong>&nbsp;<?php echo $row["anno"]; ?></p>
          <p><strong>Prezzo</strong>&nbsp;<?php echo $row["prezzo"]; ?></p>
          <p><strong>Collocazione Scaffale</strong>&nbsp;<?php echo $row["scaffale"]; ?></p>

          <p><a href="files/db/modifica_libro.php?isbn=<?php echo $row["isbn"]; ?>" class="button button-rounded-hover"><i class="fas fa-edit"></i> Modifica Libro</a></p>
          <p><a href="files/db/elimina_libro.php?isbn=<?php echo $row["isbn"]; ?>"  class="button button-rounded-hover"><i class="fas fa-minus"></i> Elimina Libro</a></p>
          </div>
          <?php
          }
          echo"</div>";

            if ($nlibri==3){
              echo "</div>";
              $nlibri=0;
            }
            if ($nlibri==0){
              echo "<div class='large-12 medium-12 small-12 columns'>";
            }
          ?>
          </div>
          </div>
          </form>

  </div>
<?php include_once("files/footer.php"); ?>

  </body>
</html>
