
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
   // document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkq4WZeSYTVwGb9spn1Ie1GBx8J2LG_qrv1mby71EJbZIcxs1ovAjUWx5N&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHxOHYfZGsWPLHy2TikEz_8rAnupQTUZx4gAQDmVJXrQxOn4s1QIlOTk&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
    const BASE = new THREE.Group();
export const BASE1 = new THREE.Group();

   import { AZ } from '/storage/emulated/0/AZ.js';
scene.add(AZ);
    AZ.position.set(-3,1.5,0);
    AZ.rotation.set(0,2*Math.PI,0);
   AZ.scale.set(0.08,0.08,0.08);
    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(1, 0.1, 2, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial4 = new THREE.MeshStandardMaterial({ map:texture1,transparent:true,opacity:0.8 ,envMap:scene.environment});
    const barrelMaterial = new THREE.MeshStandardMaterial({ color : 0x404040,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({color : 0x4f4f4f,envMap:scene.environment,});
    const barrelMaterial3 = new THREE.MeshPhongMaterial({ color:0xffa500,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture4,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ map : texture5,metalness:0.45,roughness:0.0,envMap:scene.environment});
    
  const cy = new THREE.Mesh(barrelGeometry, barrelMaterial1);
    cy.rotation.z = Math.PI/2; // Rotate to make it horizontal
    cy.position.set(8,5,0);
  cy.scale.set(1,0.6,8);
  BASE.add(cy);
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color:0x222222,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    b.position.set(0,0,0); // Position it below the barrel
    b.scale.set(10,0.5,3);
  BASE.add(b);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b1.position.set(8,2,-5); // Position it below the barrel
    b1.scale.set(2,2,0.5);
  BASE.add(b1);
   const b2 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b2.position.set(8,2,5); // Position it below the barrel
    b2.scale.set(2,2,0.5);
  BASE.add(b2);
   
   const b12 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b12.position.set(-8,2,-5); // Position it below the barrel
    b12.scale.set(1,1,0.5);
  BASE.add(b12);
   const b22 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b22.position.set(-8,2,5); // Position it below the barrel
    b22.scale.set(1,1,0.5);
  BASE.add(b22);
   const b223 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    b223.position.set(-8,4,0); // Position it below the barrel
    b223.scale.set(1,0.5,1.5);
  BASE.add(b223);
   //walls
   const c223 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c223.position.set(-15,2,0); // Position it below the barrel
    c223.scale.set(0.5,2,3);
  BASE.add(c223);
   const c22 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c22.position.set(15,2,0); // Position it below the barrel
    c22.scale.set(0.5,2,3);
  BASE.add(c22);
   const c225 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c225.position.set(0,2,-14.1); // Position it below the barrel
    c225.scale.set(10,2,0.2);
  BASE.add(c225);
   //watch tour
   const c25 = new THREE.Mesh(bodyGeometry, barrelMaterial1);
    c25.position.set(1,4.8,10); // Position it below the barrel
    c25.scale.set(1,4,0.3);
  BASE.add(c25);
   export const c256 = new THREE.Mesh(bodyGeometry, barrelMaterial2);
    c256.position.set(1,11,10); // Position it below the barrel
    c256.scale.set(1.5,0.1,0.5);
  BASE.add(c256);
   // Lighting
   // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
   // directionalLight.position.set(-5, 5, -5);
   // directionalLight.castShadow = true;
    //BASE.add(directionalLight);

   // const pointlight = new THREE.PointLight(0xffffff, 1,10);
   // pointlight.position.set(10,10,10);
          // BASE.add(pointlight);
  
 

   const ambientLight1 = new THREE.AmbientLight(0x404040, 3);
    BASE.add(ambientLight1);
  BASE.position.x = 0;
  
BASE1.add(BASE);
scene.add(BASE1);
   
    