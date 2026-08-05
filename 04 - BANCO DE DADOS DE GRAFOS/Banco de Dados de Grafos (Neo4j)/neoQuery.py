"""
Exemplo da aula: consultar quem o Bob segue.

Roda depois do neoCreate.py, que e quem cria os nos e os relacionamentos.

Saida esperada:

    (Bob)-[follows]->(Alice)

--------------------------------------------------------------------------
DIFERENCA PARA O SLIDE
--------------------------------------------------------------------------
O slide original usa a lib `neo4jrestclient`:

    from neo4jrestclient.client import GraphDatabase
    from neo4jrestclient import client

    db = GraphDatabase("http://localhost:7474", username="neo4j", password="nosql")
    results = db.query(q, returns=(client.Node, str, client.Node))

Ela nao roda mais (lib parada desde ~2016, quebra no Python 3.10+, e fala com
a API REST que saiu do Neo4j 4.0). Ver a explicacao completa no neoCreate.py.

Aqui usamos o driver oficial `neo4j`, via Bolt (porta 7687). A consulta Cypher
e EXATAMENTE a mesma do slide; o que muda e so a forma de executar:

  - nao existe o parametro `returns=(...)`. O driver oficial ja devolve os
    tipos certos sozinho: no vira objeto Node (da pra acessar r["name"]),
    string vira str.
  - o acesso ao resultado pode ser por posicao (r[0], r[1], r[2]), como no
    slide, ou por nome da coluna (r["u"]), que e mais legivel.

--------------------------------------------------------------------------
COMO RODAR
--------------------------------------------------------------------------
    pip install neo4j
    python neoQuery.py
"""

import gc

from neo4j import GraphDatabase

db = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "P@ssw0rd"))
session = db.session()

# Mesma query do slide: a partir do Bob, quem ele segue.
q = 'MATCH (u:Usuario)-[r:follows]->(m:Usuario) WHERE u.name="Bob" RETURN u, type(r), m'

results = session.run(q)

for r in results:
    print("(%s)-[%s]->(%s)" % (r[0]["name"], r[1], r[2]["name"]))

# The output:
# (Bob)-[follows]->(Alice)

session.close()
db.close()

# Fechar nao basta: enquanto estas variaveis existirem, o objeto de conexao
# continua vivo e so seria descartado durante o desligamento do interpretador,
# quando os modulos ja sairam - e o destrutor do driver falha com
# "sys.meta_path is None". O script funciona do mesmo jeito, mas suja a saida
# com um traceback. Soltando as referencias e coletando aqui, o descarte
# acontece enquanto tudo ainda esta vivo.
del results, session, db
gc.collect()
