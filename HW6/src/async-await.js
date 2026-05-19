function displayPost(post) {
    console.log(`[async-await] id: ${post.id} | title: ${post.title}`);
    console.log(`[async-await] body: ${post.body}`);
}

async function fetchWithAsyncAwait(url) {
    const response = await fetch(url);
    const post = await response.json();
    displayPost(post);
    return post;
}

export { fetchWithAsyncAwait };
