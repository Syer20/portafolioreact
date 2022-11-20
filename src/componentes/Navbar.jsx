import { AppBar, List, Toolbar} from '@material-ui/core';
import { BuildTwoTone, CallMissedSharp, EmojiObjects, InfoTwoTone } from '@material-ui/icons';
import logo from "../img/hammer.png"
import {Link, animateScroll as scroll} from "react-scroll";
import { InfoTwoToneToneIcon } from '@material-ui/icons/InfoTwoTone';
import { EmojiObjectsTwoToneIcon } from '@material-ui/icons/EmojiObjectsTwoTone';
import { BuildTwoToneIcon } from '@material-ui/icons/BuildTwoTone';
import { ContactMailTwoToneIcon } from '@material-ui/icons/ContactMailTwoTone';

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
        text: "Mis Contactos",
        icon: <ContactMailTwoToneIcon/>
    },
    
]

const Navbar = () => {
    const classes = useStyles();
    return(
        <Appbar position="sticky" className={classes.root}>
            <Toolbar className={classes.Toolbar} >

                <img src={logo} className={classes.logo} alt = "logo"/>
                <List className = {classes.menu}>
                    {
                        links.map(({id, text, index})=>(
                            <Link key={index} to={id} spy={true} smooth = {true} duration = {500} offset = {-70}>{text}</Link>

                        ))

                    }
                </List>
            </Toolbar>
        </Appbar>

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
        height: "1.5rem",
        objectFit: "contain",
        "&:hoover":{
            cursor: "pointer"
        }
    }
    
  }) )
export default Navbar