import "./styles.css";
import ProductPage from "../src/ImagenesProyectos/ProductPage.jpg"
import Form from "../src/ImagenesProyectos/Formulario.jpg"
import Temp from "../src/ImagenesProyectos/Temp.jpg"
import TodoList from "../src/ImagenesProyectos/TodoList-Basic.jpg"
import Dark from "../src/ImagenesProyectos/Darkmode.jpg"
import Calc from "../src/ImagenesProyectos/Calculator.jpg"
import Starbucks from "../src/ImagenesProyectos/Starbucks.jpg"
import Todoreact from "../src/ImagenesProyectos/TodoReact.jpg"
import StarWars from "../src/ImagenesProyectos/StarWars.jpg"
import CV from "../src/CV/Resume.pdf"


function App() {
  return(
    <div>

        <div class="navbar">
          Daniel Valdez index's
        </div>

      <div class="texto"><h2>Ingeniero Industrial y Desarrollador web Full Stack</h2></div>
      <div class="links">
          <a href={CV} target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/512/3757/3757968.png" title="Curriculum Vitae" class="imagenlink" alt="CV" height="100%"></img></a>
          <a href="mailto:valdez.daniel77@gmail.com" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/512/2504/2504727.png" title="Gmail" class="imagenlink" alt="Gmail" height="100%"></img></a>
          <a href="https://www.linkedin.com/in/daniel-valdez-94a638195/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" title="Linkedin" class="imagenlink" alt="Linkedin" height="100%"></img></a>
          <a href="https://github.com/danielva77" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/512/919/919847.png" title="Github" class="imagenlink" alt="Github" height="100%"></img></a>
      </div>
      {/* <div class="texto"><p>Todo es práctica ...</p></div> */}
      <div class="texto"><h4>Acá podras encontrar un index de todos los proyectos en los que trabajé, desde los básicos hasta los que tienen mayor complejidad.</h4></div>

      <div class="containerproject">

        <a href="#navbar" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src="https://cdn.dribbble.com/users/3771952/screenshots/11154411/battlefield_4_4x.png" alt="Imagen" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">E-commerce</p>
          <p class="tecnologias">ReactJS · Redux · NodeJS · Javascript · PostgreSQL · Sequelize · Mercadopago · Auth0 · Nodemailer · Chatbox</p>
        </div></a>

        <a href="https://resilient-chebakia-f75fcb.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={StarWars} alt="Star Wars App" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">Star Wars App</p>
          <p class="tecnologias">ReactJS · Redux · HTML · Bootstrap · Javascript</p>
        </div></a>

        <a href="https://main--calm-chebakia-a69638.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={Todoreact} alt="ToDo List" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">ToDo List</p>
          <p class="tecnologias">ReactJS · HTML · CSS · Javascript</p>
        </div></a>
        
        <a href="https://moonlit-bunny-bf2468.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={Starbucks} alt="Starbucks" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">Starbucks</p>
          <p class="tecnologias">HTML · CSS</p>
        </div></a>

        <a href="https://fastidious-blancmange-9b46be.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={Calc} alt="Calculator" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">Calculator</p>
          <p class="tecnologias">HTML · CSS · Javascript · Dark mode</p>
        </div></a>

        <a href="https://main--clever-kangaroo-baaf39.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={ProductPage} alt="ProductPage" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">Product Page</p>
          <p class="tecnologias">HTML · CSS · Javascript</p>
        </div></a>

        <a href="https://rococo-mandazi-385db9.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={Dark} alt="Darkmode" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">Dark mode</p>
          <p class="tecnologias">HTML · CSS · Javascript · Dark mode · Localstorage</p>
        </div></a>

        <a href="https://main--inspiring-crostata-96b4fe.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={TodoList} alt="TodoList" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">TODO List</p>
          <p class="tecnologias">HTML · CSS · Javascript</p>
        </div></a>

        <a href="https://main--bright-pasca-2f03da.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={Temp} alt="chronometer" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">Chronometer</p>
          <p class="tecnologias">HTML · CSS · Javascript</p>
        </div></a>

        <a href="https://main--cerulean-entremet-c85489.netlify.app/" target="_blank" rel="noopener noreferrer"><div class="project">
          <img src={Form} alt="Form" object-fit="cover" width="100%" height="100%"></img>
          <p class="visible">Form</p>
          <p class="tecnologias">HTML · CSS · Javascript</p>
        </div></a>


      </div>

      <div >

      <div class="links">
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" class="imagenlink" title="Javascript" alt="Javascript" height="100%"></img></a>
          <a href="https://es.reactjs.org/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" class="imagenlink" title="ReactJS" alt="React" height="100%"></img></a>
          <a href="https://nodejs.org/es/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" class="imagenlink" title="NodeJS" alt="Node" height="100%"></img></a>
          <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://git-scm.com/images/logo@2x.png" class="imagenlink" title="Git" alt="Git" height="100%"></img></a>
          <a href="https://es.redux.js.org/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://redux.js.org/img/redux-logo-landscape.png" class="imagenlink" title="Redux" alt="Redux" height="100%"></img></a>
          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_css_icon_130661.png" class="imagenlink" title="CSS" alt="CSS" height="100%"></img></a>
          <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_html_icon_130541.png" class="imagenlink" title="HTML" alt="HTML" height="100%"></img></a>
          <a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://sequelize.org/img/logo.svg" class="imagenlink" title="Sequelize" alt="Sequelize" height="100%"></img></a>
          <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968342.png" class="imagenlink" title="Postgres" alt="Postgres" height="100%"></img></a>
          <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" class="imagenlink" title="Bootstrap" alt="Bootstrap" height="100%"></img></a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" class="imagenlink"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png" class="imagenlink" title="Typescript" alt="Typescript" height="100%"></img></a>
      
      
      
      
      </div>

        <h2 class="texto">Decime hola y hablamos sobre tu idea :)</h2>
        <a href="https://www.linkedin.com/in/daniel-valdez-94a638195/" target="_blank" rel="noopener noreferrer" class="texto"><button>Contactame!</button></a>
      </div>


    </div>
  )
}
export default App;
