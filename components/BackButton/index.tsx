import React from "react";
import Link from "next/link";

interface BackButtonProps {
    href: string
    title: string
}

export const BackButton: React.FC<BackButtonProps> = ({href, title}) => {
    return (
        <Link href={href}>
            <a>
                <div className="d-flex mb-30">
                    <img src="/static/back-arrow.svg" alt="Back" className='mr-10'/>
                    <h3>{title}</h3>
                </div>
            </a>
        </Link>
    )
}