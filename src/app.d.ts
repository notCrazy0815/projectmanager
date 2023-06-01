// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	declare class Project {
		name: string;
		description: string;
		tasks: Task[];
	}

	declare class Task {
		name: string;
		status: string;
	}
}

export {};
