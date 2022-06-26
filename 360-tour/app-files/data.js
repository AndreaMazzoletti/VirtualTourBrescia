var APP_DATA = {
  "scenes": [
    {
      "id": "0-capitolium",
      "name": "Capitolium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.06180017396249582,
        "pitch": -0.10151689484921711,
        "fov": 1.3144285310020354
      },
      "linkHotspots": [
        {
          "yaw": 0.5664135833496307,
          "pitch": -0.08716839716360525,
          "rotation": 0,
          "target": "3-teatro-romano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.004918505144038576,
          "pitch": -0.4617270524213488,
          "title": "<div>L'inscrizione del tempio</div>",
          "text": "<div>l'inscrizione del tempio è in onore a Vespasiano, grazie a questa possiamo datare certamente il capitolium al 74 d.c.</div>"
        },
        {
          "yaw": -0.47688728708796013,
          "pitch": 0.011935944424815048,
          "title": "Tempio repubblicano",
          "text": "Il tempio repubblicano risale a prima del tempio capitolino e si trova sotto di questo"
        },
        {
          "yaw": -3.0219499208393668,
          "pitch": 0.06540995993812082,
          "title": "La piazza del foro",
          "text": "La piazza del foro si trova sotto la piazza attuale ed era il centro culturale della città romana"
        },
        {
          "yaw": 2.015573412197984,
          "pitch": 0.21411981931616353,
          "title": "Il decumano massimo",
          "text": "Il decumano massimo era la via principale che percorreva in senso est-ovest la città romana"
        },
        {
          "yaw": 0.0618844106794203,
          "pitch": -0.15782331650411585,
          "title": "Le celle",
          "text": "Le tre celle del Capitolium sono dedicate a tre divinità ovvero Giove, Giunone e Minerva"
        }
      ]
    },
    {
      "id": "1-criptoportico",
      "name": "Criptoportico",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 1.1977596795713144,
        "pitch": -0.057025215024470555,
        "fov": 1.3144285310020354
      },
      "linkHotspots": [
        {
          "yaw": -2.602067916101138,
          "pitch": 0.07356472929082791,
          "rotation": 0,
          "target": "0-capitolium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5552134198395136,
          "pitch": 0.08392023338425858,
          "title": "Criptoportico<br>",
          "text": "Il criptoportico può essere al livello del terreno, ma di solito è seminterrato, e supportava una struttura come un foro o una villa romana, nel quale caso fungeva da basis villae, come corridoio di servizio non esposto alla vista. <br>"
        },
        {
          "yaw": -0.038360291465913576,
          "pitch": 0.07629269860429133,
          "title": "<div>Colonne</div>",
          "text": "Le colonne del criptoportico<br>"
        },
        {
          "yaw": -1.3186128403766517,
          "pitch": 0.17854600784991526,
          "title": "<div>Altre colonne</div>",
          "text": "<div>Colonne a sostegno della chiesa di san salvatore</div>"
        },
        {
          "yaw": 0.07392906698121493,
          "pitch": -0.881435542518826,
          "title": "Volte dell colonne<br>",
          "text": "Le volte delle colonne erano molto inmportanti, qui sopra c'è san salvatore<br>"
        }
      ]
    },
    {
      "id": "2-san-salvatore",
      "name": "San Salvatore",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.17122983523696078,
        "pitch": -0.4070872714188667,
        "fov": 1.3144285310020354
      },
      "linkHotspots": [
        {
          "yaw": -2.081367820523292,
          "pitch": 0.13567530369498293,
          "rotation": 0,
          "target": "1-criptoportico"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.008555065065557699,
          "pitch": -0.3108678653133161,
          "title": "Crocifissione<br>",
          "text": "Affresco raffigurante la crocifissione di Gesù all'interno di san salvatore<br>"
        },
        {
          "yaw": -2.3738530885668787,
          "pitch": -0.2824597460232372,
          "title": "San salvatore<br>",
          "text": "<div>La chiesa di san salvatore costruita dai Longobardi nel periodo altomedievale</div>"
        },
        {
          "yaw": 1.5799478214391103,
          "pitch": -0.26219154826480917,
          "title": "Affreschi<br>",
          "text": "Altri affreschi<br>"
        },
        {
          "yaw": -0.734022606063947,
          "pitch": -0.20797022931906284,
          "title": "Affreschi<br>",
          "text": "<div>Un altro affresco in questa stanza</div>"
        },
        {
          "yaw": -3.0049403201260354,
          "pitch": -1.1146217453213492,
          "title": "Il soffitto affrescato<br>",
          "text": "Il soffitto di questo spazio è affrescato<br>"
        }
      ]
    },
    {
      "id": "3-teatro-romano",
      "name": "Teatro romano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.6480581893412083,
        "pitch": -0.2436283598950677,
        "fov": 1.3144285310020354
      },
      "linkHotspots": [
        {
          "yaw": -1.068647807857836,
          "pitch": -0.06388928432391694,
          "rotation": 0,
          "target": "0-capitolium"
        },
        {
          "yaw": 2.99538328179119,
          "pitch": 0.0848271944735508,
          "rotation": 0,
          "target": "2-san-salvatore"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6358226086689189,
          "pitch": -0.05823499538778698,
          "title": "Statua del vezzoli<br>",
          "text": "<div>Statua di Vezzoli</div><div><br></div>"
        },
        {
          "yaw": 1.1697215563586507,
          "pitch": 0.052921164176717994,
          "title": "<div>Gradinate</div>",
          "text": "Le gradinate del teatro romano<br>"
        },
        {
          "yaw": -0.6831090698601603,
          "pitch": -0.17422848276255287,
          "title": "Vomitorie",
          "text": "Le vomitorie del teatro erano usate per l'areazione e fungevano da magazzino<br>"
        },
        {
          "yaw": 1.5943368160233797,
          "pitch": 0.16364059802097586,
          "title": "Palcoscenico<br>",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Virtual Tour Brescia Musei",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
