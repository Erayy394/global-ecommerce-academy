/**
 * Eğitimler sayfası için loading skeleton
 * Kurumsal görünüm için opsiyonel ama önerilir
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header Skeleton */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
          <div className="h-10 w-64 animate-pulse rounded bg-slate-200" />
          <div className="mt-2 h-6 w-96 animate-pulse rounded bg-slate-200" />
        </div>
      </div>

      {/* Filters Skeleton */}
      <div className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="h-10 w-full animate-pulse rounded bg-slate-200" />
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 animate-pulse rounded bg-slate-200" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="mb-4 flex gap-2">
                <div className="h-6 w-20 animate-pulse rounded-full bg-slate-200" />
                <div className="h-6 w-16 animate-pulse rounded-full bg-slate-200" />
              </div>
              <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-slate-200" />
              <div className="mb-4 h-4 w-full animate-pulse rounded bg-slate-200" />
              <div className="mb-4 h-16 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-10 w-full animate-pulse rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

