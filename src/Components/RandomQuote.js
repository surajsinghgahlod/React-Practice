import React from 'react'

export default function RandomQuote() {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",

        "In the middle of difficulty lies opportunity. - Albert Einstein",

        "Believe you can and you're halfway there. - Theodore Roosevelt",

        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",

        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",

        "Be yourself; everyone else is already taken. - Oscar Wilde",

        "The best way to predict the future is to create it. - Peter Drucker",

        "Strive not to be a success, but rather to be of value. - Albert Einstein",

        "Do what you can, with what you have, where you are. - Theodore Roosevelt",

        "Happiness is not by chance, but by choice. - Jim Rohn"
    ]

    const randomQuotes = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomQuotes]

  return (
    <div>
      {quote}
    </div>
  )
}
