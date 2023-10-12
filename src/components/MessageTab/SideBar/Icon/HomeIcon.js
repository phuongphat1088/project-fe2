import React from 'react'

export default function HomeIcon(props) {
  if (props.hoveredComponent || props.selectedComponent) {
    return (
      <svg width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.1279 19.2517L49.1108 3.14782C42.8371 -1.24779 33.2067 -1.00803 27.1729 3.6673L7.15286 19.2917C3.15685 22.4086 0 28.8022 0 33.837V61.4094C0 71.5993 8.27174 79.911 18.4616 79.911H61.5384C71.7283 79.911 80 71.6392 80 61.4494V34.3565C80 28.962 76.5235 22.3287 72.1279 19.2517ZM42.997 63.9269C42.997 65.5653 41.6383 66.9239 39.9999 66.9239C38.3616 66.9239 37.0029 65.5653 37.0029 63.9269V51.9389C37.0029 50.3005 38.3616 48.9419 39.9999 48.9419C41.6383 48.9419 42.997 50.3005 42.997 51.9389V63.9269Z" fill="#615EF0" />
      </svg>
    )
  } else {
    return (
      <svg width="22" height="22" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.5442 79.9128H18.4558C8.26047 79.9128 0 71.6151 0 61.4198V33.8477C0 28.7871 3.12558 22.4243 7.14419 19.2987L27.2 3.67082C33.2279 -1.01754 42.8651 -1.24079 49.1163 3.14989L72.1116 19.2615C76.5395 22.3499 80 28.9732 80 34.3686V61.457C80 71.6151 71.7395 79.9128 61.5442 79.9128ZM30.6233 8.06152L10.5674 23.6894C7.92558 25.7731 5.5814 30.4987 5.5814 33.8477V61.4198C5.5814 68.5268 11.3488 74.3314 18.4558 74.3314H61.5442C68.6512 74.3314 74.4186 68.564 74.4186 61.457V34.3686C74.4186 30.7964 71.8512 25.8476 68.9116 23.8383L45.9163 7.72664C41.6744 4.74989 34.6791 4.89873 30.6233 8.06152Z" fill="black" />
        <path d="M40 65.0291C38.4745 65.0291 37.2094 63.764 37.2094 62.2384V51.0756C37.2094 49.55 38.4745 48.2849 40 48.2849C41.5256 48.2849 42.7907 49.55 42.7907 51.0756V62.2384C42.7907 63.764 41.5256 65.0291 40 65.0291Z" fill="black" />
      </svg>
    )
  }
}

