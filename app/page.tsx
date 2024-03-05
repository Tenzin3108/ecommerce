import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </div>
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/image.png"
          alt="just Logo"
          width={200}
          height={150}
          priority
        />


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www2.hm.com/en_in/index.html"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
           hm{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            online shopping
          </p>
        </a>

        <a
          href="https://www.myntra.com/shop/women"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            myntra{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           online shopping
          </p>
        </a>

        <a
          href="https://www.amazon.in/b/?ie=UTF8&node=976389031&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_93axlkw0lm_e&adgrpid=90234497648&hvpone=&hvptwo=&hvadid=665006069900&hvpos=&hvnetw=g&hvrand=11143874952827242284&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062046&hvtargid=kwd-528976080&hydadcr=24606_2344259&gclid=CjwKCAiAopuvBhBCEiwAm8jaMe9ITnnhaKqli2ACO6Qab6mw1MRhGBLsr7IhQJdJwa-kxny_IHMQEBoCgwgQAvD_BwE"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            amazon{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            online book store
          </p>
        </a>

        <a
          href="https://blinkit.com/?source_caller=ui&af_dp=grofers%3A%2F%2Flayout%3Fwidget_layout_id%3Dbadges2023&deep_link_sub1=grofers%3A%2F%2Flayout%3Fwidget_layout_id%3Dbadges2023&shortlink=g35xvz5p&c=Homepage_share&pid=Badget_2023_v2&deep_link_value=grofers%3A%2F%2Flayout%3Fwidget_layout_id%3Dbadges2023&af_xp=custom"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            blinkit{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            grocery shopping
          </p>
        </a>
      </div>
    </main>
  );
}


