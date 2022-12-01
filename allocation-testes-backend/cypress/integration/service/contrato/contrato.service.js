import { token } from "../../../support/commands";
import Ajv from "ajv";

const ajv = new Ajv({allErros: true, verbose: true});
const API_BASE = Cypress.env('API_BASE');

export default class ContratoService{

  contratoProgramaRequest(pagina, tamanho, contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/programa`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
      qs: {
        pagina: pagina,
        tamanho: tamanho,
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  contratoClienteRequest(pagina, tamanho, contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/cliente`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
      qs: {
        pagina: pagina,
        tamanho: tamanho,
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  contratoAvaliacaoRequest(pagina, tamanho, contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/avaliacao`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
      qs: {
        pagina: pagina,
        tamanho: tamanho,
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  contratoVagaRequest(pagina, tamanho, contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/vaga`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
      qs: {
        pagina: pagina,
        tamanho: tamanho,
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  contratoAlunoRequest(pagina, tamanho, contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/aluno`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
      qs: {
        pagina: pagina,
        tamanho: tamanho,
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  
  contratoAlunosDisponiveisRequest(contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/aluno/disponiveis`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  contratoTecnologiaRequest(nomeTecnologia, page, size, contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/tecnologia/tecnologia-busca`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
      qs: {
        nomeTecnologia: nomeTecnologia,
        page: page,
        size: size,
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  
  contratoUsuarioRequest(pagina, tamanho, contrato) {
    cy.request({
      method: 'GET',
      url: `${API_BASE}/usuario/listAllUsers`,
      failOnStatusCode: false,
      headers: {
        authorization: token,
        "Content-Type": "application/JSON"
      },
      qs: {
        pagina: pagina,
        tamanho: tamanho,
      },
    }).then((response) => {
      // pegar o arquivo (Schema) pasta fixtures e passar como parâmetro
      cy.fixture(contrato).then((contrato) => {
        // compilar esase arquivo, (jsonSchema) 
        const validate = ajv.compile(contrato)
  
        // response da api (validações)
        const responseApi = validate(response.body)
  
        // Validação (Error)
        if (!responseApi) cy.log(validate.errors).then(()=>{
          throw new Error('Falha do contrato')
        });
      });
    });
  };

  
  
}