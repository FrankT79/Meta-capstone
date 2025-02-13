import { afterEach, beforeEach, describe, expect, test, vi, it } from 'vitest'
import { fireEvent, getByLabelText, getByTestId, render, screen, waitFor,  } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'

import Home from "./Home";



describe("Home", () => {
    it("should render properly", () => {
      render( <BrowserRouter>
        <Home />
      </BrowserRouter>);

  waitFor(() => expect(getByText("About")).toBeInTheDocument());


    });
  });

