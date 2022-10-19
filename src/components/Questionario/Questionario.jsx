import React from "react";
import "./questionario.css";
import ChatIcon from "./img/chat.png";
import HomeIcon from "./img/home.png";
import NotificationIcon from "./img/notification.png";
import IconPerfil from "./img/foto-perfil.png";
import NextIcon from "./img/next.png"

export default function Questionario() {
  return (
    <>
      <nav class="nav">
        <div>
          <h1>SafeJob</h1>
        </div>

        <ul class="nav-icons">
          <li>
            <a href="#">
              <img src={HomeIcon}></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ChatIcon}></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={NotificationIcon}></img>
            </a>
          </li>
          <li>
            <div class="icon-perfil">
              <img src={IconPerfil}></img>
            </div>{" "}
          </li>
        </ul>
      </nav>

      <main>
        <div class="questionario">
          <div class="titulo">
            <h1>Questionário de Personalidade</h1>
          </div>

          <hr class="linha" />

          <div class="perguntas">
            <div class="titulo-perguntas">
              <h3>Eu tenho objetivos pessoais.</h3>
            </div>
            <div class="container-perguntas">
                <div class="concordo">
                    <h2>Concordo</h2>
                </div>
                <div class="opcoes">
                    <div class="concordo-maximo"></div>
                    <div class="concordo-medio"></div>
                    <div class="concordo-minimo"></div>
                    <div class="neutro"></div>
                    <div class="discordo-minimo"></div>
                    <div class="discordo-medio"></div>
                    <div class="discordo-maximo"></div>
                </div>
                <div class="discordo">
                    <h2>Discordo</h2>
                </div>
            </div>
          </div>
            <div class="perguntas">
                    <div class="titulo-perguntas">
                    <h3>Eu Aprendo coisas novas constantemente.</h3>
                    </div>
                    <div class="container-perguntas">
                        <div class="concordo">
                            <h2>Concordo</h2>
                        </div>
                        <div class="opcoes">
                            <div class="concordo-maximo"></div>
                            <div class="concordo-medio"></div>
                            <div class="concordo-minimo"></div>
                            <div class="neutro"></div>
                            <div class="discordo-minimo"></div>
                            <div class="discordo-medio"></div>
                            <div class="discordo-maximo"></div>
                        </div>
                        <div class="discordo">
                            <h2>Discordo</h2>
                        </div>
                    </div>
            </div>

            <div class="perguntas">
                <div class="titulo-perguntas">
                <h3>Eu acho dificil me apresentar para outras pessoas.</h3>
                </div>
                <div class="container-perguntas">
                    <div class="concordo">
                        <h2>Concordo</h2>
                    </div>
                    <div class="opcoes">
                        <div class="concordo-maximo"></div>
                        <div class="concordo-medio"></div>
                        <div class="concordo-minimo"></div>
                        <div class="neutro"></div>
                        <div class="discordo-minimo"></div>
                        <div class="discordo-medio"></div>
                        <div class="discordo-maximo"></div>
                    </div>
                    <div class="discordo">
                        <h2>Discordo</h2>
                    </div>
                </div>
            </div>

            <div class="perguntas">
                <div class="titulo-perguntas">
                <h3>As minhas metas e responsabilidades são claras.</h3>
                </div>
                <div class="container-perguntas">
                    <div class="concordo">
                        <h2>Concordo</h2>
                    </div>
                    <div class="opcoes">
                        <div class="concordo-maximo"></div>
                        <div class="concordo-medio"></div>
                        <div class="concordo-minimo"></div>
                        <div class="neutro"></div>
                        <div class="discordo-minimo"></div>
                        <div class="discordo-medio"></div>
                        <div class="discordo-maximo"></div>
                    </div>
                    <div class="discordo">
                        <h2>Discordo</h2>
                    </div>
                </div>
            </div>
            
            <div class="perguntas">
                <div class="titulo-perguntas">
                <h3>Eu tento responder os meus e-mails o mais rapidamente possível e não suporto uma caixa de entrada bagunçada.</h3>
                </div>
                <div class="container-perguntas">
                    <div class="concordo">
                        <h2>Concordo</h2>
                    </div>
                    <div class="opcoes">
                        <div class="concordo-maximo"></div>
                        <div class="concordo-medio"></div>
                        <div class="concordo-minimo"></div>
                        <div class="neutro"></div>
                        <div class="discordo-minimo"></div>
                        <div class="discordo-medio"></div>
                        <div class="discordo-maximo"></div>
                    </div>
                    <div class="discordo">
                        <h2>Discordo</h2>
                    </div>
                </div>
            </div>

            <div class='container-botao'>

              <button type="button" class='botao bounce-effect' ><span>Próximo</span></button>
              <img src={NextIcon}></img>
            
            </div>

        </div>
        
      </main>
    </>
  );
}
