import React, { useContext, useState } from 'react'
import logo0 from '../../images/Logo.png';
import fb from"../../icon/fb.png";
import google from"../../icon/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import './Createacc.css';
import "firebase/auth";
import { useHistory, useLocation} from "react-router-dom";
import { usercontex } from '../../App';
import firebaseConfig from '../Login/firebaseconfig';


function Createacc() {
  const[user,setuser]=useState({

    email:'',
    password:'',
    error:'',
    success:false
    
    
    
    
    })

  const [loguser,setloguser]=useContext(usercontex);
  const history =useHistory();
  const location=useLocation();
  const { from } = location.state || { from: { pathname: "/search" } };
  if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
  }
   const googlesignin=()=>{
      console.log('hello');
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var {displayName,email} = result.user;
        const signuser ={name:displayName,email}
        setloguser(signuser)
        history.replace(from);
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    }
    const fblogin=()=>{
      var fbprovider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(fbprovider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        var {displayName,email} = result.user;
        const signuser ={name:displayName,email}
        setloguser(signuser)
        history.replace(from);
   
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  
    }
    function login() {
        history.push("/login");
      }


      const handleChange =(e)=>{
     
        let isFormValid ;

        if(e.target.name==='email'){
           isFormValid = /\S+@\S+\.\S/.test(e.target.value)
        }

        if(e.target.name==='password'){

          isFormValid =e.target.value.length > 6;
       

        }
        if (isFormValid){

          const newuser ={...user};
  newuser[e.target.name]=e.target.value;
  setuser(newuser);
          }
        


      }

      const haldlesubmit =(e)=>{
        if(user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then (res=>{
            const newuser ={...user}
            newuser.error='';
            newuser.success = true;
            setuser(newuser)
          })
          
          .catch(error=>{
            const newuser ={...user}
            newuser.error=error.message;
            newuser.success = false;
            setuser(newuser);
            var errorCode = error.code;
            var errorMessage = error.message;
        
          });
        }
e.preventDefault();


      }

    return (
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
      <li>  <button onClick={login} className='btn btn-warning'><h5>Login </h5> </button>
      </li>
    </ul>
  </div>
</nav>
    </div>
<div className='form1'>
<form onSubmit={haldlesubmit}>
  <div class="form-group">
    <h5 style={{color:'red' }}>{user.error}</h5>
    {user.success && <h5 style={{color:'green' }}>User Created Successfully</h5> }


    <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" required/>
  </div>
  <div class="form-group">
    <input type="Text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" required/>
  </div>
  <div class="form-group">
    <input type="Email" onBlur={handleChange} name="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
  </div>
  <div class="form-group">
    <input type="password" onBlur={handleChange}  name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <div class="form-group">
    <input type="password" onBlur={handleChange}  name="cpassword" class="form-control" id="exampleInputPassword1" placeholder=" Confrim Password" required/>
  </div>
  <p></p>
  <button type="submit" class="btn btn-primary">Create an account</button>

<p>
</p>
<p class="text">Already have an account ?  <a  href="/login" role="button">Login</a> </p>
<p></p>
<h6>Or</h6>
<br/>
<button onClick ={fblogin} type="button" class="b1 btn btn-outline-secondary"> <img src={fb} alt=""/> Continue With Facebook</button><br/>
<p></p>
<button onClick={googlesignin}  type="button" class="b1 btn btn-outline-secondary"> <img src={google} alt=""/> Continue With Google</button>

</form>
</div>



        </div>
    )
}

export default Createacc
