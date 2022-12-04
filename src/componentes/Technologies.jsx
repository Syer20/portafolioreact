import { makeStyles, Paper, Typography } from '@material-ui/core';
import cplusplus from '../img/icon-C++.png';
import VisualBasic from '../img/icon-VB.png';
import MySQL from '../img/icon-SQL.png';
import Html5 from '../img/icon-html5.png';
import Css3 from '../img/icon-css.png';
import Javascript from '../img/icon-JS.png';
import reactjs from '../img/icon-React.png';
import React from "react";
import { Timeline } from '@material-ui/icons';
import { TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import StarRating from './StarRating';

const Technologies = ({id}) => {
    const classes = useStyles();

    const habilidades = [

        {
            numid: 1,
            src: cplusplus,
            title: "Lenguaje C++.",
            stars: 4,

        },
        {
            numid: 2,
            src: VisualBasic,
            title: "Visual Basic Studio.",
            stars: 4,

        },
        {
            numid: 3,
            src: MySQL,
            title: "Administración de Bases de Datos.",
            stars: 4,

        } ,
        {
            numid: 4,
            src: Html5,
            title: "HTML 5",
            stars: 4,

        },
        {
            numid: 5,
            src: Css3,
            title: "CSS 3",
            stars: 4,

        },
        {
            numid: 6,
            src: Javascript,
            title: "Javascript",
            stars: 4,

        },
        {
            numid: 7,
            src: reactjs,
            title: "React JS",
            stars: 4,

        },


    ]

    return(

        <div className = {classes.sectioncontent} id = {id}>
            <div className= {classes.cardtechnologies}>
                    <Timeline align = "right">
                            {
                                habilidades.map (({src, title, stars, numid}, index) => (

                                    <TimelineItem key = {index}>
                                        <TimelineOppositeContent>
                                            <Typography variant = "h6" color = "textSecondary">
                                                {numid}
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                                <img src = {src} alt = {title} className = {classes.customlogo}/>
                                                <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={2} className ={classes.paper}>                                            
                                                <Typography variant ="h6" component = "h1">
                                                    {title}
                                                </Typography>
                                                <StarRating stars = {stars}/>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>

                                ))
                            }
                    </Timeline>
            </div>
        </div>

    )

}

const useStyles = makeStyles((theme) => ({

customlogo:{

    width: "120px",

},
paper: {

    padding: "6px 16px",
    maxWidth: "150px"

}

}) )



export default Technologies