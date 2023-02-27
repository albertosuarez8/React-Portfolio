import React from 'react';
import { TextInput, Label, Button, Textarea } from 'flowbite-react';
import { MdEmail } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

function Form() {
    return (
        <form id="form" className="flex flex-col gap-4 w-[90%] overflow-y-scroll">
            <div>
                <div className="mb-2 block">
                    <Label className='text-zinc-300'
                        htmlFor="username"
                        value="Name"
                    />
                </div>
                <TextInput
                    id="username3"
                    placeholder="Your Name"
                    required={true}
                    icon={FaUser}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label className='text-zinc-300'
                        htmlFor="email4"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email4"
                    type="email"
                    icon={MdEmail}
                    placeholder="name@gmail.com"
                    required={true}
                />
            </div>
            <div id="textarea">
                <div className="mb-2 block">
                    <Label className='text-zinc-300'
                        htmlFor="comment"
                        value="Your message"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required={true}
                    rows={4}
                />
            </div>
            <Button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ' type="submit">
                Submit
            </Button>
        </form>
    );
}

export default Form;