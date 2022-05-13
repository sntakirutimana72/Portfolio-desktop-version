const localStorage = (() => {
  const storageAPI = window.localStorage;
  if (storageAPI !== null && 'length' in storageAPI) {
    return storageAPI;
  }
}) ();

/**
 *
 * @param {String} identifer
 */
function select(identifer) {
  return document.querySelector(identifer);
}

/**
 *
 * @param {String} identifer
 */
function selectAll(identifer) {
  return document.querySelectorAll(identifer);
}

/**
 *
 * @param {String} identifer
 */
function getById(identifer) {
  return document.getElementById(identifer);
}

/**
 *
 * @param { HTMLElement } element
 * @param { String } attribute
 * @param { String? } value
 * @return {String?}
 */
function attribute(element, attribute, value) {
  if (!value) {
    return element.getAttribute(attribute);
  }

  element.setAttribute(attribute, value);
}

/**
 *
 * @param { HTMLElement } element
 * @param { String? } value
 * @return {String?}
 */
function text(element, value) {
  if (!value) {
    return element.textContent;
  }

  element.textContent = value;
}

/**
 *
 * @param { HTMLElement } element
 * @param { string } className
 * @param { Boolean? } force
 */
function toggleClass(element, className, force) {
  element.classList.toggle(className, force);
}
