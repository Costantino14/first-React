import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import SingleComment from './SingleComment';

export default function AddComment({asin , add, setAdd}) {

  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [inputRate, setInputRate] = useState();

  const handleAddItem = (e) => {
    const newItem = { 
      comment: inputValue,
      rate: inputRate,
      elementId: asin
    };


    // POST all'API per aggiungere il nuovo elemento
    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTg2Mzk5NjYsImV4cCI6MTcxOTg0OTU2Nn0.ZIa_sp7up3XB3-Q16a-YeygHvWXuaBTBW_TvHkTd-pM',
     
        "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
      },
      body: JSON.stringify(newItem), // Convertiamo il nuovo oggetto elemento in una stringa JSON
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((data) => {setAdd(!add)
        setItems([...items,data])
      }) // Aggiorniamo la lista degli elementi con il nuovo elemento

    // Resettiamo il valore dell'input
    setInputValue("");
  };

  return (
    <>
      <SingleComment comments={items} setComments={setItems}/>
      
      <Row>
        <Col>
          <Form.Control 
          className="mt-2" 
          type="text" 
          placeholder='Lascia un commento...'
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          />
          <Form.Select 
            className="mt-2" 
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
          <Button className="my-2" type="submit" onClick={handleAddItem}>Inserisci</Button>
        </Col>
      </Row>
    </>
  )
}
