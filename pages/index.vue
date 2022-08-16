<template>
	<main class="container px-8 mx-auto mt-8">
		<ul class="flex flex-wrap gap-3 mt-8 mb-4">
			<Filters v-for="item in getCategories" :key="item.id" :category="item" />
		</ul>
		<div v-if="getProducts(getCurrentCategory).length === 0" class="text-gray-300">Aucun articles à afficher.</div>
		<div v-else class="grid grid-cols-3 gap-5">
			<div  v-for="item in getProducts(getCurrentCategory)" :key="item.id"><ProductCard :product="item" /></div>	
		</div>
	</main>
</template>

<script>

import { mapGetters } from 'vuex';

import Filters from '@/components/Home/Filters.vue';
import ProductCard from '@/components/Home/ProductCard.vue';

export default {
	name: 'Home',
	components: {
		Filters,
		ProductCard,
	},
	computed: {
		...mapGetters(['getProducts', 'getCategories', 'getCurrentCategory'])
	},
	mounted() {
		this.$store.dispatch('updateLikedFromLocalStorage');
	}
};
</script>
