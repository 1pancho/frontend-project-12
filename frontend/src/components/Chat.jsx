import React from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../hooks';


const AuthButton = () => {
    const auth = useAuth();
    const location = useLocation();
  
    return (
      auth.loggedIn
        ? <Button onClick={auth.logOut}>Log out</Button>
        : <Button as={Link} to="/login" state={{ from: location }}>Log in</Button>
    );
  };

const ChatPage = () => {


    return (
        <div>

            <h1>
                Chat
            </h1>
            <AuthButton />
        </div>
    );
};

export default ChatPage;