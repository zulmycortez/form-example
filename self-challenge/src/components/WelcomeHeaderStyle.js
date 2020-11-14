import styled from 'styled-components'

const WelcomeHeaderStyle = styled.div`
  background-color: #585858;
  padding: 32px 16px;
  height: 100%;
  .__logo {
    padding-bottom: 32px;
    svg {
      height: 25px;
    }
  }
  h2 {
    margin: 0;
    font-size: 24px;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-weight: 400;
  }
  h5 {
    margin: 16px 0 0 0;
    font-size: 14px;
    color: #EAEAEA;
    font-family: 'Merriweather-Regular';
  }
`

export default WelcomeHeaderStyle
