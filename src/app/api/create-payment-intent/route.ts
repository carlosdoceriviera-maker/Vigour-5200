import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia'
})

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, customerEmail, customerName, description, metadata } = await request.json()

    // Validate required fields
    if (!amount || !currency) {
      return NextResponse.json(
        { error: 'Amount and currency are required' },
        { status: 400 }
      )
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency: currency.toLowerCase(),
      description: description || 'Vigour Azul 5200 Purchase',
      receipt_email: customerEmail,
      metadata: {
        customerName: customerName || '',
        ...metadata
      },
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    })
  } catch (error: any) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
