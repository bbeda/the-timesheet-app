import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Workspace from './components/Workspace/Workspace'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/Paper';


class App extends Component {
  render() {
    const myTheme = createMuiTheme({
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    });
    return (
      <MuiThemeProvider>
        <div>
          <header>
            The Timesheet App
        </header>
          <Workspace></Workspace>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
