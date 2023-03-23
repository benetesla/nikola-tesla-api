
#  Nikola Tesla  API

---

Api sobre as principais invenções do nosso grandiosíssimo Nikola tesla.

Esta api aborda alguns tópicos do livro: As fantásticas invenções de Nikola Tesla,.
Usando um backend com um json Server e um frontend com css-modules, esta api visa dar o pontapé inicial e atiçar a curiosidade sobre a vida das invenções de Nikola tesla.
Backend: Json Server, nessa backend temos  algumas patentes que eu bene-tesla mais gosto, claro não coloquei todas as patentes(mais de 300) nesse repositório, até porque não daria tempo de deixar esse projeto pronto em um período de 5 dia, tentei resumir ao máximo o conteúdo do livro, se quiser saber sobre a vida tesla recomendo a leitura do mesmo.
frontend: Nossa aplicação é feita inteiramente com reactjs e css module, nao temos grandes novidades aqui.


---


## Livro 

 - [As fantatiscas Invençoes de Nikola Tesla](https://www.amazon.com.br/As-Fant%C3%A1sticas-Inven%C3%A7%C3%B5es-Nikola-Tesla/dp/8537010006)
 
# Demonstracao

![Captura de Tela (96)](https://user-images.githubusercontent.com/78994881/226660167-cd91e25f-3e64-49c4-a578-37eadc8ede4e.png)
![Captura de Tela (97)](https://user-images.githubusercontent.com/78994881/226660186-b990f42e-64b3-49ad-ad40-6254b0a7991e.png)

## Apêndice

O JSON Server é uma biblioteca que permite criar rapidamente uma API REST fake para testar suas aplicações. Ele é usado para criar uma Fake Rest API.


## Autores

- [@BeneTesla](https://github.com/benetesla)


## Stack utilizada

**Front-end:** 
![Bootstrao](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![IconsFontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)


**Back-end:** 
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)


## Documentação da API

#### Retorna todas as patentes

```http
  GET http://localhost:3005/api/Patentes
```
## Fetch em patentes

```javascript
import Axios from 'axios'

const [datePatentes, setDatePatentes] = useState ([])

useEffect (() => {
    Axios.get ('http://localhost:3005/api/Patentes').then (res => {
      setDatePatentes (res.data)
      console.log(res.data)
    })
  }, [])
```

#### Retorna todas as correntes/Que foram realizados experimentos.

```http
  GET http://localhost:3005/api/Corrents
```

```javascript
import Axios from 'axios'
 const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3005/api/Corrents')
            .then(response => setData(response.data));
    }, []);
```

#### Retorna todas os experimentos

```http
  GET http://localhost:3005/api/Exprimentos
```

```javascript
import Axios from 'axios'
 const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3005/api/Exprimentos')
            .then(response => setData(response.data));
    }, []);
```

