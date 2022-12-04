import { makeStyles, Typography } from '@material-ui/core';
import react from 'react';

const Trabajos = ({title, blue, id}) => {
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${blue && classes.sectionblue}`}>
           <div className= { classes.sectioncontent } id={ id } >
                <Typography variant='h3'>{title} </Typography>
            </div>
        </div>
            
    )

}
const useStyles = makeStyles((theme) => ({

    section:{
        
        minHeight: "100vh",

    },

    sectioncontent:{

        maxWidth: "80vw",
        margin: "0 auto",

    },
    sectionblue:{

        background: "lightblue",
        color: "black",
    }
    
  }) )

export default Trabajos