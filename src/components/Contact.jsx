import Title from "./Title";

function Contact() {
    return (
        <div>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <Title> Contact Me </Title>
                </div>
                <div className="flex flex-col mx-auto pt-6 md:pt-16"
                data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" data-aos-easing="ease-in-sine">
                    <div id="contact" className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/e1f1261e-74d7-4392-91de-aa93da228886"
                        method="POST"
                        className="flex flex-col w-9/12 lg:w-5/12"
                    >
                    <h2 className="text-lg font-medium mb-5 bg-gradient-to-r from-sky-300
                    bg-no-repeat bg-left bg-[length:60%_12px]">
                    I{"'"}m ready when you are!</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        required
                    />
                    <textarea
                        name ="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none resize-none"
                        required
                    />
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md 
                        text-white bg-gradient-to-r from-sky-500 to-slate-500 hover:to-sky-600
                        drop-shadow-md hover:scale-105 ease-in-out duration-300"
                    >
                        Work With Me
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;