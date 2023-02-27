import React from 'react'



function Card(props) {

    const linkHandler = () => {
        window.open(props.site, "_blank");
    }


    return (
        <>
        <figure className="bg-zinc-300 opacity-75 rounded-xl p-8 dark:bg-slate-800 mb-8 w-11/12 h-[fit-content]">
            <img className="cursor-pointer w-48 h-48 rounded-full mx-auto hover:opacity-50" src={props.image} alt="" width="384" height="512" onClick={linkHandler}/>
                <div className="pt-6 space-y-4">
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