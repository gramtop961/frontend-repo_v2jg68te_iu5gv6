import { BarChart3, FileText, Download } from 'lucide-react'

export default function ReportsPanel() {
  const reports = [
    { name: 'Sales & Revenue', desc: 'Real-time revenue and order trends' },
    { name: 'Employee Performance', desc: 'Attendance, visits, and targets' },
    { name: 'Inventory Stock Levels', desc: 'Stock summary, movement, valuation' },
    { name: 'Distributor Orders', desc: 'Order volume, approval rates, aging' },
    { name: 'Expenses Summary', desc: 'Daily, monthly, and department-wise' },
    { name: 'Location Visits & Attendance', desc: 'GPS check-ins and routes' },
  ]

  const exportCSV = () => {
    const headers = ['Report Name', 'Description']
    const rows = reports.map(r => [r.name, r.desc])
    const csv = [headers, ...rows].map(r => r.map(field => '"' + String(field).replaceAll('"', '""') + '"').join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'reports.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const exportPDF = () => {
    // Simple print-to-PDF route (browser built-in). Users can save as PDF.
    window.print()
  }

  return (
    <section className="rounded-2xl border bg-white/80 backdrop-blur p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><BarChart3 className="h-5 w-5"/>Reports & Analytics</h2>
          <p className="text-sm text-gray-500">Export insights as PDF or CSV</p>
        </div>
        <div className="flex gap-2">
          <button onClick={exportPDF} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:opacity-90"><FileText className="h-4 w-4"/> PDF</button>
          <button onClick={exportCSV} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm hover:bg-gray-50"><Download className="h-4 w-4"/> CSV</button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((r) => (
          <div key={r.name} className="rounded-lg border p-4 hover:shadow-sm">
            <h3 className="font-medium text-gray-900">{r.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
