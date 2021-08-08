import React, { useEffect, useState } from 'react';

const Form = ({ inputName, inputEmail, inputPost, setInputName, setEmail, setPost, posts, setPosts, setResult }) => { // we can pass the props in the {} so that we dont have to right the props
    const [searchTerm, setSearchTerm] = useState("");
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const name = posts.filter(post => post.name.includes(searchTerm))
        if (name) {
            setResult(name)
        }
        const email = posts.filter(post => post.email.includes(searchTerm))
        if (email) {
            setResult(email)
        }
        const post = posts.filter(post => post.post.includes(searchTerm))
        if (name.length === 0 && email.length === 0) {
            setResult(post)
        }
    }, [searchTerm, posts, setResult])

    const inputNameHandler = (e) => {
        setInputName(e.target.value)
    }

    const inputEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const inputPostHandler = (e) => {
        setPost(e.target.value)
    }

    const submitTextHandler = (e) => {
        e.preventDefault()
        setPosts([
            ...posts,
            {
                name: inputName, email: inputEmail, post: inputPost, id: Math.random() * 1000, reply: []
            }
        ])
        setInputName("");
        setEmail("");
        setPost("");
    }

    function onSearch(e) {
        e.preventDefault();
        setSearchTerm(e.target.value)
        setHide(true);
        if (e.target.value === "") {
            setHide(false)
        }
    }


    return (
        <div>
            <form style={hide ? { display: "none" } : { display: "flex" }}>
                <div>
                    <div>
                        <input value={inputName} onChange={inputNameHandler} placeholder="Enter Author Name" type="text" className="todo-input" /><br />
                        <input value={inputEmail} onChange={inputEmailHandler} placeholder="Enter Email" type="text" className="todo-input" /><br />
                        <textarea value={inputPost} onChange={inputPostHandler} placeholder="Write your post here" />
                    </div>

                    <button onClick={submitTextHandler} className="todo-button" type="submit" >
                        <i className="fas fa-plus-square"></i> POST
                    </button>
                </div>
            </form>
            <div className="search-bar">
                <input onChange={onSearch} placeholder="You can search here" />
            </div>
        </div>

    );
}

export default Form;