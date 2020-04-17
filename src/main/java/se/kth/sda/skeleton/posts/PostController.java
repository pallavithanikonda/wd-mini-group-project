package se.kth.sda.skeleton.posts;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("posts")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping()
    public List<Post> getAll() {
        return postService.getAll();
    }

    @GetMapping("/{id}")
    public Post getByID(@PathVariable Long id) {
        return postService.getByID(id);
    }

    @PostMapping()
    public Post save(@RequestBody Post post) {
        return postService.save(post);
    }

    @PutMapping
    public Post update(@RequestBody Post post) {
        return postService.update(post);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        postService.deleteById(id);
    }
}
