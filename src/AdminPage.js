
import Navbar from "./navbar";
import Topbar from "./topbar";
import Footer from "./footer";
import Admin from "./admin";

function AdminPage(){
    return(
        <> 
          <Navbar/>
          <Topbar/>
          <h1>AdminPage...</h1>
          <Admin/>
         <Footer/>
        </>
    );
}
export default AdminPage;