import {
  Center,
  CircleIcon,
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  VStack,
} from '@gluestack-ui/themed'
import { ScreenHeader } from '../components/ScreenHeader'

import { useState } from 'react'
import { ButtonCalculateTime } from '../components/ButtonCalculateTime'
import { CardAposentadoria } from '../components/CardAposentadoria'

export function Retirement() {
  const [values, setValues] = useState('man')
  const [tempo, setTempo] = useState('')
  const [idade, setIdade] = useState('')

  const [porIdade, setPorIdade] = useState(0)
  const [porContr, setPorContr] = useState(0)
  const [tmpRes, setTmpRes] = useState(0)

  function calcularTempo() {
    // const [anos, meses] = tempo.split('.')
    const contAnos = parseFloat(tempo) ?? 0
    // const contMeses = parseInt(meses) ?? 0
    const idadeAtual = parseInt(idade) ?? 0

    const gen = values

    return gen === 'man'
      ? calculateMan(idadeAtual, contAnos)
      : calculateWoman(idadeAtual, contAnos)
  }

  function calculateMan(idade: number, tempo: number) {
    const anoAtual = 2024
    const diferencaDeIdade = 63 - idade
    const tempoRestante = 35 - tempo

    // console.log({
    //   calculandoPara: 'homem',
    //   anoQueSeAposentariaPorIdade: anoAtual + diferencaDeIdade,
    //   anoQueSeaposentadoriaPorContr: anoAtual + tempoRestante,
    //   quantoTempoFalta: tempoRestante,
    // })

    setPorIdade(anoAtual + diferencaDeIdade)
    setPorContr(anoAtual + tempoRestante)
    setTmpRes(tempoRestante)
  }

  function calculateWoman(idade: number, tempo: number) {
    const anoAtual = 2024
    const diferencaDeIdade = 58 - idade
    const tempoRestante = 30 - tempo

    // console.log({
    //   calculandoPara: 'mulher',
    //   anoQueSeAposentariaPorIdade: anoAtual + diferencaDeIdade,
    //   anoQueSeaposentadoriaPorContr: anoAtual + tempoRestante,
    //   quantoTempoFalta: tempoRestante,
    // })

    setPorIdade(anoAtual + diferencaDeIdade)
    setPorContr(anoAtual + tempoRestante)
    setTmpRes(tempoRestante)
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Calcule sua aposentadoria" />
      <VStack gap={24} alignItems="center" justifyContent="center">
        <Heading color="$blueGray100">Informe os dados abaixo</Heading>

        <RadioGroup
          value={values}
          onChange={setValues}
          w="$full"
          paddingHorizontal={20}
        >
          <VStack space="sm">
            <Radio value="man">
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel style={values === 'man' && { color: 'white' }}>
                Homen
              </RadioLabel>
            </Radio>
            <Radio value="woman">
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel style={values === 'woman' && { color: 'white' }}>
                Mulher
              </RadioLabel>
            </Radio>
          </VStack>
        </RadioGroup>
        <FormControl minWidth="$80">
          <FormControlLabel>
            <FormControlLabelText color="$blueGray100">
              Informe sua ideade atual
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="text"
              keyboardType="number-pad"
              color="$blueGray100"
              onChangeText={setIdade}
              value={idade}
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Informe os anos e separe os meses por .
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        <FormControl minWidth="$80">
          <FormControlLabel>
            <FormControlLabelText color="$blueGray100">
              Tempo de contibuição
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="text"
              keyboardType="number-pad"
              color="$blueGray100"
              onChangeText={setTempo}
              value={tempo}
            />
          </Input>
          <FormControlHelper>
            <FormControlHelperText>
              Informe os anos e separe os meses por .
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
        <Center>
          <ButtonCalculateTime label="Calcular tempo" onPress={calcularTempo} />
        </Center>

        {tmpRes !== 0 && (
          <CardAposentadoria
            anoQueSeAposentariaPorIdade={porIdade}
            anoQueSeaposentadoriaPorContr={porContr}
            quantoFaltaContribuir={tmpRes}
            gender={values}
          />
        )}
      </VStack>
    </VStack>
  )
}
