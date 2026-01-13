'use client'

import React from 'react'
import CoverScaler from './CoverScaler'

// Material Design Icon Components (scaled to 9x9 for the UI)
const MenuIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-nav)">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
)

const ThumbsUpIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-active)">
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
  </svg>
)

const PeopleIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-dark)">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
)

const HelpCircleIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-dark)">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
  </svg>
)

const NotificationsIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-nav)">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
  </svg>
)

const SettingsIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-nav)">
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
)

const ArrowBackIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--roger-icon-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
)

const OriginIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--roger-icon-dark)">
    <circle cx="12" cy="12" r="8"/>
  </svg>
)

const LocationPinIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-dark)">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)


const SendIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-icon-nav)">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--roger-text-muted)">
    <path d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
  </svg>
)

// Roger Logo Component - actual logo SVG (lime green stays constant)
const RogerLogo = () => (
  <svg width="30" height="12.5" viewBox="0 0 82 34" fill="none">
    <path d="M82 33.9973C75.0435 34.0121 0 33.9616 0 33.9616V14.1448C0 6.33716 6.34274 0 14.1573 0H82V33.9973ZM2.80342 31.3707H79.4068V2.80095H15.0684C8.30513 2.80095 2.80342 8.29782 2.80342 15.0551V31.3707Z" fill="var(--roger-lime)"/>
    <path d="M12.8757 22.3082V19.8449C12.8757 19.7409 12.9455 19.6715 13.0502 19.6715H13.8528V14.2939H13.0502C12.9455 14.2939 12.8757 14.2245 12.8757 14.1204V11.6572C12.8757 11.5531 12.9455 11.4837 13.0502 11.4837H16.2953C16.4 11.4837 16.4698 11.5531 16.4698 11.6572V12.4551C16.4698 12.4551 16.4698 12.4551 16.5047 12.4204C16.9583 11.9694 17.4468 11.6919 17.9702 11.5184C18.4587 11.3796 19.0868 11.3102 19.8893 11.3102H20.7617C20.8664 11.3102 20.9362 11.3796 20.9362 11.4837V14.2245C20.9362 14.3286 20.8664 14.398 20.7617 14.398H19.8893C18.8425 14.398 18.2493 14.5368 17.9702 14.6409C17.6213 14.7796 17.3421 15.0572 17.1676 15.4388C17.0281 15.7511 16.8536 16.4449 16.8536 18.0409V19.7062H17.7957C17.9004 19.7062 17.9702 19.7755 17.9702 19.8796V22.3429C17.9702 22.447 17.9004 22.5164 17.7957 22.5164H13.0153C12.9455 22.4817 12.8757 22.4123 12.8757 22.3082Z" fill="var(--roger-lime)"/>
    <path d="M60.5753 22.0653V19.6021C60.5753 19.498 60.6451 19.4286 60.7498 19.4286H61.5523V14.051H60.7498C60.6451 14.051 60.5753 13.9816 60.5753 13.8776V11.4143C60.5753 11.3102 60.6451 11.2408 60.7498 11.2408H63.9949C64.0996 11.2408 64.1694 11.3102 64.1694 11.4143V12.2123C64.623 11.7612 65.1464 11.449 65.6698 11.3102C66.1583 11.1714 66.7864 11.1021 67.5889 11.1021H68.4613C68.566 11.1021 68.6357 11.1714 68.6357 11.2755V13.9816C68.6357 14.0857 68.566 14.1551 68.4613 14.1551H67.5889C66.5072 14.1551 65.9489 14.2939 65.6698 14.398C65.3208 14.5367 65.0417 14.8143 64.8672 15.1959C64.7277 15.5082 64.5532 16.2021 64.5532 17.798V19.4633H65.5302C65.6349 19.4633 65.7047 19.5327 65.7047 19.6367V22.1C65.7047 22.2041 65.6349 22.2735 65.5302 22.2735H60.7498C60.6451 22.2388 60.5753 22.1694 60.5753 22.0653Z" fill="var(--roger-lime)"/>
    <path d="M27.2519 22.7592C25.6468 22.7592 24.251 22.2041 23.1344 21.1286C22.0178 20.0531 21.4595 18.6653 21.4595 17C21.4595 15.3347 22.0178 13.947 23.1344 12.8715C24.251 11.7959 25.6119 11.2408 27.217 11.2408C28.7872 11.2408 30.148 11.7613 31.2646 12.8368C32.4161 13.9123 32.9744 15.3 32.9744 17C32.9744 18.7 32.4161 20.0878 31.2646 21.1633C30.1829 22.2041 28.8221 22.7592 27.2519 22.7592ZM27.2519 14.1551C26.4842 14.1551 25.8561 14.4327 25.3676 14.9531C24.8442 15.5082 24.6 16.1674 24.6 16.9653C24.6 17.798 24.8442 18.4919 25.3676 19.0123C25.891 19.5327 26.4842 19.8102 27.2519 19.8102C28.0195 19.8102 28.6127 19.5674 29.1361 19.0123C29.6595 18.4919 29.9038 17.798 29.9038 16.9653C29.9038 16.1327 29.6595 15.4735 29.1361 14.9184C28.6127 14.398 27.9846 14.1551 27.2519 14.1551Z" fill="var(--roger-lime)"/>
    <path d="M39.8136 27.5816C38.2434 27.5816 36.8127 27.0959 35.5566 26.1592L35.2425 25.9163C35.1727 25.8469 35.1727 25.7428 35.2076 25.6735L36.9872 23.7306C37.057 23.6612 37.1268 23.6612 37.1966 23.6959L37.4757 23.9041C38.2434 24.4939 39.0808 24.8061 39.9881 24.8061C40.4766 24.8061 40.9302 24.702 41.3489 24.5286C41.7327 24.3551 42.0468 24.1469 42.2213 23.9041C42.3957 23.6612 42.5353 23.4184 42.5702 23.2102C42.6051 23.1061 42.64 22.8979 42.64 22.4816C42.64 22.3775 42.64 21.8571 42.64 21.753C42.4306 21.8918 42.2213 22.0306 41.9421 22.1694C41.2093 22.551 40.4068 22.7592 39.5344 22.7592C37.9642 22.7592 36.6383 22.2041 35.6613 21.1286C34.6842 20.053 34.1608 18.7 34.1608 17.1388C34.1608 15.4388 34.7191 14.0163 35.8008 12.9755C36.8825 11.9 38.1736 11.3796 39.6042 11.3796C40.6859 11.3796 41.6978 11.6918 42.6051 12.351V11.6918C42.6051 11.5877 42.6749 11.5184 42.7795 11.5184H46.6527C46.7574 11.5184 46.8272 11.5877 46.8272 11.6918V14.1551C46.8272 14.2592 46.7574 14.3286 46.6527 14.3286H45.6059V21.1979C45.6059 21.4061 45.6059 22.0306 45.6059 22.2041C45.6059 22.9673 45.5361 23.5224 45.4315 23.9735C45.3268 24.5286 45.0127 25.0837 44.594 25.6735C44.1404 26.2286 43.4774 26.7143 42.6051 27.0959C41.8374 27.4081 40.8604 27.5816 39.8136 27.5816ZM40.023 14.2245C39.2902 14.2245 38.697 14.4673 38.1387 14.9877C37.6153 15.5081 37.3361 16.202 37.3361 17.1041C37.3361 17.9714 37.5804 18.6653 38.0689 19.2204C38.5574 19.7408 39.1506 20.0184 39.9183 20.0184C40.6859 20.0184 41.314 19.7408 41.8723 19.2204C42.4306 18.6653 42.6749 18.0061 42.6749 17.1388C42.6749 16.2714 42.3957 15.5775 41.8723 15.0571C41.3489 14.4673 40.7208 14.2245 40.023 14.2245Z" fill="var(--roger-lime)"/>
    <path d="M68.3915 22.3082V19.8449C68.3915 19.7408 68.4613 19.6714 68.5659 19.6714H71.0434C71.1481 19.6714 71.2179 19.7408 71.2179 19.8449V22.3082C71.2179 22.4123 71.1481 22.4817 71.0434 22.4817H68.5659C68.4613 22.4817 68.3915 22.4123 68.3915 22.3082Z" fill="var(--roger-lime)"/>
    <path d="M56.5975 18.7C56.5277 18.6653 56.423 18.7 56.3881 18.7347C55.7251 19.5327 54.8528 19.9143 53.7362 19.9143C52.9336 19.9143 52.2706 19.6714 51.7821 19.2204C51.3983 18.8735 51.1192 18.4225 50.9796 17.902H59.1098C59.2145 17.902 59.2843 17.8327 59.2843 17.7286V17.3469C59.2494 15.3 58.6213 13.7388 57.4 12.6633C56.2136 11.6225 54.8877 11.1021 53.4221 11.1021C51.9217 11.1021 50.5958 11.6572 49.4443 12.7327C48.2928 13.8082 47.6996 15.1959 47.6996 16.8612C47.6996 18.6306 48.2928 20.0184 49.5141 21.0939C50.7004 22.1347 52.1311 22.6551 53.7711 22.6551C54.8179 22.6551 55.8647 22.4123 56.8068 21.9612C57.7141 21.5449 58.5166 20.8857 59.1098 20.0184C59.1796 19.9143 59.1447 19.8102 59.04 19.7408L56.5975 18.7ZM51.7821 14.398C52.2358 13.9816 52.7941 13.7735 53.4221 13.7735C54.1549 13.7735 54.7481 14.0163 55.2366 14.4674C55.5507 14.7796 55.7949 15.1265 55.9694 15.4735H51.0494C51.2238 15.0572 51.4681 14.7102 51.7821 14.398Z" fill="var(--roger-lime)"/>
    <path d="M69.4383 11.9677C69.4383 11.8116 69.4764 11.6668 69.5526 11.5331C69.6297 11.3995 69.7358 11.2944 69.8711 11.2179C70.0071 11.1407 70.1539 11.1021 70.3112 11.1021C70.4686 11.1021 70.6149 11.1407 70.7502 11.2179C70.8854 11.2944 70.9912 11.3995 71.0674 11.5331C71.1444 11.6668 71.183 11.8116 71.183 11.9677C71.183 12.1198 71.1461 12.2624 71.0723 12.3952C70.9985 12.5281 70.8936 12.6351 70.7576 12.7162C70.6223 12.7966 70.4735 12.8367 70.3112 12.8367C70.1498 12.8367 70.001 12.797 69.8649 12.7174C69.7297 12.637 69.6248 12.5304 69.5502 12.3976C69.4756 12.2647 69.4383 12.1214 69.4383 11.9677ZM69.5797 11.9677C69.5797 12.1005 69.6125 12.2237 69.678 12.3373C69.7436 12.4501 69.8326 12.5386 69.9449 12.6027C70.058 12.6668 70.1801 12.6988 70.3112 12.6988C70.4432 12.6988 70.5658 12.6664 70.6789 12.6015C70.792 12.5358 70.8805 12.447 70.9444 12.335C71.0092 12.223 71.0416 12.1005 71.0416 11.9677C71.0416 11.8356 71.0092 11.7139 70.9444 11.6026C70.8805 11.4906 70.792 11.4026 70.6789 11.3384C70.5658 11.2736 70.4432 11.2411 70.3112 11.2411C70.1801 11.2411 70.058 11.2732 69.9449 11.3373C69.8317 11.4006 69.7424 11.4887 69.6768 11.6015C69.6121 11.7143 69.5797 11.8363 69.5797 11.9677ZM70.1305 12.0546V12.4462H69.9571V11.4624H70.2965C70.4219 11.4624 70.519 11.4879 70.5879 11.5389C70.6576 11.5891 70.6924 11.6625 70.6924 11.7591C70.6924 11.8541 70.6399 11.9267 70.535 11.9769C70.635 12.0156 70.6854 12.0944 70.6862 12.2133V12.284C70.6862 12.3504 70.6932 12.3983 70.7071 12.4277V12.4462H70.5289C70.5174 12.4184 70.5117 12.369 70.5117 12.2979C70.5117 12.2261 70.5104 12.1836 70.508 12.1704C70.4949 12.0963 70.4412 12.0577 70.3469 12.0546H70.1305ZM70.1305 11.9062H70.3223C70.3813 11.9047 70.4289 11.8912 70.4649 11.8657C70.501 11.8402 70.519 11.8066 70.519 11.7649C70.519 11.7085 70.503 11.6687 70.4711 11.6455C70.4391 11.6216 70.3821 11.6096 70.3002 11.6096H70.1305V11.9062Z" fill="var(--roger-lime)"/>
  </svg>
)

// User Avatar Component - Driver illustration from Figma (colors are illustration-specific, not theme-dependent)
const UserAvatar = () => (
  <svg width="9" height="9" viewBox="0 0 40 40" fill="none">
    <g clipPath="url(#clip0_avatar)">
      <path d="M40 20.0007C40.0034 22.7175 39.4516 25.4063 38.3784 27.9021C37.3052 30.3979 35.7333 32.648 33.7591 34.5143C33.2729 34.976 32.7633 35.4124 32.2323 35.8217C28.693 38.5646 24.3344 40.0384 19.8568 40.0063C15.3791 39.9743 11.0421 38.4383 7.5424 35.645C7.09189 35.2878 6.65808 34.9109 6.24094 34.5143C3.83784 32.236 2.03806 29.3966 1.00318 26.2511C-0.0317028 23.1055 -0.269298 19.7522 0.311688 16.4921C0.892675 13.232 2.27406 10.1672 4.33188 7.57283C6.3897 4.97842 9.05955 2.93558 12.1018 1.62769C15.144 0.319789 18.4633 -0.212229 21.7619 0.0793794C25.0605 0.370988 28.235 1.4771 31.0006 3.29843C33.7661 5.11976 36.0362 7.5993 37.6069 10.5145C39.1777 13.4297 39.9999 16.6893 40 20.0007Z" fill="#F3F4FA"/>
      <path d="M15.0142 27.2943L12.5629 38.5704C10.7556 37.8456 9.06413 36.86 7.54243 35.645C7.09191 35.2878 6.65811 34.9109 6.24097 34.5143L8.16961 31.0192C9.05615 29.3911 10.5364 28.1677 12.3023 27.6035C12.6124 27.5066 12.9293 27.4328 13.2504 27.3827C13.6185 27.3236 13.9907 27.2941 14.3634 27.2943H15.0142Z" fill="#2A4651"/>
      <path d="M33.7591 34.5143C33.2729 34.976 32.7633 35.4123 32.2324 35.8217C30.7692 36.9564 29.1554 37.8819 27.4372 38.5719L24.9858 27.2943H25.6366C26.1018 27.2945 26.5658 27.3404 27.022 27.4313C27.1089 27.4489 27.1957 27.4681 27.2811 27.4887C28.2418 27.7285 29.1421 28.1656 29.9248 28.7721C30.7075 29.3787 31.3555 30.1414 31.8275 31.0118L33.7591 34.5143Z" fill="#2A4651"/>
      <path d="M32.2323 35.8173C28.693 38.5602 24.3345 40.0339 19.8568 40.0019C15.3791 39.9699 11.0422 38.4339 7.54242 35.6406C7.75406 33.2431 8.75883 30.9846 10.3978 29.2221C12.0369 27.4597 14.2166 26.2938 16.5924 25.9089C16.644 25.8986 16.697 25.8913 16.75 25.8839C16.9855 25.8486 17.2241 25.8221 17.4655 25.8029C17.7492 25.7813 18.0362 25.7701 18.3268 25.7691H21.4318C21.7262 25.7691 22.0075 25.7808 22.2916 25.8029C22.5331 25.8221 22.7715 25.8486 23.0086 25.8839C23.0616 25.8913 23.1146 25.8986 23.1661 25.9089C24.6322 26.143 26.0335 26.6795 27.2811 27.4843C28.6978 28.3922 29.8831 29.6183 30.7427 31.065C31.6022 32.5116 32.1123 34.1389 32.2323 35.8173Z" fill="#263238"/>
      <path d="M22.7391 30.9721C23.192 30.569 23.5543 30.0746 23.8023 29.5214C24.0502 28.9682 24.1781 28.3687 24.1775 27.7625V27.7419C24.169 27.2326 23.9865 26.7415 23.6603 26.3502C23.3341 25.9589 22.8838 25.691 22.3843 25.5909L21.7321 25.4555H18.025L17.3742 25.5909C16.8745 25.6905 16.4239 25.9583 16.0977 26.3497C15.7714 26.7411 15.589 27.2324 15.581 27.7419V27.7625C15.5802 28.3687 15.7081 28.9682 15.9564 29.5212C16.2046 30.0742 16.5674 30.5683 17.0209 30.9706L19.88 29.6087L22.7391 30.9721Z" fill="#2A4651"/>
      <path d="M19.8785 29.1023C20.2895 29.1023 20.6964 29.0213 21.0761 28.864C21.4558 28.7067 21.8007 28.4761 22.0913 28.1854C22.3818 27.8948 22.6122 27.5497 22.7694 27.1699C22.9265 26.7902 23.0073 26.3832 23.0071 25.9722V21.2095H16.7559V25.9722C16.7555 26.8012 17.0841 27.5965 17.6696 28.1833C18.2551 28.7702 19.0495 29.1007 19.8785 29.1023Z" fill="#F5968C"/>
      <path d="M26.7702 14.1161C26.7702 10.3099 23.6847 7.22441 19.8786 7.22441C16.0724 7.22441 12.9869 10.3099 12.9869 14.1161V19.3485C12.9869 23.1547 16.0724 26.2402 19.8786 26.2402C23.6847 26.2402 26.7702 23.1547 26.7702 19.3485V14.1161Z" fill="#FFBBB3"/>
      <path d="M26.0959 14.1455V16.4143C26.0959 19.8476 23.3119 21.2109 19.8785 21.2109C16.4452 21.2109 13.6641 19.8476 13.6641 16.4143V14.2339C13.4351 14.1916 13.21 14.13 12.9913 14.0498C12.9913 14.0719 12.9913 14.094 12.9913 14.1161V19.3485C12.9913 20.2536 13.1695 21.1497 13.5159 21.9859C13.8622 22.822 14.3699 23.5817 15.0098 24.2217C15.6498 24.8616 16.4095 25.3693 17.2456 25.7156C18.0818 26.0619 18.9779 26.2402 19.883 26.2402C20.788 26.2402 21.6841 26.0619 22.5203 25.7156C23.3564 25.3693 24.1162 24.8616 24.7561 24.2217C25.3961 23.5817 25.9037 22.822 26.25 21.9859C26.5964 21.1497 26.7746 20.2536 26.7746 19.3485V14.1161C26.7746 14.0557 26.7746 13.9939 26.7746 13.9335C26.5531 14.0183 26.3264 14.0891 26.0959 14.1455Z" fill="#BF6541"/>
      <path d="M12.9868 17.3065C13.8325 17.3065 14.518 16.621 14.518 15.7753C14.518 14.9297 13.8325 14.2442 12.9868 14.2442C12.1412 14.2442 11.4557 14.9297 11.4557 15.7753C11.4557 16.621 12.1412 17.3065 12.9868 17.3065Z" fill="#FFA88A"/>
      <path d="M26.7702 17.3065C27.6159 17.3065 28.3014 16.621 28.3014 15.7753C28.3014 14.9297 27.6159 14.2442 26.7702 14.2442C25.9246 14.2442 25.2391 14.9297 25.2391 15.7753C25.2391 16.621 25.9246 17.3065 26.7702 17.3065Z" fill="#FFA88A"/>
      <path d="M26.8026 12.6585V14.1161H12.9957C12.9957 14.1161 12.9957 12.2286 12.9957 12.158C13.0899 10.8881 13.5328 9.66884 14.2754 8.63446C15.0181 7.60008 16.0318 6.79069 17.2049 6.2954L17.2932 6.2586C18.1176 5.9238 18.999 5.75181 19.8888 5.75214C20.0743 5.75214 20.2584 5.7595 20.4424 5.77422L20.5631 5.78453C21.8972 5.91733 23.1639 6.43481 24.2094 7.27406C25.2549 8.11331 26.0341 9.23819 26.4522 10.512C26.4522 10.512 26.4522 10.5208 26.4522 10.5267C26.681 11.2143 26.7992 11.9339 26.8026 12.6585Z" fill="#D2DE29"/>
      <path d="M26.8173 14.0955H26.8026C26.7422 14.1293 26.464 14.2721 26.0149 14.465C24.8533 14.9597 22.5478 15.7694 19.8933 15.7694C17.0665 15.7694 14.6358 14.8508 13.5625 14.3708C13.2224 14.2236 13.0178 14.1131 12.9736 14.094H12.9662H12.9736C13.137 14.0086 16.1699 12.42 19.8933 12.42C23.5739 12.42 26.5803 13.9748 26.8026 14.0925L26.8173 14.0955Z" fill="#B0C836"/>
      <path d="M20.0066 8.27414C20.3815 8.27414 20.741 8.42305 21.006 8.68811C21.2711 8.95317 21.42 9.31266 21.42 9.68752C21.42 10.0624 21.2711 10.4219 21.006 10.6869C20.741 10.952 20.3815 11.1009 20.0066 11.1009H18.5933V9.68752C18.5933 9.50191 18.6298 9.31812 18.7008 9.14664C18.7719 8.97516 18.876 8.81935 19.0072 8.68811C19.1385 8.55686 19.2943 8.45275 19.4658 8.38173C19.6372 8.3107 19.821 8.27414 20.0066 8.27414Z" fill="white"/>
      <path d="M22.8525 17.2152C22.8525 17.0436 22.7137 16.9046 22.5426 16.9046C22.3714 16.9046 22.2327 17.0436 22.2327 17.2152V17.7025C22.2327 17.8741 22.3714 18.0132 22.5426 18.0132C22.7137 18.0132 22.8525 17.8741 22.8525 17.7025V17.2152Z" fill="#263238"/>
      <path d="M17.623 17.2152C17.623 17.0436 17.4842 16.9046 17.3131 16.9046C17.1419 16.9046 17.0032 17.0436 17.0032 17.2152V17.7025C17.0032 17.8741 17.1419 18.0132 17.3131 18.0132C17.4842 18.0132 17.623 17.8741 17.623 17.7025V17.2152Z" fill="#263238"/>
      <path d="M18.8171 22.6567C18.6999 22.6567 18.5848 22.6876 18.4834 22.7462C18.382 22.8048 18.2978 22.8891 18.2393 22.9905C18.1808 23.092 18.15 23.2071 18.1501 23.3243C18.1503 23.4414 18.1812 23.5565 18.2399 23.6578C18.4149 23.9562 18.6648 24.2036 18.9649 24.3756C19.265 24.5475 19.6048 24.6379 19.9507 24.6379C20.2966 24.6379 20.6364 24.5475 20.9365 24.3756C21.2366 24.2036 21.4866 23.9562 21.6615 23.6578C21.7207 23.5565 21.752 23.4414 21.7524 23.3241C21.7527 23.2068 21.722 23.0914 21.6634 22.9898C21.6048 22.8882 21.5204 22.8038 21.4187 22.7453C21.317 22.6868 21.2016 22.6563 21.0843 22.6567H18.8171Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_avatar">
        <rect width="40" height="40" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

// Chip Component - compact height, no fixed height
const Chip = ({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) => (
  <div 
    className="flex items-center rounded-full"
    style={{ 
      gap: icon ? '3px' : '0', 
      padding: icon ? '2px 4.5px 2px 2px' : '3px 4.5px',
      backgroundColor: 'var(--roger-chip-bg)'
    }}
  >
    {icon}
    <span 
      className="text-center whitespace-nowrap"
      style={{ 
        fontFamily: 'var(--font-roboto), sans-serif', 
        fontSize: '5.25px', 
        fontWeight: 'bold', 
        lineHeight: '7.875px',
        color: 'var(--roger-text)'
      }}
    >
      {children}
    </span>
  </div>
)

// Chat Illustration Component
const ChatIllustration = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="var(--roger-chat-illustration-bg)"/>
    <path d="M44 28a2 2 0 01-2 2H26l-6 6V22a2 2 0 012-2h20a2 2 0 012 2v6z" stroke="var(--roger-text-subtle)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="24" r="1.5" fill="var(--roger-text-subtle)"/>
    <circle cx="28" cy="24" r="1.5" fill="var(--roger-text-subtle)"/>
    <circle cx="36" cy="24" r="1.5" fill="var(--roger-text-subtle)"/>
  </svg>
)

export default function RogerCover() {
  return (
    <CoverScaler>
        <div 
          className="rounded-[3px] overflow-hidden relative"
          style={{
            width: '540px',
            height: '384px',
            boxShadow: 'var(--roger-card-shadow)',
            backgroundColor: 'var(--roger-bg)'
          }}
        >
        {/* Top Navigation - Full Width */}
        <div 
          className="absolute top-0 left-0 flex items-center justify-between"
          style={{
            width: '540px',
            padding: '6px 9px',
            borderBottom: '0.5px solid var(--roger-border)',
            backgroundColor: 'var(--roger-card-bg)',
            zIndex: 10
          }}
        >
          {/* Left: Menu + Logo */}
          <div className="flex items-center" style={{ gap: '15px' }}>
            <MenuIcon />
            <RogerLogo />
          </div>
          {/* Right: Notifications, Settings, Avatar */}
          <div className="flex items-center" style={{ gap: '6px' }}>
            <NotificationsIcon />
            <SettingsIcon />
            <UserAvatar />
          </div>
        </div>

        {/* Side Navigation - Left vertical bar */}
        <div 
          className="absolute left-0 flex flex-col items-center justify-between"
          style={{
            top: '25px',
            height: '359px',
            width: '27px',
            padding: '9px',
            borderRight: '0.5px solid var(--roger-border)',
            backgroundColor: 'var(--roger-card-bg)',
            zIndex: 8
          }}
        >
          {/* Top Icons */}
          <div className="flex flex-col items-center" style={{ gap: '15px' }}>
            <ThumbsUpIcon />
            <PeopleIcon />
          </div>
          {/* Bottom Help Icon */}
          <HelpCircleIcon />
        </div>

        {/* Sidebar Header - "Book Deals" with back arrow and Book button */}
        <div 
          className="absolute flex items-center justify-between"
          style={{
            left: '27px',
            top: '25px',
            width: '146px',
            height: '27px',
            padding: '6px',
            borderRight: '0.5px solid var(--roger-border)',
            borderBottom: '0.5px solid var(--roger-border)',
            backgroundColor: 'var(--roger-card-bg)',
            zIndex: 6,
            boxSizing: 'border-box'
          }}
        >
          <div className="flex items-center" style={{ gap: '6px' }}>
            <ArrowBackIcon />
            <span 
              className="whitespace-nowrap"
              style={{ 
                fontFamily: 'var(--font-arvo), serif', 
                fontSize: '9px', 
                fontWeight: 'bold',
                letterSpacing: '-0.18px',
                color: 'var(--roger-text)'
              }}
            >
              Book Deals
            </span>
          </div>
          <div 
            className="flex items-center justify-center text-white"
            style={{
              padding: '4.5px 6px',
              fontSize: '6px',
              fontFamily: 'var(--font-roboto), sans-serif',
              fontWeight: 600,
              letterSpacing: '0.06px',
              lineHeight: '6px',
              borderRadius: '1.5px',
              backgroundColor: 'var(--roger-blue)'
            }}
          >
            Book
          </div>
        </div>

        {/* Sidebar Content */}
        <div 
          className="absolute flex flex-col overflow-hidden"
          style={{
            left: '27px',
            top: '52px',
            width: '146px',
            height: '332px',
            padding: '6px',
            borderRight: '0.5px solid var(--roger-border)',
            backgroundColor: 'var(--roger-sidebar-content-bg)',
            zIndex: 4,
            boxSizing: 'border-box'
          }}
        >
          <div className="flex flex-col" style={{ gap: '3px' }}>
            {/* Counter Offer */}
            <div 
              className="rounded overflow-hidden flex items-center justify-between"
              style={{ 
                width: '100%', 
                padding: '6px',
                backgroundColor: 'var(--roger-panel-bg)'
              }}
            >
              <div className="flex flex-col items-start">
                <span 
                  style={{ 
                    fontFamily: 'var(--font-roboto), sans-serif', 
                    fontSize: '7.5px', 
                    fontWeight: 'bold', 
                    lineHeight: '7.5px',
                    color: 'var(--roger-text)'
                  }}
                >
                  Counter Offer
                </span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-roboto), sans-serif', 
                    fontSize: '6px', 
                    fontWeight: 'normal', 
                    lineHeight: '9px',
                    color: 'var(--roger-text-muted)'
                  }}
                >
                  02/07/23 at 5:15PM
                </span>
              </div>
              <div className="flex items-center" style={{ gap: '3px' }}>
                <div 
                  className="flex items-center justify-center"
                  style={{
                    padding: '3px 4.5px',
                    fontSize: '5.25px',
                    fontFamily: 'var(--font-roboto), sans-serif',
                    fontWeight: 'bold',
                    lineHeight: '7.875px',
                    borderRadius: '75px',
                    backgroundColor: 'var(--roger-pending-bg)',
                    color: 'var(--roger-pending-text)'
                  }}
                >
                  Pending
                </div>
                <ChevronRightIcon />
              </div>
            </div>

            {/* Deals Card */}
            <div 
              className="rounded overflow-hidden" 
              style={{ 
                width: '100%',
                backgroundColor: 'var(--roger-panel-bg)'
              }}
            >
              {/* Price Header */}
              <div 
                className="flex items-center"
                style={{ 
                  padding: '6px 6px 3px 6px',
                  borderBottom: '0.375px solid var(--roger-divider)'
                }}
              >
                <div className="flex items-center" style={{ gap: '6px' }}>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-arvo), serif', 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      letterSpacing: '-0.36px',
                      color: 'var(--roger-text)'
                    }}
                  >
                    $649
                  </span>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '5.25px', 
                      fontWeight: 'bold',
                      lineHeight: '7.875px',
                      color: 'var(--roger-text-muted)'
                    }}
                  >
                    $3.50/mi
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col" style={{ padding: '6px', gap: '3px' }}>
                {/* Company */}
                <div className="flex items-center justify-between w-full">
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '5.25px', 
                      fontWeight: 'bold', 
                      lineHeight: '7.875px',
                      color: 'var(--roger-text)'
                    }}
                  >
                    Company
                  </span>
                  <Chip icon={
                    <div 
                      className="rounded-full overflow-hidden flex items-center justify-center" 
                      style={{ 
                        width: '10px', 
                        height: '10px',
                        backgroundColor: 'var(--roger-company-badge-bg)'
                      }}
                    >
                      <span className="text-white text-[5px] font-bold">C</span>
                    </div>
                  }>
                    Cargill
                  </Chip>
                </div>
                {/* Date Range */}
                <div className="flex items-center justify-between w-full">
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '5.25px', 
                      fontWeight: 'bold', 
                      lineHeight: '7.875px',
                      color: 'var(--roger-text)'
                    }}
                  >
                    Date Range
                  </span>
                  <Chip>11/23/22 - 11/26/22</Chip>
                </div>
                {/* Total Loads */}
                <div className="flex items-center justify-between w-full">
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '5.25px', 
                      fontWeight: 'bold', 
                      lineHeight: '7.875px',
                      color: 'var(--roger-text)'
                    }}
                  >
                    Total Loads
                  </span>
                  <Chip>265 Loads</Chip>
                </div>
                {/* Total Miles */}
                <div className="flex items-center justify-between w-full">
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '5.25px', 
                      fontWeight: 'bold', 
                      lineHeight: '7.875px',
                      color: 'var(--roger-text)'
                    }}
                  >
                    Total Miles
                  </span>
                  <Chip>92.8/mi</Chip>
                </div>
                {/* Commodity */}
                <div className="flex items-center justify-between w-full">
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '5.25px', 
                      fontWeight: 'bold', 
                      lineHeight: '7.875px',
                      color: 'var(--roger-text)'
                    }}
                  >
                    Commodity
                  </span>
                  <Chip>Yellow Corn</Chip>
                </div>
              </div>

              {/* Trip Locations */}
              <div 
                className="flex flex-col"
                style={{ 
                  padding: '6px',
                  borderTop: '0.375px solid var(--roger-divider)',
                  borderBottom: '0.375px solid var(--roger-divider)',
                  gap: '1.5px'
                }}
              >
                {/* Origin */}
                <div className="flex items-center w-full" style={{ gap: '3px' }}>
                  <div className="flex items-start" style={{ width: '9px', padding: '1.5px' }}>
                    <OriginIcon />
                  </div>
                  <div className="flex flex-col items-start" style={{ lineHeight: 0 }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-roboto), sans-serif', 
                        fontSize: '5.25px', 
                        fontWeight: 'bold', 
                        lineHeight: '7.875px',
                        color: 'var(--roger-text)',
                        textAlign: 'left'
                      }}
                    >
                      Midway Grain Elevator
                    </span>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-roboto), sans-serif', 
                        fontSize: '5.25px', 
                        fontWeight: 'normal', 
                        lineHeight: '7.875px',
                        color: 'var(--roger-text-muted)',
                        textAlign: 'left'
                      }}
                    >
                      Midway, Texas
                    </span>
                  </div>
                </div>
                {/* Divider Dot */}
                <div className="flex items-center w-full" style={{ padding: '0 3.938px' }}>
                  <div 
                    className="rounded-full"
                    style={{ 
                      width: '1.125px', 
                      height: '1.125px',
                      backgroundColor: 'var(--roger-dot)'
                    }}
                  />
                </div>
                {/* Destination */}
                <div className="flex items-center w-full" style={{ gap: '3px' }}>
                  <div className="flex items-start" style={{ width: '9px' }}>
                    <LocationPinIcon />
                  </div>
                  <div className="flex flex-col items-start" style={{ lineHeight: 0 }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-roboto), sans-serif', 
                        fontSize: '5.25px', 
                        fontWeight: 'bold', 
                        lineHeight: '7.875px',
                        color: 'var(--roger-text)',
                        textAlign: 'left'
                      }}
                    >
                      Countryside Grain
                    </span>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-roboto), sans-serif', 
                        fontSize: '4.5px', 
                        fontWeight: 'normal', 
                        lineHeight: '6.75px',
                        color: 'var(--roger-text-muted)',
                        textAlign: 'left'
                      }}
                    >
                      Abilene, TX
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Terms */}
              <div className="flex flex-col items-start" style={{ padding: '6px', gap: '3px' }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-roboto), sans-serif', 
                    fontSize: '6px', 
                    fontWeight: 'bold',
                    color: 'var(--roger-text-terms-label)',
                    textAlign: 'left'
                  }}
                >
                  Additional terms
                </span>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-roboto), sans-serif', 
                    fontSize: '6px', 
                    fontWeight: 'normal', 
                    lineHeight: '9px',
                    color: 'var(--roger-text-terms-body)',
                    margin: 0,
                    textAlign: 'left'
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Massa tortor tempus convallis sed. Cursus pharetra molestie duis maecenas. Donec enim convallis gravida sed commodo dictum. Tellus mattis diam rutrum placerat massa accumsan. Tempor vitae eu porttitor nam nulla elit laoreet in.
                </p>
              </div>
            </div>

            {/* Negotiate Deal */}
            <div 
              className="rounded overflow-hidden flex items-center justify-between"
              style={{ 
                width: '134.25px', 
                padding: '6px',
                backgroundColor: 'var(--roger-panel-bg)'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-roboto), sans-serif', 
                  fontSize: '7.5px', 
                  fontWeight: 'bold',
                  color: 'var(--roger-text)'
                }}
              >
                Negotiate Deal
              </span>
              <div 
                className="flex items-center justify-center"
                style={{
                  padding: '4.5px 6px',
                  fontSize: '6px',
                  fontFamily: 'var(--font-roboto), sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.06px',
                  lineHeight: '6px',
                  borderRadius: '1.5px',
                  backgroundColor: 'var(--roger-counter-bg)',
                  color: 'var(--roger-counter-text)'
                }}
              >
                Counter
              </div>
            </div>

            {/* Contact Shipper */}
            <div 
              className="flex flex-col overflow-hidden rounded-[1.5px] flex-1"
              style={{ width: '100%' }}
            >
              {/* Header */}
              <div 
                className="flex items-center"
                style={{
                  padding: '9px 6px',
                  height: '72px',
                  borderBottom: '0.375px solid var(--roger-divider)',
                  backgroundColor: 'var(--roger-panel-bg)'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-roboto), sans-serif', 
                    fontSize: '7.5px', 
                    fontWeight: 'bold',
                    color: 'var(--roger-text)'
                  }}
                >
                  Contact Shipper
                </span>
              </div>
              {/* Chat Content */}
              <div 
                className="flex-1 flex flex-col items-center justify-center"
                style={{
                  gap: '6px',
                  backgroundColor: 'var(--roger-panel-bg)'
                }}
              >
                {/* Illustration */}
                <div className="overflow-hidden" style={{ width: '64px', height: '64px' }}>
                  <ChatIllustration />
                </div>
                <div className="flex flex-col items-center w-full text-center" style={{ gap: '3px' }}>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '7.5px', 
                      fontWeight: 'bold',
                      color: 'var(--roger-text)'
                    }}
                  >
                    Contact Shipper
                  </span>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '6px', 
                      fontWeight: 'normal', 
                      lineHeight: '9px',
                      color: 'var(--roger-text-terms-label)'
                    }}
                  >
                    Type your first message below.
                  </span>
                </div>
              </div>
              {/* Chat Input */}
              <div 
                className="flex items-center"
                style={{
                  padding: '6px',
                  gap: '6px',
                  borderTop: '0.375px solid var(--roger-divider)',
                  borderRight: '0.375px solid var(--roger-divider)',
                  backgroundColor: 'var(--roger-panel-bg)'
                }}
              >
                <div 
                  className="flex-1 rounded flex items-center"
                  style={{ 
                    padding: '6px',
                    backgroundColor: 'var(--roger-chip-bg)'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), sans-serif', 
                      fontSize: '6px', 
                      fontWeight: 'normal', 
                      lineHeight: '9px',
                      color: 'var(--roger-text-muted)'
                    }}
                  >
                    Enter Message
                  </span>
                </div>
                <div 
                  className="rounded-full flex items-center justify-center"
                  style={{ 
                    width: '20.25px', 
                    height: '20.25px',
                    backgroundColor: 'var(--roger-chip-bg)'
                  }}
                >
                  <SendIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Area - Uses CSS to switch between light/dark */}
        <div 
          className="absolute roger-map"
          style={{
            left: '173px',
            top: '25px',
            width: '367px',
            height: '359px',
            backgroundImage: 'var(--roger-map)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
    </CoverScaler>
  )
}
