import React from 'react'
import logo0 from '../../images/Logo.png';
import { useHistory} from "react-router-dom";
import './sundarban.css'



function  Sundarban() {

  let history = useHistory();
  function login() {
    history.push("/search");
  }

    return (


        <div>
                    <div>
            <div>
            <nav class=" no navbar navbar-expand-lg navbar-light ">
    <a class="navbar-brand" href="#"> <img src= {logo0} alt="" srcset=""/></a>

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
        <a class="nav-link " href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-right ">
        <a class="nav-link" href="/search">Destination</a>
      </li>
      <li class="nav-right ">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-right ">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li>  <button className='btn btn-warning'><h5>Login </h5> </button>
      </li>
    

    </ul>


  

  </div>
</nav>
            </div>

 
<div className="row">
    <div className=" col-md-6 col-6 col-sm-6">
       <div id='text' className="body">
       <h2>SUNDARBANS</h2>
       <p></p>
    <br/>
    <p > The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. </p>
    <p></p>

 
       </div>

    </div>


    
    <div className=" col-md-5 col-5 col-sm-5">
        
    <form class="form">
 
  <div class="form-group">
    <label for="inputAddress">Origin</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Dhaka"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Destinition</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Sundarbans"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Form</label>
      <input type="date" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">To</label>
      <input type="date" class="form-control" id="inputPassword4"/>
    </div>
  </div>

  <button onClick={login} type="submit" class=" btncox btn btn-warning"><h3>Start Booking</h3></button>
</form>
        
    </div>

    
</div>




         </div>
        </div>
    )
}

export default Sundarban
