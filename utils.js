// Utility functions
export function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// Updated at 2026-01-10
export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
