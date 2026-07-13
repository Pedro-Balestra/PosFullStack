import pymongo
import json

client = pymongo.MongoClient("mongodb://localhost:27017/")  # Conexão com o servidor MongoDB
db = client.pos

json_string = '{"nome": "Somewhere Far Beyond", "dataLancamento": "1992-05-30", "duracao": "3328", "artista": {"nome": "Blind Guardian"}}'  # String JSON representando um documento
album = json.loads(json_string)  # Converte a string JSON em um dicionário Python

db.albuns.insert_one(album)  # Insere o documento na coleção "albuns" do banco de dados "pos"