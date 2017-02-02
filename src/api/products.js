// Export a function that takes the router
export default (router, Product) => {
    // GET to all products.
    router.get('/products', async(ctx, next) =>
        ctx.body = await Product.query());
    // POST a new product.
    router.post('/products', async(ctx, next) =>
        ctx.body = await new Product.query().insert(ctx.request.body));
    // Routes to /product/id.
    router.get('/products/:id', async(ctx, next) =>
        ctx.body = await Product.query().where('identifier', ctx.params.id));
    // PUT to a single product.
    router.put('/products/:id', async(ctx, next) =>
        ctx.body = await Product.query().patch(ctx.request.body).where('identifier', ctx.params.id));
    // DELETE to a single product.
    router.delete('/products/:id', async(ctx, next) =>
        ctx.body = await Product.query().delete().where('identifier', ctx.params.id));

    return router;
}