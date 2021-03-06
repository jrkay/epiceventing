import React, { Component }  from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './home/HomePage';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import HorseGrid from './horseGrid/HorseGrid';
import PageNotFound from './PageNotFound';
import Grid from '@material-ui/core/Grid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(filter) {
        switch(filter){
            case 'Draft':
                this.setState({
                    filter: "Draft"
                });
                break;
            case 'Light':
                this.setState({
                    filter: "Light"
                });
                break;
            case 'Stock':
                this.setState({
                    filter: "Stock"
                });
                break;
            case 'Pony':
                this.setState({
                    filter: "Pony"
                });
                break;
            case 'Warmblood':
                this.setState({
                    filter: "Warmblood"
                });
                break;
            case 'Special':
                    this.setState({
                        filter: "Special"
                    });
                break;
            case 'Stud':
                this.setState({
                    filter: "Stud"
                });
                break;
            case 'Brood':
                this.setState({
                    filter: "Brood"
                });
                break;
            case 'International':
                    this.setState({
                        filter: "International"
                    });
                break;
            case 'YEH':
                    this.setState({
                        filter: "YEH"
                    });
                break;
            default:
                this.setState({
                    filter: ""
                });
            }
    }

    render() {
        return (
            <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route component={PageNotFound} />
            </Switch>

            <Grid container direction="row" justify="center" alignItems="flex-start"
                spacing={5} style={{flexGrow: "1"}}>
                <Grid item xs={2}>
                   <Sidebar filter={this.state.filter} handleChange={this.handleChange} />
                </Grid>
                <Grid item xs={10}>
                   <HorseGrid filter={this.state.filter} />
                </Grid>
            </Grid>
        </div>
        );
    }
}
 
export default App;