declare global {
	interface Window {
		translate?: {
			changeLanguage: (language: string) => void;
			service: {
				use: (service: string) => void;
			};
			language: {
				setLocal: (language: string) => void;
				getCurrent: () => string;
				getLocal: () => string;
				translateLocal?: boolean;
			};
			setAutoDiscriminateLocalLanguage: () => void;
			ignore: {
				class: string[];
				tag: string[];
			};
			selectLanguageTag: {
				show: boolean;
				refreshRender?: () => void;
			};
			listener: {
				start: () => void;
			};
			execute: () => void;
			reset?: () => void;
			to: string;
			storage: {
				set: (key: string, value: string) => void;
			};
		};
		loadTranslateScript?: () => Promise<void>;
	}
}

export {};
