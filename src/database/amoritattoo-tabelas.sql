CREATE DATABASE amoritattoo;
USE amoritattoo;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    genero VARCHAR(45));

CREATE TABLE quiz (
idquiz int primary key auto_increment,
fkusuario int,
foreign key (fkusuario) references usuario(id),
fktatuagem int,
foreign key (fktatuagem) references tatuagem(idtatuagem),
data DATETIME)auto_increment=100;

CREATE TABLE tatuagem (
idtatuagem INT primary key auto_increment,
tipo varchar(800),
motivo varchar(45),
local_do_corpo varchar(45)
)auto_increment=10;


ALTER TABLE tatuagem
ADD CONSTRAINT chk_local_do_corpo CHECK (local_do_corpo IN ('braço', 'perna', 'peito', 'costas', 'barriga', 'coxa'));

ALTER TABLE tatuagem
ADD CONSTRAINT chk_motivo CHECK (motivo IN ('Expressão artística', 'Moda e auto estima', 'Gosto da cultura japonesa', 'Outro'));

    ALTER TABLE usuario
ADD CONSTRAINT chk_genero CHECK (genero IN ('feminino', 'masculino', 'outros'));

select*from tatuagem;
select*from usuario;
select*from quiz;


