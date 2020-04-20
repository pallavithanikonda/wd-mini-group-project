import React from "react";

function Comment({comment, onDeleteClick}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h6>Comment</h6>
                <p className="commentBody">
                    {comment.body}
                    <button className="deleteBtnComment" onClick={onDeleteClick}>Delete</button>
                </p>

            </div>
        </div>
    );
}

export default Comment;
