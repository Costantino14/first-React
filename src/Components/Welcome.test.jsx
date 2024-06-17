import { render, screen, fireEvent } from "@testing-library/react";
import Welcome from "./Welcome";

test("i titoli vengono visualizzati", () => {
  render(<Welcome />);
  const h1text = screen.getByText(/Benvenuti nella FantaLibreria/i);
  expect(h1text).toBeInTheDocument();
  const testo = screen.getByText(/Eccoci insieme nella prima libreria on-line di mia creazione. Potrete qui sotto vedere le schede dei libri in vendita per categorie:/i);
  expect(testo).toBeInTheDocument();
});