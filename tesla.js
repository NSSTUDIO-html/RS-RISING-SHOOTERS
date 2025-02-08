const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const textureLoader53 = new THREE.TextureLoader();
    const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const roughnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
  const texture33 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZoxrS4GI9Wib3BYcUs-aO9RgthnGdSW1D2inUGMhk5Hn0sRbECeIsLFm&s=10');
  export const TESLA = new THREE.Group();
    // First torus tires
  const geometry1 = new THREE.TorusGeometry(1, 0.5, 10, 20);
  
  const textureLoader3 = new THREE.TextureLoader();
  const texture = textureLoader3.load('TYRE.jpg');
  const material1 = new THREE.MeshStandardMaterial({ map:texture,metalnessMap:metalnessMap2,emissive:0x000000});
   export const torus1s = new THREE.Mesh(geometry1, material1);
    torus1s.position.set(-5, 0.5, -4);
  torus1s.scale.set(2,2,3);
    torus1s.castShadow = true;
    TESLA.add(torus1s);
  const cylinderGeometry11 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
  const texture111 = textureLoader3.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHDJjzXbjTNra_I0eIrnXN6SipvmtZ-U7GA&usqp=CAU');
  const material111 = new THREE.MeshStandardMaterial({ map:texture111,metalnessMap:metalnessMap2,emissive:0x000000});
   
 
  export const torus3s = new THREE.Mesh(geometry1, material1);
    torus3s.position.set(5, 0.5, -4);
  torus3s.scale.set(2,2,3);
    torus3s.castShadow = true;
    TESLA.add(torus3s);
  

    // Second torus tires
  const geometry2 = new THREE.TorusGeometry(1, 0.5,10, 20);
  const material2 = new THREE.MeshStandardMaterial({ map:texture});
   export const torus2s = new THREE.Mesh(geometry2, material2);
    torus2s.position.set(-5, 0.5, 4);
  torus2s.scale.set(2,2,3);
    torus2s.castShadow = true;
    TESLA.add(torus2s);
 export const torus5s = new THREE.Mesh(geometry2, material2);
    torus5s.position.set(5, 0.5, 4);
  torus5s.scale.set(2,2,3);
  torus5s.rotation.set(Math.PI,Math.PI,Math.PI/2);
    torus5s.castShadow = true;
    TESLA.add(torus5s);
 //car tire connectors
  const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
  const cylinderMaterial = new THREE.MeshStandardMaterial({ color:0x000000 });
    
  const c7 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c7.position.set(5,0.5,0);
  c7.scale.set(2,5,2);
  c7.rotation.set(Math.PI,Math.PI/2,Math.PI/2);
  c7.castShadow = true;
  TESLA.add(c7);
  
  const c8 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c8.position.set(-5,0.5,0);
  c8.scale.set(2,5,2);
  c8.rotation.set(Math.PI,Math.PI/2,Math.PI/2);
  c8.castShadow = true;
  TESLA.add(c8);
  const c9 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c9.position.set(0,0.5,0);
  c9.scale.set(2,5,2);
  c9.rotation.set(Math.PI,Math.PI,Math.PI/2);
  c9.castShadow = true;
  TESLA.add(c9);
  const c91 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c91.position.set(0,2,0);
  c91.scale.set(3,2.5,3);
  c91.rotation.set(Math.PI/2,Math.PI/2,Math.PI/2);
  c91.castShadow = true;
  TESLA.add(c91);
//carbase and cargeometry
  const seatGeometry = new THREE.BoxGeometry(2.5, 1, 1);
  const texture123 = textureLoader3.load('Silvermetal.jpg');
   const texture12 = textureLoader3.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLCtE4LvxFHn9GtgjXAtfWWFcH13NsTJLC9Bq0qjl0_mclYwqhSWj9J5V&s=10');
   const seatMaterial = new THREE.MeshStandardMaterial({ map:texture123,metalnessMap:texture123,roughness:0.0,envMap:scene.environment});
   const seatMaterial1 = new THREE.MeshStandardMaterial({ color:0x000000,metalnessMap:metalnessMap2,roughnessMap:metalnessMap2,envMap:scene.environment});
   const seatMaterial11 = new THREE.MeshStandardMaterial({ emissive:0xffffff,metalnessMap:metalnessMap2,roughnessMap:metalnessMap2});
  
  const seatMaterial2 = new THREE.MeshStandardMaterial({ map:texture12,metalnessMap:texture123,roughnessMap:texture123});
   
  const carbase = new THREE.Mesh(seatGeometry, seatMaterial);
    carbase.position.set(0, 5, 0);
  carbase.scale.set(0.7,9,5);
  carbase.rotation.set(Math.PI,0,Math.PI/2.2);
    carbase.castShadow = true;
    TESLA.add(carbase);
  const carbase2 = new THREE.Mesh(seatGeometry, seatMaterial);
    carbase2.position.set(2, 6, 0);
  carbase2.scale.set(0.7,6,4.9);
  carbase2.rotation.set(Math.PI,0,-Math.PI/2.2);
    carbase2.castShadow = true;
    TESLA.add(carbase2);
  const carbase3 = new THREE.Mesh(seatGeometry, seatMaterial);
    carbase3.position.set(-2.3, 5.6, 0);
  carbase3.scale.set(0.6,4.2,4.5);
  carbase3.rotation.set(Math.PI,0,Math.PI/3);
    carbase3.castShadow = true;
    TESLA.add(carbase3);
  // mirror base
  const mcarbase3 = new THREE.Mesh(seatGeometry, seatMaterial1);
    mcarbase3.position.set(-2.4, 5.6, 0);
  mcarbase3.scale.set(0.6,3.5,4);
  mcarbase3.rotation.set(Math.PI,0,Math.PI/3);
    mcarbase3.castShadow = true;
    TESLA.add(mcarbase3);
  
  const mcarbase1 = new THREE.Mesh(seatGeometry, seatMaterial1);
    mcarbase1.position.set(-2, 5.6, 0);
  mcarbase1.scale.set(0.6,4,4.6);
  mcarbase1.rotation.set(Math.PI,0,Math.PI/3);
    mcarbase1.castShadow = true;
    TESLA.add(mcarbase1);
  const carbase4 = new THREE.Mesh(seatGeometry, seatMaterial);
    carbase4.position.set(-4.2, 4.3, 1.5);
  carbase4.scale.set(0.6,1,2);
  carbase4.rotation.set(-Math.PI,Math.PI/4,Math.PI/2);
    carbase4.castShadow = true;
    TESLA.add(carbase4);
  const carbase5 = new THREE.Mesh(seatGeometry, seatMaterial);
    carbase5.position.set(-4.2, 4.3, -1.5);
  carbase5.scale.set(0.6,1,2);
  carbase5.rotation.set(-Math.PI,-Math.PI/4,Math.PI/2);
    carbase5.castShadow = true;
    TESLA.add(carbase5);
  const carbase6 = new THREE.Mesh(seatGeometry, seatMaterial);
    carbase6.position.set(-4.8, 4.3, 0);
  carbase6.scale.set(0.6,1,4);
  carbase6.rotation.set(-Math.PI,-Math.PI,Math.PI/2);
    carbase6.castShadow = true;
    TESLA.add(carbase6);
  const hcarbase4 = new THREE.Mesh(seatGeometry, seatMaterial11);
    hcarbase4.position.set(-4.9, 4.5, 2);
  hcarbase4.scale.set(0.5,1,0.2);
  hcarbase4.rotation.set(-Math.PI,Math.PI/4,Math.PI/2);
    hcarbase4.castShadow = true;
    TESLA.add(hcarbase4);
  const hcarbase5 = new THREE.Mesh(seatGeometry, seatMaterial11);
    hcarbase5.position.set(-4.9, 4.5, -2);
  hcarbase5.scale.set(0.5,1,0.2);
  hcarbase5.rotation.set(-Math.PI,-Math.PI/4,Math.PI/2);
    hcarbase5.castShadow = true;
    TESLA.add(hcarbase5);
  const hcarbase6 = new THREE.Mesh(seatGeometry, seatMaterial11);
    hcarbase6.position.set(-5, 4.5, 0);
  hcarbase6.scale.set(0.5,0.2,3.5);
  hcarbase6.rotation.set(Math.PI,Math.PI,-Math.PI/3);
    hcarbase6.castShadow = true;
    TESLA.add(hcarbase6);
const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    TESLA.add(ambientLight);
  TESLA.position.y += 0.5;
  TESLA.scale.set(1,1,1.2);
  scene.add(TESLA);
export default TESLA ;

