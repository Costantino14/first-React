import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import fantasy from './Books/fantasy.json';
import  App from "./App";
import { Book } from "react-bootstrap-icons";


//2o test

test("Verifico vengano renderizzate tutte le card presenti in fantasy", () => {
    render(<App books={fantasy}/>)

    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(fantasy.length);
  });


//3o test:
test('renders CommentArea component', async () => {
    render(<App books={fantasy}/>);

    const bookCard = await screen.findAllByTestId("card");
    fireEvent.click(bookCard[1]);

    const commentArea = await screen.findByTestId('comment-area');  
    expect(commentArea).toBeInTheDocument();
});

//4o test: ***
test('Verifica se funziona la ricerca', async () =>{
  render(<App books={fantasy}/>)
  const search = await screen.findByPlaceholderText('Cerca per titoli:');
  fireEvent.change(search, { target: { value: 'stile' } })

  const book = await screen.findByText("Stiletto: A Novel (The Rook Files)");
  expect(book).toBeInTheDocument();
});


//5o test: verificare

test('Verifica cambio di colore del bordo', async () => {
  render(<App books={fantasy}/>);

  const bookCard = await screen.findAllByTestId("card");
  fireEvent.click(bookCard[0])
  
  expect(bookCard[0]).toHaveStyle('border: 2px solid red')
});

// 6o test verificare

test('Verifica che il cambiamento al click su un elemento avvenga solo per un elemento', async () => {
  render(<App books={fantasy}/>);

  const bookCard = await screen.findAllByTestId("card");
  fireEvent.click(bookCard[0])

  expect(bookCard[1]).not.toHaveStyle('border: 2px solid red')
  expect(bookCard[0]).toHaveStyle('border: 2px solid red')
  expect(bookCard[1]).toHaveStyle('border: 1px')
});



// 7o test
test('Verifico che non ci siano istanze di SingleComment quando avvio la pagina ', () => {
  render(<App />);

  //faccio un doppio controllo: 
  const commento = screen.queryAllByTestId("commento"); //primo controllo sul data-testid dei commenti.
  const textRate = screen.queryAllByText(/voto/i); //secondo controllo sul testo dei commenti.
 
  //Rilascia 2 array e mi aspetto che siano vuoti, visto che non dovrebbero vedersi all'avvio.

  expect(textRate.length).toBe(0);
  expect(commento.length).toBe(0);
});

//8o test

test("verifico che cliccando su di un libro con recensioni, esse vengano caricate", async () => {

  render(<App />);

  const bookCard = await screen.findByText("Edge of Eternity");
  fireEvent.click(bookCard);

  const commenti = await waitFor(() => screen.findAllByTestId("commento"));

  expect(commenti.length).toBeGreaterThan(0);
});