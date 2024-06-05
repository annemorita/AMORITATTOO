CREATE DATABASE amoritattoo;
USE amoritattoo;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    genero VARCHAR(45));
    
    create table quiz (
idquiz int primary key auto_increment,
data date
)auto_increment=10;

CREATE TABLE resultado (
idresultado int primary key auto_increment,
fkusuario int,
foreign key (fkusuario) references usuario(id),
fkquiz int,
foreign key (fkquiz) references quiz(idquiz),
data DATETIME,
acertos int
)auto_increment=100;




    ALTER TABLE usuario
ADD CONSTRAINT chk_genero CHECK (genero IN ('feminino', 'masculino', 'outros'));

select*from resultado;
select*from usuario;
select*from quiz;




