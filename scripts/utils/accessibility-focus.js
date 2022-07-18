/*
We keep the focus into the modal.
*/
function checkFocus(modal) {
  const focusableElems = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const firstFocusableE = modal.querySelectorAll(focusableElems)[0];
  const focusableC = modal.querySelectorAll(focusableElems);

  const lastFocusableE = focusableC[focusableC.length - 1];

  document.addEventListener('keydown', (e) => {
    const isTabPressed = e.key === 'Tab';

    if (!isTabPressed) {
      return;
    }

    // if shift key pressed for shift + tab combination.
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableE) {
        // add focus for the last focusable element.
        lastFocusableE.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === lastFocusableE) {
      // add focus for the first focusable element.
      firstFocusableE.focus();
      e.preventDefault();
    }
  });

  firstFocusableE.focus();
}

export default checkFocus;
