import { showVideos, showChannelData, readHandle } from "./view.js";
import { getVideosByPlaylistId, getChannelInformationByHandle, getUploadsPlaylistIdByChannel } from "./youtube.js"


async function processHandle(event) {
    event.preventDefault()
    const handle = readHandle()
    const channel = await getChannelInformationByHandle(handle)
    showChannelData(channel)
    const uploadsPlaylistId = getUploadsPlaylistIdByChannel(channel)
    const videos = await getVideosByPlaylistId(uploadsPlaylistId)
    showVideos(videos)
}

const startUp = () =>  document.getElementById('channel-form')
                               .addEventListener('submit', processHandle);

window.onload = startUp