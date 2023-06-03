// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	declare class User {
		id: string;
		name: string;
		email: string;
		projects: Project[];
	}

	declare class Project {
		id: string;
		name: string;
		description: string;
		tasks: Task[];
	}

	declare class Task {
		id: string;
		name: string;
		status: string;
	}
}

export {};
