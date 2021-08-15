import React from "react";

import { Contador } from './components/contador/Contador'
import { Input } from './components/formulario/Input'
import { Card } from './components/layout/Card'
import { TabelaProdutos } from './components/repeticao/TabelaProdutos'
import { ListaAlunos } from './components/repeticao/ListaAlunos'
import { ParOuImpar } from './components/condicionais/ParOuImpar'
import { UsuarioInfo } from "./components/condicionais/UsuarioInfo";
import { Primeiro } from "./components/basicos/Primeiro";
import { ComponentParametro } from "./components/basicos/ComponentParametro";
import { Fragmento } from "./components/basicos/Fragmento";
import { NumeroAleatorio } from "./components/basicos/NumeroAleatorio";
import { Familia } from './components/basicos/Familia'
import { FamiliaMembro } from './components/basicos/FamiliaMembro'

export function App() {
  return (
    <div>
      <div className="header">
        <h1 className="titulo">Fundamentos de React </h1>
        <small>
          by <strong>Manoel Neto</strong>
        </small>
      </div>
      <div className="container">
        <div className="row">

          <div className="col-sm-12 col-md-6">
            <Card title="#10 Contador" color="#bcf080">
              <Contador />
            </Card>
          </div>
          <div className="col-sm-12 col-md-6">
            <Card title="#09 Input onChange" color="#160000">
              <Input />
            </Card>
          </div>
          <div className="col-sm-12 col-md-6">
            <Card title="#08 Par ou Ímpar" color="#ee5253">
              <ParOuImpar numero={12} />
              <UsuarioInfo usuario={{ nome: 'Manoel' }} />
              <UsuarioInfo usuario={{ nome: '' }} />


            </Card>
          </div>
          <div className="col-sm-12 col-md-6">
            <Card title="#07 Lista de Produtos" color="#ff9ff3">
              <TabelaProdutos >

              </TabelaProdutos>
            </Card>
          </div>
          <div className="col-sm-12 col-md-6">
            <Card title="#06 Lista de Alunos" color="#6b9420">
              <ListaAlunos >

              </ListaAlunos>
            </Card>
          </div>

          <div className="col-sm-12 col-md-6">
            <Card title="#05 Componente Com Filhos" color="#00d2d3">
              <Familia sobrenome="Potter" >
                <FamiliaMembro name="Manoel" />
                <FamiliaMembro name="Rydan" />
                <FamiliaMembro name="Emma" />
              </Familia>
            </Card>
          </div>

          <div className="col-sm-12 col-md-6">
            <Card title="#04 Valor Aleatório" color="#800080">
              <NumeroAleatorio minimo={10} maximo={20} />
            </Card>
          </div>

          <div className="col-sm-12 col-md-6">
            <Card title="#03 React Fragmento" color="#080">
              <Fragmento />
            </Card>
          </div>
          <div className="col-sm-12 col-md-6">

            <Card title="#02 Componente Com Parâmetros" color="#DC143C">
              <ComponentParametro name="Manoel" media={7.3} />
            </Card>
          </div>

          <div className="col-sm-12 col-md-6">
            <Card title="#01 Primeiro Componente" color="#B0E0E6">
              <Primeiro />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
