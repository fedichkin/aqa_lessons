function fetchWithPromises(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((post) => {
            displayPost(post);
            return post;
        });
}

function displayPost(post) {
    console.log(`[promises] id: ${post.id} | title: ${post.title}`);
    console.log(`[promises] body: ${post.body}`);
}

export { fetchWithPromises };
