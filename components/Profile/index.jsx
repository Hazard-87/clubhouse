import clsx from 'clsx';
import Link from 'next/link';

import { Avatar } from '../Avatar';
import { BackButton } from '../BackButton';
import { Button } from '../Button';

import styles from './Profile.module.scss';

export const Profile = () => {
  return (
    <>
      <Link href="/rooms">
        <BackButton title="Back" href="/rooms" />
      </Link>

      <div className="d-flex  align-items-center">
        <div className="d-flex align-items-center">
          <Avatar src={''} width="100px" height="100px" />
          <div className="d-flex flex-column ml-30 mr-30">
            <h2 className="mt-0 mb-0">{fullname}</h2>
            <h3 className={clsx(styles.username, 'mt-0 mb-0')}>@username</h3>
          </div>
        </div>
        <Button className={styles.followButton} color="blue">
          Follow
        </Button>
      </div>
      <p className={styles.about}>about</p>
    </>
  );
};
