import React, { Component } from 'react';
import HorseCard from '../horseCard/HorseCard';
import { Grid } from '@material-ui/core';

class HorseGrid extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }
    
    render() {
        return (
          <Grid className="grid-view" container spacing={1} direction="row" justify="space-around" alignItems="baseline"
            style={{flexGrow: "1"}}>
              <HorseCard filter={this.props.filter} />
          </Grid>
        );
    }
} 

export default HorseGrid;