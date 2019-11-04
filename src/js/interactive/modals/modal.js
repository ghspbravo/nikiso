import { ACTIVE_CLASS } from "../../constants";

/**
 * show target modal
 * @param {string} modalId target modal id
 */
export function openModal(modalId) {
  try {
    if (!modalId) throw (false);

    document.getElementById(modalId).classList.add(ACTIVE_CLASS);
    return true;

  } catch (error) {
    return false
  }
}

/**
 * hide target modal
 * @param {string} modalId target modal id
 */
export function closeModal(modalId) {
  try {
    if (!modalId) throw (false);

    document.getElementById(modalId).classList.remove(ACTIVE_CLASS);
    return true;

  } catch (error) {
    return false
  }
}