import { useSelector } from "react-redux";
import "./Post.css";


const Post = () => {


    const post = useSelector((state)=> state.posts.post);
    const tags = ["None","NSFW","Mood","Quotes","Shitpost"];
    return ( 
        <>
        <section className="post-container">
            {post.slice(1).map((post,index)=>{
                return <div key={index} className="posts">
                    <p className="posts-title">{post.title}</p>
                    <p className={`posts-tags-${tags[post.tag]} posts-tags`}  >{tags[post.tag]}</p>
                    <p className="post-description">{post.desc}</p>
                </div>
            })}
        </section>
        </>
     );
}
 
export default Post;