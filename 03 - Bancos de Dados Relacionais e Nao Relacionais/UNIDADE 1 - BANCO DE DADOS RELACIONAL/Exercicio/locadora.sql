DROP TABLE Locacao CASCADE CONSTRAINTS;
DROP TABLE Filme CASCADE CONSTRAINTS;
DROP TABLE Cliente CASCADE CONSTRAINTS;
DROP TABLE Preco CASCADE CONSTRAINTS;
DROP TABLE Genero CASCADE CONSTRAINTS;

CREATE TABLE Cliente
(
   CodCliente NUMBER(10) NOT NULL,
   NomCliente VARCHAR2(50) NOT NULL,
   EndCliente VARCHAR2(80),
   CidCliente VARCHAR2(20),
   Bairro VARCHAR2(20),
   Estado CHAR(2),

   CONSTRAINT PK_CLIENTE
      PRIMARY KEY (CodCliente)
);


CREATE TABLE Preco
(
   Cor CHAR(2) NOT NULL,
   Valor NUMBER(10,2) NOT NULL,

   CONSTRAINT PK_PRECO
      PRIMARY KEY (Cor)
);

CREATE TABLE Genero
(
   CodGenero NUMBER(3) NOT NULL,
   DesGenero VARCHAR2(20) NOT NULL,

   CONSTRAINT PK_GENERO
      PRIMARY KEY (CodGenero)
);

CREATE TABLE Filme
(
   CodFilme NUMBER(3) NOT NULL,
   NomFilme VARCHAR2(50) NOT NULL,
   Cor CHAR(2) NOT NULL,
   StatusFilme CHAR(1) NOT NULL,
   CodGenero NUMBER(3) NOT NULL,

   CONSTRAINT PK_FILME
      PRIMARY KEY (CodFilme)
);

CREATE TABLE Locacao
(
   DataLocacao DATE NOT NULL,
   CodCliente NUMBER(10) NOT NULL,
   CodFilme NUMBER(3) NOT NULL,
   DataDevolucao DATE,

   CONSTRAINT PK_LOCACAO
      PRIMARY KEY (CodCliente, DataLocacao, CodFilme)
);

ALTER TABLE Filme
ADD CONSTRAINT FK_FILME_GENERO
FOREIGN KEY (CodGenero)
REFERENCES Genero (CodGenero);

ALTER TABLE Filme
ADD CONSTRAINT FK_FILME_PRECO
FOREIGN KEY (Cor)
REFERENCES Preco (Cor);

ALTER TABLE Locacao
ADD CONSTRAINT FK_LOCACAO_CLIENTE
FOREIGN KEY (CodCliente)
REFERENCES Cliente (CodCliente);

ALTER TABLE Locacao
ADD CONSTRAINT FK_LOCACAO_FILME
FOREIGN KEY (CodFilme)
REFERENCES Filme (CodFilme);

INSERT INTO Preco VALUES ('CO', 10.00);
INSERT INTO Preco VALUES ('PB', 7.50);
INSERT INTO Preco VALUES ('3D', 15.00);
INSERT INTO Preco VALUES ('4K', 20.00);
INSERT INTO Preco VALUES ('HD', 12.50);

INSERT INTO Genero VALUES (1, 'Acao');
INSERT INTO Genero VALUES (2, 'Comedia');
INSERT INTO Genero VALUES (3, 'Drama');
INSERT INTO Genero VALUES (4, 'Terror');
INSERT INTO Genero VALUES (5, 'Romance');

INSERT INTO Filme VALUES (101, 'Matrix',     'CO', 'D', 1);
INSERT INTO Filme VALUES (102, 'Toy Story',  'HD', 'D', 2);
INSERT INTO Filme VALUES (103, 'Titanic',    'PB', 'L', 5);
INSERT INTO Filme VALUES (104, 'Invocacao',  '4K', 'D', 4);
INSERT INTO Filme VALUES (105, 'Vingadores', '3D', 'L', 1);

INSERT INTO Cliente
VALUES (1, 'Pedro Balestra', 'Rua A', 'Pouso Alegre', 'Centro', 'MG');

INSERT INTO Cliente
VALUES (2, 'Maria Silva', 'Rua B', 'Belo Horizonte', 'Savassi', 'MG');

INSERT INTO Cliente
VALUES (3, 'Joao Souza', 'Rua C', 'Itajuba', 'Centro', 'MG');

INSERT INTO Cliente
VALUES (4, 'Ana Paula', 'Rua D', 'Varginha', 'Jardim', 'MG');

INSERT INTO Cliente
VALUES (5, 'Carlos Lima', 'Rua E', 'Extrema', 'Industrial', 'MG');

INSERT INTO Locacao
VALUES (
   TO_DATE('01/05/2026','DD/MM/YYYY'),
   1,
   101,
   TO_DATE('05/05/2026','DD/MM/YYYY')
);

INSERT INTO Locacao
VALUES (
   TO_DATE('03/05/2026','DD/MM/YYYY'),
   2,
   102,
   TO_DATE('07/05/2026','DD/MM/YYYY')
);

INSERT INTO Locacao
VALUES (
   TO_DATE('04/05/2026','DD/MM/YYYY'),
   3,
   103,
   NULL
);

INSERT INTO Locacao
VALUES (
   TO_DATE('05/05/2026','DD/MM/YYYY'),
   4,
   104,
   TO_DATE('10/05/2026','DD/MM/YYYY')
);

INSERT INTO Locacao
VALUES (
   TO_DATE('06/05/2026','DD/MM/YYYY'),
   5,
   105,
   NULL
);