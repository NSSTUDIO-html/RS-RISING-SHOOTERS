const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const textureLoader53 = new THREE.TextureLoader();
    const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const roughnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
  const texture33 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZoxrS4GI9Wib3BYcUs-aO9RgthnGdSW1D2inUGMhk5Hn0sRbECeIsLFm&s=10');
  export const racer = new THREE.Group();
    // First torus
  const geometry1 = new THREE.TorusGeometry(2, 0.5, 8, 20);
  const geometry33 = new THREE.TorusGeometry(2, 0.7, 5, 20);
  
  const textureLoader3 = new THREE.TextureLoader();
  const texture = textureLoader3.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGkA-Y-RhuPnUo_rbHenw7P9hEk_kUXuMA&usqp=CAU');
  const material1 = new THREE.MeshStandardMaterial({ map:texture});
   export const torus12 = new THREE.Mesh(geometry1, material1);
    torus12.position.set(-4, 0, 0);
  torus12.scale.set(0.8,0.8,1);
    torus12.castShadow = true;
    racer.add(torus12);
  const texture334 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhu-Qy0ISXTgUAYS2Lx_EOgNZjwUk859MKSQts1xBicQlV-JsaTTTIUU&s=10');
  const material112 = new THREE.MeshStandardMaterial( { map:texture334,  metalnessMap:metalnessMap2,roughnessMap:roughnessMap2} );

  export const torus34 = new THREE.Mesh(geometry33, material112);
    torus34.position.set(-4, 0, 0);
  torus34.scale.set(0.5,0.5,1);
    torus34.castShadow = true;
    racer.add(torus34);
  const cylinderGeometry11 = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
  
  const torus5 = new THREE.Mesh(cylinderGeometry11, planeMaterial);
    torus5.position.set(4, 0, 0);
  torus5.scale.set(1,1,1);
  torus5.rotation.set(Math.PI,Math.PI/2,Math.PI/2);
    torus5.castShadow = true;
    racer.add(torus5);

    // Second torus
  const geometry2 = new THREE.TorusGeometry(2, 0.5,60, 20);
  const material2 = new THREE.MeshStandardMaterial({ map:texture});
   export const torus23 = new THREE.Mesh(geometry2, material2);
    torus23.position.set(4, 0, 0);
  torus23.scale.set(0.8,0.8,1);
    torus23.castShadow = true;
    racer.add(torus23);
  
  export const torus45 = new THREE.Mesh(geometry33, material112);
    torus45.position.set(4, 0, 0);
  torus45.scale.set(0.5,0.5,1);
    torus45.castShadow = true;
    racer.add(torus45);
  
  const torus6 = new THREE.Mesh(cylinderGeometry11, planeMaterial);
    torus6.position.set(-4, 0, 0);
  torus6.scale.set(1,1,1);
  torus6.rotation.set(Math.PI,Math.PI/2,Math.PI/2);
    torus6.castShadow = true;
    racer.add(torus6);

const seatGeometry = new THREE.BoxGeometry(2.5, 1, 1);
  const texture123 = textureLoader3.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1mvTDV2K7IWautAkJYrsc5jUx2eip1LXt3gzh0OXuY3VeIsuhJrySJGO&s=10');
    const seatMaterial = new THREE.MeshStandardMaterial({ map:texture123,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2});
   const seatMaterial1 = new THREE.MeshStandardMaterial({ color:0xff0000,metalnessMap:metalnessMap2,roughnessMap:roughnessMap2,emissive:0xffffff});
   
  const seatb = new THREE.Mesh(seatGeometry, seatMaterial);
    seatb.position.set(1, 2, 0);
  seatb.scale.set(0.5,4,1.5);
  seatb.rotation.set(0,0,-Math.PI/3);
    seatb.castShadow = true;
    racer.add(seatb);
  const seatc = new THREE.Mesh(seatGeometry, seatMaterial1);
    seatc.position.set(2.5, 3, 0);
  seatc.scale.set(0.3,0.3,1.3);
  seatc.rotation.set(0,Math.PI,-Math.PI/2);
    seatc.castShadow = true;
    racer.add(seatc);
  const spotLight = new THREE.SpotLight( 0xffffff ,1,100);
spotLight.position.set( -1, 0, 0 ); 
  spotLight.rotation.set(0,Math.PI/6,0);
racer.add(spotLight);
  const seata = new THREE.Mesh(seatGeometry, seatMaterial);
    seata.position.set(0, 1, 0);
  seata.scale.set(1,3,1.7);
  seata.rotation.set(0,0,-Math.PI);
    seata.castShadow = true;
    racer.add(seata);
  //seatbase
  const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
  const textureLoader = new THREE.TextureLoader();
    const texture11 = textureLoader.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZoxrS4GI9Wib3BYcUs-aO9RgthnGdSW1D2inUGMhk5Hn0sRbECeIsLFm&s=10');
  const cylinderMaterial = new THREE.MeshStandardMaterial({ map: texture11 });
    
  const c7 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c7.position.set(-2,2.5,0);
  c7.scale.set(1,0.6,4);
  c7.rotation.set(Math.PI/2,Math.PI/2.5,Math.PI);
  c7.castShadow = true;
  racer.add(c7);
  const c71 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c71.position.set(1.5,1,0);
  c71.scale.set(1,0.7,3);
  c71.rotation.set(Math.PI/2,-Math.PI/6,Math.PI);
  c71.castShadow = true;
  racer.add(c71);
  const c8= new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c8.position.set(-2,2.5,0);
  c8.scale.set(1,0.6,4);
  c8.rotation.set(Math.PI/2,Math.PI/2,Math.PI);
  c8.castShadow = true;
  racer.add(c8);
  const c9= new THREE.Mesh(cylinderGeometry, seatMaterial);
  c9.position.set(-2,0,-1);
  c9.scale.set(0.5,0.3,4);
  c9.rotation.set(Math.PI,Math.PI/2,Math.PI);
  c9.castShadow = true;
  racer.add(c9);
  const c0= new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c0.position.set(-1.5,1.5,0);
  c0.scale.set(1,0.6,3);
  c0.rotation.set(Math.PI/2,Math.PI,Math.PI);
  c0.castShadow = true;
  racer.add(c0);
  
  const c11= new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c11.position.set(0,0,0);
  c11.scale.set(1.2,1,4);
  c11.rotation.set(Math.PI/2,Math.PI/2,Math.PI);
  c11.castShadow = true;
  racer.add(c11);
  
  const c1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c1.position.set(3,1.5,-1);
  c1.scale.set(0.7,2.5,0.7);
  c1.rotation.set(0,0,Math.PI/4);
  c1.castShadow = true;
  racer.add(c1);
  const c2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c2.position.set(3,1.5,1);
  c2.scale.set(0.7,2.5,0.7);
  c2.rotation.set(0,0,Math.PI/4);
  c2.castShadow = true;
  racer.add(c2);
  
  const c3 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c3.position.set(2,3,0);
  c3.scale.set(0.3,3,0.3);
  c3.rotation.set(0,Math.PI/2,Math.PI/2);
  c3.castShadow = true;
  racer.add(c3);
  
  const c4 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c4.position.set(2,3,3);
  c4.scale.set(0.4,0.5,0.4);
  c4.rotation.set(0,Math.PI/2,Math.PI/2);
  c4.castShadow = true;
  racer.add(c4);
  
  const c5 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
  c5.position.set(2,3,-3);
  c5.scale.set(0.4,0.5,0.4);
  c5.rotation.set(0,Math.PI/2,Math.PI/2);
  c5.castShadow = true;
  racer.add(c5);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    racer.add(ambientLight);
  racer.position.y += 0;
  scene.add(racer);
export default racer ;

