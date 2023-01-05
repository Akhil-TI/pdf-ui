export const onRequest = async (request: any) => {
  // return new Response(`Hello world`);
  return fetch(`https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf`);
};
