import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Repositories, Form } from './styles';

interface Repository {
  fullName: string;
  description: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a key="GitHubRepository" href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/82897913?v=4"
            alt="RAZ"
          />
          <div>
            <strong>GitHubRepository</strong>
            <p>Descrição descritiva do projeto</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
      <Repositories>
        <a key="GitHubRepository" href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/82897913?v=4"
            alt="RAZ"
          />
          <div>
            <strong>GitHubRepository</strong>
            <p>Descrição descritiva do projeto</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
      <Repositories>
        <a key="GitHubRepository" href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/82897913?v=4"
            alt="RAZ"
          />
          <div>
            <strong>GitHubRepository</strong>
            <p>Descrição descritiva do projeto</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
