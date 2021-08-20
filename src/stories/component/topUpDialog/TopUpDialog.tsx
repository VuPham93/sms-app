import React, {FC} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@material-ui/core";

export interface TopUpDialogProps {
    user: string
}

const TopUpDialog: FC<TopUpDialogProps> = (props) => {
    const {user} = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
                onClick={handleClickOpen}
            >
                Top up
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Top up for {user}</DialogTitle>
                <DialogContent>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Top up
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TopUpDialog;