const IndustrialOperator = () => {
    const leftPupilRef = useRef < HTMLDivElement > (null);
    const rightPupilRef = useRef < HTMLDivElement > (null);
    const [isHovering, setIsHovering] = useState(false);
    const [blink, setBlink] = useState(false);

    // Usar parallax para la cabeza
    const headParallax = useParallax(0.015);

    // Efecto de parpadeo
    useEffect(() => {
        const blinkInterval = setInterval(
            () => {
                setBlink(true);
                setTimeout(() => setBlink(false), 100);
            },
            2000 + Math.random() * 3000
        );

        return () => clearInterval(blinkInterval);
    }, []);

    // Seguir el cursor con los ojos
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!leftPupilRef.current || !rightPupilRef.current) return;

            const eyes = [
                { pupil: leftPupilRef.current },
                { pupil: rightPupilRef.current }
            ];

            eyes.forEach(({ pupil }) => {
                const eye = pupil.parentElement?.parentElement;
                if (!eye) return;

                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;

                const deltaX = e.clientX - eyeCenterX;
                const deltaY = e.clientY - eyeCenterY;

                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const maxDistance = 200;
                const normalizedDistance = Math.min(distance / maxDistance, 1);

                const angle = Math.atan2(deltaY, deltaX);
                const pupilRadius = 8; // Más pequeño para ojos humanos
                const pupilX = Math.cos(angle) * pupilRadius * normalizedDistance;
                const pupilY = Math.sin(angle) * pupilRadius * normalizedDistance;

                pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="operator-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <motion.div
                className="operator-head"
                style={{
                    x: headParallax.x,
                    y: headParallax.y,
                    rotateX: useTransform(headParallax.y, [-100, 100], [2, -2]),
                    rotateY: useTransform(headParallax.x, [-100, 100], [-2, 2])
                }}
            >
                {/* Casco de seguridad AMARILLO */}
                <div className="safety-helmet">
                    <div className="helmet-shell">
                        <div className="helmet-brim"></div>
                        <div className="helmet-strap left"></div>
                        <div className="helmet-strap right"></div>
                        <div className="helmet-reflector">
                            <div className="reflector-light"></div>
                        </div>
                    </div>

                    {/* Logo F1315 en el casco */}
                    <div className="helmet-logo">
                        <span>F1315</span>
                    </div>
                </div>

                {/* Cara del operario */}
                <div className="operator-face">
                    {/* Ojos humanos */}
                    <div className="eyes-wrapper">
                        <div className={`human-eye left ${blink ? 'blinking' : ''}`}>
                            <div className="eye-lid"></div>
                            <div className="eye-white">
                                <div className="pupil" ref={leftPupilRef}>
                                    <div className="iris"></div>
                                    <div className="pupil-highlight"></div>
                                </div>
                            </div>
                            <div className="eyebrow"></div>
                        </div>

                        <div className={`human-eye right ${blink ? 'blinking' : ''}`}>
                            <div className="eye-lid"></div>
                            <div className="eye-white">
                                <div className="pupil" ref={rightPupilRef}>
                                    <div className="iris"></div>
                                    <div className="pupil-highlight"></div>
                                </div>
                            </div>
                            <div className="eyebrow"></div>
                        </div>
                    </div>

                    {/* Nariz */}
                    <div className="operator-nose"></div>

                    {/* Boca */}
                    <motion.div
                        className="operator-mouth"
                        animate={{
                            height: isHovering ? '8px' : '6px',
                            borderRadius: isHovering ? '4px 4px 8px 8px' : '2px 2px 4px 4px'
                        }}
                    >
                        <div className="mouth-line"></div>
                    </motion.div>

                    {/* Barbilla */}
                    <div className="operator-chin"></div>

                    {/* Orejas (detrás del casco) */}
                    <div className="operator-ear left"></div>
                    <div className="operator-ear right"></div>
                </div>

                {/* Protección auditiva */}
                <div className="hearing-protection">
                    <div className="earmuff left">
                        <div className="earmuff-cup"></div>
                    </div>
                    <div className="earmuff right">
                        <div className="earmuff-cup"></div>
                    </div>
                </div>
            </motion.div>

            {/* Protección respiratoria (opcional) */}
            <motion.div
                className="respirator"
                animate={{
                    opacity: isHovering ? 0.8 : 0.3,
                    y: isHovering ? -2 : 0
                }}
            >
                <div className="respirator-mask">
                    <div className="filter left"></div>
                    <div className="filter right"></div>
                    <div className="vent"></div>
                </div>
            </motion.div>

            {/* Efecto de brillo del reflector */}
            <motion.div
                className="reflector-glow"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2
                }}
            />

            {/* Partículas de polvo industrial */}
            <motion.div
                className="dust-particle particle-1"
                animate={{
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'easeInOut'
                }}
            />

            <motion.div
                className="dust-particle particle-2"
                animate={{
                    x: [0, -10, 0],
                    y: [0, 8, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'easeInOut',
                    delay: 1
                }}
            />
        </div>
    );
};

export default IndustrialOperator;