import { useState } from 'react'

import {
  Text,
  VStack,
  Divider,
  HStack,
  Heading,
  FlatList,
  Image,
  Center,
} from '@gluestack-ui/themed'

import { ScreenHeader } from '../components/ScreenHeader'
import { ButtomGenPass } from '../components/ButtonGenPass'
import { NewPassItem } from '../components/NewPassItem'

import uuid from 'react-native-uuid'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export function PasswordGen() {
  const [pass, setPass] = useState('')

  const [history, setHistory] = useState<string[]>([])

  function handleCopyNewPassword() {
    // Clipboard.setString(pass)
  }

  function generateNewPass() {
    const generetedPass = uuid.v4().toString().split('-').pop() ?? ''
    setPass(generetedPass)
    setHistory([generetedPass, ...history])
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Gerador de senhas" />
      <VStack gap={24} alignItems="center" px={8}>
        <Text color="$blueGray100" mt={48} textAlign="center" fontSize="$2xl">
          Aperte no botão a baixo para gerar uma senha:
        </Text>
        <ButtomGenPass onPress={generateNewPass} />
        <HStack
          alignItems="center"
          justifyContent="space-between"
          w="$full"
          paddingHorizontal={30}
        >
          <Text fontSize="$lg" color="$blueGray100">
            Senha gerada:
          </Text>
          <NewPassItem text={pass} onLongPress={handleCopyNewPassword} />
        </HStack>
        <Heading size="md" p="$2" pb="$1" color="$blueGray100">
          Histórico
        </Heading>
        <Divider bg="$blueGray300" w="$5/6" alignSelf="center" />

        <FlatList
          data={history}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => {
            const label = String(item)
            return <ItemList title={label} key={label} />
          }}
          ListEmptyComponent={() => <EmptList />}
          showsVerticalScrollIndicator={false}
          w="$full"
          padding={20}
        />
      </VStack>
    </VStack>
  )
}

function EmptList() {
  return (
    <VStack alignItems="center" justifyContent="center" gap={10}>
      <Image
        source={require('../assets/images/Clipboard.png')}
        alt="Ícone de lista vazia"
      />
      <Center>
        <Text>Você ainda não criou nenhuma senha</Text>
        <Text>Inicie seu histórico criando uma nova!</Text>
      </Center>
    </VStack>
  )
}

interface ItemListProps extends TouchableOpacityProps {
  title: string
}
function ItemList({ title, ...rest }: ItemListProps) {
  return (
    <TouchableOpacity {...rest}>
      <VStack
        bgColor="$backgroundDarkInfo"
        p={4}
        pr={4}
        rounded="$md"
        mb={10}
        h={70}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontFamily="$mono"
          fontSize="$2xl"
          textAlign="center"
          color="$textLight200"
        >
          {title}
        </Text>
      </VStack>
    </TouchableOpacity>
  )
}
