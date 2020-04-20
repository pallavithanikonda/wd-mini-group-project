import React from "react";
import CommentList from "../comments/CommentList";

function PostCard({post, onDeleteClick, onUpdateClick, onShowClick}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h2> Status </h2>
                <p>
                {post.body}
                     <div>
                        <textarea 
                            className="form-control"
                            id={post.id}
                            style={{display: 'none'}}
                             />
                             
                    </div>
                    <button className="deleteBtnPost" onClick={onDeleteClick}>Delete</button>
                    <button className="updateBtnPost" onClick={onUpdateClick}>Update</button>
                    <button className="showBtnPost" onClick={onShowClick}>Update?</button>
                </p>
                <CommentList
                    postId = {post.id} />
            </div>
        </div>
    );
}

export default PostCard;