export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-10">
      <h1 className="text-4xl font-black text-blue-500">Welcome!</h1>
      <p className="text-xl font-bold text-blue-200">NextJS Private Route @v14.0.0</p>
      <ul className="text-center text-gray-400">
          <li>Private Route (HOC)</li>
          <li>Public Route (HOC)</li>
          <li>Context Manage (Preact signal API)</li>
          <li>Cookie Manage (cookies-next)</li>
        </ul>
    </main>
  )
}
