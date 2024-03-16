import { useContext } from 'react';

import { ProfileContext } from '../providers/ProfileProvider';



export const useProfile = () => {
  
    return (useContext(ProfileContext))
};