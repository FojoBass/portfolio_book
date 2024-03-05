export const delay = (action: () => void, delay: number) => {
  setTimeout(() => {
    action();
  }, delay);
};
