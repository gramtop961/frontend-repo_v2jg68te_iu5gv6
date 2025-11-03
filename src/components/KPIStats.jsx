import { useMemo, useState } from 'react'
import { BarChart3, DollarSign, Package, Users, RefreshCw } from 'lucide-react'

const baseKpis = [
  {
    key: 'sales',
    title: 'Sales & Revenue',
    value: 248900,
    formatter: (v) => `$${v.toLocaleString()}`,
    change: '+12.4% MoM',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    key: 'performance',
    title: 'Employee Performance',
    value: 86,
    formatter: (v) => `${v}%`,
    change: 'Avg. score',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    key: 'inventory',
    title: 'Inventory Stock',
    value: 12480,
    formatter: (v) => v.toLocaleString(),
    change: 'In-stock units',
    icon: Package,
    color: 'from-amber-500 to-orange-500',
  },
  {
    key: 'expenses',
    title: 'Expenses (MTD)',
    value: 38120,
    formatter: (v) => `$${v.toLocaleString()}`,
    change: '−3.2% vs last month',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-500',
  },
]

export default function KPIStats() {
  const [kpis, setKpis] = useState(baseKpis)

  const total = useMemo(() => {
    const sales = kpis.find(k => k.key === 'sales')?.value || 0
    const expenses = kpis.find(k => k.key === 'expenses')?.value || 0
    return sales - expenses
  }, [kpis])

  const refresh = () => {
    // Light randomization to simulate live data updates
    setKpis(prev => prev.map(k => {
      const jitter = (minPct, maxPct) => 1 + (Math.random() * (maxPct - minPct) + minPct)
      let factor = 1
      if (k.key === 'sales') factor = jitter(-0.03, 0.05)
      if (k.key === 'expenses') factor = jitter(-0.02, 0.04)
      if (k.key === 'inventory') factor = jitter(-0.01, 0.02)
      if (k.key === 'performance') factor = jitter(-0.02, 0.02)
      const next = { ...k }
      const newVal = Math.max(0, Math.round(next.value * factor))
      next.value = newVal
      return next
    }))
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Key Metrics</h2>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center text-xs text-gray-600">
            <span className="mr-1">Net (Sales − Expenses):</span>
            <span className="font-medium">${total.toLocaleString()}</span>
          </div>
          <button
            onClick={refresh}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm hover:bg-gray-50"
            aria-label="Refresh metrics"
          >
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map(({ title, value, change, icon: Icon, color, formatter, key }) => (
          <div key={key} className="rounded-xl border bg-white/80 backdrop-blur p-4 sm:p-5 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{title}</p>
                <h3 className="mt-1 text-2xl font-semibold text-gray-900">{formatter(value)}</h3>
                <p className="mt-1 text-xs text-gray-500">{change}</p>
              </div>
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${color} text-white grid place-items-center`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
