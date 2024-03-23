import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Text } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

export function ButtomGenPass({ ...rest }: TouchableOpacityProps) {
  const colors = config.tokens.colors

  return (
    <TouchableOpacity
      {...rest}
      style={{
        backgroundColor: colors.primary400,
        borderRadius: 32,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        width: '60%',
      }}
    >
      <Text color="$blueGray100" fontSize="$2xl">
        Gerar senha
      </Text>
    </TouchableOpacity>
  )
}
