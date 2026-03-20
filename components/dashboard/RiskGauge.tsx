"use client";

import { useEffect, useState } from "react";
import type { RiskLevel } from "@/lib/data/types";

const RISK_CONFIG: Record<
  RiskLevel,
  { color: string; gradientEnd: string; label: string }
> = {
  critical: { color: "#EF4444", gradientEnd: "#991B1B", label: "CRITICO" },
  high: { color: "#F97316", gradientEnd: "#C2410C", label: "ALTO" },
  medium: { color: "#EAB308", gradientEnd: "#A16207", label: "MEDIO" },
  low: { color: "#3B82F6", gradientEnd: "#1D4ED8", label: "BAJO" },
  optimal: { color: "#22C55E", gradientEnd: "#15803D", label: "OPTIMO" },
};

interface RiskGaugeProps {
  score: number;
  riskLevel: RiskLevel;
}

export function RiskGauge({ score, riskLevel }: RiskGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const config = RISK_CONFIG[riskLevel];

  const size = 250;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;

  // Arc goes from 135deg to 405deg (270deg sweep)
  const sweepAngle = 270;
  const sweepFraction = sweepAngle / 360;
  const arcLength = circumference * sweepFraction;
  const filledLength = (animatedScore / 100) * arcLength;
  const dashArray = `${filledLength} ${arcLength - filledLength}`;
  const gapDashArray = `${arcLength} ${circumference - arcLength}`;

  // Rotation to start at bottom-left (135deg from top = 135deg CSS rotation)
  const rotation = 135;

  const gradientId = `gauge-gradient-${riskLevel}`;

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();
    const startScore = animatedScore;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(startScore + (score - startScore) * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={config.color} />
            <stop offset="100%" stopColor={config.gradientEnd} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background track */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          strokeDasharray={gapDashArray}
          strokeLinecap="round"
          transform={`rotate(${rotation} ${cx} ${cy})`}
          className="opacity-40"
        />

        {/* Filled arc */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset="0"
          strokeLinecap="round"
          transform={`rotate(${rotation} ${cx} ${cy})`}
          filter="url(#glow)"
          style={{
            transition: "stroke-dasharray 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Score text */}
        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          dominantBaseline="central"
          className="font-sans"
          style={{
            fontSize: "56px",
            fontWeight: 800,
            fill: config.color,
          }}
        >
          {animatedScore}
        </text>

        {/* "/ 100" */}
        <text
          x={cx}
          y={cy + 30}
          textAnchor="middle"
          dominantBaseline="central"
          className="font-sans"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            fill: "#9CA3AF",
          }}
        >
          / 100
        </text>

        {/* Risk level label */}
        <text
          x={cx}
          y={cy + 55}
          textAnchor="middle"
          dominantBaseline="central"
          className="font-sans"
          style={{
            fontSize: "16px",
            fontWeight: 700,
            fill: config.color,
            letterSpacing: "0.15em",
          }}
        >
          {config.label}
        </text>
      </svg>
    </div>
  );
}
