import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";
export const DEFAULT_VOLUME = 0.7;
export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

const song = (
	id: number,
	title: string,
	artist: string,
	coverFile: string,
	duration = 200,
): Song => ({
	id,
	title,
	artist,
	cover: `/assets/music/cover/${coverFile}`,
	url: `/assets/music/url/${title}.mp3`,
	duration,
});

export const LOCAL_PLAYLIST: Song[] = [
	song(1, "把回忆拼好给你", "王贰浪", "把回忆拼好给你.jpg", 240),
	song(2, "斑马斑马", "宋冬野", "斑马斑马.jpg", 180),
	song(3, "不要说话", "陈奕迅", "不要说话.png"),
	song(4, "程艾影", "赵雷", "程艾影.jpg"),
	song(5, "朵", "赵雷", "朵.jpg"),
	song(6, "房间", "刘瑞琦", "房间.jpg"),
	song(7, "富士山下", "陈奕迅", "富士山下.png"),
	song(8, "孤独患者", "陈奕迅", "孤独患者.jpg"),
	song(9, "怪咖", "薛之谦", "怪咖.png"),
	song(10, "南方姑娘", "赵雷", "南方姑娘.jpg"),
	song(11, "十面埋伏", "陈奕迅", "十面埋伏.png"),
	song(12, "我只能离开", "颜人中", "我只能离开.png"),
	song(13, "下一个天亮", "郭静", "下一个天亮.png"),
	song(14, "像风一样", "薛之谦", "像风一样.jpg"),
	song(15, "最初的记忆", "徐佳莹", "最初的记忆.jpg"),
	song(16, "CruelSummer", "Taylor Swift", "CruelSummer.png"),
	song(17, "exile", "Taylor Swift", "exile.png"),
	song(18, "OneLastKiss", "宇多田ヒカル", "OneLastKiss.jpg"),
	song(19, "WhoSays", "Selena Gomez", "WhoSays.jpg"),
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: DEFAULT_COVER_URL,
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";
export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
