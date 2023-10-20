import { AvatarCreator } from '@readyplayerme/react-avatar-creator'
import axios from 'axios'

const config = {
    clearCache: true,
    bodyType: 'fullbody',
    quickStart: false,
    language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' }

const BACKEND_URL = 'http://localhost:4000/id/create_outfit'

export default function HandleEvents() {
    let userId = null
    let avatarUrl = null

    const handleOnUserSet = (event) => {
        if(event.data.type === "registered"){
            userId = event.data.id
            checkAndSendDataToBackend(userId, avatarUrl)
        }
    }
    const handleOnAvatarExported = (event) => {
        avatarUrl = event.data.avatarUrl
        checkAndSendDataToBackend(userId, avatarUrl)
    }

    const checkAndSendDataToBackend = async (userId, avatarUrl) => {
        if (userId && avatarUrl) {
            const data = {
                data: {
                    userId,
                    avatarUrl,
                }
            }

            try {
                const response = await axios.post(BACKEND_URL, data)
                console.log(response)
            } catch (error) {
                console.error('Error sending data to the server:', error)
            }
        }
    }
    return (
    <>
        <AvatarCreator subdomain="myfirst-mc60l2" config={config} style={style} onUserSet={handleOnUserSet} onAvatarExported={handleOnAvatarExported} />
    </>
    )
}
