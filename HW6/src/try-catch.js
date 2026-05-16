class BadResponseError extends Error {
    constructor(status, url) {
        super(`Server returned ${status} for ${url}`);
        this.name = 'BadResponseError';
        this.status = status;
    }
}

async function fetchWithFallback(primaryUrl, fallbackUrl) {
    let response;

    try {
        response = await fetch(primaryUrl);
        console.log('[try-catch] Primary request succeeded');
    } catch {
        console.log(`[try-catch] Primary request failed, falling back to: ${fallbackUrl}`);
        response = await fetch(fallbackUrl);

        if (!response.ok) {
            throw new BadResponseError(response.status, response.url);
        }
    }

    const post = await response.json();
    console.log(`[try-catch] id: ${post.id} | title: ${post.title}`);
    return post;
}

export { fetchWithFallback };
