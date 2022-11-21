import ftsImage from "../../../assets/TRVSTR.jpg";

type Service = 
    | "spotify"
    | "amazonMusic"
    | "appleMusic"
    | "youtube"
    | "bandcamp"
    | "itunes"
    | "soundcloud"
    | "amazonStream"
    | "deezer"
    | "tidal"
    | "beatport"
    | "pandora"
    | "youtubeMusic"
    | "tiktok";

interface Link {
    service: Service,
    url: string,
    action: "Stream" | "Buy" | "Play" | "Download" | "Use",
}

interface LinkInfo {
    name: string,
    img: any,
    links: Link[]
}

export const links: Record<string, LinkInfo> = {
    "fts": {
        name: "Face the Sun",
        img: ftsImage,
       
        links: [
            {
                service: "spotify",
                url: "https://play.spotify.com",
                action: "Stream",
            },
            {
                service: "amazonMusic",
                url: "https://www.amazon.com",
                action: "Stream",
            },
            {
                service: "appleMusic",
                url: "https://www.apple.com",
                action: "Stream",
            },
            {
                service: "youtube",
                url: "https://www.youtube.com",
                action: "Play",
            },
            {
                service: "bandcamp",
                url: "https://www.bandcamp.com",
                action: "Buy",
            },
            {
                service: "itunes",
                url: "https://www.itunes.com",
                action: "Download",
            },
            {
                service: "soundcloud",
                url: "https://www.soundcloud.com",
                action: "Stream",
            },
            {
                service: "amazonStream",
                url: "https://www.amazon.com",
                action: "Buy",
            },
            {
                service: "deezer",
                url: "https://www.deezer.com",
                action: "Stream",
            },
            {
                service: "tidal",
                url: "https://www.tidal.com",
                action: "Stream",
            },
            {
                service: "beatport",
                url: "https://www.beatport.com",
                action: "Play",
            },
            {
                service: "pandora",
                url: "https://www.pandora.com",
                action: "Stream",
            },
            {
                service: "youtubeMusic",
                url: "https://www.youtube.com",
                action: "Stream",
            },
            {
                service: "tiktok",
                url: "https://www.tiktok.com",
                action: "Use",
            },
        ],
    },
};

export const serviceToImage: Record<Service, string> = {
    "spotify": "https://services.linkfire.com/logo_spotify_onlight.svg",
    "amazonMusic": "https://services.linkfire.com/logo_amazonmusic_onlight.svg",
    "appleMusic": "https://services.linkfire.com/logo_applemusic_onlight.svg",
    "youtube": "https://services.linkfire.com/logo_youtube_onlight.svg",
    "bandcamp": "https://services.linkfire.com/logo_bandcamp_onlight.svg",
    "itunes": "https://services.linkfire.com/logo_itunes_onlight.svg",
    "soundcloud": "https://services.linkfire.com/logo_soundcloud_onlight.svg",
    "amazonStream": "https://services.linkfire.com/logo_amazon_onlight.svg",
    "deezer": "https://services.linkfire.com/logo_deezer_onlight.svg",
    "tidal": "https://services.linkfire.com/logo_tidal_onlight.svg",
    "beatport": "https://services.linkfire.com/logo_beatport_onlight.svg",
    "pandora": "https://services.linkfire.com/logo_pandora_onlight.svg",
    "youtubeMusic": "https://services.linkfire.com/logo_youtubemusic_onlight.svg",
    "tiktok": "https://services.linkfire.com/logo_tiktokusemysound_onlight.svg",
};
