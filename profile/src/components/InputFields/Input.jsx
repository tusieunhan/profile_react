import "../Edit/Edit.css";
import "../Posts/Post.css";

const Input = (props) => {
    const {label, data, setData, inputStyle, inputType} = props;
    return ( 
        <>
            <label >{label}</label>
            {inputType === "textarea" ? (
                <textarea className={inputStyle} cols="30" rows="10" placeholder={data} onChange={(e)=>setData(e.target.value)}></textarea>
            ) : (
                <input type="text" placeholder={data} onChange={(e)=>setData(e.target.value)} />
            )}
        </>
     );
}
 
export default Input;