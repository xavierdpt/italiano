import './App.css';
import React from 'react';

const examples = [
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
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: [],
      example: 0,
      section: 0,
      value: '',
      bad: null,
      congrats: false,
      score: -(examples[0].content[0].it).length,
      sections: examples.map(s => true)
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
    const { example, section, previous } = this.state;
    const next_example = (example + 1) % examples[section].content.length;
    let next_section = section;
    if (next_example == 0) {
      next_section = (section + 1) % examples.length;
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
