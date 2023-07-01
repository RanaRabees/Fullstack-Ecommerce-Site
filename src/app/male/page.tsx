import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Male() {
    return (
        <>
            <div className="w-full my-32">
                <div className='grid grid-cols-1 text-center md:grid-cols-3 gap-10 px-6'>
                    <div className="item py-4">
                        <Link href="/Flex-Push-Button-Bomber">
                            <Image
                                src="/slide7.png"
                                width={600}
                                height={800}
                                alt="Flex Push Button Bomber"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Flex Push Button Bomber</h3>
                            <span className="font-extrabold text-xl tracking-widest">$225</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Raglan-Sweatshirt">
                            <Image
                                src="/slide10.png"
                                width={600}
                                height={800}
                                alt="Raglan Sweatshirt"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Raglan Sweatshirt</h3>
                            <span className="font-extrabold text-xl tracking-widest">$195</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}