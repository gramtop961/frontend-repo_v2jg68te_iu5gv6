import { Home, Settings, User } from 'lucide-react'

export default function TopNav() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">ERP</div>
          <div className="hidden sm:block">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Unified ERP Admin</h1>
            <p className="text-xs text-gray-500">Master setup, HRM, CRM, Inventory, Billing</p>
          </div>
        </div>
        <nav className="flex items-center gap-2 text-gray-600">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <Home className="h-5 w-5" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <User className="h-5 w-5" />
            <span className="hidden sm:inline">Profile</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <Settings className="h-5 w-5" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
