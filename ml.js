
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
   // document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2sVgbM3Urp4Kt8FCJn8gcvfSNlzN4wUE4UYpLE-NcPb9ev3HHyEF-oE&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const ml = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.3, 1.2, 2, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial4 = new THREE.MeshStandardMaterial({ map:texture1 ,metalness:0.0,roughness:0.0,envMap:scene.environment});
    const barrelMaterial = new THREE.MeshStandardMaterial({ color : 0x404040,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ emissive:0x87CEEB,color : 0x0000ff,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshPhongMaterial({ color:0x000000,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ map : texture5,metalness:0.45,roughness:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(-0.5,-0.5,0);
  barrel.scale.set(0.5,1.5,0.5);
  ml.add(barrel);
   const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel2.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(-0.5,0.5,0);
  barrel2.scale.set(0.5,1.5,0.5);
  ml.add(barrel2);
   const barrel3 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel3.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel3.position.set(0.5,-0.5,0);
  barrel3.scale.set(0.5,1.5,0.5);
  ml.add(barrel3);
   const barrel4 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel4.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel4.position.set(0.5,0.5,0);
  barrel4.scale.set(0.5,1.5,0.5);
  ml.add(barrel4);
   const barrel1 = new THREE.Mesh(barrelGeometry1, barrelMaterial3);
    barrel1.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(-0.5,-0.5,7);
  barrel1.scale.set(0.5,1.5,0.5);
  ml.add(barrel1);
   const barrel12 = new THREE.Mesh(barrelGeometry1, barrelMaterial3);
    barrel12.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel12.position.set(-0.5,0.5,7);
  barrel12.scale.set(0.5,1.5,0.5);
  ml.add(barrel12);
   const barrel13 = new THREE.Mesh(barrelGeometry1, barrelMaterial3);
    barrel13.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel13.position.set(0.5,-0.5,7);
  barrel13.scale.set(0.5,1.5,0.5);
  ml.add(barrel13);
   const barrel14 = new THREE.Mesh(barrelGeometry1, barrelMaterial3);
    barrel14.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel14.position.set(0.5,0.5,7);
  barrel14.scale.set(0.5,1.5,0.5);
  ml.add(barrel14);
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b.position.set(0,0,4); // Position it below the barrel
    b.scale.set(0.7,0.7,0.2);
  ml.add(b);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b1.position.set(0,0,0); // Position it below the barrel
    b1.scale.set(0.7,0.7,0.2);
  ml.add(b1);
   const b2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b2.position.set(0,0,-6); // Position it below the barrel
    b2.scale.set(0.7,0.7,0.5);
  ml.add(b2);
   const b23 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b23.position.set(0,0,-6); // Position it below the barrel
    b23.scale.set(1,1,0.3);
  ml.add(b23);
   const b234 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b234.position.set(0,0,-9); // Position it below the barrel
    b234.scale.set(0.2,0.8,0.3);
  ml.add(b234);
   const b254 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b254.position.set(0,2,-10); // Position it below the barrel
    b254.scale.set(0.2,0.6,0.1);
  ml.add(b254);
   const b24 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b24.position.set(0,-2,-8); // Position it below the barrel
    b24.scale.set(0.1,0.9,0.1);
   b24.rotation.x = Math.PI/8;
  ml.add(b24);
   //trigger
   const b246 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b246.position.set(0,-1.6,-6.5); // Position it below the barrel
    b246.scale.set(0.1,0.9,0.1);
   b246.rotation.x = Math.PI/2;
  ml.add(b246);
   const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial = new THREE.MeshPhongMaterial( { color: 0x000000,envMap:scene.environment } ); // Red color
  const cylinderGeometry1 = new THREE.CylinderGeometry( 0.5, 2, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial1 = new THREE.MeshPhongMaterial( { color: 0x440000,envMap:scene.environment } ); // Red color
 
  //helmet screen
  const c1 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  ml.add( c1 );
  c1.scale.set(1.5,0.3,1.5);
  c1.position.set(0,0,4);
   c1.rotation.x = Math.PI/2;
    // Lighting
    
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  ml.position.x = 0;
  scene.add(ml);
   export default ml;