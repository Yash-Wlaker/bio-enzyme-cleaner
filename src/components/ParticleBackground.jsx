import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle Classes
    class Particle {
      constructor(type) {
        this.type = type; // 'waste', 'enzyme', 'cleaner'
        this.reset();
        // Random position on initial load
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        // Start mostly near bottom for waste, top for enzymes
        if (this.type === 'waste') {
          this.y = canvas.height + Math.random() * 100;
        } else {
          this.y = -Math.random() * 100;
        }

        if (this.type === 'waste') {
          this.size = Math.random() * 8 + 6;
          this.speedX = (Math.random() - 0.5) * 0.4;
          this.speedY = -Math.random() * 0.5 - 0.2; // drift up
          this.color = `rgba(${120 + Math.random() * 40}, ${90 + Math.random() * 30}, 40, ${Math.random() * 0.3 + 0.15})`; // Earthy brown/orange
        } else if (this.type === 'enzyme') {
          this.size = Math.random() * 4 + 3;
          this.speedX = (Math.random() - 0.5) * 0.8;
          this.speedY = Math.random() * 0.5 + 0.2; // drift down
          this.color = `rgba(16, 185, 129, ${Math.random() * 0.4 + 0.25})`; // Emerald green
        } else {
          // cleaner
          this.size = Math.random() * 3 + 2;
          this.speedX = (Math.random() - 0.5) * 1.5;
          this.speedY = (Math.random() - 0.5) * 1.5;
          this.color = `rgba(14, 165, 233, ${Math.random() * 0.5 + 0.3})`; // Teal/Blue
          this.life = 200; // cleaner particles disappear after some time
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around bounds or reset
        if (this.type === 'cleaner') {
          this.life--;
          if (this.life <= 0) {
            this.reset();
            this.type = Math.random() > 0.5 ? 'waste' : 'enzyme'; // morph back
          }
        }

        if (this.x < 0 || this.x > canvas.width || this.y < -100 || this.y > canvas.height + 100) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Glow effect for cleaner and enzyme
        if (this.type !== 'waste') {
          ctx.shadowBlur = this.type === 'cleaner' ? 10 : 5;
          ctx.shadowColor = this.type === 'cleaner' ? '#0ea5e9' : '#10b981';
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.shadowColor = 'transparent'; // reset
      }
    }

    const particles = [];
    const wasteCount = 20;
    const enzymeCount = 30;

    for (let i = 0; i < wasteCount; i++) {
      particles.push(new Particle('waste'));
    }
    for (let i = 0; i < enzymeCount; i++) {
      particles.push(new Particle('enzyme'));
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check collisions between waste and enzyme
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        // Draw connections between similar active particles
        if (p1.type === 'enzyme') {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            if (p2.type === 'enzyme') {
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 120)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          }
        }

        // Collision logic: waste meeting enzyme triggers fermentation
        if (p1.type === 'waste') {
          for (let j = 0; j < particles.length; j++) {
            const p2 = particles[j];
            if (p2.type === 'enzyme') {
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < p1.size + p2.size + 15) {
                // Trigger morph: waste particle shrinks, enzyme particle excites
                p1.size -= 0.15;
                if (p1.size < 3) {
                  // Morphed to cleaner!
                  p1.type = 'cleaner';
                  p1.reset();
                  p1.size = 3;
                }

                // Add bubble animation effect
                ctx.beginPath();
                ctx.arc((p1.x + p2.x) / 2, (p1.y + p2.y) / 2, Math.random() * 5 + 1, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.fill();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-60"
    />
  );
}
