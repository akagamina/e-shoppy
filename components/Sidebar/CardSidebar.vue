<template>
	<div :class="active ? '' : 'invisible'" :aria-hidden="!active" class="transition-[visibility] delay-50 fixed inset-0 z-10">
			<Transition name="cart-transition" enter-active-class="translate-x-full" leave-active-class="translate-x-full">
				<aside v-show="active" class="transition-transform duration-50 ease-out w-full h-full bg-black ml-auto text-white py-8 flex flex-col justify-between sm:max-w-[450px]">
					<div class="flex items-center justify-between px-8 pb-8 border-b border-neutral-700">
						<h2 class="text-xl font-bold">Cart</h2>
						<div @click="$emit('toggleCart')" class="cursor-pointer" @keydown.esc="$emit('toggleCart')" id="closeCartPanel">
							<Icon icon="fa-solid fa-minus" />
						</div>
					</div>
					<div class="flex flex-col h-full gap-4 p-8 overflow-scroll">
						<div v-if="getCart.length === 0" class="text-gray-300">No item</div>
						<template v-else>
							<ProductSidebar v-for="product in getCart" :key="product.id" :product="product" />
						</template>
					</div>
					<div class="flex items-center justify-between px-8 pt-8 border-t border-neutral-700">
						<div>Total: {{ getCartTotal.price.toFixed(2) }} €</div>
						<button class="px-4 py-2 rounded-lg bg-neutral-700">Order</button>
					</div>
				</aside>
			</Transition>
		</div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProductSidebar from '@/components/Sidebar/ProductSidebar.vue';

export default {
	name: 'CardSidebar',
	props: ['active'],
	emits: ['toggleCart'],
	components: {
		ProductSidebar
	},
	computed: {
		...mapGetters(['getCart', 'getCartTotal'])
	}
};
</script>
