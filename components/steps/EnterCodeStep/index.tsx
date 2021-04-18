import React from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/router';

import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
import {StepInfo} from '../../StepInfo';
import Axios from '../../../core/axios';

import styles from './EnterPhoneStep.module.scss';

export const EnterCodeStep: React.FC = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [codes, setCodes] = React.useState(['', '', '', '']);
    const nextDisabled = codes.some((v) => !v);

    // создаем стрелочную функцию для события onChange в инпуте
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        // вытаскиваем значение id инпута по атрибуту id и переводим его в число. минусуем 1 и записываем значение в константу index
        const index = Number(event.target.getAttribute('id'));
        // вытаскиваем значение value из инпута и записываем его в констану value
        const value = event.target.value;
        // записываем значение в массив codes
        setCodes((prev) => {
            // создаем новый массив
            const newArr = [...prev];
            // добавляем значение value в массив по номеру индекса index
            newArr[index] = value;
            // возвращаем новый массив
            return newArr;
        });
        //проверяем, есть ли справа в инпуте какой нибудь html элемент
        if (event.target.nextSibling) {
            //если да, то автоматически переводим фокус на следующий инпут
            (event.target.nextSibling as HTMLInputElement).focus();
        }
    };

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            await Axios.get('todos');
            await router.push('/profile/1');
        } catch (e) {
            alert(e.message);
        }
        setCodes(['', '', '', '']);
        setIsLoading(false);
    };

    return (
        <div className={styles.block}>
            {!isLoading ? (
                <>
                    <StepInfo icon="/static/numbers.png" title="Enter your activate code"/>
                    <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                        <div className={clsx('mb-30', styles.codeInput)}>
                            {codes.map((code, index) => (
                                <input
                                    key={index}
                                    type="tel"
                                    placeholder="*"
                                    maxLength={1}
                                    id={String(index)}
                                    onChange={handleChangeInput}
                                    value={code}
                                />
                            ))}
                        </div>
                        <Button onClick={onSubmit} disabled={nextDisabled}>
                            Next
                            <img className="d-ib ml-10" src="/static/arrow.svg"/>
                        </Button>
                    </WhiteBlock>
                </>
            ) : (
                <div className="text-center">
                    <div className="loader"></div>
                    <h3 className="mt-5">Activation in progress ...</h3>
                </div>
            )}
        </div>
    );
};
