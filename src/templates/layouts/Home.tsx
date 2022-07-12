import React, { useState,useEffect } from "react";
import useTitle from "../../Hooks/useTitle";


function Home() {

    const [title,setTitle] = useState('');
    const handleTitle = (e:any)=>{
        setTitle(e.target.value);    
    }
    
        
        
        useTitle('asdasda');
    return(
        <div className="home">
            <h1>Post</h1>
            {/* <ul>
              {isLoading ? (<div>Loanding....</div>) : (posts.map((post:Post)=><li key={post.id}>{post.title}</li>))}
            </ul> */}

            <input 
            value={title}
           onChange={e=>handleTitle(e)}
            />
        
        </div>
    )
}

export default Home;