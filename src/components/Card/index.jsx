import './styles.css';
import imageTest from '../../images/image-test.png';

export default function Card() {
  return (
    <a href='#' target='_blank' rel="noopener noreferrer" className='card'>
      <span className='card-title'>Título do Projeto</span>
      <img className='card-image' src={imageTest} alt="Descrição da imagem" />
      <p>Descrição do projeto, tecnologias utilizadas e outros detalhes relevantes.</p>
    </a>
  )
};