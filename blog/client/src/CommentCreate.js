import react,{useState} from 'react';
import axios from 'axios';
export default({postId})=>{
 const [content,SetContent]=useState('');
 const OnSubmit=async(event)=>{
    event.preventDefault();
    await axios.post('http://localhost:4001/posts/${postId}/comments',{content});
    SetContent('');
 }
return <div >
    <form onSubmit={OnSubmit} >
        <div className="form-group">
            <label >new Comments</label>
            <input className='form-control' onChange={e=>SetContent(e.target.value)}/>
        </div>
        <button className='btn btn-primary'>Submit</button>
    </form>
</div> 
}; 