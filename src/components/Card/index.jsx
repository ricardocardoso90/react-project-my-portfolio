import './styles.css';

export default function Card({ link, title, image, description }) {
  return (
    <a
      href={link}
      target='_blank'
      rel="noopener noreferrer"
      className='card'
    >
      <span className='card-title'>{title}</span>
      <img src={image} className='card-image' alt={`Projeto ${title}`} />
      <p className='card-description'>{description}</p>
    </a>
  );
}