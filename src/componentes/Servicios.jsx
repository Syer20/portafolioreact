import { CardMedia, makeStyles, Typography } from '@material-ui/core';
import soporte from '../img/soporte.png';
import gestion from '../img/gestion.png';
import React from "react";

const Servicios = (id) => {

    const classes = useStyles();
    return(

        <div className = {classes.sectioncontent} id = {id}>
            <Typography variant='h5'>Ofrezco los Siguientes Servicios:</Typography>
            <div className= {classes.cardsoporte}>
                <CardMedia image = {gestion} className = {classes.gestion} title = "services"/>
                <Typography variant='h6'>Gestion de Proyectos:</Typography>
            </div>
            <div className= {classes.cardgestion}>
                <CardMedia image = {soporte} className = {classes.soporte} title = "services"/>
                <Typography variant='h6' className={classes.textsupport}>Soporte Técnico:</Typography>
            </div>
        
        </div>
    )


}

const useStyles = makeStyles((theme) => ({

sectioncontent: {

    fontSize: "large",
    marginTop: theme.spacing(8),
    backgroundColor: "lightgray",
    width: "480px",
    height: "600px",
    borderRadius: "2px",
    marginLeft: theme.spacing(75),
    

    "& h5":{
        
        fontWeight: "bold",
        textAlign: "center",
        

    },

    "& h6":{
        
        fontWeight: "bold",
        textAlign: "center",

    }

},

soporte:{
    height: "96px",
    width: "160px",
    marginTop: "5rem",
    position: "absolute",
    marginLeft: "3rem",
    
},

gestion:{
    height: "96px",
    width: "160px",
    marginTop: theme.spacing(5),
    position: "absolute",
    marginLeft: "3rem",
},

textsupport:{
    marginTop: "15rem",
}

}) )

export default Servicios