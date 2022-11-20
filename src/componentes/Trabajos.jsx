import { makeStyles } from '@material-ui/core';
import react from 'react';

const Trabajos = ({title, blue, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${blue && classes.sectionblue}`}>
            "Trabajos realizados"
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

export default Trabajos