/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()
    const {teams} = teamData

    const updatedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({
      teamsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div className="horizontal home-load-container">
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          </div>
        ) : (
          <div className="home-bg-container">
            <div className=" horizontal title-container">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div className="horizontal teams-container">
              {teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} cardDetails={eachTeam} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Home
