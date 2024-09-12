import { useEffect, useState } from "react";
import axios from "axios";

function Table(){

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/')
            .then((res)=>{setData(res.data)})
            .catch(err=>console.log(err))
    },[])

    const handleDelete = async (idtasks) =>{
            try{
                await axios.delete('http://localhost:8081/delete/'+idtasks)
                window.location.reload()
            }
            catch(err){
                console.log(err)
            }
    }
    return(
        <>
        <div className="bg-light mt-4 w-50 ms-4 rounded border border-success p-3">
            <h3>Tasks</h3>
            <table className="table">
                <thead>
                    <tr>
                    <th>Task</th>
                    <th>By</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((r, i)=>(
                            <tr key={i}>
                                <td>{r.Task}</td>
                                <td>{r.By}</td>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={e => handleDelete(r.idtasks)}>Done</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
        </>
    )
}

export default Table;