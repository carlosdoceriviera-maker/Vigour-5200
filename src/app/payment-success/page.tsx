"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PaymentSuccess() {
  const searchParams = useSearchParams()
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null)

  useEffect(() => {
    const id = searchParams.get('payment_intent')
    setPaymentIntentId(id)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 animate-pulse">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pagamento Confirmado! 🎉
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Sua compra foi processada com sucesso
          </p>

          {/* Payment Details */}
          {paymentIntentId && (
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-xl p-6 mb-8">
              <p className="text-gray-400 text-sm mb-2">ID da Transação</p>
              <p className="text-white font-mono text-sm break-all">{paymentIntentId}</p>
            </div>
          )}

          {/* Next Steps */}
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Próximos Passos</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Confirmação por Email</h3>
                    <p className="text-gray-300 text-sm">
                      Você receberá um email de confirmação com todos os detalhes do seu pedido em instantes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Preparação do Envio</h3>
                    <p className="text-gray-300 text-sm">
                      Seu pedido será preparado e enviado em até 24 horas úteis. Você receberá o código de rastreamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Entrega Discreta</h3>
                    <p className="text-gray-300 text-sm">
                      Seu produto chegará em embalagem discreta, sem identificação externa do conteúdo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/50"
            >
              Voltar para Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-8 pt-8 border-t border-blue-500/30">
            <p className="text-gray-400 text-sm mb-2">
              Precisa de ajuda? Entre em contato conosco
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="mailto:contato@vigourazul.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                contato@vigourazul.com
              </a>
              <span className="text-gray-600">|</span>
              <a href="tel:+5511999999999" className="text-blue-400 hover:text-blue-300 transition-colors">
                (11) 99999-9999
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Garantia de 30 dias ou seu dinheiro de volta</span>
          </div>
        </div>
      </div>
    </div>
  )
}
