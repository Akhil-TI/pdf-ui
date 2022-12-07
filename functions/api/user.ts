interface Env {
    userdata: KVNamespace;
}
export const onRequest: PagesFunction<Env> = async (context) => {
    const task = await context.env.userdata.get("user");
    return new Response(task);
}