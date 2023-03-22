import React, { useReducer, useState } from 'react'
import { useQuery } from 'react-query';
import addComment from '../../hook/addComment.reducer';
import apiComments from '../../hook/apiComments';

function Comment() {
    const {data} = useQuery("comments", () => apiComments("GET", "comments"))
    const [comment, dispatch] = useReducer(addComment, [])
    const [value, setValue] = useState("")

    // const initialState = {
    //     feedback: ''
    //   };

    function addcomment(e){
        e.preventDefault();
        const newValue = value

        dispatch({type : "newComment", data:newValue})
        setValue("")
    }


    return (        
    
    <div className='comments-container'>       
        <div>
            <form className='input-div' onSubmit={addcomment}>
            <input
                placeholder='Add comment...'
                type="text"
                value = {value} 
                onChange={e => setValue(e.target.value)}
            />
            </form>
            <p className='top-comments'>Top Comments</p>
            <div className='add-comment'>
                {/* <span>{feedback}</span> */}
            </div> 
        </div>
    {
    (data || []).map((item) => {
        if(item.id<4) return (
            <div className='comment-div' key={item.id}>
                <span>{item.user.username}</span>
                <p>{item.body}</p>
            </div>   
        ); else return ''
    })
    }
    </div>
    
  )
}

export default Comment