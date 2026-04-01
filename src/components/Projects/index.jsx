import './styles.css';
import Card from '../Card';

export default function Projects() {
  return (
    <div className='projects'>
      <span className='projects-title'>[Projetos]</span>

      <div className='projects-list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
};