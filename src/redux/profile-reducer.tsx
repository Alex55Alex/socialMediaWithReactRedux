const ADD_POST = "ADD-POST";
const ADD_POST_TEXT = "ADD-POST-TEXT";
const profileReducer: any = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST :
            let post: any = {message: state.postText, id: "3", likeCount: 8}
            state.postData.push(post);
            state.postText = '';
            return state;
        case ADD_POST_TEXT :
            state.postText = action.postText;
            return state;
        default :
            return state;

    }
}
export const addPostActionCreator: any = () => ({type: ADD_POST});
export const addPostTextActionCreator: any = (text:string) => ({type: ADD_POST_TEXT, postText: text});
export default profileReducer;