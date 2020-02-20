// Style
import './styles/main';


// Modules
import * as Renderer from './app/renderer';
import * as WebGL from './app/webgl';


const onSuccess = (context: WebGLRenderingContext) => {
    window.addEventListener('resize', () => WebGL.resize(context));
};


const onFailure = () => {
    console.error('Failed to initialize webGL');
};


const bootstrap = () => {
    const context = <WebGLRenderingContext | null>Renderer.context.webgl(
        document.createElement('canvas')
    );

    if (context == null) {
        onFailure();
    } else {
        onSuccess(context);
    }
};



document.addEventListener('DOMContentLoaded', bootstrap);