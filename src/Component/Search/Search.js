import React, { useState, useContext } from 'react'
import './Search.css'
import { usercontex } from '../../App';
import logo0 from '../../images/Logo.png';
import fakeData from '../../fakeData';


function Search() {
    const first =fakeData.slice(0,5);
const [pd,setpd]= useState(first);
 


    const [loguser,setloguser]=useContext(usercontex);

    
    return (
      
         

<div className="b">
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
        <a class="nav-link " href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-right ">
        <a class="nav-link" href="/destination">Destination</a>
      </li>
      <li class="nav-right ">
        <a class="nav-link" href="/blog">Blog</a>
      </li>
      <li class="nav-right ">
        <a class="nav-link" href="">Contact</a>
      </li>
      <li>  <button  className='btn '><p>{loguser.name}</p>  </button>
      </li>
    </ul>
</div>
</nav>




<div class="row">

  <div class="right1 col-12 col-md-7">
  

<div>
<ul className='hotel'>
        { 
           pd.map(pd=> <li class="s"> <img class="p1" src={pd.img} alt=""/><p><span class="hotel-name"> {pd.name}</span> <br/>

<span class="hotel-body">4 guests   2 bedrooms   2 beds   2 baths <br/>
Wif Air conditioning Kitchen
Cancellation fexibility availiable</span > <br/><span class="price">
Rating:  
{pd.star}/5 <br/> ${pd.price}/night
</span>
</p>
          </li>)
        }
        <p></p>
    </ul>
</div>

  </div>
  <div class=" left1 col-6 col-md-5"></div>


</div>


    </div>

    




        
                // <h1> hello search       <p>name:{loguser.name}</p> 
                // <p>email:{loguser.email}</p>
                //  </h1>
        
    )
}

export default Search
