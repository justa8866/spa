import React from "react";
import { render } from "@testing-library/react";
import { store } from "../../store/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { ModalProvider } from "../../store/Modal";
import TableModal from "./TableModal";

describe("should render TableModal", () => {
  const arrange = () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <ModalProvider>
              <TableModal />
            </ModalProvider>
          </QueryParamProvider>
        </BrowserRouter>
      </Provider>
    );
  };

  it("throw ModalProvider error", () => {
    expect(() =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
              <TableModal />
            </QueryParamProvider>
          </BrowserRouter>
        </Provider>
      )
    ).toThrow("Please add ModalProvider");
  });
});
