import Popover from '../popover';

document.body.innerHTML = '<div id="container"><span id = "test_span">Click me!</span></div>';
const popover = new Popover('test_span', 'Test title', 'Test text');
popover.create();

test('should render self', () => {
  const testPopoverHTML = '<span class="title">Test title</span><span class="text">Test text</span>';
  expect(document.body.innerHTML).toContain(testPopoverHTML);
});

test('should add class to elem', () => {
  expect(document.getElementById('test_span').className).toEqual('has-tooltip');
});

test('should remove and add visibility when clicked', () => {
  const span = document.getElementById('test_span');
  const pop = document.querySelector('.popover')
  span.click();
  expect(pop.classList).toContain('visible');
  span.click();
  expect(pop.classList).not.toContain('visible');
  span.click();
  pop.click();
  expect(pop.classList).not.toContain('visible');
});
