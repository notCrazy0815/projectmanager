const projects: Project[] = [
    {
        name: "Infoprojekt",
        description: "Ein Projekt, welches ich für die Schule machen muss.",
        tasks: [
            {
                name: "Projektidee finden",
                status: "done"
            },
            {
                name: "Projektidee ausarbeiten",
                status: "in_progress"
            },
            {
                name: "Präsentation vorbereiten",
                status: "in_progress"
            },
            {
                name: "Doku schreiben",
                status: "undone"
            },
            {
                name: "Präsentation halten",
                status: "undone"
            }
        ]
    },
    {
        name: "GRW Präsentation",
        description: "GRW Präsentation für die Schule. Abgabe am Dienstag.",
        tasks: [
            {
                name: "Recherche",
                status: "done"
            },
            {
                name: "Präsentation vorbereiten",
                status: "in_progress"
            },
            {
                name: "Handout schreiben",
                status: "in_progress"
            },
            {
                name: "Handout drucken",
                status: "undone"
            }
        ]
    },
    {
        name: "Svelte Crash Course",
        description: "Crash Course von Youtube, zum lernen von Svelte.",
        tasks: [
            {
                name: "Ersten Svelte Code schreiben",
                status: "done"
            },
            {
                name: "Svelte Crash Course schauen",
                status: "in_progress"
            },
            {
                name: "Svelte Crash Course nachprogrammieren",
                status: "in_progress"
            }
        ]
    },
    {
        name: "Haushalt",
        description: "Alltägliche Aufgaben im Haushalt.",
        tasks: [
            {
                name: "Einkaufen",
                status: "done"
            },
            {
                name: "Kochen",
                status: "in_progress"
            },
            {
                name: "Abwaschen",
                status: "in_progress"
            }
        ]
    },
    {
        name: "Deutsch Aufsatz",
        description: "Aufsatz für die Schule, freies Thema.",
        tasks: [
            {
                name: "Thema finden",
                status: "done"
            },
            {
                name: "Aufsatz schreiben",
                status: "in_progress"
            }
        ]
    }
];

export async function GET() {
    return new Response(JSON.stringify(projects), {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    })
}