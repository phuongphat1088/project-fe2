import React from "react";

export default function EmojoIcon(props) {
  if (props.clickedComponent) {
    return (
      <svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.1628 80H28.8372C8.63256 80 0 71.3674 0 51.1628V28.8372C0 8.63256 8.63256 0 28.8372 0H51.1628C71.3674 0 80 8.63256 80 28.8372V51.1628C80 71.3674 71.3674 80 51.1628 80ZM28.8372 5.5814C11.6837 5.5814 5.5814 11.6837 5.5814 28.8372V51.1628C5.5814 68.3163 11.6837 74.4186 28.8372 74.4186H51.1628C68.3163 74.4186 74.4186 68.3163 74.4186 51.1628V28.8372C74.4186 11.6837 68.3163 5.5814 51.1628 5.5814H28.8372Z" fill="#615EF0" />
        <path d="M53.0232 34.4186C48.4093 34.4186 44.6512 30.6605 44.6512 26.0465C44.6512 21.4326 48.4093 17.6744 53.0232 17.6744C57.6372 17.6744 61.3953 21.4326 61.3953 26.0465C61.3953 30.6605 57.6372 34.4186 53.0232 34.4186ZM53.0232 23.2558C51.4977 23.2558 50.2325 24.521 50.2325 26.0465C50.2325 27.5721 51.4977 28.8372 53.0232 28.8372C54.5488 28.8372 55.8139 27.5721 55.8139 26.0465C55.8139 24.521 54.5488 23.2558 53.0232 23.2558Z" fill="#615EF0" />
        <path d="M26.9767 34.4186C22.3628 34.4186 18.6046 30.6605 18.6046 26.0465C18.6046 21.4326 22.3628 17.6744 26.9767 17.6744C31.5907 17.6744 35.3488 21.4326 35.3488 26.0465C35.3488 30.6605 31.5907 34.4186 26.9767 34.4186ZM26.9767 23.2558C25.4512 23.2558 24.186 24.521 24.186 26.0465C24.186 27.5721 25.4512 28.8372 26.9767 28.8372C28.5023 28.8372 29.7674 27.5721 29.7674 26.0465C29.7674 24.521 28.5023 23.2558 26.9767 23.2558Z" fill="#615EF0" />
        <path d="M40 67.7212C29.2093 67.7212 20.4651 58.9398 20.4651 48.1863C20.4651 44.8002 23.2186 42.0468 26.6046 42.0468H53.3953C56.7814 42.0468 59.5349 44.8002 59.5349 48.1863C59.5349 58.9398 50.7907 67.7212 40 67.7212ZM26.6046 47.6281C26.3069 47.6281 26.0465 47.8886 26.0465 48.1863C26.0465 55.8886 32.2976 62.1398 40 62.1398C47.7023 62.1398 53.9535 55.8886 53.9535 48.1863C53.9535 47.8886 53.693 47.6281 53.3953 47.6281H26.6046Z" fill="#615EF0" />
      </svg>
    );
  } else if (props.hoveredComponent) {
    return (
      <svg width="24" height="24" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 84H56C76 84 84 76 84 56V32C84 12 76 4 56 4H32C12 4 4 12 4 32V56C4 76 12 84 32 84Z" stroke="#292D32" strokeWidth="6.07762" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 29C28 33 34.52 33 38.56 29" stroke="#292D32" strokeWidth="6.07762" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M49.4399 29C53.4399 33 59.9599 33 63.9999 29" stroke="#292D32" strokeWidth="6.07762" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29.6 48H58.4C60.4 48 62 49.6 62 51.6C62 61.56 53.96 69.6 44 69.6C34.04 69.6 26 61.56 26 51.6C26 49.6 27.6 48 29.6 48Z" stroke="#292D32" strokeWidth="6.07762" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  } else {
    return (
      <svg width="24" height="24" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 84H56C76 84 84 76 84 56V32C84 12 76 4 56 4H32C12 4 4 12 4 32V56C4 76 12 84 32 84Z" stroke="#292D32" strokeOpacity="0.6" strokeWidth="6.07762" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 31C28 27 34.52 27 38.56 31" stroke="#292D32" strokeOpacity="0.6" strokeWidth="6.07762" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M49.4399 31C53.4399 27 59.9599 27 63.9999 31" stroke="#292D32" strokeOpacity="0.6" strokeWidth="6.07762" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29.6 66.8002H58.4C60.4 66.8002 62 65.2002 62 63.2002C62 53.2402 53.96 45.2002 44 45.2002C34.04 45.2002 26 53.2402 26 63.2002C26 65.2002 27.6 66.8002 29.6 66.8002Z" stroke="#292D32" strokeOpacity="0.6" strokeWidth="6.07762" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
}
