import { Avatar } from '../Avatar';

import styles from './ConversationCard.module.scss';
import whiteBlockStyles from '../WhiteBlock/WhiteBlock.module.scss';
import clsx from 'clsx';

export const ConversationCard = () => {
  return (
    <div className={clsx(whiteBlockStyles.block, styles.card, 'mb-30')}>
      <h4 className={styles.title}>title</h4>
      <div className={clsx('d-flex mt-10', styles.content)}>
        <div className={styles.avatars}>
          <Avatar
            width="45px"
            height="45px"
            src={''}
            className={'lastAvatar'}
          />
        </div>
        <div className={clsx(styles.info, 'ml-10')}>
          <ul className={styles.users}>
            <li >
              name <img src="/static/cloud.png" alt="Cloud" width={14} height={14} />
            </li>
          </ul>
          <ul className={styles.details}>
            <li>
              guestsCount <img src="/static/user.svg" alt="Users count" width={12} height={12} />
            </li>
            <li>
              speakersCount              <img
                className="ml-5"
                src="/static/message.svg"
                alt="Users count"
                width={12}
                height={12}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
