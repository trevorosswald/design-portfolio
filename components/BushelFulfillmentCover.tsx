'use client'

import React from 'react'
import CoverScaler from './CoverScaler'

// Icon Components
const HamburgerMenuIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--bf-text-muted)">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
)

const HelpIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="var(--bf-text-muted)"/>
  </svg>
)

const GridIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--bf-text-muted)">
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
  </svg>
)

// Scale Tickets icon - grid/table with rectangles
const ScaleTicketIcon = ({ active = false }: { active?: boolean }) => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="1" stroke={active ? "var(--bf-blue)" : "var(--bf-text)"} strokeWidth="2" fill="none"/>
    <rect x="13" y="3" width="8" height="8" rx="1" stroke={active ? "var(--bf-blue)" : "var(--bf-text)"} strokeWidth="2" fill="none"/>
    <rect x="3" y="13" width="8" height="8" rx="1" stroke={active ? "var(--bf-blue)" : "var(--bf-text)"} strokeWidth="2" fill="none"/>
    <rect x="13" y="13" width="8" height="8" rx="1" stroke={active ? "var(--bf-blue)" : "var(--bf-text)"} strokeWidth="2" fill="none"/>
  </svg>
)

// Contracts icon - document/file
const ContractsIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--bf-text)">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
)

// Recipients icon - two people
const RecipientsIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--bf-text)">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
)

// Thresholds icon - gauge/speedometer
const ThresholdsIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--bf-text)">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
)

// Settlements icon - document with dollar
const SettlementsIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--bf-text)">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 9h-2v1h3v2h-1v1h-2v-1H9v-2h1v-1H7v-2h3V8h2v1h2v2z"/>
  </svg>
)

const ChevronDownIcon = ({ color = "var(--bf-text)" }: { color?: string }) => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill={color}>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--bf-green)">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const ErrorCircleIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--bf-red)">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
)

// Bushel Logo - exact SVG from Figma
const BushelLogo = () => (
  <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
    <g clipPath="url(#clip0_bushel)">
      <path d="M7.75606 0H0.493032C0.181428 0 0 0.146245 0 0.43966V6.94639C0 7.91156 0.22996 10.5 4.125 10.5C8.02004 10.5 8.25 7.91156 8.25 6.94639V0.43966C8.25 0.146553 8.08535 0 7.75606 0ZM3.82201 8.07794C2.38261 8.07794 2.38306 6.67241 2.38306 6.67241V5.88311C3.82201 5.88311 3.82201 7.3967 3.82201 7.3967V8.07794ZM3.82201 5.42841C2.38011 5.42841 2.38306 3.82388 2.38306 3.82388V1.64294C3.82201 1.64294 3.82201 3.15676 3.82201 3.15676V5.42841ZM4.40372 3.15653C4.40372 3.15653 4.40372 1.64294 5.84267 1.64294V2.43201C5.84267 2.43201 5.84267 3.83754 4.40372 3.83754V3.15653ZM5.86694 6.65992C5.86694 6.65992 5.86694 8.06567 4.42799 8.06567V5.79379C4.42799 5.79379 4.42799 4.27997 5.86694 4.27997V6.65992Z" fill="#F2BC23"/>
    </g>
    <defs>
      <clipPath id="clip0_bushel">
        <rect width="8.25" height="10.5" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

// Bushel Footer Logo - with Bushel icon and text
const BushelFooterLogo = () => (
  <div className="flex flex-col items-center" style={{ gap: '2px' }}>
    <span 
      className="uppercase"
      style={{ 
        fontFamily: 'var(--font-roboto), sans-serif', 
        fontSize: '4px', 
        fontWeight: 'bold',
        letterSpacing: '0.4px',
        lineHeight: '5px',
        color: 'var(--bf-footer-text)'
      }}
    >
      Powered by
    </span>
    <div className="flex items-center" style={{ gap: '2px' }}>
      <svg width="9" height="11.5" viewBox="0 0 9 11" fill="none">
        <g clipPath="url(#clip0_footer)">
          <path d="M7.75606 0H0.493032C0.181428 0 0 0.146245 0 0.43966V6.94639C0 7.91156 0.22996 10.5 4.125 10.5C8.02004 10.5 8.25 7.91156 8.25 6.94639V0.43966C8.25 0.146553 8.08535 0 7.75606 0ZM3.82201 8.07794C2.38261 8.07794 2.38306 6.67241 2.38306 6.67241V5.88311C3.82201 5.88311 3.82201 7.3967 3.82201 7.3967V8.07794ZM3.82201 5.42841C2.38011 5.42841 2.38306 3.82388 2.38306 3.82388V1.64294C3.82201 1.64294 3.82201 3.15676 3.82201 3.15676V5.42841ZM4.40372 3.15653C4.40372 3.15653 4.40372 1.64294 5.84267 1.64294V2.43201C5.84267 2.43201 5.84267 3.83754 4.40372 3.83754V3.15653ZM5.86694 6.65992C5.86694 6.65992 5.86694 8.06567 4.42799 8.06567V5.79379C4.42799 5.79379 4.42799 4.27997 5.86694 4.27997V6.65992Z" fill="var(--bf-footer-text)"/>
        </g>
        <defs>
          <clipPath id="clip0_footer">
            <rect width="8.25" height="10.5" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <span 
        className="uppercase"
        style={{ 
          fontFamily: 'var(--font-roboto), sans-serif', 
          fontSize: '8px', 
          fontWeight: 'bold',
          letterSpacing: '0.5px',
          lineHeight: '10px',
          color: 'var(--bf-footer-text)'
        }}
      >
        Bushel
      </span>
    </div>
  </div>
)

// Filter Tag Component
const FilterTag = ({ label }: { label: string }) => (
  <div 
    className="flex items-center rounded-full"
    style={{ padding: '1.5px 3px', gap: '1.5px', backgroundColor: 'var(--bf-tag-bg)' }}
  >
    <span 
      style={{ fontFamily: 'var(--font-roboto), sans-serif', fontSize: '6px', lineHeight: '9px', color: 'var(--bf-text)' }}
    >
      {label}
    </span>
    <ChevronDownIcon />
  </div>
)

// Table Header Cell
const TableHeaderCell = ({ children, width }: { children: React.ReactNode; width: string }) => (
  <div 
    className="flex items-center"
    style={{ width, padding: '0 4.5px' }}
  >
    <span 
      className="uppercase"
      style={{ 
        fontFamily: 'var(--font-roboto), sans-serif', 
        fontSize: '4.5px', 
        fontWeight: 'bold',
        letterSpacing: '0.36px',
        lineHeight: '6px',
        color: 'var(--bf-text)'
      }}
    >
      {children}
    </span>
  </div>
)

// Table Data Cell
const TableDataCell = ({ children, width, color }: { children: React.ReactNode; width: string; color?: string }) => (
  <div 
    className="flex items-center"
    style={{ width, padding: '3px 4.5px' }}
  >
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), sans-serif', 
        fontSize: '6px', 
        lineHeight: '9px',
        color: color || 'var(--bf-text)'
      }}
    >
      {children}
    </span>
  </div>
)

// Scale Ticket Row Component
interface TicketRowProps {
  ticketId: string
  status: 'pass' | 'fail'
  commodity: string
  date: string
  time: string
  destination: string
  netUnits: string
  fm: string
  fmError?: boolean
  mo: string
  moError?: boolean
  tw: string
  twError?: boolean
}

const TicketRow = ({ ticketId, status, commodity, date, time, destination, netUnits, fm, fmError, mo, moError, tw, twError }: TicketRowProps) => (
  <div 
    className="flex items-center"
    style={{ 
      width: '420px',
      borderRadius: '3px',
      boxShadow: 'var(--bf-row-shadow)',
      backgroundColor: 'var(--bf-card-bg)',
      border: '1px solid var(--bf-card-outline)'
    }}
  >
    {/* Chevron */}
    <div className="flex items-center justify-center" style={{ width: '18px', padding: '0 3px 0 6px' }}>
      <ChevronDownIcon />
    </div>
    {/* Ticket ID + Status */}
    <div className="flex items-center" style={{ width: '43.5px', padding: '0 4.5px', gap: '3px' }}>
      <span 
        style={{ fontFamily: 'var(--font-roboto), sans-serif', fontSize: '6px', lineHeight: '9px', width: '22.5px', color: 'var(--bf-text)' }}
      >
        {ticketId}
      </span>
      {status === 'pass' ? <CheckCircleIcon /> : <ErrorCircleIcon />}
    </div>
    {/* Commodity */}
    <TableDataCell width="54px">{commodity}</TableDataCell>
    {/* Delivery */}
    <div 
      className="flex flex-col justify-center"
      style={{ width: '43.125px', padding: '3px 4.5px' }}
    >
      <span 
        style={{ fontFamily: 'var(--font-roboto), sans-serif', fontSize: '6px', lineHeight: '9px', color: 'var(--bf-text)' }}
      >
        {date}
      </span>
      <span 
        style={{ fontFamily: 'var(--font-roboto), sans-serif', fontSize: '6px', lineHeight: '9px', color: 'var(--bf-text)' }}
      >
        {time}
      </span>
    </div>
    {/* Destination */}
    <TableDataCell width="78.75px">{destination}</TableDataCell>
    {/* Net Units */}
    <TableDataCell width="52.875px">{netUnits}</TableDataCell>
    {/* FM */}
    <TableDataCell width="41.25px" color={fmError ? "var(--bf-red)" : undefined}>{fm}</TableDataCell>
    {/* MO */}
    <TableDataCell width="41.25px" color={moError ? "var(--bf-red)" : undefined}>{mo}</TableDataCell>
    {/* TW */}
    <TableDataCell width="45px" color={twError ? "var(--bf-red)" : undefined}>{tw}</TableDataCell>
  </div>
)

// Nav Item Component
const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <div 
    className="flex items-center relative"
    style={{ padding: '4px 6px', gap: '6px', width: '90px' }}
  >
    {active && (
      <div 
        className="absolute left-0"
        style={{ width: '2.25px', height: '18px', borderRadius: '0 1px 1px 0', backgroundColor: 'var(--bf-blue)' }}
      />
    )}
    {icon}
    <span 
      style={{ 
        fontFamily: 'var(--font-roboto), sans-serif', 
        fontSize: '6px', 
        lineHeight: '9px',
        color: active ? 'var(--bf-blue)' : 'var(--bf-text)'
      }}
    >
      {label}
    </span>
  </div>
)

// Section Label Component
const SectionLabel = ({ children, isFirst = false }: { children: React.ReactNode; isFirst?: boolean }) => (
  <div style={{ padding: isFirst ? '0px 6px 2px 6px' : '5px 6px 2px 6px', textAlign: 'left' }}>
    <span 
      className="uppercase"
      style={{ 
        fontFamily: 'var(--font-roboto), sans-serif', 
        fontSize: '4.5px', 
        fontWeight: 'bold',
        letterSpacing: '0.36px',
        lineHeight: '6px',
        color: 'var(--bf-text-muted)',
        display: 'block',
        textAlign: 'left'
      }}
    >
      {children}
    </span>
  </div>
)

export default function BushelFulfillmentCover() {
  const tickets: TicketRowProps[] = [
    { ticketId: '044158', status: 'pass', commodity: 'Wheat', date: '09/29/22', time: '3:32 PM', destination: 'Houston Grain Elevator', netUnits: '871.78 bu', fm: '13.2%', mo: '12.5%', tw: '54.2lbs' },
    { ticketId: '044157', status: 'pass', commodity: 'Yellow Corn', date: '09/29/22', time: '2:02 PM', destination: 'Ritchie Grain Elevator', netUnits: '961.23 bu', fm: '13.8%', mo: '12.6%', tw: '55lbs' },
    { ticketId: '044156', status: 'pass', commodity: 'Soybeans', date: '09/25/22', time: '1:26 PM', destination: 'CHS Farmers Elevator', netUnits: '891.26 bu', fm: '12.8%', mo: '12.8%', tw: '54.9lbs' },
    { ticketId: '044155', status: 'pass', commodity: 'Soybeans', date: '09/25/22', time: '1:15 PM', destination: 'M&P Grain Inc', netUnits: '456.78 bu', fm: '13.8%', mo: '12.6%', tw: '55.8lbs' },
    { ticketId: '044154', status: 'fail', commodity: 'Yellow Corn', date: '09/25/22', time: '1:10 PM', destination: 'Granger Farm Products', netUnits: '569.26 bu', fm: '13.5%', mo: '11.2%', tw: '53.2lbs', twError: true },
    { ticketId: '044153', status: 'fail', commodity: 'Wheat', date: '09/24/22', time: '11:05 AM', destination: 'Thrail Cooperative Grain...', netUnits: '865.32 bu', fm: '12.4%', mo: '11.8%', moError: true, tw: '55.9lbs' },
    { ticketId: '044152', status: 'pass', commodity: 'Soybeans', date: '09/24/22', time: '10:46 AM', destination: 'Lone Star Grain', netUnits: '265.23 bu', fm: '13.6%', mo: '12.5%', tw: '56.5lbs' },
    { ticketId: '044151', status: 'pass', commodity: 'Wheat', date: '09/24/22', time: '9:32 AM', destination: 'Prairie Land Co-op', netUnits: '742.15 bu', fm: '12.9%', mo: '12.3%', tw: '54.8lbs' },
    { ticketId: '044150', status: 'pass', commodity: 'Yellow Corn', date: '09/23/22', time: '4:15 PM', destination: 'Heartland Grain Co', netUnits: '823.45 bu', fm: '13.1%', mo: '12.4%', tw: '55.2lbs' },
    { ticketId: '044149', status: 'pass', commodity: 'Soybeans', date: '09/23/22', time: '2:48 PM', destination: 'Central Plains Elevator', netUnits: '678.92 bu', fm: '12.7%', mo: '12.1%', tw: '54.6lbs' },
  ]

  return (
    <CoverScaler>
        <div 
          className="rounded-[3px] overflow-hidden relative flex flex-col"
          style={{
            width: '540px',
            height: '384px',
            boxShadow: 'var(--bf-card-shadow)',
            backgroundColor: 'var(--bf-bg)'
          }}
        >
        {/* Top Navigation */}
        <div 
          className="flex items-center justify-between shrink-0"
          style={{
            width: '540px',
            padding: '6px 12px 6px 4.5px',
            borderBottom: '0.375px solid var(--bf-border)',
            backgroundColor: 'var(--bf-card-bg)'
          }}
        >
          {/* Left: Hamburger Menu + Logo */}
          <div className="flex items-center" style={{ gap: '6px' }}>
            <HamburgerMenuIcon />
            <div className="flex items-center" style={{ gap: '3px' }}>
              <BushelLogo />
              <span 
                style={{ 
                  fontFamily: 'var(--font-montserrat), sans-serif', 
                  fontSize: '7.5px', 
                  fontWeight: 'bold',
                  letterSpacing: '-0.15px',
                  lineHeight: '10.5px',
                  color: 'var(--bf-text)'
                }}
              >
                Fulfillment
              </span>
            </div>
          </div>
          {/* Right: Help + Grid Icons */}
          <div className="flex items-center" style={{ gap: '6px' }}>
            <HelpIcon />
            <GridIcon />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-1">
          {/* Side Navigation */}
          <div 
            className="flex flex-col shrink-0"
            style={{
              width: '90px',
              height: '360px',
              borderRight: '0.375px solid var(--bf-border)',
              backgroundColor: 'var(--bf-sidebar-bg)'
            }}
          >
            {/* Nav Items */}
            <div className="flex flex-col flex-1" style={{ paddingTop: '8px' }}>
              <SectionLabel isFirst>Grain</SectionLabel>
              <NavItem icon={<ScaleTicketIcon active />} label="Scale Tickets" active />
              <NavItem icon={<ContractsIcon />} label="Contracts" />
              
              <SectionLabel>Settings</SectionLabel>
              <NavItem icon={<RecipientsIcon />} label="Recipients" />
              <NavItem icon={<ThresholdsIcon />} label="Thresholds" />
              
              <SectionLabel>Financial</SectionLabel>
              <NavItem icon={<SettlementsIcon />} label="Settlements" />
            </div>
            
            {/* Footer Logo */}
            <div 
              className="flex items-center justify-center"
              style={{ padding: '6px 0 12px 0', backgroundColor: 'var(--bf-sidebar-bg)' }}
            >
              <BushelFooterLogo />
            </div>
          </div>

          {/* Main Content */}
          <div 
            className="flex flex-col flex-1"
            style={{ padding: '12px 18px 18px 12px', gap: '9px' }}
          >
            {/* Filter Header */}
            <div className="flex items-center justify-between" style={{ width: '420px' }}>
              <div className="flex items-center" style={{ gap: '6px' }}>
                <FilterTag label="Commodity" />
                <FilterTag label="Date Range" />
                <FilterTag label="Destination" />
                <FilterTag label="More" />
              </div>
              <div 
                className="flex items-center justify-center"
                style={{
                  padding: '4.5px 6px',
                  borderRadius: '1.5px',
                  fontFamily: 'var(--font-roboto), sans-serif',
                  fontSize: '6px',
                  fontWeight: 600,
                  letterSpacing: '0.06px',
                  lineHeight: '6px',
                  backgroundColor: 'var(--bf-blue)',
                  color: '#ffffff'
                }}
              >
                Edit Thresholds
              </div>
            </div>

            {/* View Summary */}
            <div 
              className="flex items-center"
              style={{
                padding: '4.5px 9px',
                gap: '4.5px',
                borderRadius: '3px',
                boxShadow: 'var(--bf-row-shadow)',
                backgroundColor: 'var(--bf-card-bg)',
                border: '1px solid var(--bf-card-outline)'
              }}
            >
              <ChevronDownIcon />
              <span 
                style={{ 
                  fontFamily: 'var(--font-montserrat), sans-serif', 
                  fontSize: '6.75px', 
                  fontWeight: 'bold',
                  letterSpacing: '-0.135px',
                  lineHeight: '9.75px',
                  color: 'var(--bf-text)'
                }}
              >
                View Summary
              </span>
            </div>

            {/* Scale Tickets Section */}
            <div className="flex flex-col" style={{ gap: '9px' }}>
              {/* Page Header */}
              <div className="flex items-center" style={{ gap: '9px' }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-montserrat), sans-serif', 
                    fontSize: '9px', 
                    fontWeight: 'bold',
                    letterSpacing: '-0.18px',
                    lineHeight: '12px',
                    color: 'var(--bf-text)'
                  }}
                >
                  Scale Tickets
                </span>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-roboto), sans-serif', 
                    fontSize: '4.5px',
                    lineHeight: '6.75px',
                    color: 'var(--bf-text-subtle)'
                  }}
                >
                  Last updated 30 mins ago
                </span>
              </div>

              {/* Table */}
              <div className="flex flex-col" style={{ gap: '3px' }}>
                {/* Table Header */}
                <div className="flex items-center" style={{ height: '15px' }}>
                  <div style={{ width: '18px' }} /> {/* Chevron spacer */}
                  <TableHeaderCell width="43.5px">Tickets</TableHeaderCell>
                  <TableHeaderCell width="54px">Commodity</TableHeaderCell>
                  <TableHeaderCell width="43.125px">Delivery</TableHeaderCell>
                  <TableHeaderCell width="78.75px">Destination</TableHeaderCell>
                  <TableHeaderCell width="52.875px">Net Units</TableHeaderCell>
                  <TableHeaderCell width="41.25px">FM</TableHeaderCell>
                  <TableHeaderCell width="41.25px">MO</TableHeaderCell>
                  <TableHeaderCell width="45px">TW</TableHeaderCell>
                </div>

                {/* Table Rows */}
                <div className="flex flex-col" style={{ gap: '3px' }}>
                  {tickets.map((ticket, index) => (
                    <TicketRow key={index} {...ticket} />
                  ))}
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>
    </CoverScaler>
  )
}
