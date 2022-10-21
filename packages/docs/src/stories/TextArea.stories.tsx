import { Meta, StoryObj } from '@storybook/react'
import { TextArea, ITextAreaProps, Box, Text } from '@moura-vocal/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <>
          <Box
            as="label"
            css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}
          >
            <Text>Observations</Text>
            {Story()}
          </Box>
        </>
      )
    },
  ],
} as Meta<ITextAreaProps>

export const Primary: StoryObj<ITextAreaProps> = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: StoryObj<ITextAreaProps> = {
  args: {
    disabled: true,
  },
}
