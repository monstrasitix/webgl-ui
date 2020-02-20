export const resize = (context: WebGLRenderingContext) => {
    context.canvas.width = innerWidth;
    context.canvas.height = innerHeight;
    context.viewport(
        0, 0, innerWidth, innerHeight
    );
};
