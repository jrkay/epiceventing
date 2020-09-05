import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

class Sidebar extends Component {
    constructor(props) {
      super(props);
    }
  
    theme = createMuiTheme({
        palette: {
          primary: teal,
        },
      });

    render() {
      const {filter, handleChange} = this.props;
      return (
        <ThemeProvider theme={this.theme}>
          <Button onClick={() => handleChange('')} color="primary" variant="contained" size='large'>Full List</Button>
          <Button onClick={() => handleChange('Stud')} color="primary" variant="contained" size='large'>All Available Studs</Button>
          <Button onClick={() => handleChange('Brood')} color="primary" variant="contained" size='large'>All Available Broods</Button>
          <Button onClick={() => handleChange('Draft')} color="primary" variant="contained" size='large'>Draft</Button>
          <Button onClick={() => handleChange('Light')} color="primary" variant="contained" size='large'>Light</Button>
          <Button onClick={() => handleChange('Stock')} color="primary" variant="contained" size='large'>Stock</Button>
          <Button onClick={() => handleChange('Pony')} color="primary" variant="contained" size='large'>Pony</Button>
          <Button onClick={() => handleChange('Warmblood')} color="primary" variant="contained" size='large'>Warmblood</Button>
        </ThemeProvider>
          );
      }
  } 
  
  export default Sidebar;