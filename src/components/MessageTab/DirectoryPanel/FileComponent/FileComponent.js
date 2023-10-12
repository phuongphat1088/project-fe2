import React from "react";
import styled from "styled-components";
import ClipboardTextIcon from "../Icon/ClipboardTextIcon";
import PaperSquareIcon from "../Icon/PaperSquareIcon";
import GalleryIcon from "../Icon/GalleryIcon";
import DocumentTextIcon from "../Icon/DocumentTextIcon";
import DocumentCodeIcon from "../Icon/DocumentCodeIcon";

export default function FileComponent(props) {
  return (
    <StyledFileComponent>
      <Left>
        {props.fileType === 'PDF' ? (
          <FileIcon background={'#FFF5F5'}>
            <ClipboardTextIcon />
          </FileIcon>
        ) : props.fileType === 'PNG' || props.fileType === 'JPG' || props.fileType === 'JPGE' || props.fileType === 'GIF' ? (
          <FileIcon background={'#F0FFF4'}>
            <GalleryIcon />
          </FileIcon>
        ) : props.fileType === 'DOC' || props.fileType === 'DOCX' ? (
          <FileIcon background={'#EBF8FF'}>
            <DocumentTextIcon />
          </FileIcon>
        ) : (
          <FileIcon background={'#FAF5FF'}>
            <DocumentCodeIcon />
          </FileIcon>
        )}
        <FileContent>
          <FileName>{props.fileName}</FileName>
          <MetaDetails>
            <FileType>{props.fileType}</FileType>
            <FileSize>{props.fileSize}</FileSize>
          </MetaDetails>
        </FileContent>
      </Left>
      <PaperSquareIcon></PaperSquareIcon>
    </StyledFileComponent>
  );
}

const StyledFileComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  gap: 1rem;
  width: 100%;
`

const Left = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const FileIcon = styled.div`
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.background};
  width: 48px;
  height: 48px;
  margin-right: 15px;
`

const FileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`

const FileName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MetaDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.625rem;
`

const FileType = styled.div`
  text-align: left;
  vertical-align: top;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4000000059604645);
  font-size: 12px;
  font-weight: 600;
`

const FileSize = styled.div`
  text-align: left;
  vertical-align: top;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.4000000059604645);
  font-size: 12px;
  font-weight: 600;
`