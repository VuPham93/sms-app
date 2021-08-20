import React, {FC} from "react";
import {Button, TextField} from "@material-ui/core";
import {SendOutlined} from "@material-ui/icons";

const SMSPage: FC = () => {
    return (
        <div>
            <TextField
                id="standard-textarea"
                label="Phone number"
                multiline
                fullWidth
                variant="outlined"
                style={{paddingBottom: "30px"}}
            />
            <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={10}
                fullWidth
                variant="outlined"
                style={{paddingBottom: "30px"}}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                size={"large"}
                endIcon={<SendOutlined/>}
            >
                Send
            </Button>
        </div>

    )
};

export default SMSPage;