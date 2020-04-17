import Api from "./Api";

class CommentsApi {
    getAllComments() {
        return Api.get('/comments');
    }

    getCommentByPostId(postId) {
        return Api.get('/comments?postId='+ postId);
    }

    createComment(comment, postId) {
        return Api.post('/comments?postId=' + postId, comment);
    }

    updateComment(comment) {
        return Api.put('/comments', comment);
    }

    deleteComment(id) {
        return Api.delete('/comments/'+id);
    }
}

export default new CommentsApi();