import React, { useContext } from "react";
import styled from "styled-components";
import MoreCircleIcon from "./Icon/MoreCircleIcon";
import FileComponent from "./FileComponent/FileComponent";
import { ChatContext } from "../../Context/ChatContext";

export default function DirectoryPanel() {
  const { data } = useContext(ChatContext);
  // console.log(data);
  return (
    <StyledDirectoryPanel>
      <PanelHeader>
        <PanelTitle>Directory</PanelTitle>
        <Icon>
          <MoreCircleIcon></MoreCircleIcon>
        </Icon>
      </PanelHeader>
      <ContactInfoSection>
        <ContactAvatar imgSource={data.user.photoURL}></ContactAvatar>
        <ContactInfoContent>
          <ContactInfoName>{data.user.displayName}</ContactInfoName>
          <ContactInfoDescription>{data.user.email}</ContactInfoDescription>
        </ContactInfoContent>
      </ContactInfoSection>
      <FilesSection>
        <FilesSectionTitle>
          <FileSectionTitleText>Files</FileSectionTitleText>
          <FilesNumber>125</FilesNumber>
        </FilesSectionTitle>
        <FileList>
          <FileComponent
            fileName={"i9.pdf"}
            fileType={"PDF"}
            fileSize={"9mb"}
          ></FileComponent>
          <FileComponent
            fileName={"Screenshot-3817.png"}
            fileType={"PNG"}
            fileSize={"4mb"}
          ></FileComponent>
          <FileComponent
            fileName={"sharefile.docx"}
            fileType={"DOC"}
            fileSize={"555kb"}
          ></FileComponent>
          <FileComponent
            fileName={"Jerry-2020_I-9_Form.xxl"}
            fileType={"XXL"}
            fileSize={"24mb"}
          ></FileComponent>
        </FileList>
      </FilesSection>
    </StyledDirectoryPanel>
  );
}

const StyledDirectoryPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  border-left: 2px solid #0000000d;

  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1201px) {
    top: 0;
    bottom: 0;
    right: 0;
    width: 310px;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1.5px solid #0000000d;
  width: 100%;
  padding: 24px;
`;

const PanelTitle = styled.div`
  font-weight: 600;
  font-size: 19px;
`;

const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px 0px;
  gap: 8px;
  width: 100%;
  height: 210px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const ContactAvatar = styled.div`
  width: 95px;
  height: 95px;
  background-image: url(${(props) => props.imgSource});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;

const ContactInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContactInfoName = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 18px;
  line-height: 125%;
  color: #000000;
  font-weight: 600;
`;

const ContactInfoDescription = styled.div`
  text-align: center;
  vertical-align: top;
  font-size: 13px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4000000059604645);
`;

const FilesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1.5rem 1rem 0rem 1rem;
  gap: 0.5rem;
  width: 100%;
`;

const FilesSectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const FileSectionTitleText = styled.div`
  text-align: left;
  vertical-align: top;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  color: #000000;
`;

const FilesNumber = styled.div`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.125rem 0.5rem;
  gap: 0.625rem;
  background-color: #edf2f7;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  font-family: Inter;
  line-height: 150%;
  color: #000000;
`;

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Icon = styled.div`
  cursor: pointer;
`;
