
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2sVgbM3Urp4Kt8FCJn8gcvfSNlzN4wUE4UYpLE-NcPb9ev3HHyEF-oE&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const pbl = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ map:texture1 ,metalness:0.0,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ color : 0xFFFFFF,metalness:0.90,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ emissive:0x87CEEB,color : 0x0000ff,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ color:0x000000,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,0,0);
  barrel.scale.set(0.5,1.5,0.5);
  pbl.add(barrel);
   const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel1.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(0,-0.5,0);
  barrel1.scale.set(0.2,1,0.2);
  pbl.add(barrel1);
   const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel2.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(0,0,6.5);
  barrel2.scale.set(0.51,0.3,0.51);
  pbl.add(barrel2);
   const barrel3 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel3.rotation.z = Math.PI / 2; // Rotate to make it horizontal
    barrel3.position.set(0,0,-6.5);
  barrel3.scale.set(0.61,0.2,0.61);
  pbl.add(barrel3);
   
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b.position.set(0,1,0); // Position it below the barrel
    b.scale.set(0.32,0.2,1);
  pbl.add(b);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b1.position.set(0.5,0,-3); // Position it below the barrel
    b1.scale.set(0.52,0.2,1);
   b1.rotation.z = Math.PI/2;
  pbl.add(b1);
   const b13 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b13.position.set(-0.5,0,-3); // Position it below the barrel
    b13.scale.set(0.52,0.2,1);
   b13.rotation.z = Math.PI/2;
  pbl.add(b13);
   const b2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b2.position.set(0,-1,0); // Position it below the barrel
    b2.scale.set(0.32,0.2,1);
  pbl.add(b2);
   const b3 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b3.position.set(0,-1,-5); // Position it below the barrel
    b3.scale.set(0.35,0.21,0.5);
  pbl.add(b3);
   const b4 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b4.position.set(0,-1,-7); // Position it below the barrel
    b4.scale.set(0.35,0.4,0.4);
   b4.rotation.x = Math.PI/2;
  pbl.add(b4);
   const b5 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b5.position.set(0,-0.6,-7); // Position it below the barrel
    b5.scale.set(0.36,0.41,0.2);
   b5.rotation.x = Math.PI/2;
  pbl.add(b5);
   const b56 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b56.position.set(0,-2,-3); // Position it below the barrel
    b56.scale.set(0.2,0.25,0.3);
   b56.rotation.x = Math.PI/2.5;
  pbl.add(b56);
   const b6 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b6.position.set(0,-1.5,-2.5); // Position it below the barrel
    b6.scale.set(0.2,0.25,0.3);
   b6.rotation.x = Math.PI;
  pbl.add(b6);
   const b67 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b67.position.set(0,0.5,-2.5); // Position it below the barrel
    b67.scale.set(0.8,0.1,0.6);
   b67.rotation.x = Math.PI;
  pbl.add(b67);
   const b7 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b7.position.set(0,-0.5,-2.5); // Position it below the barrel
    b7.scale.set(0.8,0.1,0.6);
   b7.rotation.x = Math.PI;
  pbl.add(b7);
   
    
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  pbl.position.x = 0;
  scene.add(pbl);
   export default pbl;