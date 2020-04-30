import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Days from "./Days";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Days />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
