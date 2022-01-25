import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form style={{ margin: "0 auto" }} onSubmit={handleSubmit}>
      <label style={{ position: "relative", left: "26%" }} htmlFor="nome">
        Nome
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="email">
        Email
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="senha">
        Senha
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="senha"
        type="password"
        name="senha"
        value={form.senha}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="cep">
        CEP
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="cep"
        type="text"
        name="cep"
        value={form.cep}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="rua">
        Rua
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="rua"
        type="text"
        name="rua"
        value={form.rua}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="numero">
        Número
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="numero"
        type="text"
        name="numero"
        value={form.numero}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="bairro">
        Bairro
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="bairro"
        type="text"
        name="bairro"
        value={form.bairro}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="cidade">
        Cidade
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="cidade"
        type="text"
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
      />

      <label style={{ position: "relative", left: "26%" }} htmlFor="estado">
        Estado
      </label>
      <input
        style={{ width: "60rem", margin: "0 auto" }}
        id="estado"
        type="text"
        name="estado"
        value={form.estado}
        onChange={handleChange}
      />

      <button
        style={{
          position: "relative",
          top: "50%",
          left: "70.2%",
          marginTop: "1rem",
        }}
      >
        Enviar
      </button>
      {response && response.ok && (
        <p style={{ textAlign: "center" }}>Usuário Criado</p>
      )}
    </form>
  );
};

export default App;
