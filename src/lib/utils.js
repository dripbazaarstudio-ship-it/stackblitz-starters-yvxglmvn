export function getSessionId() {
  let sessionId = localStorage.getItem('dripbazaar_session_id')
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    localStorage.setItem('dripbazaar_session_id', sessionId)
  }
  return sessionId
}

export function formatPrice(paise) {
  return `₹${(paise / 100).toFixed(2)}`
}
