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
  SlidersHorizontal,
  Users,
  LogIn,
  LogOut,
  ChevronDown,
  Building2,
  Palette
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function TopHeader({ 
  onToggleSidebar, 
  activeTab, 
  onOpenCreateBrief,
  searchQuery,
  setSearchQuery,
  currentUser,
  onOpenAuthModal,
  onSwitchPersona
}) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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
      background: 'rgba(7, 7, 11, 0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      {/* Live Market & AI Cluster Ticker */}
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

        {/* Right: Search, User Menu, Notifications, Primary Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Top Search Input */}
          <div style={{ position: 'relative', width: '240px' }} className="top-search-box">
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
              onClick={() => { sounds.click(); setNotificationsOpen(!notificationsOpen); setUserMenuOpen(false); }}
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

          {/* User Sign In / Profile Dropdown Menu */}
          <div style={{ position: 'relative' }}>
            {currentUser ? (
              <button
                onClick={() => { sounds.click(); setUserMenuOpen(!userMenuOpen); setNotificationsOpen(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 10px 4px 5px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${currentUser.type === 'brand' ? 'rgba(139, 92, 246, 0.35)' : 'rgba(6, 182, 212, 0.35)'}`,
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                  color: '#fff',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img 
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '-1px',
                    right: '-1px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 5px #10b981'
                  }} />
                </div>
                <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
                  <p style={{ fontSize: '12px', fontWeight: 600, margin: 0, color: '#fff' }}>
                    {currentUser.name.split(' ')[0]}
                  </p>
                  <span style={{ 
                    fontSize: '9.5px', 
                    fontWeight: 700, 
                    color: currentUser.type === 'brand' ? '#c084fc' : '#67e8f9',
                    letterSpacing: '0.04em'
                  }}>
                    {currentUser.type === 'brand' ? 'BRAND' : 'CREATOR'}
                  </span>
                </div>
                <ChevronDown size={13} style={{ color: 'var(--text-muted)', marginLeft: '2px' }} />
              </button>
            ) : (
              <button
                onClick={() => { sounds.click(); onOpenAuthModal('brand'); }}
                className="btn-secondary"
                style={{ padding: '6px 14px', fontSize: '12.5px', gap: '6px' }}
              >
                <LogIn size={13} />
                <span>Sign In</span>
              </button>
            )}

            {/* User Dropdown Card */}
            {userMenuOpen && currentUser && (
              <div style={{
                position: 'absolute',
                top: '46px',
                right: 0,
                width: '300px',
                background: '#0d0e17',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.85)',
                zIndex: 70
              }}>
                {/* User info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <img 
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#fff', margin: 0 }}>
                      {currentUser.name}
                    </h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
                      {currentUser.role}
                    </p>
                    <span style={{
                      fontSize: '10px',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: currentUser.type === 'brand' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                      color: currentUser.type === 'brand' ? '#c084fc' : '#67e8f9',
                      display: 'inline-block',
                      marginTop: '4px',
                      fontWeight: 600
                    }}>
                      {currentUser.organization}
                    </span>
                  </div>
                </div>

                {/* Balances / Metrics */}
                <div style={{
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {currentUser.type === 'brand' ? 'Escrow Vault Balance' : 'Pending Milestone Payouts'}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                    {currentUser.escrowBalance}
                  </span>
                </div>

                {/* Switch Persona Action */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <button
                    onClick={() => {
                      sounds.click();
                      setUserMenuOpen(false);
                      if (onSwitchPersona) {
                        onSwitchPersona(currentUser.type === 'brand' ? 'creator' : 'brand');
                      } else {
                        onOpenAuthModal(currentUser.type === 'brand' ? 'creator' : 'brand');
                      }
                    }}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {currentUser.type === 'brand' ? <Palette size={14} color="#67e8f9" /> : <Building2 size={14} color="#c084fc" />}
                      <span>Switch to {currentUser.type === 'brand' ? 'AI Creator Studio' : 'Brand Agency'}</span>
                    </div>
                    <ArrowRight size={12} color="var(--text-muted)" />
                  </button>

                  <button
                    onClick={() => {
                      sounds.click();
                      setUserMenuOpen(false);
                      onOpenAuthModal(currentUser.type);
                    }}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <Users size={14} />
                    <span>Sign In With Another Account</span>
                  </button>
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
