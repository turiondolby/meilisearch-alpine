export default function () {
    return {
        query: '',
        index: null,
        results: null,

        watchQuery() {
            this.$watch('query', (query) => {
                if (query === '') {
                    this.results = null;
                    return;
                }

                this.search(query);
            });
        },

        async search(query) {
            this.results = await this.index.search(query, {});
        },

        init() {
            const client = new window.MeiliSearch({
                host: 'http://127.0.0.1:7700'
            });

            this.index = client.index('articles');
            this.watchQuery()
        }
    };
}
