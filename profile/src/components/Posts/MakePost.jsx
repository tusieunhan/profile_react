import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import { createPost } from "../redux/postSlice";
import "./Post.css";

const MakePost = (props) => {
    const {setOpenPost}= props;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const tags = ["None","NSFW","Mood","Quotes","Shitpost"];
    const [selected, setSelected]= useState(0);
    const dispatch = useDispatch();


    const handlePost =()=>{
        setOpenPost(false);
        const newPost ={
            title : title,
            desc : desc,
            tag : selected
        };
        dispatch(createPost(newPost));
    }
    return ( 
        <>
            <section className="makepost-container">
                <div className="makepost-navigation">
                    <p className="makepost-save" onClick={handlePost}>
                        Post
                    </p>
                </div>
                <Input data={title} inputType="textarea" setData={setTitle} label="Title" classStyle="makepost-title"/>
                <Input data={desc} inputType="textarea" setData={setDesc} label="Descriptions" classStyle="makepost-desc"/>
                <label>Tags</label>
                <div className="makepost-tags">
                    {tags.map((tag,index)=>{
                        return (
                            <button key={index} onClick={()=>setSelected(index)} className={`${selected === index ? `makepost-tags-selected` : `makepost-tags-${tag}`}`}  >{tag}</button>
                        )
                    })}
                </div>
            </section>
        </>
     );
}
 
export default MakePost;