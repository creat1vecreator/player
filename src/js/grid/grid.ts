import { amazonInstanceData, ownServerGridData } from './constants/mockData';
import {
  activeNavButtonSelector,
  containerToSetGridSelector,
  firstNavButtonSelector,
} from './constants/selectors';

const firstNavButton = document.querySelector(firstNavButtonSelector);
const containerToSetGrid = document.querySelector(containerToSetGridSelector);

const createGridItem = (stringFirst, stringSecond = '') => `
<div class="Task__requirementsGridItem">
    <h3 class="Task__requirementsGridItemText">${stringFirst}</h3>
    <p class="Task__requirementsGridItemText">${stringSecond}</p>
</div>`;

const createGrid = (strings) =>
  strings
    .map((string, index) => {
      if (index % 2 === 0) {
        const nextItem = strings[index + 1];
        if (nextItem) {
          return createGridItem(string, nextItem);
        }
        return createGridItem(string);
      }
    })
    .join('');

const handleChangeButtonActivity = (mutationRecord) => {
  const isTargetActive = Array.from(
    mutationRecord[0].target.classList,
  ).includes(activeNavButtonSelector);
  containerToSetGrid.innerHTML = isTargetActive
    ? (containerToSetGrid.innerHTML = createGrid(ownServerGridData))
    : createGrid(amazonInstanceData);
};

const mutationObserver = new MutationObserver(handleChangeButtonActivity);

mutationObserver.observe(firstNavButton, {
  attributes: true,
});
