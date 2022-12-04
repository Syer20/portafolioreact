import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar} from '@material-ui/core';
import { BuildTwoTone, CallMissedSharp, EmojiObjects, InfoTwoTone, OpenInNew } from '@material-ui/icons';
import logo from "../img/hammer.png"
import {Link, animateScroll as scroll} from "react-scroll";
import InfoTwoToneToneIcon from '@material-ui/icons/InfoTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import BuildTwoToneIcon  from '@material-ui/icons/BuildTwoTone';
import ContactMailTwoToneIcon  from '@material-ui/icons/ContactMailTwoTone';
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from 'react';

const links = [

    {
        id: "About me",
        text: "Acerca de Mí",
        icon: <InfoTwoToneToneIcon/>
    },
    {
        id: "Habilidades",
        text: "Destrezas",
        icon: <EmojiObjectsTwoToneIcon/>
    },
    {
        id: "Trabajos",
        text: "Mis proyectos",
        icon: <BuildTwoToneIcon/>
    },
    {
        id: "Contactos",
        text: "Contáctame",
        icon: <ContactMailTwoToneIcon/>
    },
    
]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState (false);
    return(
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.Toolbar} >
                <img src={logo} className={classes.logo} alt="logo"/>
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index)=>(
                            <Link   key={index} 
                                    to={id} 
                                    spy={true} 
                                    activeClass = "active" 
                                    smooth={true} 
                                    duration={500}
                                    offset={-70}> 
                                    
                                        {text} 
                            </Link>
                        ))
                    }
                </List>
                <IconButton edge ="end" 
                className = {classes.menubutton}
                onClick ={()=>setOpen (!open)}>
                <MenuIcon fontSize = "large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
            <Drawer anchor='right' open = {open} onClose ={()=>setOpen(false)}> 
                
                <IconButton onClick = {()=>setOpen(false)} className = {classes.cancelicon}>
                    <CancelIcon fontSize='large'/>
                </IconButton>
                    <Divider/>
                    {
                        links.map(({id, text, icon}, index)=>(
                            <Link   key={index} 
                                    className = {classes.sidebar}
                                    to={id} 
                                    spy={true} 
                                    activeClass = "active" 
                                    smooth={true} 
                                    duration={500}
                                    offset={-70}>
                                <ListItem component ="h5">
                                    <span>
                                        <ListItemIcon>
                                            {icon}
                                        </ListItemIcon>
                                        {text}
                                    </span>
                                </ListItem>            
                            </Link>
                        ))
                    }
            </Drawer>
        </>

    )

}
const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
    },
    Toolbar:{
        displayflex: "center",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logo:{
        height: "3rem",
        objectFit: "contain",
        "& :hover":{
            cursor: "pointer"
        }
    },
    menu:{
        [theme.breakpoints.down ("sm")]:{
            display:"none"
        },
        "& a":{
        color: "#333",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginLeft: theme.spacing(5)
        },
        "& a:hover":{
            cursor: "pointer",
            color: "darkgray",
            borderBottom: "3px solid darkblue",
        }
    },
    menubutton:{

        display:"none",
        [theme.breakpoints.down("sm")]:{
            display:"block",
            color: "dark",
            position: "absolute",
            top: 0,
            right: 10,
        }

    },

    sidebar:{

        width: "45vw",
        [theme.breakpoints.down("sm")]:{

            width: "60vw",
        },
        "& h5":{

            margin: theme.spacing(7, 0, 0, 4),
            fontSize: "1.5rem",
            color: "#333",
            fontWeight: "bold",
        },

        "& h5:hover":{

            color: "darkgray",
            cursor: "pointer",
            borderBottom: "3px solid darkblue",

        },

    },

cancelicon:{
    
    color: "darkblue",
    position: "absolute",
    top: 0,
    right: 15,
    }
    
  }) )
export default Navbar