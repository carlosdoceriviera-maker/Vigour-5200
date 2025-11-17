"use client"

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Mail, Lock, ArrowRight, Flame } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    // Validação de senha
    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setMessage('A senha deve ter pelo menos 6 caracteres')
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/login`,
        },
      })

      if (error) {
        setMessage(error.message)
      } else if (data.user) {
        setMessage('Cadastro realizado com sucesso! Verifique seu email para confirmar.')
        setTimeout(() => {
          router.push('/login')
        }, 3000)
      }
    } catch (error) {
      setMessage('Erro ao criar conta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Flame className="w-10 h-10 text-blue-400" />
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vigour Azul 5200
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mt-4">Crie sua conta</h1>
          <p className="text-gray-400 mt-2">Comece sua transformação hoje</p>
        </div>

        {/* Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
          <form onSubmit={handleSignup} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Mínimo de 6 caracteres</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            {message && (
              <div className={`p-4 rounded-xl ${
                message.includes('sucesso') 
                  ? 'bg-green-600/20 border border-green-500/30 text-green-400' 
                  : 'bg-red-600/20 border border-red-500/30 text-red-400'
              }`}>
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Criando conta...' : 'Criar Conta'}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-3">
            <Link href="/login" className="block text-blue-400 hover:text-blue-300 transition-colors">
              Já tem uma conta? Faça login
            </Link>
            <Link href="/" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
              Voltar para a página inicial
            </Link>
          </div>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Ao criar uma conta, você concorda com nossos{' '}
          <Link href="#" className="text-blue-400 hover:text-blue-300">
            Termos de Uso
          </Link>
          {' '}e{' '}
          <Link href="#" className="text-blue-400 hover:text-blue-300">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </div>
  )
}
