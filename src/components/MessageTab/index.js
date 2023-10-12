import React, { useContext } from "react";
import styled from "styled-components";
import SideBar from "./SideBar/SideBar";
import MessagePanel from "./MessagePanel/MessagePanel";
import ChatPanel from "./ChatPanel/ChatPanel";
import DirectoryPanel from "./DirectoryPanel/DirectoryPanel";
import { ChatContext } from "../Context/ChatContext";

export default function MessageTab() {
  const { data } = useContext(ChatContext);

  return (
    <>
      <StyledMessageTab className="StyledMessageTab">
        <SideBar />
        <MessagePanel />
        {data && data.chatId && data.chatId !== "null" ? (
          <>
            <ChatPanel />
            <DirectoryPanel />
          </>
        ) : (
          <StartComponent>
            <div>Choose a message to start chatting</div>
            <div></div>
          </StartComponent>
        )}
      </StyledMessageTab>
    </>
  );
}

const StyledMessageTab = styled.div`
  position: fixed;
  inset: 0;
  font-weight: 500;
`;

const StartComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #f3f3f3;
  left: calc(80px + 330px);
  text-align: center;
  padding: 30px;
  border-top: 40px solid #fff;
  border-bottom: 40px solid #fff;
  color: #ccc;
  font-size: 20px;
  mix-blend-mode: darken;
  

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
    width: calc(100% - 80px - 330px);
  }

  @media (max-width: 320px) {
    left: 0;
    width: 100%;
  }
`;
