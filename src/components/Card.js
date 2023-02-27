import React from 'react'



function Card(props) {

    function linkHandler() 


    return (
        <>
        <figure className="md:flex bg-zinc-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 opacity-75 w-11/12 mb-8">
            <img className="cursor-pointer w-[27rem] h-24 md:h-auto rounded-[5px] mx-auto" src={props.image} alt="" width="384" height="512"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            {props.bio}
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {props.captionone}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {props.captiontwo}
                        </div>
                    </figcaption>
                </div>
        </figure>
        </>
    );
}

export default Card;