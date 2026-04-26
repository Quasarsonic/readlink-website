type TileConfig = {
  id: number;
  left: string;
  width: number;
  height: number;
  animationDuration: string;
  animationDelay: string;
};

const tiles: TileConfig[] = [
  { id: 1, left: "4%", width: 52, height: 52, animationDuration: "12s", animationDelay: "-2s" },
  { id: 2, left: "10%", width: 44, height: 44, animationDuration: "9s", animationDelay: "-6s" },
  { id: 3, left: "16%", width: 60, height: 60, animationDuration: "14s", animationDelay: "-1s" },
  { id: 4, left: "22%", width: 48, height: 48, animationDuration: "11s", animationDelay: "-9s" },
  { id: 5, left: "28%", width: 56, height: 56, animationDuration: "13s", animationDelay: "-4s" },
  { id: 6, left: "34%", width: 44, height: 44, animationDuration: "10s", animationDelay: "-7s" },
  { id: 7, left: "40%", width: 52, height: 52, animationDuration: "15s", animationDelay: "-3s" },
  { id: 8, left: "46%", width: 48, height: 48, animationDuration: "9s", animationDelay: "-11s" },
  { id: 9, left: "52%", width: 64, height: 64, animationDuration: "12s", animationDelay: "-5s" },
  { id: 10, left: "58%", width: 44, height: 44, animationDuration: "10s", animationDelay: "-8s" },
  { id: 11, left: "64%", width: 56, height: 56, animationDuration: "13s", animationDelay: "-2s" },
  { id: 12, left: "70%", width: 48, height: 48, animationDuration: "11s", animationDelay: "-10s" },
  { id: 13, left: "75%", width: 52, height: 52, animationDuration: "14s", animationDelay: "-6s" },
  { id: 14, left: "80%", width: 44, height: 44, animationDuration: "9s", animationDelay: "-3s" },
  { id: 15, left: "85%", width: 60, height: 60, animationDuration: "15s", animationDelay: "-7s" },
  { id: 16, left: "89%", width: 48, height: 48, animationDuration: "12s", animationDelay: "-1s" },
  { id: 17, left: "93%", width: 44, height: 44, animationDuration: "10s", animationDelay: "-9s" },
  { id: 18, left: "7%", width: 56, height: 56, animationDuration: "11s", animationDelay: "-12s" },
  { id: 19, left: "36%", width: 52, height: 52, animationDuration: "13s", animationDelay: "-5s" },
  { id: 20, left: "62%", width: 48, height: 48, animationDuration: "9s", animationDelay: "-14s" },
];

export function HeroProfileTiles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="profile-tile absolute"
          style={{
            left: tile.left,
            top: "-120px",
            width: `${tile.width}px`,
            height: `${tile.height}px`,
            borderRadius: "14px",
            background: "#1A1A1A",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            overflow: "hidden",
            animationName: "floatDown",
            animationDuration: tile.animationDuration,
            animationDelay: tile.animationDelay,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <img
            src={`https://i.pravatar.cc/100?img=${tile.id}`}
            alt=""
            className="h-full w-full object-cover grayscale"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
