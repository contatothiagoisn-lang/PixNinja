import { createClient } from '@supabase/supabase-js'

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://pix-ninja-xbrn.vercel.app/dashboard'
      }
    })
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black mb-8 text-white">PixNinja</h1>
        <button
          onClick={handleGoogleLogin}
          className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-6 px-16 rounded-2xl text-2xl shadow-2xl transition"
        >
          Entrar com Google
        </button>
      </div>
    </div>
  )
}
