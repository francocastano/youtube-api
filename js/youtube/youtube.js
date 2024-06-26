import { Channel, PlaylistItem } from "./models.js"

const YOUTUBE_API_KEY = "AIzaSyAn1QCTQt2SuuAu09i56zsE-PUdrqwoyV0"
const YOUTUBE_BASE_URL = "https://youtube.googleapis.com/youtube/v3"


/**
 * @param {string} playlistId 
 * @returns {Promise<PlaylistItem[]>}
 */
export async function getVideosByPlaylistId(playlistId) {
    try {
        const response = await fetch(`${YOUTUBE_BASE_URL}/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`)
        const playlistItemListResponse = await response.json()
        const playlistItems = playlistItemListResponse.items
        return playlistItems
    } catch (error) {
        console.error("Something Failed while Fetching Playlist videos")
        throw error
    }
}


/**
 * @param {string} handle
 * @returns {Promise<Channel>}
 */
export async function getChannelInformationByHandle(handle) {
    try {
        const response = await fetch(`${YOUTUBE_BASE_URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&forHandle=${handle}&key=${YOUTUBE_API_KEY}`)
        const channelListResponse = await response.json()
        const channel = channelListResponse.items[0]
        return channel
    } catch (error) {
        console.error("Something Failed while Fetching Playlist videos")
        throw error
    }
}


/**
 * @param {Channel} channel 
 * @returns {string}
 */
export function getUploadsPlaylistIdByChannel(channel) {
    return channel.contentDetails.relatedPlaylists.uploads
}