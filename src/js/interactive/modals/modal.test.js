import { ACTIVE_CLASS, MODAL_CLASSES } from "../../constants";
import { openModal, closeModal } from "./modal";

describe("modals/openModal", () => {

  const wrapper = document.createElement("div");
  const activeClassname = ACTIVE_CLASS;
  const openModalClassName = MODAL_CLASSES.OPEN_MODAL;

  beforeEach(() => {
    wrapper.innerHTML = "";
  })

  it("should add activeClassname to targeted modal", () => {

    wrapper.innerHTML = `
      <div>
        <div id="modal1" class="modal"></div>
        <div id="modal2" class="modal"></div>

        <button data-modal="modal1" class="${openModalClassName}"></button>
      </div>
    `
    document.body.appendChild(wrapper);
    const openControls = [...wrapper.getElementsByClassName(openModalClassName)];
    
    openControls.forEach(control => {

      // @ts-ignore
      const targetModal = control.dataset.modal;
      const targetModalNode = wrapper.querySelector(`#${targetModal}`);

      openModal(targetModal);
      expect(targetModalNode.classList.contains(activeClassname)).toBeTruthy();
    })

    document.body.removeChild(wrapper);

  })

  it("should return false on null or undefined or empty or incorrect", () => {

    wrapper.innerHTML = `
      <div>
        <div id="modal1" class="modal"></div>
        <div id="modal2" class="modal"></div>

        <button data-modal="" class="${openModalClassName}"></button>
        <button class="${openModalClassName}"></button>
        <button data-modal="test" class="${openModalClassName}"></button>
      </div>
    `
    document.body.appendChild(wrapper);
    const openControls = [...wrapper.getElementsByClassName(openModalClassName)];
    
    openControls.forEach(control => {

      // @ts-ignore
      const targetModal = control.dataset.modal;

      expect(openModal(targetModal)).toBeFalsy();
    })

    document.body.removeChild(wrapper);

  })

})

describe("modals/closeModal", () => {

  const wrapper = document.createElement("div");
  const activeClassname = ACTIVE_CLASS;
  const closeModalClassName = MODAL_CLASSES.CLOSE_MODAL;

  beforeEach(() => {
    wrapper.innerHTML = "";
  })

  it("should remove activeClassname to targeted modal", () => {

    wrapper.innerHTML = `
      <div>
        <div id="modal1" class="modal ${activeClassname}"></div>
        <div id="modal2" class="modal"></div>

        <button data-modal="modal1" class="${closeModalClassName}"></button>
      </div>
    `
    document.body.appendChild(wrapper);
    const closeControls = [...wrapper.getElementsByClassName(closeModalClassName)];
    
    closeControls.forEach(control => {

      // @ts-ignore
      const targetModal = control.dataset.modal;
      const targetModalNode = wrapper.querySelector(`#${targetModal}`);

      closeModal(targetModal);
      expect(!targetModalNode.classList.contains(activeClassname)).toBeTruthy();
    })

    document.body.removeChild(wrapper);

  })

  it("should return false on null or undefined or empty or incorrect", () => {

    wrapper.innerHTML = `
      <div>
        <div id="modal1" class="modal"></div>
        <div id="modal2" class="modal"></div>

        <button data-modal="" class="${closeModalClassName}"></button>
        <button class="${closeModalClassName}"></button>
        <button data-modal="test" class="${closeModalClassName}"></button>
      </div>
    `
    document.body.appendChild(wrapper);
    const closeControls = [...wrapper.getElementsByClassName(closeModalClassName)];
    
    closeControls.forEach(control => {

      // @ts-ignore
      const targetModal = control.dataset.modal;

      expect(closeModal(targetModal)).toBeFalsy();
    })

    document.body.removeChild(wrapper);

  })

})