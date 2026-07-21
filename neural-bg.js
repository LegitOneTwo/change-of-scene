// ==================== STARFIELD BACKGROUND ====================
// Three.js — floating colored stars

(function () {
    const STAR_COUNT = 200;
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

    // --- Star shape ---
    function createStarShape(outerR, innerR, points) {
        const shape = new THREE.Shape();
        for (let i = 0; i < points * 2; i++) {
            const r = i % 2 === 0 ? outerR : innerR;
            const angle = (i * Math.PI) / points - Math.PI / 2;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            if (i === 0) shape.moveTo(x, y);
            else shape.lineTo(x, y);
        }
        shape.closePath();
        return shape;
    }

    const starShape = createStarShape(0.08, 0.035, 5);
    const starGeom = new THREE.ShapeGeometry(starShape);

    // --- Glow texture for sprite-like stars ---
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 64;
    glowCanvas.height = 64;
    const ctx = glowCanvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.1, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(0.3, 'rgba(200,180,255,0.5)');
    gradient.addColorStop(0.7, 'rgba(100,80,200,0.1)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const glowTex = new THREE.CanvasTexture(glowCanvas);

    // --- Create stars ---
    const stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const mat = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.5 + Math.random() * 0.5,
            side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(starGeom, mat);
        mesh.position.set(
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 9,
            (Math.random() - 0.5) * 5
        );
        mesh.rotation.z = Math.random() * Math.PI * 2;
        mesh.rotation.x = Math.random() * 0.5;
        mesh.rotation.y = Math.random() * 0.5;

        const scale = 0.4 + Math.random() * 1.2;
        mesh.scale.set(scale, scale, scale);

        mesh.userData = {
            speedX: (Math.random() - 0.5) * 0.003,
            speedY: (Math.random() - 0.5) * 0.003,
            speedZ: (Math.random() - 0.5) * 0.001,
            rotSpeed: (Math.random() - 0.5) * 0.005,
            baseY: mesh.position.y,
            floatAmp: 0.1 + Math.random() * 0.4,
            floatSpeed: 0.3 + Math.random() * 0.7,
            pulseSpeed: 0.5 + Math.random() * 1.5,
            baseOpacity: mat.opacity,
        };

        scene.add(mesh);
        stars.push(mesh);

        // Add a glow sprite behind each star
        const spriteMat = new THREE.SpriteMaterial({
            map: glowTex,
            color: color,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            opacity: 0.3,
        });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.position.copy(mesh.position);
        sprite.scale.set(0.5, 0.5, 1);
        sprite.userData = { parent: mesh };
        scene.add(sprite);
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

        stars.forEach(star => {
            const d = star.userData;

            // Drift
            star.position.x += d.speedX;
            star.position.y += d.speedY;
            star.position.z += d.speedZ;

            // Wrap around
            if (Math.abs(star.position.x) > 7) star.position.x *= -1;
            if (Math.abs(star.position.y) > 4.5) star.position.y *= -1;
            if (Math.abs(star.position.z) > 2.5) star.position.z *= -1;

            // Float up/down
            star.position.y += Math.sin(t * d.floatSpeed) * 0.001;

            // Rotate
            star.rotation.z += d.rotSpeed;

            // Pulse opacity
            star.material.opacity = d.baseOpacity * (0.7 + 0.3 * Math.sin(t * d.pulseSpeed + star.position.x));
        });

        // Update glow sprites
        scene.children.forEach(child => {
            if (child.isSprite && child.userData.parent) {
                child.position.copy(child.userData.parent.position);
                child.material.opacity = 0.15 + 0.15 * Math.sin(t * 0.8 + child.position.x);
            }
        });

        // Camera sway
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
