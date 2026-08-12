export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "linux" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "remote-clipboard",
		title: "Remote Clipboard",
		description:
			"A cross-platform clipboard synchronization tool that connects through the internet.",
		image: "",
		category: "desktop",
		techStack: ["C++", "Qt", "Wayland", "Win32 API", "Socket"],
		status: "completed",
		sourceCode: "https://github.com/ParadoxMoranis/RemoteClipboard",
		startDate: "2024-12-16",
		endDate: "2025-02-20",
		featured: true,
		tags: ["Clipboard", "TCP", "Cross-platform", "Linux", "Lightweight"],
		showImage: false,
	},
	{
		id: "moranis-site",
		title: "Moranis Site",
		description:
			"A source code sharing website covering a broad range of practical examples.",
		image: "",
		category: "web",
		techStack: ["Vue 3", "Next.js", "TypeScript", "Element UI"],
		status: "completed",
		visitUrl: "https://moranis.site",
		sourceCode: "https://github.com/ParadoxMoranis/Toolkit-Moranis",
		startDate: "2023-05-28",
		endDate: "2025-05-13",
		featured: true,
		tags: ["Go Gin", "Vue 3", "TypeScript", "Element UI"],
		showImage: false,
	},
	{
		id: "go-gin-web-guide",
		title: "Go Gin Web Guide",
		description:
			"A practical guide to learning the Gin web framework through examples.",
		image: "",
		category: "web",
		techStack: ["Go", "Gin", "Web"],
		status: "in-progress",
		sourceCode:
			"https://github.com/ParadoxMoranis/Innovation-Competition-for-the-Application-of-Educational-Information-Technology",
		startDate: "2025-09-01",
		endDate: "2025-09-07",
		tags: ["Competition", "Operation and Maintenance"],
		showImage: false,
	},
	{
		id: "competition-guide",
		title:
			"Innovation Competition for the Application of Educational Information Technology",
		description:
			"A learning guide for the Innovation Competition for the Application of Educational Information Technology.",
		image: "",
		category: "other",
		techStack: ["Competition", "Guide"],
		status: "in-progress",
		sourceCode:
			"https://github.com/ParadoxMoranis/Innovation-Competition-for-the-Application-of-Educational-Information-Technology",
		startDate: "2025-09-01",
		tags: ["Competition", "Operation and Maintenance"],
		showImage: false,
	},
];

export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: { completed, inProgress, planned },
	};
};

export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") return projectsData;
	return projectsData.filter((p) => p.category === category);
};

export const getFeaturedProjects = () =>
	projectsData.filter((p) => p.featured);

export const getAllTechStack = () => {
	const techSet = new Set<string>();
	for (const project of projectsData) {
		for (const tech of project.techStack) techSet.add(tech);
	}
	return Array.from(techSet).sort();
};
