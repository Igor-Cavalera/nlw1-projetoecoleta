//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto de banco de dados
//fazendo operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db 
//ultilizando o objeto de banco de dados, para nossas operações
//db.serialize(() => {


    // 1 - Criar uma tabela
    //db.run(`
    //    CREATE TABLE IF NOT EXISTS places (
    //        id INTEGER PRIMARY KEY AUTOINCREMENT, 
    //       image TEXT, 
    //        name TEXT,
    //        address TEXT,
    //        address2 TEXT,
    //        state TEXT,
    //        city,
    //        items TEXT
    //    );
    //`)

    // 2 - Inserir dados na Tabela
    //const query = `
    //    INSERT INTO places (
    //    image,
    //    name,
    //    address,
    //    address2,
    //    state,
    //    city,
    //    items
    //) VALUES (?,?,?,?,?,?,?);
    //`
    //const values = [
    //    "https://cdn.pixabay.com/photo/2016/11/23/15/49/bundle-1853667_960_720.jpg",
    //    "Papersider",
    //    "Guilherme Gemballa, Jardim América",
    //    "Número 423",
    //    "Santa Catarina",
    //    "Rio do Sul",
    //    "Papéis, Papelão"
    //]

    //function afterInsertData(err) {
     //  if(err) {
     //       return console.log(err)
     //   } 

     //   console.log("Cadastrado com sucesso")
     //   console.log(this)
    //}

    //db.run(query, values, afterInsertData)

    // 3 - Consultar dados na tabela 
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)  
        }

        console.log("Aqui estão seus registros:")
        console.log(rows)
    })
    
    //4 - Deletar um dado da tabela
    //db.run(`DELETE FROM places WHERE id = ?`, [2], function(err){
    //if(err){
    //    return console.log(err)
    //}

    //console.log("Registro deletado com sucesso!")

    //})
    


//})