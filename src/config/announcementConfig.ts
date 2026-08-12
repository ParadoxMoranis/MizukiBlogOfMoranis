import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "Announcement",
	content: "CCSwitch命令有变动，涉及CCS的文章暂未更新，请仔细核对",
	closable: false,
	link: {
		enable: false,
		text: "Learn More", // 链接文本
		url: "/about/", // 链接 URL
		external: false, // 内部链接
	},
};
