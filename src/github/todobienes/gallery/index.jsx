import "./index.styles.css";

export const Gallery = ({ assets }) => {
  return (
    <section className="sectionRoot">
      {assets?.map(({ id, src, alt }) => (
        <img key={id} src={src} alt={alt} />
      ))}
    </section>
  );
};
