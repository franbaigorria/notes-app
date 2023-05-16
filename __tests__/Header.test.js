const { render, screen } = require("@testing-library/react")
import Header from '../components/Header'

describe('Header', ()=> {
  it.skip('should render',()=>{
  const comp = render(<Header/>);
  const element = screen.getByText('Mis Notas');

  expect(element).toBeInTheDocument();
  })
})