import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct url link', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${id}`);
    console.log(component.debug());
  });

  it('should get <img> to have correct src and alt', () => {
    const expectedImg = 'image.jpg';
    const expectedAlt = 'description';
    const component = shallow(<TripSummary image={expectedImg} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedImg);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    console.log(component.debug());
  });

  // it('renders correct classNames', () => {
  //   const mockVariants = 'small dummy';
  //   const component = shallow(<TripSummary titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
  //   expect(component.hasClass('component')).toBe(true);
  //   expect(component.hasClass('small')).toBe(true);
  //   expect(component.hasClass('dummy')).toBe(true);
  // });

  // it('should throw error without required props', () => {
  //   expect (() => shallow(<TripSummary />)).toThrow();
  // });
});