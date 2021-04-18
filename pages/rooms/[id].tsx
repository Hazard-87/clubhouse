import React from "react";

import {Header} from "../../components/Header";
import {Room} from "../../components/Room";
import {BackButton} from "../../components/BackButton";
import Axios from "../../core/axios";
import {ConversationCardProps} from "../../components/ConversationCard";

interface RoomPageProps {
    room: Array<ConversationCardProps>
}

const RoomPage: React.FC<RoomPageProps> = ({room}) => {

    return (
        <>
            <Header/>
            <div className='container'>
                <BackButton href={'/rooms'} title={'All rooms'}/>
            </div>
            <Room title={room[0].title}/>
        </>
    )
}

export default RoomPage;

export const getServerSideProps = async ({query}) => {
    try {
        const {data} = await Axios.get('/rooms.json')
        const room = data.filter(item => item.id === query.id)

        return {
           props: {room}
        }
    } catch (e) {
        return {
            props: []
        }
    }
}