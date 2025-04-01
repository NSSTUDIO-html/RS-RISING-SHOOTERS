
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   // const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
   // document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fq8lbQ_AJzTIkuY9Yal6hn4sW6FpaNuPz73dLfOJi2Z9DLvH-0qiGz0&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHxOHYfZGsWPLHy2TikEz_8rAnupQTUZx4gAQDmVJXrQxOn4s1QIlOTk&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
  export  const BASE = new THREE.Group();
   import { MMG } from '/storage/emulated/0/MMG.js';
scene.add(MMG);
    MMG.position.set(0,15,0);
    MMG.rotation.set(0,2*Math.PI,0);
   MMG.scale.set(12,1,1);
//import { AZ } from '/storage/emulated/0/AZ.js';
//scene.add(AZ);
   // AZ.position.set(-3,2,0);
  //  AZ.rotation.set(0,2*Math.PI,0);
  // AZ.scale.set(0.08,0.08,0.08);
   // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(1, 0.1, 2, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial2 = new THREE.MeshStandardMaterial({ map:texture1 ,envMap:scene.environment});
    const barrelMaterial = new THREE.MeshStandardMaterial({ color : 0x404040,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial4 = new THREE.MeshStandardMaterial({color : 0x4f4f4f,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshPhongMaterial({ color:0xffa500,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture4,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ map : texture5,metalness:0.45,roughness:0.0,envMap:scene.environment});
    
 // const cy = new THREE.Mesh(barrelGeometry, barrelMaterial1);
   // cy.rotation.z = Math.PI/2; // Rotate to make it horizontal
   // cy.position.set(8,5,0);
  //cy.scale.set(1,0.6,8);
  //BASE.add(cy);
   const wall = new THREE.Group();
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color:0x222222,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b.position.set(0,0,0); // Position it below the barrel
    b.scale.set(10,0.5,3);
  BASE.add(b);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b1.position.set(-14,0,0); // Position it below the barrel
    b1.scale.set(1,2.5,3);
  wall.add(b1);
   const b2= new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b2.position.set(14,0,0); // Position it below the barrel
    b2.scale.set(1,2.5,3);
  wall.add(b2);
   const b3 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b3.position.set(0,0,-14); // Position it below the barrel
    b3.scale.set(1,2.5,3);
   b3.rotation.y = Math.PI/2;
  wall.add(b3);
   const b4 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b4.position.set(-7.5,0,13.5); // Position it below the barrel
    b4.scale.set(1,2.5,1);
   b4.rotation.y = Math.PI/2;
  wall.add(b4);
   const b5 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b5.position.set(7.5,0,13.5); // Position it below the barrel
    b5.scale.set(1,2.5,1);
   b5.rotation.y = Math.PI/2;
  wall.add(b5);
   BASE.add(wall);
   
   // Lighting
    //const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
   // directionalLight.position.set(-5, 5, -5);
   // directionalLight.castShadow = true;
   // BASE.add(directionalLight);

   // const pointlight = new THREE.PointLight(0xffffff, 1,10);
   // pointlight.position.set(10,10,10);
          // BASE.add(pointlight);
  
 

   const ambientLight1 = new THREE.AmbientLight(0x000000, 1);
    BASE.add(ambientLight1);
  BASE.position.x = 0;
  scene.add(BASE);
export default BASE;
   
    