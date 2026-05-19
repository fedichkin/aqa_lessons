class BadResponseError extends Error {
    constructor(status, url) {
        super(`Server returned ${status} for ${url}`);
        this.name = 'BadResponseError';
        this.status = status;
    }
}

async function fetchChecked(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new BadResponseError(response.status, response.url);
    }

    return response;
}

async function fetchWithFallback(primaryUrl, fallbackUrl) {
    let response;

    try {
        response = await fetchChecked(primaryUrl);
        console.log('[try-catch] Primary request succeeded');
    } catch {
        console.log(`[try-catch] Primary request failed, falling back to: ${fallbackUrl}`);
        response = await fetchChecked(fallbackUrl);
    }

    const post = await response.json();
    console.log(`[try-catch] id: ${post.id} | title: ${post.title}`);
    return post;
}

export { fetchWithFallback };
