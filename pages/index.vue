<template>
	<main class="container px-8 mx-auto my-8">
		<ul class="flex gap-3 mt-8 mb-4">
			<div class="flex overflow-x-auto w-96">
				<Filters v-for="item in getCategories" :key="item.id" :category="item" />
			</div>
		</ul>
		<div v-if="getProducts(getCurrentCategory).length === 0" class="text-gray-300">No item</div>
		<div v-else class="gap-5 sm:grid sm:grid-cols-3">
			<div v-for="item in getProducts(getCurrentCategory)" :key="item.id"><ProductCard :product="item" /></div>	
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
