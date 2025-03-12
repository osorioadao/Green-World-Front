import React from 'react'

  interface SkeletonProps {
    width?: string | number,
    height?: string | number,
    className?: string
  }

  const Skeleton: React.FC<SkeletonProps> = ({ width, height, className = "" }) => {

    return (
        <div
          className={`bg-gray-300 animate-pulse rounded-md ${className}`}
          style={{ width, height }}
        />
      );

  }


export default Skeleton;
