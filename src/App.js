import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ThemeProvider } from 'styled-components'

import './App.css'

import LoginPage from './components/pages/loginpage'
import StartPage from './components/pages/startpage'
import UserRoute from './components/routes/userroute'

import Theme from './themes'

import configureStore from './configureStore'
import ConditionsPage from './components/pages/conditionspage';
const { store, persistor } = configureStore()


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <PersistGate loading={<span>Loading...</span>} persistor={persistor}>
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path="/" exact component={LoginPage} />
                <UserRoute path="/start" exact component={StartPage} />
                <UserRoute path="/conditions" exact component={ConditionsPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
      </ThemeProvider>
    )
  }
}

export default App;
