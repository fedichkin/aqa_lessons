import { fetchWithPromises } from './promises.js';
import { fetchWithAsyncAwait } from './async-await.js';
import { fetchWithFallback } from './try-catch.js';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts/1';
const FALLBACK_URL = 'https://jsonplaceholder.typicode.com/posts/2';
const BAD_URL = 'https://this-service-does-not-exist.invalid/api';

async function callAll() {
    console.log('--------------------PROMISE----------------------------');
    await fetchWithPromises(POST_URL);

    console.log('--------------------ASYNC AWAIT----------------------------');
    await fetchWithAsyncAwait(POST_URL);

    console.log('--------------------TRY CATCH----------------------------');
    await fetchWithFallback(BAD_URL, FALLBACK_URL).catch((error) =>
        console.error(`[try-catch] Caught error: ${error.message}`)
    );
}

callAll();
