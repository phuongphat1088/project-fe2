import React from 'react'
import styled from 'styled-components'

export default function Label(props) {
  if (props.theme === 'orange') {
    return (
      <OrangeLabel>{props.content}</OrangeLabel>
    )
  } else if (props.theme === 'green') {
    return (
      <GreenLabel>{props.content}</GreenLabel>
    )
  } else if (props.theme === 'gray') {
    return (
      <GrayLabel>{props.content}</GrayLabel>
    )
  }
}

const OrangeLabel = styled.div`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.125rem 0.5rem;
  gap: 0.625rem;
  color: #dd6b20;
  background-color: #feebc8;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  line-height: 150%;
`

const GreenLabel = styled.div`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.125rem 0.5rem;
  gap: 0.625rem;
  color: #38a169;
  background-color: #c6f6d5;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  line-height: 150%;
`

const GrayLabel = styled.div`
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.125rem 0.5rem;
  gap: 0.625rem;
  color: #fbf9f9ff;
  border: 1px solid #cbd5e0;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  line-height: 150%;
`