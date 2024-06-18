import React from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';


export default function Welcome({setType}) {
  return (
    <>
      <h1>Benvenuti nella FantaLibreria</h1>
      <Alert variant="success">
        <Alert.Heading>Hey, ben ritrovati amanti del libro!</Alert.Heading>
        <p>
          Eccoci insieme nella prima libreria on-line di mia creazione. Potrete qui sotto vedere le schede dei libri in vendita per categorie:
        </p>
      </Alert>

      {/*I bottoni modificano il type che farà cambiare la props di AllTheBook in App.js*/}
      <Button className='m-2' variant='dark' onClick={() => setType('history')}>Storico</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('fantasy')}>Fantasia</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('horror')}>Horror</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('romance')}>Romantico</Button>
      <Button className='m-2' variant='dark' onClick={() => setType('scifi')}>scifi</Button>
    </>
  )
}
