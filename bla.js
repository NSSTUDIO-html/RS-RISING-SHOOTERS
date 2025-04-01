
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzh6WibbezzSfixdsz9Y4oWWtAGSFfDVDWK5z-85o-xB7gAnehzNGDZy1&s=10');
    const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEB9h5IakyY1th2qFJYGZuft99sDzYRi0uQ&usqp=CAU')
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const blaster = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ color:0xffffff ,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshPhongMaterial({ color : 0xffffff,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshPhongMaterial({ color : 0x000000,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial3 = new THREE.MeshPhongMaterial({ color:0x0000ff,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture3,normalMap : texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,-0.7,-3.5);
  barrel.scale.set(0.5,0.1,0.5);
  blaster.add(barrel);
  const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const sword = new THREE.Mesh(bodyGeometry, barrelMaterial);
    sword.position.set(0,0.5,0); // Position it below the barrel
    sword.scale.set(0.02,0.5,1);
  blaster.add(sword);
  const sworda = new THREE.Mesh(bodyGeometry, barrelMaterial);
    sworda.position.set(0,0.5,5); // Position it below the barrel
    sworda.scale.set(0.02,0.35,0.1);
  sworda.rotation.set(Math.PI/4,0,0);
  blaster.add(sworda);
  const swordab = new THREE.Mesh(bodyGeometry, barrelMaterial);
    swordab.position.set(0,0.75,5.15); // Position it below the barrel
    swordab.scale.set(0.02,0.32,0.1);
  swordab.rotation.set(0,0,0);
  blaster.add(swordab);
   const body = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body.position.set(0,0.75,0); // Position it below the barrel
    body.scale.set(0.2,0.35,1.2);
  body.rotation.set(0,0,0);
  blaster.add(body);
   const body1 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    body1.position.set(0,1,2); // Position it below the barrel
    body1.scale.set(0.21,0.2,0.4);
  body1.rotation.set(0,0,0);
  blaster.add(body1);
   const body2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body2.position.set(0,1.6,0); // Position it below the barrel
    body2.scale.set(0.21,0.2,0.2);
  body2.rotation.set(0,0,0);
  blaster.add(body2);
   const body3 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body3.position.set(0,-0.5,-1); // Position it below the barrel
    body3.scale.set(0.1,0.2,0.2);
  body3.rotation.set(0,0,0);
  blaster.add(body3);
   const body4= new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body4.position.set(0,-1.5,-2.2); // Position it below the barrel
    body4.scale.set(0.1,0.1,0.2);
  body4.rotation.set(-Math.PI/3,0,0);
  blaster.add(body4);
   const body5 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body5.position.set(0,-2,-3.5); // Position it below the barrel
    body5.scale.set(0.1,0.1,0.2);
  body5.rotation.set(Math.PI/6,0,0);
  blaster.add(body5);
   const body6 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body6.position.set(0,-0.5,-3.7); // Position it below the barrel
    body6.scale.set(0.1,0.2,0.28);
  body6.rotation.set(-Math.PI/3,0,0);
  blaster.add(body6);
   const body7 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    body7.position.set(0,-0.5,-4); // Position it below the barrel
    body7.scale.set(0.11,0.2,0.28);
  body7.rotation.set(-Math.PI/3,0,0);
  blaster.add(body7);
   const body8 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body8.position.set(0,0,-5); // Position it below the barrel
    body8.scale.set(0.1,0.2,0.4);
  body8.rotation.set(0,0,0);
  blaster.add(body8);
   const body9 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    body9.position.set(0,0,-6.5); // Position it below the barrel
    body9.scale.set(0.11,0.21,0.3);
  body9.rotation.set(0,0,0);
  blaster.add(body9);
   const body91 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    body91.position.set(0,0.7,-6.5); // Position it below the barrel
    body91.scale.set(0.21,0.35,0.3);
  body91.rotation.set(0,0,0);
  blaster.add(body91);
   const body92 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    body92.position.set(0,-0.2,-7.8); // Position it below the barrel
    body92.scale.set(0.21,0.25,0.3);
  body92.rotation.set(Math.PI/2,0,0);
  blaster.add(body92);
   const body93 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    body93.position.set(0,-0.8,-6.5); // Position it below the barrel
    body93.scale.set(0.2,0.2,0.38);
  body93.rotation.set(-Math.PI/5,0,0);
  blaster.add(body93);
   const body94 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body94.position.set(0,1.2,-6.5); // Position it below the barrel
    body94.scale.set(0.1,0.2,0.38);
  body94.rotation.set(0,0,0);
  blaster.add(body94);
   const body95 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    body95.position.set(0,1.2,6); // Position it below the barrel
    body95.scale.set(0.1,0.2,0.2);
  body95.rotation.set(0,0,0);
  blaster.add(body95);
   const body96 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    body96.position.set(0,1,5.5); // Position it below the barrel
    body96.scale.set(0.09,0.2,0.2);
  body96.rotation.set(0,0,0);
  blaster.add(body96);
   
   
  
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    blaster.add(ambientLight);
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  blaster.position.x = 0;
  scene.add(blaster);
   