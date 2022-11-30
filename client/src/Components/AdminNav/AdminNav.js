import React from 'react'
import {useNavigate,Link} from 'react-router-dom'


function AdminNav() {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        localStorage.removeItem('userEmail')
        navigate('/admin')
    }
  return (
    <div>
         <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
  <h2 style={{color:"green"}}>GetZone</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  style={{color:"green"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"   style={{color:"green"}}>UserInfo</Link>
        </li>
       
       
      </ul>
      
        
        <button className="btn btn-success" type="submit" onClick={logout}>Logout</button>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default AdminNav