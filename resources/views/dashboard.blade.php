<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div x-data="window.components.search()"
                     class="bg-white border-b border-gray-200"
                >
                    <x-input x-model="query" id="query" class="block border-none w-full" type="search" name="query"
                             placeholder="Search for something..."
                    />

                    <template x-if="results">
                        <div class="py-2 px-3 border-b border-gray-200 italic">
                            Found <span x-text="results.nbHits"></span> results
                        </div>
                    </template>

                    <template x-if="results">
                        <template x-for="hit in results.hits">
                            <a href="#" class="block py-2 px-3 border-b border-gray-200">
                                <h1 x-text="hit.title"></h1>
                            </a>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
