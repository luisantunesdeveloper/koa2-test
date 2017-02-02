// Export a function that takes the router
export default (router, Brand) => {
    // GET to all brands.
    router.get('/brands', async(ctx, next) =>
        ctx.body = await Brand.query());
    // POST a new brand.
    router.post('/brands', async(ctx, next) =>
        ctx.body = await Brand.query().insert(ctx.request.body));
    // Routes to /brand/id.
    router.get('/brands/:id', async(ctx, next) =>
        ctx.body = await Brand.query().where('id', ctx.params.id));
    // PUT to a single brand.
    router.put('/brands/:id', async(ctx, next) =>
        ctx.body = await Brand.query().patch(ctx.request.body).where('id', ctx.params.id));
    // DELETE to a single brand.
    router.delete('/brands/:id', async(ctx, next) =>
        ctx.body = await Brand.query().delete().where('id', ctx.params.id));

    return router;
}