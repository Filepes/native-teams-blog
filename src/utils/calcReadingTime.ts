export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  return Math.ceil(wordCount / wordsPerMinute);
};
