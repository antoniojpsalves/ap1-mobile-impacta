import { config } from '@gluestack-ui/config'
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

interface ButtonCalcularTime extends TouchableOpacityProps {
  label: string
}

export function ButtonCalculateTime({ label, ...rest }: ButtonCalcularTime) {
  const colors = config.tokens.colors

  return (
    <TouchableOpacity
      {...rest}
      style={{
        backgroundColor: colors.indigo600,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 40,
      }}
    >
      <Text
        style={{
          color: colors.textDark200,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
