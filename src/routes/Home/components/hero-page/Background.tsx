import { useEffect, useRef } from "react";
import styled from "styled-components";
import { GlowParticles } from "./glowParticles";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #080808;
`;

const COLORS = [
  { r: 25, g: 231, b: 237 }, // skyblue
  { r: 48, g: 150, b: 113 }, // green
  { r: 63, g: 63, b: 96 },
  { r: 82, g: 171, b: 255 },
  { r: 24, g: 223, b: 149 },
  { r: 19, g: 76, b: 54 },
  { r: 21, g: 142, b: 96 },
  { r: 8, g: 8, b: 8 },
  { r: 8, g: 8, b: 8 },
  { r: 8, g: 8, b: 8 },
  { r: 8, g: 8, b: 8 },
  { r: 8, g: 8, b: 8 },
];

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      let particles: GlowParticles[] = [];
      let stageWidth = document.body.clientWidth;
      let stageHeight = document.body.clientHeight;
      const totalParticles = 15;
      const maxRadius = 600;
      const minRadius = 400;
      const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      const animate = () => {
        if (!ctx) return;

        ctx.clearRect(0, 0, stageWidth, stageHeight);

        for (let i = 0; i < totalParticles; i++) {
          const item = particles[i];
          item.animate(ctx, stageWidth, stageHeight);
        }
        requestRef.current = requestAnimationFrame(animate);
      };

      const createParticles = () => {
        let curColor = 0;
        particles = [];

        for (let i = 0; i < totalParticles; i++) {
          const items = new GlowParticles(
            Math.random() * stageWidth,
            Math.random() * stageHeight,
            Math.random() * (maxRadius - minRadius) + minRadius,
            COLORS[curColor]
          );

          if (++curColor >= COLORS.length) {
            curColor = 0;
          }
          particles[i] = items;
        }
      };

      const handleResize = () => {
        stageWidth = document.body.clientWidth;
        stageHeight = document.body.clientHeight;

        if (!canvas) return;

        canvas.width = stageWidth * pixelRatio;
        canvas.height = stageHeight * pixelRatio;

        if (!ctx) return;

        ctx.scale(pixelRatio, pixelRatio);

        ctx.globalCompositeOperation = "overlay";

        createParticles();
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      requestRef.current = requestAnimationFrame(animate);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.cancelAnimationFrame(requestRef.current);
      };
    }
  }, [canvasRef]);

  return (
    <Wrapper>
      <canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Background;
