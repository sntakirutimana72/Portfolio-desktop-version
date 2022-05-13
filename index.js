let isWizardLoaded;

function loadWizard() {
  const wizard = document.createElement('div');

  wizard.classList.add('details-wizard-wrap', 'hidden');
  wizard.innerHTML = wizardInterface;

  select('main').appendChild(wizard);

  isWizardLoaded = true;

  return wizard;
}

function loadAllProjects() {
  const projContainer = document.createElement('section');
  projContainer.classList.add('works', 'main-item');
  attribute(projContainer, 'id', 'portfolio');
  projContainer.innerHTML = projectContainer;

  const container = projContainer.querySelector('.works-container');

  projectsData.forEach((data) => {
    const project = document.createElement('div');
    project.classList.add('works-card');
    attribute(project, 'data-target', data.id);
    project.innerHTML = projectCardInterface;

    [project.querySelector('h5').innerHTML] = data.name;
    project.querySelectorAll('li')
      .forEach((li, index) => text(li, data.technologies[0][index]));

    container.appendChild(project);
  });

  const main = document.body.querySelector('main');
  main.insertBefore(projContainer, main.children[1]);
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

function triggerDetailsWizard(target) {
  let wizard;

  if (!isWizardLoaded) {
    wizard = loadWizard();
  } else {
    wizard = select('.details-wizard-wrap');
  }

  const data = projectsData.find((project) => project.id === target);

  text(wizard.querySelector('h3'), data.name[1]);
  text(wizard.querySelector('p'), data.description);

  wizard.querySelectorAll('img')
    .forEach((image, index) => attribute(image, 'src', data.image[index]));
  wizard.querySelectorAll('li')
    .forEach((li, index) => text(li, data.technologies[1][index]));
  wizard.querySelectorAll('.details-btn-live')
    .forEach((anchor) => attribute(anchor, 'href', data.live));
  wizard.querySelectorAll('.details-btn-src')
    .forEach((anchor) => attribute(anchor, 'href', data.source));

  toggleDetailsWizard(wizard);
}

function onSubmitError(force, error = '') {
  const logger = select('.submit-error-logger');

  text(logger, error);
  toggleClass(logger, 'hidden', force);
}

function preserveFormData() {
  if (localStorage !== null) {
    let formData = localStorage.getItem(formDataName);

    if (formData === null) {
      formData = {
        [this.name]: this.value
      };
    } else {
      formData = JSON.parse(formData);
      formData[this.name] = this.value;
    }

    localStorage.setItem(formDataName, JSON.stringify(formData));
  }
}

function fillFormFromStorage() {
  if (localStorage !== null) {
    let formData = localStorage.getItem(formDataName);

    if (formData !== null) {
      formData = JSON.parse(formData);
      Object.entries(formData).forEach(([name, value]) => {
        select(`form .field[name='${name}']`).value = value;
      });
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadAllProjects();

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('details-x')) {
      toggleDetailsWizard();
    } else if (event.target.classList.contains('project-btn')) {
      event.preventDefault();
      const parent = event.target.parentElement.parentElement.parentElement;
      triggerDetailsWizard(attribute(parent, 'data-target'));
    }
  });

  fillFormFromStorage();

  selectAll('.field')
    .forEach((field) => {
      field.addEventListener('change', preserveFormData);
      field.addEventListener('focus', () => onSubmitError(true));
    });

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
});
