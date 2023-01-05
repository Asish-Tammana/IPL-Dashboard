/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    id: '',
    latestMatchDetails: {},
    teamBannerUrl: '',
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getEachTeamDetails()
  }

  getEachTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const lmd = data.latest_match_details

    const latestMatchDetails = {
      umpires: lmd.umpires,
      result: lmd.result,
      manOfTheMatch: lmd.man_of_the_match,
      id: lmd.id,
      date: lmd.date,
      venue: lmd.venue,
      competingTeam: lmd.competing_team,
      competingTeamLogo: lmd.competing_team_logo,
      firstInnings: lmd.first_innings,
      secondInnings: lmd.second_innings,
      matchStatus: lmd.match_status,
    }

    const teamBannerUrl = data.team_banner_url

    const rm = data.recent_matches

    const recentMatches = rm.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      id,
      latestMatchDetails,
      teamBannerUrl,
      recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      id,
      latestMatchDetails,
      teamBannerUrl,
      recentMatches,
      isLoading,
    } = this.state

    return (
      <>
        {isLoading ? (
          <div className={`team-loader-matches-container ${id}`}>
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          </div>
        ) : (
          <div className={`team-matches-container ${id}`}>
            <img className="team-img" src={teamBannerUrl} alt="team banner" />
            <h1 className="latest-match">Latest Match</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <div className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
