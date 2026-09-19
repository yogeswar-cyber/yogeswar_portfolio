import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CyberSphere3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 320;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all rotating elements
    const group = new THREE.Group();
    scene.add(group);

    // 1. Inner core wireframe icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(70, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xFF5E0E,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // 2. Outer tech ring 1
    const ringGeo1 = new THREE.TorusGeometry(105, 1.2, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xFF7A29,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // 3. Outer tech ring 2
    const ringGeo2 = new THREE.TorusGeometry(120, 1.0, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xFFA500,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = Math.PI / 6;
    group.add(ring2);

    // 4. Floating node particles on sphere surface
    const particleCount = 75;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 95 + (Math.random() * 10 - 5);

      pPos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pPos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pPos[i * 3 + 2] = radius * Math.cos(phi);
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xFF5E0E,
      size: 4,
      transparent: true,
      opacity: 0.85,
    });
    const pointCloud = new THREE.Points(pGeo, pMat);
    group.add(pointCloud);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationId;
    let isVisible = true;

    // IntersectionObserver to pause when not visible
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isVisible) return;

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotations
      group.rotation.y += 0.005;
      group.rotation.x = mouseY * 0.5;
      group.rotation.z = mouseX * 0.5;

      coreMesh.rotation.y -= 0.003;
      ring1.rotation.z += 0.008;
      ring2.rotation.y -= 0.006;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center pointer-events-none"
    />
  );
}
