import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :"user",
    initialState: {
        name : "van tu ",
        age : 22,
        about : "I'm a web developer",
        url : "https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/267784333_672733617221809_4327061612588247178_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jg1SUS_VSqMAX816t9b&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT-iYc-HyKW--voKkIiYH8UJsMAykNE6ako6tvEPACYQ1w&oe=61E7B59F",
        themeColor : "#cccccc",
        loading : false,
        erorr : false
    },
    reducers:{
        updateStart: (state) =>{
            state.loading = true;
        },
        updateSuccsess: (state, action) =>{
            state.loading = false;
            state.erorr = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.url = action.payload.url;
            state.themeColor = action.payload.themeColor;
        },
        updateErorr: (state)=>{
            state.loading = false;
            state.erorr = true;
        }
    }
})

export const { updateErorr,updateStart,updateSuccsess } = userSlice.actions
export default userSlice.reducer;
