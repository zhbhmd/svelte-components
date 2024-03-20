<script lang="ts">
	export let label: string = '';
	export let mode: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let disabled: boolean = false;
</script>

<button {disabled} class={['comp-button', `comp-button-${size}`, `comp-button-${mode}`].join(' ')}>
	{label}
</button>

<style>
	.comp-button {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		border: none;
		border-radius: 0.4rem;
		cursor: pointer;
	}

	.comp-button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}

	.comp-button-primary {
		background-color: blueviolet;
		color: white;
	}

	.comp-button-secondary {
		background-color: brown;
		color: white;
	}

	.comp-button-tertiary {
		background-color: gray;
		color: white;
	}

	.comp-button-small {
		font-size: 0.8rem;
		padding: 0.4rem 1.6rem;
	}

	.comp-button-medium {
		font-size: 0.9rem;
		padding: 0.6rem 1.8rem;
	}

	.comp-button-large {
		font-size: 1rem;
		padding: 0.8rem 2rem;
	}
</style>
