// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

const diaryData: DiaryItem[] = [
	{
		id: 1,
		content: "繁英缀枝，春光盈目",
		date: "2025-08-22T11:00:00Z",
		images: ["/images/diary/flower.jpg"],
	},
	{
		id: 2,
		content: "Just take a break and switch up the bettery.",
		date: "2025-09-15T17:30:00Z",
		images: [
			"/images/diary/酒酿豆花.jpg",
			"/images/diary/小店.jpg",
			"/images/diary/熊猫玩偶.jpg",
		],
	},
	{
		id: 3,
		content: "I like this lively little guy, maybe he will bring me good luck.",
		date: "2025-08-22T11:00:00Z",
		images: ["/images/diary/cat1.jpg", "/images/diary/cat2.jpg"],
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
