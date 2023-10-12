import React from 'react'

export default function AddCirleIcon(props) {
  if (props.active) {
    return (
      <svg width="29" height="29" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 0C17.96 0 0 17.96 0 40C0 62.04 17.96 80 40 80C62.04 80 80 62.04 80 40C80 17.96 62.04 0 40 0ZM56 43H43V56C43 57.64 41.64 59 40 59C38.36 59 37 57.64 37 56V43H24C22.36 43 21 41.64 21 40C21 38.36 22.36 37 24 37H37V24C37 22.36 38.36 21 40 21C41.64 21 43 22.36 43 24V37H56C57.64 37 59 38.36 59 40C59 41.64 57.64 43 56 43Z" fill="#615EF0" />
      </svg>
    )
  } else {
    return (
      <svg width="29" height="29" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43 83C65 83 83 65 83 43C83 21 65 3 43 3C21 3 3 21 3 43C3 65 21 83 43 83Z" stroke="black" strokeWidth="5.33388" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 43H59" stroke="black" strokeWidth="5.33388" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M43 59V27" stroke="black" strokeWidth="5.33388" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
}
