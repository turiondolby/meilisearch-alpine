require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

import search from './components/search';

window.components = {
    search,
};

Alpine.start();

