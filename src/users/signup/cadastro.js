import { useState} from "react"
import './cadastro.css';

export default function UserSignup(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [nome, setNome] = useState();
    const [endereco, setEndereco] = useState();
    const [confirmSenha, setConfirmSenha] = useState();

    function handleSubmit(e){
        e.preventDefault();

        console.log(email+" - "+nome+" - "+endereco+" - "+senha+" - "+confirmSenha);
    }

    
    return (
            
        <>  
           <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Email ou Usuário"/>
                    </div>
                    <div>
                        <label for="Name" className="form-label">Nome:</label>
                        <input type="Name" onChange={(e) => setNome(e.target.value)} className="form-control" id="Name" placeholder="Nome"/>
                    </div>
                    <div>
                        <label for="Adreess" className="form-label">Endereço:</label>
                        <input type="Adreess" onChange={(e) => setEndereco(e.target.value)} className="form-control" id="Andreess" placeholder="Endereço"/>
                    </div>
                    <div className="mb-3">
                        <label for="pwd" className="form-label">Senha:</label>
                        <input type="password" onChange={(e) => setSenha(e.target.value)} className="form-control" id="pwd" placeholder="Senha"/>
                    </div>
                    <div>
                        <label for="pwd" className="form-label">Confirme Senha:</label>
                        <input type="password" onChange={(e) => setConfirmSenha(e.target.value)} className="form-control" id="pwd" placeholder="Confirme Senha"/>
                    </div>
                    <button type="submit" className="btn-primary">Cadastrar</button>
                </form>     
        </>
   
    )

}