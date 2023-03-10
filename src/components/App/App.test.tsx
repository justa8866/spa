import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from ".";
import { store } from "../../store/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { ModalProvider } from "../../store/Modal";

describe("should render input and table", () => {
  const arrange = () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <ModalProvider>
              <App />
            </ModalProvider>
          </QueryParamProvider>
        </BrowserRouter>
      </Provider>
    );
  };

  it("renders filter input", () => {
    act(() => {
      arrange();
    });

    const inputElement = screen.getByLabelText(/Filter/);
    expect(inputElement).toBeInTheDocument();
  });

  it("renders table", () => {
    act(() => {
      arrange();
    });

    const inputElement = screen.getByLabelText(/Table/);
    expect(inputElement).toBeInTheDocument();
  });
});
