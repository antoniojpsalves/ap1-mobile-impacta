import { config } from '@gluestack-ui/config'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Text } from '@gluestack-ui/themed'

interface NewPassItemProps extends TouchableOpacityProps {
  text: string
  currentShow?: boolean
}

export function NewPassItem({
  text,
  currentShow = false,
  ...rest
}: NewPassItemProps) {
  const colors = config.tokens.colors

  return (
    <TouchableOpacity
      {...rest}
      style={[
        {
          backgroundColor: colors.coolGray800,
          paddingHorizontal: 20,
          paddingVertical: 14,
          borderRadius: 25,
          minWidth: 120,
        },
        currentShow && { borderWidth: 1, borderColor: colors.indigo700 },
      ]}
    >
      <Text color="$white">{text}</Text>
    </TouchableOpacity>
  )
}
