export default function (meilisearchConfig, index) {
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
            const client = new window.MeiliSearch(meilisearchConfig);

            this.index = client.index(index);
            this.watchQuery()
        }
    };
}
