// Export a function that takes the router
export default router => {
    // GET to all brands.
    router.get('/', async(Brand, ctx, next) =>
        ctx.body = await Brand.query());
    // POST a new brand.
    router.post('/', async(Brand, ctx, next) =>
        ctx.body = await Brand.query().insert(ctx.request.body));
    // Routes to /brand/id.
    router.get('/:id', async(Brand, ctx, next) =>
        ctx.body = await Brand.query().where('identifier', ctx.params.id));
    // PUT to a single brand.
    router.put('/:id', async(Brand, ctx, next) =>
        ctx.body = await Brand.query().patch(ctx.request.body).where('identifier', ctx.params.id));
    // DELETE to a single brand.
    router.delete('/:id', async(Brand, ctx, next) =>
        ctx.body = await Brand.query().delete().where('identifier', ctx.params.id));

    return router;
}