import React, { useEffect, useRef, useState } from 'react'
import { Bell, ChevronDown, Search } from 'lucide-react'

export default function Header({ title = 'Dashboard Bendahara', onToggleSidebar, filters = {}, onFiltersChange }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const update = (key, val) => {
    onFiltersChange?.({ ...filters, [key]: val })
  }

  const tahunOptions = Array.from({ length: 101 }, (_, i) => 2000 + i)
  const bulanOptions = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
  const asramaOptions = ['Zaed bin Tsabit','Thoriq bin Ziyad','Lubna','Yuhanada','Bilqis']

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
          <button className="p-2 rounded-xl bg-white/70 border border-slate-200 text-slate-600 hover:bg-white" aria-label="Notifikasi">
            <Bell size={18} />
          </button>
          <div className="relative" ref={menuRef}>
            <button onClick={() => setOpen((v)=>!v)} className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white/70 border border-slate-200 text-slate-700 hover:bg-white" aria-haspopup="menu" aria-expanded={open}>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400" />
              <span className="text-sm">Bendahara</span>
              <ChevronDown size={16} />
            </button>
            {open && (
              <div role="menu" className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white/95 shadow-lg overflow-hidden">
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Profil</button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Pengaturan</button>
                <div className="h-px bg-slate-200" />
                <button className="w-full text-left px-3 py-2 text-sm text-rose-600 hover:bg-rose-50">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick horizontal filters (akses cepat, realtime) */}
      <div className="px-4 lg:px-6 py-2 border-t border-slate-200/60 bg-white/50">
        <div className="flex items-center gap-2 overflow-x-auto text-xs text-slate-600">
          {/* Jenis kelamin toggle */}
          <div className="inline-flex bg-white/70 border border-slate-200 rounded-full p-0.5">
            {['Semua','Putra','Putri'].map((g)=> (
              <button key={g} onClick={()=> update('jenis_kelamin', g === 'Semua' ? '' : g)} className={`px-3 py-1.5 rounded-full transition ${
                (filters.jenis_kelamin || '') === (g === 'Semua' ? '' : g) ? 'bg-emerald-500 text-white' : 'hover:bg-white'
              }`}>{g}</button>
            ))}
          </div>

          {/* Asrama quick select */}
          <select title="Asrama" value={filters.asrama || ''} onChange={(e)=> update('asrama', e.target.value)} className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">
            <option value="">Asrama</option>
            {asramaOptions.map(a=> <option key={a} value={a}>{a}</option>)}
          </select>

          {/* Bulan quick select */}
          <select title="Bulan" value={filters.bulan || ''} onChange={(e)=> update('bulan', e.target.value)} className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">
            <option value="">Bulan</option>
            {bulanOptions.map(b=> <option key={b} value={b}>{b}</option>)}
          </select>

          {/* Tahun quick select */}
          <select title="Tahun" value={filters.tahun || ''} onChange={(e)=> update('tahun', e.target.value)} className="px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 hover:bg-white">
            <option value="">Tahun</option>
            {tahunOptions.map(t=> <option key={t} value={t}>{t}</option>)}
          </select>

          {/* Tunggakan and Gaji Tertunda shortcuts (flags) */}
          <button onClick={()=> update('hanya_tunggakan', !(filters.hanya_tunggakan))} className={`px-3 py-1.5 rounded-full border ${filters.hanya_tunggakan ? 'bg-rose-500 text-white border-rose-500' : 'bg-white/70 border-slate-200 hover:bg-white'}`}>Tunggakan</button>
          <button onClick={()=> update('gaji_tertunda', !(filters.gaji_tertunda))} className={`px-3 py-1.5 rounded-full border ${filters.gaji_tertunda ? 'bg-amber-500 text-white border-amber-500' : 'bg-white/70 border-slate-200 hover:bg-white'}`}>Gaji Tertunda</button>
        </div>
      </div>
    </header>
  )
}
