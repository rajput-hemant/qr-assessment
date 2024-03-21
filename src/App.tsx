import { Slider } from "./components/ui/slider";

export default function App() {
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center gap-10">
      <header>
        <h1 className="text-3xl font-bold drop-shadow-md sm:text-4xl md:text-5xl">
          Slider Component
        </h1>
      </header>

      <main className="space-y-4">
        <Slider label="Continuous" defaultValue={50} className="w-96" />
        <Slider
          label="Range"
          defaultValue={[33, 66]}
          className="w-96"
          step={10}
        />
        <Slider
          label="Discrete"
          defaultValue={60}
          className="w-96"
          showSteps
          step={10}
        />
        <Slider
          label="Tooltip"
          defaultValue={25}
          showTooltip
          className="w-96"
        />
        <Slider
          label="Size=sm (24px - Default)"
          size="sm"
          defaultValue={50}
          showTooltip
          className="w-96"
        />
        <Slider
          label="Size={md} (32px)"
          size="md"
          defaultValue={75}
          showTooltip
          className="w-96"
        />
      </main>
    </div>
  );
}
