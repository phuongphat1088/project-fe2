import React from 'react'
import styled from 'styled-components'

export default function SendIcon() {
  return (
    <StyledSendIcon type='button'>
      <svg width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.537 1.6799L19.2849 14.3883C-6.42832 22.9876 -6.42832 37.0093 19.2849 45.5663L30.6378 49.3364L34.4077 60.6892C42.9647 86.4025 57.0286 86.4025 65.5856 60.6892L78.3363 22.4793C84.0127 5.32297 74.6933 -4.03886 57.537 1.6799ZM58.8925 24.4702L42.7953 40.6524C42.1598 41.2878 41.355 41.5843 40.5501 41.5843C39.7452 41.5843 38.9404 41.2878 38.305 40.6524C37.0765 39.4239 37.0765 37.3905 38.305 36.1621L54.4022 19.9799C55.6307 18.7515 57.664 18.7515 58.8925 19.9799C60.121 21.2084 60.121 23.2418 58.8925 24.4702Z" fill="#615EF0" />
      </svg>
    </StyledSendIcon>
  )
}

const StyledSendIcon = styled.button`
  background: #fff;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

