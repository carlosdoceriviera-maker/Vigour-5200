"use client"

import { useState } from "react"
import { Star, Shield, Clock, Users, CheckCircle, ArrowRight, Lock, Zap, Award, TrendingUp, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function VigourLandingPage() {
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('premium')

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Ação Rápida",
      description: "Resultados visíveis em até 30 minutos após o uso"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "100% Natural",
      description: "Fórmula desenvolvida com ingredientes naturais selecionados"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Aprovado por Especialistas",
      description: "Recomendado por profissionais da área de saúde masculina"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Melhora Progressiva",
      description: "Benefícios que se intensificam com o uso contínuo"
    }
  ]

  const testimonials = [
    {
      name: "Carlos M.",
      age: 42,
      rating: 5,
      text: "Depois dos 40, estava perdendo a confiança. O Vigour mudou completamente minha vida íntima. Minha esposa notou a diferença imediatamente.",
      verified: true
    },
    {
      name: "Roberto S.",
      age: 38,
      rating: 5,
      text: "Estava cético no início, mas os resultados foram surpreendentes. Voltei a me sentir como aos 25 anos. Recomendo sem hesitar.",
      verified: true
    },
    {
      name: "Marcos L.",
      age: 45,
      rating: 5,
      text: "O estresse do trabalho estava afetando minha performance. Com o Vigour, recuperei toda minha energia e disposição.",
      verified: true
    }
  ]

  const packages = [
    {
      id: 'basic',
      name: 'Teste',
      subtitle: 'Para experimentar',
      bottles: 1,
      originalPrice: 197,
      price: 97,
      discount: '51%',
      features: ['1 frasco (30 cápsulas)', 'Frete grátis', 'Garantia de 30 dias'],
      popular: false
    },
    {
      id: 'premium',
      name: 'Mais Vendido',
      subtitle: 'Melhor custo-benefício',
      bottles: 3,
      originalPrice: 591,
      price: 197,
      discount: '67%',
      features: ['3 frascos (90 cápsulas)', 'Frete grátis', 'Garantia de 60 dias', '1 frasco BÔNUS'],
      popular: true
    },
    {
      id: 'complete',
      name: 'Tratamento Completo',
      subtitle: 'Máximos resultados',
      bottles: 5,
      originalPrice: 985,
      price: 297,
      discount: '70%',
      features: ['5 frascos (150 cápsulas)', 'Frete grátis', 'Garantia de 90 dias', '2 frascos BÔNUS', 'Suporte VIP'],
      popular: false
    }
  ]

  const scrollToPackages = () => {
    const element = document.getElementById('packages')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">Fórmula Aprovada por Especialistas</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VIGOUR AZUL 5200
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                A Revolução da Potência Masculina
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Descubra o segredo que <strong className="text-blue-400">milhares de homens</strong> estão usando para 
              <strong className="text-purple-400"> recuperar a confiança</strong> e transformar sua vida íntima
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={scrollToPackages}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                <Zap className="w-6 h-6" />
                QUERO EXPERIMENTAR AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setShowTestimonials(!showTestimonials)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-full"
              >
                {showTestimonials ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                {showTestimonials ? 'Ocultar' : 'Ver'} Depoimentos Reais
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>+50.000 homens satisfeitos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>4.9/5 estrelas (2.847 avaliações)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Garantia de 90 dias</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
                <div className="w-64 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">VIGOUR</div>
                    <div className="text-2xl font-semibold mb-2">AZUL 5200</div>
                    <div className="text-sm opacity-80">30 CÁPSULAS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/80 to-blue-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              🎬 Vídeo Exclusivo: Vigour Azul em Ação
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Assista ao vídeo exclusivo e descubra como o <strong className="text-blue-400">Vigour Azul 5200</strong> 
              pode transformar sua vida íntima
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Video Embed */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="relative aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1z_zXEo36U4t0GvaGnv7TMY5-lngefYZ3/preview"
                  className="w-full h-full rounded-3xl"
                  allow="autoplay"
                  allowFullScreen
                  title="Vigour Azul 5200 - Vídeo Exclusivo"
                ></iframe>
              </div>
            </div>

            {/* Video Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Resultados Rápidos</h3>
                <p className="text-gray-300 text-sm">Veja como funciona em apenas 30 minutos</p>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">100% Natural</h3>
                <p className="text-gray-300 text-sm">Fórmula segura e aprovada</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Aprovado</h3>
                <p className="text-gray-300 text-sm">Recomendado por especialistas</p>
              </div>
            </div>

            {/* Call to Action after video */}
            <div className="mt-8 text-center">
              <button 
                onClick={scrollToPackages}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
              >
                <Zap className="w-6 h-6" />
                QUERO EXPERIMENTAR AGORA
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-gray-400 mt-4">
                ⚡ <strong className="text-blue-400">Oferta especial</strong> por tempo limitado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Conditional) */}
      {showTestimonials && (
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              O Que Nossos Clientes Dizem
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Verificado</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  
                  <div className="text-sm text-gray-400">
                    <strong className="text-white">{testimonial.name}</strong>, {testimonial.age} anos
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por Que o Vigour Azul 5200 é Diferente?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma fórmula revolucionária que combina ciência e natureza para resultados extraordinários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ⚠️ ATENÇÃO: Oferta Por Tempo Limitado
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Devido à alta demanda e ingredientes especiais, temos estoque limitado. 
              <strong className="text-orange-400"> Apenas 47 unidades restantes</strong> com desconto especial.
            </p>
            
            {/* Fake Timer */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                <div className="text-2xl">23</div>
                <div className="text-xs">HORAS</div>
              </div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                <div className="text-2xl">47</div>
                <div className="text-xs">MIN</div>
              </div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                <div className="text-2xl">12</div>
                <div className="text-xs">SEG</div>
              </div>
            </div>
            
            <button 
              onClick={scrollToPackages}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 hover:shadow-2xl"
            >
              GARANTIR MEU DESCONTO AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Escolha Seu Pacote
            </h2>
            <p className="text-xl text-gray-300">
              Quanto mais você investe em si mesmo, maiores são os resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  pkg.popular 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                      MAIS VENDIDO
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400">{pkg.subtitle}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-lg">R$ {pkg.originalPrice}</span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                      -{pkg.discount}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    R$ {pkg.price}
                  </div>
                  <div className="text-gray-400">
                    ou 12x de R$ {(pkg.price / 12).toFixed(2).replace('.', ',')}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/carrinho" className="block">
                  <button 
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    COMPRAR AGORA
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-gray-400">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Garantia de Satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Entrega Rápida</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Como o Vigour Azul 5200 funciona?",
                answer: "O Vigour utiliza uma fórmula natural que melhora a circulação sanguínea e aumenta os níveis de energia, proporcionando resultados visíveis em até 30 minutos."
              },
              {
                question: "É seguro para uso diário?",
                answer: "Sim, o produto é 100% natural e foi desenvolvido para uso diário. Recomendamos seguir as instruções da embalagem."
              },
              {
                question: "Quanto tempo para ver resultados?",
                answer: "A maioria dos usuários relata resultados imediatos, mas os benefícios se intensificam com o uso contínuo por 30-60 dias."
              },
              {
                question: "Posso usar com outros medicamentos?",
                answer: "Recomendamos consultar seu médico antes de usar qualquer suplemento, especialmente se você toma outros medicamentos."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não Deixe Para Amanhã o Que Pode Mudar Sua Vida Hoje
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se aos milhares de homens que já transformaram suas vidas com o Vigour Azul 5200
          </p>
          
          <button 
            onClick={scrollToPackages}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            TRANSFORMAR MINHA VIDA AGORA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">VIGOUR AZUL 5200</h3>
            <p className="text-gray-400">A revolução da potência masculina</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-3">Contato</h4>
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Email: contato@vigourazul.com</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Garantias</h4>
              <p>30 dias para teste</p>
              <p>60 dias para troca</p>
              <p>90 dias satisfação garantida</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Segurança</h4>
              <p>Compra 100% segura</p>
              <p>Dados protegidos</p>
              <p>Entrega discreta</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm">
              © 2024 Vigour Azul 5200. Todos os direitos reservados. 
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}