export type RenderingContext = (
    WebGLRenderingContext
    | CanvasRenderingContext2D
    | ImageBitmapRenderingContext
    | WebGL2RenderingContext
    | null
);


export type RenderingContextFailure = (error: Error) => void;
export type RenderingContextSuccess = (context: RenderingContext) => void;


export interface IRenderingContextInternal {
    failure: RenderingContextFailure;
    success: RenderingContextSuccess;
    resize: any;
};


const internal: IRenderingContextInternal = {
    failure: console.error,
    success: console.warn,
    resize: console.warn,
};


export const onFailure = (callback: RenderingContextFailure): void => {
    internal.failure = callback;
};


export const onSuccess = (callback: RenderingContextSuccess): void => {
    internal.success = callback;
};


export const onResize = (callback): void => {
    internal.resize = callback;
};


export const context = (canvas: HTMLCanvasElement): RenderingContext => (
    canvas.getContext('webgl')
    || canvas.getContext('experimental-webgl')
    || canvas.getContext('moz-webgl')
    || canvas.getContext('webkit-3d')
);


export const run = (canvas: HTMLCanvasElement): void => {
    context(canvas) == null
        ? internal.failure(new Error('Something went wrong'))
        : internal.success(context(canvas))
};

