// Ruyter Payment Integration
// Documentation: https://docs.ruyter.com

export interface RuyterPaymentRequest {
  amount: number
  currency: string
  customerEmail: string
  customerName: string
  customerPhone: string
  description: string
  orderId: string
  successUrl?: string
  cancelUrl?: string
  metadata?: Record<string, any>
}

export interface RuyterPaymentResponse {
  success: boolean
  transactionId?: string
  paymentUrl?: string
  error?: string
  message?: string
}

/**
 * Get Ruyter API configuration
 */
function getRuyterConfig() {
  const apiKey = process.env.NEXT_PUBLIC_RUYTER_API_KEY
  const apiUrl = process.env.NEXT_PUBLIC_RUYTER_API_URL || 'https://api.ruyter.com/v1'
  
  if (!apiKey) {
    throw new Error('NEXT_PUBLIC_RUYTER_API_KEY is not configured')
  }
  
  return { apiKey, apiUrl }
}

/**
 * Initialize Ruyter payment
 * Real implementation with Ruyter API integration
 */
export async function initializeRuyterPayment(
  request: RuyterPaymentRequest
): Promise<RuyterPaymentResponse> {
  try {
    const { apiKey, apiUrl } = getRuyterConfig()
    
    // Real Ruyter API call
    const response = await fetch(`${apiUrl}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        amount: formatAmountForRuyter(request.amount),
        currency: request.currency,
        customer: {
          email: request.customerEmail,
          name: request.customerName,
          phone: request.customerPhone
        },
        description: request.description,
        order_id: request.orderId,
        success_url: request.successUrl,
        cancel_url: request.cancelUrl,
        metadata: request.metadata
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `API error: ${response.status}`)
    }

    const data = await response.json()

    return {
      success: true,
      transactionId: data.transaction_id || data.id,
      paymentUrl: data.payment_url || data.checkout_url,
      message: data.message || 'Payment initialized successfully'
    }
  } catch (error) {
    console.error('Ruyter payment error:', error)
    return {
      success: false,
      error: 'Failed to initialize payment',
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

/**
 * Verify Ruyter payment status
 * Real implementation with Ruyter API integration
 */
export async function verifyRuyterPayment(transactionId: string): Promise<{
  success: boolean
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  message?: string
}> {
  try {
    const { apiKey, apiUrl } = getRuyterConfig()
    
    // Real Ruyter API call to verify payment
    const response = await fetch(`${apiUrl}/payments/${transactionId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    
    // Map Ruyter status to our status format
    const statusMap: Record<string, 'pending' | 'completed' | 'failed' | 'cancelled'> = {
      'pending': 'pending',
      'processing': 'pending',
      'completed': 'completed',
      'succeeded': 'completed',
      'failed': 'failed',
      'cancelled': 'cancelled',
      'canceled': 'cancelled'
    }

    return {
      success: true,
      status: statusMap[data.status] || 'pending',
      message: data.message || 'Payment verified successfully'
    }
  } catch (error) {
    console.error('Ruyter verification error:', error)
    return {
      success: false,
      status: 'failed',
      message: error instanceof Error ? error.message : 'Verification failed'
    }
  }
}

/**
 * Cancel Ruyter payment
 */
export async function cancelRuyterPayment(transactionId: string): Promise<{
  success: boolean
  message?: string
}> {
  try {
    const { apiKey, apiUrl } = getRuyterConfig()
    
    const response = await fetch(`${apiUrl}/payments/${transactionId}/cancel`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    return {
      success: true,
      message: data.message || 'Payment cancelled successfully'
    }
  } catch (error) {
    console.error('Ruyter cancellation error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Cancellation failed'
    }
  }
}

/**
 * Format amount for Ruyter (usually in cents)
 */
export function formatAmountForRuyter(amount: number): number {
  return Math.round(amount * 100)
}

/**
 * Generate unique order ID
 */
export function generateOrderId(): string {
  return `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}

/**
 * Validate Ruyter webhook signature
 * Use this to verify webhook requests from Ruyter
 */
export function validateRuyterWebhook(
  payload: string,
  signature: string,
  secret: string
): boolean {
  try {
    // Implement signature validation based on Ruyter's documentation
    // This is a placeholder - adjust according to Ruyter's actual implementation
    const crypto = require('crypto')
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex')
    
    return signature === expectedSignature
  } catch (error) {
    console.error('Webhook validation error:', error)
    return false
  }
}
