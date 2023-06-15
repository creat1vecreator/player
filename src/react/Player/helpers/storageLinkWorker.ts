const LINKS_KEY = 'enteredLinks';

export const storageLinkWorker = () => {
  const getEnteredLinks = (): string[] => {
    const enteredLinks = localStorage.getItem(LINKS_KEY);
    return enteredLinks ? JSON.parse(enteredLinks) : [];
  };

  const setEnteredLinks = (links: string[]): void => {
    localStorage.setItem(LINKS_KEY, JSON.stringify(links));
  };

  const handleSetEnteredLink = (link: string): void => {
    const enteredLinks: string[] = getEnteredLinks();
    if (!enteredLinks.includes(link)) {
      const updatedLinks: string[] = [...enteredLinks, link];
      setEnteredLinks(updatedLinks);
    }
  };

  return { getEnteredLinks, handleSetEnteredLink };
};
