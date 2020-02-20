export enum Type {
    CANVAS = '2d',
    WEBGL = 'webgl',
    WEBGL_2 = 'webgl',
    BITMAP = 'bitmaprendering',
};


export type Context = (
    CanvasRenderingContext2D
    | WebGLRenderingContext
    | WebGL2RenderingContext
    | ImageBitmapRenderingContext
);


export type Settings = (
    WebGLContextAttributes
    | CanvasRenderingContext2DSettings
    | ImageBitmapRenderingContextSettings
);


export type Renderer<T> = (
    (canvas: HTMLCanvasElement) => T
);


export const makeContext = (type: Type, settings: Settings): Renderer<Context | null> => (
    (canvas: HTMLCanvasElement): (Context | null) => (
        canvas.getContext(type, settings)
    )
);


export const context = {
    webgl: makeContext(Type.WEBGL, <WebGLContextAttributes>{}),
    webgl2: makeContext(Type.WEBGL_2, <WebGLContextAttributes>{}),
    canvas: makeContext(Type.CANVAS, <CanvasRenderingContext2DSettings>{}),
    bitmap: makeContext(Type.BITMAP, <ImageBitmapRenderingContextSettings>{}),
};
