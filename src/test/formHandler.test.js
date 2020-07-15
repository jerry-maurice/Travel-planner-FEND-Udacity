import { handleSubmit, handleReset } from '../client/js/formHandler';

test("Test this handleSubmit to see if it is a function", ()=>{
    expect(typeof handleSubmit).toBe("function");
});

test("Test this handleReset to see if it is a function", ()=>{
    expect(typeof handleReset).toBe("function");
});