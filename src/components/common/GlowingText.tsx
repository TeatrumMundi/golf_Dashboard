import React from 'react';

interface GlowingTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function GlowingText({ children, className = '' }: GlowingTextProps) {
    return (
        <p
            className={`text-cyan-400 filter-glow ${className}`}
            style={{
                textShadow: '0 0 8px #22d3ee, 0 0 16px #22d3ee',
            }}
        >
            {children}
        </p>
    );
}