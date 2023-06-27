import React, { useState } from 'react'

import Style from './faqs.module.css'
import { faqsData } from './data'
import FAQ from './FAQ'

const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData)

    return (
        <main className={Style.container}>
            <section className={Style.faqs}>
                <h1>FAQ</h1>
                {faqs.map((faq) => <FAQ key={faq.id} {...faq} />)}
            </section>
        </main>

    )
}

export default FAQS
