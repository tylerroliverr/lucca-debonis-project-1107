import * as THREE from 'three';

class DispersionMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        void main() {
          vec2 p = vUv;
          float sx = 0.1 * sin(10.0 * p.y - time);
          float dy = 0.1 * cos(10.0 * p.x - time);
          vec4 color = vec4(p.x + sx, p.y + dy, 0.5 + 0.5 * sin(time), 1.0);
          gl_FragColor = color;
        }
      `,
    });
  }
}

export default DispersionMaterial;