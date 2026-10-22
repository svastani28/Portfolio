export default function GalleryGrid({ images, altPrefix, onSelect }) {
  return (
    <div className="modal-gallery">
      {images.map((src, index) => {
        const alt = `${altPrefix} ${index + 1}`
        return (
          <button
            key={src}
            type="button"
            className="modal-gallery-item"
            onClick={() => onSelect({ src, alt })}
            aria-label={`Expand ${alt}`}
          >
            <img src={src} alt={alt} loading="lazy" />
          </button>
        )
      })}
    </div>
  )
}
