import { Center, Heading } from '@gluestack-ui/themed'

interface ScreenHeaderProps {
  title: string
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Center bg="$secondary800" pb={6} pt={36}>
      <Heading color="$blueGray100" fontSize="$xl">
        {title}
      </Heading>
    </Center>
  )
}
