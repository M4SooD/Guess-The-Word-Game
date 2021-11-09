/**
 * @jest-environment jsdom
 */
const Button = require('./button.js')

describe('Test Button component',()=>{
    let btn;
    beforeEach(() => {
       btn= new Button('warning','btn1');
      });

    test('return btn id', () => {
        expect(btn.id).toBe('btn1');
      });

    test('Test click event', () => {

     //btn.simulate(btn.addEventListener('click',btn.handleClick()));
      expect(btn.handleClick()).toBe('Hello');

    });
});