import React from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import CommentsApi from "../../api/CommentsApi";

class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments : []
        };
    }

    async createComment(commentData) {
        try {
            const response = await CommentsApi.createComment(commentData, this.props.postId);
            const comment = response.data;
            const newComments = this.state.comments.concat(comment);

            this.setState({
                comments: newComments,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async deleteComment(comment) {
        try {
            await CommentsApi.deleteComment(comment.id);
            const newComments = this.state.comments.filter(p => p.id !== comment.id);
            this.setState({
                comments: newComments,
            });
        } catch (e) {
            console.error(e);
        }
    }


    componentDidMount() {
        CommentsApi.getCommentByPostId(this.props.postId)
            .then(({data}) => this.setState({comments: data}))
            .catch(err => console.error(err));
    }

    render() {
        const comments = this.state.comments;

        return (
            <div>
                <CommentForm onSubmit={(commentData) => this.createComment(commentData)}/>

                {comments.map(comment =>
                    <Comment key={comment.id} comment={comment} onDeleteClick={() => this.deleteComment(comment)}/>
                )}
            </div>
        );
    }
}

export default CommentList;