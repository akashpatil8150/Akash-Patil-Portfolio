import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPlay, FaPause, FaInfoCircle, FaCheckCircle, 
  FaArrowRight, FaArrowDown, FaNetworkWired, FaServer, 
  FaShieldAlt, FaDatabase, FaBolt, FaMicrochip 
} from 'react-icons/fa'

export default function ArchitectureFlow({ project, colorTheme }) {
  const nodes = project.architectureNodes || []
  const [activeNodeId, setActiveNodeId] = useState(nodes[0]?.id || '')
  const [isSimulating, setIsSimulating] = useState(true)
  const [pulseIndex, setPulseIndex] = useState(0)

  // Reset state when project changes
  useEffect(() => {
    if (nodes.length > 0) {
      setActiveNodeId(nodes[0].id)
      setPulseIndex(0)
      setIsSimulating(true)
    }
  }, [project.id])

  // Simulation timer cycling through nodes
  useEffect(() => {
    if (!isSimulating || nodes.length === 0) return
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % nodes.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [isSimulating, nodes.length])

  // Sync active node with pulse when in simulation mode
  useEffect(() => {
    if (isSimulating && nodes[pulseIndex]) {
      setActiveNodeId(nodes[pulseIndex].id)
    }
  }, [pulseIndex, isSimulating, nodes])

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0]

  // Color schemes
  const colorMap = {
    brand: {
      activeBorder: 'border-brand shadow-[0_0_20px_rgba(79,140,255,0.35)]',
      accentText: 'text-brand',
      accentBg: 'bg-brand',
      activeRing: 'ring-2 ring-brand/50',
      badge: 'bg-brand/10 text-brand border-brand/25',
      glowLine: '#4f8cff',
      dot: 'bg-brand',
    },
    'brand-2': {
      activeBorder: 'border-brand-2 shadow-[0_0_20px_rgba(0,212,170,0.35)]',
      accentText: 'text-brand-2',
      accentBg: 'bg-brand-2',
      activeRing: 'ring-2 ring-brand-2/50',
      badge: 'bg-brand-2/10 text-brand-2 border-brand-2/25',
      glowLine: '#00d4aa',
      dot: 'bg-brand-2',
    },
    'brand-3': {
      activeBorder: 'border-brand-3 shadow-[0_0_20px_rgba(168,85,247,0.35)]',
      accentText: 'text-brand-3',
      accentBg: 'bg-brand-3',
      activeRing: 'ring-2 ring-brand-3/50',
      badge: 'bg-brand-3/10 text-brand-3 border-brand-3/25',
      glowLine: '#a855f7',
      dot: 'bg-brand-3',
    },
  }

  const theme = colorMap[project.color] || colorMap.brand

  return (
    <div className="space-y-6">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-panel-2/80 border border-border">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-2 animate-pulse" />
          <span className="text-xs font-mono font-bold text-primary">
            LIVE ARCHITECTURE PIPELINE
          </span>
          <span className="text-[11px] text-muted hidden sm:inline-block">
            &mdash; Click any node or let simulation run
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsSimulating(!isSimulating)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
              isSimulating
                ? 'bg-brand/15 text-brand border border-brand/30'
                : 'bg-panel border border-border text-muted hover:text-primary'
            }`}
          >
            {isSimulating ? (
              <>
                <FaPause className="text-[10px]" />
                <span>Simulating Flow</span>
              </>
            ) : (
              <>
                <FaPlay className="text-[10px]" />
                <span>Start Flow</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Pipeline Diagram (Horizontal on Desktop, Vertical on Mobile) */}
      <div className="relative p-6 rounded-3xl bg-panel-2/40 border border-border/70 overflow-hidden">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Nodes Grid / Flow */}
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {nodes.map((node, index) => {
            const isActive = activeNodeId === node.id
            const isPulse = isSimulating && pulseIndex === index

            return (
              <div
                key={node.id}
                className="flex flex-col lg:flex-row items-center flex-1 min-w-0"
              >
                {/* Node Card */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveNodeId(node.id)
                    setIsSimulating(false)
                  }}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 relative group cursor-pointer ${
                    isActive
                      ? `bg-panel-2 ${theme.activeBorder} ${theme.activeRing}`
                      : 'bg-panel/80 border-border hover:border-border-2 hover:bg-panel'
                  }`}
                >
                  {/* Active / Simulating Pulse Indicator */}
                  {isPulse && (
                    <motion.div
                      layoutId={`pulseGlider-${project.id}`}
                      className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${theme.dot} ring-4 ring-black`}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl sm:text-2xl shrink-0 p-1 rounded-lg bg-panel-2/70 border border-border/40">
                      {node.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted font-bold truncate">
                        Step 0{index + 1}
                      </div>
                      <div className={`text-xs sm:text-sm font-black tracking-tight truncate ${
                        isActive ? theme.accentText : 'text-primary'
                      }`}>
                        {node.label}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-muted line-clamp-1">
                    {node.subtitle}
                  </div>

                  <div className="mt-2 pt-2 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-dim truncate max-w-[120px]">
                      {node.tech}
                    </span>
                    <span className={`text-[10px] font-mono font-bold ${
                      isActive ? theme.accentText : 'text-muted'
                    }`}>
                      {isActive ? 'INSPECT' : 'VIEW'}
                    </span>
                  </div>
                </button>

                {/* Connecting Arrow between nodes */}
                {index < nodes.length - 1 && (
                  <div className="flex items-center justify-center py-2 lg:py-0 lg:px-2 shrink-0">
                    <div className="hidden lg:flex items-center">
                      <motion.div
                        animate={{
                          opacity: isSimulating && pulseIndex === index ? [0.4, 1, 0.4] : 0.4,
                          scale: isSimulating && pulseIndex === index ? [1, 1.25, 1] : 1,
                          x: isSimulating && pulseIndex === index ? [0, 4, 0] : 0
                        }}
                        transition={{ duration: 1, repeat: isSimulating && pulseIndex === index ? Infinity : 0 }}
                        className={isSimulating && pulseIndex === index ? theme.accentText : 'text-muted'}
                      >
                        <FaArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>

                    <div className="lg:hidden flex justify-center">
                      <FaArrowDown className="w-3.5 h-3.5 text-muted" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Selected Node Technical Details Panel */}
      {activeNode && (
        <motion.div
          key={`${project.id}-${activeNode.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="p-5 sm:p-6 rounded-2xl bg-panel-2 border border-border-2 shadow-xl"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/70">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-xl bg-panel border border-border">
                  {activeNode.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-base sm:text-lg font-bold text-primary">
                      {activeNode.label}
                    </h5>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${theme.badge}`}>
                      {activeNode.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-muted font-mono mt-0.5">
                    Engineered component: <span className="text-primary font-semibold">{activeNode.tech}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-panel border border-border text-xs font-mono text-primary font-semibold flex items-center gap-1.5">
                  <FaBolt className={theme.accentText} />
                  <span>{activeNode.tech}</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 text-xs">
              <div className="md:col-span-8 space-y-2">
                <div className="text-[11px] font-mono font-bold uppercase text-muted tracking-wider">
                  Technical Execution & Role
                </div>
                <p className="text-primary/90 text-sm leading-relaxed">
                  {activeNode.details}
                </p>
              </div>

              <div className="md:col-span-4 p-3.5 rounded-xl bg-panel border border-border/70 space-y-1.5">
                <div className="text-[10px] font-mono font-bold uppercase text-muted">
                  System Architecture Role
                </div>
                <div className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <FaCheckCircle className="text-brand-2 text-xs shrink-0" />
                  <span>Deterministic Workflow Step</span>
                </div>
                <div className="text-[11px] text-muted">
                  Component executes with validated inputs and structured outputs.
                </div>
              </div>
            </div>
          </motion.div>
        )}
    </div>
  )
}
