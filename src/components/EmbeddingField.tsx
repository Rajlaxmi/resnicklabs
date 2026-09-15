import React from 'react';

interface Node {
  x: number;
  y: number;
  r: number;
  delay: number;
  hue: 0 | 1 | 2;
}

// Loosely clustered points standing in for user representations in a learned
// embedding space, with edges drawn between near neighbors: the concrete
// visual idea behind "user foundation models." Spread across the full
// canvas, including the corners, so the field reads as open space rather
// than a bounded token.
const nodes: Node[] = [
  { x: 46, y: 54, r: 2.4, delay: 0, hue: 2 },
  { x: 108, y: 30, r: 2, delay: 1.6, hue: 1 },
  { x: 150, y: 84, r: 3.2, delay: 3.1, hue: 0 },
  { x: 96, y: 118, r: 4.6, delay: 0.4, hue: 0 },
  { x: 210, y: 46, r: 2.4, delay: 2.3, hue: 1 },
  { x: 256, y: 92, r: 3, delay: 4.4, hue: 1 },
  { x: 300, y: 44, r: 2, delay: 1.1, hue: 2 },
  { x: 346, y: 78, r: 2.6, delay: 3.7, hue: 0 },
  { x: 40, y: 142, r: 2.2, delay: 2.8, hue: 1 },
  { x: 168, y: 158, r: 2.6, delay: 0.9, hue: 2 },
  { x: 228, y: 140, r: 4.2, delay: 4.9, hue: 0 },
  { x: 292, y: 152, r: 2.4, delay: 1.9, hue: 2 },
  { x: 356, y: 168, r: 3.4, delay: 3.4, hue: 1 },
  { x: 80, y: 202, r: 3, delay: 0.2, hue: 2 },
  { x: 138, y: 232, r: 2, delay: 2.6, hue: 0 },
  { x: 196, y: 210, r: 2.4, delay: 4.1, hue: 1 },
  { x: 262, y: 224, r: 5.2, delay: 1.4, hue: 0 },
  { x: 322, y: 248, r: 2.6, delay: 3.9, hue: 2 },
  { x: 44, y: 262, r: 2.2, delay: 0.7, hue: 0 },
  { x: 112, y: 288, r: 2.8, delay: 2.1, hue: 1 },
  { x: 190, y: 278, r: 2, delay: 4.6, hue: 2 },
  { x: 250, y: 296, r: 3.2, delay: 1.2, hue: 1 },
];

const edges: [number, number][] = [
  [0, 1], [0, 3], [1, 2], [2, 3], [2, 4], [4, 5], [5, 6], [6, 7],
  [3, 9], [3, 8], [4, 10], [5, 10], [5, 11], [11, 12], [7, 12],
  [9, 10], [9, 15], [10, 11], [10, 16], [8, 13], [13, 14], [14, 15],
  [15, 16], [16, 17], [11, 17], [13, 18], [14, 19], [15, 20], [16, 21],
  [17, 21], [18, 19], [19, 20], [20, 21],
];

const hueVar = ['--accent', '--signal', '--gold'] as const;

interface EmbeddingFieldProps {
  className?: string;
}

/**
 * Abstract node/edge graphic standing in for a learned user-representation
 * space: the one bold visual moment in the system, confined to the dark
 * hero and contact bookends.
 */
const EmbeddingField: React.FC<EmbeddingFieldProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 340"
    className={className}
    role="presentation"
    aria-hidden="true"
    fill="none"
  >
    <defs>
      <linearGradient id="ef-edge" x1="0" y1="0" x2="400" y2="340" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="rgb(var(--accent))" />
        <stop offset="55%" stopColor="rgb(var(--signal))" />
        <stop offset="100%" stopColor="rgb(var(--gold))" />
      </linearGradient>

      {/* Atmospheric glow built from heavily blurred shapes rather than a
          gradient-filled rect: a Gaussian blur trails off asymptotically,
          so there is never a hard edge where the graphic meets the hero. */}
      <filter id="ef-blur-lg" x="-400%" y="-400%" width="900%" height="900%">
        <feGaussianBlur stdDeviation="52" />
      </filter>
      <filter id="ef-blur-md" x="-400%" y="-400%" width="900%" height="900%">
        <feGaussianBlur stdDeviation="34" />
      </filter>

      <filter id="ef-glow" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="3.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <circle cx="168" cy="140" r="64" fill="rgb(var(--accent))" opacity="0.4" filter="url(#ef-blur-lg)" />
    <circle cx="300" cy="250" r="50" fill="rgb(var(--gold))" opacity="0.22" filter="url(#ef-blur-md)" />
    <circle cx="330" cy="80" r="38" fill="rgb(var(--signal))" opacity="0.16" filter="url(#ef-blur-md)" />

    <g strokeWidth="1">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#ef-edge)"
          strokeOpacity={0.16 + (i % 5) * 0.03}
        />
      ))}
    </g>

    <g filter="url(#ef-glow)">
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={`rgb(var(${hueVar[node.hue]}))`}
          className="signal-node"
          style={{ animationDelay: `${node.delay}s` }}
        />
      ))}
    </g>
  </svg>
);

export default EmbeddingField;
