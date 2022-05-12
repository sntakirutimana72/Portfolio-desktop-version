let isWizardLoaded;

function loadWizard() {
  const wizard = document.createElement('div');

  wizard.classList.add('details-wizard-wrap', 'hidden');
  wizard.innerHTML = wizardView;

  text(wizard.querySelector('h3'), data[0].name);
  text(wizard.querySelector('p'), data[0].desc);

  wizard.querySelectorAll('li')
    .forEach((li, index) => text(li, data[0].technologies[index]));
  wizard.querySelectorAll('.details-btn-live')
    .forEach((anchor) => attribute(anchor, 'href', data[0].live));
  wizard.querySelectorAll('.details-btn-src')
    .forEach((anchor) => attribute(anchor, 'href', data[0].source));

  select('main').appendChild(wizard);

  isWizardLoaded = true;

  return wizard;
}

function toggleOverflow() {
  toggleClass(select('body'), 'no-overflow');
}

function toggleMobileMenu() {
  toggleClass(select('.menu-wrap'), 'hidden');
  toggleOverflow();
}

/**
 *
 * @param {HTMLElement?} element
 */
function toggleDetailsWizard(element) {
  if (!element) {
    element = select('.details-wizard-wrap');
  }

  toggleOverflow();
  toggleClass(element, 'hidden');
}

function triggerDetailsWizard(evt) {
  evt.preventDefault();

  let wizard;

  if (!isWizardLoaded) {
    wizard = loadWizard();
  } else {
    wizard = select('.details-wizard-wrap');
  }

  toggleDetailsWizard(wizard);
}

function onSubmitError(force, error='') {
  const logger = select('.submit-error-logger');

  text(logger, error);
  toggleClass(logger, 'hidden', force);
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('details-x')) {
      toggleDetailsWizard();
    }
  });
  
  selectAll('.field')
  .forEach((field) => field.addEventListener('focus', () => onSubmitError(true)));

const form = select('.contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailAddress = form.elements.mail.value;

  if (emailAddress.toLowerCase() !== emailAddress) {
    return onSubmitError(false, 'Email addresss must be in lowercase');
  }
  
  form.submit();
});

  getById('menu-options').addEventListener('click', toggleMobileMenu);

  select('.menu-x-btn').addEventListener('click', toggleMobileMenu);

  selectAll('.menu-wrap a')
    .forEach((node) => {
      node.onclick = toggleMobileMenu;
    });

  selectAll('.card-btn-wrapper a')
    .forEach((button) => button.addEventListener('click', triggerDetailsWizard));
});
