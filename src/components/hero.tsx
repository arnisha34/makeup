
type HeroType = {
  alt: string,
  url: string,
  title: string
}

export const Hero:React.FC<HeroType> = ({alt,url,title}) => {
  return (
    <div className="hero-image overlay">
      <img src={url} alt={alt} />
      <div className="hero-text"><b>{title}</b></div>
    </div>
  )
}