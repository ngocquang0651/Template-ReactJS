import React, { useState } from "react";
import useRequest from "./useRequest";
import useTitle from "./useTitle";

function Home() {

    const [posts,isLoading]=useRequest("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const [title,setTitle] = useState('');
    const handleTitle = (e)=>{
        setTitle(e.target.value);    
    }
        useTitle(title);
    return(
        <div className="home">
            <h1>Post</h1>
            <ul>
                {isLoading ? (<div>Loanding....</div>) : (posts.map((post,index)=><li key={index}>{post.title}</li>))}
            </ul>

            <input 
            value={title}
            onChange={e=>handleTitle(e)}
            />
        
        </div>
    )
}

export default Home;

// interface Ilogger {
//     info:(msg:string)=>void;
//     error:(msg:string)=>void;
// }

// class ConsoleLog extends Ilogger
// {
//     info(msg:string){
//         console.log(msg)
//     }
// }