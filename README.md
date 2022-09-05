# Authenticating_JWT
Simple API Rest with JWT authentication 


Basic autentication do HTTP

API de autenticao com JWT 
- validacao do token
- solicitacao do MS para lista de produto
- junto com a solicitacao da lista de produtos é fornecido um token 
- após isso o MS de produtos faz a validacao do token no MS de autenticação
- MS de produtos pode responder a lista de produtos

==================================================================================

JWT - API REST

- CRUD usuarios
	GET/users 
	GET/users/:uuid
	POST/users
	PUT/users/:uuid
	DELETE/users/:uuid

- Autenticação
	POST/token
	POST/token/validate
