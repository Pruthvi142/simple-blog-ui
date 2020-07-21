import React from 'react'
import axios from 'axios'
import { throwStatement } from '@babel/types'
class Postshow extends React.Component
{
    constructor()
    {
        super()
        this.state={
            user:{},
            post:{},
            cmts:[]
        }
    }

componentDidMount()
{
     const id =this.props.match.params.id
     //get the post title nd body 
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
      
        const post=response.data
        
       
        this.setState({post})
  
//get user by id

    // con
    const postid=post.userId
    console.log(postid)
    axios.get(`http://jsonplaceholder.typicode.com/users/${postid}`)
    .then((response)=>{
        const user=response.data
    
        this.setState({user})
    })
})

    
  
    
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response)=>{
       
        const cmts=response.data

        this.setState({cmts})
    })
    .catch((err)=>{
        console.log(err)
    })
}
render()
{
    const mystyle = {
        color: "red",
        backgroundColor: "pink",
        padding: "20px",
        fontFamily:  "Times New Roman",
    
      };
      
    return (
        <layout>

      
        <div>
          
        <h2 style={{fontFamily:"Times New Roman"}, {color:"red"}}>USERNAME:</h2>
        
        <h3> {this.state.user.name}</h3> 
      
        <h2 style={{fontFamily:"Times New Roman"}, {color:"red"}}>TITLE:</h2>
        <h3 style={{fontweight:" normal"}, {color:"black"}}> {this.state.post.title}</h3> 
      
        
        <h2 style={{fontFamily:"Times New Roman"}, {color:"red"}}>BODY</h2>
        <p>
        <h2  >{this.state.post.body}</h2> 
        </p>
       
        <h3 style={{fontFamily:"Times New Roman"}, {color:"red"}}>COMMENTS</h3>
      <h3 style={mystyle} > {
            this.state.cmts.map(cmt=>{
            return (<li>{cmt.body}</li>)
            })
        }</h3>
          
    
        </div>
        </layout>
    )
}
}
export default Postshow