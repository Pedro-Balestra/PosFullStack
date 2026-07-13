import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")  # Conexão com o servidor MongoDB
db = client.pos

albuns = db.albuns.find()  # Consulta todos os documentos na coleção "albuns"

file = open("C:\\Pos\\03 - Bancos de Dados Relacionais e Nao Relacionais\\UNIDADE 3 - BANCO DE DADOS DE DOCUMENTOS\\1.8. Acessando o MongoDB com Robo3t e Python\\albuns.txt", "a")  # Abre o arquivo para escrita (modo append)

for item in albuns:
    nome = item["nome"]
    file.write(f"Nome do album: {nome}\n")  # Escreve o nome do álbum no arquivo

file.close()  # Fecha o arquivoNome do �lbum: Master of Puppets

