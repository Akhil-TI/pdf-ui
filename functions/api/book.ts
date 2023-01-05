export const onRequest = async (request: any) => {
  // const url = 'https://drive.google.com/file/d/1-0dGYcgBcK4yxPdviyOFEs3NtfMJzLKv';
  let url = `https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf`;
  if (request === 1) return url;
  else return ''
};
