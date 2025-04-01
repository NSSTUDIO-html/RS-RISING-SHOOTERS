
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpjgxgG06_soGXCJnlXWyh2HgPHY9bCTWfyuTyXodLx6K1SEKXRcPaq8&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJ4o2hmoJUxT4vjbBK4LodHhp3HF1N7duSXDeMsfTWWS-8OLDLtYgAEA&s=10');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHG5-ZxfvpOxMmwX5WyiBaExr8kt30JXxStYWfkaKy-GkdUcn3NvnOt3x&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
   export const armysuit = new THREE.Group();

    // Gun barrel (a cylinder)
    const headGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const headGeometry1 = new THREE.CylinderGeometry(3, 2, 5, 32);
    const headGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial4 = new THREE.MeshPhongMaterial({ map:texture1 ,metalness:0.85,roughness:0.0,envMap:scene.environment});
    const barrelMaterial= new THREE.MeshPhongMaterial({ color : 0x000000,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({ emissive:0x87CEEB,color : 0x0000ff,envMap:scene.environment,});
    const barrelMaterial5 = new THREE.MeshPhongMaterial({ color:0x222222,envMap:scene.environment});
    const barrelMaterial3 = new THREE.MeshStandardMaterial({ map:texture3,metalness:0.1,roughness:0.1,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture4,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial1 = new THREE.MeshStandardMaterial({ map : texture5,metalness:0.45,roughness:0.0,envMap:scene.environment});
    // Create a sphere geometry
const geometry = new THREE.SphereGeometry( 3, 32, 32 );

// Create a material
const material = new THREE.MeshPhongMaterial( { color: 0x222222 } );

// Create a mesh (combination of geometry and material)
const sphere = new THREE.Mesh( geometry, barrelMaterial );
sphere.position.set(0,1,0);
// Add the sphere to the scene
armysuit.add( sphere );

  const head = new THREE.Mesh(headGeometry, barrelMaterial4);
    head.rotation.y = Math.PI / 2; // Rotate to make it horizontal
    head.position.set(0,-0.5,1);
  head.scale.set(2.5,0.45,2.5);
   const head1 = new THREE.Mesh(headGeometry, barrelMaterial3);
    head1.rotation.y = Math.PI / 2; // Rotate to make it horizontal
    head1.position.set(0,-1,0);
  head1.scale.set(2.5,0.55,3);
  armysuit.add(head1);
  armysuit.add(head);
   const head1s = new THREE.Mesh(headGeometry, barrelMaterial3);
    head1s.rotation.z = Math.PI / 2; // Rotate to make it horizontal
    head1s.position.set(0,1,0);
  head1s.scale.set(1.5,0.6,1.5);
  armysuit.add(head1s);
   const head1s3 = new THREE.Mesh(headGeometry1, barrelMaterial3);
    head1s3.rotation.x = Math.PI; // Rotate to make it horizontal
    head1s3.position.set(0,-5,0);
  head1s3.scale.set(1.5,0.6,1);
  armysuit.add(head1s3);
   
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ map: texture1 ,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b.position.set(0,2,1.8); // Position it below the barrel
    b.scale.set(0.7,0.2,0.35);
  armysuit.add(b);
   const b3 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b3.position.set(1,2,1.5); // Position it below the barrel
    b3.scale.set(0.7,0.2,0.35);
   b3.rotation.y = Math.PI/6;
  armysuit.add(b3);
   const b2 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b2.position.set(-1,2,1.5); // Position it below the barrel
    b2.scale.set(0.7,0.2,0.35);
   b2.rotation.y = -Math.PI/6;
  armysuit.add(b2);
   const b23 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b23.position.set(1.5,2,0.7); // Position it below the barrel
    b23.scale.set(0.7,0.2,0.35);
   b23.rotation.y = Math.PI/3;
  armysuit.add(b23);
   const b24 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b24.position.set(-1.5,2,0.7); // Position it below the barrel
    b24.scale.set(0.7,0.2,0.35);
   b24.rotation.y = -Math.PI/3;
  armysuit.add(b24);
   //sides of mask
   const c24 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    c24.position.set(2.2,-0.5,1.5); // Position it below the barrel
    c24.scale.set(0.2,0.5,0.5);
   c24.rotation.x = Math.PI/2.5;
  armysuit.add(c24);
   const c25 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    c25.position.set(-2.2,-0.5,1.5); // Position it below the barrel
    c25.scale.set(0.2,0.5,0.5);
   c25.rotation.x = Math.PI/2.5;
  armysuit.add(c25);
   const c245 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    c245.position.set(1,-3,2.5); // Position it below the barrel
    c245.scale.set(0.3,0.5,0.3);
   c245.rotation.x = Math.PI/2.5;
   c245.rotation.y = -Math.PI/3;
  armysuit.add(c245);
   const c255 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    c255.position.set(-1,-3,2.5); // Position it below the barrel
    c255.scale.set(0.3,0.5,0.3);
   c255.rotation.x = Math.PI/2.5;
   c255.rotation.y = Math.PI/3;
  armysuit.add(c255);
   const c254 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    c254.position.set(0,-2,1); // Position it below the barrel
    c254.scale.set(0.5,1,0.2);
   c254.rotation.z = Math.PI/2;
  // c255.rotation.y = Math.PI/3;
  armysuit.add(c254);
   const body1 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    body1.position.set(0,-15,0); // Position it below the barrel
    body1.scale.set(5,4,0.6);
   body1.rotation.z = Math.PI/2;
  
  armysuit.add(body1);
   const body2 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body2.position.set(0,-12,1); // Position it below the barrel
    body2.scale.set(2,2,0.6);
   body2.rotation.z = Math.PI/2;
  
  armysuit.add(body2);
   const body23 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body23.position.set(1,-11,2.5); // Position it below the barrel
    body23.scale.set(2,1,0.3);
   body23.rotation.z = Math.PI/4;
  
  armysuit.add(body23);
   const body24 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body24.position.set(-1,-11,2.5); // Position it below the barrel
    body24.scale.set(2,1,0.3);
   body24.rotation.z = -Math.PI/4;
  
  armysuit.add(body24);
   const body245 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body245.position.set(0,-9,2.49); // Position it below the barrel
    body245.scale.set(1.5,0.7,0.3);
   body245.rotation.z = -Math.PI;
  
  armysuit.add(body245);
   const body2s45 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body2s45.position.set(3.5,-12,2.49); // Position it below the barrel
    body2s45.scale.set(1.5,0.7,0.3);
   body2s45.rotation.z = Math.PI/2.3;
  
  armysuit.add(body2s45);
   const body2s4 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body2s4.position.set(-3.5,-12,2.49); // Position it below the barrel
    body2s4.scale.set(1.5,0.7,0.3);
   body2s4.rotation.z = -Math.PI/2.3;
  
  armysuit.add(body2s4);
   const body2s4s = new THREE.Mesh(headGeometry, barrelMaterial3);
    body2s4s.position.set(0,-7,0); // Position it below the barrel
    body2s4s.scale.set(1.5,1.8,3);
   body2s4s.rotation.z = -Math.PI/2;
  
  armysuit.add(body2s4s);
   const body2ss = new THREE.Mesh(headGeometry, barrelMaterial3);
    body2ss.position.set(0,-22,0); // Position it below the barrel
    body2ss.scale.set(8,0.3,4);
   body2ss.rotation.z = -Math.PI;
  
  armysuit.add(body2ss);
   const body2s3s = new THREE.Mesh(headGeometry, barrelMaterial3);
    body2s3s.position.set(5,-15,0); // Position it below the barrel
    body2s3s.scale.set(3,1.5,3);
   body2s3s.rotation.z = -Math.PI;
  
  armysuit.add(body2s3s);
   const body2s5s = new THREE.Mesh(headGeometry, barrelMaterial3);
    body2s5s.position.set(-5,-15,0); // Position it below the barrel
    body2s5s.scale.set(3,1.5,3);
   body2s5s.rotation.z = -Math.PI;
  
  armysuit.add(body2s5s);
   //shouldhands
   const body2s5s5 = new THREE.Mesh(headGeometry, barrelMaterial3);
    body2s5s5.position.set(-9,-10,0); // Position it below the barrel
    body2s5s5.scale.set(2,0.5,3);
   body2s5s5.rotation.z = -Math.PI/10;
  
  armysuit.add(body2s5s5);
   const body2s55 = new THREE.Mesh(headGeometry, barrelMaterial3);
    body2s55.position.set(9,-10,0); // Position it below the barrel
    body2s55.scale.set(2,0.5,3);
   body2s55.rotation.z = Math.PI/10;
  
  armysuit.add(body2s55);
   
   //shoulders
   const bodyxx = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyxx.position.set(-9.7,-10,0); // Position it below the barrel
    bodyxx.scale.set(1,2,0.5);
   bodyxx.rotation.z = -Math.PI/10;
  
  armysuit.add(bodyxx);
   const bodyxx1 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyxx1.position.set(9.7,-10,0); // Position it below the barrel
    bodyxx1.scale.set(1,2,0.5);
   bodyxx1.rotation.z = Math.PI/10;
  
  armysuit.add(bodyxx1);
   const bodyxx3 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyxx3.position.set(-8,-7,0); // Position it below the barrel
    bodyxx3.scale.set(1.2,1.2,0.5);
   bodyxx3.rotation.z = -Math.PI/3;
  
  armysuit.add(bodyxx3);
   const bodyxx13 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyxx13.position.set(8,-7,0); // Position it below the barrel
    bodyxx13.scale.set(1.2,1.2,0.5);
   bodyxx13.rotation.z = Math.PI/3;
  
  armysuit.add(bodyxx13);
   //shoulder ends
   const bodyx3 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyx3.position.set(-11,-13.5,0); // Position it below the barrel
    bodyx3.scale.set(0.5,1,0.5);
   bodyx3.rotation.z = Math.PI/10;
  
  armysuit.add(bodyx3);
   const bodyx13 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyx13.position.set(11,-13.5,0); // Position it below the barrel
    bodyx13.scale.set(0.5,1,0.5);
   bodyx13.rotation.z = -Math.PI/10;
  
  armysuit.add(bodyx13);
   
   //shoulder arms
   const bodyx33 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyx33.position.set(-5,-6.5,0); // Position it below the barrel
    bodyx33.scale.set(0.8,1,0.5);
   bodyx33.rotation.z = Math.PI;
  
  armysuit.add(bodyx33);
   const bodyx133 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyx133.position.set(5,-6.5,0); // Position it below the barrel
    bodyx133.scale.set(0.8,1,0.5);
   bodyx133.rotation.z = -Math.PI;
  
  armysuit.add(bodyx133);
   //bullet proof jacks
   const bodyx334 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyx334.position.set(-5,-8,2.5); // Position it below the barrel
    bodyx334.scale.set(0.8,1,0.5);
   bodyx334.rotation.x = Math.PI/3;
  
  armysuit.add(bodyx334);
   const bodyx1334 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    bodyx1334.position.set(5,-8,2.5); // Position it below the barrel
    bodyx1334.scale.set(0.8,1,0.5);
   bodyx1334.rotation.x = Math.PI/3;
  
  armysuit.add(bodyx1334);
   const body334 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body334.position.set(-5,-12,3.5); // Position it below the barrel
    body334.scale.set(0.8,1,0.5);
   body334.rotation.x = Math.PI/2;
  
  armysuit.add(body334);
   const body1334 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body1334.position.set(5,-12,3.5); // Position it below the barrel
    body1334.scale.set(0.8,1,0.5);
   body1334.rotation.x = Math.PI/2;
  
  armysuit.add(body1334);
   
   //hands
   const body555 = new THREE.Mesh(headGeometry, barrelMaterial3);
    body555.position.set(-10.5,-17,0); // Position it below the barrel
    body555.scale.set(1.5,1,3);
   body555.rotation.z = -Math.PI/18;
  
  armysuit.add(body555);
   const body5551 = new THREE.Mesh(headGeometry, barrelMaterial3);
    body5551.position.set(10.5,-17,0); // Position it below the barrel
    body5551.scale.set(1.5,1,3);
   body5551.rotation.z = Math.PI/18;
  
  armysuit.add(body5551);
   
   const body552 = new THREE.Mesh(headGeometry, barrelMaterial);
    body552.position.set(-11.5,-22,0); // Position it below the barrel
    body552.scale.set(2,0.2,3.5);
   body552.rotation.z = -Math.PI/18;
  
  armysuit.add(body552);
   const body5521 = new THREE.Mesh(headGeometry, barrelMaterial);
    body5521.position.set(11.5,-22,0); // Position it below the barrel
    body5521.scale.set(2,0.2,3.5);
   body5521.rotation.z = Math.PI/18;
  
  armysuit.add(body5521);
   
   const body5523 = new THREE.Mesh(headGeometry2, barrelMaterial3);
    body5523.position.set(-11.5,-28,0); // Position it below the barrel
    body5523.scale.set(0.7,1,1.5);
   body5523.rotation.z = 2*Math.PI;
  
  armysuit.add(body5523);
   const body5522 = new THREE.Mesh(headGeometry2, barrelMaterial3);
    body5522.position.set(11.5,-28,0); // Position it below the barrel
    body5522.scale.set(0.7,1,1.5);
   body5522.rotation.z = 2*Math.PI;
  
  armysuit.add(body5522);
   
   const body523 = new THREE.Mesh(headGeometry2, barrelMaterial);
    body523.position.set(-13,-26,0); // Position it below the barrel
    body523.scale.set(0.7,1,1);
   body523.rotation.z = 2*Math.PI;
  
  armysuit.add(body523);
   const body522 = new THREE.Mesh(headGeometry2, barrelMaterial);
    body522.position.set(13,-26,0); // Position it below the barrel
    body522.scale.set(0.7,1,1);
   body522.rotation.z = 2*Math.PI;
  
  armysuit.add(body522);
   //hands and fingers
   const body5236 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body5236.position.set(-11.5,-35,0); // Position it below the barrel
    body5236.scale.set(0.7,1.5,0.5);
   body5236.rotation.z = Math.PI;
  
  armysuit.add(body5236);
   const body5226 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body5226.position.set(11.5,-35,0); // Position it below the barrel
    body5226.scale.set(0.7,1.5,0.5);
   body5226.rotation.z = Math.PI;
  
  armysuit.add(body5226);
   const body5261 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body5261.position.set(-11.5,-38,0); // Position it below the barrel
    body5261.scale.set(0.5,1.5,0.4);
   body5261.rotation.z = Math.PI;
  
  armysuit.add(body5261);
   const body526 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body526.position.set(11.5,-38,0); // Position it below the barrel
    body526.scale.set(0.5,1.5,0.4);
   body526.rotation.z = Math.PI;
  
  armysuit.add(body526);
   const body521 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body521.position.set(-11.5,-36.5,3); // Position it below the barrel
    body521.scale.set(0.5,1.5,0.1);
   body521.rotation.z = Math.PI;
  
  armysuit.add(body521);
   const body52 = new THREE.Mesh(bodyGeometry, barrelMaterial);
    body52.position.set(11.5,-36.5,3); // Position it below the barrel
    body52.scale.set(0.5,1.5,0.1);
   body52.rotation.z = Math.PI;
  
  armysuit.add(body52);
   //legs and tammudu
   const body528 = new THREE.Mesh(headGeometry, barrelMaterial);
    body528.position.set(0,-25,0); // Position it below the barrel
    body528.scale.set(8,0.3,4);
   body528.rotation.z = Math.PI;
  
  armysuit.add(body528);
   const body5281 = new THREE.Mesh(headGeometry, barrelMaterial3);
    body5281.position.set(0,-30,0); // Position it below the barrel
    body5281.scale.set(8,0.8,4);
   body5281.rotation.z = Math.PI;
  
  armysuit.add(body5281);
   //legs
   const bodyll = new THREE.Mesh(headGeometry, barrelMaterial3);
    bodyll.position.set(4.7,-41,0); // Position it below the barrel
    bodyll.scale.set(3,1.5,3.5);
   bodyll.rotation.z = Math.PI;
  
  armysuit.add(bodyll);
   const bodyll1 = new THREE.Mesh(headGeometry, barrelMaterial3);
    bodyll1.position.set(-4.7,-41,0); // Position it below the barrel
    bodyll1.scale.set(3,1.5,3.5);
   bodyll1.rotation.z = Math.PI;
  
  armysuit.add(bodyll1);
   const bodyll2 = new THREE.Mesh(headGeometry2, barrelMaterial3);
    bodyll2.position.set(4.7,-54,0); // Position it below the barrel
    bodyll2.scale.set(1,1.5,1.5);
   bodyll2.rotation.z = 2*Math.PI;
  
  armysuit.add(bodyll2);
   const bodyll12 = new THREE.Mesh(headGeometry2, barrelMaterial3);
    bodyll12.position.set(-4.7,-54,0); // Position it below the barrel
    bodyll12.scale.set(1,1.5,1.5);
   bodyll12.rotation.z = 2*Math.PI;
  
  armysuit.add(bodyll12);
   //leg connectx
   const bodyll3 = new THREE.Mesh(headGeometry, barrelMaterial);
    bodyll3.position.set(4.7,-47,0); // Position it below the barrel
    bodyll3.scale.set(3,0.5,4);
   bodyll3.rotation.z = Math.PI;
  
  armysuit.add(bodyll3);
   const bodyll123 = new THREE.Mesh(headGeometry, barrelMaterial);
    bodyll123.position.set(-4.7,-47,0); // Position it below the barrel
    bodyll123.scale.set(3,0.5,4);
   bodyll123.rotation.z = 2*Math.PI;
  
  armysuit.add(bodyll123);
   //shoes
   const bodyll34 = new THREE.Mesh(headGeometry, barrelMaterial);
    bodyll34.position.set(4.7,-60,1.5); // Position it below the barrel
    bodyll34.scale.set(1,0.5,5);
   bodyll34.rotation.z = Math.PI/2;
  
  armysuit.add(bodyll34);
   const bodyll341 = new THREE.Mesh(headGeometry, barrelMaterial);
    bodyll341.position.set(-4.7,-60,1.5); // Position it below the barrel
    bodyll341.scale.set(1,0.5,5);
   bodyll341.rotation.z = Math.PI/2;
  
  armysuit.add(bodyll341);
   
  armysuit.position.y = 25;
  scene.add(armysuit);
  
   export default armysuit;

