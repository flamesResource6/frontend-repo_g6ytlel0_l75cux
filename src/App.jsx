import React, { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Watermark from './components/Watermark'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Filters from './components/Filters'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [active, setActive] = useState('dasboard')
  const [filters, setFilters] = useState({})

  const kabupatenList = useMemo(() => [
    'Kab. Tasikmalaya','Kab. Ciamis','Kab. Garut','Kab. Bandung','Kab. Kuningan','Kab. Pangandaran'
  ], [])

  // simulate realtime update trigger on filters change
  useEffect(() => {
    // Here we would call backend with new filters and update charts/cards/tables
    // For now, just log to demonstrate reactivity
    console.log('Filters updated', filters)
  }, [filters])

  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 50%, #F8FAFC 100%)'}}>
      {/* animated gradient aura */}
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl" style={{background:'radial-gradient(circle, rgba(22,163,74,0.15), transparent 60%)'}} />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl" style={{background:'radial-gradient(circle, rgba(37,99,235,0.18), transparent 60%)'}} />
      </div>

      <div className="flex">
        <div className="hidden lg:block shrink-0"><Sidebar open onClose={()=>setSidebarOpen(false)} activeKey={active} onNavigate={setActive} /></div>
        <Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)} activeKey={active} onNavigate={(k)=>{ setActive(k); setSidebarOpen(false) }} />

        <div className="flex-1 min-w-0">
          <Header title="Dashboard Bendahara" onToggleSidebar={()=>setSidebarOpen(true)} filters={filters} onFiltersChange={setFilters} />

          {/* Filter lengkap */}
          <div className="px-4 lg:px-6 py-4">
            <div className="rounded-2xl p-4 bg-white/70 border border-slate-200 shadow-sm">
              <div className="text-slate-700 font-medium mb-3">Filter Lengkap</div>
              <Filters values={filters} onChange={setFilters} kabupatenList={kabupatenList} />
              <div className="mt-3 text-xs text-slate-500">Tooltip ejaan baku tersedia saat hover menu.</div>
            </div>
          </div>

          <main className="px-4 lg:px-6 pb-10">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {title:'Saldo Dana Santri', value:'Rp 120.450.000', color:'from-emerald-500 to-emerald-400'},
                {title:'Total Pemasukan', value:'Rp 320.000.000', color:'from-blue-600 to-blue-400'},
                {title:'Total Pengeluaran', value:'Rp 210.000.000', color:'from-orange-500 to-orange-400'},
                {title:'Total Santri Aktif', value:'1.245', color:'from-cyan-500 to-teal-400'},
              ].map((c,idx)=> (
                <motion.div key={idx} whileHover={{scale:1.03}} className={`rounded-2xl p-5 bg-white/60 border border-white/60 shadow-sm`}> 
                  <div className={`inline-flex px-3 py-1 text-white rounded-lg bg-gradient-to-r ${c.color} shadow`}>{c.title}</div>
                  <div className="mt-4 text-2xl font-semibold text-slate-800">{c.value}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="lg:col-span-2 rounded-2xl p-6 bg-white/70 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800">Tren Pemasukan vs Pengeluaran</h3>
                <p className="text-slate-500 text-sm">Contoh placeholder chart</p>
                <div className="mt-6 h-64 grid place-items-center text-slate-400">Chart Area</div>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.15}} className="rounded-2xl p-6 bg-white/70 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800">Distribusi Santri</h3>
                <div className="mt-6 h-64 grid place-items-center text-slate-400">Pie Chart</div>
              </motion.div>
            </div>

            <div className="mt-10 grid lg:grid-cols-2 gap-6">
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="rounded-2xl p-6 bg-white/70 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800">Pegawai & Gaji</h3>
                <p className="text-slate-500 text-sm">Ringkasan gaji bulan ini & tertunda</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-white shadow">
                    <div className="text-sm opacity-90">Total Gaji Dibayar</div>
                    <div className="text-2xl font-semibold">Rp 45.000.000</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow">
                    <div className="text-sm opacity-90">Total Gaji Tertunda</div>
                    <div className="text-2xl font-semibold">Rp 12.500.000</div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.25}} className="rounded-2xl p-6 bg-white/70 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800">Daftar Santri Menunggak</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center justify-between"><span>Ahmad - Kelas 2</span><span className="text-rose-600 font-medium">Rp 300.000</span></li>
                  <li className="flex items-center justify-between"><span>Siti - Kelas 3</span><span className="text-rose-600 font-medium">Rp 450.000</span></li>
                  <li className="flex items-center justify-between"><span>Fulan - Kelas 1</span><span className="text-rose-600 font-medium">Rp 150.000</span></li>
                </ul>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      <Watermark />
    </div>
  )
}
