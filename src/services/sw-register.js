export function registerSW() {
    const isDev = process.env.NODE_ENV === 'development';

    if ('serviceWorker' in navigator && !isDev) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').then(
                registration => {
                    console.log('ServiceWorker registration was successful ', registration.scope);
                },
                err => {
                    console.log('ServiceWorker registration failed ', err);
                }
            );
        });
    }
}
