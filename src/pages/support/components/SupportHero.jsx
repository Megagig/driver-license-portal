import customercare from "../../../assets/customercare.jpg"

const SupportHero = () => {
    return (
        <div>
            <h1 className="text-green-500 text-3xl font-bold mb-4">Support</h1>
            <p className="text-base leading-normal pb-4">Don't hesitate to reach out to our friendly customer support team. They are happy to assist you with any questions or challenge you may encounter on this platform. you can reach out to us at <a className="text-bl" href=""> DlSupport@Acme.com</a> or  call <span className="font-bold">0900123456</span> </p>
            <div className={`inline-block bg-[url("src/assets/customercare.jpg")] w-full h-80 bg-cover`}></div>
        </div>

    )
}

export default SupportHero