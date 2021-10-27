function createAnalytics() {
    let counter = 0;
    let destroyed = false;

    const listener = () => counter++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            destroyed = true;
        },

        getClick() {
            if (!isDestroyed) {
                return counter;
            }
            return `Analytics is destroyed. Total click = ${counter}`;
        }
    }
}

window.analytics = createAnalytics();