import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import './App.css';
import Workspace from './components/Project/ProjectTimesheet'
// import logo from './logo.svg';



class App extends React.Component {
  public render() {
    const myTheme = createMuiTheme({
      palette: {
        primary: {
          contrastText: '#fff',
          dark: '#002884',
          light: '#757ce8',
          main: '#3f50b5',
        },
        secondary: {
          contrastText: '#000',
          dark: '#ba000d',
          light: '#ff7961',
          main: '#f44336',
        },
      },
    });
    return (
      <MuiThemeProvider theme={myTheme}>
        <div>
          <header>
            The Timesheet App
        </header>
          <Workspace />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
