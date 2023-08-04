import { render } from '@testing-library/react';
import BoxList from './BoxList';

it("renders without crashing", 
  function(){
    render(<BoxList/>);
    });

it("matches the snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot()
});