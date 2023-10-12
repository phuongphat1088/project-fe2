import React, { useContext, useState } from "react";
import styled from "styled-components";
import HomeIcon from "./Icon/HomeIcon";
import ChatIcon from "./Icon/ChatIcon";
import ChartIcon from "./Icon/ChartIcon";
import SearchIcon from "./Icon/SearchIcon";
import CalendarIcon from "./Icon/CalendarIcon";
import SettingIcon from "./Icon/SettingIcon";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { ChatContext } from "../../Context/ChatContext";

export default function SideBar() {
  const { dispatch } = useContext(ChatContext);

  const [hoveredComponent, setHoveredComponent] = useState(null);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const [selectedOneComponent, setSelectedOneComponent] = useState(null);

  const handleComponentClick = (componentId) => {
    if (selectedComponent !== componentId) {
      setSelectedComponent(componentId); // Chọn component mới
    }
  };

  const handleOneComponentClick = (componentId) => {
    if (selectedOneComponent === componentId) {
      setSelectedOneComponent(null); // Bỏ chọn component đã chọn
    } else {
      setSelectedOneComponent(componentId); // Chọn component mới
    }
    
    dispatch({ type: "CLEAR_USER", payload: null });

    signOut(auth);
  };

  const { currentUser } = useContext(AuthContext);
  return (
    <StyledSideBar>
      <Top>
        <Logo backgroundValue={currentUser.photoURL}></Logo>
        <Navbar>
          <Icon
            onMouseEnter={() => setHoveredComponent(1)}
            onMouseLeave={() => setHoveredComponent(null)}
            onClick={() => handleComponentClick(1)}
          >
            <HomeIcon
              hoveredComponent={hoveredComponent === 1 ? true : false}
              selectedComponent={selectedComponent === 1}
            ></HomeIcon>
          </Icon>
          <Icon
            onMouseEnter={() => setHoveredComponent(2)}
            onMouseLeave={() => setHoveredComponent(null)}
            onClick={() => handleComponentClick(2)}
          >
            <ChatIcon
              hoveredComponent={hoveredComponent === 2 ? true : false}
              selectedComponent={selectedComponent === 2}
            ></ChatIcon>
          </Icon>
          <Icon
            onMouseEnter={() => setHoveredComponent(3)}
            onMouseLeave={() => setHoveredComponent(null)}
            onClick={() => handleComponentClick(3)}
          >
            <ChartIcon
              hoveredComponent={hoveredComponent === 3 ? true : false}
              selectedComponent={selectedComponent === 3}
            ></ChartIcon>
          </Icon>
          <Icon
            onMouseEnter={() => setHoveredComponent(4)}
            onMouseLeave={() => setHoveredComponent(null)}
            onClick={() => handleComponentClick(4)}
          >
            <SearchIcon
              hoveredComponent={hoveredComponent === 4 ? true : false}
              selectedComponent={selectedComponent === 4}
            ></SearchIcon>
          </Icon>
          <Icon
            onMouseEnter={() => setHoveredComponent(5)}
            onMouseLeave={() => setHoveredComponent(null)}
            onClick={() => handleComponentClick(5)}
          >
            <CalendarIcon
              hoveredComponent={hoveredComponent === 5 ? true : false}
              selectedComponent={selectedComponent === 5}
            ></CalendarIcon>
          </Icon>
        </Navbar>
      </Top>
      <Bottom>
        <Icon
          onMouseEnter={() => setHoveredComponent(6)}
          onMouseLeave={() => setHoveredComponent(null)}
          onClick={() => handleOneComponentClick(6)}
        >
          <SettingIcon
            hoveredComponent={hoveredComponent === 6 ? true : false}
            selectedComponent={selectedOneComponent === 6}
          ></SettingIcon>
        </Icon>
      </Bottom>
    </StyledSideBar>
  );
}

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 80px;
  padding: 1rem 1rem 1.5rem 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.08);

  @media (max-width: 320px) {
    display: none;
  }

  @media (min-width: 321px) {
    display: flex;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
const Logo = styled.div`
  border-radius: 10px;
  height: 50px;
  width: 50px;
  text-align: center;
  font-size: 20px;
  font-family: Asap;
  font-weight: bold;
  line-height: 48px;
  color: #ffffff;
  background-image: url(${props => props.backgroundValue});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const Icon = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    cursor: pointer;
  }
`;
