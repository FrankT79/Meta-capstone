import { afterEach, beforeEach, describe, expect, test, vi, it } from 'vitest'
import { fireEvent, getByLabelText, getByTestId, render, screen, waitFor,  } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'

import Card from './Card';



describe("Card", () => {
    it("should render properly", () => {
      render( <BrowserRouter>
        <Card />
      </BrowserRouter>);

      const linkElement = screen.getByText(/Specials/i);
      expect(linkElement).toBeInTheDocument();

    });
  });
