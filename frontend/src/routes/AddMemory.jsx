import { useState } from "react";
import axios from "axios";

import "./AddMemory.css";
const AddMemory = () => {
  return (
    <div className="addmemory-page">
      <h2>Crie sua nova memória</h2>
      <form>
        <label>
          <p>Título</p>
          <input
            type="text"
            placeholder="Define seu título"
            name="title"
            required
          />
        </label>
        <label>
          <p>Descrição</p>
          <textarea
            placeholder="Fale sobre sua memória"
            name="description"
            required
          ></textarea>
        </label>
        <label>
          <p>Imagem:</p>
          <input type="file" name="image" />
        </label>
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default AddMemory;
