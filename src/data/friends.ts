// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Mario",
		imgurl: "https://avatars.githubusercontent.com/u/3959555?v=4",
		desc: "An experienced and excellent developer. He is a like-minded friend of mine.",
		siteurl: "https://github.com/Darkiiiiiice",
		tags: ["Developer"],
	},
	{
		id: 2,
		title: "左岚",
		imgurl: "https://avatars.githubusercontent.com/u/87565260?v=4",
		desc: "An outstanding university graduate from the Electronic Information major at Sichuan Normal University, who is also an enthusiastic Bilibili content creator actively sharing experiences.",
		siteurl: "https://github.com/zuoliangyu/",
		tags: ["Developer", "Friend"],
	},
	{
		id: 3,
		title: "asukaminato",
		imgurl: "https://avatars.githubusercontent.com/u/30024051?v=4",
		desc: "An outstanding student from the University of Tokyo, a standout leader in the field of computer science.",
		siteurl: "https://github.com/asukaminato0721",
		tags: ["Developer"],
	},
	{
		id: 4,
		title: "QinTianhao",
		imgurl: "https://avatars.githubusercontent.com/u/135320232?v=4",
		desc: "A graduate student from China University of Mining and Technology, a civil engineering senior with a strong interest in computers.",
		siteurl: "https://github.com/QTH1225",
		tags: ["Developer"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
