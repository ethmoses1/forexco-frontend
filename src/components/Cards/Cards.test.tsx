import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DisplayTitle from "./DisplayTitle";

describe("Navbar component test", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });
  const post= {
    id: '123',
    title: 'john',
    body: 'this is body',
    authorname: 'name',
    authorcountry: 'country',
    catagoryname: 'name again',
    image: 'image',
    cover: 'cover image',
    username: 'user1',
    createdAt: '123'
  }

  it("DisplayCard Renders correctly", () => {

    act(() => {
      render(<DisplayTitle post={post}/>, container);
    });
    expect(container.textContent).toContain("By");
  });
  
});
