import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: []
    }
  }

 componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => {
        this.setState({pokemon: data}, () => console.log(this.state))
      })
  }

  renderCards = () => {
    return this.state.pokemon.map(pokemon => <PokemonCard id={pokemon.id} name={pokemon.name} hp={pokemon.hp} front={pokemon.sprites.front} back={pokemon.sprites.back} />)
  }
  render() {
    
      return (
        <Card.Group itemsPerRow={6} >
          <h1>Hello From Pokemon Collection</h1>
          <hr/><br/>
          {this.state.pokemon.length === 0 ? <h3>Pokemon are coming!</h3> : this.renderCards()}
        </Card.Group>
      )
  }
}

export default PokemonCollection
