import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '../../../api/data'

const PortfolioList = () => {
  return (
    <section
      id="portfolio"
      className="pt-8 pb-16 md:pb-24 dark:bg-darkmode"
    >
      <div className="mx-auto flex max-w-[120rem] flex-wrap justify-center gap-[2.125rem] px-0 lg:px-[2.125rem]">
        {portfolioinfo.map((item, index) => (
          <Link key={index} href={`/portfolio/${item.slug ?? '#'}`}>
            <div className={`group w-[18rem] ${item.Class ?? ''}`}>
              <div className="relative overflow-hidden rounded-lg transition-all duration-500 group-hover:scale-110 cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                />
              </div>

              <h4 className="pt-[2.1875rem] pb-[0.3125rem] text-2xl font-bold text-midnight_text transition-colors group-hover:text-primary dark:text-white">
                {item.title}
              </h4>

              <p className="text-lg font-normal text-secondary transition-colors group-hover:text-primary dark:text-white/50">
                {item.info}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioList
