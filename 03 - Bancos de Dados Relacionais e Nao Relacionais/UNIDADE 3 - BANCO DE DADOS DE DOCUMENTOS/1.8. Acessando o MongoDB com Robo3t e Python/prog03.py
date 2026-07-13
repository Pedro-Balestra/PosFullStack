import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")  # Conexão com o servidor MongoDB
db = client.pos

album = db.albuns.find_one({"nome": "Somewhere Far Beyond"})  # Consulta um documento específico na coleção "albuns"

nome= album["artista"]["nome"]

print(nome)  # Imprime o nome do artista do álbum encontrado