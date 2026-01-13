'use client'

import React from 'react'
import CoverScaler from './CoverScaler'

// ============================================
// SVG ICON COMPONENTS
// ============================================

// Experian Logo - exact brand logo
const ExperianLogo = () => (
  <svg width="10" height="12" viewBox="0 0 29 36" fill="none">
    <path d="M17.9242 8.4528H13.8489C13.2675 8.45671 12.7082 8.23014 12.2934 7.82268C11.8786 7.41522 11.6422 6.86006 11.6357 6.27867V2.19851C11.6357 1.61543 11.8674 1.05623 12.2797 0.643929C12.692 0.231628 13.2512 0 13.8343 0H17.9242C18.5072 0 19.0664 0.231628 19.4787 0.643929C19.891 1.05623 20.1227 1.61543 20.1227 2.19851V6.27867C20.1163 6.85752 19.8818 7.41047 19.4702 7.81752C19.0586 8.22456 18.503 8.45284 17.9242 8.4528" fill="#426DA9"/>
    <path d="M7.376 17.6175H2.78399C2.45966 17.6182 2.13839 17.5548 1.83856 17.4312C1.53874 17.3075 1.26624 17.1259 1.03668 16.8968C0.807115 16.6677 0.624989 16.3956 0.500725 16.096C0.376461 15.7964 0.312499 15.4752 0.3125 15.1509V10.5589C0.3125 9.90342 0.572889 9.27478 1.03638 8.81129C1.49988 8.34779 2.12851 8.0874 2.78399 8.0874H7.376C7.70034 8.0874 8.02148 8.15136 8.32107 8.27563C8.62065 8.39989 8.89278 8.58202 9.12189 8.81158C9.351 9.04115 9.53259 9.31364 9.65627 9.61347C9.77994 9.91329 9.84326 10.2346 9.84262 10.5589V15.1509C9.84327 15.475 9.7799 15.7961 9.65617 16.0956C9.53244 16.3952 9.35078 16.6673 9.1216 16.8965C8.89243 17.1257 8.62025 17.3074 8.3207 17.4311C8.02114 17.5548 7.70011 17.6182 7.376 17.6175" fill="#883B92"/>
    <path d="M6.9372 27.1427H4.13422C3.936 27.1433 3.7396 27.1049 3.55629 27.0294C3.37297 26.954 3.20634 26.8432 3.06595 26.7032C2.92556 26.5633 2.81417 26.397 2.73817 26.214C2.66217 26.0309 2.62305 25.8346 2.62305 25.6364V22.8334C2.62305 22.635 2.66213 22.4385 2.73808 22.2551C2.81402 22.0718 2.92533 21.9052 3.06566 21.7649C3.20598 21.6246 3.37257 21.5132 3.55592 21.4373C3.73926 21.3614 3.93577 21.3223 4.13422 21.3223H6.9372C7.33798 21.3223 7.72236 21.4815 8.00576 21.7649C8.28916 22.0483 8.44837 22.4326 8.44837 22.8334V25.6364C8.44837 25.8346 8.40925 26.0309 8.33324 26.214C8.25724 26.397 8.14585 26.5633 8.00546 26.7032C7.86507 26.8432 7.69844 26.954 7.51513 27.0294C7.33181 27.1049 7.13542 27.1433 6.9372 27.1427Z" fill="#AF1685"/>
    <path d="M14.4632 35.9998H11.1484C10.6752 35.9998 10.2214 35.8119 9.88682 35.4773C9.55223 35.1427 9.36426 34.6889 9.36426 34.2157V30.9009C9.36426 30.6666 9.41041 30.4346 9.50007 30.2181C9.58973 30.0016 9.72115 29.8049 9.88682 29.6393C10.0525 29.4736 10.2492 29.3422 10.4656 29.2525C10.6821 29.1628 10.9141 29.1167 11.1484 29.1167H14.4632C14.9364 29.1167 15.3902 29.3047 15.7248 29.6393C16.0594 29.9739 16.2474 30.4277 16.2474 30.9009V34.2157C16.2474 34.6889 16.0594 35.1427 15.7248 35.4773C15.3902 35.8119 14.9364 35.9998 14.4632 35.9998" fill="#E63888"/>
    <path d="M26.6113 10.1396H24.3104C23.9829 10.1396 23.6687 10.0098 23.4366 9.77865C23.2046 9.5475 23.0736 9.23381 23.0723 8.90627V6.61514C23.0723 6.28675 23.2027 5.97181 23.4349 5.73961C23.6671 5.5074 23.9821 5.37695 24.3104 5.37695H26.6064C26.934 5.37824 27.2477 5.50926 27.4788 5.74133C27.71 5.97339 27.8398 6.28759 27.8398 6.61514V8.90627C27.8398 9.23336 27.7098 9.54706 27.4785 9.77835C27.2472 10.0096 26.9335 10.1396 26.6064 10.1396" fill="#E63888"/>
    <path d="M25.9583 19.3964C25.9047 16.0426 22.9116 13.1811 19.3823 13.1811C18.5008 13.1572 17.6233 13.3101 16.8019 13.6309C15.9804 13.9517 15.2316 14.4339 14.5996 15.0489C13.9676 15.664 13.4653 16.3994 13.1223 17.2119C12.7793 18.0243 12.6025 18.8972 12.6025 19.7791C12.6025 20.661 12.7793 21.5339 13.1223 22.3464C13.4653 23.1588 13.9676 23.8942 14.5996 24.5093C15.2316 25.1243 15.9804 25.6065 16.8019 25.9273C17.6233 26.2481 18.5008 26.401 19.3823 26.3771C21.0966 26.3855 22.7443 25.7141 23.9646 24.5101C24.137 24.3658 24.2605 24.1716 24.318 23.9542C24.3754 23.7368 24.3641 23.507 24.2855 23.2963C24.2069 23.0857 24.0649 22.9045 23.8791 22.7779C23.6933 22.6513 23.4728 22.5855 23.248 22.5894C22.9066 22.6152 22.5885 22.7724 22.3608 23.0281C21.9676 23.4152 21.499 23.717 20.984 23.915C20.469 24.1129 19.9188 24.2026 19.3677 24.1786C18.3281 24.1953 17.3164 23.8423 16.5129 23.1826C15.7094 22.5228 15.1663 21.5991 14.9804 20.5761H24.9346H24.9883C25.0266 20.5732 25.0643 20.565 25.1004 20.5518C25.3512 20.4816 25.5716 20.33 25.7269 20.1208C25.8822 19.9117 25.9636 19.6569 25.9583 19.3964V19.3964ZM19.3823 15.3553C20.3141 15.3521 21.2226 15.6457 21.9764 16.1935C22.7301 16.7413 23.2899 17.5148 23.5746 18.402H15.1608C15.447 17.51 16.0112 16.733 16.7708 16.1848C17.5304 15.6366 18.4456 15.3459 19.3823 15.3553V15.3553Z" fill="#1D4F91"/>
    <path d="M27.2236 24.2979C27.9018 24.2979 28.4541 24.8314 28.4541 25.4873C28.4541 26.1431 27.9018 26.6768 27.2236 26.6768C26.559 26.6767 25.9971 26.1319 25.9971 25.4873C25.9971 24.8426 26.559 24.2979 27.2236 24.2979ZM27.2236 24.5264C26.6761 24.5264 26.2315 24.9575 26.2314 25.4873C26.2314 26.0171 26.6761 26.4482 27.2236 26.4482C27.7831 26.4482 28.2383 26.0171 28.2383 25.4873C28.2382 24.9575 27.7831 24.5264 27.2236 24.5264ZM27.1963 24.7754C27.4472 24.7756 27.6366 24.9627 27.6367 25.2109C27.6367 25.3748 27.5573 25.5178 27.4238 25.5986L27.626 26.0264C27.636 26.046 27.6367 26.062 27.6367 26.0762C27.6367 26.1215 27.6077 26.1619 27.5645 26.1787C27.5497 26.1858 27.5291 26.1904 27.5098 26.1904C27.4646 26.1904 27.4235 26.1647 27.4053 26.125L27.1875 25.6592H27.0947V26.0732C27.0946 26.1399 27.0437 26.1902 26.9756 26.1904C26.9078 26.1904 26.8517 26.1379 26.8516 26.0732V24.9561C26.8516 24.8515 26.9223 24.7755 27.0186 24.7754H27.1963ZM27.0947 25.0098V25.4209H27.1992C27.3905 25.4207 27.3926 25.213 27.3926 25.2109C27.3925 25.1999 27.389 25.0099 27.1992 25.0098H27.0947Z" fill="#1D4F91"/>
  </svg>
)

// Search Icon
const SearchIcon = () => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="var(--cm-blue-secondary)">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
)

// Grid/Apps Icon
const GridIcon = () => (
  <svg width="8" height="8" viewBox="0 0 24 24" fill="var(--cm-blue-secondary)">
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
  </svg>
)

// User Avatar Icon
const UserAvatarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" fill="none" stroke="var(--cm-blue-secondary)" strokeWidth="1"/>
    <text x="16" y="20" textAnchor="middle" fill="var(--cm-blue-secondary)" fontSize="11" fontFamily="Roboto, system-ui">AA</text>
  </svg>
)

// Dashboard Icon (home)
const DashboardIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
)

// Organization Icon
const OrganizationIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
)

// Operations Icon (settings sparkle)
const OperationsIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
)

// Providers Icon (add box)
const ProvidersIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
  </svg>
)

// Claims Icon (target/crosshair)
const ClaimsIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
  </svg>
)

// Contracts Icon (document)
const ContractsIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
)

// Bundled Services Icon (layers)
const BundledIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
  </svg>
)

// Reports Icon (assessment)
const ReportsIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
)

// Chevron Down Icon
const ChevronDownIcon = ({ color, size = 5 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "var(--cm-text)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

// Arrow Up Icon (for positive trends)
const ArrowUpIcon = ({ color }: { color?: string }) => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill={color || "var(--cm-green)"}>
    <path d="M7 14l5-5 5 5z"/>
  </svg>
)

// Arrow Down Icon (for negative trends)
const ArrowDownIcon = ({ color }: { color?: string }) => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill={color || "var(--cm-red)"}>
    <path d="M7 10l5 5 5-5z"/>
  </svg>
)

// Edit/Pencil Icon
const EditIcon = ({ disabled = false }: { disabled?: boolean }) => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke={disabled ? "var(--cm-icon-disabled)" : "var(--cm-icon-action)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

// Refresh Icon
const RefreshIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6"/>
    <path d="M1 20v-6h6"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
)

// Help/Info Icon
const HelpIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

// Columns Icon (view_column style from Figma)
const ColumnsIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5">
    <rect x="3" y="3" width="7" height="18" rx="1" />
    <rect x="14" y="3" width="7" height="18" rx="1" />
  </svg>
)

// Filter Icon (filter_list style from Figma)
const FilterIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5">
    <path d="M4 6h16M6 12h12M9 18h6" strokeLinecap="round"/>
  </svg>
)

// Collapse Sidebar Icon (first_page - double chevron)
const CollapseIcon = () => (
  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-nav)">
    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
  </svg>
)

// View Icon (eye)
const ViewIcon = ({ disabled = false }: { disabled?: boolean }) => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke={disabled ? "var(--cm-icon-disabled)" : "var(--cm-icon-action)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

// Print Icon
const PrintIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9V2h12v7"/>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
    <rect x="6" y="14" width="12" height="8"/>
  </svg>
)

// Add/Plus Icon (for "Add to Current Appeal Batch")
const AddBatchIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M12 8v8M8 12h8"/>
  </svg>
)

// Check/Eligibility Icon (for "Check Eligibility")
const CheckEligibilityIcon = ({ disabled = false }: { disabled?: boolean }) => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke={disabled ? "var(--cm-icon-disabled)" : "var(--cm-icon-action)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
)

// Revalue Icon (calculator/dollar style)
const RevalueIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

// Customize View Icon (settings/grid style)
const CustomizeViewIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-icon-action)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
  </svg>
)

// ============================================
// SUBCOMPONENTS
// ============================================

// Navigation Item Component
const NavItem = ({ 
  label, 
  hasChevron = false 
}: { 
  label: string
  hasChevron?: boolean
}) => (
  <div 
    className="flex items-center justify-between"
    style={{ 
      padding: '3.5px 5px',
      borderRadius: '2px',
      margin: '0 2px'
    }}
  >
    <div className="flex items-center" style={{ gap: '4px' }}>
      <span 
        style={{ 
          fontFamily: 'var(--font-roboto), system-ui, sans-serif',
          fontSize: '6px',
          fontWeight: 500,
          color: 'var(--cm-text)',
          lineHeight: '8px'
        }}
      >
        {label}
      </span>
    </div>
    {hasChevron && <ChevronDownIcon size={5} />}
  </div>
)

// KPI Card Component
const KPICard = ({ 
  label, 
  value, 
  trend, 
  trendUp, 
  trendPositive = true,
  isNegativeValue = false 
}: { 
  label: string
  value: string
  trend: string
  trendUp: boolean
  trendPositive?: boolean
  isNegativeValue?: boolean
}) => (
  <div className="flex flex-col items-start" style={{ gap: '1px' }}>
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '6px',
        fontWeight: 500,
        color: 'var(--cm-text-muted)',
        lineHeight: '8px'
      }}
    >
      {label}
    </span>
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '8px',
        fontWeight: 600,
        color: isNegativeValue ? 'var(--cm-red)' : 'var(--cm-text)',
        lineHeight: '10px'
      }}
    >
      {value}
    </span>
    <div className="flex items-center" style={{ gap: '1px' }}>
      {trendUp ? (
        <ArrowUpIcon color={trendPositive ? "var(--cm-green)" : "var(--cm-red)"} />
      ) : (
        <ArrowDownIcon color={trendPositive ? "var(--cm-green)" : "var(--cm-red)"} />
      )}
      <span 
        style={{ 
          fontFamily: 'var(--font-roboto), system-ui, sans-serif',
          fontSize: '5.5px',
          fontWeight: 500,
          color: trendPositive ? 'var(--cm-green)' : 'var(--cm-red)',
          lineHeight: '8px'
        }}
      >
        {trend}
      </span>
      <span 
        style={{ 
          fontFamily: 'var(--font-roboto), system-ui, sans-serif',
          fontSize: '5.5px',
          fontWeight: 500,
          color: 'var(--cm-text-muted)',
          lineHeight: '8px',
          marginLeft: '1px'
        }}
      >
        from last month
      </span>
    </div>
  </div>
)

// Tertiary Button Component - matches Figma spec (20px icon, 14px text, 8px gap)
// Scaled down: 5.5px icon, 4px text, 2px gap - icon and text same height for alignment
const TertiaryButton = ({ icon, label, disabled = false }: { icon: React.ReactNode; label: string; disabled?: boolean }) => (
  <div 
    className="flex items-center"
    style={{ 
      gap: '2.5px', 
      padding: '2px 5px',
      opacity: disabled ? 0.6 : 1
    }}
  >
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '7px', 
      height: '7px', 
      flexShrink: 0,
      lineHeight: 0
    }}>
      {icon}
    </div>
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '5px',
        fontWeight: 500,
        color: disabled ? 'var(--cm-icon-disabled)' : 'var(--cm-blue-primary)',
        lineHeight: '7px',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {label}
    </span>
  </div>
)

// Legacy alias
const ActionButton = TertiaryButton

// Filter Button Component - Blue outlined variant (for action buttons like Columns, Filters)
const ActionFilterButton = ({ icon, label }: { icon?: React.ReactNode; label: string }) => (
  <div 
    className="flex items-center"
    style={{ 
      gap: '2.5px', 
      padding: '2.5px 5.5px',
      border: '0.375px solid var(--cm-blue-border)',
      borderRadius: '2px',
      backgroundColor: 'var(--cm-card-bg)'
    }}
  >
    {icon && (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '7px', 
        height: '7px', 
        flexShrink: 0,
        lineHeight: 0
      }}>
        {icon}
      </div>
    )}
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '5px',
        fontWeight: 500,
        color: 'var(--cm-blue-primary)',
        lineHeight: '7px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {label}
    </span>
  </div>
)

// Dropdown Button Component - Gray bordered variant (for dropdowns like Saved Filters, Group By)
// Matches height of secondary outlined buttons (Columns, Filters)
const DropdownButton = ({ label, width }: { label: string; width?: string }) => (
  <div 
    className="flex items-center justify-between"
    style={{ 
      padding: '2.5px 5.5px',
      border: '0.25px solid var(--cm-border-input)',
      borderRadius: '2px',
      width: width || 'auto',
      gap: '5px',
      backgroundColor: 'var(--cm-card-bg)'
    }}
  >
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '5px',
        fontWeight: 400,
        color: 'var(--cm-text-placeholder)',
        lineHeight: '7px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {label}
    </span>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '7px', 
      height: '7px', 
      flexShrink: 0,
      lineHeight: 0
    }}>
      <ChevronDownIcon color="var(--cm-text-placeholder)" size={5} />
    </div>
  </div>
)

// Gray Dropdown Button Component (for pagination)
const GrayDropdownButton = ({ label }: { label: string }) => (
  <div 
    className="flex items-center"
    style={{ 
      gap: '3px', 
      padding: '2.5px 5px',
      border: '0.5px solid var(--cm-border-input)',
      borderRadius: '2px',
      backgroundColor: 'var(--cm-card-bg)'
    }}
  >
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '5px',
        color: 'var(--cm-text-pagination)',
        lineHeight: '6px'
      }}
    >
      {label}
    </span>
    <ChevronDownIcon color="var(--cm-text-muted)" size={5} />
  </div>
)

// Filter Button Component (legacy - for Monthly dropdown)
const FilterButton = ({ icon, label, hasDropdown = false, bordered = false }: { icon?: React.ReactNode; label: string; hasDropdown?: boolean; bordered?: boolean }) => (
  <div 
    className="flex items-center justify-between"
    style={{ 
      padding: '2.5px 5.5px',
      border: '0.25px solid var(--cm-border-input)',
      borderRadius: '2px',
      minWidth: bordered ? '55px' : 'auto',
      gap: '5px',
      backgroundColor: 'var(--cm-card-bg)'
    }}
  >
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '5px',
        fontWeight: 400,
        color: 'var(--cm-text-placeholder)',
        lineHeight: '7px'
      }}
    >
      {label}
    </span>
    {hasDropdown && <ChevronDownIcon color="var(--cm-text-placeholder)" size={5} />}
  </div>
)

// Table Header Cell
// Filter Icon for table header (small)
const TableFilterIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="var(--cm-table-filter-icon)">
    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
  </svg>
)

// Overflow Menu Icon (3 vertical dots)
const OverflowMenuIcon = () => (
  <svg width="5" height="5" viewBox="0 0 24 24" fill="var(--cm-table-filter-icon)">
    <circle cx="12" cy="5" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="12" cy="19" r="2"/>
  </svg>
)

const TableHeaderCell = ({ children, showDivider = true }: { children: React.ReactNode; showDivider?: boolean }) => (
  <div 
    className="flex items-center justify-between flex-1"
    style={{ padding: '1px 4px', gap: '3px' }}
  >
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), system-ui, sans-serif',
        fontSize: '5.5px',
        fontWeight: 500,
        color: 'var(--cm-text)',
        lineHeight: '7px',
        flex: 1
      }}
    >
      {children}
    </span>
    {/* Right content: filter + overflow icons + divider */}
    <div className="flex items-center" style={{ gap: '3px' }}>
      <TableFilterIcon />
      <OverflowMenuIcon />
      {showDivider && (
        <div 
          style={{ 
            width: '0.5px', 
            height: '6px', 
            backgroundColor: 'var(--cm-divider)',
            borderRadius: '2px',
            marginLeft: '2px'
          }} 
        />
      )}
    </div>
  </div>
)

// Plain text cell style (matching Figma - Roboto Regular 14px, #333)
const cellTextStyle = {
  fontFamily: 'var(--font-roboto), system-ui, sans-serif',
  fontSize: '5.5px',
  fontWeight: 400,
  color: 'var(--cm-text)',
  lineHeight: '7px'
}

// Table Row Component
interface TableRowProps {
  account: string
  status: 'Approved' | 'Pending'
  workflow: 'Approved' | 'Needs Attention'
  patient: string
  charge: string
  allowed: string
  variance: string
  hasAlert?: boolean
}

const TableRow = ({ account, status, workflow, patient, charge, allowed, variance, hasAlert = false }: TableRowProps) => (
  <div 
    className="flex items-center w-full"
    style={{ 
      backgroundColor: 'var(--cm-card-bg)',
      borderBottom: '0.375px solid var(--cm-border)',
      height: '18px',
      minHeight: '18px',
      gap: '4px',
      flexShrink: 0
    }}
  >
    {/* Left Controls - Checkbox + Expand + Alert grouped together */}
    <div 
      className="flex items-center" 
      style={{ 
        gap: '2px',
        padding: '0 4px',
        flexShrink: 0
      }}
    >
      {/* Checkbox */}
      <div className="flex items-center justify-center" style={{ width: '8px', height: '8px' }}>
        <div 
          style={{ 
            width: '5px', 
            height: '5px', 
            border: '0.5px solid var(--cm-checkbox-border)',
            borderRadius: '1px',
            backgroundColor: 'var(--cm-card-bg)'
          }}
        />
      </div>
      {/* Expand Arrow */}
      <div className="flex items-center justify-center" style={{ width: '8px', height: '8px' }}>
        <ChevronDownIcon size={5} />
      </div>
      {/* Alert Indicator */}
      <div className="flex items-center justify-center" style={{ width: '8px', height: '8px' }}>
        {hasAlert && (
          <div 
            style={{ 
              width: '5px', 
              height: '5px', 
              borderRadius: '50%',
              backgroundColor: 'var(--cm-red)'
            }}
          />
        )}
      </div>
    </div>
    {/* Data columns - 7 columns */}
    <div className="flex items-center flex-1" style={{ padding: '1px 3px' }}>
      <span style={cellTextStyle}>{account}</span>
    </div>
    <div className="flex items-center flex-1" style={{ padding: '1px 3px' }}>
      <span style={cellTextStyle}>{status}</span>
    </div>
    <div className="flex items-center flex-1" style={{ padding: '1px 3px', overflow: 'hidden' }}>
      <span style={{ ...cellTextStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', maxWidth: '100%' }}>{workflow}</span>
    </div>
    <div className="flex items-center flex-1" style={{ padding: '1px 3px', overflow: 'hidden' }}>
      <span style={{ ...cellTextStyle, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block', maxWidth: '100%' }}>{patient}</span>
    </div>
    <div className="flex items-center flex-1" style={{ padding: '1px 3px' }}>
      <span style={cellTextStyle}>{charge}</span>
    </div>
    <div className="flex items-center flex-1" style={{ padding: '1px 3px' }}>
      <span style={cellTextStyle}>{allowed}</span>
    </div>
    <div className="flex items-center flex-1" style={{ padding: '1px 3px' }}>
      <span style={cellTextStyle}>{variance}</span>
    </div>
  </div>
)

// ============================================
// MAIN COMPONENT
// ============================================

export default function ContractManagerCover() {
  // Table data - 12 rows for better readability
  const tableData: TableRowProps[] = [
    { account: 'K1L2M3N4O5', status: 'Approved', workflow: 'Approved', patient: 'Imani, Jamison', charge: '$27,345', allowed: '$17,469', variance: '-$9,876', hasAlert: true },
    { account: 'F6G7H8I9J0', status: 'Pending', workflow: 'Needs Attention', patient: 'Aaliyah, Zuri', charge: '$23,456', allowed: '$11,111', variance: '-$12,345' },
    { account: 'A2B3C4D5E6', status: 'Approved', workflow: 'Approved', patient: 'Marcus, Chen', charge: '$18,920', allowed: '$21,370', variance: '$2,450' },
    { account: 'R8S9T0U1V2', status: 'Pending', workflow: 'Needs Attention', patient: 'Sarah, Kim', charge: '$31,200', allowed: '$25,310', variance: '-$5,890' },
    { account: 'W3X4Y5Z6A7', status: 'Approved', workflow: 'Approved', patient: 'David, Patel', charge: '$15,678', allowed: '$16,568', variance: '$890' },
    { account: 'B8C9D0E1F2', status: 'Pending', workflow: 'Needs Attention', patient: 'Emily, Garcia', charge: '$42,100', allowed: '$33,866', variance: '-$8,234' },
    { account: 'G3H4I5J6K7', status: 'Approved', workflow: 'Approved', patient: 'James, Wilson', charge: '$19,500', allowed: '$20,700', variance: '$1,200' },
    { account: 'L8M9N0O1P2', status: 'Pending', workflow: 'Needs Attention', patient: 'Lisa, Taylor', charge: '$28,750', allowed: '$24,250', variance: '-$4,500' },
    { account: 'Q3R4S5T6U7', status: 'Approved', workflow: 'Approved', patient: 'Robert, Lee', charge: '$22,300', allowed: '$25,400', variance: '$3,100' },
    { account: 'V8W9X0Y1Z2', status: 'Pending', workflow: 'Needs Attention', patient: 'Anna, Brown', charge: '$35,600', allowed: '$28,400', variance: '-$7,200' },
    { account: 'C3D4E5F6G7', status: 'Approved', workflow: 'Approved', patient: 'Michael, Davis', charge: '$16,890', allowed: '$17,840', variance: '$950' },
    { account: 'H8I9J0K1L2', status: 'Pending', workflow: 'Needs Attention', patient: 'Jennifer, White', charge: '$29,400', allowed: '$23,300', variance: '-$6,100' },
    { account: 'M2N3O4P5Q6', status: 'Approved', workflow: 'Approved', patient: 'Thomas, Anderson', charge: '$21,450', allowed: '$22,100', variance: '$650' },
    { account: 'R7S8T9U0V1', status: 'Pending', workflow: 'Needs Attention', patient: 'Jessica, Martinez', charge: '$33,200', allowed: '$27,800', variance: '-$5,400', hasAlert: true },
    { account: 'W2X3Y4Z5A6', status: 'Approved', workflow: 'Approved', patient: 'Daniel, Thompson', charge: '$14,780', allowed: '$15,230', variance: '$450' },
    { account: 'B7C8D9E0F1', status: 'Pending', workflow: 'Needs Attention', patient: 'Ashley, Robinson', charge: '$26,900', allowed: '$21,500', variance: '-$5,400' },
    { account: 'G2H3I4J5K6', status: 'Approved', workflow: 'Approved', patient: 'Christopher, Clark', charge: '$19,340', allowed: '$20,890', variance: '$1,550' },
    { account: 'L7M8N9O0P1', status: 'Pending', workflow: 'Needs Attention', patient: 'Amanda, Lewis', charge: '$38,450', allowed: '$31,200', variance: '-$7,250' },
    { account: 'Q2R3S4T5U6', status: 'Approved', workflow: 'Approved', patient: 'Matthew, Walker', charge: '$17,620', allowed: '$18,400', variance: '$780' },
    { account: 'V7W8X9Y0Z1', status: 'Pending', workflow: 'Needs Attention', patient: 'Stephanie, Hall', charge: '$24,890', allowed: '$19,670', variance: '-$5,220' },
    { account: 'A3B4C5D6E7', status: 'Approved', workflow: 'Approved', patient: 'Andrew, Young', charge: '$20,100', allowed: '$21,350', variance: '$1,250' },
    { account: 'F8G9H0I1J2', status: 'Pending', workflow: 'Needs Attention', patient: 'Nicole, King', charge: '$31,780', allowed: '$25,400', variance: '-$6,380', hasAlert: true },
    { account: 'K3L4M5N6O7', status: 'Approved', workflow: 'Approved', patient: 'Joshua, Wright', charge: '$16,540', allowed: '$17,290', variance: '$750' },
    { account: 'P8Q9R0S1T2', status: 'Pending', workflow: 'Needs Attention', patient: 'Elizabeth, Scott', charge: '$27,650', allowed: '$22,180', variance: '-$5,470' },
    { account: 'U3V4W5X6Y7', status: 'Approved', workflow: 'Approved', patient: 'Ryan, Green', charge: '$18,920', allowed: '$19,800', variance: '$880' },
  ]

  return (
    <CoverScaler>
        <div 
          className="rounded-[3px] overflow-hidden flex flex-col"
          style={{
            width: '540px',
            height: '384px',
            backgroundColor: 'var(--cm-card-bg)',
            boxShadow: 'var(--cm-card-shadow)'
          }}
        >
        {/* ======================================== */}
        {/* TOP HEADER BAR */}
        {/* ======================================== */}
        <div 
          className="flex flex-col shrink-0"
          style={{
            width: '540px',
            backgroundColor: 'var(--cm-card-bg)',
          }}
        >
          {/* Header Content */}
          <div 
            className="flex items-center justify-between"
            style={{
              height: '24px',
              padding: '0 10px',
            }}
          >
            {/* Left: Logo + Title */}
            <div className="flex items-center" style={{ gap: '4px' }}>
              <ExperianLogo />
              <span 
                style={{ 
                  fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                  fontSize: '6px',
                  fontWeight: 400,
                  color: 'var(--cm-text)',
                  lineHeight: '8px'
                }}
              >
                Contract Manager
              </span>
            </div>
            {/* Right: Icons */}
            <div className="flex items-center" style={{ gap: '5px' }}>
              <SearchIcon />
              <GridIcon />
              <UserAvatarIcon />
            </div>
          </div>
          
          {/* Gradient Border - from magenta to dark blue */}
          <div 
            style={{
              width: '100%',
              height: '0.75px',
              background: 'linear-gradient(90deg, #AF1685 0%, #883B92 33%, #426DA9 66%, #1D4F91 100%)'
            }}
          />
        </div>

        {/* ======================================== */}
        {/* MAIN CONTENT AREA */}
        {/* ======================================== */}
        <div className="flex flex-1" style={{ overflow: 'hidden' }}>
          {/* ======================================== */}
          {/* LEFT SIDEBAR */}
          {/* ======================================== */}
          <div 
            className="flex flex-col shrink-0"
            style={{
              width: '75px',
              backgroundColor: 'var(--cm-sidebar-bg)',
              borderRight: '0.5px solid var(--cm-border)',
              height: '100%'
            }}
          >
            {/* Navigation Items - no icons, with more spacing */}
            <div className="flex flex-col" style={{ padding: '2px', paddingTop: '6px', gap: '2px' }}>
              <NavItem label="Dashboard" />
              <NavItem label="My Organization" hasChevron />
              <NavItem label="Operations" hasChevron />
              <NavItem label="Providers" hasChevron />
              <NavItem label="Claims" hasChevron />
              <NavItem label="Contracts" hasChevron />
              <NavItem label="Bundled Services" hasChevron />
              <NavItem label="Reports" hasChevron />
            </div>
            
            {/* Spacer */}
            <div className="flex-1" />
            
            {/* Collapse Sidebar */}
            <div 
              className="flex items-center"
              style={{ padding: '5px 4px', borderTop: '0.5px solid var(--cm-border)', gap: '4px' }}
            >
              <CollapseIcon />
              <span 
                style={{ 
                  fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                  fontSize: '6px',
                  fontWeight: 400,
                  color: 'var(--cm-text)',
                  lineHeight: '8px'
                }}
              >
                Collapse Sidebar
              </span>
            </div>
          </div>

          {/* ======================================== */}
          {/* MAIN CONTENT */}
          {/* ======================================== */}
          <div 
            className="flex flex-col flex-1"
            style={{ padding: '8px 12px', gap: '6px' }}
          >
            {/* ======================================== */}
            {/* KPI CARDS SECTION */}
            {/* ======================================== */}
            <div 
              style={{ 
                padding: '3px 4px',
                borderRadius: '2.5px',
                border: '0.375px solid var(--cm-border)',
                backgroundColor: 'var(--cm-card-bg)'
              }}
            >
              {/* Action Buttons Row */}
              <div 
                className="flex items-center justify-between"
                style={{ marginBottom: '3px' }}
              >
                <div className="flex items-center" style={{ gap: '4px' }}>
                  <ActionButton icon={<EditIcon />} label="Edit Widget" />
                  <ActionButton icon={<RefreshIcon />} label="Refresh Numbers" />
                  <ActionButton icon={<HelpIcon />} label="How to Use" />
                </div>
                <FilterButton label="Monthly" hasDropdown bordered />
              </div>
              
              {/* KPI Cards Row - 5 key metrics, left-aligned content within each card */}
              <div 
                className="flex items-center"
                style={{ gap: '0px' }}
              >
                <div className="flex-1" style={{ padding: '2px 5px' }}>
                  <KPICard label="Total Claims" value="40,394" trend="77%" trendUp={true} trendPositive={true} />
                </div>
                <div style={{ width: '0.5px', backgroundColor: 'var(--cm-divider)', alignSelf: 'stretch' }} />
                <div className="flex-1" style={{ padding: '2px 5px' }}>
                  <KPICard label="Pending Claims" value="15" trend="4%" trendUp={false} trendPositive={false} />
                </div>
                <div style={{ width: '0.5px', backgroundColor: 'var(--cm-divider)', alignSelf: 'stretch' }} />
                <div className="flex-1" style={{ padding: '2px 5px' }}>
                  <KPICard label="Denied Claims" value="86" trend="1%" trendUp={false} trendPositive={false} />
                </div>
                <div style={{ width: '0.5px', backgroundColor: 'var(--cm-divider)', alignSelf: 'stretch' }} />
                <div className="flex-1" style={{ padding: '2px 5px' }}>
                  <KPICard label="Underpaid Claims" value="240" trend="16%" trendUp={true} trendPositive={true} />
                </div>
                <div style={{ width: '0.5px', backgroundColor: 'var(--cm-divider)', alignSelf: 'stretch' }} />
                <div className="flex-1" style={{ padding: '2px 5px' }}>
                  <KPICard label="Total Variance" value="-$1,789" trend="8%" trendUp={true} trendPositive={true} isNegativeValue />
                </div>
              </div>
            </div>

            {/* ======================================== */}
            {/* TABLE CONTROLS */}
            {/* ======================================== */}
            <div className="flex items-center justify-between">
              <div className="flex items-center" style={{ gap: '3.5px' }}>
                <ActionFilterButton icon={<ColumnsIcon />} label="Columns" />
                <ActionFilterButton icon={<FilterIcon />} label="Filters" />
                <DropdownButton label="Saved Filters" width="65px" />
              </div>
              <div className="flex items-center" style={{ gap: '3.5px' }}>
                <DropdownButton label="Group By" width="45px" />
                {/* Search Field - matches dropdown button style */}
                <div 
                  className="flex items-center justify-between"
                  style={{ 
                    padding: '2.5px 5.5px',
                    border: '0.25px solid var(--cm-border-input)',
                    borderRadius: '2px',
                    width: '100px',
                    gap: '5px',
                    backgroundColor: 'var(--cm-card-bg)'
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                      fontSize: '5px',
                      fontWeight: 400,
                      color: 'var(--cm-text-placeholder)',
                      lineHeight: '7px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    Search By Account Number...
                  </span>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '7px', 
                    height: '7px', 
                    flexShrink: 0,
                    lineHeight: 0
                  }}>
                    <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="var(--cm-text-placeholder)" strokeWidth="2">
                      <circle cx="10" cy="10" r="6" />
                      <path d="M14.5 14.5L20 20" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ======================================== */}
            {/* DATA TABLE */}
            {/* ======================================== */}
            <div 
              className="flex-1 overflow-hidden flex flex-col"
              style={{ 
                borderRadius: '2px',
                border: '0.5px solid var(--cm-border-light)',
                backgroundColor: 'var(--cm-card-bg)'
              }}
            >
              {/* Table Dropdown Header - Inside Table */}
              <div 
                className="flex items-center justify-between"
                style={{ 
                  backgroundColor: 'var(--cm-card-bg)',
                  borderBottom: '0.5px solid var(--cm-border-light)',
                  padding: '4px 5px',
                  height: '18px'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                    fontSize: '5px',
                    fontWeight: 700,
                    color: 'var(--cm-text)',
                    lineHeight: '6px'
                  }}
                >
                  Showing 25 of 40,394
                </span>
                <div className="flex items-center" style={{ gap: '5px' }}>
                  <TertiaryButton icon={<ViewIcon disabled />} label="View" disabled />
                  <TertiaryButton icon={<EditIcon disabled />} label="Batch Edit" disabled />
                  <TertiaryButton icon={<PrintIcon />} label="Print" />
                  <TertiaryButton icon={<RefreshIcon />} label="Refresh" />
                  <TertiaryButton icon={<CustomizeViewIcon />} label="Customize View" />
                  <TertiaryButton icon={<AddBatchIcon />} label="Add Batch" />
                  <TertiaryButton icon={<CheckEligibilityIcon disabled />} label="Check Eligibility" disabled />
                </div>
              </div>

              {/* Table Column Headers */}
              <div 
                className="flex items-center w-full"
                style={{ 
                  backgroundColor: 'var(--cm-header-bg)',
                  borderBottom: '0.375px solid var(--cm-border)',
                  height: '16px',
                  gap: '4px'
                }}
              >
                {/* Left Controls - Checkbox + Expand + Spacer grouped together (matches row) */}
                <div 
                  className="flex items-center" 
                  style={{ 
                    gap: '2px',
                    padding: '0 4px',
                    flexShrink: 0
                  }}
                >
                  {/* Checkbox - same as row */}
                  <div className="flex items-center justify-center" style={{ width: '8px', height: '8px' }}>
                    <div 
                      style={{ 
                        width: '5px', 
                        height: '5px', 
                        border: '0.5px solid var(--cm-checkbox-border)',
                        borderRadius: '1px',
                        backgroundColor: 'var(--cm-card-bg)'
                      }}
                    />
                  </div>
                  {/* Expand Arrow - same ChevronDownIcon as row */}
                  <div className="flex items-center justify-center" style={{ width: '8px', height: '8px' }}>
                    <ChevronDownIcon size={5} />
                  </div>
                  {/* Alert Spacer - same width as row alert circle */}
                  <div style={{ width: '8px', height: '8px' }} />
                </div>
                {/* Headers with filter + overflow icons - 7 columns */}
                <TableHeaderCell>Account</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Workflow</TableHeaderCell>
                <TableHeaderCell>Patient</TableHeaderCell>
                <TableHeaderCell>Charge</TableHeaderCell>
                <TableHeaderCell>Allowed</TableHeaderCell>
                <TableHeaderCell showDivider={false}>Variance</TableHeaderCell>
              </div>

              {/* Table Rows */}
              <div 
                className="flex flex-col flex-1"
                style={{ 
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {tableData.map((row, index) => (
                  <TableRow key={index} {...row} />
                ))}
              </div>

              {/* Pagination */}
              <div 
                className="flex items-center"
                style={{ 
                  padding: '4px 5px',
                  borderTop: '0.5px solid var(--cm-border-light)',
                  backgroundColor: 'var(--cm-card-bg)',
                  position: 'relative',
                  zIndex: 10,
                  flexShrink: 0
                }}
              >
                <div className="flex items-center" style={{ gap: '4px' }}>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                      fontSize: '5px',
                      color: 'var(--cm-text-pagination)',
                      lineHeight: '6px'
                    }}
                  >
                    1-25 of 250
                  </span>
                  {/* First page arrow */}
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-pagination-disabled)">
                    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
                  </svg>
                  {/* Previous arrow */}
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-pagination-disabled)">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-roboto), system-ui, sans-serif',
                      fontSize: '5px',
                      color: 'var(--cm-text-pagination)',
                      lineHeight: '6px'
                    }}
                  >
                    Page 1 of 10
                  </span>
                  {/* Next arrow */}
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-pagination)">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                  {/* Last page arrow */}
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="var(--cm-icon-pagination)">
                    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
                  </svg>
                  <GrayDropdownButton label="25 per page" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CoverScaler>
  )
}
