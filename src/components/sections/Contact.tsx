import { TypeAnimation } from "react-type-animation";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";


interface ContactFormProps {
    name:string;
    email: string;
    message: string;
}

const Contact = () => {



    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<ContactFormProps>();

        const onSubmit = async (data: ContactFormProps) => {
        try {
            await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID!,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
            {
                name: data.name,       // matches {{name}}
                message: data.message, // matches {{message}}
                // matches the parameters of our email template in EmailJS
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
            );

            alert("Message sent successfully!");
        } catch (error) {
            console.error("EmailJS error:", error);
            alert("Failed to send message. Please try again later.");
        }
        };
        
        
    return (
        <div
            className="
            container mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-10
            bg-white/20 dark:bg-gray-900/30 
            rounded-2xl
            dark:border-yellow-500/30
            grid md:grid-cols-2 md:gap-10 gap-6
            p-6 md:p-10 backdrop-blur-xl border border-yellow-500/30
            shadow-[0_0_25px_#facc15] dark:shadow-[0_0_25px_#facc15]

        ">
            
            {/* IMAGE + ANIMATION */}
            <div className="relative font-mono font-bold tracking-wide">
                
                <img 
                    src="/Edgerunners.jpg"
                    className="
                    rounded-xl blur-sm max-w-3xl mx-auto aspect-video object-cover 
                    brightness-90
                    w-full h-full
                "
                />

                {/* Gradient overlay for text visibility */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent rounded-xl"></div>

                {/* Centered animated text */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="
                        font-mono text-xl md:text-2xl 
                        text-yellow-300 dark:text-emerald-400
                        drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]
                    ">
                        <TypeAnimation
                            sequence={[
                                "Open to Collaborations and New Opportunities.",
                                2000,
                                "If you think it, I can build it!",
                                2000,
                            ]}
                            speed={60}
                            deletionSpeed={90}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}
                    className="
                    font-mono flex flex-col items-center 
                    bg-white/10 dark:bg-gray-800/40 
                    p-6 rounded-xl backdrop-blur-sm shadow-md
                    border border-white/20 dark:border-gray-700/30
                "
                >
                    {/* NAME */}
                    <label className="self-start mb-1 text-gray-700 dark:text-gray-200">
                        Your Name:
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name Here"
                        {...register("name",
                            {
                                required: "Name cannot be empty",
                            },
                        )}
                        className="
                            w-full md:w-4/5 px-4 py-3 mb-4
                            rounded-lg border border-gray-300 dark:border-gray-700
                            bg-white/80 dark:bg-gray-900/50 
                            placeholder:text-gray-500 dark:placeholder:text-gray-400
                            focus:outline-none focus:ring-2 
                            focus:ring-emerald-400 dark:focus:ring-yellow-400
                            shadow-sm transition-all duration-300
                        "
                    />
                    {errors.name && 
                    <span className="font-mono text-red-500 text-sm">
                    {errors.name.message}
                    </span>}

                    {/* EMAIL */}
                    <label className="self-start mb-1 text-gray-700 dark:text-gray-200">
                        Your Email:
                    </label>
                    <input
                        type="email"
                        placeholder="nightcity@gmail.com"
                        {...register("email",
                            {
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Enter a valid email"
                                },
                                required: "Email cannot be empty"

                        }
                )}
                        className="
                            w-full md:w-4/5 px-4 py-3 mb-4
                            rounded-lg border border-gray-300 dark:border-gray-700
                            bg-white/80 dark:bg-gray-900/50 
                            placeholder:text-gray-500 dark:placeholder:text-gray-400
                            focus:outline-none focus:ring-2 
                            focus:ring-emerald-400 dark:focus:ring-yellow-400
                            shadow-sm transition-all duration-300
                        "
                    />
                    {errors.email && <span className="font-mono text-red-500 text-sm">{errors.email.message}</span>}

                    {/* MESSAGE */}
                    <label className="self-start mb-1 text-gray-700 dark:text-gray-200">
                        Your Message:
                    </label>
                    <textarea
                        placeholder="Write something..."
                        {...register("message",
                        {
                        required: "Message cannot be empty",
                        }
                        )}
                        className="
                            w-full md:w-4/5 px-4 py-3 mb-4 
                            h-32 resize-none
                            rounded-lg border border-gray-300 dark:border-gray-700
                            bg-white/80 dark:bg-gray-900/50
                            placeholder:text-gray-500 dark:placeholder:text-gray-400
                            focus:outline-none focus:ring-2 
                            focus:ring-emerald-400 dark:focus:ring-yellow-400
                            shadow-sm transition-all duration-300
                            dark:text-stone-50
                        "
                    ></textarea>
                    {errors.message && 
                    <span className="font-mono text-red-500 text-sm">
                        {errors.message.message}
                    </span>
                    }

                    {/* SEND BUTTON */}
                    <button
                    type="submit"
                        className="
                            px-6 py-2 text-sm rounded-lg
                            border border-emerald-500 dark:border-yellow-400
                            text-emerald-700 dark:text-yellow-400
                            bg-emerald-50/40 dark:bg-gray-800/50
                            backdrop-blur-sm shadow-md
                            transition-all duration-300 
                            hover:scale-110
                            hover:shadow-[0_0_18px_rgba(16,185,129,0.6)]
                            dark:hover:shadow-[0_0_18px_rgba(250,204,21,0.6)]
                            mt-3
                        "
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;
