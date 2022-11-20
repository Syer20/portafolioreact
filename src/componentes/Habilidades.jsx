import { makeStyles } from '@material-ui/core';
import react from 'react';

const Habilidades = () => {
    const classes = useStyles();
    return(

        
        <div className = { ` ${classes.section} ${blue && classes.sectionblue} ` }>
        "Lenguajes que conozco"
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

export default Habilidades