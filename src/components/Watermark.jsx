import React from 'react'

export default function Watermark() {
  return (
    <div className="fixed right-4 bottom-3 pointer-events-none select-none opacity-60">
      <div className="text-xs md:text-sm text-slate-600/60 px-3 py-1 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 shadow-inner animate-pulse">
        Developed by Mahin Utsman Nawawi, S.H
      </div>
    </div>
  )
}
