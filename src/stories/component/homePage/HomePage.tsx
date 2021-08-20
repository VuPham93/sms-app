import React, {FC} from "react";
import HistoryPage from "../historyPage/HistoryPage";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    flexBox: {
        display: 'flex',
        width: '100%',
    },
    boxLeft: {
        width: "50%",
        marginBottom: "25px",
        marginRight: "25px",
    },
    boxRight: {
        width: "50%",
        marginBottom: "25px",
    },
});

const HomePage: FC = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.flexBox}>
                <Card className={classes.boxLeft} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Message sent today
                        </Typography>
                        <Typography variant="h3">
                            13
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.boxRight} variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Credit left
                        </Typography>
                        <Typography variant="h3">
                            $320.000
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Last messages
                    </Typography>
                    <HistoryPage/>
                </CardContent>
            </Card>

        </div>
    )
};

export default HomePage;