export default function Welcome({ name }: { name: string }) {
  return (
    <div className="m-4">
      <pre className="flex flex-col font-[Geist_Mono] text-sm leading-snug">
        {" ∧,,,∧\n"}
        {"(• ⩊ •)\n"}
        {`  U U`}
      </pre>

      <span className="rounded-md border border-dashed p-6 pb-2 font-[Geist_Mono]">
        <span className="text-2xl">Welcome</span> to the dashboard,{" "}
        <span className="text-lg font-bold text-ring">{name}</span>
        <span className="text-lg">!</span>
      </span>
    </div>
  )
}
