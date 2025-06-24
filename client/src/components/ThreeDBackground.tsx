import { useEffect, useRef } from 'react';

const ThreeDBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D-like floating particles
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // Calculate 3D projection
        const perspective = 800;
        const projectedX = particle.x + (particle.x - canvas.width / 2) * (particle.z / perspective) * 0.1;
        const projectedY = particle.y + (particle.y - canvas.height / 2) * (particle.z / perspective) * 0.1;
        const scale = 1 - particle.z / 1000;
        const size = particle.size * scale;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * scale;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.1;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(projectedX, projectedY);
            const otherProjectedX = otherParticle.x + (otherParticle.x - canvas.width / 2) * (otherParticle.z / perspective) * 0.1;
            const otherProjectedY = otherParticle.y + (otherParticle.y - canvas.height / 2) * (otherParticle.z / perspective) * 0.1;
            ctx.lineTo(otherProjectedX, otherProjectedY);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ThreeDBackground;