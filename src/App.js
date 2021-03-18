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
      },
      {
        it: "",
        fr: ""
      },
      {
        it: "",
        fr: ""
      },
      {
        it: "",
        fr: ""
      },
      {
        it: "",
        fr: ""
      },
    ]
  }
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
    if (next_example == 0) {
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
