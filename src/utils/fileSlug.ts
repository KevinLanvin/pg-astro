export const getFileSlug = (filepath: string) => {
  return filepath.split("/").pop()?.split(".").shift();
};
