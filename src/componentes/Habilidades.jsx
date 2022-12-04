import { makeStyles, Typography } from '@material-ui/core';
import Servicios from './Servicios';
import Technologies from './Technologies';

const Habilidades = ({title, blue, id}) => {
    const classes = useStyles();
    return(

        
        <div className = { ` ${classes.section} ${blue && classes.sectionblue} ` }>
            <div className = {classes.sectioncontent} id = {id}>
                <Typography variant ='h3'>{title}</Typography>
                <Technologies title = "Destreza en Tecnologías" id = "Tecnologías" className = {classes.tecnologías}/>
                <Servicios title = "Servicios" id = "Servicios" className = {classes.servicios}/>
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
        "& tecnologías":{

            display: "flex"

        },
        "& servicios":{

            display: "flex"

        },
    },
    sectionblue:{

        background: "lightblue",
        color: "black",
    }
    
  }) )

export default Habilidades