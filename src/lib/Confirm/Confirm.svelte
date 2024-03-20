<script lang="ts">
	import Button from '$lib/Button/Button.svelte';

	export let title: string = '';
	export let message: string = '';
	export let night: boolean = false;
	export let disabled: boolean = false;
</script>

<div class={['comp-confirm', night ? 'night' : '', disabled ? 'disabled' : ''].join(' ')}>
	<div class="title"><h2>{title}</h2></div>
	<div class="message">{message}</div>
	<div class="buttons">
		<Button label="OK" size="medium"></Button>
		<Button label="CANCEL" size="medium" mode="tertiary"></Button>
	</div>
</div>

<style>
	.comp-confirm {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background-color: white;
		border-radius: 0.4rem;
		box-shadow: 1px 1px;
		padding: 1rem 0.4rem;
		width: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.buttons {
		margin-top: 1rem;
	}
</style>
