import React,{Component} from 'react';
import Footer from './Footer'

export default class Body extends Component{
    state={
        data:[],
        loading:true
    }
    Update=()=>{
        if(this.state.data.length>0){
            this.setState({loading:false})
        }else{
        }
    }
         async componentDidMount(){
       let users='';
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(finData=>users=finData)
        this.setState({data:users})
        this.Update()
         }
     render(){
        return(
            this.state.loading?<Footer />:
                <table>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.data.map((v,i)=>
                        <tr key={i}>
                            <td>{v.userId}</td>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.body}</td>
                        </tr>
                        )
                }
                    </tbody>
                </table>
        )
    }
}