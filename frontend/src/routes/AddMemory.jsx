import { useState } from "react";
import axios from "../axios-config";

import "./AddMemory.css";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const AddMemory = () => {
  const [inputs, setinputs] = useState({});
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputs.title || !inputs.description) {
      toast.error("Preencha os campos corretamente!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);

    try {
      const response = await axios.post("/memories", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(response.data.msg);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "image") {
      setImage(event.target.files[0]);
    } else {
      setinputs({ ...inputs, [event.target.name]: event.target.value });
    }
  };

  return (
    <div className="addmemory-page">
      <h2>Crie sua nova memória</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Título</p>
          <input
            type="text"
            placeholder="Define seu título"
            name="title"
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Descrição</p>
          <textarea
            placeholder="Fale sobre sua memória"
            name="description"
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          <p>Imagem:</p>
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default AddMemory;
