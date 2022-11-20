import { makeStyles } from '@material-ui/core';
import react from 'react';

const Contact = () => {
    const classes = useStyles();
    return(

        <div className = {`${classes.section} ${blue && classes.sectionblue}` }>
            Contactos
        </div>
    )

}
const useStyles = makeStyles((theme) => ({

    section:{
        
        minHeight: "100vh",

    },

    sectionblue:{

        background: "lightblue",
        color: "black",
    }
    
  }) )

export default Contact