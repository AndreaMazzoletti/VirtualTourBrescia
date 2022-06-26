# Virtual tour di Brescia

Questo è un vecchio progetto per un tour di Brescia con immagini a 360° gradi realizzato con Vuejs.

Le librerie utilizzate sono vecchie e qualcuna non è più mantenuta, per ora non è prevista la manutenzione di questo progetto, inoltre questo è un prototipo con fotografie realizzate con un telefono e non con le opportune apparecchiature, quindi le immagini risultano di bassa definizione.

## Sezioni del sito

### La vetrina 
La vetrina accoglie l'utente e contiene tutte le informazioni utili sul museo e sull'autore ed è il punto dal quale si accede al tour, in particolare le sezioni sono:
<ul>
    <li>Home</li>
    <li>Il tour</li>
    <li>Il museo</li>
    <li>L'autore</li>
    <li>Contatti</li>
</ul>

### Il tour

Il tour è la visita che l'utente può fare in un ambiente con scatti a 360 gradi navigabili fra loro.

## Tecnologie</h2>

### La vetrina 

La vetrina è stata fatta in <a href="https://vuejs.org/"> VueJS</a> basandosi sul template open source <a href="https://demos.creative-tim.com/vue-argon-design-system/#/">Argon</a>

### Il tour

Il tour è stato generato con il <a href="https://www.marzipano.net/tool/">tool</a> di <a href="https://www.marzipano.net/"> Marzipano </a> ed è un insieme di file statici accessibili da un bottone nella sezione "home" della vetrina.


## Installazione

é necessario installare Vuejs e Nodejs e successivamente eseguire lo script

```
./install.sh

```

## Esecuzione

Per avviare il sito del Tour eseguire lo script

```
./start.sh

```

Il sito vetrina sarà ora disponibile alla porta 8080, se si vuole accedere al virtual tour senza passare dalla vetrina questo sarà disponibile alla porta 3000.

Realizzato da Andrea Mazzoletti 

