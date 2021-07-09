

import Card from "./Card"
import "./Dashboard.css"
import Typical from 'react-typical'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import book from "./book.png"
import {useHistory} from "react-router-dom"
import tech from "./tech.png"
import newspaper from "./newspaper.png"




const Dashboard=({setLoginUser})=> {
    
  const  history= useHistory()

 const    goToCarddetails = () => {
      
      history.push('/card-books');
    // you can manage here to pass the clicked card id to the card details page if needed
    }
   const goToCard1details = () => {
      
        history.push('/card-tech');
    // you can manage here to pass the clicked card id to the card details page if needed
    }

  const  goToCard2details = () => {
      
       history.push('/card-news');
    // you can manage here to pass the clicked card id to the card details page if needed
    }



    return (
        <div className="dashboard">
 
  <div className="wrap">
            <div className="header">
            <Typical
        steps={['Welcome', 1000, 'To', 500,'All in One']}
        loop={4}
        wrapper="h1"


      />
     
       <LocalLibraryIcon  alignItems="center" className="icon" fontSize="large"/>
       
    
      
      </div>


      <div className="mybtn">
      <button class="button" onClick={() => setLoginUser({})}>Log out</button>
      </div>
      </div>
<div className="allinone">
      <div className="mycard" onClick={()=>goToCarddetails()}>
  
      <Card image={book}
      title="Search Your Books 🔍"
      desc="Search any technical books related to your interest."/>
    
      </div>
      <div className="mycard"onClick={()=>goToCard1details()}>
      <Card image={tech}
      title=" Technical news 👨‍💻"
      desc="Click here to view the latest technical news and increase your knowledge"/>
    
      </div>
      <div className="mycard"onClick={()=> goToCard2details()}>
      
      <Card image={newspaper}
      title="Current Affairs 📰"
      desc="Click here to view the latest news and update yourself"/>
   
      </div>
      </div>
        </div>
    )
}

export default Dashboard
