
import React from 'react'
import useGenere, { Genere } from './Hooks/useGenere'
import { Button, HStack, Heading, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../Services/image-url'
import useData from './Hooks/useData'



interface Props {
  onSelectGenere : (genere: Genere) => void;
  selectedGenre : Genere | null
}

const GenereList = ({selectedGenre, onSelectGenere} : Props) => {

    const {Data , isLoading, Error} = useGenere();

    if (Error) return null;
    
    if (isLoading) return <Spinner />

  return (
    <>
    <Heading fontSize='2xl' marginBottom='10px'>Genres</Heading>
    <List>
        {Data.map(genere => <ListItem key={genere.id} paddingY = "5px">
             <HStack>
                <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genere.image_background)} />
                <Button whiteSpace='normal' textAlign='left' fontWeight={genere.id === selectedGenre?.id ? 'Bold' : 'normal' } variant='link' fontSize='lg' onClick={() => onSelectGenere(genere)
                }>{genere.name}</Button>
            </HStack>

             </ListItem>)}
    </List>
    </>
  )
}

export default GenereList