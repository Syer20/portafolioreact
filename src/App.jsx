import { makeStyles } from "@material-ui/core";
import Navbar from "./componentes/Navbar";
import About from "./componentes/About";
import Habilidades from "./componentes/Habilidades";
import Contact from "./componentes/Contact";
import Trabajos from "./componentes/Trabajos";

function App() {
  const classes = useStyles();
  return (
   <div className={classes.root}>
    <Navbar />
    <About title="Acerca de mí" id = "About me" blue = {true}/>
    <Habilidades title="Manejo en Lenguajes" id = "Habilidades" blue = {false}/>
    <Trabajos title="Trabajos Realizados" id = "Trabajos" blue = {true}/>
    <Contact titles="Mis Contactos" id = "Contactos" blue = {false}/>
   </div>
  )
}

const useStyles = makeStyles((theme) => ({

  root:{

  }
  
}) )
export default App
