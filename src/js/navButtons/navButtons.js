const disabledSelector = 'Task__technicalRequirementsNavButton_disabled';
const activeSelector = 'Task__technicalRequirementsNavButton_active';

const checkIfFirstChild = (targetElement) =>
  !targetElement?.previousElementSibling;

const handleActivateLastChild = (targetElement) => {
  targetElement.classList.replace(disabledSelector, activeSelector);
  targetElement.previousElementSibling.classList.replace(
    activeSelector,
    disabledSelector,
  );
};
const handleActivateFirstChild = (targetElement) => {
  targetElement.classList.replace(disabledSelector, activeSelector);
  targetElement.nextElementSibling.classList.replace(
    activeSelector,
    disabledSelector,
  );
};

const toggleActiveButtons = ({ target }) =>
  checkIfFirstChild(target)
    ? handleActivateFirstChild(target)
    : handleActivateLastChild(target);

const targetNavButtons = document.querySelectorAll(
  '.Task__technicalRequirementsNavButton',
);
targetNavButtons.forEach((targetNavButton) =>
  targetNavButton.addEventListener('click', toggleActiveButtons),
);
