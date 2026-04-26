type TileConfig = {
  id: number;
  left: string;
  width: number;
  height: number;
  animationDuration: string;
  animationDelay: string;
};

const tiles: TileConfig[] = [
  { id: 1, left: "8%", width: 56, height: 56, animationDuration: "12s", animationDelay: "-2s" },
  { id: 2, left: "18%", width: 48, height: 48, animationDuration: "9s", animationDelay: "-6s" },
  { id: 3, left: "28%", width: 64, height: 64, animationDuration: "14s", animationDelay: "-1s" },
  { id: 4, left: "42%", width: 52, height: 52, animationDuration: "11s", animationDelay: "-9s" },
  { id: 5, left: "55%", width: 48, height: 48, animationDuration: "13s", animationDelay: "-4s" },
  { id: 6, left: "67%", width: 60, height: 60, animationDuration: "10s", animationDelay: "-7s" },
  { id: 7, left: "78%", width: 52, height: 52, animationDuration: "15s", animationDelay: "-3s" },
  { id: 8, left: "88%", width: 44, height: 44, animationDuration: "9s", animationDelay: "-11s" },
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
