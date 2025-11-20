"use client"

import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowLeft, Lock, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

interface CheckoutFormProps {
  clientSecret: string
  planName: string
  planPrice: number
  currency: string
}

function CheckoutForm({ clientSecret, planName, planPrice, currency }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setErrorMessage(null)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: 'if_required'
      })

      if (error) {
        setErrorMessage(error.message || 'Ocorreu um erro ao processar o pagamento')
        setIsProcessing(false)
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment successful
        router.push(`/payment-success?payment_intent=${paymentIntent.id}`)
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Erro inesperado')
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Detalhes do Pagamento</h3>
        <PaymentElement />
      </div>

      {errorMessage && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-300">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isProcessing ? (
          <>
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            Processando...
          </>
        ) : (
          <>
            <Lock className="w-6 h-6" />
            Finalizar Compra - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currency }).format(planPrice)}
          </>
        )}
      </button>

      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-400" />
          <span>Pagamento 100% Seguro</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-blue-400" />
          <span>Dados Criptografados</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-purple-400" />
          <span>Garantia de Satisfação</span>
        </div>
      </div>
    </form>
  )
}

export default function StripePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get plan details from URL params
  const planId = searchParams.get('plan')
  const planName = searchParams.get('name') || 'Plano Selecionado'
  const planPrice = parseFloat(searchParams.get('price') || '0')
  const planQuantity = searchParams.get('quantity') || '1 Frasco'
  const currency = searchParams.get('currency') || 'BRL'

  useEffect(() => {
    if (!planId || !planPrice) {
      setError('Informações do plano inválidas')
      setLoading(false)
      return
    }

    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: planPrice,
        currency: currency,
        description: `Vigour Azul 5200 - ${planName}`,
        metadata: {
          planId,
          planName,
          planQuantity
        }
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setClientSecret(data.clientSecret)
        }
        setLoading(false)
      })
      .catch((err) => {
        setError('Erro ao inicializar pagamento')
        setLoading(false)
      })
  }, [planId, planName, planPrice, planQuantity, currency])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl">Preparando checkout...</p>
        </div>
      </div>
    )
  }

  if (error || !clientSecret) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Erro ao Carregar Checkout</h2>
          <p className="text-gray-300 mb-6">{error || 'Não foi possível inicializar o pagamento'}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Home
          </Link>
        </div>
      </div>
    )
  }

  const appearance = {
    theme: 'night' as const,
    variables: {
      colorPrimary: '#3b82f6',
      colorBackground: '#1e293b',
      colorText: '#ffffff',
      colorDanger: '#ef4444',
      fontFamily: 'system-ui, sans-serif',
      borderRadius: '12px',
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Finalizar Compra
            </h1>
            <p className="text-gray-300">
              Complete o pagamento de forma segura com Stripe
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-300">
              <span className="font-semibold">{planName}</span>
              <span>{planQuantity}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Subtotal</span>
              <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currency }).format(planPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Frete</span>
              <span className="text-green-400 font-semibold">GRÁTIS</span>
            </div>
            <div className="border-t border-blue-500/30 pt-3 flex justify-between text-xl font-bold text-white">
              <span>Total</span>
              <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currency }).format(planPrice)}</span>
            </div>
          </div>
        </div>

        {/* Stripe Payment Form */}
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <CheckoutForm
            clientSecret={clientSecret}
            planName={planName}
            planPrice={planPrice}
            currency={currency}
          />
        </Elements>

        {/* Security Badges */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Seus dados estão protegidos com criptografia de nível bancário
          </p>
          <div className="flex justify-center items-center gap-6 text-gray-500 text-xs">
            <span>🔒 SSL Seguro</span>
            <span>💳 PCI Compliant</span>
            <span>✅ Stripe Verified</span>
          </div>
        </div>
      </div>
    </div>
  )
}
