export class ChannelStatistics {
    /**
     * @param {number} viewCount
     * @param {number} subscriberCount
     * @param {boolean} hiddenSubscriberCount
     * @param {number} videoCount
     */
    constructor(viewCount, subscriberCount, hiddenSubscriberCount, videoCount) {
        this.viewCount = viewCount;
        this.subscriberCount = subscriberCount;
        this.hiddenSubscriberCount = hiddenSubscriberCount;
        this.videoCount = videoCount;
    }
}

export class ChannelSnippet {
    /**
     * @param {string} title
     * @param {string} description
     * @param {string} customUrl
     * @param {string} publishedAt
     * @param {string} defaultLanguage
     * @param {string} country
     */
    constructor(title, description, customUrl, publishedAt, defaultLanguage, country) {
        this.title = title;
        this.description = description;
        this.customUrl = customUrl;
        this.publishedAt = publishedAt;
        this.defaultLanguage = defaultLanguage;
        this.country = country;
    }
}

export class RelatedPlaylists {
    /**
     * @param {string} likes
     * @param {string} favorites
     * @param {string} uploads
     */
    constructor(likes, favorites, uploads) {
        this.likes = likes;
        this.favorites = favorites;
        this.uploads = uploads;
    }
}

export class ChannelContentDetails {
    /**
     * @param {RelatedPlaylists} relatedPlaylists
     */
    constructor(relatedPlaylists) {
        this.relatedPlaylists = relatedPlaylists;
    }
}

export class Channel {
    /**
     * @param {string} kind
     * @param {string} etag
     * @param {string} id
     * @param {ChannelSnippet} snippet
     * @param {ChannelStatistics} statistics
     * @param {ChannelContentDetails } contentDetails
    */
   constructor(kind, etag, id, snippet, statistics, contentDetails) {
       this.kind = kind;
        this.etag = etag;
        this.id = id;
        this.snippet = snippet;
        this.statistics = statistics;
        this.contentDetails = contentDetails;
    }
}


export class ResourceId {
    /**
     * @param {string} kind
     * @param {string} videoId
     */
    constructor(kind, videoId) {
        this.kind = kind;
        this.videoId = videoId;
    }
}

export class PlaylistItemSnippet {
    /**
     * @param {string} publishedAt
     * @param {string} channelId
     * @param {string} title
     * @param {string} description
     * @param {string} channelTitle
     * @param {string} videoOwnerChannelTitle
     * @param {string} videoOwnerChannelId
     * @param {string} playlistId
     * @param {number} position
     * @param {ResourceId} resourceId
     */
    constructor(publishedAt, channelId, title, description, channelTitle, videoOwnerChannelTitle, videoOwnerChannelId, playlistId, position, resourceId) {
        this.publishedAt = publishedAt;
        this.channelId = channelId;
        this.title = title;
        this.description = description;
        this.channelTitle = channelTitle;
        this.videoOwnerChannelTitle = videoOwnerChannelTitle;
        this.videoOwnerChannelId = videoOwnerChannelId;
        this.playlistId = playlistId;
        this.position = position;
        this.resourceId = resourceId;
    }
}


export class PlaylistItem {
    /**
     * @param {string} kind
     * @param {string} etag
     * @param {string} id
     * @param {PlaylistItemSnippet} snippet
     */
    constructor(kind, etag, id, snippet, contentDetails, status) {
        this.kind = kind;
        this.etag = etag;
        this.id = id;
        this.snippet = snippet;
    }
}
