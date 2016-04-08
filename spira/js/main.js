var MAX_COUNT = 256;

var params = {
    a: 25,
    center: 0,
    base: 0,
    phase: 25,
    cameraSpin: 10,
    count: 32
};

function initScene() {
    var geom = new THREE.Geometry();
    geom.dynamic = true;
    for (var i = 0; i < MAX_COUNT; i++) {
        geom.vertices[i] = new THREE.Vector3(10000, 10000, 10000);
    }
    var mat = new THREE.PointsMaterial({color: 0x000000, size: 1.5});
    var points = new THREE.Points(geom, mat, THREE.LineStrip);
    scene = new THREE.Scene();
    scene.add(points);
    return {
        scene: scene,
        geom: geom,
        points: points
    };
}

function initCamera(width, height) {
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
    camera.position.z = 150;
    return camera;
}

function initRenderer(width, height, container) {
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    return renderer;
}

function initStats(container) {
    var stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    container.appendChild(stats.domElement);
    return stats;
}

function initControls() {
    var controls = new dat.GUI();
    controls.add(params, 'a')
        .min(0)
        .max(100)
        .step(1);
    controls.add(params, 'center')
        .min(0)
        .max(100);
    //controls.add(params, 'base')
    //    .min(-100)
    //    .max(100)
    //    .step(1);
    controls.add(params, 'phase')
        .min(-100)
        .max(100)
        .step(1);
    controls.add(params, 'cameraSpin')
        .min(-100)
        .max(100)
        .step(1);
    controls.add(params, 'count')
        .min(32)
        .max(MAX_COUNT)
        .step(1);
    return controls;
}

function onWindowResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function init() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var container = document.getElementById('container');
    var scene = initScene();
    var camera = initCamera(width, height);
    var renderer = initRenderer(width, height, container);
    //var stats = initStats(container);
    initControls();
    window.addEventListener('resize', onWindowResize, false);
    var time = new Date();
    return {
        //stats: stats,
        renderer: renderer,
        camera: camera,
        scene: scene,
        startTime: time,
        time: time,
        baseAngle: 0,
        phaseDelta: 0,
        cameraAngle: 0
    };
}

function update(state, params, time) {
    //state = Object.assign({}, state);
    state.params = Object.assign({}, params);
    state.params.count = Math.floor(state.params.count);
    var deltaTime = (time - state.time) * 0.001;
    state.time = time;
    state.cameraAngle += 2 * deltaTime * -state.params.cameraSpin * 0.01;
    state.baseAngle += deltaTime * state.params.base * 0.1;
    state.phaseDelta += deltaTime * state.params.phase * 0.2;
    return state;
}

function render(s) {
    var t = (s.time - s.startTime) * 0.001;
    var p = s.params;

    var verts = s.scene.geom.vertices;
    for (var i = 0; i < p.count; i++) {
        var iNorm = (i + 1) / (p.count + 1) - 0.5;
        var iSin = Math.cos((iNorm + p.center * 0.01) * Math.PI);
        var x = 150 * (i - p.count / 2) / p.count;
        var y = iSin * p.a * 0.7 * Math.cos(s.baseAngle + iNorm * s.phaseDelta);
        var z = iSin * p.a * 0.7 * Math.sin(s.baseAngle + iNorm * s.phaseDelta);
        verts[i].set(x, y, z);
    }
    for (var i = p.count; i < MAX_COUNT; i++) {
        verts[i].set(10000, 10000, 10000);
    }

    s.scene.geom.verticesNeedUpdate = true;
    s.scene.points.rotation.y = s.cameraAngle;
    renderer.render(s.scene.scene, camera);
}

function run(state) {
    var time = Date.now();
    state = update(state, params, time);
    setTimeout(function() {
        requestAnimationFrame(run.bind(null, state));
    }, 1000 / 30);
    render(state);
    //state.stats.update();
}

var initialState = init();
run(initialState);

