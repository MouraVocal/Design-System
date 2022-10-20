import { Text, ITextProps } from '@moura-vocal/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, accusamus numquam a nobis enim fugiat repellendus optio eveniet dolorum quas iste, ratione veritatis eos earum magni nesciunt rerum nisi? Ipsa.',
  },
} as Meta<ITextProps>

export const Primary = {} as StoryObj<ITextProps>

export const Strong = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
} as StoryObj<ITextProps>
