"use client";

interface ProgressRingProps {
  progress: number;
  size?: number;
  color?: string;
}

export function ProgressRing({
  progress,
  size = 60,
  color = "#3B82F6",
}: ProgressRingProps) {
  const strokeWidth = size > 50 ? 5 : 4;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const filled = (progress / 100) * circumference;
  const dashArray = `${filled} ${circumference - filled}`;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
      />
      {/* Progress arc */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{
          transition: "stroke-dasharray 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Percentage text */}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        className="font-sans"
        style={{
          fontSize: `${Math.max(size * 0.22, 10)}px`,
          fontWeight: 700,
          fill: "#374151",
        }}
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
}
