import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import {updateUser} from "../redux/apiRequests"
import "./Edit.css";

const EditPage = (props) => {
    const urlImg = [
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/p720x720/267979254_672733580555146_1128037538460636065_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dSKdjb2lQzAAX_8qmJJ&tn=zIL2LGyhRoe-p_S_&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-KIgKOc8yaacGDeIN5aHcVh_jkD0Ha6JqJBFoFPbogJw&oe=61E77249",
        "https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/267784333_672733617221809_4327061612588247178_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jg1SUS_VSqMAX816t9b&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT-iYc-HyKW--voKkIiYH8UJsMAykNE6ako6tvEPACYQ1w&oe=61E7B59F",
        "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/267906308_672733640555140_874109637666806173_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_sM8BuE5slYAX8hvY7t&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT9Wf59KlUgEEuQpMdEbhAyi61qsQck526Xyutk2yrkFgw&oe=61E6B31D",
        "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/267897590_672733590555145_3184702180060346531_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=kw8fd0T2eHoAX9ImNKG&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT8Yu00gc9fya5uGs5W8u_CpZDBKhCrzBAceWFTXMYG2FQ&oe=61E703C4",
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/267979254_672733580555146_1128037538460636065_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=dSKdjb2lQzAAX_8qmJJ&tn=zIL2LGyhRoe-p_S_&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT8fi6WApqJ_Nfhkvq1maaRSt1BYgn-WR6FEc2XVeurEDg&oe=61E873DE",
        "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/254911175_649994316162406_6326338375002058432_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=beEj1u-OX4QAX8C8KPi&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT-XmOgMkpwWesCtrBsd269vEacQrZ0RbhpkDnONtEPATw&oe=61E7B894",
        "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/255838151_649994279495743_6312386328783638475_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=VFMJIoMbpSwAX8huggp&tn=zIL2LGyhRoe-p_S_&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT8S2nTYDqLONJlbt-E6_t3EYAftc9MmdsPpR1zadYHisA&oe=61E7D5EA",
        "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/257700061_442717237204193_6102919423427634800_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hdguAIE5TlEAX8IscAv&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVKbMiip1jNJYl1YQlInbKyExN-LL9HjlPvo25GfLDTNDA&oe=62098513",
        "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.15752-9/245105495_236940811813850_5247556008360367587_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=EHQrKkknZ9YAX9sJ4WK&_nc_ht=scontent.fsgn5-4.fna&oh=03_AVI_YxlNIjVZGkoHNOCNhDwRzYT6yOlc7X9mIO8NV-7mBA&oe=620A34DD"
    ];

    const user = useSelector((sate)=> sate.user)

    const {setEdit} = props;
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [url, setUrl] = useState(user.url);
    const [theme, setTheme] = useState(user.themeColor);
    const handleSubmit =(e)=>{
        e.preventDefault();
        setEdit(false);
        const newUser = {
            name : name,
            age : age,
            about : about,
            url : url,
            themeColor : theme
        }
        updateUser(newUser, dispatch)
    }
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close">Save</button>
                    <div className="edit-profile">Edit profile</div>
                    <div className="input-container">
                        <Input  label="Dislay Name" data={user.name} setData={setName} />
                        <Input  label="Age" data={user.age} setData={setAge} />
                        <Input  clasStyle="input-about" inputType="textarea" label="About" data={user.about} setData={setAbout} />
                    <div className="input-image-container">
                        {urlImg.map((img)=>{
                            return ( 
                                <> 
                                    <img src={img} className="input-image" alt="day la hinh ny tui" onClick={(e)=>setUrl(e.target.src)}/>
                                </>
                            )
                        })}
                    </div>
                    <div className="theme-container">
                        <label >Theme</label>
                        <input type="color" value={user.themeColor} className="theme-color" onChange={(e)=>setTheme(e.target.value)}/>
                    </div>
                    </div>
                </section>
            </form>
        </>
     );
}
 
export default EditPage;