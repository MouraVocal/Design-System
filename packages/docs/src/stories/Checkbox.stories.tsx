import { Box, Checkbox, ICheckboxProps, Text } from '@mouravocal/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <>
          <Box as="label" css={{ display: 'flex', gap: '$2' }}>
            {Story()}
            <Text>Accept Terms</Text>
          </Box>
        </>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<ICheckboxProps> = {}
