function checkFocus(modal) {
  const focusableElems = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  // get first element to be focused inside modal
  const firstFocusableE = modal.querySelectorAll(focusableElems)[0];
  const focusableC = modal.querySelectorAll(focusableElems);
  // get last element to be focused inside modal
  const lastFocusableE = focusableC[focusableC.length - 1];
  console.log(focusableC);
  console.log(firstFocusableE);
  console.log(lastFocusableE);

  document.addEventListener('keydown', (e) => {
    const isTabPressed = e.key === 'Tab';
    // const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    // if shift key pressed for shift + tab combination
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableE) {
        // add focus for the last focusable element
        lastFocusableE.focus();
        e.preventDefault();
      }
      // if tab key is pressed
    } else if (document.activeElement === lastFocusableE) {
      // add focus for the first focusable element
      firstFocusableE.focus();
      e.preventDefault();
    }
    // if focused has reached to last focusable element then focus first focusable element
  });

  firstFocusableE.focus();
}

export default checkFocus;
