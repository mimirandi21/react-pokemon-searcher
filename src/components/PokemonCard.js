import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: false
    }
  }

  flipCard = () => {
    this.setState(pS => {
      return {flipped: !pS.flipped}
    })
  }

  render() {
    return (
      <Card onClick={this.flipCard} >
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.flipped === true ? this.props.back : this.props.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
