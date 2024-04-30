import React, { useState, useEffect } from 'react'

const Form = ({ id, setId, todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(title,description);
        if (id) {
            updateById(id);
        }
        else {
            const obj = {
                id: Math.random(),
                title,
                description,
            }
            setTodos([...todos, obj]);
        }
        setId("");
        setTitle("");
        setDescription("");
    }
    useEffect(() => {
        if (id) {
            const updatedData = todos.filter((d) => d.id === id)
            //console.log(updatedData[0]);
            setTitle(updatedData[0].title);
            setDescription(updatedData[0].description);
        }
    }, [id])
    const updateById = (id) => {
        const obj = {
            title,
            description,
        }
        setTodos((prevData) =>
            prevData.map((todo) => todo.id === id ? { ...todo, ...obj } : todo)
        )
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container my-5  text-center" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <input
                        value={title}
                        placeholder='Title'
                        type="text" className='mx-2'
                        onChange={(e) => setTitle(e.target.value)} />
                    <input
                        value={description}
                        placeholder='Description'
                        type="text" className='mx-2'
                        onChange={(e) => setDescription(e.target.value)} />
                        {
                            id&&<button className='btn btn-warning' >Edit</button>
                        }
                        {
                            !id&&<button className='btn btn-warning' >Add</button>
                        }
                </div>
            </form>
        </>
    )
}

export default Form