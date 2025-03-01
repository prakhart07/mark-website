import Project from "./project";
import Navbar from "./navbar";
import Topbar from "./topbar";
import Footer from "./footer";

function ProjectPage(){
    return(
        <> 
          <Navbar/>
          <Topbar/>
        <Project/>
         <Footer/>
        </>
    );
}
export default ProjectPage;