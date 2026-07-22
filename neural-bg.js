// ==================== FLOATING FACES BACKGROUND ====================
// Three.js — drifting "^-^" text faces

(function () {
    const COUNT = 80;
    const COLORS = [0xcba6f7, 0xf5c2e7, 0x89b4fa, 0x94e2d5, 0xfab387, 0xf9e2af, 0xa6e3a1, 0xf38ba8];

    // --- Scene ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x11111b, 1);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.pointerEvents = 'none';
    document.body.prepend(renderer.domElement);

    // --- Create face texture ("^-^") ---
    function createFaceTexture(color) {
        const size = 128;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Glow
        const r = (color >> 16) & 0xff;
        const g = (color >> 8) & 0xff;
        const b = color & 0xff;
        ctx.shadowColor = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowBlur = 20;

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.font = 'bold 56px "Courier New", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('^-^', size / 2, size / 2);

        return new THREE.CanvasTexture(canvas);
    }

    // Pre-create textures for each color
    const faceTextures = {};
    COLORS.forEach(c => { faceTextures[c] = createFaceTexture(c); });

    // --- Glow texture ---
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 64;
    glowCanvas.height = 64;
    const gctx = glowCanvas.getContext('2d');
    const gradient = gctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.15, 'rgba(200,180,255,0.5)');
    gradient.addColorStop(0.5, 'rgba(100,80,200,0.15)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    gctx.fillStyle = gradient;
    gctx.fillRect(0, 0, 64, 64);
    const glowTex = new THREE.CanvasTexture(glowCanvas);

    // --- Create sprites ---
    const faces = [];
    for (let i = 0; i < COUNT; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];

        const mat = new THREE.SpriteMaterial({
            map: faceTextures[color],
            transparent: true,
            opacity: 0.4 + Math.random() * 0.4,
            depthWrite: false,
        });

        const sprite = new THREE.Sprite(mat);
        sprite.position.set(
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 9,
            (Math.random() - 0.5) * 5
        );

        const scale = 0.5 + Math.random() * 1.3;
        sprite.scale.set(scale, scale * 0.45, 1);

        sprite.userData = {
            speedX: (Math.random() - 0.5) * 0.004,
            speedY: (Math.random() - 0.5) * 0.004,
            speedZ: (Math.random() - 0.5) * 0.001,
            rotSpeed: (Math.random() - 0.5) * 0.003,
            baseY: sprite.position.y,
            floatAmp: 0.1 + Math.random() * 0.4,
            floatSpeed: 0.3 + Math.random() * 0.7,
            pulseSpeed: 0.5 + Math.random() * 1.5,
            baseOpacity: mat.opacity,
        };

        scene.add(sprite);
        faces.push(sprite);

        // Glow behind each face
        const glowMat = new THREE.SpriteMaterial({
            map: glowTex,
            color: color,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            opacity: 0.25,
        });
        const glow = new THREE.Sprite(glowMat);
        glow.position.copy(sprite.position);
        glow.scale.set(scale * 1.8, scale * 1.2, 1);
        glow.userData = { parent: sprite };
        scene.add(glow);
    }

    // --- Mouse ---
    const mouse = new THREE.Vector2(0, 0);
    document.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // --- Animation ---
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        faces.forEach(face => {
            const d = face.userData;

            face.position.x += d.speedX;
            face.position.y += d.speedY;
            face.position.z += d.speedZ;

            if (Math.abs(face.position.x) > 7) face.position.x *= -1;
            if (Math.abs(face.position.y) > 4.5) face.position.y *= -1;
            if (Math.abs(face.position.z) > 2.5) face.position.z *= -1;

            face.position.y += Math.sin(t * d.floatSpeed) * 0.001;
            face.material.rotation += d.rotSpeed;
            face.material.opacity = d.baseOpacity * (0.7 + 0.3 * Math.sin(t * d.pulseSpeed + face.position.x));
        });

        scene.children.forEach(child => {
            if (child.isSprite && child.userData.parent) {
                child.position.copy(child.userData.parent.position);
                child.material.rotation = child.userData.parent.material.rotation;
                child.material.opacity = 0.12 + 0.12 * Math.sin(t * 0.8 + child.position.x);
            }
        });

        camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.015;
        camera.position.y += (-mouse.y * 0.5 - camera.position.y) * 0.015;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
})();
