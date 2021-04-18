import React from "react";
import Link from "next/link";

import {Header} from "../components/Header";
import {Button} from "../components/Button";
import {ConversationCard, ConversationCardProps} from "../components/ConversationCard";
import Axios from '../core/axios'

interface RoomsPageProps {
    data: Array<ConversationCardProps>
}

const RoomsPage: React.FC<RoomsPageProps> = ({data}) => {
    const rooms = data
    // React.useEffect(() => {
    //     (async () => {
    //         const {data} = await Axios.get('/rooms.json')
    //         if (data.length) {
    //             setRooms(data)
    //         }
    //     })()
    // }, [])

    return (
        <>
            <Header/>
            <div className={'container'}>
                <div className='mt-40 d-flex align-items-center justify-content-between'>
                    <h1>All conversations</h1>
                    <Button color='green'>+ Start room</Button>
                </div>
                <div className='grid'>
                    {rooms.map((room, index) => (
                        <div key={index}>
                            <Link href={`/rooms/${room.id}`}>
                                <a>
                                    <ConversationCard id={room.id}
                                                      title={room.title}
                                                      guests={room.guests}
                                                      avatars={room.avatars}
                                                      guestsCount={room.guestsCount}
                                                      speakersCount={room.speakersCount}/>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RoomsPage;


export const getServerSideProps = async () => {
    try {
        const {data} = await Axios.get('/rooms.json')

        return {
            props: {data}
        }
    } catch (e) {
        return {
            props: []
        }
    }
}