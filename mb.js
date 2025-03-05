
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQhvvwA8rG4oenUNj4vfoBbNWTU9RTEeX4nVB5kP1TlxgzXuHzqwAWhI&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
  export  const mb = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial1 = new THREE.MeshStandardMaterial({ map:texture1 ,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial = new THREE.MeshStandardMaterial({ color : 0x404040,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ emissive:0x87CEEB,color : 0x0000ff,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshPhongMaterial({ color:0x000000,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(-1,-0.5,0);
  barrel.scale.set(0.6,1.5,0.6);
  mb.add(barrel);
   const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel2.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(1,-0.5,0);
  barrel2.scale.set(0.6,1.5,0.6);
  mb.add(barrel2);
   const barrel3 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel3.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel3.position.set(0,1,0);
  barrel3.scale.set(0.6,1.5,0.6);
  mb.add(barrel3);
   const barrela = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrela.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrela.position.set(-1,-0.5,0.5);
  barrela.scale.set(0.2,1.5,0.2);
  mb.add(barrela);
   const barrel2a = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel2a.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2a.position.set(1,-0.5,0.5);
  barrel2a.scale.set(0.2,1.5,0.2);
  mb.add(barrel2a);
   const barrel3a = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel3a.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel3a.position.set(0,1,0.5);
  barrel3a.scale.set(0.2,1.5,0.2);
  mb.add(barrel3a);
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b.position.set(1,0.5,1.5); // Position it below the barrel
    b.scale.set(0.3,1,1);
   b.rotation.z = Math.PI/6;
  mb.add(b);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b1.position.set(-1,0.5,1.5); // Position it below the barrel
    b1.scale.set(0.3,1,1);
   b1.rotation.z = -Math.PI/6;
  mb.add(b1);
   const b12 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b12.position.set(0,-1,1.5); // Position it below the barrel
    b12.scale.set(0.3,1,1);
   b12.rotation.z = Math.PI/2;
  mb.add(b12);
   const b123 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b123.position.set(0,1.6,1.5); // Position it below the barrel
    b123.scale.set(0.3,0.4,1);
   b123.rotation.z = Math.PI/2;
  mb.add(b123);
   const b132 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b132.position.set(-1.5,-0.8,1.5); // Position it below the barrel
    b132.scale.set(0.3,0.4,1);
   b132.rotation.z = Math.PI/4;
  mb.add(b132);
   const b13 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b13.position.set(1.5,-0.8,1.5); // Position it below the barrel
    b13.scale.set(0.3,0.4,1);
   b13.rotation.z = -Math.PI/4;
  mb.add(b13);
   const b135 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b135.position.set(0,0,-5); // Position it below the barrel
    b135.scale.set(1,1,1);
   b135.rotation.z = Math.PI;
  mb.add(b135);
   const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial = new THREE.MeshPhongMaterial( { color: 0x000000,envMap:scene.environment } ); // Red color
  const cylinderGeometry1 = new THREE.CylinderGeometry( 0.5, 2, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial1 = new THREE.MeshPhongMaterial( { color: 0x440000,envMap:scene.environment } ); // Red color
 
  //helmet screen
  const c1 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  mb.add( c1 );
  c1.scale.set(2,1.7,2);
  c1.position.set(0,0,-3);
   c1.rotation.x = Math.PI/2;
   const c12 = new THREE.Mesh( cylinderGeometry, barrelMaterial1 );
  mb.add( c12 );
  c12.scale.set(2.3,0.5,2.3);
  c12.position.set(0,0,-10);
   c12.rotation.x = Math.PI/2;
    
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  mb.position.x = 0;
  scene.add(mb);
   export default mb;