import React, { Component } from 'react';
import data from "../../../data"; 
import Card from '@material-ui/core/Card';
import { CardContent, DialogContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

class HorseBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFilter: false,
            modal: true,
            openedModal: null,
            open: false,
        };
    }

    openModal = id => {
        this.setState({ openedModal: id });
    };

    closeModal = () => {
        this.setState({ openedModal: null });
    };


    render() {
    //    const filterStatus = (data.Horses);
    const filterStatus = this.props.filter !== "" ? ((data.Horses.filter((f) => f.category.includes(this.props.filter)))) : (data.Horses);
    
        return (
            filterStatus.sort((a, b) => (a.name > b.name) ? 1 : -1).map((horse, i) => {
                return (
                    <Card key={i} className="box">
                        <CardContent>
                            <div className="card-title">{horse.name}</div>
                            <div>
                                {horse.year} {horse.breed} {horse.gender}<br />
                                { horse.sire === "Created" ? 
                                    <p style={{fontSize: "13px"}}>Created</p>
                                :
                                    <p style={{fontSize: "13px"}}>{horse.sire} x {horse.dam}</p>
                                }
                               
                            </div>

                            <div key={i} className="button-link">
                            <Button variant="outlined" color="primary" onClick={() => this.openModal(i)}>
                                More Information
                            </Button>

                            <Dialog aria-labelledby="customized-dialog-title" 
                                open={this.state.openedModal === i}
                                onClose={this.closeModal}
                                fullWidth={true}
                                maxWidth={'md'}
                            >
                                <MuiDialogTitle>
                                    <div variant="h6">{horse.name}</div>
                                        <IconButton aria-label="close" className="closeIcon" onClick={this.closeModal}>
                                          <CloseIcon style={{color: "blue"}}/>
                                        </IconButton>
                                </MuiDialogTitle>
                                <DialogContent dividers>
                                <Typography gutterBottom>
                                {horse.year} {horse.breed} {horse.gender}<br />
                                    { horse.sire === "Created" ? 
                                        <p>Created</p>
                                    :
                                        <p>{horse.sire} x {horse.dam}</p>
                                    }
                                </Typography>
                                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} >
                                    <Grid item xs={8}>
                                        <div>
                                            <b>Breeding Information</b>
                                            <p>{ horse.available !== true ? <span>Unavailable for breeding</span> : 
                                            <span>Available for breeding<br /> 
                                                { horse.category.includes("Stud") ? 
                                                    <em>2020 Stud Fee: {horse.fee}</em>
                                                :
                                                    <em>2020 Brood Fee: {horse.fee} / year</em>} </span>
                                            }</p>
                                            <u>Progeny</u><br />
                                            { horse.progeny.length != 0  ? 
                                                <div>
                                                <p><a href={horse.foalRecord} target='_newWindow'>Foal Record</a></p>
                                                { horse.progeny.sort((a, b) => a.age - b.age).map(function (progeny, i) { 
                                                return (
                                                    <div key={i}>
                                                        <div>{progeny.age} - <b>{progeny.name}</b>,  {progeny.breed} {progeny.gender}  
                                                        { horse.category.includes("Stud") ? <span> (Out of {progeny.parent})</span> : <span> (By {progeny.parent})</span>}<br /></div>
                                                    </div> 
                                                );
                                                    })}
                                            </div>
                                            :
                                                <p>No Foals</p>
                                            }
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div>
                                            <b>Performance Information</b><br />
                                            <p><a href={horse.showRecord} target='_newWindow'>Show Record</a></p>
                                        </div>
                                    </Grid>
                                </Grid>
                                </DialogContent>

                                <Button onClick={this.closeModal} color="primary" style={{ margin: "0 auto", background: 'aliceblue', border: "none", width: "75%"}}>
                                    Close
                                </Button>
                            </Dialog>
                            </div>
                            

                          </CardContent>
                    </Card>
                 );
            }));
    }
}

export default HorseBox;