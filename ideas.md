salvar os arquivos num bucket
sincronizar a cada 10s?

Do que vou precisar?

- um bucket para salvar o front
- um bucket para salvar os arquivos: pastas publicas e privadas
- uma lambda para validar a chave:
  - guardar a chave na parameter store

Uma aplicação no front que:

- liste os arquivos
- leia arquivos (alguns arquivos são publicos), modo preview ou edição
- edite arquivos (somente quem tem a chave da aplicação pode editar)
- salve arquivos (somente quem tem a chave da aplicação pode salvar)
- crie arquivos (somente quem tem a chave da aplicação pode criar)
  arquivos apenas em markdown
