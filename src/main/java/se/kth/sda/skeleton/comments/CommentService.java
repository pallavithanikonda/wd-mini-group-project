package se.kth.sda.skeleton.comments;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.posts.PostRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    private CommentRepository commentRepository;
    private PostRepository postRepository;

    public CommentService(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    public Comment save(Long postId, Comment comment) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        if (optionalPost.isEmpty()) {
            throw new ResourceNotFoundException("Post with Id" + postId + "not found");
        } else {
            Post post = optionalPost.get();
            post.addComment(comment);
            return commentRepository.save(comment);
        }
    }

    @Transactional
    public Comment update(Long postId, Comment comment) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post post = optionalPost.get();
        Optional<Comment> optionalComment = post.getComments().stream().filter(val -> val.getId() == comment.getId()).findFirst();

        if (optionalComment.isEmpty()) {
            throw new ResourceNotFoundException("Comment with id" + comment.getId() + "not found");
        }
        optionalComment.get().setBody(comment.getBody());
        return commentRepository.save(optionalComment.get());
    }

    public void deleteById(Long commentId) {
        commentRepository.deleteById(commentId);
    }

    @Transactional
    public List<Comment> findAllByPostId(Long postId) {
        return commentRepository.findAllByPostId(postId);
    }
}
