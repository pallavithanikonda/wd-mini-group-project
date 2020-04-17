package se.kth.sda.skeleton.comments;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("comments")
public class CommentController {

    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public Comment save(@RequestParam Long postId, @RequestBody Comment comment) {
        return commentService.save(postId, comment);
    }

    @GetMapping
    public List<Comment> findAllByPostId(@RequestParam Long postId) {
        return commentService.findAllByPostId(postId);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        commentService.deleteById(id);
    }

    @PutMapping
    public void update(@RequestParam Long postId, @RequestBody Comment comment) {
        commentService.update(postId, comment);
    }
}
