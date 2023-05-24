function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
        <svg style={{ height: 0 }}>
            <defs>
                <linearGradient id={idCSS} gradientTransform={gradientTransform}>
                    <stop offset="0%" stopColor="#E65C00" />
                    <stop offset="100%" stopColor="#F9D423" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default GradientSVG;