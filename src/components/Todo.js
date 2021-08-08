import React, { useState } from 'react';

const Todo = ({ name, email, post, onePost, posts, setPosts }) => {
    const [reply, setReply] = useState('');

    //events
    const deleteHandler = () => {
        setPosts(posts.filter(el => el.id !== onePost.id))
    }

    const postReply = (e) => {
        e.preventDefault();
        setPosts(posts.map((item) => {
            if (item.id === onePost.id) {
                return {
                    ...item, reply: [...item.reply, reply]
                }
            }
            return item;
        }))
        setReply("")
    }
    return (
        <div className="todo">
            <li>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                        <p className="card-text">{post}</p>
                    </div>
                </div>

                <div className="reply-box">
                    <ul>
                        {onePost.reply ? onePost.reply.map(reply => (<div>{reply}</div>)) : <div>No reply</div>}
                    </ul>
                </div>

                <form>
                    <input value={reply} onChange={event => { setReply(event.target.value) }} placeholder="Enter your reply" />
                    <button onClick={postReply} className="btn btn-primary">
                        <i className="fa fa-reply" aria-hidden="true"></i>
                    </button>
                </form>
            </li>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;