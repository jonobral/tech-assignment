import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Button from '../components/Button/Button';

describe('Button Component', () => {

  it('renders Selected Button component', () => {
    const wrapper = rtl.render(
      <Button color="red" isSelected />
    );

    const button = wrapper.getByTestId('buttonId');
    expect(button).toBeTruthy();
    expect(button).toHaveStyle('background-color: red');
    expect(button).toHaveClass('Button-selected')
  });

  it('renders Button component', () => {
    const wrapper = rtl.render(
      <Button color="green" />
    );

    const button = wrapper.getByTestId('buttonId');
    expect(button).toBeTruthy();
    expect(button).toHaveStyle('background-color: green');
    expect(button).not.toHaveClass('Button-selected');
  });

});