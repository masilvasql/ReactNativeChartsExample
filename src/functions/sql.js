import { SQLite } from 'expo'

const db = SQLite.openDatabase('db.db');

export function criaBancoDeDados() {
    db.transaction(tx => {
        //tx.executeSql('DROP TABLE pedidos')
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS pedidos(
                idPedido INTEGER,
                dataPedido TEXT,
                codigoItem INTEGER,
                descItem TEXT,
                qtdeItem NUMERIC(12,4),
                valorItem NUMERIC(12,4),
                valorVendaItem NUMERIC(12,4),
                valorDesconto NUMERIC(12,4),
                valorProgramado NUMERIC(12,4)
            )
        `)
    })
}

export function adicionaPedido(idPedido, dataPedido, codigoItem, descItem, qtdeItem, valorItem, valorVendaItem, valorDesconto) {
  
    db.transaction(tx => {
        tx.executeSql(`
            INSERT INTO pedidos
            (
                idPedido ,
                dataPedido ,
                codigoItem ,
                descItem, 
                qtdeItem ,
                valorItem ,
                valorVendaItem ,
                valorDesconto,
                valorProgramado 
            )VALUES(?,?,?,?,?,?,?,?,?)`,
            [idPedido, dataPedido, codigoItem, descItem, qtdeItem, valorItem, valorVendaItem, valorDesconto, Math.floor(Math.random() * 50) ], (err, data) => {

            })
    })
}

export function buscaPedido() {
    return new Promise(result => {
        db.transaction(tx => {
            tx.executeSql(`
                SELECT 
                    
                    descItem, 
                    qtdeItem,
                    valorProgramado 
                    
                FROM 
                    pedidos`,[],(err,data)=>{
                if(data.rows.length > 0){
                    result(data.rows._array)
                }
            })
        })
    })
}