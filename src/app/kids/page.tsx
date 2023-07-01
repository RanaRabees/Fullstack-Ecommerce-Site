import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Kids() {
    return (
        <>
            <div className="w-full my-32">
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 px-6'>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy1.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                </div>
                {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-10 px-6'>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/girl1.jpg"
                                width={600}
                                height={800}
                                alt="Girl"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Girls Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/girl2.png"
                                width={600}
                                height={800}
                                alt="Girl"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Girls Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/girl3.jpg"
                                width={600}
                                height={800}
                                alt="Girl"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Girls Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy1.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy2.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy3.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/girl4.png"
                                width={600}
                                height={800}
                                alt="Girl"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Girls Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/girl5.png"
                                width={600}
                                height={800}
                                alt="Girl"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Girls Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/girl6.png"
                                width={600}
                                height={800}
                                alt="Girl"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Girls Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy4.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy5.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy6.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Girls-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/girl7.png"
                                width={600}
                                height={800}
                                alt="Girl"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Girls Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                    <div className="item py-4">
                        <Link href="/Little-Boy-Clothes">
                            <Image className="w-[600px] h-[300px]"
                                src="/boy7.png"
                                width={600}
                                height={800}
                                alt="Boy"
                            />
                            <h3 className="font-extrabold text-xl tracking-widest">Little Boy Clothes</h3>
                            <span className="font-extrabold text-xl tracking-widest">$220</span>
                        </Link>
                    </div>
                </div> */}
            </div>
        </>
    )
}
