const BASE_URL = 'https://api.hnpwa.com/v0';

export async function fetchStories(page = 1) {
    try {
        const resp = await fetch(`${BASE_URL}/news/${page}.json`);
        if (resp.ok) {
            const json = await resp.json();
            return json;
        } else {
            throw new Error(resp.statusText);
        }
    } catch (err) {
        console.error(err);
    }
}

export async function fetchStory(id) {
    try {
        const resp = await fetch(`${BASE_URL}/item/${id}.json`);

        if (resp.ok) {
            const json = await resp.json();
            return json;
        } else {
            throw new Error(resp.statusText);
        }
    } catch (err) {
        console.error(err);
    }
}
