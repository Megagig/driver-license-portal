import { Accordion } from "./Accordion";

const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: "How much will the new License cost me?",
            answer: "The new driver license is in different classes and validity periods. For Class A and validity of 3 years, the price is 5,000 naira while for 5 years validity the price is 8400. Other classes are 10,000 naira for 3 years and 15,000 naira for 5 years.",
        },
        {
            id: 2,
            question: "How do I pay for the new license?",
            answer: "Payment for the new license can either be online through this web portal or through designated banks accross the country",
        },
        {
            id: 3,
            question:
                "I am a fresh Applicant. What do i need to do to obtain the new Driver License?",
            answer: "1. Visit an accredited driving school and complete the mandatory drivers training.2. Obtain a driving school certificate number from the accredited driving school to be used to initiate a fresh application.3. Access the nigeriadriverslicence.frsc.gov.ng, click on DL Application tab and select New Driver’s Licence Application.4. Provide your Certificate Number (Which is the number on the certificate provided from the driving school attended) and click on submit.5. Fill in your application details and submit and make payment.",
        },
        {
            id: 4,
            question:
                "What happens to a driver license that have recently expired?",
            answer: "Initiate a Renewal Application from this Portal",
        },
        {
            id: 5,
            question: "What are classes of License?",
            answer: "The class of a licence is denoted by an alphabet. It specifies the category of vehicles that the licence holder is permitted to operate. Possible classes are: A, B, C, D, E, F, G. H, J.",
        },
    ];

    return (
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm w-[700px] mx-auto">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8 ">
                Frequently Asked Questions
            </h1>
            <div
                className="mt-10"
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white "
                data-inactive-classes="text-gray-500 dark:text-gray-400 "
            >
                {faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    );
};

export default Faq;
