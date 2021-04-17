import React from 'react';

import { WhiteBlock } from '../WhiteBlock/index';
import { Button } from '../Button/index';

import styles from './WelcomeStep.module.scss';

export const WelcomeStep = () => {
  return (
    <WhiteBlock className={styles.block}>
      <h3 className={styles.title}>
        <img className={styles.handWaveImg} src="/static/hand-wave.png" alt="Celebration" />
        Welcome to Clubhouse!
      </h3>
      <p>
        We’re working hard to get Clubhouse ready for everyone! While we wrap up the finishing
        youches, we’re adding people gradually to make sure nothing breaks.
      </p>
      <div>
        <Button>
          Get your username
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </div>
      <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
    </WhiteBlock>
  );
};
