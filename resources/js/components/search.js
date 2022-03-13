export default function () {
    return {
        query: '',

        init() {
            this.$watch('query', function (query) {
                console.log('search', query);
            });
        }
    };
}
