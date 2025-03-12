import { useState } from "react";

interface UserFormData {
  nome: string;
  email: string;
  senha: string;
  tipoUser_id: string;
  iban: string;
  nome_titular: string;
}

export default function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    nome: "",
    email: "",
    senha: "",
    tipoUser_id: "",
    iban: "",
    nome_titular: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-4">Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block font-semibold">Nome</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="senha" className="block font-semibold">Senha</label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="tipoUser_id" className="block font-semibold">Tipo de Usuário</label>
          <input type="text" name="tipoUser_id" value={formData.tipoUser_id} onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="iban" className="block font-semibold">IBAN</label>
          <input type="text" name="iban" value={formData.iban} onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label htmlFor="nome_titular" className="block font-semibold">Nome do Titular</label>
          <input type="text" name="nome_titular" value={formData.nome_titular} onChange={handleChange} required className="w-full p-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-green-800 text-white p-2 rounded-md hover:bg-green-700">Cadastrar</button>
      </form>
    </div>
  );
}
