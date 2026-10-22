import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AbstractTechVisual({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 440;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Geometric Monolithic "V" Structure
    // Left Wing of V
    const wingGeo = new THREE.BoxGeometry(0.32, 3.4, 0.32);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e3a8a,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.85,
    });

    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.7,
    });

    const leftWing = new THREE.Mesh(wingGeo, glassMat);
    leftWing.position.set(-0.95, 0.35, 0);
    leftWing.rotation.z = -Math.PI / 6.5;

    const leftEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(wingGeo),
      edgeMat
    );
    leftWing.add(leftEdges);

    // Right Wing of V
    const rightWing = new THREE.Mesh(wingGeo, glassMat);
    rightWing.position.set(0.95, 0.35, 0);
    rightWing.rotation.z = Math.PI / 6.5;

    const rightEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(wingGeo),
      edgeMat
    );
    rightWing.add(rightEdges);

    // V-Group
    const vGroup = new THREE.Group();
    vGroup.add(leftWing);
    vGroup.add(rightWing);
    rootGroup.add(vGroup);

    // 2. Center Apex Luminous Crystal
    const coreGeo = new THREE.OctahedronGeometry(0.5, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x2563eb,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, -1.15, 0);
    rootGroup.add(coreMesh);

    // 3. Delicate Concentric Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    ring1.rotation.x = Math.PI / 2.8;
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.1, 0.012, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.x = -Math.PI / 3.2;
    ring2.rotation.y = Math.PI / 7;
    rootGroup.add(ring2);

    // 4. Connected Constellation Nodes
    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa });

    const nodesGroup = new THREE.Group();
    const nodeCount = 18;
    const nodeCoords = [];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.4 + (Math.sin(i * 3) * 0.4);
      const x = Math.cos(angle) * radius;
      const y = (Math.sin(angle) * radius) * 0.7;
      const z = Math.sin(i * 2) * 1.2;

      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(x, y, z);
      nodesGroup.add(node);
      nodeCoords.push(new THREE.Vector3(x, y, z));
    }
    rootGroup.add(nodesGroup);

    // Thin Connecting Constellation Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.22,
    });
    const lineGeo = new THREE.BufferGeometry().setFromPoints(nodeCoords);
    const constellationLines = new THREE.Line(lineGeo, lineMat);
    rootGroup.add(constellationLines);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 3);
    dirLight1.position.set(5, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x60a5fa, 1.8);
    dirLight2.position.set(-6, -4, 4);
    scene.add(dirLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow, elegant continuous rotation
      vGroup.rotation.y = Math.sin(elapsed * 0.3) * 0.25;
      vGroup.position.y = Math.sin(elapsed * 0.8) * 0.08;

      coreMesh.rotation.y = elapsed * 0.6;
      coreMesh.rotation.x = elapsed * 0.4;

      ring1.rotation.z = elapsed * 0.12;
      ring2.rotation.z = -elapsed * 0.09;

      nodesGroup.rotation.y = elapsed * 0.08;
      constellationLines.rotation.y = elapsed * 0.08;

      // Mouse inertia tracking
      targetX = mouseX * 0.4;
      targetY = -mouseY * 0.3;

      rootGroup.rotation.y += (targetX - rootGroup.rotation.y) * 0.04;
      rootGroup.rotation.x += (targetY - rootGroup.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      wingGeo.dispose();
      glassMat.dispose();
      edgeMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ring1Geo.dispose();
      ringMat1.dispose();
      ring2Geo.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square flex items-center justify-center ${className}`}
    />
  );
}
