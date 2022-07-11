import React, { useState } from "react";
import useTitle from "../../Hooks/useTitle";

interface Post {
    title: string,
    id:number
}

function Home() {

    const [title,setTitle] = useState('');
    // const handleTitle = (e)=>{
    //     setTitle(e.target.value);    
    // }
        useTitle(title);
    return(
        <div className="home">
            <h1>Post</h1>
            {/* <ul>
              {isLoading ? (<div>Loanding....</div>) : (posts.map((post:Post)=><li key={post.id}>{post.title}</li>))}
            </ul> */}

            <input 
            value={title}
    //        onChange={e=>handleTitle(e)}
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