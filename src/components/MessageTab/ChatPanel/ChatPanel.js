// import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CallIcon from "./Icon/CallIcon";
import PaperClipIcon from "./Icon/PaperClipIcon";
import SendIcon from "./Icon/SendIcon";
import EmojoIcon from "./Icon/EmojiIcon";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ChatContext } from "../../Context/ChatContext";
import { useContext, useEffect, useState } from "react";
import {
  Timestamp,
  arrayUnion,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { v4 as uuid } from "uuid";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import MessageItem from "./MessageItem";

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  console.log(data);
  
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  const handleSend = async () => {
    const chatInput = document.querySelector('#chat-input');
    if (img) {
      const storage = getStorage();
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      if (text.trim() !== "") { //check empty
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
        setText("");
      }
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    chatInput.focus();
    setImg(null);
  };

  return (
    <StyledChatPanel>
      <PanelHeader>
        <UserContent>
          <Avatar src={data.user.photoURL} />
          <UserInfo>
            <ReceiverName>{data.user.displayName}</ReceiverName>
            <Online>
              <OnlineDot />
              <OnlineState>Online</OnlineState>
            </Online>
          </UserInfo>
        </UserContent>
        <CallButton>
          <CallIcon></CallIcon>
          <Call>Call</Call>
        </CallButton>
      </PanelHeader>
      <MessageList>
        <Scrollbar>
          {messages &&
            messages.map((m) => <MessageItem key={m.id} message={m} />)}
        </Scrollbar>
      </MessageList>
      <MessageBox>
        <IconFile>
          <PaperClipIcon>
          </PaperClipIcon>
        </IconFile>
        <MessageForm >
          <MessageInput
            onChange={(e) => setText(e.target.value)}
            name={"chat-input"}
            id={"chat-input"}
            placeholder="Type a message"
            value={text}
          />
          <MessageButton>
            <Icon>
              <EmojoIcon></EmojoIcon>
            </Icon>
            <Icon onClick={handleSend}>
              <SendIcon></SendIcon>
            </Icon>
          </MessageButton>
        </MessageForm>
      </MessageBox>
    </StyledChatPanel>
  );
}

const StyledChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(80px + 330px);

  @media (max-width: 1200px) {
    width: calc(100% - 80px - 330px);
  }

  @media (min-width: 769px) {
    width: calc(100% - 80px - 330px);
  }

  @media (max-width: 768px) {
    left: calc(80px);
    width: calc(100% - 80px);
  }

  @media (min-width: 1201px) {
    width: calc(100% - 80px - 330px - 310px);
  }

  @media (max-width: 320px) {
    left: 0;
    width: 100%;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.3rem;
  width: 100%;
  border-bottom: 1.5px solid #0000000d;
`;

const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
`;

const Avatar = styled.img`
  border-radius: 0.625rem;
  height: 40px;
  width: 40px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ReceiverName = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 19px;
  font-weight: 600;
  line-height: 125%;
  color: #000000;
`;

const Online = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const OnlineDot = styled.div`
  height: 10px;
  width: 10px;
  background-color: #68d391;
  border-radius: 50%;
`;

const OnlineState = styled.div`
  opacity: 0.6000000238418579;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  line-height: 150%;
  color: #000000;
`;

const CallButton = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 1rem;
  gap: 0.5rem;
  background-color: rgba(97, 94, 240, 0.10000000149011612);
  cursor: pointer;
`;

const Call = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 15px;
  line-height: 125%;
  color: #615ef0;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  flex: 0vmax;
  position: absolute;
  top: 77px;
  bottom: 77px;
`;

const Scrollbar = styled(PerfectScrollbar)`
  right: 0;
  width: 100%;
  padding: 1.5rem;
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


const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
  background-color: #fff;
  width: 100%;
`;

const MessageForm = styled.form`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.1rem;
  background-color: #ffffff;
  border: 0.125rem solid #e2e8f0;
  width: 100%;
`;

const MessageInput = styled.textarea`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 14px;
  width: 85%;
  height: 15px;
  line-height: 1;
  color: #000;
  border: none;
  outline: none;
  resize: none;
`;

const MessageButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const IconFile = styled.label`
  cursor: pointer;
`
