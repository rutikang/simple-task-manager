import {useState} from 'react'
import axios from 'axios'
function Inputform(){

const [task, setTask] = useState('')
const [by, setBy] = useState('')

const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8081/create' , {task, by})
        .then((res)=>{
            console.log(res.data)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    
}


return(
    <>
    {/* <div  className="bg-white vh-100 "> */}
        <div className="w-50 p-3 bg-light rounded mt-4 ms-4 border border-info p-3">
        <h3> Tasks to Complete</h3>
        <form className="form-group" onSubmit={handleSubmit}>
            <label className="form-label p-2">Task</label>
            <input
            className="form-control"
            onChange={e=>setTask(e.target.value)}
            placeholder='Task to do'
            />
            <label className="form-label p-2">By</label>
            <input
            className="form-control"
            onChange={e=>setBy(e.target.value)}
            placeholder='By ...........'
            />
            <button className="btn btn-outline-success mt-3">Submit</button>
        </form>
        </div>
    {/* </div> */}
    
    </>
)
}

export default Inputform;
