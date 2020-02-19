// Style
import './styles/main';


// Modules
import * as Renderer from './app/renderer';


const dimensions = () => ({
    width: innerWidth,
    height: innerHeight,
});


Renderer.onFailure(console.error);

Renderer.onResize(({ canvas }: WebGLRenderingContext) => {
    const { width, height } = dimensions();
    canvas.width = width;
    canvas.height = height;
});

Renderer.onSuccess((context: WebGLRenderingContext ) => {
    
});


document.addEventListener('DOMContentLoaded', () => (
    Renderer.run(document.createElement('canvas'))
));

