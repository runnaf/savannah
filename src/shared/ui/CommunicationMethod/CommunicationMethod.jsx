export const CommunicationMethod = ({alt, src}) => {
    return (
        <li>
            <img alt={alt} src={src}/>
            <span className="visaully-hidden">{alt}</span>
        </li>
    )
}