import React from 'react'
import '../styling/stat_block_component.css'

class StatBlockComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };

    this.populateCompendium = this.populateCompendium.bind(this);
  }

  componentDidMount() {
    this.populateCompendium();
    this.compendiumUpdate = setInterval(this.populateCompendium, 3000);
  };

  componentWillUnmount() {
    clearInterval(this.compendiumUpdate);
  }

  populateCompendium() {
    console.log('ping')
    fetch("http://localhost:3000/stat_blocks")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  };


render() {
  const { error, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
        <ul>
          {items.map(item => (
            <div class="stat-block wide">
              <hr class="orange-border" />
                <div class="section-left">
                  <div class="creature-heading">
                    <h1>{item.name}</h1>
                    <h2>{item.creature_type} {item.alignment}</h2>
                  </div>
                  <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                  </svg>
                  <div class="top-stats">
                    <div class="property-line first">
                      <h4>Armor Class  </h4>
                      <p>{item.armor_class}</p>
                    </div>
                    <div class="property-line">
                      <h4>Hit Points  </h4>
                      <p>{item.hit_points}</p>
                    </div>
                    <div class="property-line last">
                      <h4>Speed  </h4>
                      <p>{item.speed}</p>
                    </div>
                    <svg height="5" width="100%" class="tapered-rule">
                      <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div class="abilities">
                      <div class="ability-strength">
                        <h4>STR</h4>
                        <p>{item.str}</p>
                      </div>
                    <div class="ability-dexterity">
                      <h4>DEX</h4>
                      <p>{item.dex}</p>
                    </div>
                    <div class="ability-constitution">
                      <h4>CON</h4>
                      <p>{item.con}</p>
                    </div>
                    <div class="ability-intelligence">
                      <h4>INT</h4>
                      <p>{item.int}</p>
                    </div>
                    <div class="ability-wisdom">
                      <h4>WIS</h4>
                      <p>{item.wis}</p>
                    </div>
                    <div class="ability-charisma">
                      <h4>CHA</h4>
                      <p>{item.cha}</p>
                    </div>
                  </div>
                  <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                  </svg>
                  <div class="property-line">
                    <h4>Saving Throws  </h4>
                    <p>{item.saving_throws}</p>
                  </div>
                  <div class="property-line">
                    <h4>Skills  </h4>
                    <p>{item.skills}</p>
                  </div>
                  <div class="property-line">
                    <h4>Damage Vulnerabilities  </h4>
                    <p>{item.vulnerability}</p>
                  </div>
                  <div class="property-line">
                    <h4>Damage Resistances  </h4>
                    <p>{item.damage_resistance}</p>
                  </div>
                  <div class="property-line">
                    <h4>Damage Immunities  </h4>
                    <p>{item.damage_immunities}</p>
                  </div>
                  <div class="property-line">
                    <h4>Condition Immunities  </h4>
                    <p>{item.condition_immunities}</p>
                  </div>
                  <div class="property-line">
                    <h4>Senses  </h4>
                    <p>{item.senses}</p>
                  </div>
                  <div class="property-line">
                    <h4>Languages  </h4>
                    <p>{item.languages}</p>
                  </div>
                  <div class="property-line last">
                    <h4>Challenge Rating  </h4>
                    <p>{item.challenge_rating} ({item.experience_points} xp)</p>
                  </div>
                  </div>
                  <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                  </svg>
                  <div class="property-block">
                    <p>{item.abilities}</p>
                  </div>
                  </div>
                  <div class="section-right">
                    <div class="actions">
                      <h3>Actions</h3>
                        <div class="property-block">
                          <p>{item.actions}</p>
                        </div>
                    </div>
                    <div class="actions">
                    <h3>Legendary Actions</h3>
                      <div class="property-block">
                        <p>{item.legendary_actions}</p>
                      </div>
                    </div>
                  </div>
                <hr class="orange-border bottom" />
            </div>
          ))}
        </ul>
      );
  }
}

}

export default StatBlockComponent
