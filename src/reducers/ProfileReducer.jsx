export const profileReducer = (state, action) => {
    switch (action.type) {
      case 'ProfileIsFetching': {
        return {
          ...state,
          loading: true,
        };
      }
      case 'ProfileFetched': {
        return {
          ...state,
          author: action.payload,
          loading: false,
          error: null,
        };
      }
      case 'ProfileFetchError': {
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
       
      }

      case 'ProfilePicture':{
            
        return {
            ...state,
            author:{...state.author , avatar:action.payload},
            loading:false,
        }
      }
      default: {
        return state;
      }
    }
  };
  