
    import * as THREE from 'three';

    // Setup scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    camera.position.z = 0;

    // Load the PNG texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/storage/emulated/0/DCIM/Lift and shift/LS20250228141010.png', (texture) => {

      // Create a box geometry
      const geometry = new THREE.BoxGeometry(1, 2, 0.1); // Adjust size as needed

      // Create a material with the loaded texture
      const material = new THREE.MeshBasicMaterial({ map: texture,transparent:true });

      // Create a mesh and add it to the scene
      const box = new THREE.Mesh(geometry, material);
      scene.add(box);
    });
      