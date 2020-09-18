import React, { useState } from 'react'
import Calendar from 'react-calendar';
import logo0 from '../../images/Logo.png';
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cal from "../../icon/cal.png"
import './Sreemangal.css';
import { useHistory} from "react-router-dom";




function Sreemangal() {

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
       <h2>SREEMANGAL</h2>
       <p></p>
    <br/>
    <p >It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out.</p>
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
    <input type="text" class="form-control" id="inputAddress2" placeholder="Sreemangal"/>
  </div>
  <div class="form-row">
    <div class=" form-group col-md-6">
      <label for="inputEmail4">Form </label>
      <div className="cal1">
      <input type="date" class="form-control" id="inputEmail4" />

      </div>
    
    </div>
    <div class=" form-group col-md-6">
      <label for="inputPassword4">To</label>
<div className="cal1">
<input type="date" class="form-control" id="inputPassword4"/>

</div>
  


    </div>

  </div>

  <button onClick={login} type="submit" class="btn1 btn btn-warning"><h3>Start Booking</h3></button>
</form>
        
    </div>

    
</div>




         </div>
        </div>
    )
}

export default Sreemangal
