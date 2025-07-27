import { Plugin } from "obsidian";

interface ContinuitySettings {
	versionsFolder: string;
	defaultView: "graph" | "list";
	gitAutoCommit: boolean;
	autoRefreshInterval: number;
}

const DEFAULT_SETTINGS: ContinuitySettings = {
	versionsFolder: ".continuity/versions",
	defaultView: "graph",
	gitAutoCommit: true,
	autoRefreshInterval: 100,
};

export default class ContinuityPlugin extends Plugin {
	settings: ContinuitySettings;

	async onload() {
		this.loadSettings();

		this.addCommand({
			id: "create-identity",
			name: "New core identity",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "i" }],
			callback: () => {
				alert("Creating identity...");
			},
		});

		this.addCommand({
			id: "branch-identity",
			name: "New branched identity",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "b" }],
			callback: () => {
				alert("Branching identity...");
			},
		});

		this.addCommand({
			id: "fork-identity",
			name: "New forked identity",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "f" }],
			callback: () => {
				alert("Forking identity...");
			},
		});

		this.addCommand({
			id: "merge-identity",
			name: "Merge identities",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "m" }],
			callback: () => {
				alert("Merging identities...");
			},
		});

		this.addCommand({
			id: "archive-identity",
			name: "Archive identity",
			hotkeys: [{ modifiers: ["Mod", "Shift"], key: "a" }],
			callback: () => {
				alert("Archiving identity...");
			},
		});
	}

	async unload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
