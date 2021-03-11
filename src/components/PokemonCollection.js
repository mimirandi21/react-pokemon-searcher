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

  ComponentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => this.setState({pokemon: data}))
  }

  renderToys = () => {
    this.state.pokemon.map
  }
  render() {
    
      return (
        <Card.Group itemsPerRow={6}>
          <h1>Hello From Pokemon Collection</h1>
        </Card.Group>
      )
  }
}

export default PokemonCollection
