import React from "react";
import "./questionario.css";
import ChatIcon from "./img/chat.png";
import HomeIcon from "./img/home.png";
import NotificationIcon from "./img/notification.png";
import IconPerfil from "./img/foto-perfil.png";
import NextIcon from "./img/next.png"
import { Link } from "react-router-dom";

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
              <h3>Meu trabalho é Significativo.</h3>
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
                    <h3>Eu me sinto animado para trabalhar.</h3>
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
                <h3>Eu gosto de usar ferramentas de organização como agendas e listas..</h3>
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
                <h3>Mesmo um pequeno erro pode fazer com que eu duvide de minhas habilidades e conhecimentos gerais.</h3>
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
                <h3>Eu gosto de participar de atividades em grupo.</h3>
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

            <Link to="/questionario3">
              <button type="button" class='botao bounce-effect' onClick="backToTop();"><span>Próximo</span></button>
            </Link>
              <img src={NextIcon}></img>
            
            </div>

        </div>
        
      </main>
    </>
  );
}
