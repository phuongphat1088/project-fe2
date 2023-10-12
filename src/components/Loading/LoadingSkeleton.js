import React from "react";
import styled, { keyframes } from "styled-components";

export default function LoadingSkeleton() {
  return <StyledLoadingSkeleton></StyledLoadingSkeleton>;
}

const shine = keyframes`
  100% {
		background-position: right -100px top 0;
	}
`;

const StyledLoadingSkeleton = styled.div`
  width: 100px;
  height: 100px;
  background-color: #e2e5e7;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left -100px top 0;
  animation: ${shine} .5s ease infinite both;
`;
