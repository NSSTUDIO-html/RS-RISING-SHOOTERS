
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //const renderer = new THREE.WebGLRenderer();
   // renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);
export const AZ = new THREE.Group();
   import { ml } from '/storage/emulated/0/ml.js';
AZ.add(ml);
    ml.position.set(19,10,25);
    ml.rotation.set(0,2*Math.PI,0);
   ml.scale.set(2,2,1.5);
   
   import { mg } from '/storage/emulated/0/mg.js';
AZ.add(mg);
    mg.position.set(-15,20,10);
    mg.rotation.set(0,2*Math.PI,0);
   mg.scale.set(2,2,1.5);
   import { pbl } from '/storage/emulated/0/bl.js';
AZ.add(pbl);
    pbl.position.set(-15,10,25);
    pbl.rotation.set(0,2*Math.PI,0);
   pbl.scale.set(2,2,1.5);
   
   import { ft } from '/storage/emulated/0/ft.js';
AZ.add(ft);
    ft.position.set(15,20,17);
    ft.rotation.set(0,2*Math.PI,0);
   ft.scale.set(2,2,1.5);
   import { gun } from '/storage/emulated/0/hmg.js';
AZ.add(gun);
    gun.position.set(0,20,-40);
    gun.rotation.set(0,Math.PI,0);
   gun.scale.set(2.5,2,1.5);
   
   import { mb } from '/storage/emulated/0/mb.js';
AZ.add(mb);
    mb.position.set(0,5,-40);
    mb.rotation.set(0,Math.PI,0);
   mb.scale.set(2.5,2,1.5);
 
    
const textureLoader53 = new THREE.TextureLoader();
    
const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');
const texture1 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GtJ_8kj3MJ65YkwovMzeIDLDr4MTEFJMgadTiBMMAGswSJRZT287zCsb&s=10');
   const texture2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMAENWVbniuzGMcdMJ_6FFaqd8qU6tg9IP6f-rq9YkFn6dAP6Ils6dmp5&s=10');
    const texture3 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAg5_BfdzuSS44pB2wJYsHNgdC5_sj5hZcfQ&usqp=CAU');
   const texture4 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHxOHYfZGsWPLHy2TikEz_8rAnupQTUZx4gAQDmVJXrQxOn4s1QIlOTk&s=10');
   const texture5 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwARDqWEUA1Oc6_KqnWcs5bKKyoCI6OKLHMRMiXE9SLUtx1jEmH5vMfspA&s=10');
   
    // Create a simple gun-like shape using basic geometries
    

    // Gun barrel (a cylinder)
    const barrelGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const barrelGeometry1 = new THREE.CylinderGeometry(0.3, 1.2, 2, 32);
    const barrelGeometry2 = new THREE.CylinderGeometry(2.7, 1.5, 10, 32);
    
   const barrelMaterial3 = new THREE.MeshStandardMaterial({ map:texture1 ,metalness:0.0,roughness:0.0,envMap:scene.environment});
    const barrelMaterial = new THREE.MeshPhongMaterial({ color : 0x404040,envMap:scene.environment});
    const barrelMaterial2 = new THREE.MeshStandardMaterial({color : 0xffffff,envMap:scene.environment,});
    const barrelMaterial4 = new THREE.MeshStandardMaterial({ color:0x222222,metalness:1.5,roughness:0.5,envMap:scene.environment});
    const barrelMaterial5 = new THREE.MeshPhongMaterial({ map:texture3,metalnessMap:metalnessMap2,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial6 = new THREE.MeshStandardMaterial({ map : texture4,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const barrelMaterial44 = new THREE.MeshStandardMaterial({ map : texture5,metalness:0.45,roughness:0.0,transparent:true,opacity:0.9,envMap:scene.environment});
    //headlights and car front
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel.position.set(12,7,22);
  barrel.scale.set(2,0.4,2);
  AZ.add(barrel);
   const barrel1 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel1.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel1.position.set(-12,7,22);
  barrel1.scale.set(2,0.4,2);
  AZ.add(barrel1);
   const barrel2 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel2.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel2.position.set(12,7,22.5);
  barrel2.scale.set(1.8,0.4,1.8);
  AZ.add(barrel2);
   const barrel12 = new THREE.Mesh(barrelGeometry, barrelMaterial2);
    barrel12.rotation.x = -Math.PI / 2; // Rotate to make it horizontal
    barrel12.position.set(-12,7,22.5);
  barrel12.scale.set(1.8,0.4,1.8);
  AZ.add(barrel12);
   const barrel123 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel123.rotation.z = Math.PI/2; // Rotate to make it horizontal
    barrel123.position.set(-15,-3,15);
  barrel123.scale.set(3,1,3);
  AZ.add(barrel123);
   const barrel153 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel153.rotation.z = Math.PI/2; // Rotate to make it horizontal
    barrel153.position.set(15,-3,15);
  barrel153.scale.set(3,1,3);
  AZ.add(barrel153);
   const barrel154 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel154.rotation.z = Math.PI/2; // Rotate to make it horizontal
    barrel154.position.set(0,-3,15);
  barrel154.scale.set(1.5,3,1.5);
  AZ.add(barrel154);
   //tirebaseback
   const barrel1545 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel1545.rotation.z = Math.PI/2; // Rotate to make it horizontal
    barrel1545.position.set(0,-3,-25);
  barrel1545.scale.set(3,4,3);
  AZ.add(barrel1545);
   const barrel155 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel155.rotation.z = Math.PI/2; // Rotate to make it horizontal
    barrel155.position.set(0,-3,15);
  barrel155.scale.set(2.5,1,2.5);
  AZ.add(barrel155);
   const barrel157 = new THREE.Mesh(barrelGeometry, barrelMaterial);
    barrel157.rotation.x = -Math.PI/10; // Rotate to make it horizontal
    barrel157.position.set(0,-1,13);
  barrel157.scale.set(2.5,1,2.5);
  AZ.add(barrel157);
   
   
   //car front
   const bodyGeometry = new THREE.BoxGeometry(3, 3, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color:0x222222,metalness:0.85,roughnessMap:0.0,envMap:scene.environment});
    const b = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b.position.set(0,2.5,-5); // Position it below the barrel
    b.scale.set(10,0.2,4);
  AZ.add(b);
   const b5 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b5.position.set(0,0,-13); // Position it below the barrel
    b5.scale.set(10,2,4);
  AZ.add(b5);
   const b1 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b1.position.set(0,7,16); // Position it below the barrel
    b1.scale.set(12,2,1.5);
  AZ.add(b1);
   const b21 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b21.position.set(0,5,16); // Position it below the barrel
    b21.scale.set(8,2,1.45);
  AZ.add(b21);
   const b31 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b31.position.set(0,14,10); // Position it below the barrel
    b31.scale.set(12,3,0.1);
   b31.rotation.x = -Math.PI/10;
  AZ.add(b31);
   const b315 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b315.position.set(0,14,10); // Position it below the barrel
    b315.scale.set(11,2.5,0.2);
   b315.rotation.x = -Math.PI/10;
  AZ.add(b315);
   const b316 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b316.position.set(0,14,10); // Position it below the barrel
    b316.scale.set(3,2.8,0.25);
   b316.rotation.x = -Math.PI/10;
  AZ.add(b316);
   const b3 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b3.position.set(0,7,23); // Position it below the barrel
    b3.scale.set(6,1.6,0.25);
   b3.rotation.x = -Math.PI;
  AZ.add(b3);
   const b55 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b55.position.set(10,3,-2); // Position it below the barrel
    b55.scale.set(3,1.6,1);
   b55.rotation.x = -Math.PI;
  AZ.add(b55);
   const b556 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b556.position.set(-10,3,-2); // Position it below the barrel
    b556.scale.set(3,1.6,1);
   b556.rotation.x = -Math.PI;
  AZ.add(b556);
   const b557 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b557.position.set(10,8,-5.5); // Position it below the barrel
    b557.scale.set(3,1,2);
   b557.rotation.x = -Math.PI/2;
  AZ.add(b557);
   const b5567 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b5567.position.set(-10,8,-5.5); // Position it below the barrel
    b5567.scale.set(3,1,2);
   b5567.rotation.x = -Math.PI/2;
  AZ.add(b5567);
   const b5577 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b5577.position.set(0,3,-20); // Position it below the barrel
    b5577.scale.set(9,1,1);
   b5577.rotation.x = -Math.PI;
  AZ.add(b5577);
   const b55678 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b55678.position.set(0,7,-24); // Position it below the barrel
    b55678.scale.set(9,1,2);
   b55678.rotation.x = -Math.PI/2;
  AZ.add(b55678);
   const b555 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b555.position.set(16,7,-10); // Position it below the barrel
    b555.scale.set(3,1,4);
   b555.rotation.z = -Math.PI/2;
  AZ.add(b555);
   const b5565 = new THREE.Mesh(bodyGeometry, barrelMaterial3);
    b5565.position.set(-16,7,-10); // Position it below the barrel
    b5565.scale.set(3,1,4);
   b5565.rotation.z = -Math.PI/2;
  AZ.add(b5565);
   const b5557 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b5557.position.set(16,11,-12); // Position it below the barrel
    b5557.scale.set(5,0.5,4);
   b5557.rotation.z = -Math.PI/2;
  AZ.add(b5557);
   const b55657 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    b55657.position.set(-16,11,-12); // Position it below the barrel
    b55657.scale.set(5,0.5,4);
   b55657.rotation.z = -Math.PI/2;
  AZ.add(b55657);
   const bc = new THREE.Mesh(bodyGeometry, barrelMaterial44);
    bc.position.set(0,18,-13); // Position it below the barrel
    bc.scale.set(10.5,0.5,4.5);
   bc.rotation.z = -Math.PI;
  AZ.add(bc);
   const bc1 = new THREE.Mesh(bodyGeometry, barrelMaterial4);
    bc1.position.set(0,9,-33); // Position it below the barrel
    bc1.scale.set(10.8,2.5,2);
   bc1.rotation.x = -Math.PI/2;
  AZ.add(bc1);
   const geometry1 = new THREE.TorusGeometry(2, 1, 20, 200);
    const textureLoader3 = new THREE.TextureLoader();
    const texture11 = textureLoader3.load('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgBKwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAgEDB//EACYQAQEBAAAFBAICAwAAAAAAAAABEQIhMfDxEkFhcTLhsdEicqH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APEgGkAAAAAAAAAAAaDGjcBg1qokUYCRTMBjFMRWDWAAAAAAAAAAAAAAAAAAAAAAANABuDYqBjW4ozGtxuAnDFYYCDFYYCLGYuxmIJrFVgMY1iKAAAAAAAAAAAAAAAAAAA0BsI2KjY2QkbIoSNkbIqQGYYrFekEYYvD0g54zHSxNgqLE46WJsERYyxVjKCBrEGAIoAAAAAAAAAAAAAAAA0aDY2MVFRsVGRUUbIuQkXIDM536Vjc536biKmQxedPpl6oIsTY62JsUcbE2Otn8IsVHOxNi6mgisqqmpRjK1iKAAAAAAAAAAAAAAAQGtjGxRUbGRUVFRfCmL4RVcLpE8K4yGc/C5OXgk539qk75gmTp+PQs5+Fz2+vllnfMEWcv7xF638XW9PKOL3/YOfEiutjlxLBzqaupqoipqqmgkbWMqwAAAAAAAAAAAAAAgQGtjGxUUqJioouL4URfCDpO+i530RFzp5ZVX+O36+Fzp4TLzv7VL3zBs9PLp/xl9O+Gz2+vllvfMGX05fv4Rev9Yu3l5Ret/YJvfRz4u+jpxOdWDnU1VTVRFTVVIMY2pZUAAAAAAAAAAAAAAIANbGNUVFREVFRcXwucVwg68NdI5SrlRV+/hcvfJz3nVagrf9Ten38J3p9M0G28vCeL3/FtqbQZXPiVaiqJqa2pqjE1tTRGAxlQAAAAAAAAAAAAAAABrGg1UTGyqi4qIlbKo6SrlcpWyg7arXHVTiRXSU1z9R6jBdqbU6m3qCrUaWptVCpLWWgyspWIDARQAAAAAAAAAAAAAAABrAGtjARcbKiNlUXK2VGt1R001Gt0F6ajTQVrNTpoNtTaVloFrLSsQYDEUAAAAAAAAAAAAAAAAAAAAawBrZWAKhrBUVrUa3QVokUaaxmpo3WWsAbawYit1gAAAAAAAAAAAAAAAAAAAAAAAAANAAAAAQAFGAAAAAAAAAAAAAAAD//Z');
  const silver =new  THREE.Color('black');
   const material11 = new THREE.MeshPhongMaterial({ color:silver,metalness:0.5,roughness:0.2});
    const torus1 = new THREE.Mesh(geometry1, material11);
    torus1.position.set(-15, -3, 15);
    torus1.scale.set(2.5,2.5,5);
   torus1.rotation.y = Math.PI/2;
    torus1.castShadow = true;
    AZ.add(torus1);
   const torus2 = new THREE.Mesh(geometry1, material11);
    torus2.position.set(15, -3, 15);
    torus2.scale.set(2.5,2.5,5);
   torus2.rotation.y = Math.PI/2;
    torus2.castShadow = true;
    AZ.add(torus2);
   const torus12 = new THREE.Mesh(geometry1, material11);
    torus12.position.set(-15, -3, -25);
    torus12.scale.set(2.5,2.5,5);
   torus12.rotation.y = Math.PI/2;
    torus12.castShadow = true;
    AZ.add(torus12);
   const torus22 = new THREE.Mesh(geometry1, material11);
    torus22.position.set(15, -3, -25);
    torus22.scale.set(2.5,2.5,5);
   torus22.rotation.y = Math.PI/2;
    torus22.castShadow = true;
    AZ.add(torus22);
  
  
 

   //const ambientLight1 = new THREE.AmbientLight(0x404040, 2);
    //pistol.add(ambientLight1);
  AZ.position.x = 0;
  scene.add(AZ);
export default AZ;
   
