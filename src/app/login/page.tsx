import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
        className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 px-12 rounded-xl text-xl"
      >
        Entrar com Google
      </button>
    </div>
  )
}
