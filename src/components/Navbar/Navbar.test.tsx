import * as ReactDOM from 'react-dom';
import Navbar from "./Navbar";
describe("Navbar component test", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Navbar/>, container)
  });

  afterEach(()=> {
      document.body.removeChild(container);
      container.remove();
  })

  it('Renders correctly', ()=> {
      const anchor = container.querySelectorAll("a");
      expect(anchor).toHaveLength(3);
      expect(anchor[1].innerHTML).toEqual('Home')
  })
});
