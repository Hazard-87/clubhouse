import React from 'react';
import clsx from 'clsx';

import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { MainContext } from '../../../pages';

import styles from './EnterNameStep.module.scss';

export const EnterNameStep = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const { onNextStep } = React.useContext(MainContext);

  const nextStepDisabled = !inputValue;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onClickNextStep = () => {
    onNextStep();
  };

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input
            className="field"
            placeholder="Enter fullname"
            onChange={handleChangeInput}
            value={inputValue}
          />
        </div>
        <Button disabled={nextStepDisabled} onClick={onClickNextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
