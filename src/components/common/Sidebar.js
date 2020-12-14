import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal, purple } from '@material-ui/core/colors';
import SearchBar from '../searchbar/Searchbar';

class Sidebar extends Component {
    constructor(props) {
      super(props);
    }
  
    theme = createMuiTheme({
        palette: {
          primary: purple,
        },
      });

    render() {
      const {filter, handleChange} = this.props;
      return (
        <div className="sidebar">
        <ThemeProvider theme={this.theme}>
      {/* <SearchBar /> */}

          <Button className="sidebar-button" onClick={() => handleChange('')} color="primary" variant="contained" size='large'>Full List</Button>
          <div className="sidebar-button-small">
          <Button className="left" onClick={() => handleChange('Stud')} color="primary" variant="contained" size='large'>Studs</Button>
          <Button className="right" onClick={() => handleChange('Brood')} color="primary" variant="contained" size='large'>Broods</Button>
          </div>
          <Button className="sidebar-button" onClick={() => handleChange('Draft')} color="primary" variant="contained" size='large'>Draft</Button>
          <Button className="sidebar-button" onClick={() => handleChange('Light')} color="primary" variant="contained" size='large'>Light</Button>
          <Button className="sidebar-button" onClick={() => handleChange('Stock')} color="primary" variant="contained" size='large'>Stock</Button>
          <Button className="sidebar-button" onClick={() => handleChange('Pony')} color="primary" variant="contained" size='large'>Pony</Button>
          <Button className="sidebar-button" onClick={() => handleChange('Warmblood')} color="primary" variant="contained" size='large'>Warmblood</Button>
          <Button className="sidebar-button" onClick={() => handleChange('Special')} color="primary" variant="contained" size='large'>Special</Button>
        </ThemeProvider>
        </div>
          );
      }
  } 
  
  export default Sidebar;