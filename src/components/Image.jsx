export default function Image({ imgURL, alt, className }) {
    return <img src={imgURL} alt={alt} className={className} />
}