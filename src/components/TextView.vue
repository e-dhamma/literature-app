<template>
	<v-container>
		<v-layout>
			<v-flex>
				<h1>{{ title }}</h1>
				<h3>{{ author }}, tlk {{ translator }}</h3>
				<div><p>{{ content }}</p></div>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  computed: {
		title () {
			return 'Pealkiri'
		},
		author () {
			return 'Teose Autor'
		},
		translator () {
			return 'Tolkija Nimi'
		},
		content () {
			return 'Siin on sisu.'
		}
  }
}
</script>
