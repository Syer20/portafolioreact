import { Button, makeStyles, Paper, Radio, TextField, Typography } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import { useState } from 'react';


const Contact = ({title, blue, id}) => {
    const classes = useStyles();
    const [value, setValue] = useState("Desarrollar un Software")

    const handleChange = (e) => {

        setValue(e.target.value)

    }
    return(

        <div className = {`${classes.section} ${blue && classes.sectionblue}` }>
            <div className= { classes.sectioncontent } id={ id } >
                <Typography variant='h3'>{title}</Typography>
                <Paper className= {classes.root}>
                    <div className = {classes.titleandchoices}>

                        <Typography variant='h5'>Contáctame</Typography>

                            <div className= {classes.choices}>
                                <span>
                                    Requiero Desarrollar un Software
                                </span>
                                <Radio
                                    value ="Desarrollar un Software"
                                    checked = {value === "Desarrollar un Software"}
                                    color = "primary"
                                    onChange = {handleChange}
                                />
                                <span>
                                    Requiero de tus Servicios
                                </span>
                                <Radio
                                    value ="Servicios"
                                    checked = {value === "Servicios"}
                                    color = "primary"
                                    onChange = {handleChange}
                                />
                            </div>
                    </div>
                    <form className= {classes.form} noValidate autoComplete = "off">

                            <TextField label = "Tu nombre..."/>
                            <TextField label = "Tu Correo..."/>
                                {

                                    value === "Servicios" ?(

                                        <>
                                        <TextField label = "Tipo de Servicio..."/>
                                        </>

                                    ): null

                                }
                            <TextField label = "Describe tu problema..."/>
                    </form>     
                    <Button variant = "contained">Enviar</Button>          
             </Paper>
            </div>
        </div>
    )

}
const useStyles = makeStyles((theme) => ({

    section:{
        
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    sectioncontent:{

        maxWidth: "80vw",
        
    },
    root:{

            marginTop: theme.spacing(4),
            background: "lightblue",
            color: "black",
            fontSize: "1.5rem",
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: theme.spacing(4),

            "& button": {

                backgroundColor: "lightgray",
                color: "black",
                fontWeight: 900,
                fontSize: "1.2rem",
                marginTop: theme.spacing(4),

            },
            
            "& button:hover":{

                backgroundColor: "gray",
                color: "white",
            }

    },

    titleandchoices: {

        "& h5":{

                marginTop: theme.spacing(4),

        }

    },

    sectionblue:{

        background: "lightblue",
        color: "black",
    }
    
  }) )

export default Contact