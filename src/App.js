import React from 'react' 
import Home from './Home'
import User from  './Users'
import Posts from './Posts'
import UserShow from './UserShow'
import Postshow from './Postshow'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import './app.css'



function App () {
    return (
        

   <BrowserRouter>
   <div>
    <ul>
<div className="navbar">
    
    <Link to ='/'>Home</Link>
    <Link to ='/users'>Users</Link>
    <Link to ='/posts'>Posts</Link>

</div>
    
</ul>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/users" component={User } exact={true}/>
    <Route path="/users/:id" component={UserShow} exact={true}/>
    <Route path="/posts" component={Posts} exact={true}/>
    <Route path="/posts/:id" component={Postshow} exact={true}/>

    <div className="footer">
       All Rights reserved
   </div>   
</div>
   </BrowserRouter> 
 

       
           
       
    )
}

export default App






