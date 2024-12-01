"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [url, setUrl] = useState("");
    const [shorturl, setShorturl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setUrl("")
                setShorturl("")
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='flex items-center justify-center'>
            <div className='bg-blue-700 bg-opacity-40 p-8 space-y-4'>
                <h1 className='text-3xl text-center'>
                    Generate your url
                </h1>
                <div className='flex flex-col space-y-4'>
                    <input className='focus:outline-purple-600 rounded-lg' value={url} type='text' placeholder='Enter url' onChange={(e) => setUrl(e.target.value)} />
                    <input className='focus:outline-purple-600 rounded-lg' value={shorturl} type='text' placeholder='Enter Short url' onChange={(e) => setShorturl(e.target.value)} />
                    <button onClick={generate} className='w-full text-white bg-purple-600 hover:bg-purple-800 rounded-lg'>Generate</button>
                    <div className='h-12 w-full'>{
                        generate && <code>
                            <Link target='_blank' href={generated} >{generated}</Link>
                        </code>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page