// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: 'web' | 'linux' | 'desktop' | 'other';
	techStack: string[];
	status: 'completed' | 'updating' | 'planned';
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: 'RemoteClipboard',
		title: 'Remote Clipboard',
		description: 'A cross-platform clipboard synchronization tool that connects through the internet.',
		image: '',
		category: 'desktop',
		techStack: ['C++', 'Qt', 'wayland', 'win32API', 'socket'],
		status: 'completed',
		sourceCode: 'https://github.com/ParadoxMoranis/RemoteClipboard',
		startDate: '2024-12-16',
		endDate: '2024-02-20',
		featured: true,
		tags: ['Clipboard', 'TCP', 'Cross-platform', 'Linux', 'Lightweight']
	},
	{
		id: 'Source Sharing Website',
		title: 'Moranis Site',
		description: 'Source code sharing website, showing almoist all kinds of source.',
		image: '',
		category: 'web',
		techStack: ['VUE3', 'Next.js', 'TypeScript', 'Element UI'],
		status: 'completed',
		liveDemo: 'https://moranis.site',
		sourceCode: 'https://github.com/ParadoxMoranis/Toolkit-Moranis',
		startDate: '2025-05-13',
		endDate: '2023-5-028',
		featured: true,
		tags: ['Go-gin', 'VUE3', 'TypeScript', 'Element UI']
	},
	// {
	// 	id: 'task-manager-app',
	// 	title: 'Task Manager App',
	// 	description: 'Cross-platform task management application supporting team collaboration and project management.',
	// 	image: '',
	// 	category: 'mobile',
	// 	techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
	// 	status: 'in-progress',
	// 	startDate: '2024-03-01',
	// 	tags: ['Mobile', 'Productivity', 'Team Collaboration']
	// },
	{
		id: 'go gin',
		title: 'Go gin web guide',
		description: 'Learn go gin with my examples.Go gin web guide, a web guide for gin framework.',
		image: '',
		category: 'web',
		techStack: ['Go', 'Gin', 'Web'],
		status: 'updating',
		sourceCode: 'https://github.com/ParadoxMoranis/Innovation-Competition-for-the-Application-of-Educational-Information-Technology',
		startDate: '2025-09-01',
		endDate: '2025-9-07',
		tags: ['competition', 'Operation and Maintenance']
	},
	// {
	// 	id: 'e-commerce-platform',
	// 	title: 'E-commerce Platform',
	// 	description: 'Full-stack e-commerce platform including user management, product management, and order processing features.',
	// 	image: '',
	// 	category: 'web',
	// 	techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
	// 	status: 'planned',
	// 	startDate: '2024-07-01',
	// 	tags: ['E-commerce', 'Full Stack', 'Payment Integration']
	// }
	{
		id: 'competition',
		title: 'Innovation-Competition-for-the-Application-of-Educational-Information-Technology',
		description: 'Learning guide of Innovation Competition for the Application of Educational Information Technology',
		image: '',
		category: 'other',
		techStack: ['Compitition', 'guide'],
		status: 'updating',
		sourceCode: 'https://github.com/ParadoxMoranis/Innovation-Competition-for-the-Application-of-Educational-Information-Technology',
		startDate: '2025-09-01',
		tags: ['competition', 'Operation and Maintenance']
	}
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(p => p.status === 'completed').length;
	const inProgress = projectsData.filter(p => p.status === 'updating').length;
	const planned = projectsData.filter(p => p.status === 'planned').length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned
		}
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === 'all') {
		return projectsData;
	}
	return projectsData.filter(p => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter(p => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach(project => {
		project.techStack.forEach(tech => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};