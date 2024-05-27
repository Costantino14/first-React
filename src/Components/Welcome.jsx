import React from 'react';
import Alert from 'react-bootstrap/Alert';


export default function Welcome() {
  return (
    <>
        <h1>Benvenuti nella FantaLibreria</h1>
        <Alert variant="success">
            <Alert.Heading>Hey, ben ritrovati amanti del libro!</Alert.Heading>
            <p>
                Eccoci insieme nella prima libreria on-line di mia creazione. Potrete qui sotto vedere le schede dei libri in vendita:
            </p>
        </Alert>
    </>
  )
}
