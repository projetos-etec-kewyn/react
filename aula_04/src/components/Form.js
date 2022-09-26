import {useState} from 'react'



function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        //console.log(nome)
        console.log(`Usuário ${nome} cadastrado com a senha ${senha} !`)
    }
    const [nome,setNome] = useState()
    const [senha, setSenha] = useState()
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        onChange={(e) => setNome(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password" 
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={(e) => setSenha(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input type="submit" value="Enviar"></input>
                </div>
            </form>
        </div>
    )
}
export default Form