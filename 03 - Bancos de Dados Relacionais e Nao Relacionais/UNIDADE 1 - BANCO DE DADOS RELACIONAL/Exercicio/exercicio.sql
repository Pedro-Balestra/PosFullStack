-- 1
select f.nomfilme, g.desgenero from Filme f, Genero g where f.codgenero=g.codgenero and f.statusfilme='D'

-- 2
select f.nomfilme, l.codfilme, l.datalocacao, l.datadevolucao from Filme f, Locacao l where f.codfilme=l.codfilme and l.datadevolucao is null

-- 3
select f.nomfilme, f.codfilme, p.valor from Filme f, Preco p, Genero g where f.cor=p.cor and f.codgenero=g.codgenero and upper(g.desgenero)='ACAO'
-- 4
select l.codfilme, f.nomfilme, c.codcliente, c.nomcliente
from Locacao l, Filme f, Cliente c, Genero g
where l.codfilme = f.codfilme
and g.codgenero = f.codgenero
and l.codcliente = c.codcliente
and g.desgenero = 'Comedia'
and UPPER(estado) = 'MG'

-- 5
select codfilme, nomfilme
from Filme where UPPER(Cor) = ( select UPPER(Cor) from Filme where codfilme = 102)

-- 6
select nomcliente, codcliente
from Cliente
where upper(Estado) in ( select distinct upper(c.estado)
from Locacao l, Cliente c
where l.codcliente = c.codcliente
and l.datalocacao between '04/01/2026' and '01/01/2026') -- MM/DD/YYYY

-- 7
select c.codcliente, c.nomcliente, count(l.codcliente) as qtde
from Cliente c, Locacao l
where c.codcliente = l.codcliente
group by c.codcliente, c.nomcliente
having count(l.codcliente) > ( select count(codcliente)
from Locacao
where codcliente = 100)

-- 8
select codfilme, nomfilme from Filme where cor in
(select cor from Filme where codgenero = ( select codgenero
from Genero where upper(desgenero) = 'TERROR' ))