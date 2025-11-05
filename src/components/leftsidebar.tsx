import React from "react";

const sample = {
  cookPercent: 67,
  gasCount: 42,
  capLevel: 58,
  mostRoasted: "Work Experience",
  heatmap: [
    { label: "Summary", value: 30 },
    { label: "Skills", value: 55 },
    { label: "Projects", value: 72 },
    { label: "Experience", value: 88 },
  ],
  topRoasts: [
    { text: "Bro listed 'teamwork' 4 times like it's a Pokémon ability.", boosts: 12 },
  ],
};

export function LeftSidebar({
  cookPercent = sample.cookPercent,
  gasCount = sample.gasCount,
  capLevel = sample.capLevel,
  mostRoasted = sample.mostRoasted,
  heatmap = sample.heatmap,
  topRoasts = sample.topRoasts,
}) {
  return (
    <aside className="w-72 min-h-screen bg-[#0D0D12] text-white p-5 flex flex-col gap-5 border-r border-[#1b1b1b]">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded bg-[#111214] flex items-center justify-center text-[#FF4D6D] font-bold">NR</div>
        <div>
          <div className="text-base font-semibold">NoCapRewu</div>
          <div className="text-xs text-gray-400">Roast Scoreboard</div>
        </div>
      </div>

      {/* Cook + Gas + Share side stack */}
      <div className="flex gap-3">

        {/* Cook Level */}
        <div className="bg-[#0E0F13] rounded p-3 border border-[#1e1e1e] flex flex-col items-center w-28">
          <div className="text-xs text-gray-400 mb-2">COOK LEVEL 🔥</div>

          <div className="relative w-10 h-40 bg-[#141416] border border-[#2a2a2a] rounded-full overflow-hidden">
            <div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#FF4D6D] to-[#FFD36A]"
              style={{ height: `${cookPercent}%` }}
            />
          </div>

          <div className="mt-3 text-sm font-medium">
            {cookPercent >= 80 ? 'CHARRED' : cookPercent >= 50 ? 'Well Done' : 'Mild Burn'}
          </div>
          <div className="text-xs text-gray-400">{cookPercent}% cooked</div>
        </div>

        {/* Gas + Throw/Share stacked */}
        <div className="flex-1 flex flex-col gap-2">

          {/* Gas It Up - redesigned with big counter */}
          <button
            onClick={() => {}}
            className="flex-1 bg-[#111114] rounded border border-[#262626] hover:border-[#FF4D6D] transition flex flex-col items-center justify-center p-2 cursor-pointer group"
            aria-label="Gas it up"
          >
            <div className="text-[28px] font-extrabold leading-none">{gasCount}</div>
            <div className="text-[10px] tracking-wide text-gray-400 group-hover:text-[#FF4D6D] transition">
              GAS IT UP
            </div>
          </button>

          {/* Throw It Away / Share - side by side small buttons */}
          <div className="flex w-full gap-2">
            <button
              type="button"
              className="flex-1 bg-[#141416] rounded border border-[#262626] hover:border-[#FF4D6D] transition flex flex-col items-center justify-center p-2 text-gray-300 cursor-pointer"
              aria-label="Throw"
            >
              <div className="text-[22px] leading-none">🗑️</div>
              <div className="text-[9px] tracking-wide">THROW</div>
            </button>

            <button
              type="button"
              className="flex-1 bg-[#141416] rounded border border-[#262626] hover:border-[#FF4D6D] transition flex flex-col items-center justify-center p-2 text-gray-300 cursor-pointer"
              aria-label="Share"
            >
              <div className="text-[22px] leading-none">🔗</div>
              <div className="text-[9px] tracking-wide">SHARE</div>
            </button>
          </div>

        </div>

      </div>

      {/* Cap Level */}
      <div className="bg-[#0E0F13] rounded p-3 border border-[#1e1e1e] flex flex-col gap-2">
        <div className="text-xs text-gray-400">CAP LEVEL 🧢</div>
        <div className="flex items-center gap-3">
          <div className="w-full h-2 bg-[#0b0b0b] rounded overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00F2FF] to-[#FF4D6D]"
              style={{ width: `${capLevel}%` }}
            />
          </div>
          <div className="text-xs text-gray-300 w-10 text-right">{capLevel}%</div>
        </div>
        <div className="text-xs text-gray-400 italic">
          Most roasted: <span className="text-[#FF4D6D]">{mostRoasted}</span>
        </div>
      </div>

      {/* Heatmap */}
      <div>
        <div className="text-sm text-gray-400 mb-2">ROAST HEATMAP</div>
        <div className="flex flex-col gap-2">
          {heatmap.map((h) => (
            <div key={h.label} className="flex items-center gap-3">
              <div className="text-xs w-24 text-gray-300">{h.label}</div>
              <div className="flex-1 bg-[#0F1114] h-3 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{ width: `${h.value}%`, background: `linear-gradient(90deg,#FF6A6A, #FFCC66)` }}
                />
              </div>
              <div className="w-10 text-right text-xs text-gray-300">{h.value}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Roasts */}
      <div>
        <div className="text-sm text-gray-400 mb-2">TOP ROASTS</div>
        <div className="flex flex-col gap-2">
          {topRoasts.map((r) => (
            <div key={r.text} className="flex items-start gap-3 bg-[#0E0F13] p-3 rounded border border-[#1e1e1e]">
              <div className="text-sm font-medium flex-1">{r.text}</div>
              <div className="text-xs text-gray-400">+{r.boosts} 💨</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
