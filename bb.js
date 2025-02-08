// Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x202020); // Dark gray background

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //camera.position.set(0, 2, 8);

    // Renderer
   /** const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
**/
    // Handle window resize
   // window.addEventListener('resize', () => {
    //  renderer.setSize(window.innerWidth, window.innerHeight);
     // camera.aspect = window.innerWidth / window.innerHeight;
     // camera.updateProjectionMatrix();
   // });

 //bike billa assemble
  export const bikebilla = new THREE.Group();
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    bikebilla.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 4, 1);
    bikebilla.add(directionalLight);

  const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const roughnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RFNpYMVcpl0rWLwaPcBPERf-P5E-miwCES4MV43EqmbRdTmqSz6dRnM&s=10');
  
    // Shapes (unchanged)
    const pyramidGeometry = new THREE.ConeGeometry(1, 2, 4);
    const textureLoader3 = new THREE.TextureLoader();
  const texture3 = textureLoader3.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUyh6baFDFQAVHy4OZITy_AuEWuA_g_6R9HWT5P7yV-rVDSHf7eADwefMI&s=10');
  const pyramidMaterial = new THREE.MeshStandardMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2 });
    const pyramid1 = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    pyramid1.position.set(-0.4, 2,2);
    pyramid1.rotation.set(Math.PI/8,Math.PI/2,Math.PI/2.5);
    pyramid1.scale.set(0.7,0.7,0.7);
  
    bikebilla.add(pyramid1);
    const pyramid2 = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    pyramid2.position.set(0.4, 2,2);
    pyramid2.rotation.set(Math.PI/8,Math.PI/2,Math.PI/2.5);
    pyramid2.scale.set(0.7,0.7,0.7);
  bikebilla.add(pyramid2);

    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
  const textureLoader1 = new THREE.TextureLoader();
    
  const texture1 = textureLoader1.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOdVUsyCJjgNQDtUHNrQ-UCwOFJ_2ameO7lLxDY5SbvK7UPvG7KIiBB4&s=10');
    const cylinderMaterial = new THREE.MeshStandardMaterial({ map: texture1, metalnessMap:metalnessMap2,roughnessMap:roughnessMap2 });
   export const c1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c1.position.set(0.8, 2, 3);
  c1.scale.set(1.3,0.3,1.3);
  c1.rotation.set(Math.PI/2,Math.PI,Math.PI/2);
  bikebilla.add(c1);
  
  export const c2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c2.position.set(-0.8, 2, 3);
  c2.scale.set(1.3,0.3,1.3);
  c2.rotation.set(Math.PI/2,Math.PI,Math.PI/2);
  bikebilla.add(c2);
    
  export const c3 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c3.position.set(0, 2, -2.5);
  c3.scale.set(1.3,0.5,1.3);
  c3.rotation.set(Math.PI/2,Math.PI,Math.PI/2);
  bikebilla.add(c3);
  
  const textureLoader22 = new THREE.TextureLoader();
    
  const texture12 = textureLoader22.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH2ASTGs9b2ukQ_cUrtTbpImyIN-jieJq2vgcfTmmmTXS08tzHxh4sdg9&s=10');
  const cylinderMaterial1 = new THREE.MeshStandardMaterial({ map : texture12,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2 });
    
  const c4 = new THREE.Mesh(cylinderGeometry, cylinderMaterial1);
  c4.position.set(-0.7, 2, 3);
  c4.scale.set(1,0.5,1);
  c4.rotation.set(Math.PI/2,Math.PI,Math.PI/2);
  bikebilla.add(c4);
  
  const c5 = new THREE.Mesh(cylinderGeometry, cylinderMaterial1);
  c5.position.set(0.7, 2, 3);
  c5.scale.set(1,0.5,1);
  c5.rotation.set(Math.PI/2,Math.PI,Math.PI/2);
  bikebilla.add(c5);
  
  const c6 = new THREE.Mesh(cylinderGeometry, cylinderMaterial1);
  c6.position.set(0, 2, -1.5);
  c6.scale.set(1,0.4,1);
  c6.rotation.set(Math.PI/2,Math.PI/2,Math.PI);
  bikebilla.add(c6);
  
  const textureLoader223 = new THREE.TextureLoader();
    
  const texture123 = textureLoader22.load('data:image/jpeg;base64,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');
  const cylinderMaterial2 = new THREE.MeshStandardMaterial({ map : texture123,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2});
    
  const c7 = new THREE.Mesh(cylinderGeometry, cylinderMaterial2);
  c7.position.set(0, 2.9, 2);
  c7.scale.set(0.7,0.2,0.7);
  c7.rotation.set(Math.PI/2,Math.PI/2,Math.PI);
  bikebilla.add(c7);
  
  const c8 = new THREE.Mesh(cylinderGeometry, cylinderMaterial1);
  c8.position.set(0, 2.9, 2);
  c8.scale.set(0.8,0.14,0.7);
  c8.rotation.set(Math.PI/2,Math.PI/2,Math.PI);
  bikebilla.add(c8);
  
  const geometry = new THREE.TorusGeometry( 10, 3, 16, 15 );
  const torus = new THREE.Mesh( geometry, cylinderMaterial1 );
  torus.position.set(0,2,-2.5);
  torus.scale.set(0.11,0.11,0.055);
  torus.rotation.set(Math.PI/2,Math.PI,Math.PI);
  bikebilla.add(torus);
  
  const torus1 = new THREE.Mesh( geometry, cylinderMaterial1 );
  torus1.position.set(0,2.5,0);
  torus1.scale.set(0.16,0.11,0.051);
  torus1.rotation.set(Math.PI,Math.PI/2,Math.PI);
  bikebilla.add(torus1);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader2 = new THREE.TextureLoader();
  const texture2 = textureLoader2.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3J2iNOxVCyue-xxJPTYT1uY_kiLKg6Xgo6crf7gcajIGWBEau4-Sk__4&s=10');
  const sphereMaterial = new THREE.MeshStandardMaterial({ map : texture2,transparent: true, opacity:0.5,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, 2, 0);
  sphere.scale.set(1.2,1,1.5);
    bikebilla.add(sphere);

    
    const material1 = new THREE.MeshStandardMaterial({ map : texture3,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2 }); // Red
    const material2 = new THREE.MeshStandardMaterial({ map : texture3,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2 }); // Blue

    // Cuboid 1
    const geometry1 = new THREE.BoxGeometry(1, 1, 1); // Width, height, depth
    const cuboid1 = new THREE.Mesh(geometry1, material1);
    cuboid1.position.set(0,2.3,-0.5);
  cuboid1.scale.set(1,1,0.1);
  // Position it to the left
    bikebilla.add(cuboid1);

    // Cuboid 2
    const geometry2 = new THREE.BoxGeometry(1, 1, 1); // Width, height, depth
    const cuboid2 = new THREE.Mesh(geometry2, material2);
    cuboid2.position.set(0,1.8,0); // Position it to the right
    cuboid2.scale.set(1,0.1,1);
  bikebilla.add(cuboid2);
  bikebilla.add(camera);
camera.rotation.y = Math.PI/2;
  scene.add(bikebilla);
export default bikebilla ;
