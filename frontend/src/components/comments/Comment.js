import React from "react";

function Comment({comment, onDeleteClick,onUpdateClick}) {

    const [body, setBody] = React.useState(comment.body);
    const [isUpdateClicked, setUpdateClicked] = React.useState(false);

    const updateClick = () => {
        onUpdateClick(body);
        if (isUpdateClicked) {
            setUpdateClicked(false);
        } else {
            setUpdateClicked(true);
        }
    };

    return (
        <div className="card mt-3">
            <div className="card-body">
                <h6>Comment</h6>
                <p className="commentBody">

                    {isUpdateClicked ?
                        <textarea className="form-control" id={comment.id} value={body}
                                  onChange={e => setBody(e.target.value)}/> :
                        body
                    }

                    <button className="deleteBtnComment" onClick={onDeleteClick}>Delete</button>
                    <button className="updateBtnComment"
                            onClick={updateClick}>{isUpdateClicked ? 'Submit' : 'Update'}</button>
                </p>

            </div>
        </div>
    );
}

export default Comment;
