export default function Feature({image, altText, title, description}){
    return (
        <div class="feature-item">
            <img
                src={image}
                alt={altText}
                class="feature-icon"
            />
            <h3 class="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}