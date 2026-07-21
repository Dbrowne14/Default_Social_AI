// Supporting logic for SignalBarsNav.dc.html
// Signal Bars navigation — DEFAULT-style layout, black bg, RGB equaliser per item.
import type { CSSProperties } from 'react';

export const RED = '#ff3b3b';
export const BLUE = '#3f6bff';
export const GREEN = '#22c55e';

export const SIGNAL_COLORS = [RED, BLUE, GREEN];

type SignalAnimationProps = {
  size?: 'small' | 'large';
};

export const SignalAnimation = ({size = 'small'}: SignalAnimationProps) => {
  const isLarge = size === 'large';
  const wrapperStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'flex-end',
    gap: '2px',
    height: isLarge ? '18px' : '13px',
  };

  return (
    <>
      <span
        style={wrapperStyle}
        aria-hidden="true">
        {SIGNAL_COLORS.map((color, index) => (
          <span
            key={color}
            style={{
              width: isLarge ? '3px' : '2px',
              height: '100%',
              backgroundColor: color,
              borderRadius: '1px',
              transformOrigin: 'bottom',
              animation: `signalPulse ${
                0.8 + index * 0.18
              }s ease-in-out ${index * 0.12}s infinite`,
            }}
          />
        ))}
      </span>

      <style>{`
        @keyframes signalPulse {
          0%,
          100% {
            transform: scaleY(0.25);
          }

          50% {
            transform: scaleY(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="signalPulse"] {
            animation: none !important;
            transform: scaleY(0.65);
          }
        }
      `}</style>
    </>
  );
}