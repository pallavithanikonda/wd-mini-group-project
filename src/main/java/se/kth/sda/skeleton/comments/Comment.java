package se.kth.sda.skeleton.comments;

import se.kth.sda.skeleton.posts.Post;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @NotEmpty(message = "Comment should not be empty")
    private String body;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String section) {
        this.body = section;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
