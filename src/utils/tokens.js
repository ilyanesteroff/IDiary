

export const tokenFromUrl = window.location.pathname.split('/')[2]

export const tokenFromStorage = _ => localStorage.getItem('token') || sessionStorage.getItem('token')