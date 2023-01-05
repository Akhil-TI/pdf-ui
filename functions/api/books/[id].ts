export const onRequest = async (request: any) => {
  // const url = 'https://drive.google.com/file/d/1-0dGYcgBcK4yxPdviyOFEs3NtfMJzLKv';

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Max-Age': '86400',
  };

  const { id } = request.params;

  let url = {
    1: `https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf#page=2`,
    2: 'https://www.africau.edu/images/default/sample.pdf',
  };

  if (id == 1) {
    return await fetch(url[1], { headers: corsHeaders });
  } else if (id == 2) {
    return await fetch(url[2], { headers: corsHeaders });
  } else return new Response(`no book with id ${id}`);
};
