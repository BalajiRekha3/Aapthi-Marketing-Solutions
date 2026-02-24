import { useEffect, useRef } from 'react';

const AnimatedLogo = ({ className = '' }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        const renderFrame = () => {
            if (video.readyState < 2) {
                rafRef.current = requestAnimationFrame(renderFrame);
                return;
            }

            // Sync canvas size to video dimensions
            if (canvas.width !== video.videoWidth) {
                canvas.width = video.videoWidth || 256;
                canvas.height = video.videoHeight || 256;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d = frame.data;

            // Strip white/near-white → keep only blue + orange colours
            for (let i = 0; i < d.length; i += 4) {
                if (d[i] > 200 && d[i + 1] > 200 && d[i + 2] > 200) {
                    d[i + 3] = 0;
                }
            }

            ctx.putImageData(frame, 0, 0);

            // Continue rendering only while video is still playing
            // When video ends → last frame stays frozen on canvas (no more RAF)
            if (!video.ended) {
                rafRef.current = requestAnimationFrame(renderFrame);
            }
        };

        // Start immediately — no waiting for 'play' event
        rafRef.current = requestAnimationFrame(renderFrame);

        // Play once (no loop — plays only on page load/reload)
        video.play().catch(() => { });

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            {/* Hidden video — plays ONCE, no loop */}
            <video
                ref={videoRef}
                src="/assets/clients/logo.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                style={{ display: 'none' }}
            />
            {/* Canvas: white stripped, only blue+orange shown, freezes on last frame */}
            <canvas
                ref={canvasRef}
                className={className}
                style={{ background: 'transparent', display: 'block' }}
            />
        </>
    );
};

export default AnimatedLogo;
