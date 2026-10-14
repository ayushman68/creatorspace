import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Sparkles, 
  Menu, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function TopHeader({ 
  onToggleSidebar, 
  activeTab, 
  onOpenCreateBrief,
  searchQuery,
  setSearchQuery
}) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    { title: 'New brief matches your Flux.1 LoRA skills', time: '10m ago', unread: true },
    { title: 'Seed verification passed for Aurea Parfum (99.6%)', time: '1h ago', unread: true },
    { title: 'Balenciaga AI Lab released Milestone 2 escrow ($4,500)', time: '3h ago', unread: false }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(7, 7, 11, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      {/* Live Market & AI Cluster Ticker (Inspired by the crypto ticker in the pin!) */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        padding: '5px 24px',
        fontSize: '11px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        gap: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399' }}>
            <span className="status-dot" style={{ background: '#10b981' }} />
            <span>FLUX.1 PRO: 2.1s LATENCY</span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c084fc' }}>
            <Cpu size={11} /> RUNWAY GEN-3 ALPHA: OPERATIONAL
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#67e8f9' }}>
            <ShieldCheck size={11} /> VERIFIED REPRODUCIBILITY: 99.4%
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b' }}>
            <Zap size={11} /> ESCROW IN VAULT: $4,820,400
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
          <span>Last audit: <strong>2 min ago</strong></span>
          <span>Inference parity: <strong style={{ color: '#34d399' }}>100%</strong></span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div style={{
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Left: Mobile Toggle & Breadcrumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button 
            onClick={onToggleSidebar}
            className="btn-icon mobile-menu-btn"
            style={{ display: 'none' }}
          >
            <Menu size={18} />
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
              <span>Overview</span>
              <span>/</span>
              <span style={{ color: '#c084fc' }}>
                {activeTab === 'discover' && 'Verified Creators'}
                {activeTab === 'briefs' && 'Active Brand Briefs'}
                {activeTab === 'brief-builder' && 'AI Brief Builder'}
                {activeTab === 'verification' && 'Verification Engine'}
                {activeTab === 'creator-studio' && 'Creator Studio'}
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '19px', color: '#fff', fontWeight: 600, margin: 0, letterSpacing: '-0.01em' }}>
              {activeTab === 'discover' && 'Creator Discovery & AI Portfolios'}
              {activeTab === 'briefs' && 'Brand & Agency Briefs Exchange'}
              {activeTab === 'brief-builder' && 'AI-Assisted Brief Builder'}
              {activeTab === 'verification' && '4-Layer Trust & Verification'}
              {activeTab === 'creator-studio' && 'Director Studio & Workflow Hub'}
            </h2>
          </div>
        </div>

        {/* Right: Search, Notifications, Primary Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Top Search Input */}
          <div style={{ position: 'relative', width: '260px' }} className="top-search-box">
            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text"
              placeholder="Search tools, models, seeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 34px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-pill)',
                color: '#fff',
                fontSize: '12.5px',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
            />
          </div>

          {/* Notifications Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => { sounds.click(); setNotificationsOpen(!notificationsOpen); }}
              className="btn-icon"
              style={{ position: 'relative' }}
              title="Notifications"
            >
              <Bell size={16} />
              <span style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#8b5cf6',
                boxShadow: '0 0 6px #8b5cf6'
              }} />
            </button>

            {notificationsOpen && (
              <div style={{
                position: 'absolute',
                top: '46px',
                right: 0,
                width: '320px',
                background: '#0d0e17',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '12px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.8)',
                zIndex: 70
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', paddingBottom: '6px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Marketplace Alerts</span>
                  <span style={{ fontSize: '10px', color: '#c084fc', cursor: 'pointer' }}>Mark all read</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {notifications.map((n, i) => (
                    <div key={i} style={{ padding: '8px', borderRadius: '6px', background: n.unread ? 'rgba(139, 92, 246, 0.1)' : 'transparent', fontSize: '11.5px' }}>
                      <p style={{ color: '#fff', fontWeight: 500, marginBottom: '2px' }}>{n.title}</p>
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{n.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTA Button */}
          <button
            onClick={() => { sounds.click(); onOpenCreateBrief(); }}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '13px' }}
          >
            <Sparkles size={14} />
            <span>Generate AI Brief</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .top-search-box { display: none; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
