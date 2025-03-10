import React from 'react';
import Link from 'next/link';

interface ArrowCircleLeftProps {
  size?: number;
  color?: string;
}

 const ArrowCircleLeft: React.FC<ArrowCircleLeftProps> = ({
  size = 100,
  color = 'green',
}) => (
  <Link  href={'/'}>
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className=" ml-[1px] mr-auto"
  >
    {/* Circle */}
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke={color}
      strokeWidth="5"
      fill="none"
    />
    {/* Arrow */}
    <line
      x1="30"
      y1="50"
      x2="70"
      y2="50"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
    />
    <line
      x1="50"
      y1="30"
      x2="30"
      y2="50"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
    />
    <line
      x1="50"
      y1="70"
      x2="30"
      y2="50"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
  </Link>
);

export default ArrowCircleLeft;
