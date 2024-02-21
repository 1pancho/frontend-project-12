// import React, { useMemo, useState } from 'react';
// import AuthContext from './index';

// const AuthProvider = ({ children }) => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const logIn = () => setLoggedIn(true);

//   const logOut = () => {
//     localStorage.removeItem('userId');
//     setLoggedIn(false);
//   };

//   //Функция, которая устанавливает состояние для авторизации пользователя


//   const providedData = useMemo(
//     () => ({
//       loggedIn,
//       logIn,
//       logOut,
//     }),
//     [loggedIn, logIn, logOut],
//   );



//   return (
//     <AuthContext.Provider value={providedData}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'; 
import AuthContext from './index.js'; 

const AuthProvider = ({ children }) => {


  return (
    <Provider store={store}>
      <AuthContext.Provider value={store}>
        {children}
      </AuthContext.Provider>
    </Provider>
  );
};

export default AuthProvider;
