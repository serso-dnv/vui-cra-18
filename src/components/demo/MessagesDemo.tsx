import { Message, v } from '@veracity/vui'

const message = 'Lorem impsum'
const longMessage = Array(10).fill(message).join('.')
const variants = ['info', 'warning', 'error', 'success']

export const MessagesDemo = () => (
  <v.div>
    {variants.map(variant => (
      <Message key={variant} mt={2} text={`${message}: ${variant}`} variant={variant as any} />
    ))}
    {variants.map(variant => (
      <Message key={variant} mt={2} text={`${longMessage}: ${variant}`} variant={variant as any} />
    ))}
  </v.div>
)
