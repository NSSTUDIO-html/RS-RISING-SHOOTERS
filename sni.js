
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0x444442 );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzh6WibbezzSfixdsz9Y4oWWtAGSFfDVDWK5z-85o-xB7gAnehzNGDZy1&s=10');
    const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEB9h5IakyY1th2qFJYGZuft99sDzYRi0uQ&usqp=CAU')
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
  export const rifle = new THREE.Group();

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.5, 2, 10, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial = new THREE.MeshStandardMaterial({ color:0xffffff ,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshPhongMaterial({ color : 0x002200,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment,transparent:true,opacity:0.3});
    const barrelMaterial2 = new THREE.MeshPhongMaterial({ color : 0x000000,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ color:0x000000,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture3,normalMap : texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture5,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(0,0.5,0);
  barrel.scale.set(0.5,1,0.5);
  rifle.add(barrel);
  const barrel88 = new THREE.Mesh(barrelGeometry, barrelMaterial3);
    barrel88.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel88.position.set(0,0.5,0.1);
  barrel88.scale.set(0.45,1,0.45);
  rifle.add(barrel88);
  const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel1.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(0,-0.5,0);
  barrel1.scale.set(0.5,1,0.5);
  rifle.add(barrel1);
  const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel2.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(0,1.8,-4);
  barrel2.scale.set(0.5,0.2,0.5);
  rifle.add(barrel2);
  const barrel13 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel13.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel13.position.set(0,1.5,-4);
  barrel13.scale.set(0.5,0.2,0.5);
  rifle.add(barrel13);
  const barrel4 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel4.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel4.position.set(0,1.65,-3.9);
  barrel4.scale.set(0.5,0.2,0.5);
  rifle.add(barrel4);
  const barrel5 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel5.rotation.x = -Math.PI; // Rotate to make it horizontal
    barrel5.position.set(0,1.65,-4.2);
  barrel5.scale.set(0.2,0.2,0.2);
  rifle.add(barrel5);
  const barrel6 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel6.rotation.x = -Math.PI/2; // Rotate to make it horizontal
    barrel6.position.set(0,1.65,-4.6);
  barrel6.scale.set(0.4,0.2,0.4);
  rifle.add(barrel6);
  const barrel8 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel8.rotation.x = -Math.PI/2; // Rotate to make it horizontal
    barrel8.position.set(0,1.3,1);
  barrel8.scale.set(0.4,0.2,0.4);
  rifle.add(barrel8);
  const barrel89 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel89.rotation.x = Math.PI/3; // Rotate to make it horizontal
    barrel89.position.set(0,0.8,-0.7);
  barrel89.scale.set(0.4,0.2,0.4);
  rifle.add(barrel89);
  const barrel9 = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    barrel9.rotation.x = -Math.PI/2; // Rotate to make it horizontal
    barrel9.position.set(0,1.3,1.3);
  barrel9.scale.set(0.3,0.2,0.3);
  rifle.add(barrel9);
  const barrel91 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel91.rotation.x = -Math.PI/2; // Rotate to make it horizontal
    barrel91.position.set(0,0,-6);
  barrel91.scale.set(0.6,0.3,0.8);
  rifle.add(barrel91);
  const barrel92 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel92.rotation.x = -Math.PI/2; // Rotate to make it horizontal
    barrel92.position.set(0,-0.5,-7.5);
  barrel92.scale.set(0.8,0.1,1.5);
  rifle.add(barrel92);
  
  const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,normalMap:texture1,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const sword = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword.position.set(0,0,0); // Position it below the barrel
    sword.scale.set(0.32,0.5,1);
  rifle.add(sword);
  const sword1 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword1.position.set(0,-2,0); // Position it below the barrel
    sword1.scale.set(0.2,0.5,0.3);
  sword1.rotation.x = Math.PI/2.3;
  rifle.add(sword1);
  const sword2 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword2.position.set(0,-3.5,0.3); // Position it below the barrel
    sword2.scale.set(0.3,0.55,0.05);
  sword2.rotation.x = Math.PI/2.3;
  rifle.add(sword2);
  const sword24 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword24.position.set(0,-2,-4.5); // Position it below the barrel
    sword24.scale.set(0.3,0.3,0.3);
  sword24.rotation.x = -Math.PI/2.3;
  rifle.add(sword24);
  const sword3 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword3.position.set(0,-1,0); // Position it below the barrel
    sword3.scale.set(0.3,0.65,0.05);
  sword3.rotation.x = Math.PI/2.2;
  rifle.add(sword3);
  const sword34 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword34.position.set(0,-2,-3.5); // Position it below the barrel
    sword34.scale.set(0.3,0.65,0.05);
  sword34.rotation.x = Math.PI/2;
  rifle.add(sword34);
  const sword35 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword35.position.set(0,-1,-2.5); // Position it below the barrel
    sword35.scale.set(0.3,0.65,0.05);
  sword35.rotation.x = Math.PI/10;
  rifle.add(sword35);
  const sword36 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword36.position.set(0,-1,-3.6); // Position it below the barrel
    sword36.scale.set(0.2,0.45,0.04);
  sword36.rotation.x = -Math.PI/6;
  rifle.add(sword36);
  const sword37  = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword37.position.set(0,-1,2); // Position it below the barrel
    sword37.scale.set(0.2,0.9,0.04);
  sword37.rotation.x = -Math.PI/6;
  rifle.add(sword37);
  const sword38 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    sword38.position.set(0,-1,3.3); // Position it below the barrel
    sword38.scale.set(0.2,0.9,0.04);
  sword38.rotation.x = Math.PI/4;
  rifle.add(sword38);
  
   
    const ambientLight = new THREE.DirectionalLight(0x404040, 0.5);
    rifle.add(ambientLight);
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  rifle.position.x = 0;
  scene.add(rifle);
   
   