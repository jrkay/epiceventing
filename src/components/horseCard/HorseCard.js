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
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal, purple } from '@material-ui/core/colors';

class HorseBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFilter: false,
            modal: true,
            openedModal: null,
            open: false,
            search:null,
        };
    }

    openModal = id => {
        this.setState({ openedModal: id });
    };

    closeModal = () => {
        this.setState({ openedModal: null });
    };

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    filteredList = data.Horses.filter((data)=>{
        data}).map((data, i) => {
            return(
                <div key={i}>
                    <span>{data.name}</span>
                </div>
            )
      })

    theme = createMuiTheme({
        palette: {
          primary: purple,
        },
      });

    render() {
    //    const filterStatus = (data.Horses);
    const filterStatus = this.props.filter !== "" ? ((data.Horses.filter((f) => f.category.includes(this.props.filter)))) : (data.Horses);

        return (
            filterStatus.sort((a, b) => (a.name > b.name) ? 1 : -1).map((horse, i)  => {
                return (
                    <div key={i} className="containerOuter">
                    <div className="card" style={{background: "none"}}>
                    <Card className="face face1" style={{textAlign: "center"}}>
                        <CardContent>
                        <div>
                            <div className="card-title">{horse.name}</div>
                            <div>
                                {horse.year} {horse.breed} {horse.gender}<br />
                                { horse.sire === "Created"
                                    ? <p style={{fontSize: "13px"}}>Created</p>
                                    : <p style={{fontSize: "13px"}}>{horse.sire} x {horse.dam}</p>
                                }
                                { horse.yeh != null
                                    ? <span style={{fontSize: "13px"}}>{horse.year} YEH</span>
                                    : <></>
                                }
                                { horse.international != null
                                    ? <span style={{fontSize: "13px"}}>International level</span>
                                    : <></>
                                }
                                { horse.special != null
                                    ? <div style={{fontSize: "13px"}} dangerouslySetInnerHTML={{__html: horse.special}} />
                                    : <></>
                                }
                            </div>

                            <div key={i} className="button-link" style={{float: "right", marginRight: "-20px", marginBottom: "-5px"}}>
                                <IconButton onClick={() => this.openModal(i)}>
                                    <InfoIcon className="info-modal"/>
                                </IconButton>

                                <Dialog aria-labelledby="customized-dialog-title" 
                                    open={this.state.openedModal === i}
                                    onClose={this.closeModal}
                                    fullWidth={true}
                                    maxWidth={'lg'}
                                    className='modal-bg'
                                >
                                    <MuiDialogTitle>
                                        <div className="card-title" style={{display: "inline"}}>{horse.name}</div>
                                        <IconButton aria-label="close" className="closeIcon" onClick={this.closeModal}>
                                            <CloseIcon className="info-modal"/>
                                        </IconButton>
                                    </MuiDialogTitle>
                                    <DialogContent dividers>
                                    <Typography gutterBottom>
                                        <span style={{fontSize: "20px"}}>{horse.year} {horse.color} {horse.breed} {horse.gender}</span><br />
                                        { horse.sire === "Created"
                                            ? <p>Created</p>
                                            : <p>{horse.sire} x {horse.dam}</p>
                                        }<br /><br />
                                    </Typography>
                                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3} >
                                        <Grid item xs={6}>
                                            <div>
                                                <div className="breeding-info">Breeding Information</div>
                                                <p style={{fontSize: "17px"}}>{ horse.available !== true
                                                    ? <span>Unavailable for breeding</span>
                                                    : <span>Available for breeding<br /> 
                                                        { horse.category.includes("Stud")
                                                            ?  <div><br /><em>{(new Date().getFullYear())} Stud Fee: {horse.fee}</em><br />
                                                            <b>Available </b>to sire foals {parseInt(horse.year) + 3}<span>+</span><br /></div>
                                                            : <span><br /><em>{(new Date().getFullYear())} Brood Fee: {horse.fee} / year</em><br /><b>Open Years: </b> {horse.openyears}</span>
                                                        }
                                                        </span>
                                                }</p><br /><br />
                                                <div className="progeny">Progeny <span style={{color: "#444"}}>{horse.progeny.length != 0 ? "(" + horse.progeny.length +")" : <></>}</span></div>
                                                { horse.progeny.length != 0  ? 
                                                    <div>
                                                        <p><a href={"http://www.hfshc.com/IDHorse/search.php?search=y&IDHORSE_" + (horse.gender === "Stallion" ? "Sire=" : "Dam=") + horse.name + "&IDHORSE_" + (horse.gender === "Stallion" ? "Sire" : "Dam") + "_OPT==&formattype=long&sortby=IDHORSE_Year_Born"} target='_newWindow'>Foal Record</a></p>
                                                        { horse.progeny.sort((a, b) => a.age - b.age).map(function (progeny, i) { 
                                                            return (
                                                                <div key={i}>
                                                                    <div>{progeny.age} - <b style={{fontSize: "20px", color: "rgb(	0, 255, 255, .3)"}}>{progeny.name}</b>;  {progeny.breed} {progeny.gender}  
                                                                    { horse.category.includes("Stud") ? <span> (Out of <span className="progeny-name">{progeny.parent}</span>)</span> : <span> (By <span className="progeny-name">{progeny.parent}</span>)</span>}</div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                :
                                                    <p>No Foals</p>
                                                }
                                            </div>
                                            <br />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div>
                                                <div className="performance-info">Performance Information</div>
                                                <p><a href={"http://www.hfshc.com/ShowDB/hfshowrecords.php?id=" +  horse.id.toString().padStart(5, "0") + "&name=" + horse.name} target='_newWindow'>Show Record</a><br />
                                                {horse.discipline} {horse.international != null ? <span> - International level</span> : <></>} {horse.yeh != null ? <span> - {horse.year} YEH</span> : <></>}</p>
                                                { horse.special != null
                                                    ? <div dangerouslySetInnerHTML={{__html: horse.special}} />
                                                    : <></>
                                                }
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div>
                                        { horse.sire === "Created" ? 
                                            <></>
                                        :
                                        <div>
                                        <div style={{textAlign: "center"}}><i>Pedigree research in progress</i></div>
                                        { data.Horses.filter((f) => f.name.includes(horse.name)).map(function (horse, i) { 
                                            return (
                                                <table className='pedigreetable' key={i}>
                                                    <tbody>
                                                    <tr>
                                                        <td rowSpan='8' className='PedigreeLink one-top one-bottom' style={{width: "14%"}}>{horse.sire}</td>
                                                        <td rowSpan='4' className='PedigreeLink one-top two-bottom' style={{width: "14%"}}><span className="pedigree-hide">2</span></td>
                                                        <td rowSpan='2' className='PedigreeLink one-top three-bottom' style={{width: "14%"}}><span className="pedigree-hide">4</span></td>
                                                        <td rowSpan='1' className='PedigreeLink one-top four-bottom' style={{width: "12%"}}><span className="pedigree-hide">8</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink three-bottom' style={{width: "12%"}}><span className="pedigree-hide">8</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='2' className='PedigreeLink two-bottom' style={{width: "14%"}}><span className="pedigree-hide">4</span></td>
                                                        <td rowSpan='1' className='PedigreeLink four-bottom' style={{width: "12%"}}><span className="pedigree-hide">9</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink two-bottom' style={{width: "12%"}}><span className="pedigree-hide">9</span></td>
                                                    </tr><tr>
                                                        <td rowSpan='4' className='PedigreeLink one-bottom' style={{width: "14%"}}><span className="pedigree-hide">2</span></td>
                                                        <td rowSpan='2' className='PedigreeLink three-bottom' style={{width: "14%"}}><span className="pedigree-hide">5</span></td>
                                                        <td rowSpan='1' className='PedigreeLink four-bottom' style={{width: "12%"}}><span className="pedigree-hide">10</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink three-bottom' style={{width: "12%"}}><span className="pedigree-hide">10</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='2' className='PedigreeLink one-bottom' style={{width: "14%"}}><span className="pedigree-hide">5</span></td>
                                                        <td rowSpan='1' className='PedigreeLink four-bottom' style={{width: "12%"}}><span className="pedigree-hide">11</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink one-bottom' style={{width: "12%"}}><span className="pedigree-hide">11</span></td>
                                                    </tr><tr>
                                                        <td rowSpan='8' className='PedigreeLink one-bottom' style={{width: "14%"}}>{horse.dam}</td>
                                                        <td rowSpan='4' className='PedigreeLink two-bottom' style={{width: "14%"}}><span className="pedigree-hide">3</span></td>
                                                        <td rowSpan='2' className='PedigreeLink three-bottom' style={{width: "14%"}}><span className="pedigree-hide">6</span></td>
                                                        <td rowSpan='1' className='PedigreeLink four-bottom' style={{width: "12%"}}><span className="pedigree-hide">12</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink three-bottom' style={{width: "12%"}}><span className="pedigree-hide">12</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='2' className='PedigreeLink two-bottom' style={{width: "14%"}}><span className="pedigree-hide">6</span></td>
                                                        <td rowSpan='1' className='PedigreeLink four-bottom' style={{width: "12%"}}><span className="pedigree-hide">13</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink two-bottom' style={{width: "12%"}}><span className="pedigree-hide">13</span></td>
                                                    </tr><tr >
                                                        <td rowSpan='4' className='PedigreeLink one-bottom' style={{width: "14%"}}><span className="pedigree-hide">3</span></td>
                                                        <td rowSpan='2' className='PedigreeLink three-bottom' style={{width: "14%"}}><span className="pedigree-hide">7</span></td>
                                                        <td rowSpan='1' className='PedigreeLink four-bottom' style={{width: "12%"}}><span className="pedigree-hide">14</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink three-bottom' style={{width: "12%"}}><span className="pedigree-hide">14</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='2' className='PedigreeLink one-bottom' style={{width: "14%"}}><span className="pedigree-hide">7</span></td>
                                                        <td rowSpan='1' className='PedigreeLink four-bottom' style={{width: "12%"}}><span className="pedigree-hide">15</span></td>
                                                    </tr><tr className='PedigreeLink'>
                                                        <td rowSpan='1' className='PedigreeLink one-bottom' style={{width: "12%"}}><span className="pedigree-hide">15</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                        )})}
                                </div>
                                }
                                </div>
                                    </DialogContent>

                                    <Button onClick={this.closeModal} color="primary" className="modal-close">
                                        Close
                                    </Button>
                            </Dialog>
                            </div></div>
                        </CardContent>
                    </Card>
                    </div></div>
                );
            }));
        }
}

export default HorseBox;