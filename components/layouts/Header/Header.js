import React,{ useState }  from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import './Header.css';
import Link1 from 'next/link';
import {Link} from 'react-router-dom';
const drawerWidth = 280;
const itemMenu = [

    {
        to: '/For-sale',
        name: 'For sale',
        subMenu: true,
    },

    {
        to: '/Virtual-Reality',
        name: 'Virtual Reality',
        subMenu: true
    },
    {
        to: '/Bespoke-page',
        name: 'Bespoke Page '
    },
    {
        to: '/Market-Trend',
        name: 'Market Trend',
        subMenu: true,
    },
    {
        to: '/contact-us',
        name: 'Contact Us'
    },
    {
        to: '/about-us',
        name: 'About Us'
    }

];
const Menu=[
    {
        "name": "For sale",
        "url": "/For-sale",
        "children": [
            {
                "name": "Child31",
                "url": "/child31"
            },
            {
                "name": "Child32",
                "url": "/child32"
            },
            {
                "name": "Child32",
                "url": "/child32"
            }
        ]
    },
    {
        "name": "Virtual Reality",
        "url": "/Virtual-Reality"
    },
    {
        "name": "Bespoke page",
        "url": "/Bespoke-page"
    },
    {
        "name": "Market Trend",
        "children": [
            {
                "name": "Child41",
                "url": "/child41"
            },
            {
                "name": "Child42",
                "url": "/child42"
            }
        ]
    },
    {
        "name": "Contact Us",
        "url": "/contact-us"
    },
    {
        "name": "About Us",
        "url": "/about-us"
    },
]
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginBottom: '60px'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            flexShrink: 0,

        }
    },
    drawerPaper: {
        width: drawerWidth,
        color: '#212121'

    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const [state, setState] = useState(0);
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleClick =( item )=> {
        setState( prevState => (
            { [ item ]: !prevState[ item ] }
        ) )
    };
    const handler=(children)=> {
        return children.map((subOption)=>{
            if ( !subOption.children ) {
                return(
                    <div key={ subOption.name }>
                        <ListItem
                            button
                            key={ subOption.name }>
                            <Link1
                                href={subOption.url }

                            >
                                <ListItemText
                                    inset
                                    primary={ subOption.name }
                                />
                            </Link1>
                        </ListItem>
                    </div>
                )
            }
            return (

                <div key={ subOption.name }>
                    <ListItem
                        button
                        onClick={ () => handleClick(subOption.name ) }>
                        <ListItemText
                            inset

                            primary={ subOption.name } />
                        { state[ subOption.name ] ?
                            <ExpandLess /> :
                            <ExpandMore />
                        }
                    </ListItem>
                    <Collapse
                        in={ state[ subOption.name ] }
                        onClick={handleDrawerClose}
                        timeout="auto"
                        unmountOnExit
                    >
                        {handler( subOption.children ) }
                    </Collapse>
                </div>
            )
        })
    };
    return (
        <div className={classes.root}>

            <CssBaseline/>

            <AppBar

                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <div className="d-flex TopheaderRight">
                    <div className="mr-auto logo ml-5">
                        <img className="mt-1" src="/static/images/logo.png" style={{height:"40px",width:"200px"}}/>
                    </div>
                    <div className="ml-auto">
                        <button className="btn btn-outline-primary btn-rounded1 waves-effect">Login</button>
                        <button className="btn btn-outline-primary btn-rounded1 waves-effect">Register</button>

                    </div>
                </div>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>


                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                            <ul className="navbar-nav mt-4  pb-2">
                                <li className="nav-item dropdown mega-dropdown mr-2 text-white">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink2"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false"> For Sale
                                        <span className="sr-only">(current)</span>
                                    </a>
                                    <div className="dropdown-menu mega-menu  py-5 px-3"
                                         aria-labelledby="navbarDropdownMenuLink2">
                                        <div className="row animated zoomIn delay-05s">
                                            <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                                <h6 className="sub-title text-uppercase font-weight-bold white-text">Properties For Sales
                                                    The Countries</h6>
                                                <Divider className="white"/>
                                                <ul className="list-unstyled">
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>UK property for sale
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>Portugal property for sale
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>Spain property for sale
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>Cyprus property for sale
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>Turkey property for sale
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>Greece property for sale
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>United Arab Emirates property for sale
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                                                <h6 className="sub-title text-uppercase font-weight-bold white-text">Best Properties</h6>
                                                <Divider className="white"/>
                                                <ul className="list-unstyled">
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>The UK
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>The Spain
                                                            irure dolor in
                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>The Portugal

                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>The Cyprus

                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>The Greece

                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>The United Arab Emirates

                                                        </a>
                                                    </li>
                                                    <li className="mb-3 ml-3">
                                                        <a className="menu-item pl-0">
                                                            <i className="fa fa-caret-right pl-1 pr-3"></i>The Turkey
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                                                <h6 className="sub-title text-uppercase font-weight-bold white-text">latest properties</h6>
                                                <Divider className="white"/>
                                                <ul className="">
                                                <img className="img-for-sale mt-2" src="/static/images/slide3.jpg"/>
    
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown mega-dropdown mr-2">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink2"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false"> Virtual Reality
                                        <span className="sr-only">(current)</span>
                                    </a>
                                    
                                </li>
                                <li className="nav-item dropdown mega-dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink2"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false"> Bespoke Page
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown mega-dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink2"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false"> Market Trend
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown mega-dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink2"
                                   data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Contact Us
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                                <li className="nav-item dropdown mega-dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink2"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false">About Us
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <style jsx>
                        {
                            `
                            .img-for-sale{
                                height:220px;
                            }
                            `
                        }
                        </style>
                    </nav>


                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <img src="/static/logo.png" style={{height:"100px",width:"225px"}}/>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>

                </div>


                <Divider/>
                <List>
                    <ListItem className="mdb-color darken-3  text-white"
                              key="menuHeading"
                              disableGutters>
                        <ListItemText
                            inset
                            primary="Main Menu"/>
                    </ListItem>
                    { handler(Menu) }
                </List>
                <Divider/>
                <div className="socilaNetwork ml-5 mt-2">
                    <i className="fa fa-facebook-square ml-3 fa-2x text-info"></i>
                    <i className="fa fa-instagram ml-3 fa-2x text-danger" ></i>
                    <i className="fa fa-twitter-square ml-3 fa-2x text-info" ></i>
                    <i className="fa fa-envelope ml-3 fa-2x text-default" ></i>
                </div>
                <Divider/>
                <div className="ml-1 mt-3">
                    <button className="btn btn-outline-danger btn-rounded text-white Login ">Login</button>
                    <button className="btn btn-outline-danger btn-rounded text-white ">Sign Up</button>

                </div>
            </Drawer>


            <main

                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
                onClick={handleDrawerClose}
            >

            </main>


        </div>
    );
}
