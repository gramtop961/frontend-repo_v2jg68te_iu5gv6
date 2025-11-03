import { BarChart3, DollarSign, Package, Users } from 'lucide-react'

const kpis = [
  {
    title: 'Sales & Revenue',
    value: '$248,900',
    change: '+12.4% MoM',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Employee Performance',
    value: '86%',
    change: 'Avg. score',
    icon: Users,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Inventory Stock',
    value: '12,480',
    change: 'In-stock units',
    icon: Package,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Expenses (MTD)',
    value: '$38,120',
    change: '−3.2% vs last month',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-500',
  },
]

export default function KPIStats() {
  return (
    <section className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map(({ title, value, change, icon: Icon, color }) => (
        <div key={title} className="rounded-xl border bg-white/80 backdrop-blur p-4 sm:p-5 shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{title}</p>
              <h3 className="mt-1 text-2xl font-semibold text-gray-900">{value}</h3>
              <p className="mt-1 text-xs text-gray-500">{change}</p>
            </div>
            <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${color} text-white grid place-items-center`}>
              <Icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
