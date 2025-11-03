import { ClipboardList, Target, ShoppingCart, MapPin, Truck, FileText, Calendar, Phone, CheckCircle, XCircle } from 'lucide-react'

const flows = [
  {
    title: 'Master Setup',
    description: 'Products, customers, distributors, employees, roles, access. Define pricing, tax and commission rules, locations, warehouses, departments.',
    icon: ClipboardList,
    accent: 'border-indigo-200 hover:border-indigo-300',
    chips: ['Products', 'Customers', 'Distributors', 'Roles', 'Pricing'],
  },
  {
    title: 'HRM & Payroll',
    description: 'Attendance via web/app (GPS optional), leave approvals, auto payroll with deductions and incentives, rich HR reports.',
    icon: Calendar,
    accent: 'border-emerald-200 hover:border-emerald-300',
    chips: ['Attendance', 'Leave', 'Payroll', 'Incentives'],
  },
  {
    title: 'CRM Pipeline',
    description: 'Leads → follow-ups → statuses (Interested, Quotation, Converted, Lost). Auto reminders, quotation to order flow.',
    icon: Phone,
    accent: 'border-amber-200 hover:border-amber-300',
    chips: ['Leads', 'Follow-ups', 'Quotation', 'Sales Order'],
  },
  {
    title: 'Distributor Panel',
    description: 'Distributors view products & offers, place orders, track orders & payments, and manage notifications.',
    icon: ShoppingCart,
    accent: 'border-fuchsia-200 hover:border-fuchsia-300',
    chips: ['Pricing', 'Orders', 'Payments', 'Offers'],
  },
  {
    title: 'Distributor Workforce',
    description: 'Create employees, assign roles/areas/targets, mark attendance, log visits & sales, manage expenses and reports.',
    icon: Target,
    accent: 'border-sky-200 hover:border-sky-300',
    chips: ['Targets', 'Visits', 'Expenses', 'Performance'],
  },
  {
    title: 'Sales Target vs Achievement',
    description: 'Real-time comparison with progress dashboards and rankings. Linked to incentive engine.',
    icon: CheckCircle,
    accent: 'border-emerald-200 hover:border-emerald-300',
    chips: ['Real-time', 'Ranking', 'Incentives'],
  },
  {
    title: 'Location Tracking',
    description: 'GPS routes, check-in/out at customer sites, map-based reports. Attendance linked with location.',
    icon: MapPin,
    accent: 'border-rose-200 hover:border-rose-300',
    chips: ['GPS', 'Check-in/out', 'Maps'],
  },
  {
    title: 'Inventory Management',
    description: 'Central → distributor → customer. Live sync, low-stock alerts, stock transfers, and valuation reports.',
    icon: Truck,
    accent: 'border-purple-200 hover:border-purple-300',
    chips: ['Stock', 'Transfers', 'Alerts'],
  },
  {
    title: 'Invoice & Billing',
    description: 'Auto-generate invoices from confirmed orders, tax/discount terms, PDF/e-invoice, payment status updates.',
    icon: FileText,
    accent: 'border-blue-200 hover:border-blue-300',
    chips: ['Tax', 'Discounts', 'Payments'],
  },
  {
    title: 'Expense Management',
    description: 'Record office/logistics/marketing costs, categorize, approve, and analyze with daily/monthly/department views.',
    icon: XCircle,
    accent: 'border-teal-200 hover:border-teal-300',
    chips: ['Fuel', 'Logistics', 'Approvals'],
  },
]

export default function FlowGrid() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {flows.map(({ title, description, icon: Icon, accent, chips }) => (
          <div key={title} className={`group border ${accent} rounded-xl bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow transition-all`}>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-lg bg-gray-900 text-white grid place-items-center shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
