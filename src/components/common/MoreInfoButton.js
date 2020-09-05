import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import data from "../../../data"; 


export default function MoreInformation() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = id => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div >
        <Button variant="outlined" color="primary" onClick={handleClickOpen()}>
            Open dialog
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <MuiDialogTitle disableTypography>
        <Typography variant="h6">{name}</Typography>
        </MuiDialogTitle>
            <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </Typography>
            <Button autoFocus onClick={handleClose} color="primary" style={{ margin: "0",padding: "theme.spacing(1)"}}>
                Save changes
            </Button>
        </Dialog>
        </div>
    )
    }