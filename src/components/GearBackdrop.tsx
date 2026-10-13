type GearBackdropProps = { className: string; teeth: number; reverse?: boolean };

function makeGearPath(teeth: number) {
  const center = 200;
  const rootRadius = 145;
  const tipRadius = 164;
  const toothProfile: [number, number][] = [
    [0, rootRadius],
    [0.18, rootRadius],
    [0.18, tipRadius],
    [0.52, tipRadius],
    [0.52, rootRadius],
    [1, rootRadius],
  ];

  const points = Array.from({ length: teeth }, (_, tooth) =>
    toothProfile.map(([fraction, radius]) => {
      const angle = ((tooth + fraction) * Math.PI * 2) / teeth - Math.PI / 2;
      return [
        center + Math.cos(angle) * radius,
        center + Math.sin(angle) * radius,
      ] as const;
    }),
  ).flat();

  return points
    .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`)
    .join(" ") + " Z";
}

function GearWheel({ className, teeth, reverse = false }: GearBackdropProps) {
  const gearPath = makeGearPath(teeth);

  return (
    <svg
      className={`mechanism-gear ${className}${reverse ? " mechanism-gear--reverse" : ""}`}
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <g className="gear-rotor">
        <path className="gear-outline" d={gearPath} />
        <circle className="gear-rim" cx="200" cy="200" r="126" />
        <circle className="gear-rim gear-rim--inner" cx="200" cy="200" r="91" />
        <g className="gear-spokes">
          {Array.from({ length: 8 }, (_, index) => (
            <line
              key={index}
              x1="200"
              y1="105"
              x2="200"
              y2="124"
              transform={`rotate(${index * 45} 200 200)`}
            />
          ))}
        </g>
        <circle className="gear-hub" cx="200" cy="200" r="42" />
        <circle className="gear-bore" cx="200" cy="200" r="16" />
      </g>
    </svg>
  );
}

export default function GearBackdrop() {
  return (
    <div className="mechanism-backdrop" aria-hidden="true">
      <GearWheel className="mechanism-gear--large" teeth={24} />
      <GearWheel className="mechanism-gear--middle" teeth={18} reverse />
      <GearWheel className="mechanism-gear--small" teeth={14} />
    </div>
  );
}
