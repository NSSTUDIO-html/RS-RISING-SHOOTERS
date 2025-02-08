const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const textureLoader53 = new THREE.TextureLoader();
    const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const roughnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
  const texture33 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZoxrS4GI9Wib3BYcUs-aO9RgthnGdSW1D2inUGMhk5Hn0sRbECeIsLFm&s=10');
 export const ultrarider = new THREE.Group();
    // First torus
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    
  const geometry1 = new THREE.TorusGeometry(2, 0.5, 16, 20);
  const geometry33 = new THREE.TorusGeometry(2, 1, 16, 20);
  
  const textureLoader3 = new THREE.TextureLoader();
  const texture = textureLoader3.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOdVUsyCJjgNQDtUHNrQ-UCwOFJ_2ameO7lLxDY5SbvK7UPvG7KIiBB4&s=10');
    const material1 = new THREE.MeshStandardMaterial({ map:texture});
    export const torus11 = new THREE.Mesh(geometry1, material1);
    torus11.position.set(-5, 0, 0);
  torus11.scale.set(1,1,1.5);
    torus11.castShadow = true;
    ultrarider.add(torus11);
  const texture334 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTOZSFLneuPLAwW838ZZ6yMjhBRlc2NCiOw&usqp=CAU');
  const material112 = new THREE.MeshStandardMaterial( { map:texture334,  metalnessMap:metalnessMap2,roughnessMap:roughnessMap2} );

  export const torus33 = new THREE.Mesh(geometry33, material112);
    torus33.position.set(-5, 0, 0);
  torus33.scale.set(0.5,0.5,1);
    torus33.castShadow = true;
    ultrarider.add(torus33);

    // Second torus
  const geometry2 = new THREE.TorusGeometry(2, 0.5,60, 20);
  const material2 = new THREE.MeshStandardMaterial({ map:texture});
    export const torus22 = new THREE.Mesh(geometry2, material2);
    torus22.position.set(5, 0, 0);
  torus22.scale.set(1,1,1.5);
    torus22.castShadow = true;
    ultrarider.add(torus22);
  
 export const torus44 = new THREE.Mesh(geometry33, material112);
    torus44.position.set(5, 0, 0);
  torus44.scale.set(0.5,0.5,1);
    torus44.castShadow = true;
    ultrarider.add(torus44);
  const cylinderGeometry11 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
  
  const torus5 = new THREE.Mesh(cylinderGeometry11, planeMaterial);
    torus5.position.set(5, 0, 0);
  torus5.scale.set(1,1,1);
  torus5.rotation.set(Math.PI,Math.PI/2,Math.PI/2);
    torus5.castShadow = true;
    ultrarider.add(torus5);
  
  const torus6 = new THREE.Mesh(cylinderGeometry11, planeMaterial);
    torus6.position.set(-5, 0, 0);
  torus6.scale.set(1,1,1);
  torus6.rotation.set(Math.PI,Math.PI/2,Math.PI/2);
    torus6.castShadow = true;
    ultrarider.add(torus6);


  const geometry3 = new THREE.BoxGeometry(1, 6, 1); // Width, height, depth
    const material3 = new THREE.MeshStandardMaterial({ map : texture, }); // Red
    
  const cuboid1 = new THREE.Mesh(geometry3, material3);
    cuboid1.position.set(-3,1,1);
  cuboid1.scale.set(0.7,0.8,0.3);
  cuboid1.rotation.set(0,0,-Math.PI/3);
  cuboid1.castShadow = true;
  
    ultrarider.add(cuboid1);
  const cuboid3 = new THREE.Mesh(geometry3, material3);
    cuboid3.position.set(3,0,1);
  cuboid3.scale.set(0.7,0.8,0.3);
  cuboid3.rotation.set(0,0,-Math.PI/2);
  cuboid3.castShadow = true;
  
    ultrarider.add(cuboid3);
  
  const cuboid4 = new THREE.Mesh(geometry3, material3);
    cuboid4.position.set(3,0,-1);
  cuboid4.scale.set(0.7,0.8,0.3);
  cuboid4.rotation.set(0,0,-Math.PI/2);
  cuboid4.castShadow = true;
  
    ultrarider.add(cuboid4);
  
  const cuboid2 = new THREE.Mesh(geometry3, material3);
    cuboid2.position.set(-3,1,-1);
  cuboid2.scale.set(0.7,0.8,0.3);
  cuboid2.rotation.set(0,0,-Math.PI/3);
  cuboid2.castShadow = true;
  
    ultrarider.add(cuboid2);

const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
  const textureLoader = new THREE.TextureLoader();
    
  const texture11 = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZoxrS4GI9Wib3BYcUs-aO9RgthnGdSW1D2inUGMhk5Hn0sRbECeIsLFm&s=10');
  const cylinderMaterial = new THREE.MeshStandardMaterial({ map: texture11 });
  const cylinderMaterial1 = new THREE.MeshStandardMaterial({ map: texture11,emissive:0xffffff });
   
    const c1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c1.position.set(-2,2.1,-1);
  c1.scale.set(0.3,3,0.3);
  c1.rotation.set(0,0,-Math.PI/3);
  c1.castShadow = true;
  ultrarider.add(c1);
  
  const c2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c2.position.set(-2,2.1,1);
  c2.scale.set(0.3,3,0.3);
  c2.rotation.set(0,0,-Math.PI/3);
  c2.castShadow = true;
  ultrarider.add(c2);
  
  const c3 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c3.position.set(-1.5,3,0.5);
  c3.scale.set(0.3,2.2,0.3);
  c3.rotation.set(0,0,-Math.PI/3);
  c3.castShadow = true;
  ultrarider.add(c3);
  
  const c4 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c4.position.set(-1.5,3,-0.5);
  c4.scale.set(0.3,2.2,0.3);
  c4.rotation.set(0,0,-Math.PI/3);
  c4.castShadow = true;
  ultrarider.add(c4);
  
  const c5 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c5.position.set(-1.5,3,0);
  c5.scale.set(0.3,2.2,0.3);
  c5.rotation.set(0,Math.PI/2,-Math.PI/2);
  c5.castShadow = true;
  ultrarider.add(c5);
  
  const c6 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c6.position.set(-1.5,3,1.5);
  c6.scale.set(0.5,0.5,0.5);
  c6.rotation.set(0,Math.PI/2,-Math.PI/2);
  c6.castShadow = true;
  ultrarider.add(c6);
  
  const c7 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c7.position.set(-1.5,3,-1.5);
  c7.scale.set(0.5,0.5,0.5);
  c7.rotation.set(0,Math.PI/2,-Math.PI/2);
  c7.castShadow = true;
  ultrarider.add(c7);
 
  const c8 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c8.position.set(-2,3,-1);
  c8.scale.set(0.2,1,0.2);
  c8.rotation.set(Math.PI,Math.PI/2.5,Math.PI/2);
  c8.castShadow = true;
  ultrarider.add(c8);
  
  const c9 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c9.position.set(-2,3,1);
  c9.scale.set(0.2,1,0.2);
  c9.rotation.set(Math.PI,-Math.PI/2.5,Math.PI/2);
  c9.castShadow = true;
  ultrarider.add(c9);

const geometry11 = new THREE.SphereGeometry( 1, 32, 16 );
// Create a red material
const material11 = new THREE.MeshStandardMaterial( { map:texture33,  metalnessMap:metalnessMap2,roughnessMap:roughnessMap2} );
// Create a mesh with the red sphere geometry and material
const s = new THREE.Mesh( geometry11, material11);
// Add the red sphere to the scene
ultrarider.add( s );
  s.position.set(-0.5,2.5,0);
  s.scale.set(1.5,0.8,1);
  s.castShadow = true;
  
  const s1= new THREE.Mesh( geometry11, material11);

ultrarider.add( s1 );
  s1.position.set(3,2.3,0);
  s1.scale.set(1.4,0.6,0.8);
  s1.rotation.set(Math.PI,Math.PI,Math.PI/6);
  s1.castShadow = true;
  
  const s2= new THREE.Mesh( geometry11, material11);

ultrarider.add( s2 );
  s2.position.set(4,2.7,0);
  s2.scale.set(1.2,0.6,0.8);
  s2.rotation.set(Math.PI,Math.PI,Math.PI);
  s2.castShadow = true;
  
  const seatGeometry = new THREE.BoxGeometry(2.5, 1, 1);
    const seatMaterial = new THREE.MeshStandardMaterial({ color:0x00000,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2});
   
  const seatb = new THREE.Mesh(seatGeometry, seatMaterial);
    seatb.position.set(1, 2, 0);
  seatb.scale.set(1.5,0.6,1.5);
  seatb.rotation.set(0,0,Math.PI);
    seatb.castShadow = true;
    ultrarider.add(seatb);
  
  const cylinderGeometry1 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
    
  const hlight= new THREE.Mesh(cylinderGeometry1, cylinderMaterial1);
    hlight.position.set(-1.5, 2.5, 0);
  hlight.scale.set(0.8,0.8,0.8);
  hlight.rotation.set(0,0,Math.PI/2);
    hlight.castShadow = true;
    ultrarider.add(hlight);
  const spotLight = new THREE.SpotLight( 0xffffff ,1,100);
spotLight.position.set( 1, -1, 0 ); 
ultrarider.add(spotLight);
  //seatbasel
  const sbase= new THREE.Mesh(cylinderGeometry1, material11);
    sbase.position.set(0, 1.5, 0);
  sbase.scale.set(1.5,3,2);
  sbase.rotation.set(0,0,Math.PI/2);
    sbase.castShadow = true;
    ultrarider.add(sbase);
  //engine
  const sbase1= new THREE.Mesh(cylinderGeometry1, material11);
    sbase1.position.set(1.4, -0.8, 0);
  sbase1.scale.set(0.5,1.2,1.5);
  sbase1.rotation.set(0,0,-Math.PI/2.5);
    sbase1.castShadow = true;
    ultrarider.add(sbase1);
  
  const sbase2= new THREE.Mesh(cylinderGeometry1, material11);
    sbase2.position.set(-1, 0, 0);
  sbase2.scale.set(0.5,1.9,1.5);
  sbase2.rotation.set(0,0,Math.PI/4);
    sbase2.castShadow = true;
    ultrarider.add(sbase2);
  
  const sbase3= new THREE.Mesh(cylinderGeometry1, material112);
    sbase3.position.set(1, 0, 0);
  sbase3.scale.set(1.5,0.5,1.5);
  sbase3.rotation.set(0,Math.PI/2,Math.PI/2);
    sbase3.castShadow = true;
    ultrarider.add(sbase3);
  
  const sbase4= new THREE.Mesh(cylinderGeometry1, material11);
    sbase4.position.set(1, 0, 0);
  sbase4.scale.set(1,0.7,1);
  sbase4.rotation.set(0,Math.PI/2,Math.PI/2);
    sbase4.castShadow = true;
    ultrarider.add(sbase4);
  
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    ultrarider.add(ambientLight);
  ultrarider.position.y += 0.5;
  scene.add(ultrarider);

export default ultrarider ;

