import { showVideos, showChannelData, readHandle } from "./view.js";
import { getVideosByPlaylistId, getChannelInformationByHandle, getUploadsPlaylistIdByChannel } from "./youtube/youtube.js"

/**
 * @param {SubmitEvent} event 
 */
async function processHandle(event) {
    event.preventDefault()
    const handle = readHandle()
    const channel = await getChannelInformationByHandle(handle)
    showChannelData(channel)
    const uploadsPlaylistId = getUploadsPlaylistIdByChannel(channel)
    const videos = await getVideosByPlaylistId(uploadsPlaylistId)
    showVideos(videos)
}

const startUp = () =>  {
    const channelForm = document.getElementById('channel-form')

    if (!channelForm){
        throw new Error("An element with id channel-form must be defined")
    }
    
    channelForm.addEventListener('submit', processHandle);
}

window.onload = startUp
