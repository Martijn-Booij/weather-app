import React from 'react'
import clsx from 'clsx'

type CardProps = {
    children?: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('bg-gray-400/30 backdrop-blur-2xl text-white rounded-3xl', className)}>
        { children }
    </div>
  )
}

export default Card