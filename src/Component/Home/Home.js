import React from 'react'
import './Home.css';
import logo0 from '../../images/Logo.png';
import logo from '../../images/Rectangle 1.png';
import logo2 from '../../images/Sreemongol.png';
import logo3 from '../../images/sundorbon.png';


import { useHistory, Link} from "react-router-dom";

  
function Home() {
  let history = useHistory();

  function handleCoxbazar() {
    history.push("/coxbazar");
  }
  function handleSreemangal() {
    history.push("/sreemangal");
  }
  function handleSundarban() {
    history.push("/sundarban");
  }
  function login() {
    history.push("/login");
  }
  
    return (

        <div>
            <div>
            <nav class=" no navbar navbar-expand-lg navbar-light ">
    <Link class="navbar-brand" href="/home"> <img src= {logo0} alt="" srcset=""/></Link>

      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class=" no collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-right  ">
        <Link class="nav-link " href="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-right ">
        <Link class="nav-link" href="/search">Destination</Link>
      </li>
      <li class="nav-right ">
        <Link class="nav-link" href="/blog">Blog</Link>
      </li>
      <li class="nav-right ">
        <Link class="nav-link" href="">Contact</Link>
      </li>
      <li>  <button onClick={login} className='btn btn-warning'><h5>Login </h5> </button>
      </li>
    

    </ul>


  

  </div>
</nav>
            </div>

 
<div className="row">
    <div className=" col-md-4 col-6 col-sm-6">
       <div id='text' className="body">
       <h2>COX'S BAZAR</h2>
       <p></p>
    <br/>
    <p >Cox's Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee...</p>
    <p></p>

    <button  onClick={handleCoxbazar} className='btn btn-warning'><h5>Booking &#8594;</h5> </button>
       </div>

    </div>


    
    <div className=" col-md-8 col-6 col-sm-6">
        
    <div class="card-deck">
  <div onClick={handleCoxbazar} class=" card">
    <img class="card-img-top" src={logo} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">COX'S BAZAR</h5>
    </div>
  </div>
  <div onClick={handleSreemangal} class="  card">
    <img class="card-img-top" src={logo2} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">SREEMANGAL</h5>
    
    </div>
  </div>
  <div onClick={handleSundarban}  class="card">
    <img class="card-img-top" src={logo3} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">SUNDARBANS                </h5>
    </div>
  </div>
</div>
        
    </div>
</div>




         </div>
   

    )
}

export default Home
