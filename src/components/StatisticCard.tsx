import { config } from '@gluestack-ui/config'
import { Heading, Text, VStack } from '@gluestack-ui/themed'

interface StatisticProps {
  imc: number
}

export function StatisticCard({ imc }: StatisticProps) {
  const colors = config.tokens.colors

  let color
  let alert

  if (imc <= 18.5) {
    color = colors.tertiary200
    alert = 'Cuidado❗você está a baixo do seu peso ideia.'
  }

  if (imc >= 18.5 && imc <= 24.9) {
    color = colors.tertiary300
    alert = 'Boa, você está dentro do seu peso ideia. 😉'
  }

  if (imc >= 24.9 && imc <= 29.9) {
    color = colors.orange400
    alert = 'Atenção, você está com sobre peso 👁️'
  }

  if (imc >= 30.0 && imc <= 34.9) {
    color = colors.rose500
    alert = 'Atenção, você está com obesidade no primeiro grau 🚨'
  }

  if (imc >= 34.9 && imc <= 39.9) {
    color = colors.rose700
    alert = 'Atenção🚨, você está com obesidade no segundo grau 🚨'
  }

  if (imc >= 40.0) {
    color = colors.rose900
    alert = '🚨Atenção🚨, você está com obesidade no terceiro grau ! 🚨'
  }

  return (
    <VStack bg={color} p={20} rounded="$md">
      <Heading fontSize="$3xl" textAlign="center" mt={10}>
        {imc}
      </Heading>
      <Text textAlign="center" fontSize="$sm" mt={5}>
        {alert}
      </Text>
    </VStack>
  )
}
