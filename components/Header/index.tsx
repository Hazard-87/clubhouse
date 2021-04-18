import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Avatar} from '../Avatar';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className="container d-flex align-items-center justify-content-between">
                <Link href="/rooms">
                    <a>
                        <div className={clsx(styles.headerLogo, 'd-flex align-items-center')}>
                            <img src="/static/hand-wave.png" alt="Logo" className="mr-5"/>
                            <h4>Clubhouse</h4>
                        </div>
                    </a>
                </Link>
                <Link href="/profile/1">
                    <div className="d-flex align-items-center cup">
                        <b className="mr-5">Petrushkin Dmitriy</b>
                        <Avatar
                            src="http://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"
                            width="50px"
                            height="50px"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};
