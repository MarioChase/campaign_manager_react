import React from 'react';
import '../styling/App.css';
import ObjectCompendium from './compendium.js';
import * as ReactBootStrap from "react-bootstrap"

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {creatureCompendiumVisible: false, spellCompendiumVisible: false}
    this._toggleCreatureCompendium = this._toggleCreatureCompendium.bind(this);
    this.toggleSpellCompendium = this.toggleSpellCompendium.bind(this);
  }

  _toggleCreatureCompendium(){
    this.setState({spellCompendiumVisible: false});
    this.setState({creatureCompendiumVisible: !(this.state.creatureCompendiumVisible)});
  }

  toggleSpellCompendium(){
    this.setState({creatureCompendiumVisible: false});
    this.setState({spellCompendiumVisible: !(this.state.spellCompendiumVisible)});
  }

  creatureCompendiumView(){
    return (this.state.creatureCompendiumVisible ? <ObjectCompendium object_type={'stat_blocks'} objForm={'StatBlockForm'} obj_component={'StatBlockComponent'}/> : null);
  }

  spellCompendiumView(){
    return (this.state.spellCompendiumVisible ? <ObjectCompendium object_type={'spells'} objForm={'SpellForm'} obj_component={'SpellBlockComponent'}/> : null);
  }

  render() {
    return (
      <div className="App" id='main-app'>
      <ReactBootStrap.Navbar bg="light" expand="lg" fixed="top">
        <ReactBootStrap.Navbar.Brand>Dungeon Dashboard</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this._toggleCreatureCompendium}> Creature Compendium </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link onClick={this.toggleSpellCompendium}> Spell Compendium </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
        <div>
        {this.creatureCompendiumView()}
        {this.spellCompendiumView()}
        </div>
      </div>
    );
  }
}

export default App;
