
  // Scene
  const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x00ffff ); // Hexadecimal color (gray in this case)

  // Camera
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 0;

  // Renderer
  //const renderer = new THREE.WebGLRenderer();
 // renderer.setSize( window.innerWidth, window.innerHeight );
  //document.body.appendChild( renderer.domElement );
const textureLoader53 = new THREE.TextureLoader();
    const metalnessMap2 = textureLoader53.load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdN_0FmrQiJUD33tP1M5HBiiSeGCdHT5yApWgtr8idiDTPWaWXLy6TN_CV&s=10');

 export const BOMBER = new THREE.Group();
  // Cylinder
  const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial = new THREE.MeshPhongMaterial( { color: 0x000000,envMap:scene.environment } ); // Red color
  const cylinderGeometry1 = new THREE.CylinderGeometry( 0.5, 2, 3, 32 ); // RadiusTop, RadiusBottom, Height, RadialSegments
  const cylinderMaterial1 = new THREE.MeshPhongMaterial( { color: 0xDEB887,envMap:scene.environment } ); // Red color
 const cylinderMaterial2 = new THREE.MeshPhongMaterial( { color: 0x444444,envMap:scene.environment } ); // Red color
 
  //helmet screen
  const c1 = new THREE.Mesh( cylinderGeometry, cylinderMaterial1 );
  BOMBER.add( c1 );
  c1.scale.set(0.5,2,1);
  c1.position.set(0,0,-0.5);
  c1.rotation.x = Math.PI/2;
  const c2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
  BOMBER.add( c2 );
  c2.scale.set(0.6,1,0.8);
  c2.position.set(0,0,0);
  c2.rotation.x = Math.PI/2;
  const c3 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
  BOMBER.add( c3 );
  c3.scale.set(0.6,0.2,1);
  c3.position.set(0,0,2.21);
  c3.rotation.x = Math.PI/2;
  const c31 = new THREE.Mesh( cylinderGeometry, cylinderMaterial1 );
  BOMBER.add( c31 );
  c31.scale.set(1.3,0.8,1.3);
  c31.position.set(0,-0.5,-2.5);
  c31.rotation.x = Math.PI/2;
  const c312 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
  BOMBER.add( c312 );
  c312.scale.set(1.31,0.6,1.31);
  c312.position.set(0,-0.5,-2.5);
  c312.rotation.x = Math.PI/2;
  const c3125 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
  BOMBER.add( c3125 );
  c3125.scale.set(0.3,1,0.3);
  c3125.position.set(1,0,1);
  c3125.rotation.z = Math.PI/2;
  const c125 = new THREE.Mesh( cylinderGeometry, cylinderMaterial2 );
  BOMBER.add( c125 );
  c125.scale.set(0.3,1,0.6);
  c125.position.set(0,-2.6,-5.5);
  c125.rotation.x = Math.PI/8;
  const c1255 = new THREE.Mesh( cylinderGeometry, cylinderMaterial2 );
  BOMBER.add( c1255 );
  c1255.scale.set(0.1,0.5,0.3);
  c1255.position.set(0,-2,-3.8);
  c1255.rotation.x = -Math.PI/8;
  //const sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 ); // Radius, WidthSegments, HeightSegments
  //const sphereMaterial = new THREE.MeshPhysicalMaterial( { color: 0x000000,metalnessMap:metalnessMap2,roughness:0.0,envMap:scene.environment } ); // Blue color
 // const s1 = new THREE.Mesh( sphereGeometry, sphereMaterial );
  //BOMBER.add( s1 );
 // s1.scale.set(1.5,1.5,1)
  //s1.position.set(0,0,-2);
  const cubegeometry3 = new THREE.BoxGeometry( 1, 1, 1 );
  const material3 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh( cubegeometry3, cylinderMaterial1 );
BOMBER.add( cube );
  cube.position.set(0,0,0);
  cube.scale.set(0.5,2.5,5);
  const cube1 = new THREE.Mesh( cubegeometry3, cylinderMaterial );
BOMBER.add( cube1 );
  cube1.position.set(0,0,2);
  cube1.scale.set(0.51,2.51,1.1);
  const cube12 = new THREE.Mesh( cubegeometry3, cylinderMaterial );
BOMBER.add( cube12 );
  cube12.position.set(0,0,-4);
  cube12.scale.set(0.51,3,3);
  const cube123 = new THREE.Mesh( cubegeometry3, cylinderMaterial );
BOMBER.add( cube123 );
  cube123.position.set(0,0,-5);
  cube123.scale.set(0.51,2.5,2.5);
  cube123.rotation.x = Math.PI/4;
  const cub123 = new THREE.Mesh( cubegeometry3, cylinderMaterial1 );
BOMBER.add( cub123 );
  cub123.position.set(0,0,-5);
  cub123.scale.set(0.7,2,2);
  cub123.rotation.x = Math.PI/4;
  
  BOMBER.position.z = 0;
  BOMBER.scale.set(15,5,5);
  scene.add(BOMBER);

    