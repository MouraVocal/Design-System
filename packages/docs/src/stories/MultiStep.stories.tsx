import { Meta, StoryObj } from '@storybook/react'
import { MultiStep, IMultiStepProps, Box } from '@moura-vocal/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<IMultiStepProps>

export const Primary: StoryObj<IMultiStepProps> = {}

export const Full: StoryObj<IMultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
