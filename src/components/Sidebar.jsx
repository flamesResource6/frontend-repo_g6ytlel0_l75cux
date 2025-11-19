import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Users, CreditCard, ArrowDownCircle, ArrowUpCircle, IdCard, Wallet, FileBarChart, Settings, ChevronRight } from 'lucide-react'

const navItems = [
  { key: 'dasboard', label: 'dasboard', title: 'Dashboard', icon: LayoutDashboard },
  { key: 'data-santri', label: 'Data Santri', title: 'Data Santri', icon: Users },
  { key: 'syahriah', label: 'syahriah', title: 'Syariah', icon: CreditCard },
  { key: 'pemasukan', label: 'pemasukan', title: 'Pemasukan', icon: ArrowDownCircle },
  { key: 'pengeluaran', label: 'pengeluaran', title: 'Pengeluaran', icon: ArrowUpCircle },
  { key: 'data-pegawai', label: 'Data Pegawai', title: 'Data Pegawai', icon: IdCard },
  { key: 'gaji-pegawai', label: 'gaji pegawai', title: 'Gaji Pegawai', icon: Wallet },
  { key: 'laporan', label: 'laporan', title: 'Laporan', icon: FileBarChart },
  { key: 'pengaturan', label: 'pengaturan', title: 'Pengaturan', icon: Settings },
]

export default function Sidebar({ open, onClose, activeKey, onNavigate }) {
  return (
    <>
      {/* Backdrop for small screens */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <AnimatePresence>
        {(open || typeof window === 'undefined') && (
          <motion.aside
            key="sidebar"
            className="fixed z-50 lg:z-0 lg:static left-0 top-0 h-full w-72 lg:w-64 backdrop-blur-md bg-white/60 border-r border-slate-200/70 shadow-xl lg:shadow-none"
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            aria-label="Sidebar Navigation"
          >
            <div className="h-16 px-4 flex items-center gap-3 border-b border-slate-200/70 bg-white/60">
              <div className="w-10 h-10 bg-white/70 border border-slate-200 rounded-xl grid place-items-center shadow-sm">
                <span className="text-green-600 font-bold">YRH</span>
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-slate-800">Riyadlul Huda</div>
                <div className="text-xs text-slate-500">Dashboard Keuangan</div>
              </div>
              <button onClick={onClose} className="ml-auto lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600" aria-label="Tutup sidebar">
                <ChevronRight size={18} />
              </button>
            </div>

            <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100%-8rem)]">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = activeKey === item.key
                return (
                  <button
                    key={item.key}
                    title={item.title}
                    onClick={() => onNavigate?.(item.key)}
                    className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition shadow-sm hover:shadow-md relative ${
                      active
                        ? 'bg-gradient-to-r from-emerald-500/90 to-emerald-400/90 text-white'
                        : 'bg-white/70 border border-slate-200/70 text-slate-700 hover:bg-white'
                    }`}
                  >
                    <span className={`inline-flex p-2 rounded-lg ${active ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                      <Icon size={18} />
                    </span>
                    <span className="text-sm tracking-wide">{item.label}</span>
                    <span className="absolute inset-0 rounded-xl pointer-events-none bg-white/0 group-hover:bg-white/10 transition-colors" />
                    {/* floating glow */}
                    <span className="pointer-events-none absolute -inset-1 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition" style={{ background: 'radial-gradient(120px 40px at 10% 50%, rgba(22,163,74,0.18), transparent 60%)' }} />
                  </button>
                )
              })}
            </nav>

            <div className="mt-auto px-4 py-3 border-t border-slate-200/70 text-sm text-slate-600/90">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a href="#" className="hover:text-emerald-600">Persyaratan</a>
                <a href="#" className="hover:text-emerald-600">Privasi</a>
                <a href="#" className="hover:text-emerald-600">Bantuan</a>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
