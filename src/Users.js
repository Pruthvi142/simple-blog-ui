import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class User extends React.Component 
{
    constructor()
    {
         console.log("constructor")
        super()
        this.state={
            users:[]
        }
    }

    componentDidMount()
    {
        
        
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    render()
    {
        console.log("render")
        return(
            <div className="main">
                <h1> LISTING USER--{this.state.users.length}</h1>
                <ul>
                     {
                         this.state.users.map((ele)=>{
                             return <li key={ele.id}><Link to ={`/users/${ele.id}`}>{ele.name}</Link></li>
                                  
                             
                         })
                     }
                </ul>
            </div>
        )
    }
}
export default User