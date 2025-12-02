'use client'

import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function SignIn() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-black mb-12 text-white">PixNinja</h1>
        <button
          onClick={() => 
            supabase.auth.signInWithOAuth({
              provider: 'google',
              options: { redirectTo: location.origin + '/dashboard' }
            })
          }
          className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-8 px-24 rounded-3xl text-3xl shadow-2xl transition-all transform hover:scale-105"
        >
          Entrar com Google
        </button>
      </div>
    </div>
  )
}
