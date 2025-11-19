import React from 'react'
import { Bell, ChevronDown, Search } from 'lucide-react'

export default function Header({ title = 'Dashboard Bendahara', onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-white/50 border-b border-slate-200/60">
      <div className="px-4 lg:px-6 py-3 flex items-center gap-3">
        <button onClick={onToggleSidebar} className="lg:hidden mr-1 px-3 py-2 rounded-xl bg-white/70 border border-slate-200 text-slate-700 shadow hover:bg-white" aria-label="Buka sidebar">☰</button>
        <div className="flex-1 min-w-0">
          <h1 className="text-slate-800 font-semibold truncate">{title}</h1>
          <p className="text-slate-500 text-xs">Yayasan Pondok Pesantren Riyadlul Huda</p>
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Cari..." className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm" />
          </div>
          <button className="p-2 rounded-xl bg-white/70 border border-slate-200 text-slate-600 hover:bg-white">
            <Bell size={18} />
          </button>
          <div className="relative">
            <button className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/70 border border-slate-200 text-slate-700 hover:bg-white">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400" />
              <span className="text-sm">Bendahara</span>
              <ChevronDown size={16} />
            </button>
            {/* Dropdown placeholder */}
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-6 py-2 border-t border-slate-200/60 bg-white/50">
        {/* Quick horizontal filters placeholder - wired later */}
        <div className="flex gap-2 overflow-x-auto text-xs text-slate-600">
          <button className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">Semua</button>
          <button className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">Putra</button>
          <button className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">Putri</button>
          <button className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">Tunggakan</button>
          <button className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">Gaji Tertunda</button>
        </div>
      </div>
    </header>
  )
}
