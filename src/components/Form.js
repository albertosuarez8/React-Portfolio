import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextInput, Label, Button, Textarea } from 'flowbite-react';
import { MdEmail } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

function Form() {
    const form = useRef();
    const [isMessageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_xal2g96", "template_z4a6h0m", form.current, "K4x-ZLxUbOmTPvuVf")
            .then((result) => {
                console.log(result.text);
                setMessageSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    function messageSent() {
        console.log("message sent");
    };

    return (
        <>{isMessageSent ? <div className='text-zinc-300'>
            Message Sent!
        </div> : ""}
        <form ref={form} onSubmit={sendEmail} id="form" className="flex flex-col gap-4 w-[90%] overflow-y-scroll">
                <div>
                    <div className="mb-2 block">
                        <Label className='text-zinc-300'
                            htmlFor="username"
                            value="Name" />
                    </div>
                    <TextInput
                        id="username3"
                        placeholder="Your Name"
                        required={true}
                        icon={FaUser}
                        type="text"
                        name="user_name" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label className='text-zinc-300'
                            htmlFor="email4"
                            value="Your email" />
                    </div>
                    <TextInput
                        id="email4"
                        type="email"
                        icon={MdEmail}
                        placeholder="name@gmail.com"
                        required={true}
                        name="user_email" />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label className='text-zinc-300'
                            htmlFor="comment"
                            value="Your message" />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={true}
                        rows={4}
                        name="message" />
                </div>
                <Button value="send" className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ' type="submit">
                    Submit
                </Button>
            </form></>
    );
}

export default Form;