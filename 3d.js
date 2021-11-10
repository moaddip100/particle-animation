
// let scene;
// let camera;
// let renderer;

// function init() {

//     let container = document.querySelector('.container');

//     // Scene
//     scene = new THREE.Scene()
//     scene.background = new THREE.Color(0xffffff);

//     //Camera
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 01, 3000)

//     //Render
//     renderer = new THREE.WebGLRenderer({antialias: true})
//     renderer.setSize( window.innerWidth, window.innerHeight)
//     container.appendChild(renderer.domElement)

//     //Light 
//     const ambient = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(ambient)

//     let light = new THREE.PointLight(0xc4c4c4c, 1);
//     light.position.set(0, 300, 500);
//     scene.add(light)

//     let light2 = new THREE.PointLight(0xc4c4c4c, 1);
//     light2.position.set(500, 300, 500);
//     scene.add(light2)


//     //Model 
//     let loader = GLTFLoader()
//     loader.load('./model/scene.gltf', gltf => {
//         scene.add(gltf.scene);
//     }, 
//         function (error) {
//             console.log('Error: ' + error)
//         }
//     )

//     function animate() {
//         requestAnimationFrame(animate)
//         renderer.render(scene, camera)
//     }
//     animate()
    
// }
// init()
