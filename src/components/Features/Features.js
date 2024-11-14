function Features({ title, description, image }) {
   return (
      <div className="feature-item">
         <img src={image} alt="Features Icon" className="feature-icon" />
         <h3 className="feature-item-title">{title}</h3>
         <p>{description}</p>
      </div>
   );
}

export default Features;
