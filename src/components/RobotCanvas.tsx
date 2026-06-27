"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/robot.glb";

type Vec2 = { x: number; y: number };

/**
 * The ChainGPT robot rendered from the real GLB.
 * - Plays the baked idle/head animation (mixamorig:Head/Neck/Spine/arms) on loop.
 * - Follows the mouse cursor (the robot turns toward the pointer).
 * - Moves FORWARD (toward the camera) + scales up as you scroll, mirroring the
 *   original site where the robot advances into view down the page.
 */
function RobotModel({
  progress,
  mouse,
}: {
  progress: React.RefObject<number>;
  mouse: React.RefObject<Vec2>;
}) {
  const group = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions, names } = useAnimations(animations, group);

  // Center the model at the group origin and scale it to a consistent height
  // (vertices are mesh-quantized, so measure the real bounds after decode).
  const { offset, scale } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return { offset: center, scale: 3.2 / maxDim };
  }, [scene]);

  useEffect(() => {
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.frustumCulled = false;
      // "TOUCH" is a flat invisible interaction plane in the source scene.
      if (mesh.name === "TOUCH") mesh.visible = false;
      const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
      if (!mat) return;
      // The two "dots" are the robot's eyes — make them glow softly.
      if (mesh.name === "dots") {
        mat.emissive = new THREE.Color(0xffffff);
        mat.emissiveIntensity = 1.1;
        mat.toneMapped = false;
      }
      if ("envMapIntensity" in mat) mat.envMapIntensity = 0.9;
    });
    const clip = names[0] ? actions[names[0]] : null;
    if (clip) {
      clip.reset().setLoop(THREE.LoopRepeat, Infinity).play();
      clip.timeScale = 0.9;
    }
    return () => {
      if (clip) clip.stop();
    };
  }, [actions, names, scene]);

  useFrame((state) => {
    if (!group.current) return;
    const g = group.current;
    const p = progress.current ?? 0;
    const m = mouse.current ?? { x: 0, y: 0 };
    const t = state.clock.elapsedTime;

    // --- Rotation: resting pose + mouse-look + tiny idle sway ---
    const targetYaw = 0.12 + m.x * 0.5 + Math.sin(t * 0.5) * 0.04;
    const targetPitch = -m.y * 0.22 + p * 0.06;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetYaw, 0.08);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetPitch, 0.08);

    // --- Scroll: move FORWARD (toward camera) + drop slightly + grow ---
    const targetZ = p * 2.4; // camera sits at +z, so increasing z = closer
    const targetY = Math.sin(t * 1.1) * 0.05 - p * 0.45;
    const targetScale = 1 + p * 0.35;
    g.position.z = THREE.MathUtils.lerp(g.position.z, targetZ, 0.08);
    g.position.y = THREE.MathUtils.lerp(g.position.y, targetY, 0.1);
    g.scale.setScalar(THREE.MathUtils.lerp(g.scale.x, targetScale, 0.08));
  });

  return (
    <group ref={group}>
      <group position={[-offset.x * scale, -offset.y * scale, -offset.z * scale]} scale={scale}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

export function RobotCanvas() {
  const progress = useRef(0);
  const mouse = useRef<Vec2>({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  // Only mount the WebGL canvas once the container has real dimensions —
  // otherwise R3F measures 0 and locks the drawing buffer at 300×150.
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const span = window.innerHeight * 1.4;
      progress.current = Math.min(1, Math.max(0, window.scrollY / span));
    };
    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ width: "100%", height: "100%" }}>
      {size.w > 0 && size.h > 0 && (
    <Canvas
      camera={{ position: [0, 0.2, 6.2], fov: 32 }}
      dpr={[1, 1.5]}
      frameloop="always"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 0.82,
      }}
      onCreated={({ gl }) => {
        // Recover gracefully if the browser drops the WebGL context.
        gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
      }}
      resize={{ debounce: 0 }}
      style={{ width: size.w, height: size.h, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.35} />
      <hemisphereLight args={[0xffffff, 0x1c1c26, 0.4]} />
      <directionalLight position={[4, 6, 5]} intensity={1.15} />
      <directionalLight position={[-5, 3, -2]} intensity={0.35} color={0x9bb0ff} />
      <directionalLight position={[0, 3, -6]} intensity={0.45} color={0xffffff} />
      <pointLight position={[0, 0.8, 4]} intensity={0.2} color={0xffffff} />
      <Suspense fallback={null}>
        <RobotModel progress={progress} mouse={mouse} />
      </Suspense>
    </Canvas>
      )}
    </div>
  );
}

useGLTF.preload(MODEL_URL);
