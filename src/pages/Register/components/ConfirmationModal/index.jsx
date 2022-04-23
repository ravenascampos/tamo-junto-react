import React from "react";
import { Link } from "react-router-dom";
import playStore from "../../../../assets/icons/play-store.svg";
import appleStore from "../../../../assets/icons/apple-store.svg";

export function ConfirmationModal() {
  return (
    <div>
      <div>
        <p>Falta só mais um passo:</p>
        <p>
          Por favor, acesse seu e-mail [email@email.com.br] e procure o nosso
          e-mail de Confirmação de cadastro.
        </p>
        <p>
          Ele pode estar na sua caixa de entrada ou de spam/lixo eletrônico.
        </p>
        <p>
          Aí é só abrir, clicar no link e estaremos prontos pra estar #juntos!
        </p>
      </div>
      <Link to={"/"}>
        <a>JÁ CONFIRMEI NO MEU E-MAIL</a>
      </Link>

      <div>
        <Link to={"/"}>
          <a>
            <img src={playStore} alt="voltar para home" />
          </a>
        </Link>
        <Link to={"/"}>
          <a>
            <img src={appleStore} alt="voltar para home" />
          </a>
        </Link>
      </div>
      <button>REENVIAR E-MAIL</button>
    </div>
  );
}
