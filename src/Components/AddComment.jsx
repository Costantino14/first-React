import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import SingleComment from './SingleComment';

export default function AddComment({comments}) {

  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [inputRate, setInputRate] = useState();

  const handleAddItem = () => {
    const newItem = { 
      comment: inputValue,
      rate: inputRate,
      elementId: `${comments[0].elementId}`};


    // POST all'API per aggiungere il nuovo elemento
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTcyMzE1MDYsImV4cCI6MTcxODQ0MTEwNn0.cCxiQ6_mCk-VCPkpVkXwQnt7vampB5hHTXY43ZoJRkg',
     
        "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
      },
      body: JSON.stringify(newItem), // Convertiamo il nuovo oggetto elemento in una stringa JSON
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((data) => setItems([...items, data])) // Aggiorniamo la lista degli elementi con il nuovo elemento

    // Resettiamo il valore dell'input
    setInputValue("");
    setInputRate();
  };

  return (
    <>
      <SingleComment comments={items} />
      <Row>
        <Col>
          <Form.Control 
          style={{ width: '18rem'}} 
          type="text" 
          placeholder='Lascia un commento...'
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          />
          <Form.Select 
            className="mt-2" 
            style={{ width: '18rem'}} 
            aria-label="Default select example"
            value={inputRate}
            onChange={(e) => setInputRate(e.target.value)}>
            <option>Inserisci Voto...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Button className="mt-2" type="submit" onClick={handleAddItem}>Inserisci</Button>
        </Col>
      </Row>
    </>
  )
}
