"use client"

import { useState } from "react"
import { Star, Shield, Clock, Users, CheckCircle, ArrowRight, Lock, Zap, Award, TrendingUp, Eye, EyeOff, Play, Phone, Mail, MapPin, Menu, X, Flame, Heart, Battery, Target, Edit, Save, CreditCard, Smartphone } from "lucide-react"

export default function VigourAzul5200() {
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'paypal' | 'mbway'>('credit-card')
  const [processingPayment, setProcessingPayment] = useState(false)

  // Estados editáveis
  const [productName, setProductName] = useState("Vigour Azul 5200")
  const [mainHeadline, setMainHeadline] = useState("Descubra o Poder")
  const [subHeadline, setSubHeadline] = useState("Que Está Transformando Milhares de Homens")
  const [description, setDescription] = useState("A fórmula mais potente do mercado. 5200mg de pura energia que vai revolucionar sua performance e confiança")
  
  const [plans, setPlans] = useState([
    {
      id: 'starter',
      name: 'Experimente',
      subtitle: 'Para conhecer',
      price: 147,
      originalPrice: 297,
      discount: '50%',
      quantity: '1 Frasco',
      features: ['30 cápsulas', 'Fórmula original', 'Garantia de 30 dias', 'Entrega discreta'],
      popular: false
    },
    {
      id: 'premium',
      name: 'Mais Vendido',
      subtitle: 'Melhor custo-benefício',
      price: 397,
      originalPrice: 797,
      discount: '50%',
      quantity: '3 Frascos',
      features: ['90 cápsulas', 'Fórmula premium', 'Garantia de 60 dias', 'Entrega grátis', 'Bônus exclusivo', 'Suporte prioritário'],
      popular: true
    },
    {
      id: 'ultimate',
      name: 'Transformação',
      subtitle: 'Resultado máximo',
      price: 697,
      originalPrice: 1397,
      discount: '50%',
      quantity: '6 Frascos',
      features: ['180 cápsulas', 'Fórmula ultra premium', 'Garantia de 90 dias', 'Frete grátis expresso', 'Todos os bônus', 'Consultoria exclusiva', 'Grupo VIP'],
      popular: false
    }
  ])

  // Formulário de pagamento
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    mbwayPhone: '',
    address: '',
    city: '',
    zipCode: ''
  })

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Energia Explosiva",
      description: "Sinta a diferença em poucos minutos. Energia que você nunca experimentou antes."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Confiança Total",
      description: "Recupere a confiança que você merece. Resultados que impressionam."
    },
    {
      icon: <Battery className="w-8 h-8 text-green-400" />,
      title: "Resistência Máxima",
      description: "Performance prolongada. Supere seus próprios limites."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Precisão Garantida",
      description: "Fórmula cientificamente desenvolvida para resultados reais."
    }
  ]

  const testimonials = [
    {
      name: "Ricardo M.",
      age: "42 anos",
      rating: 5,
      text: "Mudou completamente minha vida. Não acreditava que algo pudesse fazer tanta diferença. Minha parceira também notou!",
      verified: true
    },
    {
      name: "Carlos S.",
      age: "38 anos",
      rating: 5,
      text: "Experimentei por curiosidade e agora não fico sem. A energia e disposição são incomparáveis. Recomendo!",
      verified: true
    },
    {
      name: "Fernando L.",
      age: "45 anos",
      rating: 5,
      text: "Estava cético, mas os resultados falam por si. Voltei a me sentir jovem novamente. Vale cada centavo!",
      verified: true
    }
  ]

  const updatePlanPrice = (planId: string, field: string, value: any) => {
    setPlans(plans.map(plan => 
      plan.id === planId ? { ...plan, [field]: value } : plan
    ))
  }

  const scrollToPlans = () => {
    const element = document.getElementById('plans')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan)
    setShowCheckout(true)
    setTimeout(() => {
      const element = document.getElementById('checkout')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
  }

  const formatExpiry = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substr(0, 5)
  }

  const handleProcessPayment = async () => {
    setProcessingPayment(true)
    
    // Simulação de processamento de pagamento
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert(`✅ Pagamento processado com sucesso!\n\nMétodo: ${paymentMethod === 'credit-card' ? 'Cartão de Crédito' : paymentMethod === 'paypal' ? 'PayPal' : 'MB Way'}\nValor: R$ ${selectedPlan.price}\nProduto: ${selectedPlan.name}\n\nVocê receberá um email de confirmação em breve!`)
    
    setProcessingPayment(false)
    setShowCheckout(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
      mbwayPhone: '',
      address: '',
      city: '',
      zipCode: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Edit Mode Toggle - Fixed Button */}
      <button
        onClick={() => setEditMode(!editMode)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-110 ${
          editMode 
            ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
        }`}
      >
        {editMode ? (
          <>
            <Save className="w-5 h-5" />
            Salvar Edições
          </>
        ) : (
          <>
            <Edit className="w-5 h-5" />
            Modo Edição
          </>
        )}
      </button>

      {/* Edit Mode Banner */}
      {editMode && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full shadow-2xl animate-pulse">
          <p className="font-bold">✏️ MODO EDIÇÃO ATIVO - Clique nos campos para editar</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-blue-900/30 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-blue-400" />
              {editMode ? (
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="text-2xl font-bold bg-transparent border-b-2 border-blue-400 text-white outline-none"
                />
              ) : (
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {productName}
                </div>
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-blue-400 transition-colors">Início</a>
              <a href="#beneficios" className="text-gray-300 hover:text-blue-400 transition-colors">Benefícios</a>
              <a href="#depoimentos" className="text-gray-300 hover:text-blue-400 transition-colors">Depoimentos</a>
              <a href="#plans" className="text-gray-300 hover:text-blue-400 transition-colors">Ofertas</a>
              <button 
                onClick={scrollToPlans}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/50"
              >
                Quero Experimentar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-900 border-t border-blue-900/30">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#inicio" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Início</a>
                <a href="#beneficios" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Benefícios</a>
                <a href="#depoimentos" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Depoimentos</a>
                <a href="#plans" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Ofertas</a>
                <button 
                  onClick={scrollToPlans}
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full"
                >
                  Quero Experimentar
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8 animate-pulse">
              <Flame className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">Fórmula Exclusiva 5200mg</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {editMode ? (
                <input
                  type="text"
                  value={mainHeadline}
                  onChange={(e) => setMainHeadline(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-blue-400 text-center outline-none bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                />
              ) : (
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {mainHeadline}
                </span>
              )}
              <br />
              {editMode ? (
                <input
                  type="text"
                  value={subHeadline}
                  onChange={(e) => setSubHeadline(e.target.value)}
                  className="w-full text-3xl md:text-4xl lg:text-5xl bg-transparent border-b-2 border-blue-400 text-center outline-none mt-2"
                />
              ) : (
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  {subHeadline}
                </span>
              )}
            </h1>

            {/* Subheadline */}
            {editMode ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full max-w-4xl mx-auto text-xl md:text-2xl bg-slate-800/50 border-2 border-blue-400 rounded-lg p-4 text-gray-300 outline-none"
                rows={3}
              />
            ) : (
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 mt-8">
              <button 
                onClick={scrollToPlans}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2"
              >
                <Flame className="w-6 h-6" />
                EXPERIMENTAR AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setShowTestimonials(!showTestimonials)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors border border-blue-600 hover:border-blue-400 px-6 py-3 rounded-full"
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
                <span>4.9/5 estrelas (3.847 avaliações)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>100% seguro e discreto</span>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex justify-center mb-16">
            <div className="relative max-w-4xl w-full">
              <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30">
                <div className="aspect-video">
                  <iframe
                    src="https://drive.google.com/file/d/1NTASXENNdn1bB9V4wbnQ3dVD1ATqOt_Ovs-KhMpRdKA/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-300 text-lg">
                  🎥 Assista ao vídeo e descubra como o <strong className="text-blue-400">{productName}</strong> pode transformar sua vida
                </p>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="flex justify-center mb-16">
            <div className="relative max-w-2xl w-full">
              <div className="relative bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30 p-12">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl shadow-blue-500/50">
                      <Flame className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {productName}
                  </h3>
                  <p className="text-xl text-gray-300 mb-4">Fórmula Ultra Concentrada</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="bg-blue-600/30 px-4 py-2 rounded-full">
                      <span className="font-bold">5200mg</span> por dose
                    </div>
                    <div className="bg-cyan-600/30 px-4 py-2 rounded-full">
                      <span className="font-bold">100%</span> natural
                    </div>
                    <div className="bg-green-600/30 px-4 py-2 rounded-full">
                      <span className="font-bold">Aprovado</span> Anvisa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Conditional) */}
      {showTestimonials && (
        <section id="depoimentos" className="py-16 bg-gradient-to-r from-slate-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              O Que Homens Como Você Estão Dizendo
            </h2>
            <p className="text-center text-gray-400 mb-12">Depoimentos verificados de clientes reais</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all">
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
                    <strong className="text-white">{testimonial.name}</strong>
                    <div>{testimonial.age}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-slate-950 to-blue-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por Que {productName} é Diferente?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A fórmula mais avançada e concentrada do mercado, desenvolvida para resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Extra Benefits */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Benefícios Comprovados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "✓ Aumento significativo de energia e disposição",
                "✓ Melhora na confiança e autoestima",
                "✓ Performance superior em todas as áreas",
                "✓ Resultados visíveis em poucos dias",
                "✓ Fórmula 100% natural e segura",
                "✓ Aprovado por especialistas",
                "✓ Sem efeitos colaterais relatados",
                "✓ Satisfação garantida ou seu dinheiro de volta"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
            <div className="flex justify-center mb-4">
              <Flame className="w-16 h-16 text-orange-400 animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🔥 Oferta Exclusiva - Últimas Unidades
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Aproveite o desconto de <strong className="text-orange-400">50% OFF</strong> e garanta seu 
              <strong className="text-red-400"> {productName}</strong> antes que acabe o estoque.
            </p>
            
            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-red-600/30 px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-white">127</div>
                <div className="text-sm text-gray-300">Unidades restantes</div>
              </div>
              <div className="bg-orange-600/30 px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-white">24h</div>
                <div className="text-sm text-gray-300">Para acabar a oferta</div>
              </div>
            </div>
            
            <button 
              onClick={scrollToPlans}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              GARANTIR MINHA OFERTA AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gradient-to-br from-slate-950 to-blue-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Escolha Seu Pacote
            </h2>
            <p className="text-xl text-gray-300">
              Quanto mais você leva, mais você economiza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/30' 
                    : 'border-blue-500/30 hover:border-blue-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      MAIS VENDIDO
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  {editMode ? (
                    <>
                      <input
                        type="text"
                        value={plan.name}
                        onChange={(e) => updatePlanPrice(plan.id, 'name', e.target.value)}
                        className="w-full text-2xl font-bold bg-slate-700 border border-blue-400 rounded px-2 py-1 text-white text-center mb-2"
                      />
                      <input
                        type="text"
                        value={plan.subtitle}
                        onChange={(e) => updatePlanPrice(plan.id, 'subtitle', e.target.value)}
                        className="w-full bg-slate-700 border border-blue-400 rounded px-2 py-1 text-gray-300 text-center"
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400">{plan.subtitle}</p>
                    </>
                  )}
                  <div className="text-blue-400 font-bold text-lg mt-2">{plan.quantity}</div>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {editMode ? (
                      <input
                        type="number"
                        value={plan.originalPrice}
                        onChange={(e) => updatePlanPrice(plan.id, 'originalPrice', parseInt(e.target.value))}
                        className="w-24 bg-slate-700 border border-blue-400 rounded px-2 py-1 text-gray-400 text-center line-through"
                      />
                    ) : (
                      <span className="text-gray-400 line-through text-lg">R$ {plan.originalPrice}</span>
                    )}
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                      -{plan.discount}
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {editMode ? (
                      <input
                        type="number"
                        value={plan.price}
                        onChange={(e) => updatePlanPrice(plan.id, 'price', parseInt(e.target.value))}
                        className="w-32 bg-slate-700 border-2 border-green-400 rounded px-2 py-1 text-white text-center text-4xl font-bold"
                      />
                    ) : (
                      `R$ ${plan.price}`
                    )}
                  </div>
                  <div className="text-gray-400">
                    ou 12x de R$ {(plan.price / 12).toFixed(2).replace('.', ',')}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:shadow-2xl hover:shadow-blue-500/50'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  QUERO ESTE PACOTE
                </button>
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-gray-400">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Garantia de Satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Entrega Rápida e Discreta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      {showCheckout && selectedPlan && (
        <section id="checkout" className="py-20 bg-gradient-to-br from-slate-950 to-blue-950">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Finalizar Compra
                </h2>
                <p className="text-gray-300">
                  Você selecionou: <strong className="text-blue-400">{selectedPlan.name}</strong> - R$ {selectedPlan.price}
                </p>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Escolha o Método de Pagamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod('credit-card')}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'credit-card'
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-slate-600 hover:border-blue-400'
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-semibold">Cartão de Crédito</span>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-slate-600 hover:border-blue-400'
                    }`}
                  >
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      P
                    </div>
                    <span className="text-white font-semibold">PayPal</span>
                  </button>
                  
                  <button
                    onClick={() => setPaymentMethod('mbway')}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === 'mbway'
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-slate-600 hover:border-blue-400'
                    }`}
                  >
                    <Smartphone className="w-6 h-6 text-green-400" />
                    <span className="text-white font-semibold">MB Way</span>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Informações Pessoais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Telefone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                {paymentMethod === 'credit-card' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Dados do Cartão</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Número do Cartão *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formatCardNumber(formData.cardNumber)}
                          onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
                          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 mb-2">Validade *</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formatExpiry(formData.cardExpiry)}
                            onChange={(e) => setFormData(prev => ({ ...prev, cardExpiry: e.target.value }))}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                            placeholder="MM/AA"
                            maxLength={5}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">CVV *</label>
                          <input
                            type="text"
                            name="cardCvv"
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                            placeholder="123"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      P
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Pagar com PayPal</h3>
                    <p className="text-gray-300 mb-4">
                      Você será redirecionado para o PayPal para completar o pagamento de forma segura.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">Pagamento 100% Seguro</span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'mbway' && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Pagamento MB Way</h3>
                    <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <Smartphone className="w-8 h-8 text-green-400" />
                        <span className="text-xl font-bold text-white">MB Way</span>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Número de Telemóvel *</label>
                        <input
                          type="tel"
                          name="mbwayPhone"
                          value={formData.mbwayPhone}
                          onChange={handleInputChange}
                          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                          placeholder="+351 912 345 678"
                          required
                        />
                      </div>
                      <p className="text-gray-300 text-sm text-center">
                        Receberá uma notificação no seu telemóvel para confirmar o pagamento
                      </p>
                    </div>
                  </div>
                )}

                {/* Shipping Address */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Endereço de Entrega</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Endereço Completo *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                        placeholder="Rua, número, complemento"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Cidade *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                          placeholder="Sua cidade"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">CEP *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                          placeholder="00000-000"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>{selectedPlan.name} ({selectedPlan.quantity})</span>
                      <span>R$ {selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Frete</span>
                      <span className="text-green-400 font-semibold">GRÁTIS</span>
                    </div>
                    <div className="border-t border-blue-500/30 pt-3 flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span>R$ {selectedPlan.price}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleProcessPayment}
                  disabled={processingPayment}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {processingPayment ? (
                    <>
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processando...
                    </>
                  ) : (
                    <>
                      <Lock className="w-6 h-6" />
                      FINALIZAR COMPRA SEGURA
                    </>
                  )}
                </button>

                {/* Security Info */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Pagamento Seguro SSL</span>
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
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-blue-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: `Como funciona o ${productName}?`,
                answer: `O ${productName} é uma fórmula concentrada com 5200mg de ingredientes naturais que atuam diretamente na energia, disposição e confiança masculina. Os resultados começam a aparecer já nos primeiros dias de uso.`
              },
              {
                question: "É seguro? Tem efeitos colaterais?",
                answer: "Sim, é 100% seguro! A fórmula é totalmente natural e aprovada pela Anvisa. Não há relatos de efeitos colaterais. Milhares de homens já experimentaram com total segurança."
              },
              {
                question: "Quanto tempo leva para ver resultados?",
                answer: "A maioria dos usuários relata sentir diferença já nos primeiros 3-7 dias de uso. Para resultados máximos, recomendamos o uso contínuo por pelo menos 90 dias."
              },
              {
                question: "Como devo tomar?",
                answer: "Recomendamos 1 cápsula por dia, preferencialmente pela manhã. Siga as instruções da embalagem para melhores resultados."
              },
              {
                question: "E se não funcionar para mim?",
                answer: "Oferecemos garantia de satisfação. Se não ficar satisfeito, devolvemos 100% do seu dinheiro dentro do período de garantia do seu plano."
              },
              {
                question: "A entrega é discreta?",
                answer: "Sim! Todas as entregas são feitas em embalagens discretas, sem identificação do produto. Sua privacidade é nossa prioridade."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Flame className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto Para Experimentar a Transformação?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se aos <strong className="text-cyan-400">+50.000 homens</strong> que já descobriram o poder do {productName}
          </p>
          
          <button 
            onClick={scrollToPlans}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
          >
            <Flame className="w-6 h-6" />
            COMEÇAR MINHA TRANSFORMAÇÃO
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-sm text-gray-400 mt-6">
            ✓ Entrega rápida e discreta • ✓ Pagamento seguro • ✓ Garantia de satisfação
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12 px-4 border-t border-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{productName}</h3>
              </div>
              <p className="text-gray-400">
                A fórmula mais potente para transformar sua energia e confiança.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-3">Produto</h4>
              <ul className="space-y-2">
                <li><a href="#beneficios" className="hover:text-blue-400 transition-colors">Benefícios</a></li>
                <li><a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a></li>
                <li><a href="#plans" className="hover:text-blue-400 transition-colors">Ofertas</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Garantia</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-3">Suporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Rastreamento</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-3">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@vigourazul.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Seg-Sex: 9h-18h</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-900/30 pt-8 text-center">
            <p className="text-sm">
              © 2024 {productName}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
              Consulte um médico antes de usar.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
