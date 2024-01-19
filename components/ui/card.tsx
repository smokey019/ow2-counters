import React from 'react'

type Props = {
    children: JSX.Element
    className?: string
}

function Card({ children, className }: Props) {
    return (
        <div className={`bg-card p-4 m-4 rounded-lg ${className ? className : null}`}>
            {children}
        </div>
    )
}

export default Card