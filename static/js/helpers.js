export function select(identifer) {
  document.querySelector(identifer);
}

export function selectAll(identifer) {
  document.querySelectorAll(identifer);
}

export function getById(identifer) {
  document.getElementById(identifer);
}

/**
 *
 * @param { HTMLElement } element
 * @param { String } attribute
 * @param { String? } value
 */
export function attribute(element, attribute, value) {
  if (!value)
    return element.getAttribute(attribute);

  element.setAttribute(attribute, value);
}

/**
 *
 * @param { HTMLElement } element
 * @param { String? } value
 */
export function text(element, value) {
  if (!value)
    return element.textContent;

  element.textContent = value;
}

/**
 *
 * @param { HTMLElement } element
 * @param { string } className
 * @param { Boolean? } force
 */
export function toggleClass(element, className, force) {
  element.classList.toggle(className, force);
}
