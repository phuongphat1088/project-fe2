import React from "react";
import styled from "styled-components";
import Label from "./Label/Label";

export default function MessageComponent(props) {
  return (
    <StyledMessageComponent
      isSelected={props.isSelected}
      onClick={props.onClick}
    >
      <Avatar src={props.imgSource} />
      <Content>
        <MessageInfo>
          <Top>
            <FullName>{props.fullName}</FullName>
            <Time>{props.time}</Time>
          </Top>
          <LastChat>{props.lastChat}</LastChat>
        </MessageInfo>
        <LabelList>
          <Label content={props.label[0][0]} theme={props.label[0][1]}></Label>
          <Label content={props.label[1][0]} theme={props.label[1][1]}></Label>
        </LabelList>
      </Content>
    </StyledMessageComponent>
  );
}

const StyledMessageComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem;
  gap: 1rem;
  width: 100%;
  border-radius: 12px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#f2f2f2f2" : "transparent"};
  &:hover {
    background-color: #615ef00f;
    cursor: pointer;
  }
  &:active {
    background-color: #f2f2f2f2;
  }
`;

const Avatar = styled.img`
  border-radius: 0.75rem;
  height: 48px;
  width: 48px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  gap: 0.5rem;
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const FullName = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  line-height: 150%;
  color: #000000;
`;

const Time = styled.div`
  opacity: 0.30000001192092896;
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  line-height: 150%;
  color: #000000;
`;

const LastChat = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4000000059604645);
`;

const LabelList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`;
