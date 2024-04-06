export const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'BlogIsFetching': {
        return {
            ...state,
            loading: true,
        };
        }
        case 'BlogFetched': {
        return {
            ...state,
            blogs:[...state.blogs,...action.payload],
            loading: false,
            error: null,
        };
        }
        case 'BlogFetchError': {
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
        }
    
        case 'BlogComment':{
        return {
            ...state,
            blog:{...state.blogs,comments:[...state.blogs.comments,action.payload]},
            loading:false,
        }
        }

        case 'BlogLike':{
        return {
            ...state,
            blogs:{...state.blogs,likes:[...state.blogs.likes,action.payload]},
            loading:false,
        }
        }
        case 'BlogDislike':{
        return {
            ...state,
            blogs:{...state.blogs,likes:state.blogs.likes.filter(item=>item!==action.payload)},
            loading:false,
        }
        }
        case 'BlogFavorite':{
        return {
            ...state,
            blogs:{...state.blogs,favorites:[...state.blogs.favorites,action.payload]},
            loading:false,
        }
        }

        default: {
        return state;
        }
    }
}