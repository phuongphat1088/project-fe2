import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContext";
import { ChatContext } from "../../Context/ChatContext";

export default function MessageItem({ message }) {
  // console.log(message);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message]);

  return (
    <StyledMessageItem ref={ref} mine={currentUser.uid === message?.senderId}>
      <Avatar
        src={
          message.senderId === currentUser.uid
            ? currentUser.photoURL
            : data.user.photoURL
        }
        alt=""
      />
      <MessageContentList>
        <MessageContentItem mine={currentUser.uid === message.senderId}>
          {message.text}
        </MessageContentItem>
      </MessageContentList>
    </StyledMessageItem>
  );
}

const StyledMessageItem = styled.div`
  display: flex;
  flex-direction: ${({ mine }) => (mine ? "row-reverse" : "row")};
  align-items: center;
  padding: 2px 0;
  gap: 12px;
  width: 100%;
`;

const Avatar = styled.img`
  border-radius: 0.625rem;
  height: 40px;
  width: 40px;
`;

const MessageContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

const MessageContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  gap: 10px;
  background-color: ${({ mine }) => (mine ? "#615ef0" : "#f1f1f1")};
  color: ${({ mine }) => (mine ? "#fff" : "initial")};
  border-radius: 12px;
  line-height: 150%;
  font-size: 14px;
  font-weight: 400;
`;
