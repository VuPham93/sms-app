import React, {FC, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import HomePage from "../homePage/HomePage";
import SMSPage from "../smsPage/SMSPage";
import HistoryPage from "../historyPage/HistoryPage";
import CreditPage from "../creditPage/CreditPage";
import ManagePage from "../managePage/ManagePage";
import {
    CreditCardOutlined, ExitToAppOutlined,
    HistoryOutlined,
    HomeOutlined,
    SettingsOutlined,
    SmsOutlined,
} from "@material-ui/icons";
import {Avatar, Button} from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        logo: {
            height: "64px",
            width: "100%",
            objectFit: "cover",
        },
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(1),
        },
        logOut: {
            position: "absolute",
            bottom: 20,
            display: "flex"
        },
        large: {
            margin: "10px",
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }),
);

const MainPage: FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [tabNumber, setTabNumber] = useState(1);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const tabControls = () => {
        switch (tabNumber) {
            case 1:
                return <HomePage/>
            case 2:
                return <SMSPage/>
            case 3:
                return <HistoryPage/>
            case 4:
                return <CreditPage/>
            case 5:
                return <ManagePage/>
        }
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <div>
                    <img
                        className={classes.logo}
                        src="https://www.semtek.com.vn/wp-content/uploads/2019/12/4-38.png"
                        alt="logo"
                    />
                </div>
            </div>
            <List>
                <ListItem
                    button
                    key={1}
                    onClick={() => setTabNumber(1)}
                    selected={tabNumber === 1}
                >
                    <ListItemIcon><HomeOutlined/></ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem
                    button
                    key={2}
                    onClick={() => setTabNumber(2)}
                    selected={tabNumber === 2}
                >
                    <ListItemIcon><SmsOutlined/></ListItemIcon>
                    <ListItemText primary="SMS"/>
                </ListItem>
                <ListItem
                    button
                    key={3}
                    onClick={() => setTabNumber(3)}
                    selected={tabNumber === 3}
                >
                    <ListItemIcon><HistoryOutlined/></ListItemIcon>
                    <ListItemText primary="History"/>
                </ListItem>
                <ListItem
                    button
                    key={4}
                    onClick={() => setTabNumber(4)}
                    selected={tabNumber === 4}
                >
                    <ListItemIcon><CreditCardOutlined/></ListItemIcon>
                    <ListItemText primary="Credit"/>
                </ListItem>
                <ListItem
                    button
                    key={5}
                    onClick={() => setTabNumber(5)}
                    selected={tabNumber === 5}
                >
                    <ListItemIcon><SettingsOutlined/></ListItemIcon>
                    <ListItemText primary="Manage"/>
                </ListItem>
            </List>
            <div className={classes.logOut}>
                <Avatar
                    className={classes.large}
                    alt="user"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                />
                <Button
                    endIcon={<ExitToAppOutlined/>}
                >
                    Log out
                </Button>
            </div>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        SMS-APP
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <div style={{width: "100%", height: "100%"}}>
                    {tabControls()}
                </div>
            </main>
        </div>
    );
};

export default MainPage;
