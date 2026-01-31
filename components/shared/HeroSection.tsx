import Image from "next/image";

const HeroSection = ({ src, alt, text }: { src: string, alt: string, text: string }) => {

  return (
    <>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '25vh',
        minHeight: '200px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          style={{ objectFit: 'cover', zIndex: 0 }}
        />

        <div className="container mx-auto px-10" style={{ position: 'relative', zIndex: 10, flexShrink: 0 }}>
          <section className="text-center space-y-6">
            <h1 className="h1" style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {text}
            </h1>
          </section>
        </div>
      </div>
    </>
  )
}

export default HeroSection;