import axios from "../axios-config";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import "./Home.css";

const Home = () => {
  const [memories, setMemories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMemories = async () => {
      const res = await axios.get("/memories");

      setMemories(res.data);
    };

    getMemories();
  }, []);

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("ID da memória não está definido.");
      return;
    }

    console.log(`Tentando deletar memória com ID: ${id}`);

    try {
      const res = await axios.delete(`/memories/${id}`);

      if (res.status === 200) {
        setMemories(memories.filter(memory => memory._id !== id));
        navigate("/");
        toast.success(res.data.msg);
      }
    } catch (error) {
      console.error("Erro ao tentar deletar memória:", error);
      if (error.response) {
        console.error("Erro resposta:", error.response);
        toast.error(
          `Erro: ${error.response.status} - ${error.response.statusText} - ${error.response.data.msg || error.response.data}`
        );
      } else if (error.request) {
        console.error("Erro requisição:", error.request);
        toast.error("Nenhuma resposta recebida do servidor.");
      } else {
        console.error("Erro ao configurar a requisição:", error.message);
        toast.error("Erro ao configurar a requisição.");
      }
    }
  };
  

  return (
    <div className="home">
      <h2>Veja as últimas memórias</h2>
      <div className="memories-container">
        {memories.length > 0 &&
          memories.map((memory) => (
            <div className="memory" key={memory._id}>
              <img
                src={`${axios.defaults.baseURL}${memory.src}`}
                alt={memory.title}
              />
              <p>{memory.title}</p>
              <Link className="btn" to={`/memories/${memory._id}`}>
                Comentar
              </Link>
              <button className="btn" onClick={() => handleDelete(memory._id)}>
                Excluir memória
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
