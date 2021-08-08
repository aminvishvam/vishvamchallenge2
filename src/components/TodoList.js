import React from 'react';
import Todo from './Todo'
const TodoList = ({ posts, setPosts }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {posts.map(post => (
                    <Todo key={post.id} name={post.name} email={post.email} post={post.post} completed={post.completed} setPosts={setPosts} posts={posts} onePost={post} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList