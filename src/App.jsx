import TopNav from './components/TopNav'
import KPIStats from './components/KPIStats'
import FlowGrid from './components/FlowGrid'
import ReportsPanel from './components/ReportsPanel'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <TopNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Intro */}
        <section className="rounded-2xl border bg-white/80 backdrop-blur p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Master Setup & Operations</h2>
              <p className="mt-1 text-sm text-gray-600">Configure products, pricing, taxes, roles, and locations. Manage HRM, CRM, inventory, invoicing, expenses, and analytics — all in one place.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">Add Master Data</button>
              <button className="px-4 py-2 rounded-md border text-sm font-medium hover:bg-gray-50">Invite Employee</button>
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <KPIStats />

        {/* Core Flows */}
        <FlowGrid />

        {/* Reports */}
        <ReportsPanel />

        {/* Contact & Address (from prompt) */}
        <section className="rounded-2xl border bg-white/80 backdrop-blur p-5 sm:p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Contact & Address</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="rounded-lg border p-4">
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">9766313023</p>
            </div>
            <div className="rounded-lg border p-4 sm:col-span-2">
              <p className="text-gray-500">Address</p>
              <p className="font-medium">7 panch deep Nagar Near Jaiprakash metro</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-500 bg-white/70 backdrop-blur">
        © {new Date().getFullYear()} Unified ERP Suite · CRM · HRM · Inventory · Billing
      </footer>
    </div>
  )
}

export default App
