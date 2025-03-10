import React from "react";

type PixelMailIconProps = {
  size?: number;
  color?: string;
};

const PixelMailIcon: React.FC<PixelMailIconProps> = ({ size = 10, color = "black" }) => {
  const boxShadow = [
    [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1],
    [1, 2], [2, 2], [11, 2], [12, 2],
    [1, 3], [3, 3], [10, 3], [12, 3],
    [1, 4], [4, 4], [9, 4], [12, 4],
    [1, 5], [5, 5], [8, 5], [12, 5],
    [1, 6], [6, 6], [7, 6], [12, 6],
    [1, 7], [12, 7],
    [1, 8], [12, 8],
    [1, 9], [12, 9],
    [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10],
  ]
    .map(([x, y]) => `${x * size}px ${y * size}px 0 0 ${color}`)
    .join(", ");

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow,
      }}
    />
  );
};

export default PixelMailIcon;