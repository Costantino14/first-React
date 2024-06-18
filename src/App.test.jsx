import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import fantasy from './Books/fantasy.json';
import  App from "./App";
import { Book } from "react-bootstrap-icons";


//1o test:

test("Verifico che il componente Welcome venga visualizzato", () => {
  render(<App />);

  //Punto due diversi frase che ho scritto nel componente
  const h1text = screen.getByText(/Benvenuti nella FantaLibreria/i);  
  const testo = screen.getByText(/Eccoci insieme nella prima libreria on-line di mia creazione. Potrete qui sotto vedere le schede dei libri in vendita per categorie:/i);

  //Mi aspetto che entrambe siano presenti
  expect(h1text).toBeInTheDocument();
  expect(testo).toBeInTheDocument();
});

//2o test

test("Verifico vengano renderizzate tutte le card presenti in fantasy", () => {
    render(<App books={fantasy}/>)

    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(fantasy.length); //mi aspetto che l'array cards sia pari alla lunghezza di fantasy.length
  });


//3o test:
//Uso Async xkè prima di fare il test devo aspettare il click e la fetch dei commenti
test('Verifica venga renderizzato il componente CommentArea', async () => {
    render(<App books={fantasy}/>);

    const bookCard = await screen.findAllByTestId("card"); // punto una card usando il data-testid
    fireEvent.click(bookCard[1]); //clicco su una card (potrebbe essere qualunque)

    const commentArea = await screen.findByTestId('comment-area');   // punto un div che ho segnato in commentArea usando il data-testid
    expect(commentArea).toBeInTheDocument(); //mi aspetto che commentArea sia nel document
});


//4o test: 

test('Verifica se funziona la ricerca', async () =>{
  render(<App books={fantasy}/>)
  const search = await screen.findByPlaceholderText('Cerca per titoli:'); //punto il form di ricerca sulla nav
  fireEvent.change(search, { target: { value: 'stile' } }) //faccio inserire la parola stile

  //Da questa ricerca sono sicuro che dovrebbe comparire solo una card/libro quindi:
  const book = await screen.findByText("Stiletto: A Novel (The Rook Files)"); //Punto il titolo del libro 
  const cards = screen.getAllByTestId("card"); //Punto le card
  expect(cards).toHaveLength(1); //Mi aspetto che l'array sia composto da un singolo elemento
  expect(book).toBeInTheDocument(); //Mi aspetto che la card con quel titolo sia presente
});


//5o test: 

test('Verifica cambio di colore del bordo', async () => {
  render(<App books={fantasy}/>);

  const bookCard = await screen.findAllByTestId("card"); //seleziono le card
  fireEvent.click(bookCard[0]) // simulo il click sulla card posizionata all'indice 0


  //verifico che la card che ho cliccato acquisito lo style che ho impostato sul componente SingleBook
  expect(bookCard[0]).toHaveStyle('border: 2px solid red')
});

// 6o test verificare

test('Verifica che il cambiamento al click su un elemento avvenga solo per un elemento', async () => {
  render(<App books={fantasy}/>);

  const bookCard = await screen.findAllByTestId("card"); //seleziono le card
  fireEvent.click(bookCard[0]) // simulo il click sulla card posizionata all'indice 0

  //Faccio 3 verifiche
  expect(bookCard[1]).not.toHaveStyle('border: 2px solid red') //seleziono una card con indice diverso e mi aspetto che non abbia lo style che viene dato solo alla card cliccata
  expect(bookCard[0]).toHaveStyle('border: 2px solid red') // verifico che la card cliccata abbia lo style 2px solid red
  expect(bookCard[1]).toHaveStyle('border: 1px') // verifico che la card diversa abbia lo style alternativo (ossia 1 px)
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

//Per questo test mi serve una piccola premessa: Ho selezionato un specifico libro, ma qualora non funzionasse il motivo è sicuramente perchè sono stati cancellati tutti i commenti da questo libro

test("verifico che cliccando su di un libro con recensioni, esse vengano caricate", async () => {

  render(<App />);

  const bookCard = await screen.findByText("Edge of Eternity"); //questa card ha un paio di commenti che ho scritto io
  fireEvent.click(bookCard); //Clicco questa card

  const commenti = await waitFor(() => screen.findAllByTestId("commento")); // Aspetto che si carichi la fetch e cerco data-testid

  expect(commenti.length).toBeGreaterThan(0); //Mi aspetto che venga caricato almeno più di un commento
});