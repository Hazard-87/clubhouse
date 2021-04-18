import React from "react";
import clsx from "clsx";
import Link from "next/link";

import {Avatar} from '../Avatar';
import {Button} from '../Button';

import styles from './Profile.module.scss';

interface ProfileProps {
    fullname: string
    username: string
    avatarUrl: string
    about: string
}

export const Profile: React.FC<ProfileProps> = ({fullname, username, avatarUrl, about}) => {
    return (
        <>
            <Link href="/rooms">
                <a>
                    <div className="d-flex mb-30">
                        <img src="/static/back-arrow.svg" alt="Back" className='mr-10'/>
                        <h3> Back</h3>
                    </div>
                </a>
            </Link>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                    < Avatar
                        src={avatarUrl}
                        width={'100px'} height={'100px'}/>
                    <div className='d-flex flex-column ml-30 mr-30'>
                        <h2 className='mt-0 mb-0'>{fullname}</h2>
                        <h3 className={clsx('mt-0 mb-0', styles.username)}>@{username}</h3>
                    </div>
                </div>
                <Button color={'blue'} className={styles.followButton}>Follow</Button>
            </div>
            <p className={styles.about}>
                {about}
            </p>
        </>
    );
};
