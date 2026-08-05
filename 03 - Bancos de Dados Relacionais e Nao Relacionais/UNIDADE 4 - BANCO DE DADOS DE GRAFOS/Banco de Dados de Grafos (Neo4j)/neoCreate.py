"""
Exemplo da aula: criar usuarios e relacionamentos "follows" no Neo4j.

Grafo resultante:

    Ana --follows--> Bob --follows--> Alice --follows--> Lea
                                            --follows--> Joel

--------------------------------------------------------------------------
POR QUE NAO USAMOS A LIB DO SLIDE (neo4jrestclient)
--------------------------------------------------------------------------
O slide original usa:

    from neo4jrestclient.client import GraphDatabase
    db = GraphDatabase("http://localhost:7474", username=..., password=...)
    u1 = db.nodes.create(name="Bob")
    u1.relationships.create("follows", u2)

Isso nao roda mais, por dois motivos:

1. A lib `neo4jrestclient` esta parada desde ~2016 e faz
   `from collections import Sequence`. A partir do Python 3.10 essas classes
   sairam de `collections` (so existem em `collections.abc`), entao o import
   quebra com ImportError logo na primeira linha.

2. Ela conversa com a API REST do Neo4j (porta 7474), que foi REMOVIDA do
   servidor a partir do Neo4j 4.0. Mesmo consertando o import, nao haveria
   com o que falar.

A substituicao e o driver oficial `neo4j`, que usa o protocolo Bolt
(porta 7687) e envia Cypher. As funcoes create_node/create_relationship
abaixo existem so para imitar o `db.nodes.create()` / `.relationships.create()`
do slide, mantendo o resto do script na mesma ordem do material da aula.

--------------------------------------------------------------------------
COMO RODAR
--------------------------------------------------------------------------
    pip install neo4j
    python neoCreate.py

Pre-requisito: Neo4j no ar em bolt://localhost:7687 com a senha abaixo.
A porta 7474 continua existindo, mas e a do Neo4j Browser (interface web),
nao a de conexao do driver.

Obs. de instalacao: se aparecer um ImportError estranho vindo de dentro do
proprio pacote (ex.: "cannot import name 'pa' from 'neo4j._optional_deps'"),
e sinal de instalacao antiga sobreposta em site-packages. Resolve com:

    pip uninstall -y neo4j
    # apagar a pasta site-packages/neo4j que sobrar
    pip install "neo4j==5.28.*"
"""

import gc

from neo4j import GraphDatabase

# O driver so guarda a configuracao da conexao; a session e quem executa.
db = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "P@ssw0rd"))
session = db.session()


def create_node(label, name):
    """Equivalente ao db.nodes.create(name=...) do slide.

    CREATE monta o no, RETURN devolve ele para que possamos guardar em u1..u5.
    O label vai por f-string porque Cypher nao aceita label parametrizado;
    ja o `name` vai como parametro ($name) para evitar injecao.
    """
    return session.run(
        f"CREATE (n:{label} {{name: $name}}) RETURN n", name=name
    ).single()["n"]


def create_relationship(node_a, tipo, node_b):
    """Equivalente ao node_a.relationships.create(tipo, node_b) do slide.

    Reencontra os dois nos pelo id interno que o Neo4j atribuiu na criacao
    e cria a seta a -> b.
    """
    session.run(
        f"MATCH (a), (b) WHERE elementId(a) = $a AND elementId(b) = $b "
        f"CREATE (a)-[:{tipo}]->(b)",
        a=node_a.element_id,
        b=node_b.element_id,
    )


# Create some nodes with labels
# (no slide o label vinha de db.labels.create("Usuario"); aqui ele ja vai
#  junto no CREATE de cada no)
u1 = create_node("Usuario", "Bob")
u2 = create_node("Usuario", "Alice")
u3 = create_node("Usuario", "Lea")
u4 = create_node("Usuario", "Ana")
u5 = create_node("Usuario", "Joel")

create_relationship(u1, "follows", u2)  # Bob   -> Alice
create_relationship(u4, "follows", u1)  # Ana   -> Bob
create_relationship(u2, "follows", u3)  # Alice -> Lea
create_relationship(u2, "follows", u5)  # Alice -> Joel

# Atencao: este script usa CREATE (igual ao slide), entao rodar duas vezes
# duplica os nos. Para limpar tudo antes de repetir, execute no Neo4j Browser:
#     MATCH (n) DETACH DELETE n

session.close()
db.close()

# Fechar nao basta: enquanto estas variaveis existirem, o objeto de conexao
# continua vivo e so seria descartado durante o desligamento do interpretador,
# quando os modulos ja sairam - e o destrutor do driver falha com
# "sys.meta_path is None". O script funciona do mesmo jeito, mas suja a saida
# com um traceback. Soltando as referencias e coletando aqui, o descarte
# acontece enquanto tudo ainda esta vivo.
del u1, u2, u3, u4, u5, session, db
gc.collect()
