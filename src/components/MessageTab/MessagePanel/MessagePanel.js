import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AddCirleIcon from "./Icon/AddCircleIcon";
import ArrowDownIcon from "./Icon/ArrowDownIcon";
import MessageComponent from "./MessageComponent/MessageComponent";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { AuthContext } from "../../Context/AuthContext";
import { ChatContext } from "../../Context/ChatContext";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";

export default function MessagePanel() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);

  const handleKey = (event) => {
    event.code === "Enter" && handleSearch();
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username.trim()),
      where("displayName", "<=", username + '\uf8ff'),
      orderBy("displayName")
    );

    try {
      console.log(username);
      const querySnapshot = await getDocs(q);
      const usersData = querySnapshot.docs.map((doc) => doc.data());
      setUsers([...usersData]);
    } catch (error) {
      console.log("Error search query: " + error);
    }
  };

  const handleComponentClick = async (user) => {
    setSelectedComponent(user.uid);

    dispatch({ type: "CHANGE_USER", payload: user });

    //check whether the group(chats in firebase) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
      }

      //create user chats
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    // reset after click component
    setUsers([]);
    setUsername("");
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log("chats of user: ");
  // console.log(chats);
  console.log(currentUser);
  return (
    <StyledMessagePanel>
      <Header>
        <Text>
          <Left>
            <Title>Messages</Title>
            <ArrowDownIcon></ArrowDownIcon>
          </Left>
          <Right>
            <Notify>12</Notify>
          </Right>
        </Text>
        <Icon>
          <AddCirleIcon active></AddCirleIcon>
        </Icon>
      </Header>

      <SearchSection>
        <SearchBox>
          <SearchButton onClick={handleSearch}>search</SearchButton>
          <SearchInput
            placeholder="Serch messages"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </SearchBox>
      </SearchSection>
      <MessageList>
        <Scrollbar>
          {users && users.length > 0 ? (
            users.map((user) => (
              <MessageComponent
                key={user.uid}
                imgSource={user.photoURL}
                fullName={user.displayName}
                time={"12m"}
                lastChat={""}
                label={[
                  ["Job", "orange"],
                  ["Learning", "green"],
                ]}
                isSelected={selectedComponent === user.uid}
                onClick={() => handleComponentClick(user)}
              />
            ))
          ) : (
            <>
              {chats &&
                Object.entries(chats)
                  ?.sort((a, b) => b[1].date - a[1].date)
                  .map((chat) => (
                    <MessageComponent
                      key={chat[0]}
                      imgSource={chat[1].userInfo.photoURL}
                      fullName={chat[1].userInfo.displayName}
                      time={"12m"}
                      lastChat={chat[1].lastMessage?.text}
                      label={[
                        ["Job", "orange"],
                        ["Learning", "green"],
                      ]}
                      isSelected={selectedComponent === chat[1].userInfo.uid}
                      onClick={() =>
                        handleComponentClick(chat[1].userInfo)
                      }
                    />
                  ))}
            </>
          )}
        </Scrollbar>
      </MessageList>
    </StyledMessagePanel>
  );
}

const StyledMessagePanel = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 80px;
  width: 330px;
  border-right: 2px solid #0000000d;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1.5px solid #0000000d;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.625rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.375rem;
`;

const Right = styled.div``;

const Title = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 19px;
  font-weight: 600;
  line-height: 150%;
  color: #000000;
`;

const Notify = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  font-family: Inter;
  line-height: 150%;
  color: #000000;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.125rem 0.5rem;
  gap: 0.625rem;
  background-color: #edf2f7;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.75rem 1.5rem;
  gap: 0.625rem;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 0.625rem 1.25rem;
  gap: 0.625rem;
  border-radius: 0.75rem;
  background-color: #f3f3f3;
  overflow: hidden;
`;

const SearchButton = styled.button`
  opacity: 0.4;
  text-align: center;
  font-size: 14px;
  color: #000000;
  border: none;
  padding: 0px 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  border-radius: 0.75rem;
  &:hover {
    cursor: pointer;
    background: #eee;
  }
  &:active {
    background: #fff;
  }  
`;

const SearchInput = styled.input`
  opacity: 0.4000000059604645;
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  line-height: 150%;
  width: 100%;
  margin-left: 65px;
  background: #f3f3f3;
  color: #000;
  border: none;
  outline: none;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  position: absolute;
  top: 150px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Scrollbar = styled(PerfectScrollbar)`
  right: 0;
  width: 100%;
  padding: 0rem 1rem;
  &:hover .ps__thumb-y {
    background-color: #615ef0;
    opacity: 1;
  }
  .ps__rail-y {
    border-radius: 20px;
  }
  .ps__thumb-y {
    width: 5px;
    background-color: #615ef0;
  }
  .ps__thumb-y:active {
    background-color: #615ef0;
  }
`;

const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
