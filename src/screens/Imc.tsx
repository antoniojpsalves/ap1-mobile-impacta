import {
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Text,
  VStack,
  FormControl,
  ButtonText,
  Button,
} from '@gluestack-ui/themed'
import { ScreenHeader } from '../components/ScreenHeader'
import { useState } from 'react'
import { StatisticCard } from '../components/StatisticCard'

export function Imc() {
  const [weight, setWeight] = useState('')
  const [tall, setTall] = useState('')

  const [componentImc, setComponentImc] = useState(0)

  function handleCalculateImc() {
    const peso = parseFloat(weight)
    const altura = parseFloat(tall)

    const sqrtTall = altura ** 2

    // formula de imc peso / altura ²
    const imc = peso / sqrtTall

    // console.log({
    //   peso: parseFloat(weight),
    //   altura: parseFloat(tall),
    //   sqrtTall,
    //   imc,
    // })

    setComponentImc(parseFloat(imc.toFixed(2)))
  }

  return (
    <VStack flex={1} w="$full">
      <ScreenHeader title="Calcule seu IMC" />
      <VStack gap={24} alignItems="center" px={8}>
        <Text color="$blueGray100" mt={48} textAlign="center" fontSize="$md">
          Preencha os campos a baixo para descobrir seu imc
        </Text>
        <FormControl minWidth="$80">
          <FormControlLabel>
            <FormControlLabelText color="$blueGray100">
              Seu peso
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="text"
              defaultValue={weight}
              placeholder="Seu peso aqui..."
              onChangeText={setWeight}
              color="$blueGray100"
              keyboardType="number-pad"
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Utilize . não vírgula. Ex: 80.0
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
        <FormControl minWidth="$80">
          <FormControlLabel>
            <FormControlLabelText color="$blueGray100">
              Seu altura
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="text"
              defaultValue={tall}
              placeholder="Sua altura aqui..."
              onChangeText={setTall}
              color="$blueGray100"
              keyboardType="number-pad"
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Utilize . não vírgula. Ex: 1.70
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
        <FormControl>
          <Button bg="$indigo600" onPress={handleCalculateImc}>
            <ButtonText fontSize="$sm" fontWeight="$medium">
              Calcular
            </ButtonText>
          </Button>
        </FormControl>
      </VStack>
      <VStack p={14} alignItems="center" justifyContent="center">
        {componentImc !== 0 && <StatisticCard imc={componentImc} />}
      </VStack>
    </VStack>
  )
}
