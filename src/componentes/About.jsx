import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography, Button } from '@material-ui/core';
import development from "../img/development.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import pdf from "../img/Curriculum-Vitae-Samir Espina.pdf"

const About = ({title, blue, id}) => {
    const classes = useStyles();
    return(

        <div className= { ` ${classes.section} ${blue && classes.sectionblue} ` }>
            <div className= { classes.sectioncontent } id={ id } >
                <Typography variant='h3'>{title}</Typography>
                <Card className = {classes.card}>
                    <CardMedia image = {development} className = {classes.media} title = "development"/>
                        <CardContent className = {classes.cardcontent}>
                            <TypeWriterEffect
                                text = "Hola, Soy Samir Espina."
                                textStyle = {{fontSize: "3rem", fontWeight: "500px",}}
                                startDelay ={100}
                                cursorColor = "white"
                                typeSpeed = {150}

                            />

                            <TypeWriterEffect
                                text = "Junior Software Developer,"
                                textStyle = {{fontSize: "2rem", fontWeight: "500px",}}
                                startDelay ={2500}
                                cursorColor = "white"
                                typeSpeed = {150}

                            />

                            < TypeWriterEffect
                                text = "Technical Support."
                                textStyle = {{fontSize: "1.5rem", fontWeight: "500px",}}
                                startDelay ={6000}
                                cursorColor = "white"
                                typeSpeed = {150}

                            />
                        </CardContent>
                            <CardActions>
                                <Button variant = "contained" className = {classes.pdfbutton}>
                                    <a href = {pdf} download>
                                        Descargar Resumen Curricular
                                    </a>
                                </Button>
                            </CardActions>
                </Card>
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
        textAlign: "center",

    },

    sectionblue:{

        background: "lightblue",
        color: "black",
    },
    card: {

        height: "70vh",
        width: "1000px",
        display: "flex",
        marginTop: theme.spacing(8),
        position: "absolute",

    },
    media: {

        width: "520px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "2px",
        margin: theme.spacing (2),
        
    },

    cardcontent:{

        marginTop: theme.spacing(2)

    },

    pdfbutton:{

        position: "absolute",
        bottom: 250,
        right: "4.5rem",
        backgroundColor: "lightgray",
        padding: theme.spacing(4),
        [theme.breakpoints.down ("sm")]:{

            bottom: "2rem",
            right: "1rem",

        },
        
        "&:hover": {

            backgroundColor: "gray",
            
        },
        "& a": {

            color: "black",
            textDecoration: "none",
            fontWeight: 1000,
            
        },
        "& a:hover":{

            color: "black"


        },
        
    },
    
  }) )

export default About