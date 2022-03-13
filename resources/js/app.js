require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

import { MeiliSearch } from 'meilisearch';
window.MeiliSearch = MeiliSearch;

import search from './components/search';

window.components = {
    search,
};

Alpine.start();

