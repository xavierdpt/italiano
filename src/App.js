import './App.css';
import React from 'react';

const examples = [
  {
    location: "13",
    section: "Formes de l'article défini",
    content: [
      {
        it: "Il bambino, i bambini.",
        fr: "L'enfant, les enfants."
      },
      {
        it: "Lo sbaglio, gli sbagli.",
        fr: "L'erreur, les erreurs."
      },
      {
        it: "Lo zaino, gli zaini.",
        fr: "Le sac à dos, les sacs à dos."
      },
      {
        it: "Lo xilofono, gli xilofoni.",
        fr: "Le xylophone, les xylophones."
      },
      {
        it: "Lo yogurt, gli yogurt.",
        fr: "Le yaourt, les yaourts."
      },
      {
        it: "Lo pneumatico, gli pneumatici.",
        fr: "Le pneu, les pneus."
      },
      {
        it: "Lo psicologo, gli psicologi.",
        fr: "Le psychologue, les psychologues."
      },
      {
        it: "Lo gnocco, gli gnocchi.",
        fr: "Le gnocchi, les gnocchis."
      },
      {
        it: "Lo iato, gli iati.",
        fr: "Le hiatus, les hiatus."
      },
      {
        it: "L'albero, gli alberi.",
        fr: "L'arbre, les arbres."
      },
      {
        it: "La casa, le case.",
        fr: "La maison, les maisons."
      },
      {
        it: "La iena, le iene.",
        fr: "La hyène, les hyènes."
      },
      {
        it: "L'isola, le isole.",
        fr: "L'île, les îles."
      },
      {
        it: "Il dio, gli dèi.",
        fr: "Le dieu, les dieux."
      },
    ]
  },
  {
    location: "14",
    section: "Emplois principaux de l'article défini",
    content: [{
      it: "Ieri ho visto un film sulla seconda guerra mondiale.",
      fr: "Hier, j'ai vu un film sur la deuxième guerre mondiale."
    },
    {
      it: "Il film era interessante.",
      fr: "Le film était intéressant."
    },
    {
      it: "La chiesa di X a Firenze è splendida.",
      fr: "L'église de X à Florence est splendide."
    },
    {
      it: "L'uomo è un animale dotato di ragione.",
      fr: "L'homme est un animal doué de raison."
    },
    {
      it: "La tollerenza è prova d'intelligenza.",
      fr: "La tolérance est preuve d'intelligence."
    },
    {
      it: "È il mio libro.",
      fr: "C'est mon livre."
    },
    ]
  },
  {
    location: "14-15",
    section: "Emplois spécifiques de l'article défini",
    content: [
      {
        it: "È l'una.",
        fr: "Il est une heure."
      },
      {
        it: "Sono le quattro.",
        fr: "Il est quatre heures."
      },
      {
        it: "È mezzogiorno.",
        fr: "Il est midi."
      },
      {
        it: "È mezzanotte.",
        fr: "Il est minuit."
      },
      {
        it: "Il 2005 è stato un anno eccellente per il vino piemontese.",
        fr: "2005 a été une excellente année pour le vin du Piémont."
      },
      {
        it: "Il mio fratellino è nato nel 2008.",
        fr: "Mon petit frère est né en 2008."
      },
      {
        it: "Il 40% della populazione non è andato a votare.",
        fr: "40% de la population n'est pas allée voter."
      },
      {
        it: "La signorina Giuliani ha appena telefonato.",
        fr: "Mademoiselle Giuliani vient de téléphoner."
      },
      {
        it: "Signor Bianchi, mi saluti Sua madre.",
        fr: "Monsieur Bianchi, veuillez saluer votre mère [de ma part]."
      },
      {
        it: "Il signor Rossi è partito in vacanza con la moglie.",
        fr: "Monsieur Rossi est parti en vacances avec sa* femme."
      },
    ]
  },
  {
    location: "15",
    section: "Omission de l'article défini",
    subsection: "compléments de lieu",
    content: [
      {
        it: "a casa",
        fr: "à la maison (à)"
      },
      {
        it: "a letto",
        fr: "au lit"
      }, {
        it: "a scuola",
        fr: "a l'école"
      }, {
        it: "a teatro",
        fr: "au théâtre"
      }, {
        it: "in biblioteca",
        fr: "à la bibliothèque"
      }, {
        it: "in braccio",
        fr: "dans les bras"
      }, {
        it: "in campagna",
        fr: "à la campagne"
      }, {
        it: "in casa",
        fr: "à la maison (dans)"
      }, {
        it: "in chiesa",
        fr: "à l'église (dans)"
      }, {
        it: "in ufficio",
        fr: "au bureau"
      }, {
        it: "in montagna",
        fr: "à la montagne"
      }, {
        it: "in piscina",
        fr: "à la piscine"
      }, {
        it: "in tasca",
        fr: "dans la poche"
      }, {
        it: "in treno",
        fr: "dans le train"
      },
    ]
  },
  {
    location: "15",
    section: "Omission de l'article défini",
    subsection: "rois, papes, Christs",
    content: [
      {
        it: "Re X fu il primo re d'Italia.",
        fr: "Le roi X fut le premier roi d'Italie."
      },
      {
        it: "Papa X è morto nel 2005.",
        fr: "Le pape X est mort en 2005."
      },
      {
        it: "Secondo i Vangeli, Cristo è nato a Betlemme.",
        fr: "D'après les Évangiles, le Christ est né à Bethléem."
      },
    ]
  },
  {
    location: "16",
    section: "L'article contracté",
    subsection: "matrice",
    content: [
      { it: "del", fr: "di il" },
      { it: "dello", fr: "di lo" },
      { it: "dell'", fr: "di l'" },
      { it: "della", fr: "di la" },
      { it: "dei", fr: "di i" },
      { it: "degli", fr: "di gli" },
      { it: "delle", fr: "di le" },
      { it: "al", fr: "a il" },
      { it: "allo", fr: "a lo" },
      { it: "all'", fr: "a l'" },
      { it: "alla", fr: "a la" },
      { it: "ai", fr: "a i" },
      { it: "agli", fr: "a gli" },
      { it: "alle", fr: "a le" },
      { it: "dal", fr: "da il" },
      { it: "dallo", fr: "da lo" },
      { it: "dall'", fr: "da l'" },
      { it: "dalla", fr: "da la" },
      { it: "dai", fr: "da i" },
      { it: "dagli", fr: "da gli" },
      { it: "dalle", fr: "da le" },
      { it: "nel", fr: "in il" },
      { it: "nello", fr: "in lo" },
      { it: "nell'", fr: "in l'" },
      { it: "nella", fr: "in la" },
      { it: "nei", fr: "in i" },
      { it: "negli", fr: "in gli" },
      { it: "nelle", fr: "in le" },
      { it: "sul", fr: "su il" },
      { it: "sullo", fr: "su lo" },
      { it: "sull'", fr: "su l'" },
      { it: "sulla", fr: "su la" },
      { it: "sui", fr: "su i" },
      { it: "sugli", fr: "su gli" },
      { it: "sulle", fr: "su le" },
      { it: "col", fr: "con il" },
      { it: "coi", fr: "con i" },
    ]
  },
  {
    location: "16",
    section: "L'article contracté",
    subsection: "exemples",
    content: [
      {
        it: "Sono andata al cinema a vedere un documentario sul Neorealismo.",
        fr: "Je suis allée au cinéma voir un documentaire sur le Néo-réalisme."
      },
      {
        it: "Quando mi hai chiamato ero nello studio dell'avvocato di mio padre.",
        fr: "Quand tu m'a appelé, j'étais dans le cabinet de l'avocat de mon père."
      },
      {
        it: "Con questo caldo rimarrei in piscina dall'alba al tramonto.",
        fr: "Avec cette chaleur je resterais dans la piscine de l'aube au [coucher du soleil]."
      }
    ]
  },
  {
    location: "16",
    section: "Fin section 2",
    subsection: "Exercices 1",
    content: [
      {
        it: "lo zucchero",
        fr: "? zucchero"
      },
      {
        it: "il tavolo",
        fr: "? tavolo"
      },
      {
        it: "la sciarpa",
        fr: "? sciarpa"
      },
      {
        it: "le ragazze",
        fr: "? ragazze"
      },
      {
        it: "gli psichiatri",
        fr: "? psichiatri"
      },
      {
        it: "i bambini",
        fr: "? bambini"
      },
      {
        it: "gli armadi",
        fr: "? armadi"
      }
    ]
  },
  {
    location: "16",
    section: "Fin section 2",
    subsection: "Exercices 2",
    content: [
      {
        it: "Il mio treno parte alle sei.",
        fr: "Mon train part à six heures."
      },
      {
        it: "Devo tornare a casa, è mezzanotte.",
        fr: "Je dois rentrer à la maison, il est minuit."
      },
      {
        it: "Il 50% del territorio italiano è composto da alta e media montagna.",
        fr: "50% du territoire italien est composé de haute et moyenne montagne."
      },
      {
        it: "Il signor Landi è uscito.",
        fr: "Monsieur Landi est sorti."
      },
      {
        it: "Papa Francesco è stato eletto nel 2013.",
        fr: "Le pape François a été élu en 2013."
      }
    ]
  },
  {
    location: "17",
    section: "Forme de l'article indéfini",
    content: [
      {
        it: "Un ragazzo, dei ragazzi",
        fr: "Un jeune homme, des jeunes hommes"
      },
      {
        it: "Uno studente, degli studenti",
        fr: "Un étudiant, des étudiants"
      },
      {
        it: "Uno zerbino, degli zerbini",
        fr: "Un paillasson, des paillassons"
      },
      {
        it: "Uno xenofobo, degli xenofobi",
        fr: "Un xénophobe, des xénophobes"
      },
      {
        it: "Uno yacht, degli yacht",
        fr: "Un yacht, des yachts"
      },
      {
        it: "Uno pneumatico, degli pneumatici",
        fr: "Un pneu, des pneus"
      },
      {
        it: "Uno pseudonimo, degli pseudonimi",
        fr: "Un pseudonyme, des pseudonymes"
      },
      {
        it: "Uno gnomo, degli gnomi",
        fr: "Un gnome, des gnomes"
      },
      {
        it: "Uno iato, degli iati",
        fr: "Un hiatus, des hiatus"
      },
      {
        it: "Una cantante, delle cantanti",
        fr: "Une chanteuse, des chanteuses"
      },
      {
        it: "Un'albicocca, delle albicocche",
        fr: "Un abricot, des abricots"
      }
    ]
  },
  {
    location: "18",
    section: "Emplois principaux de l'article indéfini",
    content: [
      {
        it: "Siamo andati a trovare un'amica che si è appena sposata.",
        fr: "Nous sommes allés voir une amie qui vient de se marier."
      },
      {
        it: "Mi è stato regalato un libro che avevo già letto.",
        fr: "On m'a offert un livre que j'avais déjà lu."
      }, {
        it: "Un bambino ha bisogno della mamma.",
        fr: "Un enfant a besoin de sa mère."
      }, {
        it: "Abbiamo degli ospiti a cena.",
        fr: "Nous avons des invités à dîner."
      }, {
        it: "Abbiamo ospiti a cena.",
        fr: "Nous avons [des] invités à dîner."
      },
    ]
  },
  {
    location: "18",
    section: "Formes et emplois de l'article partitif",
    content: [
      {
        it: "Vuoi dello zucchero nel caffè?",
        fr: "Veux-tu du sucre dans ton café?"
      },
      {
        it: "Abbiamo ricevuto delle informazioni importanti.",
        fr: "Nous avons reçu des informations importantes."
      }
    ]
  },
  {
    location: "19",
    section: "Omission de l'article partitif",
    content: [
      {
        it: "I suoi genitori sono persone note in cità.",
        fr: "Ses parents sont des personnes connues dans la ville."
      },
      {
        it: "Ho comprato [del] burro e [della] marmellata.",
        fr: "J'ai acheté [[du]] beurre et [[de la]] confiture."
      },
      {
        it: "Vorrei un po' di pane.",
        fr: "Je voudrais un peu de pain"
      },
      {
        it: "Quella ragazza ha un certo stile.",
        fr: "Cette fille a un certain style."
      },
      {
        it: "Dammi l'acqua, per favore.",
        fr: "Donne-moi l'eau, s'il te plaît."
      },
      {
        it: "Vuoi la pizza o gli spaghetti?",
        fr: "Veux-tu la pizza ou les spaghettis?"
      },
      {
        it: "Sandro ha telefonato ad alcuni amici per invitari al suo compleanno.",
        fr: "Sandro a téléphoné à des amis pour les inviter à son anniversaire."
      },
      {
        it: "È necessario diluire il prodotto in un po' di acqua.",
        fr: "Il est nécessaire de diluer le produit dans un peu d'eau."
      },
      {
        it: "Oggi non ho ricevuto posta.",
        fr: "Aujourd'hui je n'ai pas reçu de courrier."
      },
      {
        it: "Non voglio vino.",
        fr: "Je ne veux pas de vin."
      }
    ]
  },
  {
    location: "20",
    section: "Les articles indéfinis et partitifs",
    subsection: "Exercices",
    content: [
      {
        it: "Preferisci la carne o il pesce?",
        fr: "Tu préfères de la viande ou du poisson?"
      },
      {
        it: "Non posso fare foto, perché ho dimenticato la macchina fotographica.",
        fr: "Je ne peux pas prendre de photos, parce que j'ai oublié mon appareil photo."
      },
      {
        it: "Bisogna mettere la pasta in acqua salata.",
        fr: "Il faut mettre les pâtes dans de l'eau salée."
      },
      {
        it: "Non voglio zucchero nel caffè.",
        fr: "Je ne veux pas de sucre dans mon café."
      },
      {
        it: "Vuoi birra o vino?",
        fr: "Veux-tu de la bière ou du vin?"
      },
      {
        it: "Ho comprato pomodori, mele e spinaci.",
        fr: "J'ai acheté des tomates, des pommes et des épinards."
      },
      {
        it: "Non beve mai tisane la sera.",
        fr: "Il ne boit jamais de tisane le soir."
      },
    ]
  },
  {
    location: "21",
    section: "Genre des noms désignant des êtres animés",
    subsection: "La terminaison dépend du genre",
    content: [
      {
        it: "il ragazzo",
        fr: "le jeune homme"
      },
      {
        it: "la ragazza",
        fr: "la jeune femme"
      },
      {
        it: "l'alunno",
        fr: "l'élève (il)"
      },
      {
        it: "l'alunna",
        fr: "l'elève (elle)"
      },
      {
        it: "l'amico",
        fr: "l'ami"
      },
      {
        it: "l'amica",
        fr: "l'amie"
      },
      {
        it: "il maestro",
        fr: "l'instituteur"
      },
      {
        it: "la maestra",
        fr: "l'institutrice"
      },
      {
        it: "il cameriere",
        fr: "le serveur"
      },
      {
        it: "la cameriera",
        fr: "la serveuse"
      },
      {
        it: "l'infermiere",
        fr: "l'infirmier"
      },
      {
        it: "l'infermiera",
        fr: "l'infirmière"
      },
      {
        it: "il signore",
        fr: "le monsieur"
      },
      {
        it: "la signora",
        fr: "la dame"
      },
      {
        it: "il poeta",
        fr: "le poète"
      },
      {
        it: "la poetessa",
        fr: "la poète"
      },
      {
        it: "il leone",
        fr: "le lion"
      },
      {
        it: "la leonessa",
        fr: "la lionne"
      },
      {
        it: "lo studente",
        fr: "l'étudiant"
      },
      {
        it: "la studentessa",
        fr: "l'étudiante"
      },
      {
        it: "l'attore",
        fr: "l'acteur"
      },
      {
        it: "l'attrice",
        fr: "l'actice"
      },
      {
        it: "lo scrittore",
        fr: "l'écrivain"
      },
      {
        it: "la scrittrice",
        fr: "l'écrivaine"
      },
      {
        it: "il dottore",
        fr: "le médecin"
      },
      {
        it: "la dottoressa",
        fr: "la médecin"
      },
    ]
  },
  {
    location: "21",
    section: "Genre des noms désignant des êtres animés",
    subsection: "La terminaison est identique",
    content: [
      {
        it: "l'artista",
        fr: "l'artiste"
      },
      {
        it: "il farmacista, la farmacista",
        fr: "le pharmacien, la pharmacienne"
      },
      {
        it: "il giornalista, la giornalista",
        fr: "le journaliste, la journaliste"
      },
      {
        it: "il cliente, la cliente",
        fr: "le client, la cliente"
      },
      {
        it: "il francese, la francese",
        fr: "le français, la française"
      },
      {
        it: "il nipote, la nipote",
        fr: "le neveu, la nièce"
      },
      {
        it: "il nipote, la nipote",
        fr: "le petit-fils, la petite-fille"
      },
      {
        it: "l'atleta",
        fr: "l'athlète"
      },
      {
        it: "il collega, la collega",
        fr: "le collègue, la collègue"
      },
      {
        it: "l'ipocrita",
        fr: "l'hypocrite"
      },
      {
        it: "l'omicida, l'omicida",
        fr: "le meurtrier, la meurtrière"
      },
      {
        it: "lo psichiatra, la psichiatra",
        fr: "le psychiatre, la psychiatre"
      },
      {
        it: "l'agente",
        fr: "l'agent"
      },
      {
        it: "il cantante, la cantante",
        fr: "le chanteur, la chanteuse"
      },
      {
        it: "l'insegnante, l'insegnante",
        fr: "l'enseignant, l'enseignante"
      },
      {
        it: "l'amante, l'amante",
        fr: "l'amant, la maîtresse"
      },
      {
        it: "agire",
        fr: "agir"
      },
      {
        it: "cantare",
        fr: "chanter"
      },
      {
        it: "insegnare",
        fr: "enseigner"
      },
      {
        it: "amare",
        fr: "aimer"
      },
    ]
  },
  {
    location: "22",
    section: "Genre des noms désignant des êtres animés",
    subsection: "Le masculin et le féminin sont indépendants",
    content: [
      {
        it: "l'uomo, la donna",
        fr: "l'homme, la femme"
      },
      {
        it: "il padre, la madre",
        fr: "le père, la mère"
      },
      {
        it: "il fratello, la sorella",
        fr: "le frère, la soeur"
      },
      {
        it: "il marito, la moglie",
        fr: "le mari, la femme"
      },
      {
        it: "il re, la regina",
        fr: "le roi, la reine"
      },
      {
        it: "il dio, la dea",
        fr: "le dieu, la déesse"
      },
      {
        it: "il boia",
        fr: "le bourreau"
      },
      {
        it: "l'ostetrica",
        fr: "la sage-femme"
      }
    ]
  },
  {
    location: "22",
    section: "Genre des noms désignant des entités inanimées",
    content: [
      {
        it: "l'albero",
        fr: "l'arbre"
      },
      {
        it: "il libro",
        fr: "le livre"
      },
      {
        it: "il prezzo",
        fr: "le prix"
      },
      {
        it: "il dente",
        fr: "la dent"
      },
      {
        it: "il maglione",
        fr: "le pull"
      },
      {
        it: "il sole",
        fr: "le soleil"
      },
      {
        it: "il mare",
        fr: "la mer"
      },
      {
        it: "il clima",
        fr: "le climat"
      },
      {
        it: "il problema",
        fr: "le problème"
      },
      {
        it: "il programma",
        fr: "le programme"
      },
      {
        it: "lo schema",
        fr: "le schéma"
      },
      {
        it: "il sistema",
        fr: "le système"
      },
      {
        it: "l'amore",
        fr: "l'amour"
      },
      {
        it: "il colore",
        fr: "la couleur"
      },
      {
        it: "il dolore",
        fr: "la douleur"
      },
      {
        it: "il fiore",
        fr: "la fleur"
      },
      {
        it: "la casa",
        fr: "la maison"
      },
      {
        it: "la mela",
        fr: "la pomme"
      },
      {
        it: "la penna",
        fr: "le stylo"
      },
      {
        it: "l'emozione",
        fr: "l'émotion"
      },
      {
        it: "la fine",
        fr: "la fin"
      },
      {
        it: "la stazione",
        fr: "la gare"
      },
      {
        it: "l'analisi",
        fr: "l'analyse"
      },
      {
        it: "la crisi",
        fr: "la crise"
      },
      {
        it: "l'oasi",
        fr: "l'oasis"
      },
      {
        it: "la parentesi",
        fr: "la parenthèse"
      },
      {
        it: "la bontà",
        fr: "la bonté"
      },
      {
        it: "la libertà",
        fr: "la liberté"
      },
      {
        it: "la gioventù",
        fr: "la jeunesse"
      },
      {
        it: "la virtù",
        fr: "la vertu"
      },
      {
        it: "la mano",
        fr: "la main"
      },
      {
        it: "l'eco",
        fr: "l'écho"
      },
      {
        it: "l'auto",
        fr: "l'auto"
      },
      {
        it: "la foto",
        fr: "la photo"
      },
      {
        it: "la moto",
        fr: "la moto"
      },
      {
        it: "la radio",
        fr: "la radio"
      },
      {
        it: "l'alibi",
        fr: "l'alibi"
      },
      {
        it: "il brindisi",
        fr: "le toast"
      },
      {
        it: "il kiwi",
        fr: "le kiwi"
      },
      {
        it: "lo sci",
        fr: "le ski"
      }
    ]
  },
  {
    location: "23",
    section: "Différences de genre entre l'italien et le français",
    content: [
      {
        it: "il colore",
        fr: "la couleur"
      },
      {
        it: "il dolore",
        fr: "la douleur"
      },
      {
        it: "l'errore",
        fr: "l'erreur"
      },
      {
        it: "il fiore",
        fr: "la fleur"
      },
      {
        it: "il valore",
        fr: "la valeur"
      },
      {
        it: "la folgore",
        fr: "la foudre"
      },
      {
        it: "l'affetto",
        fr: "l'affection"
      },
      {
        it: "l'annullamento",
        fr: "l'annulation"
      },
      {
        it: "l'aumento",
        fr: "l'augmentation"
      },
      {
        it: "il consumo",
        fr: "la consommation"
      },
      {
        it: "l'inquinamento",
        fr: "la pollution"
      },
      {
        it: "l'intervento",
        fr: "l'intervention"
      },
      {
        it: "l'invito",
        fr: "l'invitation"
      },
      {
        it: "l'obbligo",
        fr: "l'obligation"
      },
      {
        it: "l'Adriatico",
        fr: "l'Adriatique"
      },
      {
        it: "il Mar Rosso",
        fr: "la mer Rouge"
      },
      {
        it: "il Mediterraneo",
        fr: "la Méditerranée"
      },
      {
        it: "l'aiuto",
        fr: "l'aide"
      },
      {
        it: "il dato",
        fr: "la donnée"
      },
      {
        it: "il dente",
        fr: "la dent"
      },
      {
        it: "il foglio",
        fr: "la feuille"
      },
      {
        it: "l'indirizzo",
        fr: "l'adresse"
      },
      {
        it: "il limite",
        fr: "la limite"
      },
      {
        it: "il margine",
        fr: "la marge"
      },
      {
        it: "il metodo",
        fr: "la méthode"
      },
      {
        it: "il minuto",
        fr: "la minute"
      },
      {
        it: "l'olio",
        fr: "l'huile"
      },
      {
        it: "il paragone",
        fr: "la comparaison"
      },
      {
        it: "il periodo",
        fr: "la période"
      },
      {
        it: "il secondo",
        fr: "la seconde"
      },
      {
        it: "il tentativo",
        fr: "la tentative"
      },
      {
        it: "la vecchia Firenze",
        fr: "le vieux Florence"
      },
      {
        it: "la Parigi romantica",
        fr: "le Paris romantique"
      },
      {
        it: "la vecchia Napoli",
        fr: "le vieux Naples"
      },
      {
        it: "il Cairo",
        fr: "le Caire"
      },
      {
        it: "l'agenda",
        fr: "l'agenda"
      },
      {
        it: "l'arte",
        fr: "l'art"
      },
      {
        it: "la calma",
        fr: "le calme"
      },
      {
        it: "la caramella",
        fr: "le bonbon"
      },
      {
        it: "la cifra",
        fr: "le chiffre"
      },
      {
        it: "la coppia",
        fr: "le couple"
      },
      {
        it: "la domenica",
        fr: "le dimanche"
      },
      {
        it: "l'estate",
        fr: "l'été"
      },
      {
        it: "l'età",
        fr: "l'âge"
      },
      {
        it: "la fronte",
        fr: "le front (du visage)"
      },
      {
        it: "la guida",
        fr: "le guide"
      },
      {
        it: "la nuvola",
        fr: "le nuage"
      },
      {
        it: "l'orchestra",
        fr: "l'orchestre"
      },
      {
        it: "la percentuale",
        fr: "le pourcentage"
      },
      {
        it: "la plastica",
        fr: "le plastique"
      },
      {
        it: "la primavera",
        fr: "le printemps"
      },
      {
        it: "la sabbia",
        fr: "le sable"
      },
      {
        it: "la tariffa",
        fr: "le tarif"
      },
      {
        it: "l'unghia",
        fr: "l'ongle"
      },
    ]
  },
  {
    location: "23",
    section: "Le genre des noms",
    subsection: "Exercice",
    content: [
      {
        it: "la contessa",
        fr: "\"il conte\" au féminin"
      },
      {
        it: "la professoressa",
        fr: "\"il professore\" au féminin"
      },
      {
        it: "la moglie",
        fr: "\"il marito\" au féminin"
      },
      {
        it: "la zia",
        fr: "\"lo zio\" au féminin"
      },
      {
        it: "la marchesa",
        fr: "\"il marchese\" au féminin"
      },
      {
        it: "la leonessa",
        fr: "\"il leone\" au féminin"
      },
      {
        it: "la traditrice",
        fr: "\"il traditore\" au féminin"
      },
      {
        it: "la pessimista",
        fr: "\"il pessimista\" au féminin"
      },
      {
        it: "il colore",
        fr: "? colore"
      },
      {
        it: "il mare",
        fr: "? mare"
      },
      {
        it: "la stagione",
        fr: "? stagione"
      },
      {
        it: "la povertà",
        fr: "? povertà"
      },
      {
        it: "il fiore",
        fr: "? fiore"
      },
    ]
  },
  {
    location: "24",
    section: "Formation du pluriel des noms réguliers",
    content: [
      {
        it: "la pera, le pere",
        fr: "le poivre, les poivres"
      },
      {
        it: "il sogno, i soni",
        fr: "le rêve, les rêves"
      },
      {
        it: "il problema, i problemi",
        fr: "le problème, les problèmes"
      },
      {
        it: "la chiave, le chiavi",
        fr: "la clé, les clés"
      },
      {
        it: "l'insegnante, gli insegnanti",
        fr: "l'enseignant, les enseignants"
      },
      {
        it: "l'insegnante, le insegnanti",
        fr: "l'enseignante, les enseignantes"
      },
      {
        it: "l'ala, le ali",
        fr: "l'aile, les ailes"
      },
      {
        it: "l'arma, le armi",
        fr: "l'arme, les armes"
      },
      {
        it: "la mano, le mani",
        fr: "la main, les mains"
      },
      {
        it: "l'eco, gli echi",
        fr: "l'écho, les échos"
      }
    ]
  },
  {
    location: "25",
    section: "Noms masculins, cas particuliers",
    content: [
      {
        it: "il duca, i duchi",
        fr: "le duc, les ducs"
      },
      {
        it: "il monarca, i monarchi",
        fr: "le monarque, les monarques"
      },
      {
        it: "il collega, i colleghi",
        fr: "le collègue, les collègues"
      },
      {
        it: "il belga, i belgi",
        fr: "le belge, les belges"
      },
      {
        it: "il cuoco, i cuochi",
        fr: "le cuisinier, les cuisiniers"
      },
      {
        it: "il parco, i parchi",
        fr: "le parc, les parcs"
      },
      {
        it: "l'albergo, gli alberghi",
        fr: "l'hôtel, les hôtels"
      },
      {
        it: "il sobborgo, i sobborghi",
        fr: "le faubourg, les faubourgs"
      },
      {
        it: "l'amico, gli amici",
        fr: "l'ami, les amis"
      },
      {
        it: "il nemico, i nemici",
        fr: "l'ennemi, les ennemis"
      },
      {
        it: "il greco, i greci",
        fr: "le grec, les grecs"
      },
      {
        it: "il porco, i porci",
        fr: "le porc, les porcs"
      },
      {
        it: "il sindaco, i sindaci",
        fr: "le maire, les maires"
      },
      {
        it: "il medico, i medici",
        fr: "le médecin, les médecins"
      },
      {
        it: "il cardiologo, i cardiologi",
        fr: "le cardiologue, les cardiologues"
      },
      {
        it: "lo psicologo, gli psicologi",
        fr: "le psychologue, les psychologues"
      },
      {
        it: "l'archipelago, gli archipelaghi",
        fr: "l'archipel, les archipels"
      },
      {
        it: "il carico, i carichi",
        fr: "le chargement, les chargements"
      },
      {
        it: "il catalogo, i cataloghi",
        fr: "le catalogue, les catalogues"
      },
      {
        it: "il dialogo, i dialoghi",
        fr: "le dialogue, les dialogues"
      },
      {
        it: "l'epilogo, gli epiloghi",
        fr: "l'épilogue, les épilogues"
      },
      {
        it: "il monologo, i monologhi",
        fr: "le monologue, les monologues"
      },
      {
        it: "l'obbligo, gli obblighi",
        fr: "l'obligation, les obligations"
      },
      {
        it: "il profugo, i profughi",
        fr: "le réfugié, les réfugiés"
      },
      {
        it: "il prologo, i prologhi",
        fr: "le prologue, les prologues"
      },
      {
        it: "il rammarico, i rammarichi",
        fr: "le regret, les regrets"
      },
      {
        it: "il mormorio, i mormorii",
        fr: "le murmure, les murmures"
      },
      {
        it: "lo zio, gli zii",
        fr: "l'oncle, les oncles"
      },
      {
        it: "il dio, gli dèi",
        fr: "le dieu, les dieux"
      },
      {
        it: "il bacio, i baci",
        fr: "le baiser, les baisers"
      },
      {
        it: "il figlio, i figli",
        fr: "le fils, les fils"
      },
      {
        it: "il formaggio, i formaggi",
        fr: "le fromage, les fromages"
      },
      {
        it: "l'occhio, gli occhi",
        fr: "l'oeil, les yeux"
      },
      {
        it: "l'olio, gli oli",
        fr: "l'huile, les huiles"
      },
      {
        it: "il premio, i premi",
        fr: "le prix, les prix"
      },
      {
        it: "il tempio, i templi",
        fr: "le temple, les temples"
      },
      {
        it: "il centinaio, le centinaia",
        fr: "la centaine, les centaines"
      },
      {
        it: "il migliaio, le migliaia",
        fr: "le millier, les milliers"
      },
      {
        it: "il miglio, le miglia",
        fr: "le mille, les milles"
      },
      {
        it: "il paio, le paia",
        fr: "la paire, les paires"
      },
      {
        it: "il riso, le risa",
        fr: "le rire, les rires"
      },
      {
        it: "l'uovo, le uova",
        fr: "l'oeuf, les oeufs"
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
  {
    location: "24",
    section: "",
    content: [
      {
        it: "",
        fr: ""
      },
    ]
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    const sections = examples.map(s => false);
    sections[sections.length - 1] = true;
    this.state = {
      previous: [],
      example: 0,
      section: sections.indexOf(true),
      value: '',
      bad: null,
      congrats: false,
      score: -(examples[sections.indexOf(true)].content[0].it).length,
      sections
    };
  }
  handleTextChange = (e) => {
    const newvalue = e.target.value;
    const { example, score, section } = this.state;
    if (examples[section].content[example].it.startsWith(newvalue)) {
      const newstate = { value: newvalue, bad: false, score: score + 1 }
      this.setState();
      if (examples[section].content[example].it === newvalue) {
        newstate.congrats = true;
      }
      this.setState(newstate);
    } else {
      this.setState({
        bad: true,
        congrats: false,
        value: e.target.value.substr(0, e.target.value.length - 2),
        score: score + 1
      })
    }
  }
  next = () => {
    const { example, section, previous, sections } = this.state;
    const next_example = (example + 1) % examples[section].content.length;
    let next_section = section;
    if (next_example === 0) {
      do {
        next_section = (next_section + 1) % examples.length;
      } while (!sections[next_section])
    }
    this.setState({
      example: next_example,
      section: next_section,
      value: '',
      bad: null,
      congrats: false,
      score: -examples[next_section].content[next_example].it.length,
      previous: previous.concat([examples[section].content[example].it])
    });
  }
  toggleSection = (e) => {
    const { sections, section } = this.state;
    const newSections = JSON.parse(JSON.stringify(sections));
    newSections[e.target.getAttribute('data-index')] = e.target.checked;
    const next_state = { sections: newSections };
    if (!newSections[section]) {
      let found = false;
      for (let i = section + 1; i < examples.length; ++i) {
        if (newSections[i]) {
          next_state.section = i;
          found = true;
          break;
        }
      }
      if (!found) {
        for (let i = 0; i < section; ++i) {
          if (newSections[i]) {
            next_state.section = i;
            break;
          }
        }
      }
    }
    this.setState(next_state);
  }
  sections = () => {
    const { sections } = this.state;
    const content = [];
    let section = null;
    for (let i = 0; i < examples.length; ++i) {
      const ex = examples[i];
      if (ex.subsection !== undefined) {
        if (ex.section !== section) {
          content.push(<tr key={'s' + i}>
            <td>
              <input type="checkbox" disabled style={{ visibility: 'hidden' }} />
              {ex.section}
            </td>
            <td></td>
          </tr>)
          section = ex.section;
        }
        content.push(<tr key={'ss' + i}>
          <td>
            <input type="checkbox" disabled style={{ visibility: 'hidden' }} />
            <input type="checkbox" data-index={i} checked={sections[i]} onChange={this.toggleSection} />
            {ex.subsection}
          </td>
          <td>{ex.location}</td>
        </tr>)
      } else {
        content.push(<tr key={'s' + i}>
          <td>
            <input type="checkbox" data-index={i} checked={sections[i]} onChange={this.toggleSection} />
            {ex.section}
          </td>
          <td>{ex.location}</td>
        </tr>)
      }

    }
    return <table style={{ width: '100%' }}><thead><tr></tr><tr></tr></thead><tbody>{content}</tbody></table>;
  }
  render() {
    const { previous, section, value, example, bad, congrats, score } = this.state;
    const textStyle = {
      width: '100%'
    }
    if (bad === true) {
      textStyle.backgroundColor = 'red';
    }
    if (bad === false) {
      textStyle.backgroundColor = 'green';
    }
    return (
      <div style={{
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '3cm'
      }}>
        <div style={{ paddingBottom: '0.5cm' }}>
          <div >&gt;&gt; {examples[section].section}</div>
          {examples[section].subsection ? <div>&gt;&gt; {examples[section].subsection}</div> : null}
        </div>
        <div style={{ fontWeight: 'bold', paddingBottom: '0.5cm' }}>{examples[section].content[example].fr}</div>
        <div><button onClick={() => this.handleTextChange({ target: { value: 'È' } })}>È</button>{score}</div>
        <textarea style={textStyle} rows={5} value={value} onChange={this.handleTextChange} />
        { congrats ? <div>Congrats! <button onClick={this.next}>Next</button></div> : null}
        {/*previous.map(x => <div>{x}</div>)*/}
        { this.sections()}
      </div >
    );
  }
}

export default App;
