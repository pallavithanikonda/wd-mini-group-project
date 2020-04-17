import React from "react";
import CommentList from "../comments/CommentList";

function PostCard({post, onDeleteClick}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h2> Status </h2>
                <p>
                     {post.body}
                    <button className="deleteBtnPost" onClick={onDeleteClick}>Delete</button>

                </p>
                <CommentList
                    postId = {post.id} />
            </div>
        </div>
    );
}

export default PostCard;