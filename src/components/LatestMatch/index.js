import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props

    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatchDetails

    return (
      <div className="latest-match-container">
        <div className="left-container">
          <div>
            <h1>{competingTeam}</h1>
            <h1>{date}</h1>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            className="competing-team-sm-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt="latest match"
        />
        <hr className="line" />
        <div className="right-container">
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
