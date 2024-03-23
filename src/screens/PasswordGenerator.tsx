import { useState } from 'react'

import { Text, VStack, Divider } from '@gluestack-ui/themed'

import { ScreenHeader } from '../components/ScreenHeader'
import { ButtomGenPass } from '../components/ButtonGenPass'
import { NewPassItem } from '../components/NewPassItem'

export function PasswordGen() {
  const [pass, setPass] = useState('')

  function handleCopyNewPassword() {
    // Clipboard.setString(pass)
  }

  function generateNewPass() {
    setPass('Aoba')
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Gerador de senhas" />
      <VStack gap={19}>
        <Text color="$blueGray100" mt={48} textAlign="center" fontSize="$2xl">
          Aperte no botão a baixo para gerar uma senha:
        </Text>
        <ButtomGenPass onPress={generateNewPass} />
        <NewPassItem text={pass} onLongPress={handleCopyNewPassword} />
        <Divider />
      </VStack>
    </VStack>
  )
}
