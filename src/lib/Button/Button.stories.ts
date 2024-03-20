import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';

const meta = {
	title: 'Component/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		},

		mode: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] }
	}
} satisfies Meta<Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Button',
		size: 'medium',
		mode: 'primary'
	}
};
