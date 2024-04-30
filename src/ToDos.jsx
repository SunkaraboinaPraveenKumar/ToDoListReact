import React from 'react'

const ToDos = ({ setId,todos,deleteToDo }) => {
    return (
        <>
            <div className="container text-center">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        todos.map((d) => {
                            return (
                                <>
                                    <tbody key={d.id}>
                                        <tr>
                                            <td>{d.title}</td>
                                            <td>{d.description}</td>
                                            <td>
                                                <button 
                                                onClick={()=>setId(d.id)}
                                                className='btn btn-warning mx-2'>Edit</button>
                                                <button className='btn btn-danger'
                                                onClick={()=>deleteToDo(d.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default ToDos