import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks";
import { useDispatch } from "react-redux";
import routes from "../routes";
import axios from "axios";
import { fetchChannelsSuccess } from "../store/slices/channelsSlice";

const AuthButton = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <Button onClick={auth.logOut}>Log out</Button>
  ) : (
    <Button as={Link} to="/login" state={{ from: location }}>
      Log in
    </Button>
  );
};

const ChatPage = () => {
  // const [data, setData] = useState(null);
  const userIdString = localStorage.getItem("userId");
  const userId = JSON.parse(userIdString);
  const { token } = userId;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(routes.usersPath(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(fetchChannelsSuccess(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <AuthButton />
    </div>
  );
};

export default ChatPage;
