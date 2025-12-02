'use client'

import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export default function SignIn() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="mb-12 text-7xl font-black text-white">PixNinja</h1>
      <button
        onClick={() =>
          supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: location.origin + '/dashboard' },
          })
        }
        className="rounded-3xl bg-emerald-500 px-24 py-8 text-3xl font-bold text-black shadow-2xl transition hover:bg-emerald-400 hover:scale-105"
      >
        Entrar com Google
      </button>
    </div>
  )
}
