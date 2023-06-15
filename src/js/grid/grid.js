const ownServerGridData = [
  'OS + apps',
  'Unix/OSX + docker + nvidia-docker',
  'Free space',
  '100 GB of free space',
  'CPU',
  '4 cores or more (e.g. intel core i5)',
  'Graphics hardware',
  'GPU: NVidia only 2Gb+',
  'Memory',
  '16 GB RAM',
];
const amazonInstanceData = [
  'Instance',
  'g4dn.xlarge',
  'Memory',
  '16 GB RAM',
  'GPU',
  '1',
  'Storage',
  '125 GB',
  'vCPUs',
  '4',
];

const firstNavButtonSelector = '.Task__technicalRequirementsNavButton';
const containerToSetGridSelector = '.Task__requirementsGrid';
const activeNavButtonSelector = 'Task__technicalRequirementsNavButton_active';

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
