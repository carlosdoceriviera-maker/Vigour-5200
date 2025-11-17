import { Language } from './i18n'

export interface Translations {
  // Navigation
  nav: {
    home: string
    benefits: string
    testimonials: string
    offers: string
    tryNow: string
  }
  
  // Hero Section
  hero: {
    badge: string
    mainHeadline: string
    subHeadline: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    showTestimonials: string
    hideTestimonials: string
    socialProof: {
      satisfied: string
      rating: string
      secure: string
    }
    videoText: string
  }
  
  // Benefits
  benefits: {
    title: string
    subtitle: string
    items: {
      energy: { title: string; description: string }
      confidence: { title: string; description: string }
      resistance: { title: string; description: string }
      precision: { title: string; description: string }
    }
    proven: string
    list: string[]
  }
  
  // Urgency
  urgency: {
    title: string
    description: string
    unitsLeft: string
    timeLeft: string
    cta: string
  }
  
  // Plans
  plans: {
    title: string
    subtitle: string
    mostPopular: string
    features: {
      capsules: string
      formula: string
      guarantee: string
      shipping: string
      bonus: string
      support: string
      consultation: string
      vipGroup: string
    }
    cta: string
    security: {
      payment: string
      guarantee: string
      delivery: string
    }
  }
  
  // Checkout
  checkout: {
    title: string
    selectedPlan: string
    paymentMethod: string
    creditCard: string
    personalInfo: string
    fullName: string
    email: string
    phone: string
    cardDetails: string
    cardNumber: string
    expiry: string
    cvv: string
    shippingAddress: string
    address: string
    city: string
    zipCode: string
    orderSummary: string
    shipping: string
    free: string
    total: string
    finalizePurchase: string
    processing: string
    securePayment: string
    encrypted: string
    satisfaction: string
  }
  
  // FAQ
  faq: {
    title: string
    items: {
      howWorks: { q: string; a: string }
      safe: { q: string; a: string }
      results: { q: string; a: string }
      howToTake: { q: string; a: string }
      guarantee: { q: string; a: string }
      discreet: { q: string; a: string }
    }
  }
  
  // Final CTA
  finalCta: {
    title: string
    description: string
    cta: string
    footer: string
  }
  
  // Footer
  footer: {
    description: string
    product: string
    support: string
    contact: string
    hours: string
    rights: string
    disclaimer: string
  }
  
  // Edit Mode
  editMode: {
    active: string
    save: string
    edit: string
  }
  
  // Testimonials
  testimonials: {
    title: string
    subtitle: string
    verified: string
  }
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      benefits: 'Benefícios',
      testimonials: 'Depoimentos',
      offers: 'Ofertas',
      tryNow: 'Quero Experimentar'
    },
    hero: {
      badge: 'Fórmula Exclusiva 5200mg',
      mainHeadline: 'Descubra o Poder',
      subHeadline: 'Que Está Transformando Milhares de Homens',
      description: 'A fórmula mais potente do mercado. 5200mg de pura energia que vai revolucionar sua performance e confiança',
      ctaPrimary: 'EXPERIMENTAR AGORA',
      ctaSecondary: 'Ver Depoimentos Reais',
      showTestimonials: 'Ver',
      hideTestimonials: 'Ocultar',
      socialProof: {
        satisfied: '+50.000 homens satisfeitos',
        rating: '4.9/5 estrelas (3.847 avaliações)',
        secure: '100% seguro e discreto'
      },
      videoText: 'Assista ao vídeo e descubra como o'
    },
    benefits: {
      title: 'Por Que Vigour Azul 5200 é Diferente?',
      subtitle: 'A fórmula mais avançada e concentrada do mercado, desenvolvida para resultados reais',
      items: {
        energy: {
          title: 'Energia Explosiva',
          description: 'Sinta a diferença em poucos minutos. Energia que você nunca experimentou antes.'
        },
        confidence: {
          title: 'Confiança Total',
          description: 'Recupere a confiança que você merece. Resultados que impressionam.'
        },
        resistance: {
          title: 'Resistência Máxima',
          description: 'Performance prolongada. Supere seus próprios limites.'
        },
        precision: {
          title: 'Precisão Garantida',
          description: 'Fórmula cientificamente desenvolvida para resultados reais.'
        }
      },
      proven: 'Benefícios Comprovados',
      list: [
        '✓ Aumento significativo de energia e disposição',
        '✓ Melhora na confiança e autoestima',
        '✓ Performance superior em todas as áreas',
        '✓ Resultados visíveis em poucos dias',
        '✓ Fórmula 100% natural e segura',
        '✓ Aprovado por especialistas',
        '✓ Sem efeitos colaterais relatados',
        '✓ Satisfação garantida ou seu dinheiro de volta'
      ]
    },
    urgency: {
      title: '🔥 Oferta Exclusiva - Últimas Unidades',
      description: 'Aproveite o desconto de 50% OFF e garanta seu Vigour Azul 5200 antes que acabe o estoque.',
      unitsLeft: 'Unidades restantes',
      timeLeft: 'Para acabar a oferta',
      cta: 'GARANTIR MINHA OFERTA AGORA'
    },
    plans: {
      title: 'Escolha Seu Pacote',
      subtitle: 'Quanto mais você leva, mais você economiza',
      mostPopular: 'MAIS VENDIDO',
      features: {
        capsules: 'cápsulas',
        formula: 'Fórmula',
        guarantee: 'Garantia de',
        shipping: 'Entrega',
        bonus: 'Bônus exclusivo',
        support: 'Suporte prioritário',
        consultation: 'Consultoria exclusiva',
        vipGroup: 'Grupo VIP'
      },
      cta: 'QUERO ESTE PACOTE',
      security: {
        payment: 'Pagamento 100% Seguro',
        guarantee: 'Garantia de Satisfação',
        delivery: 'Entrega Rápida e Discreta'
      }
    },
    checkout: {
      title: 'Finalizar Compra',
      selectedPlan: 'Você selecionou:',
      paymentMethod: 'Escolha o Método de Pagamento',
      creditCard: 'Cartão de Crédito',
      personalInfo: 'Informações Pessoais',
      fullName: 'Nome Completo',
      email: 'Email',
      phone: 'Telefone',
      cardDetails: 'Dados do Cartão',
      cardNumber: 'Número do Cartão',
      expiry: 'Validade',
      cvv: 'CVV',
      shippingAddress: 'Endereço de Entrega',
      address: 'Endereço Completo',
      city: 'Cidade',
      zipCode: 'CEP',
      orderSummary: 'Resumo do Pedido',
      shipping: 'Frete',
      free: 'GRÁTIS',
      total: 'Total',
      finalizePurchase: 'FINALIZAR COMPRA SEGURA',
      processing: 'Processando...',
      securePayment: 'Pagamento Seguro SSL',
      encrypted: 'Dados Criptografados',
      satisfaction: 'Garantia de Satisfação'
    },
    faq: {
      title: 'Perguntas Frequentes',
      items: {
        howWorks: {
          q: 'Como funciona o Vigour Azul 5200?',
          a: 'O Vigour Azul 5200 é uma fórmula concentrada com 5200mg de ingredientes naturais que atuam diretamente na energia, disposição e confiança masculina. Os resultados começam a aparecer já nos primeiros dias de uso.'
        },
        safe: {
          q: 'É seguro? Tem efeitos colaterais?',
          a: 'Sim, é 100% seguro! A fórmula é totalmente natural e aprovada pela Anvisa. Não há relatos de efeitos colaterais. Milhares de homens já experimentaram com total segurança.'
        },
        results: {
          q: 'Quanto tempo leva para ver resultados?',
          a: 'A maioria dos usuários relata sentir diferença já nos primeiros 3-7 dias de uso. Para resultados máximos, recomendamos o uso contínuo por pelo menos 90 dias.'
        },
        howToTake: {
          q: 'Como devo tomar?',
          a: 'Recomendamos 1 cápsula ou meia dependendo do organismo da pessoa a 15 a 30 minutos antes da atividade sexual. Tem duração até 72 horas.'
        },
        guarantee: {
          q: 'E se não funcionar para mim?',
          a: 'Oferecemos garantia de satisfação. Se não ficar satisfeito, devolvemos 100% do seu dinheiro dentro do período de garantia do seu plano.'
        },
        discreet: {
          q: 'A entrega é discreta?',
          a: 'Sim! Todas as entregas são feitas em embalagens discretas, sem identificação do produto. Sua privacidade é nossa prioridade.'
        }
      }
    },
    finalCta: {
      title: 'Pronto Para Experimentar a Transformação?',
      description: 'Junte-se aos +50.000 homens que já descobriram o poder do Vigour Azul 5200',
      cta: 'COMEÇAR MINHA TRANSFORMAÇÃO',
      footer: '✓ Entrega rápida e discreta • ✓ Pagamento seguro • ✓ Garantia de satisfação'
    },
    footer: {
      description: 'A fórmula mais potente para transformar sua energia e confiança.',
      product: 'Produto',
      support: 'Suporte',
      contact: 'Contato',
      hours: 'Seg-Sex: 9h-18h',
      rights: 'Todos os direitos reservados.',
      disclaimer: 'Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte um médico antes de usar.'
    },
    editMode: {
      active: '✏️ MODO EDIÇÃO ATIVO - Clique nos campos para editar',
      save: 'Salvar Edições',
      edit: 'Modo Edição'
    },
    testimonials: {
      title: 'O Que Homens Como Você Estão Dizendo',
      subtitle: 'Depoimentos verificados de clientes reais',
      verified: 'Verificado'
    }
  },
  en: {
    nav: {
      home: 'Home',
      benefits: 'Benefits',
      testimonials: 'Testimonials',
      offers: 'Offers',
      tryNow: 'Try Now'
    },
    hero: {
      badge: 'Exclusive 5200mg Formula',
      mainHeadline: 'Discover the Power',
      subHeadline: 'That Is Transforming Thousands of Men',
      description: 'The most powerful formula on the market. 5200mg of pure energy that will revolutionize your performance and confidence',
      ctaPrimary: 'TRY NOW',
      ctaSecondary: 'See Real Testimonials',
      showTestimonials: 'Show',
      hideTestimonials: 'Hide',
      socialProof: {
        satisfied: '+50,000 satisfied men',
        rating: '4.9/5 stars (3,847 reviews)',
        secure: '100% safe and discreet'
      },
      videoText: 'Watch the video and discover how'
    },
    benefits: {
      title: 'Why Vigour Blue 5200 Is Different?',
      subtitle: 'The most advanced and concentrated formula on the market, developed for real results',
      items: {
        energy: {
          title: 'Explosive Energy',
          description: 'Feel the difference in minutes. Energy you have never experienced before.'
        },
        confidence: {
          title: 'Total Confidence',
          description: 'Regain the confidence you deserve. Results that impress.'
        },
        resistance: {
          title: 'Maximum Endurance',
          description: 'Prolonged performance. Exceed your own limits.'
        },
        precision: {
          title: 'Guaranteed Precision',
          description: 'Scientifically developed formula for real results.'
        }
      },
      proven: 'Proven Benefits',
      list: [
        '✓ Significant increase in energy and vitality',
        '✓ Improved confidence and self-esteem',
        '✓ Superior performance in all areas',
        '✓ Visible results in just a few days',
        '✓ 100% natural and safe formula',
        '✓ Approved by experts',
        '✓ No reported side effects',
        '✓ Satisfaction guaranteed or your money back'
      ]
    },
    urgency: {
      title: '🔥 Exclusive Offer - Last Units',
      description: 'Take advantage of the 50% OFF discount and secure your Vigour Blue 5200 before stock runs out.',
      unitsLeft: 'Units remaining',
      timeLeft: 'Until offer ends',
      cta: 'SECURE MY OFFER NOW'
    },
    plans: {
      title: 'Choose Your Package',
      subtitle: 'The more you buy, the more you save',
      mostPopular: 'BEST SELLER',
      features: {
        capsules: 'capsules',
        formula: 'Formula',
        guarantee: 'Guarantee of',
        shipping: 'Shipping',
        bonus: 'Exclusive bonus',
        support: 'Priority support',
        consultation: 'Exclusive consultation',
        vipGroup: 'VIP Group'
      },
      cta: 'I WANT THIS PACKAGE',
      security: {
        payment: '100% Secure Payment',
        guarantee: 'Satisfaction Guarantee',
        delivery: 'Fast and Discreet Delivery'
      }
    },
    checkout: {
      title: 'Checkout',
      selectedPlan: 'You selected:',
      paymentMethod: 'Choose Payment Method',
      creditCard: 'Credit Card',
      personalInfo: 'Personal Information',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      cardDetails: 'Card Details',
      cardNumber: 'Card Number',
      expiry: 'Expiry',
      cvv: 'CVV',
      shippingAddress: 'Shipping Address',
      address: 'Full Address',
      city: 'City',
      zipCode: 'ZIP Code',
      orderSummary: 'Order Summary',
      shipping: 'Shipping',
      free: 'FREE',
      total: 'Total',
      finalizePurchase: 'COMPLETE SECURE PURCHASE',
      processing: 'Processing...',
      securePayment: 'SSL Secure Payment',
      encrypted: 'Encrypted Data',
      satisfaction: 'Satisfaction Guarantee'
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: {
        howWorks: {
          q: 'How does Vigour Blue 5200 work?',
          a: 'Vigour Blue 5200 is a concentrated formula with 5200mg of natural ingredients that act directly on male energy, vitality and confidence. Results start to appear in the first few days of use.'
        },
        safe: {
          q: 'Is it safe? Are there side effects?',
          a: 'Yes, it is 100% safe! The formula is completely natural and FDA approved. There are no reported side effects. Thousands of men have already tried it with complete safety.'
        },
        results: {
          q: 'How long does it take to see results?',
          a: 'Most users report feeling a difference within the first 3-7 days of use. For maximum results, we recommend continuous use for at least 90 days.'
        },
        howToTake: {
          q: 'How should I take it?',
          a: 'We recommend 1 capsule or half depending on the person\'s body 15 to 30 minutes before sexual activity. It lasts up to 72 hours.'
        },
        guarantee: {
          q: 'What if it doesn\'t work for me?',
          a: 'We offer a satisfaction guarantee. If you are not satisfied, we will refund 100% of your money within your plan\'s guarantee period.'
        },
        discreet: {
          q: 'Is delivery discreet?',
          a: 'Yes! All deliveries are made in discreet packaging, without product identification. Your privacy is our priority.'
        }
      }
    },
    finalCta: {
      title: 'Ready to Experience the Transformation?',
      description: 'Join the +50,000 men who have already discovered the power of Vigour Blue 5200',
      cta: 'START MY TRANSFORMATION',
      footer: '✓ Fast and discreet delivery • ✓ Secure payment • ✓ Satisfaction guarantee'
    },
    footer: {
      description: 'The most powerful formula to transform your energy and confidence.',
      product: 'Product',
      support: 'Support',
      contact: 'Contact',
      hours: 'Mon-Fri: 9am-6pm',
      rights: 'All rights reserved.',
      disclaimer: 'This product is not intended to diagnose, treat, cure or prevent any disease. Consult a doctor before use.'
    },
    editMode: {
      active: '✏️ EDIT MODE ACTIVE - Click on fields to edit',
      save: 'Save Changes',
      edit: 'Edit Mode'
    },
    testimonials: {
      title: 'What Men Like You Are Saying',
      subtitle: 'Verified testimonials from real customers',
      verified: 'Verified'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      benefits: 'Beneficios',
      testimonials: 'Testimonios',
      offers: 'Ofertas',
      tryNow: 'Probar Ahora'
    },
    hero: {
      badge: 'Fórmula Exclusiva 5200mg',
      mainHeadline: 'Descubre el Poder',
      subHeadline: 'Que Está Transformando Miles de Hombres',
      description: 'La fórmula más potente del mercado. 5200mg de energía pura que revolucionará tu rendimiento y confianza',
      ctaPrimary: 'PROBAR AHORA',
      ctaSecondary: 'Ver Testimonios Reales',
      showTestimonials: 'Ver',
      hideTestimonials: 'Ocultar',
      socialProof: {
        satisfied: '+50.000 hombres satisfechos',
        rating: '4.9/5 estrellas (3.847 reseñas)',
        secure: '100% seguro y discreto'
      },
      videoText: 'Mira el video y descubre cómo'
    },
    benefits: {
      title: '¿Por Qué Vigour Azul 5200 Es Diferente?',
      subtitle: 'La fórmula más avanzada y concentrada del mercado, desarrollada para resultados reales',
      items: {
        energy: {
          title: 'Energía Explosiva',
          description: 'Siente la diferencia en minutos. Energía que nunca has experimentado antes.'
        },
        confidence: {
          title: 'Confianza Total',
          description: 'Recupera la confianza que mereces. Resultados que impresionan.'
        },
        resistance: {
          title: 'Resistencia Máxima',
          description: 'Rendimiento prolongado. Supera tus propios límites.'
        },
        precision: {
          title: 'Precisión Garantizada',
          description: 'Fórmula científicamente desarrollada para resultados reales.'
        }
      },
      proven: 'Beneficios Comprobados',
      list: [
        '✓ Aumento significativo de energía y vitalidad',
        '✓ Mejora en la confianza y autoestima',
        '✓ Rendimiento superior en todas las áreas',
        '✓ Resultados visibles en pocos días',
        '✓ Fórmula 100% natural y segura',
        '✓ Aprobado por expertos',
        '✓ Sin efectos secundarios reportados',
        '✓ Satisfacción garantizada o tu dinero de vuelta'
      ]
    },
    urgency: {
      title: '🔥 Oferta Exclusiva - Últimas Unidades',
      description: 'Aprovecha el descuento del 50% OFF y asegura tu Vigour Azul 5200 antes de que se agote el stock.',
      unitsLeft: 'Unidades restantes',
      timeLeft: 'Para que termine la oferta',
      cta: 'ASEGURAR MI OFERTA AHORA'
    },
    plans: {
      title: 'Elige Tu Paquete',
      subtitle: 'Cuanto más compras, más ahorras',
      mostPopular: 'MÁS VENDIDO',
      features: {
        capsules: 'cápsulas',
        formula: 'Fórmula',
        guarantee: 'Garantía de',
        shipping: 'Envío',
        bonus: 'Bono exclusivo',
        support: 'Soporte prioritario',
        consultation: 'Consultoría exclusiva',
        vipGroup: 'Grupo VIP'
      },
      cta: 'QUIERO ESTE PAQUETE',
      security: {
        payment: 'Pago 100% Seguro',
        guarantee: 'Garantía de Satisfacción',
        delivery: 'Entrega Rápida y Discreta'
      }
    },
    checkout: {
      title: 'Finalizar Compra',
      selectedPlan: 'Has seleccionado:',
      paymentMethod: 'Elige el Método de Pago',
      creditCard: 'Tarjeta de Crédito',
      personalInfo: 'Información Personal',
      fullName: 'Nombre Completo',
      email: 'Email',
      phone: 'Teléfono',
      cardDetails: 'Datos de la Tarjeta',
      cardNumber: 'Número de Tarjeta',
      expiry: 'Vencimiento',
      cvv: 'CVV',
      shippingAddress: 'Dirección de Envío',
      address: 'Dirección Completa',
      city: 'Ciudad',
      zipCode: 'Código Postal',
      orderSummary: 'Resumen del Pedido',
      shipping: 'Envío',
      free: 'GRATIS',
      total: 'Total',
      finalizePurchase: 'COMPLETAR COMPRA SEGURA',
      processing: 'Procesando...',
      securePayment: 'Pago Seguro SSL',
      encrypted: 'Datos Encriptados',
      satisfaction: 'Garantía de Satisfacción'
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: {
        howWorks: {
          q: '¿Cómo funciona Vigour Azul 5200?',
          a: 'Vigour Azul 5200 es una fórmula concentrada con 5200mg de ingredientes naturales que actúan directamente sobre la energía, vitalidad y confianza masculina. Los resultados comienzan a aparecer en los primeros días de uso.'
        },
        safe: {
          q: '¿Es seguro? ¿Tiene efectos secundarios?',
          a: '¡Sí, es 100% seguro! La fórmula es completamente natural y aprobada por la FDA. No hay efectos secundarios reportados. Miles de hombres ya lo han probado con total seguridad.'
        },
        results: {
          q: '¿Cuánto tiempo tarda en ver resultados?',
          a: 'La mayoría de los usuarios reportan sentir una diferencia en los primeros 3-7 días de uso. Para resultados máximos, recomendamos el uso continuo durante al menos 90 días.'
        },
        howToTake: {
          q: '¿Cómo debo tomarlo?',
          a: 'Recomendamos 1 cápsula por día, preferiblemente por la mañana. Sigue las instrucciones del paquete para mejores resultados.'
        },
        guarantee: {
          q: '¿Y si no funciona para mí?',
          a: 'Ofrecemos garantía de satisfacción. Si no estás satisfecho, te devolvemos el 100% de tu dinero dentro del período de garantía de tu plan.'
        },
        discreet: {
          q: '¿La entrega es discreta?',
          a: '¡Sí! Todas las entregas se realizan en empaques discretos, sin identificación del producto. Tu privacidad es nuestra prioridad.'
        }
      }
    },
    finalCta: {
      title: '¿Listo Para Experimentar la Transformación?',
      description: 'Únete a los +50.000 hombres que ya han descubierto el poder de Vigour Azul 5200',
      cta: 'COMENZAR MI TRANSFORMACIÓN',
      footer: '✓ Entrega rápida y discreta • ✓ Pago seguro • ✓ Garantía de satisfacción'
    },
    footer: {
      description: 'La fórmula más potente para transformar tu energía y confianza.',
      product: 'Producto',
      support: 'Soporte',
      contact: 'Contacto',
      hours: 'Lun-Vie: 9h-18h',
      rights: 'Todos los derechos reservados.',
      disclaimer: 'Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulte a un médico antes de usar.'
    },
    editMode: {
      active: '✏️ MODO EDICIÓN ACTIVO - Haz clic en los campos para editar',
      save: 'Guardar Cambios',
      edit: 'Modo Edición'
    },
    testimonials: {
      title: 'Lo Que Hombres Como Tú Están Diciendo',
      subtitle: 'Testimonios verificados de clientes reales',
      verified: 'Verificado'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      benefits: 'Avantages',
      testimonials: 'Témoignages',
      offers: 'Offres',
      tryNow: 'Essayer Maintenant'
    },
    hero: {
      badge: 'Formule Exclusive 5200mg',
      mainHeadline: 'Découvrez le Pouvoir',
      subHeadline: 'Qui Transforme Des Milliers d\'Hommes',
      description: 'La formule la plus puissante du marché. 5200mg d\'énergie pure qui révolutionnera votre performance et votre confiance',
      ctaPrimary: 'ESSAYER MAINTENANT',
      ctaSecondary: 'Voir les Vrais Témoignages',
      showTestimonials: 'Afficher',
      hideTestimonials: 'Masquer',
      socialProof: {
        satisfied: '+50 000 hommes satisfaits',
        rating: '4.9/5 étoiles (3 847 avis)',
        secure: '100% sûr et discret'
      },
      videoText: 'Regardez la vidéo et découvrez comment'
    },
    benefits: {
      title: 'Pourquoi Vigour Bleu 5200 Est Différent?',
      subtitle: 'La formule la plus avancée et concentrée du marché, développée pour des résultats réels',
      items: {
        energy: {
          title: 'Énergie Explosive',
          description: 'Sentez la différence en quelques minutes. Une énergie que vous n\'avez jamais connue auparavant.'
        },
        confidence: {
          title: 'Confiance Totale',
          description: 'Retrouvez la confiance que vous méritez. Des résultats qui impressionnent.'
        },
        resistance: {
          title: 'Endurance Maximale',
          description: 'Performance prolongée. Dépassez vos propres limites.'
        },
        precision: {
          title: 'Précision Garantie',
          description: 'Formule scientifiquement développée pour des résultats réels.'
        }
      },
      proven: 'Avantages Prouvés',
      list: [
        '✓ Augmentation significative de l\'énergie et de la vitalité',
        '✓ Amélioration de la confiance et de l\'estime de soi',
        '✓ Performance supérieure dans tous les domaines',
        '✓ Résultats visibles en quelques jours',
        '✓ Formule 100% naturelle et sûre',
        '✓ Approuvé par des experts',
        '✓ Aucun effet secondaire signalé',
        '✓ Satisfaction garantie ou remboursement'
      ]
    },
    urgency: {
      title: '🔥 Offre Exclusive - Dernières Unités',
      description: 'Profitez de la réduction de 50% et sécurisez votre Vigour Bleu 5200 avant la rupture de stock.',
      unitsLeft: 'Unités restantes',
      timeLeft: 'Jusqu\'à la fin de l\'offre',
      cta: 'SÉCURISER MON OFFRE MAINTENANT'
    },
    plans: {
      title: 'Choisissez Votre Pack',
      subtitle: 'Plus vous achetez, plus vous économisez',
      mostPopular: 'PLUS VENDU',
      features: {
        capsules: 'capsules',
        formula: 'Formule',
        guarantee: 'Garantie de',
        shipping: 'Livraison',
        bonus: 'Bonus exclusif',
        support: 'Support prioritaire',
        consultation: 'Consultation exclusive',
        vipGroup: 'Groupe VIP'
      },
      cta: 'JE VEUX CE PACK',
      security: {
        payment: 'Paiement 100% Sécurisé',
        guarantee: 'Garantie de Satisfaction',
        delivery: 'Livraison Rapide et Discrète'
      }
    },
    checkout: {
      title: 'Finaliser l\'Achat',
      selectedPlan: 'Vous avez sélectionné:',
      paymentMethod: 'Choisissez le Mode de Paiement',
      creditCard: 'Carte de Crédit',
      personalInfo: 'Informations Personnelles',
      fullName: 'Nom Complet',
      email: 'Email',
      phone: 'Téléphone',
      cardDetails: 'Détails de la Carte',
      cardNumber: 'Numéro de Carte',
      expiry: 'Expiration',
      cvv: 'CVV',
      shippingAddress: 'Adresse de Livraison',
      address: 'Adresse Complète',
      city: 'Ville',
      zipCode: 'Code Postal',
      orderSummary: 'Résumé de la Commande',
      shipping: 'Livraison',
      free: 'GRATUIT',
      total: 'Total',
      finalizePurchase: 'FINALISER L\'ACHAT SÉCURISÉ',
      processing: 'Traitement...',
      securePayment: 'Paiement Sécurisé SSL',
      encrypted: 'Données Cryptées',
      satisfaction: 'Garantie de Satisfaction'
    },
    faq: {
      title: 'Questions Fréquentes',
      items: {
        howWorks: {
          q: 'Comment fonctionne Vigour Bleu 5200?',
          a: 'Vigour Bleu 5200 est une formule concentrée avec 5200mg d\'ingrédients naturels qui agissent directement sur l\'énergie, la vitalité et la confiance masculine. Les résultats commencent à apparaître dès les premiers jours d\'utilisation.'
        },
        safe: {
          q: 'Est-ce sûr? Y a-t-il des effets secondaires?',
          a: 'Oui, c\'est 100% sûr! La formule est entièrement naturelle et approuvée par la FDA. Il n\'y a aucun effet secondaire signalé. Des milliers d\'hommes l\'ont déjà essayé en toute sécurité.'
        },
        results: {
          q: 'Combien de temps faut-il pour voir les résultats?',
          a: 'La plupart des utilisateurs signalent une différence dans les 3 à 7 premiers jours d\'utilisation. Pour des résultats maximaux, nous recommandons une utilisation continue pendant au moins 90 jours.'
        },
        howToTake: {
          q: 'Comment dois-je le prendre?',
          a: 'Nous recommandons 1 capsule par jour, de préférence le matin. Suivez les instructions du paquet pour de meilleurs résultats.'
        },
        guarantee: {
          q: 'Et si ça ne fonctionne pas pour moi?',
          a: 'Nous offrons une garantie de satisfaction. Si vous n\'êtes pas satisfait, nous vous remboursons 100% de votre argent dans la période de garantie de votre plan.'
        },
        discreet: {
          q: 'La livraison est-elle discrète?',
          a: 'Oui! Toutes les livraisons sont effectuées dans des emballages discrets, sans identification du produit. Votre vie privée est notre priorité.'
        }
      }
    },
    finalCta: {
      title: 'Prêt à Vivre la Transformation?',
      description: 'Rejoignez les +50 000 hommes qui ont déjà découvert le pouvoir de Vigour Bleu 5200',
      cta: 'COMMENCER MA TRANSFORMATION',
      footer: '✓ Livraison rapide et discrète • ✓ Paiement sécurisé • ✓ Garantie de satisfaction'
    },
    footer: {
      description: 'La formule la plus puissante pour transformer votre énergie et votre confiance.',
      product: 'Produit',
      support: 'Support',
      contact: 'Contact',
      hours: 'Lun-Ven: 9h-18h',
      rights: 'Tous droits réservés.',
      disclaimer: 'Ce produit n\'est pas destiné à diagnostiquer, traiter, guérir ou prévenir une maladie. Consultez un médecin avant utilisation.'
    },
    editMode: {
      active: '✏️ MODE ÉDITION ACTIF - Cliquez sur les champs pour éditer',
      save: 'Enregistrer les Modifications',
      edit: 'Mode Édition'
    },
    testimonials: {
      title: 'Ce Que Des Hommes Comme Vous Disent',
      subtitle: 'Témoignages vérifiés de vrais clients',
      verified: 'Vérifié'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      benefits: 'Vorteile',
      testimonials: 'Erfahrungsberichte',
      offers: 'Angebote',
      tryNow: 'Jetzt Testen'
    },
    hero: {
      badge: 'Exklusive 5200mg Formel',
      mainHeadline: 'Entdecken Sie die Kraft',
      subHeadline: 'Die Tausende von Männern Verwandelt',
      description: 'Die stärkste Formel auf dem Markt. 5200mg reine Energie, die Ihre Leistung und Ihr Selbstvertrauen revolutionieren wird',
      ctaPrimary: 'JETZT TESTEN',
      ctaSecondary: 'Echte Erfahrungsberichte Sehen',
      showTestimonials: 'Anzeigen',
      hideTestimonials: 'Verbergen',
      socialProof: {
        satisfied: '+50.000 zufriedene Männer',
        rating: '4.9/5 Sterne (3.847 Bewertungen)',
        secure: '100% sicher und diskret'
      },
      videoText: 'Sehen Sie sich das Video an und entdecken Sie, wie'
    },
    benefits: {
      title: 'Warum Vigour Blau 5200 Anders Ist?',
      subtitle: 'Die fortschrittlichste und konzentrierteste Formel auf dem Markt, entwickelt für echte Ergebnisse',
      items: {
        energy: {
          title: 'Explosive Energie',
          description: 'Spüren Sie den Unterschied in Minuten. Energie, die Sie noch nie erlebt haben.'
        },
        confidence: {
          title: 'Totales Selbstvertrauen',
          description: 'Gewinnen Sie das Selbstvertrauen zurück, das Sie verdienen. Ergebnisse, die beeindrucken.'
        },
        resistance: {
          title: 'Maximale Ausdauer',
          description: 'Verlängerte Leistung. Übertreffen Sie Ihre eigenen Grenzen.'
        },
        precision: {
          title: 'Garantierte Präzision',
          description: 'Wissenschaftlich entwickelte Formel für echte Ergebnisse.'
        }
      },
      proven: 'Bewährte Vorteile',
      list: [
        '✓ Signifikante Steigerung von Energie und Vitalität',
        '✓ Verbesserung des Selbstvertrauens und Selbstwertgefühls',
        '✓ Überlegene Leistung in allen Bereichen',
        '✓ Sichtbare Ergebnisse in wenigen Tagen',
        '✓ 100% natürliche und sichere Formel',
        '✓ Von Experten genehmigt',
        '✓ Keine gemeldeten Nebenwirkungen',
        '✓ Zufriedenheitsgarantie oder Geld zurück'
      ]
    },
    urgency: {
      title: '🔥 Exklusives Angebot - Letzte Einheiten',
      description: 'Nutzen Sie den 50% Rabatt und sichern Sie sich Ihr Vigour Blau 5200, bevor der Vorrat ausgeht.',
      unitsLeft: 'Verbleibende Einheiten',
      timeLeft: 'Bis das Angebot endet',
      cta: 'MEIN ANGEBOT JETZT SICHERN'
    },
    plans: {
      title: 'Wählen Sie Ihr Paket',
      subtitle: 'Je mehr Sie kaufen, desto mehr sparen Sie',
      mostPopular: 'BESTSELLER',
      features: {
        capsules: 'Kapseln',
        formula: 'Formel',
        guarantee: 'Garantie von',
        shipping: 'Versand',
        bonus: 'Exklusiver Bonus',
        support: 'Prioritäts-Support',
        consultation: 'Exklusive Beratung',
        vipGroup: 'VIP-Gruppe'
      },
      cta: 'ICH MÖCHTE DIESES PAKET',
      security: {
        payment: '100% Sichere Zahlung',
        guarantee: 'Zufriedenheitsgarantie',
        delivery: 'Schnelle und Diskrete Lieferung'
      }
    },
    checkout: {
      title: 'Kauf Abschließen',
      selectedPlan: 'Sie haben ausgewählt:',
      paymentMethod: 'Zahlungsmethode Wählen',
      creditCard: 'Kreditkarte',
      personalInfo: 'Persönliche Informationen',
      fullName: 'Vollständiger Name',
      email: 'E-Mail',
      phone: 'Telefon',
      cardDetails: 'Kartendetails',
      cardNumber: 'Kartennummer',
      expiry: 'Ablauf',
      cvv: 'CVV',
      shippingAddress: 'Lieferadresse',
      address: 'Vollständige Adresse',
      city: 'Stadt',
      zipCode: 'Postleitzahl',
      orderSummary: 'Bestellübersicht',
      shipping: 'Versand',
      free: 'KOSTENLOS',
      total: 'Gesamt',
      finalizePurchase: 'SICHEREN KAUF ABSCHLIESSEN',
      processing: 'Verarbeitung...',
      securePayment: 'SSL Sichere Zahlung',
      encrypted: 'Verschlüsselte Daten',
      satisfaction: 'Zufriedenheitsgarantie'
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      items: {
        howWorks: {
          q: 'Wie funktioniert Vigour Blau 5200?',
          a: 'Vigour Blau 5200 ist eine konzentrierte Formel mit 5200mg natürlicher Inhaltsstoffe, die direkt auf männliche Energie, Vitalität und Selbstvertrauen wirken. Die Ergebnisse zeigen sich bereits in den ersten Tagen der Anwendung.'
        },
        safe: {
          q: 'Ist es sicher? Gibt es Nebenwirkungen?',
          a: 'Ja, es ist 100% sicher! Die Formel ist vollständig natürlich und von der FDA zugelassen. Es wurden keine Nebenwirkungen gemeldet. Tausende von Männern haben es bereits mit völliger Sicherheit ausprobiert.'
        },
        results: {
          q: 'Wie lange dauert es, bis man Ergebnisse sieht?',
          a: 'Die meisten Benutzer berichten von einem Unterschied innerhalb der ersten 3-7 Tage der Anwendung. Für maximale Ergebnisse empfehlen wir eine kontinuierliche Anwendung für mindestens 90 Tage.'
        },
        howToTake: {
          q: 'Wie sollte ich es einnehmen?',
          a: 'Wir empfehlen 1 Kapsel pro Tag, vorzugsweise morgens. Befolgen Sie die Anweisungen auf der Packung für beste Ergebnisse.'
        },
        guarantee: {
          q: 'Was ist, wenn es bei mir nicht funktioniert?',
          a: 'Wir bieten eine Zufriedenheitsgarantie. Wenn Sie nicht zufrieden sind, erstatten wir Ihnen 100% Ihres Geldes innerhalb der Garantiezeit Ihres Plans.'
        },
        discreet: {
          q: 'Ist die Lieferung diskret?',
          a: 'Ja! Alle Lieferungen erfolgen in diskreten Verpackungen ohne Produktidentifikation. Ihre Privatsphäre ist unsere Priorität.'
        }
      }
    },
    finalCta: {
      title: 'Bereit, die Transformation zu Erleben?',
      description: 'Schließen Sie sich den +50.000 Männern an, die bereits die Kraft von Vigour Blau 5200 entdeckt haben',
      cta: 'MEINE TRANSFORMATION BEGINNEN',
      footer: '✓ Schnelle und diskrete Lieferung • ✓ Sichere Zahlung • ✓ Zufriedenheitsgarantie'
    },
    footer: {
      description: 'Die stärkste Formel zur Transformation Ihrer Energie und Ihres Selbstvertrauens.',
      product: 'Produkt',
      support: 'Support',
      contact: 'Kontakt',
      hours: 'Mo-Fr: 9-18 Uhr',
      rights: 'Alle Rechte vorbehalten.',
      disclaimer: 'Dieses Produkt ist nicht zur Diagnose, Behandlung, Heilung oder Vorbeugung von Krankheiten bestimmt. Konsultieren Sie vor der Anwendung einen Arzt.'
    },
    editMode: {
      active: '✏️ BEARBEITUNGSMODUS AKTIV - Klicken Sie auf Felder zum Bearbeiten',
      save: 'Änderungen Speichern',
      edit: 'Bearbeitungsmodus'
    },
    testimonials: {
      title: 'Was Männer Wie Sie Sagen',
      subtitle: 'Verifizierte Erfahrungsberichte von echten Kunden',
      verified: 'Verifiziert'
    }
  },
  it: {
    nav: {
      home: 'Home',
      benefits: 'Benefici',
      testimonials: 'Testimonianze',
      offers: 'Offerte',
      tryNow: 'Prova Ora'
    },
    hero: {
      badge: 'Formula Esclusiva 5200mg',
      mainHeadline: 'Scopri il Potere',
      subHeadline: 'Che Sta Trasformando Migliaia di Uomini',
      description: 'La formula più potente sul mercato. 5200mg di energia pura che rivoluzionerà le tue prestazioni e la tua fiducia',
      ctaPrimary: 'PROVA ORA',
      ctaSecondary: 'Vedi Testimonianze Reali',
      showTestimonials: 'Mostra',
      hideTestimonials: 'Nascondi',
      socialProof: {
        satisfied: '+50.000 uomini soddisfatti',
        rating: '4.9/5 stelle (3.847 recensioni)',
        secure: '100% sicuro e discreto'
      },
      videoText: 'Guarda il video e scopri come'
    },
    benefits: {
      title: 'Perché Vigour Blu 5200 È Diverso?',
      subtitle: 'La formula più avanzata e concentrata sul mercato, sviluppata per risultati reali',
      items: {
        energy: {
          title: 'Energia Esplosiva',
          description: 'Senti la differenza in pochi minuti. Energia che non hai mai sperimentato prima.'
        },
        confidence: {
          title: 'Fiducia Totale',
          description: 'Recupera la fiducia che meriti. Risultati che impressionano.'
        },
        resistance: {
          title: 'Resistenza Massima',
          description: 'Prestazioni prolungate. Supera i tuoi stessi limiti.'
        },
        precision: {
          title: 'Precisione Garantita',
          description: 'Formula scientificamente sviluppata per risultati reali.'
        }
      },
      proven: 'Benefici Comprovati',
      list: [
        '✓ Aumento significativo di energia e vitalità',
        '✓ Miglioramento della fiducia e dell\'autostima',
        '✓ Prestazioni superiori in tutte le aree',
        '✓ Risultati visibili in pochi giorni',
        '✓ Formula 100% naturale e sicura',
        '✓ Approvato da esperti',
        '✓ Nessun effetto collaterale segnalato',
        '✓ Soddisfazione garantita o rimborso'
      ]
    },
    urgency: {
      title: '🔥 Offerta Esclusiva - Ultime Unità',
      description: 'Approfitta dello sconto del 50% e assicurati il tuo Vigour Blu 5200 prima che finisca lo stock.',
      unitsLeft: 'Unità rimanenti',
      timeLeft: 'Fino alla fine dell\'offerta',
      cta: 'ASSICURA LA MIA OFFERTA ORA'
    },
    plans: {
      title: 'Scegli il Tuo Pacchetto',
      subtitle: 'Più acquisti, più risparmi',
      mostPopular: 'PIÙ VENDUTO',
      features: {
        capsules: 'capsule',
        formula: 'Formula',
        guarantee: 'Garanzia di',
        shipping: 'Spedizione',
        bonus: 'Bonus esclusivo',
        support: 'Supporto prioritario',
        consultation: 'Consulenza esclusiva',
        vipGroup: 'Gruppo VIP'
      },
      cta: 'VOGLIO QUESTO PACCHETTO',
      security: {
        payment: 'Pagamento 100% Sicuro',
        guarantee: 'Garanzia di Soddisfazione',
        delivery: 'Consegna Rapida e Discreta'
      }
    },
    checkout: {
      title: 'Finalizza Acquisto',
      selectedPlan: 'Hai selezionato:',
      paymentMethod: 'Scegli il Metodo di Pagamento',
      creditCard: 'Carta di Credito',
      personalInfo: 'Informazioni Personali',
      fullName: 'Nome Completo',
      email: 'Email',
      phone: 'Telefono',
      cardDetails: 'Dettagli della Carta',
      cardNumber: 'Numero della Carta',
      expiry: 'Scadenza',
      cvv: 'CVV',
      shippingAddress: 'Indirizzo di Spedizione',
      address: 'Indirizzo Completo',
      city: 'Città',
      zipCode: 'CAP',
      orderSummary: 'Riepilogo Ordine',
      shipping: 'Spedizione',
      free: 'GRATIS',
      total: 'Totale',
      finalizePurchase: 'COMPLETA ACQUISTO SICURO',
      processing: 'Elaborazione...',
      securePayment: 'Pagamento Sicuro SSL',
      encrypted: 'Dati Crittografati',
      satisfaction: 'Garanzia di Soddisfazione'
    },
    faq: {
      title: 'Domande Frequenti',
      items: {
        howWorks: {
          q: 'Come funziona Vigour Blu 5200?',
          a: 'Vigour Blu 5200 è una formula concentrata con 5200mg di ingredienti naturali che agiscono direttamente sull\'energia, vitalità e fiducia maschile. I risultati iniziano ad apparire nei primi giorni di utilizzo.'
        },
        safe: {
          q: 'È sicuro? Ci sono effetti collaterali?',
          a: 'Sì, è 100% sicuro! La formula è completamente naturale e approvata dalla FDA. Non ci sono effetti collaterali segnalati. Migliaia di uomini l\'hanno già provato in completa sicurezza.'
        },
        results: {
          q: 'Quanto tempo ci vuole per vedere i risultati?',
          a: 'La maggior parte degli utenti riferisce di sentire una differenza entro i primi 3-7 giorni di utilizzo. Per risultati massimi, consigliamo l\'uso continuo per almeno 90 giorni.'
        },
        howToTake: {
          q: 'Come devo prenderlo?',
          a: 'Consigliamo 1 capsula al giorno, preferibilmente al mattino. Segui le istruzioni sulla confezione per i migliori risultati.'
        },
        guarantee: {
          q: 'E se non funziona per me?',
          a: 'Offriamo una garanzia di soddisfazione. Se non sei soddisfatto, ti rimborsiamo il 100% del tuo denaro entro il periodo di garanzia del tuo piano.'
        },
        discreet: {
          q: 'La consegna è discreta?',
          a: 'Sì! Tutte le consegne vengono effettuate in imballaggi discreti, senza identificazione del prodotto. La tua privacy è la nostra priorità.'
        }
      }
    },
    finalCta: {
      title: 'Pronto a Sperimentare la Trasformazione?',
      description: 'Unisciti ai +50.000 uomini che hanno già scoperto il potere di Vigour Blu 5200',
      cta: 'INIZIA LA MIA TRASFORMAZIONE',
      footer: '✓ Consegna rapida e discreta • ✓ Pagamento sicuro • ✓ Garanzia di soddisfazione'
    },
    footer: {
      description: 'La formula più potente per trasformare la tua energia e la tua fiducia.',
      product: 'Prodotto',
      support: 'Supporto',
      contact: 'Contatto',
      hours: 'Lun-Ven: 9-18',
      rights: 'Tutti i diritti riservati.',
      disclaimer: 'Questo prodotto non è destinato a diagnosticare, trattare, curare o prevenire alcuna malattia. Consultare un medico prima dell\'uso.'
    },
    editMode: {
      active: '✏️ MODALITÀ MODIFICA ATTIVA - Clicca sui campi per modificare',
      save: 'Salva Modifiche',
      edit: 'Modalità Modifica'
    },
    testimonials: {
      title: 'Cosa Dicono Uomini Come Te',
      subtitle: 'Testimonianze verificate di clienti reali',
      verified: 'Verificato'
    }
  }
}
