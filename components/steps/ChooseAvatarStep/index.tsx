import React from 'react';
import clsx from 'clsx';

import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';
import { Avatar } from '../../Avatar';
import { MainContext } from '../../../pages';

import styles from './ChooseAvatarStep.module.scss';

export const ChooseAvatarStep: React.FC = () => {
  const { onNextStep } = React.useContext(MainContext);
  const inputFileRef = React.useRef(null);
  const [avatarUrl, setAvatarUrl] = React.useState<string>(
    'http://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg',
  );

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleChangeImage);
    }
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title="Okay, Petrushkin Dmitriy!"
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src={avatarUrl} />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={inputFileRef} type="file" hidden />
        <Button onClick={onNextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
