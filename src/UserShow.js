import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }

    }
    componentDidMount(){
        console.log(this.props)
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const user=response.data
        
            this.setState({user})
        })
        const pid=this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${pid}`)
        .then((response)=>{
           
            const posts=response.data
            console.log(posts)
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  
    render(){
        return(
            <div className="main"> 
                <h1>Information of user id-{this.props.match.params.id}</h1>
                <p>name-{this.state.user.name}</p>
                <h1> POST BY USER</h1>
                  {
                       <ul>
                       {
                           this.state.posts.map((ele)=>{
                               return <li key={ele.id}><Link to ={`/posts/${ele.id}`}>{ele.title}</Link></li>
                                    
                               
                           })
                       }
                  </ul>
                  }
            </div>
        )
    }
}
export default UserShow
