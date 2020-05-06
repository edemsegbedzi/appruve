import App from './App';
import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer'


test('renders component without crashing', () => {
  renderer(<App/>);
});
  

test("should call the fetch api right body", () => {
   const {getByText} =render(<App/>)
   const bronzeButton = getByText(/CHOOSE PLAN/);
   fireEvent(bronzeButton);
   expect(global.fetch).toHaveBeenCalledTimes(1)   

})
