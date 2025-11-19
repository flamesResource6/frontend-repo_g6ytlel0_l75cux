import React, { useMemo } from 'react'

const kelasOptions = [
  '1 Ibtida','2 Ibtida','3 Ibtida',
  '1 Tsanawi','2 Tsanawi','3 Tsanawi',
  "1 Ma'had Aly","2 Ma'had Aly","3 Ma'had Aly","4 Ma'had Aly",
]
const asramaOptions = ['Zaed bin Tsabit','Thoriq bin Ziyad','Lubna','Yuhanada','Bilqis']
const jenisKelaminOptions = ['Putra','Putri']
const bulanOptions = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

export default function Filters({ values, onChange, kabupatenList = [] }) {
  const tahunOptions = useMemo(() => {
    const arr = []
    for (let y = 2000; y <= 2100; y++) arr.push(y)
    return arr
  }, [])

  const kobongOptions = useMemo(() => {
    if (!values.asrama) return []
    // 20 kobong per asrama
    return Array.from({ length: 20 }, (_, i) => `${values.asrama} - Kobong ${i + 1}`)
  }, [values.asrama])

  const update = (key, val) => onChange?.({ ...values, [key]: val })

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      <select className="input" value={values.kelas || ''} onChange={(e)=>update('kelas', e.target.value)}>
        <option value="">Kelas</option>
        {kelasOptions.map(k=> <option key={k} value={k}>{k}</option>)}
      </select>
      <select className="input" value={values.asrama || ''} onChange={(e)=>update('asrama', e.target.value)}>
        <option value="">Asrama</option>
        {asramaOptions.map(k=> <option key={k} value={k}>{k}</option>)}
      </select>
      <select className="input" value={values.kobong || ''} onChange={(e)=>update('kobong', e.target.value)}>
        <option value="">Kobong</option>
        {kobongOptions.map(k=> <option key={k} value={k}>{k}</option>)}
      </select>
      <select className="input" value={values.jenis_kelamin || ''} onChange={(e)=>update('jenis_kelamin', e.target.value)}>
        <option value="">Jenis Kelamin</option>
        {jenisKelaminOptions.map(k=> <option key={k} value={k}>{k}</option>)}
      </select>

      <select className="input" value={values.tahun || ''} onChange={(e)=>update('tahun', e.target.value)}>
        <option value="">Tahun</option>
        {tahunOptions.map(y=> <option key={y} value={y}>{y}</option>)}
      </select>

      <select className="input" value={values.bulan || ''} onChange={(e)=>update('bulan', e.target.value)}>
        <option value="">Bulan</option>
        {bulanOptions.map(b=> <option key={b} value={b}>{b}</option>)}
      </select>

      <select className="input" value={values.kabupaten || ''} onChange={(e)=>update('kabupaten', e.target.value)}>
        <option value="">Kabupaten</option>
        {kabupatenList.map(k=> <option key={k} value={k}>{k}</option>)}
      </select>

      <input className="input" placeholder="Tahun manual (2000-2100)" value={values.tahun_manual || ''} onChange={(e)=>update('tahun_manual', e.target.value)} />

      <style>{`
        .input{ @apply w-full px-3 py-2 rounded-xl border border-slate-200 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 } 
      `}</style>
    </div>
  )
}
