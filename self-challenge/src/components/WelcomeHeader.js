import React from 'react'
import GiantRobotIcon from '../assets/GiantRobotIcon'
import WelcomeHeaderStyle from './WelcomeHeaderStyle'

const WelcomeHeader = () => {
  return (
    <WelcomeHeaderStyle>
      <div className="__logo">
        <GiantRobotIcon />
      </div>
      <h2>Welcome</h2>
      <h5>
        Please tell us a little about yourself to get started
      </h5>
    </WelcomeHeaderStyle>
  )
}

export default WelcomeHeader
