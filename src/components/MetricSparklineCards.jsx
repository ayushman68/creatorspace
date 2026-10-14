import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Cpu, Users } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function MetricSparklineCards() {
  const cards = [
    {
      label: 'Verified AI Directors',
      value: '2,450',
      change: '+14.2%',
      changeType: 'positive',
      subtext: '34 new submissions today',
      icon: Users,
      color: '#8b5cf6',
      // Sparkline points (x, y)
      points: '0,28 15,24 30,26 45,18 60,20 75,12 90,14 105,6 120,8 135,2',
      gradientId: 'sparkline-violet'
    },
    {
      label: 'Seed Reproducibility',
      value: '99.4%',
      change: 'Grade A+',
      changeType: 'positive',
      subtext: 'Audited across 10 random seeds',
      icon: ShieldCheck,
      color: '#10b981',
      points: '0,25 15,22 30,20 45,22 60,16 75,14 90,10 105,8 120,4 135,2',
      gradientId: 'sparkline-emerald'
    },
    {
      label: 'Escrow Under Guarantee',
      value: '$4.82M',
      change: '+28.5%',
      changeType: 'positive',
      subtext: '100% Commercial Indemnity',
      icon: Zap,
      color: '#06b6d4',
      points: '0,30 15,26 30,24 45,20 60,22 75,15 90,12 105,10 120,5 135,2',
      gradientId: 'sparkline-cyan'
    },
    {
      label: 'Inference Parity Latency',
      value: '340ms',
      change: '-18.4ms',
      changeType: 'positive',
      subtext: 'Zero drift across GPU nodes',
      icon: Cpu,
      color: '#f59e0b',
      points: '0,10 15,14 30,12 45,18 60,16 75,22 90,20 105,25 120,24 135,28',
      gradientId: 'sparkline-amber'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '18px',
      marginBottom: '32px'
    }}>
      {cards.map((card, idx) => {
        const IconComp = card.icon;
        return (
          <div 
            key={idx}
            className="glass-card"
            style={{
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            onMouseEnter={() => sounds.hover()}
          >
            {/* Top row: Label + Icon */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
                {card.label}
              </span>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                background: `${card.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${card.color}35`
              }}>
                <IconComp size={15} color={card.color} />
              </div>
            </div>

            {/* Middle: Big Metric Value + Change Badge */}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="font-display" style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.03em',
                lineHeight: 1.1
              }}>
                {card.value}
              </span>

              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)',
                background: `${card.color}18`,
                color: card.color,
                border: `1px solid ${card.color}35`,
                display: 'flex',
                alignItems: 'center',
                gap: '3px'
              }}>
                <TrendingUp size={10} />
                {card.change}
              </span>
            </div>

            {/* Bottom: Sparkline Chart (Matching Quantix template!) */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: '6px' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {card.subtext}
              </span>

              <div style={{ width: '100px', height: '32px' }}>
                <svg viewBox="0 0 135 32" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  <defs>
                    <linearGradient id={card.gradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={card.color} stopOpacity="0.4" />
                      <stop offset="100%" stopColor={card.color} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Fill below line */}
                  <polygon
                    points={`0,32 ${card.points} 135,32`}
                    fill={`url(#${card.gradientId})`}
                  />
                  {/* Glowing stroke */}
                  <polyline
                    fill="none"
                    stroke={card.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={card.points}
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
