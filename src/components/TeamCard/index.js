import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {cardDetails} = this.props
    const {id, name, teamImageUrl} = cardDetails
    return (
      <li type="none" className="team-card">
        <Link className="inner-card" to={`/team-matches/${id}`}>
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <h1>{name}</h1>
        </Link>
      </li>
    )
  }
}

export default TeamCard
