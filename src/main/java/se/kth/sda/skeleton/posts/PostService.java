package se.kth.sda.skeleton.posts;

import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class PostService {

    private PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Post getByID(Long id) {
        return postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
    }

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public Post update(Post post) {
        if (getByID(post.getId()) != null) {
            return postRepository.save(post);
        } else {
            return null;
        }
    }

    public void deleteById(Long id) {
        postRepository.deleteById(id);
    }
}
