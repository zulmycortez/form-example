import WelcomeHeader from './components/WelcomeHeader'
import Form from './Form'
import AppStyle from './AppStyle'

function App() {
  return (
    <AppStyle>
      <div className="header">
        <WelcomeHeader />
      </div>
      <div className="form">
        <Form />
      </div>
    </AppStyle>
  );
}

export default App;
