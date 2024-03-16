import axios from "axios";
import { useEffect, useState } from "react";


export const useGetAuthor = (id,state,dispatch) => {
  
  
 
  useEffect(() => {
    const fetchAuthorProfile = async (userId) => {
      try {
        dispatch({ type: "ProfileIsFetching" });
        const response = await axios.get(`http://localhost:3000/profile/${userId}`);
        if (response) {
          dispatch({ type: "ProfileFetched", payload: response.data });
        }
      } catch (err) {
        dispatch({ type: "ProfileFetchError", payload: "Failed to fetch author profile" });
        console.error("Error fetching author profile:", err);
      }
    };
    fetchAuthorProfile(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  // Make sure to handle the case when state.author is undefined
  const author = state?.author || {};
  
  console.log(author)
  return { author};
};