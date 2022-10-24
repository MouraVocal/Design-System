import { Box, ITextInputProps, TextInput, Text } from '@mouravocal/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ITextInputProps>

export const Primary: StoryObj<ITextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<ITextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<ITextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
