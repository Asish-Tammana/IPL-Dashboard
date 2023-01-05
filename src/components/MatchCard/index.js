import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchDetails} = this.props

    const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

    const statusColor = matchStatus === 'Won' ? 'green' : 'red'

    const smallFont =
      competingTeam === 'Royal Challengers Bangalore' ? 'dec-fsize' : undefined

    return (
      <li className="each-match-container">
        <img
          className="competition-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <h1 className={smallFont}>{competingTeam}</h1>
        <p>{result}</p>
        <h1 className={statusColor}>{matchStatus}</h1>
      </li>
    )
  }
}
export default MatchCard
