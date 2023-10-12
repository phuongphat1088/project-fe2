import React from 'react'

export default function CalendarIcon(props) {
  if (props.hoveredComponent || props.selectedComponent) {
    return (
      <svg width="22" height="22" viewBox="0 0 78 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.5842 9.79672V3.18075C59.5842 1.44194 58.1108 0 56.3342 0C54.5575 0 53.0842 1.44194 53.0842 3.18075V9.54226H24.9176V3.18075C24.9176 1.44194 23.4443 0 21.6676 0C19.891 0 18.4176 1.44194 18.4176 3.18075V9.79672C6.71764 10.857 1.04097 17.685 0.174306 27.821C0.0876394 29.0509 1.12764 30.0687 2.34097 30.0687H75.6608C76.9175 30.0687 77.9575 29.0085 77.8275 27.821C76.9608 17.685 71.2842 10.857 59.5842 9.79672Z" fill="#615EF0" />
        <path d="M73.6667 36.4296H4.33333C1.95 36.4296 0 38.3378 0 40.6704V66.795C0 79.518 6.5 88 21.6667 88H56.3333C71.5 88 78 79.518 78 66.795V40.6704C78 38.3378 76.05 36.4296 73.6667 36.4296ZM26.91 71.9266C26.4767 72.3083 26 72.6051 25.48 72.8172C24.96 73.0292 24.3967 73.1565 23.8333 73.1565C23.27 73.1565 22.7067 73.0292 22.1867 72.8172C21.6667 72.6051 21.19 72.3083 20.7567 71.9266C19.9767 71.1208 19.5 70.0181 19.5 68.9155C19.5 67.8128 19.9767 66.7102 20.7567 65.9044C21.19 65.5227 21.6667 65.2258 22.1867 65.0137C23.2267 64.5896 24.44 64.5896 25.48 65.0137C26 65.2258 26.4767 65.5227 26.91 65.9044C27.69 66.7102 28.1667 67.8128 28.1667 68.9155C28.1667 70.0181 27.69 71.1208 26.91 71.9266ZM27.82 55.6835C27.6033 56.1925 27.3 56.659 26.91 57.0831C26.4767 57.4648 26 57.7616 25.48 57.9737C24.96 58.1857 24.3967 58.313 23.8333 58.313C23.27 58.313 22.7067 58.1857 22.1867 57.9737C21.6667 57.7616 21.19 57.4648 20.7567 57.0831C20.3667 56.659 20.0633 56.1925 19.8467 55.6835C19.63 55.1746 19.5 54.6233 19.5 54.072C19.5 53.5206 19.63 52.9693 19.8467 52.4604C20.0633 51.9515 20.3667 51.4849 20.7567 51.0608C21.19 50.6792 21.6667 50.3823 22.1867 50.1702C23.2267 49.7461 24.44 49.7461 25.48 50.1702C26 50.3823 26.4767 50.6792 26.91 51.0608C27.3 51.4849 27.6033 51.9515 27.82 52.4604C28.0367 52.9693 28.1667 53.5206 28.1667 54.072C28.1667 54.6233 28.0367 55.1746 27.82 55.6835ZM42.0767 57.0831C41.6433 57.4648 41.1667 57.7616 40.6467 57.9737C40.1267 58.1857 39.5633 58.313 39 58.313C38.4367 58.313 37.8733 58.1857 37.3533 57.9737C36.8333 57.7616 36.3567 57.4648 35.9233 57.0831C35.1433 56.2773 34.6667 55.1746 34.6667 54.072C34.6667 52.9693 35.1433 51.8666 35.9233 51.0608C36.3567 50.6792 36.8333 50.3823 37.3533 50.1702C38.3933 49.7037 39.6067 49.7037 40.6467 50.1702C41.1667 50.3823 41.6433 50.6792 42.0767 51.0608C42.8567 51.8666 43.3333 52.9693 43.3333 54.072C43.3333 55.1746 42.8567 56.2773 42.0767 57.0831Z" fill="#615EF0" />
      </svg>
    )
  } else {
    return (
      <svg width="22" height="22" viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5898 18.4615C21.9078 18.4615 20.5129 17.0667 20.5129 15.3846V3.07692C20.5129 1.39487 21.9078 0 23.5898 0C25.2719 0 26.6667 1.39487 26.6667 3.07692V15.3846C26.6667 17.0667 25.2719 18.4615 23.5898 18.4615Z" fill="black" />
        <path d="M56.4102 18.4615C54.7282 18.4615 53.3333 17.0667 53.3333 15.3846V3.07692C53.3333 1.39487 54.7282 0 56.4102 0C58.0923 0 59.4872 1.39487 59.4872 3.07692V15.3846C59.4872 17.0667 58.0923 18.4615 56.4102 18.4615Z" fill="black" />
        <path d="M74.8718 35.2404H5.12819C3.44614 35.2404 2.05127 33.8455 2.05127 32.1635C2.05127 30.4814 3.44614 29.0865 5.12819 29.0865H74.8718C76.5538 29.0865 77.9487 30.4814 77.9487 32.1635C77.9487 33.8455 76.5538 35.2404 74.8718 35.2404Z" fill="black" />
        <path d="M56.4103 88.2051H23.5897C8.61538 88.2051 0 79.5897 0 64.6154V29.7436C0 14.7692 8.61538 6.15385 23.5897 6.15385H56.4103C71.3846 6.15385 80 14.7692 80 29.7436V64.6154C80 79.5897 71.3846 88.2051 56.4103 88.2051ZM23.5897 12.3077C11.8564 12.3077 6.15385 18.0103 6.15385 29.7436V64.6154C6.15385 76.3487 11.8564 82.0513 23.5897 82.0513H56.4103C68.1436 82.0513 73.8462 76.3487 73.8462 64.6154V29.7436C73.8462 18.0103 68.1436 12.3077 56.4103 12.3077H23.5897Z" fill="black" />
        <path d="M25.641 54.359C25.1077 54.359 24.5743 54.2359 24.082 54.0308C23.5897 53.8256 23.1385 53.5385 22.7282 53.1692C22.359 52.759 22.0717 52.3077 21.8666 51.8154C21.6615 51.3231 21.5385 50.7897 21.5385 50.2564C21.5385 49.1897 21.9898 48.1231 22.7282 47.3436C23.1385 46.9744 23.5897 46.6872 24.082 46.4821C24.8205 46.1538 25.6411 46.0718 26.4616 46.2359C26.7077 46.2769 26.9538 46.359 27.2 46.4821C27.4461 46.5641 27.6923 46.6872 27.9385 46.8513C28.1436 47.0154 28.3487 47.1795 28.5538 47.3436C28.7179 47.5487 28.923 47.7538 29.0461 47.959C29.2102 48.2051 29.3334 48.4513 29.4154 48.6974C29.5385 48.9436 29.6205 49.1897 29.6616 49.4359C29.7026 49.7231 29.7436 49.9692 29.7436 50.2564C29.7436 51.3231 29.2923 52.3897 28.5538 53.1692C27.7743 53.9077 26.7077 54.359 25.641 54.359Z" fill="black" />
        <path d="M40 54.3585C38.9334 54.3585 37.8667 53.9073 37.0872 53.1688C36.9231 52.9637 36.759 52.7585 36.5949 52.5534C36.4308 52.3073 36.3077 52.0611 36.2257 51.815C36.1026 51.5688 36.0205 51.3226 35.9795 51.0765C35.9385 50.7893 35.8975 50.5432 35.8975 50.256C35.8975 49.7226 36.0205 49.1893 36.2257 48.697C36.4308 48.2047 36.718 47.7534 37.0872 47.3432C38.2359 46.1944 40.0821 45.8252 41.559 46.4816C42.0923 46.6867 42.5026 46.9739 42.9128 47.3432C43.6513 48.1226 44.1026 49.1893 44.1026 50.256C44.1026 50.5432 44.0616 50.7893 44.0205 51.0765C43.9795 51.3226 43.8975 51.5688 43.7744 51.815C43.6923 52.0611 43.5693 52.3073 43.4052 52.5534C43.2411 52.7585 43.0769 52.9637 42.9128 53.1688C42.5026 53.538 42.0923 53.8252 41.559 54.0303C41.0667 54.2355 40.5334 54.3585 40 54.3585Z" fill="black" />
        <path d="M25.641 68.7175C25.1077 68.7175 24.5743 68.5944 24.082 68.3893C23.5897 68.1842 23.1385 67.897 22.7282 67.5278C22.359 67.1175 22.0717 66.7073 21.8666 66.1739C21.6615 65.6816 21.5385 65.1483 21.5385 64.615C21.5385 63.5483 21.9898 62.4816 22.7282 61.7021C23.1385 61.3329 23.5897 61.0457 24.082 60.8406C25.6 60.1842 27.4051 60.5534 28.5538 61.7021C28.7179 61.9073 28.923 62.1124 29.0461 62.3175C29.2102 62.5637 29.3334 62.8098 29.4154 63.056C29.5385 63.3021 29.6205 63.5483 29.6616 63.8355C29.7026 64.0816 29.7436 64.3688 29.7436 64.615C29.7436 65.6816 29.2923 66.7483 28.5538 67.5278C27.7743 68.2662 26.7077 68.7175 25.641 68.7175Z" fill="black" />
      </svg>
    )
  }
}
