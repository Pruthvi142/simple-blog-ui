import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Posts extends React.Component
{  
     constructor()
    {
         console.log("constructor")
        super()
        this.state={
            posts:[]
        }
    }

    componentDidMount()
    {
        
        
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
                <div className="main">
                    <h2>Listing of post- { this.state.posts.length}</h2>
                    <ul>
                        {
                            this.state.posts.map((post) =>{
                            return <li><Link to ={`/users/${post.userId}`}>{post.title}</Link></li>
                                                
                            })
                        }
                    </ul>
                </div>
        )
    }
}
export default Posts