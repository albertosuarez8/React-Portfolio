import React from 'react'

function Bio(props) {
    return (
        <>
        <figure className="bg-zinc-300 rounded-xl p-8 dark:bg-slate-800 opacity-75 w-9/12 max-[640px]:h-7/12 max-[640px]:overflow-y-scroll">
            <img className="w-48 h-56 rounded-xl mx-auto" src={props.image} alt=""/>
                <div className="p-2 space-y-4">
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

export default Bio;