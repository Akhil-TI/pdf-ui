export const onRequestPost = async ({
  params,
}: {
  params: any;
}): Promise<Response> => {
  const res = await fetch(`${params}`);
  const info = JSON.stringify(res, null, 2);
  return new Response(info);
};
