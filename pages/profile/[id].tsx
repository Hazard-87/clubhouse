import {useRouter} from 'next/router';
import React from 'react';
import {Profile} from "../../components/Profile";
import {Header} from "../../components/Header";

export default function ProfilePage() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Header/>
            <div className="container">
                <Profile fullname={'Petrushkin Dmitriy'} username={"hazard_87"}
                         avatarUrl={'http://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg'}
                         about={'Я начинающий фронтенд разработчик'}/>
            </div>
        </>
    );
}
