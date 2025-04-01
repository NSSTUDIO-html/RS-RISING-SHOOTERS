
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   // const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
   // document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hueK3_oN4EkA10zI0abPn91zlPgIoW8Njk1rL6Yokw5kr8V_GTZaJ6w&s=10');
  const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFG-gaHqaIHmAxSSyA_q1bhFObcYM1BctPggK3P1TRqil2NSuy81ltlKIV&s=10');
  const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-axo4gZJ04p_v2Z3cjLz2bR2TmIw6w-ClSSsV_X6qIhzm7VwPhcX-w5M&s=10');
    const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
  export  const sgun = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ map: texture1,bumpMap:texture1 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshPhongMaterial({ color : 0x222222,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ color : 0x000000 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ map : texture2,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshStandardMaterial({ map : texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,1,0);
  barrel.scale.set(1,1.2,1);
  sgun.add(barrel);
  const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel1.rotation.x = Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(0,1,0);
  barrel1.scale.set(0.5,1.21,0.5);
  sgun.add(barrel1);
   const barrel2 = new THREE.Mesh(barrelGeometry1, barrelMaterial5);
    barrel2.rotation.x = Math.PI / 2.2; // Rotate to make it horizontal
    barrel2.position.set(0,-0.6,-8);
  barrel2.scale.set(0.5,1.21,0.5);
  sgun.add(barrel2);
   const barrel3 = new THREE.Mesh(barrelGeometry2, barrelMaterial6);
    barrel3.rotation.x = Math.PI / 2.2; // Rotate to make it horizontal
    barrel3.position.set(0,-0.7,-9);
  barrel3.scale.set(0.5,0.2,0.5);
  sgun.add(barrel3);
   const barrel4 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel4.rotation.x = Math.PI / 6; // Rotate to make it horizontal
    barrel4.position.set(0,-2,-5);
  barrel4.scale.set(0.5,0.2,0.2);
  sgun.add(barrel4);
   const barrel5 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel5.rotation.x = -Math.PI / 6; // Rotate to make it horizontal
    barrel5.position.set(0,-2,-7);
  barrel5.scale.set(0.5,0.2,0.2);
  sgun.add(barrel5);
   const barrel6 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel6.rotation.x = Math.PI/2; // Rotate to make it horizontal
    barrel6.position.set(0,-2.8,-6);
  barrel6.scale.set(0.5,0.15,0.2);
  sgun.add(barrel6);
   const barrel7 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel7.rotation.x = Math.PI/10; // Rotate to make it horizontal
    barrel7.position.set(0,-2.8,-7.8);
  barrel7.scale.set(0.5,0.5,0.5);
  sgun.add(barrel7);
   //trigger
   const barrel65 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel65.rotation.x = -Math.PI/6; // Rotate to make it horizontal
    barrel65.position.set(0,-1.7,-6.4);
  barrel65.scale.set(0.1,0.15,0.3);
  sgun.add(barrel65);
   // Gun body (a box)
    const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const body = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body.position.set(0,1,0); // Position it below the barrel
    body.scale.set(0.7,0.3,1.2);
  sgun.add(body);
  const body1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body1.position.set(0,1,0); // Position it below the barrel
    body1.scale.set(0.7,0.3,1.2);
  body1.rotation.set(0,0,Math.PI/2);
  sgun.add(body1);
  const wood = new THREE.Mesh(bodyGeometry, barrelMaterial);
    wood.position.set(0,-0.6,-1.4); // Position it below the barrel
    wood.scale.set(0.5,0.5,1.5);
  wood.rotation.set(0,0,Math.PI/2);
  sgun.add(wood);
  const gold = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    gold.position.set(0,0.3,-1.9); // Position it below the barrel
    gold.scale.set(1.3,0.8,0.15);
  gold.rotation.set(0,0,Math.PI/2);
  sgun.add(gold);
  const gold1 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    gold1.position.set(0,0.3,1.7); // Position it below the barrel
    gold1.scale.set(1.3,0.8,0.15);
  gold1.rotation.set(0,0,Math.PI/2);
  sgun.add(gold1);
  const sgold = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold.position.set(0,0.3,-1.9); // Position it below the barrel
    sgold.scale.set(1.31,0.84,0.1);
  sgold.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold);
  const sgold1 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold1.position.set(0,0.3,1.7); // Position it below the barrel
    sgold1.scale.set(1.31,0.84,0.1);
  sgold1.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold1);
  
  const sgold2 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold2.position.set(0,0,4.5); // Position it below the barrel
    sgold2.scale.set(2,0.77,0.2);
  sgold2.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold2);
  const sgold3 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold3.position.set(0,-2,4.2); // Position it below the barrel
    sgold3.scale.set(2.5,0.4,0.3);
  sgold3.rotation.set(0,0,Math.PI/2);
  sgun.add(sgold3);
  const sgold4 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold4.position.set(0,-5.7,4.2); // Position it below the barrel
    sgold4.scale.set(0.3,0.3,0.29);
  sgold4.rotation.set(0,0,Math.PI/4);
  sgun.add(sgold4);
  const sgold5 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold5.position.set(0,-5.3,1.6); // Position it below the barrel
    sgold5.scale.set(0.3,0.3,0.3);
  sgold5.rotation.set(Math.PI/10,0,Math.PI/4);
  sgun.add(sgold5);
  const sgold6 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    sgold6.position.set(0,-4,1.9); // Position it below the barrel
    sgold6.scale.set(0.39,0.9,0.28);
  sgold6.rotation.set(Math.PI/10,0,0);
  sgun.add(sgold6);
   const sgold7 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    sgold7.position.set(0,0,-6); // Position it below the barrel
    sgold7.scale.set(0.51,1,0.28);
  sgold7.rotation.set(0,0,0);
  sgun.add(sgold7);
   const sgold8 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    sgold8.position.set(0,2,-6); // Position it below the barrel
    sgold8.scale.set(0.1,0.9,0.05);
  sgold8.rotation.set(0,0,0);
  sgun.add(sgold8);
  // Add the gun to the scene
    

    
  sgun.position.x = 0;
  scene.add(sgun);
    