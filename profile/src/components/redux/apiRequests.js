import { updateErorr,updateStart,updateSuccsess} from "../redux/userSlice";
import axios from "axios";


export const updateUser = async (user,dispatch)=>{
    dispatch(updateStart());
    try {
        const res =  await axios.post("v1/update",user);
        dispatch(updateSuccsess(res.data));
    } catch (err) {
        dispatch(updateErorr());   
    }
}