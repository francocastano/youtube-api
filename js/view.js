import { numberWithCommas } from "./utils.js";
import { Channel, PlaylistItem } from "./youtube/models.js";

/**
 * @returns {string} 
 */
export function readHandle() {
    const channelInput = document.getElementById('channel-input')

    if (!channelInput || !(channelInput instanceof HTMLInputElement)) {
        throw new Error("Missing channel-input object or is not an input tag");
    }

    return channelInput.value
}

/**
 * @param {PlaylistItem[]} videos 
*/
export function showVideos(videos) {
    const videoContainer = document.getElementById('video-container')

    if (!videoContainer) {
        throw new Error("Missing video-container object");
    }

    if (!videos.length) {
        videoContainer.innerHTML = 'No Uploaded Videos';
        return
    }
    let output = '<br><h4 class="center-align">Latest Videos</h4>';

    videos.forEach(video => {
        const videoId = video.snippet.resourceId.videoId;

        output += `
            <div class="col s6">
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            `;
    });

    videoContainer.innerHTML = output;
}

/**
 * @param {Channel} channel 
 */
export function showChannelData(channel) {
    const statistics = channel.statistics
    const description = channel.snippet.description
    const output = `
        <ul class="collection">
            <li class="collection-item">Title: ${channel.snippet.title}</li>
            <li class="collection-item">Subscribers: ${numberWithCommas(statistics.subscriberCount)}</li>
            <li class="collection-item">Views: ${numberWithCommas(statistics.viewCount)}</li>
            <li class="collection-item">Videos: ${numberWithCommas(statistics.videoCount)}</li>
        </ul>
        <p>${description}</p>
        <hr>
        <a href="https://youtube.com/${channel.snippet.customUrl}" class="btn grey darken-2">Visit Channel</a>
        `
    const channelData = document.getElementById('channel-data');

    if (!channelData) {
        throw new Error("Missing channel-data object");
    }

    channelData.innerHTML = output;
    channelData.style.display = 'block'
}