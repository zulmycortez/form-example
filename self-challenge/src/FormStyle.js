import styled from 'styled-components'

const FormStyle = styled.div`
  padding: 0 16px 32px 16px;
  .__item {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
  }
  label {
    .__error {
      color: red;
    }
  }
  input {
    background-color: #F7F7F7;
    border: 1px solid #EAEAEA;
    border-radius: 6px;
    height: 48px;
    padding-left: 16px;
    &:active {
      background-color: #ffffff;
      border: 1px solid #00ADEE;
    }
    &:focus {
      background-color: #ffffff;
      border: 1px solid #00ADEE;
    }
  }
  button {
    background-color: #FFAB44;
    border-color: #FFAB44;
    border-radius: 6px;
    border-style: none;
    color: white;
    margin-top: 48px;
    width: 100%;
    padding: 16px 0;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    svg {
      height: 10px;
    }
    &:focus {
      border-color: #FFAB44;
      border-radius: 6px;
    }
  }
`

export default FormStyle
