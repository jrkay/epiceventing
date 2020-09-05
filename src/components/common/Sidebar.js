import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';

class Sidebar extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const {filter, handleChange} = this.props;
      return (
        <div>
          <Button onClick={() => handleChange('Stud')} variant="contained" size='large'>All Available Studs</Button>
          <Button onClick={() => handleChange('Brood')} variant="contained" size='large'>All Available Broods</Button>
          <Button onClick={() => handleChange('Draft')} variant="contained" size='large'>Draft</Button>
          <Button onClick={() => handleChange('Light')} variant="contained" size='large'>Light</Button>
          <Button onClick={() => handleChange('Stock')} variant="contained" size='large'>Stock</Button>
          <Button onClick={() => handleChange('Pony')} variant="contained" size='large'>Pony</Button>
          <Button onClick={() => handleChange('Warmblood')} variant="contained" size='large'>Warmblood</Button>
        </div>
          );
      }
  } 
  
  export default Sidebar;