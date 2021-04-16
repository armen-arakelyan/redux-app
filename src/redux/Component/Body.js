import React,{useEffect, useState} from 'react';
import Footer from './Footer';
import axios from 'axios'

const Body=()=>{
    const [data,setData]=useState([])
    const [loading,setLoader]=useState(true)
    const getData=async()=>{
        let users='';
            await axios('https://jsonplaceholder.typicode.com/posts')
              .then(finData=>users=finData)
              setData(users.data)
    }
         useEffect(()=>{
                if(data.length>0){
                    setLoader(false)
                }else{
                    getData()
                }
         },[data,loading])
        return(
            loading?<Footer />:
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
                    data.map((v,i)=>
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
export default Body;