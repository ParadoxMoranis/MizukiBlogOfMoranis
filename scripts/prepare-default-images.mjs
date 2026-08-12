import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicAssets = resolve(projectRoot, "public", "assets");
const mirroredAssets = resolve(
	projectRoot,
	"src",
	"assets",
	"public",
	"assets",
);

const bannerFiles = {
	"desktop-banner": [
		"1.webp",
		"2.webp",
		"3.webp",
		"4.webp",
		"5.webp",
		"6.webp",
		"neo-theme.png",
	],
	"mobile-banner": [
		"1.webp",
		"2.webp",
		"3.webp",
		"4.webp",
		"5.webp",
		"6.webp",
	],
};

for (const [directory, files] of Object.entries(bannerFiles)) {
	const targetDirectory = resolve(mirroredAssets, directory);
	await mkdir(targetDirectory, { recursive: true });
	for (const file of files) {
		await cp(
			resolve(publicAssets, directory, file),
			resolve(targetDirectory, file),
		);
	}
}

console.log("Prepared mirrored banner assets.");
