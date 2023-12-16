import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Logout = () => {
  const navigate = useNavigate();
  const { LogoutUser } = useAuth();

    useEffect(()=>{
      LogoutUser();
    },[LogoutUser]);

    return navigate("/login")
}

export default Logout
