<template>
	<li class="px-3 py-1 text-base rounded-md" :class="[category.id === getCurrentCategory ? 'text-purple-600 border-b border-purple-600' : 'text-gray-500']">
		<button @click="selectCategory(category.id)">
			{{ category.label }}
		</button>
	</li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	props: ['category'],
	name: 'Filters',
	methods: {
		...mapActions(['selectCategory'])
	},
	computed: {
		...mapGetters(['getCurrentCategory'])
	}
};
</script>
