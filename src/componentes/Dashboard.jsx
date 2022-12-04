import { makeStyles, Typography } from '@material-ui/core';
import Img from "../img/icon-dashboard.jpg"
import Foto from "../img/img-dashboard.png"

const Dashboard = ({title, blue, id}) => {
    const classes = useStyles();
    return(

        <div className= { ` ${classes.section} ${blue && classes.sectionblue} ` }>
             <img src={Foto} className={classes.Foto} alt="Perfil"/>
            <div className= { classes.sectioncontent } id={ id } >
                <Typography variant='h3'>{title}</Typography>
            </div>
            <img src={Img} className={classes.Img} alt="Inicio"/>

        </div>
        
    )
}

const useStyles = makeStyles((theme) => ({

    section:{
        
        margin: "0",
        padding: "0",
        minHeight: "100vh",

    },

    Img:{

        height: "20rem",
        minWidth: "95vw",
        objectFit: "contain",
        
        
    },

    Foto:{

        height: "15rem",
        minWidth: "97vw",
        objectFit: "contain",
        
    },

    sectioncontent:{

        maxWidth: "80vw",
        margin: "0 auto",
        padding: "250px",
        textAlign: "center",
        fontSize: "bold",
        fontFamily: "'Oswald', sans-serif",
        paddingBottom: "2vw",
        paddingTop: "2vw",
    },

    sectionblue:{

        background: "lightblue",
        color: "black",
    }
    
  }) )

export default Dashboard