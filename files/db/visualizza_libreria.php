<?php

require_once("connessione_db.php");

/* visualizzazione dei dati della tabella per la gestione della libreria, con le seguenti caratteristiche per ogni libro:
  ISBN, categoria, titolo, autore, anno, prezzo e scaffale di collocazione.
*/

           global $result;
            $nlibri=0;

           $sql="SELECT * FROM gestionelibreria ORDER BY titolo";

           if ($result=mysqli_query($conn,$sql))
             {

            echo "<div class='large-12 medium-12 small-12 columns' data-equalizer data-equalize-on='medium'>";

             while ($row=mysqli_fetch_row($result))
               {

               $nlibri++;

               echo "<div class='large-4 medium-4 small-12 columns left'>";
                 echo "<ul class='book-table' data-equalizer-watch>";
                  echo "<li class='title'><em>ISBN</em><br>$row[0]</li>";
                  echo "<li class='book'>$row[2]</li>";
                  echo "<li><em>Collana</em><br/>$row[1]</li>";
                  echo "<li><em>Autore</em><br/>$row[3]</li>";
                  echo "<li><em>Anno</em><br/>$row[4]</li>";
                  echo "<li><em>Prezzo</em><br/>$row[5]</li>";
                  echo "<li><em>Collocazione Scaffale</em><br/>$row[6]</li>";
                 echo "</ul>";
               echo"</div>";
               }

             mysqli_free_result($result);
           }

          echo"</div>";

            if ($nlibri==3){
              echo "</div>";
              $nlibri=0;
            }
            if ($nlibri==0){
              echo "<div class='large-12 medium-12 small-12 columns left' data-equalizer data-equalize-on='medium'>";
            }

?>
