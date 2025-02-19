 use greenworld;
 
 SELECT * FROM Users;
 
 delete from Users where idUser < 9

      idUser1 INT NOT NULL,
    FOREIGN KEY (idUser1) REFERENCES Users(idUser) ON DELETE CASCADE



 describe lixoamontoado;
 
 alter table lixoamontoado add column foto varchar(255);
 
 alter table lixoamontoado modify column primeira_emissao datetime default current_timestamp;

