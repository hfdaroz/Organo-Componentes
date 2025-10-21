import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

  const inicial = [
    {
      nome: 'JOAO GABRIEL',
      cargo: 'Desenvolvedor de software e instrutor',
      imagem: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwYWxlYXQlQzMlQjNyaWF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
      time: times[0].nome
    },
    {
      nome: 'DAVI MOREIRA',
      cargo: 'Engenheiro de Software',
      imagem: 'https://i.pinimg.com/736x/ae/fc/50/aefc508fe307f8af801e6ecf4c595178.jpg',
      time: times[0].nome
    },
    {
      nome: 'CAIO BRUNO',
      cargo: 'Desenvolvedor Python e JavaScript',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphvdfYa6BPfQDqlj25JBSufPU6Ur0y4IHnA&s',
      time: times[0].nome
    },
    {
      nome: 'MARCUS VINICIUS',
      cargo: 'Cientista de Dados',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEiLK-yUe0M1LmzpE0gNGLc7KuUldJgTPXg&s',
      time: times[0].nome
    },
    {
      nome: 'JULIANAI AMSE',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEiLK-yUe0M1LmzpE0gNGLc7KuUldJgTPXg&s',
      time: times[1].nome
    },
    {
      nome: 'JOAO GABRIEL',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwYWxlYXQlQzMlQjNyaWF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
      time: times[1].nome
    },
    {
      nome: 'DAVI MOREIRA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://i.pinimg.com/736x/ae/fc/50/aefc508fe307f8af801e6ecf4c595178.jpg',
      time: times[1].nome
    },
    {
      nome: 'CAIO BRUNO',
      cargo: 'Cientista de Dados',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphvdfYa6BPfQDqlj25JBSufPU6Ur0y4IHnA&s',
      time: times[1].nome
    },
    {
      nome: 'MARCUS VINICIUS',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEiLK-yUe0M1LmzpE0gNGLc7KuUldJgTPXg&s',
      time: times[2].nome
    },
    {
      nome: 'JOAO GABRIEL',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwYWxlYXQlQzMlQjNyaWF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
      time: times[2].nome
    },
    {
      nome: 'DAVI MOREIRA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://i.pinimg.com/736x/ae/fc/50/aefc508fe307f8af801e6ecf4c595178.jpg',
      time: times[2].nome
    },
    {
      nome: 'CAIO BRUNO',
      cargo: 'Cientista de Dados',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphvdfYa6BPfQDqlj25JBSufPU6Ur0y4IHnA&s',
      time: times[2].nome
    },
    {
      nome: 'MARCUS VINICIUS',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEiLK-yUe0M1LmzpE0gNGLc7KuUldJgTPXg&s',
      time: times[3].nome
    },
    {
      nome: 'JOAO GABRIEL',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwYWxlYXQlQzMlQjNyaWF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
      time: times[3].nome
    },
    {
      nome: 'DAVI MOREIRA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://i.pinimg.com/736x/ae/fc/50/aefc508fe307f8af801e6ecf4c595178.jpg',
      time: times[3].nome
    },
    {
      nome: 'CAIO BRUNO',
      cargo: 'Cientista de Dados',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphvdfYa6BPfQDqlj25JBSufPU6Ur0y4IHnA&s',
      time: times[3].nome
    },
    {
      nome: 'MARCUS VINICIUS',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEiLK-yUe0M1LmzpE0gNGLc7KuUldJgTPXg&s',
      time: times[4].nome
    },
    {
      nome: 'JOAO GABRIEL',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwYWxlYXQlQzMlQjNyaWF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
      time: times[4].nome
    },
    {
      nome: 'DAVI MOREIRA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://i.pinimg.com/736x/ae/fc/50/aefc508fe307f8af801e6ecf4c595178.jpg',
      time: times[4].nome
    },
    {
      nome: 'CAIO BRUNO',
      cargo: 'Cientista de Dados',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphvdfYa6BPfQDqlj25JBSufPU6Ur0y4IHnA&s',
      time: times[4].nome
    },
    {
      nome: 'MARCUS VINICIUS',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEiLK-yUe0M1LmzpE0gNGLc7KuUldJgTPXg&s',
      time: times[5].nome
    },
    {
      nome: 'JOAO GABRIEL',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVzc29hJTIwYWxlYXQlQzMlQjNyaWF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',
      time: times[5].nome
    },
    {
      nome: 'DAVI MOREIRA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://i.pinimg.com/736x/ae/fc/50/aefc508fe307f8af801e6ecf4c595178.jpg',
      time: times[5].nome
    },
    {
      nome: 'CAIO BRUNO',
      cargo: 'Cientista de Dados',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphvdfYa6BPfQDqlj25JBSufPU6Ur0y4IHnA&s',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)


  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
